/* ============================================================
   DA40 NG OLB — FlySmart-Style Offline EFB & eQRH Engine
   IndexedDB + LocalStorage Persistence • Zero External Deps
   ============================================================ */

(() => {
  'use strict';

  // ---- DATA REGISTRY ----
  const AFM_CHAPTERS = [
    ...(window.AFM_CH1_CH2 || []),
    ...(window.AFM_CH5_CH9 || [])
  ];
  const EQRH_EMERGENCY = window.EQRH_EMERGENCY || [];
  const EQRH_ABNORMAL  = window.EQRH_ABNORMAL  || [];
  const EQRH_NORMAL    = window.EQRH_NORMAL    || [];
  const GLOSSARY       = window.OLB_GLOSSARY   || {};

  // Build quick lookup maps
  const UNIT_MAP = new Map();
  AFM_CHAPTERS.forEach(ch => {
    ch.units.forEach(u => {
      UNIT_MAP.set(u.id, { kind: 'afm', chapter: ch, unit: u });
    });
  });
  EQRH_EMERGENCY.forEach(p => UNIT_MAP.set(p.id, { kind: 'eqrh', cat: 'EMERGENCY', proc: p }));
  EQRH_ABNORMAL.forEach(p  => UNIT_MAP.set(p.id, { kind: 'eqrh', cat: 'ABNORMAL',  proc: p }));
  EQRH_NORMAL.forEach(p    => UNIT_MAP.set(p.id, { kind: 'sop',  cat: 'NORMAL',    proc: p }));

  // ---- STORAGE (IndexedDB primary + localStorage mirror) ----
  const DB_NAME = 'DA40NG_OLB_DB';
  const STORE_KEY = 'olb_state_v1';
  let idb = null;

  function openIDB() {
    return new Promise((resolve) => {
      if (!window.indexedDB) return resolve(null);
      const req = indexedDB.open(DB_NAME, 1);
      req.onupgradeneeded = (e) => {
        const db = e.target.result;
        if (!db.objectStoreNames.contains('kv')) db.createObjectStore('kv');
      };
      req.onsuccess = (e) => { idb = e.target.result; resolve(idb); };
      req.onerror = () => resolve(null);
    });
  }

  function idbGet(key) {
    return new Promise((resolve) => {
      if (!idb) return resolve(null);
      try {
        const tx = idb.transaction('kv', 'readonly');
        const req = tx.objectStore('kv').get(key);
        req.onsuccess = () => resolve(req.result || null);
        req.onerror = () => resolve(null);
      } catch { resolve(null); }
    });
  }

  function idbSet(key, val) {
    try { localStorage.setItem(key, JSON.stringify(val)); } catch {}
    if (!idb) return;
    try {
      const tx = idb.transaction('kv', 'readwrite');
      tx.objectStore('kv').put(val, key);
    } catch {}
  }

  // ---- APPLICATION STATE ----
  const defaultState = {
    lang: 'en',          // 'en' | 'ru' (document content only; UI stays English)
    theme: 'night',      // 'night' | 'day'
    activeLayer: 0,      // 0, 1, 2
    markerColor: 'off',  // 'off' | 'yellow' | 'green' | 'red' | 'clear'
    layers: [
      { module: 'afm',  itemId: 'du-2-2',  history: ['du-2-2'],  histIdx: 0, scroll: 0 },
      { module: 'eqrh', itemId: 'em-334',  history: ['em-334'],  histIdx: 0, scroll: 0 },
      { module: 'sop',  itemId: 'nm-4a56', history: ['nm-4a56'], histIdx: 0, scroll: 0 }
    ],
    favorites: ['du-2-2', 'du-2-4', 'em-334'],
    notes: {},           // { [itemId]: string }
    highlights: {},      // { [itemId + '::' + blockKey]: 'yellow'|'green'|'red' }
    qrhChecks: {},       // { [procId + '::' + stepId]: true }
    qrhBranches: {},     // { [procId + '::' + branchId]: optionId }
    deferred: []         // [{ procId, stepId, code, labelEn, labelRu }]
  };

  let state = structuredClone ? structuredClone(defaultState) : JSON.parse(JSON.stringify(defaultState));

  function saveState() {
    idbSet(STORE_KEY, state);
  }

  function curLayer() {
    return state.layers[state.activeLayer];
  }

  // ---- DOM REFERENCES ----
  const $ = (id) => document.getElementById(id);
  const elSidebar = $('sidebar');
  const elBackdrop = $('sidebarBackdrop');
  const elSidebarTree = $('sidebarTree');
  const elSidebarFilter = $('sidebarFilter');
  const elReaderPane = $('readerPane');
  const elReader = $('readerContent');
  const elCrumbs = $('breadcrumbs');
  const elTopTitle = $('topDocTitle');
  const elGlossaryPop = $('glossaryPop');

  // ---- HELPERS ----
  function escHtml(s) {
    return String(s ?? '')
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  function t(obj) {
    if (!obj) return '';
    if (typeof obj === 'string') return obj;
    return obj[state.lang] || obj.en || obj.ru || '';
  }

  const ABBR_KEYS = Object.keys(GLOSSARY).sort((a, b) => b.length - a.length);
  const ABBR_REGEX = ABBR_KEYS.length
    ? new RegExp('\\b(' + ABBR_KEYS.map(k => k.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|') + ')\\b', 'g')
    : null;

  function linkifyAbbr(str) {
    const safe = escHtml(str);
    if (!ABBR_REGEX) return safe;
    return safe.replace(ABBR_REGEX, (m) => `<span class="abbr-term" data-abbr="${m}">${m}</span>`);
  }

  function formatCell(raw) {
    let cls = '';
    let txt = String(raw ?? '');
    if (txt.includes('[GREEN]')) { cls = 'cell-green'; txt = txt.replace(/\s*\[GREEN\]/g, ''); }
    else if (txt.includes('[AMBER]')) { cls = 'cell-amber'; txt = txt.replace(/\s*\[AMBER\]/g, ''); }
    else if (txt.includes('[RED]')) { cls = 'cell-red'; txt = txt.replace(/\s*\[RED\]/g, ''); }
    return { cls, html: escHtml(txt) };
  }

  // ---- NAVIGATION ----
  function navigateTo(itemId, pushHist = true) {
    const entry = UNIT_MAP.get(itemId);
    if (!entry) return;
    const L = curLayer();
    L.scroll = elReaderPane.scrollTop;
    L.module = entry.kind;
    L.itemId = itemId;
    if (pushHist) {
      L.history = L.history.slice(0, L.histIdx + 1);
      if (L.history[L.history.length - 1] !== itemId) {
        L.history.push(itemId);
        L.histIdx = L.history.length - 1;
      }
    }
    saveState();
    closeMobileSidebar();
    renderAll();
    elReaderPane.scrollTop = 0;
  }

  function switchModule(mod) {
    const L = curLayer();
    L.module = mod;
    if (mod === 'afm' && (!UNIT_MAP.get(L.itemId) || UNIT_MAP.get(L.itemId).kind !== 'afm')) {
      L.itemId = AFM_CHAPTERS[0]?.units[0]?.id || 'du-1-1';
    } else if (mod === 'eqrh' && (!UNIT_MAP.get(L.itemId) || UNIT_MAP.get(L.itemId).kind !== 'eqrh')) {
      L.itemId = EQRH_EMERGENCY[0]?.id || 'em-334';
    } else if (mod === 'sop' && (!UNIT_MAP.get(L.itemId) || UNIT_MAP.get(L.itemId).kind !== 'sop')) {
      L.itemId = EQRH_NORMAL[0]?.id || 'nm-4a4';
    }
    saveState();
    renderAll();
    elReaderPane.scrollTop = 0;
  }

  function switchLayer(idx) {
    curLayer().scroll = elReaderPane.scrollTop;
    state.activeLayer = idx;
    saveState();
    renderAll();
    elReaderPane.scrollTop = curLayer().scroll || 0;
  }

  function goBack() {
    const L = curLayer();
    if (L.histIdx > 0) {
      L.histIdx--;
      const id = L.history[L.histIdx];
      const entry = UNIT_MAP.get(id);
      if (entry) { L.module = entry.kind; L.itemId = id; }
      saveState();
      renderAll();
    }
  }

  function goForward() {
    const L = curLayer();
    if (L.histIdx < L.history.length - 1) {
      L.histIdx++;
      const id = L.history[L.histIdx];
      const entry = UNIT_MAP.get(id);
      if (entry) { L.module = entry.kind; L.itemId = id; }
      saveState();
      renderAll();
    }
  }

  // ---- RENDERING: SIDEBAR ----
  function renderSidebar() {
    const L = curLayer();
    const q = (elSidebarFilter.value || '').trim().toLowerCase();
    let html = '';

    if (L.module === 'afm') {
      $('sidebarTitle').textContent = 'AFM LIBRARY INDEX (REV. 4)';
      AFM_CHAPTERS.forEach(ch => {
        const units = ch.units.filter(u => {
          if (!q) return true;
          return (u.code + ' ' + u.title.en + ' ' + u.title.ru).toLowerCase().includes(q);
        });
        if (!units.length) return;
        html += `<div class="tree-group-hdr">${escHtml(ch.code)} — ${escHtml(t(ch.title))}</div>`;
        units.forEach(u => {
          const act = u.id === L.itemId ? 'active' : '';
          html += `<div class="tree-item ${act}" data-nav="${u.id}">
            <span class="tree-code">${escHtml(u.code)}</span>
            <span>${escHtml(t(u.title))}</span>
          </div>`;
        });
      });
    } else if (L.module === 'eqrh') {
      $('sidebarTitle').textContent = 'eQRH — EMERGENCY & ABNORMAL';
      const renderList = (title, cls, arr, casCls) => {
        const items = arr.filter(p => {
          if (!q) return true;
          return (p.code + ' ' + (p.cas || '') + ' ' + p.title.en + ' ' + p.title.ru + ' ' + p.group).toLowerCase().includes(q);
        });
        if (!items.length) return;
        html += `<div class="tree-group-hdr ${cls}">${title} (${items.length})</div>`;
        items.forEach(p => {
          const act = p.id === L.itemId ? 'active' : '';
          const casHtml = p.cas ? `<span class="cas-tag ${casCls}">${escHtml(p.cas)}</span>` : '';
          html += `<div class="tree-item ${act}" data-nav="${p.id}">
            <span class="tree-code">${escHtml(p.code)}</span>
            <span>${casHtml}${escHtml(t(p.title))}</span>
          </div>`;
        });
      };
      renderList('EMERGENCY PROCEDURES (CH. 3)', 'grp-red', EQRH_EMERGENCY, 'cas-red');
      renderList('ABNORMAL PROCEDURES (CH. 4B)', 'grp-amber', EQRH_ABNORMAL, 'cas-amber');
    } else if (L.module === 'sop') {
      $('sidebarTitle').textContent = 'NORMAL PROCEDURES / SOP (CH. 4A)';
      const items = EQRH_NORMAL.filter(p => {
        if (!q) return true;
        return (p.code + ' ' + p.title.en + ' ' + p.title.ru + ' ' + p.group).toLowerCase().includes(q);
      });
      html += `<div class="tree-group-hdr grp-green">NORMAL CHECKLISTS (${items.length})</div>`;
      items.forEach(p => {
        const act = p.id === L.itemId ? 'active' : '';
        html += `<div class="tree-item ${act}" data-nav="${p.id}">
          <span class="tree-code">${escHtml(p.code)}</span>
          <span>${escHtml(t(p.title))}</span>
        </div>`;
      });
    } else {
      $('sidebarTitle').textContent = 'EFB DATA & OFFLINE TOOLS';
      html = `<div class="tree-item active"><span>Storage, Notes Backup &amp; Cache</span></div>`;
    }

    elSidebarTree.innerHTML = html || '<div style="padding:16px;color:var(--text-muted);font-size:12px;">No matching sections.</div>';
  }

  // ---- RENDERING: BREADCRUMBS ----
  function renderBreadcrumbs() {
    const L = curLayer();
    if (L.module === 'tools') {
      elCrumbs.innerHTML = `<div class="crumb-item">DA40 NG OLB <span class="crumb-sep">›</span> DATA / BACKUP</div>`;
      return;
    }
    const entry = UNIT_MAP.get(L.itemId);
    if (!entry) return;
    const isFav = state.favorites.includes(L.itemId);
    const starCls = isFav ? 'starred' : '';
    const starChar = isFav ? '★' : '☆';

    if (entry.kind === 'afm') {
      elCrumbs.innerHTML = `
        <div class="crumb-item">AFM REV.4</div><span class="crumb-sep">›</span>
        <div class="crumb-item">${escHtml(entry.chapter.code)}</div><span class="crumb-sep">›</span>
        <div class="crumb-item">
          <button class="crumb-star ${starCls}" data-fav="${L.itemId}" title="Toggle Favorite">${starChar}</button>
          ${escHtml(entry.unit.code)} — ${escHtml(t(entry.unit.title))}
        </div>`;
    } else {
      const modLbl = entry.kind === 'eqrh' ? `eQRH ${entry.cat}` : 'NORMAL SOP';
      elCrumbs.innerHTML = `
        <div class="crumb-item">${modLbl}</div><span class="crumb-sep">›</span>
        <div class="crumb-item">${escHtml(entry.proc.group)}</div><span class="crumb-sep">›</span>
        <div class="crumb-item">
          <button class="crumb-star ${starCls}" data-fav="${L.itemId}" title="Toggle Favorite">${starChar}</button>
          ${escHtml(entry.proc.code)} — ${escHtml(t(entry.proc.title))}
        </div>`;
    }
  }

  // ---- RENDERING: AFM CONTENT ----
  function renderAfmBlock(itemId, idx, blk) {
    const hlKey = `${itemId}::${idx}`;
    const hl = state.highlights[hlKey] ? `hl-${state.highlights[hlKey]}` : '';

    if (blk.type === 'p') {
      const txt = blk.text !== undefined ? blk.text : t(blk);
      return `<p class="du-p ${hl}" data-hl="${hlKey}">${linkifyAbbr(txt)}</p>`;
    }
    if (blk.type === 'h3') {
      return `<h3 class="du-h3">${escHtml(blk.text !== undefined ? blk.text : t(blk))}</h3>`;
    }
    if (blk.type === 'h4') {
      return `<h4 class="du-h4">${escHtml(blk.text !== undefined ? blk.text : t(blk))}</h4>`;
    }
    if (blk.type === 'warning' || blk.type === 'caution' || blk.type === 'note') {
      const lbl = blk.type.toUpperCase();
      const txt = blk.text !== undefined ? blk.text : t(blk);
      return `<div class="callout callout-${blk.type} ${hl}" data-hl="${hlKey}">
        <span class="callout-lbl">${lbl}</span>
        <div>${linkifyAbbr(txt)}</div>
      </div>`;
    }
    if (blk.type === 'kv') {
      const rows = blk.rows.map((r, ri) => {
        const rk = `${hlKey}_${ri}`;
        const rhl = state.highlights[rk] ? `hl-${state.highlights[rk]}` : '';
        const { cls, html } = formatCell(t(r.v));
        return `<tr class="kv-row ${rhl}" data-hl="${rk}">
          <td class="kv-k">${escHtml(t(r.k))}</td>
          <td class="${cls}">${html}</td>
        </tr>`;
      }).join('');
      return `<table class="kv-table">${rows}</table>`;
    }
    if (blk.type === 'table') {
      const hdrs = (blk.headers[state.lang] || blk.headers.en || []).map(h => `<th>${escHtml(h)}</th>`).join('');
      const rows = blk.rows.map(row =>
        '<tr>' + row.map(c => {
          const { cls, html } = formatCell(c);
          return `<td class="${cls}">${html}</td>`;
        }).join('') + '</tr>'
      ).join('');
      return `<div class="tech-table-wrap"><table class="tech-table"><thead><tr>${hdrs}</tr></thead><tbody>${rows}</tbody></table></div>`;
    }
    if (blk.type === 'figure') {
      const cap = blk.caption ? t(blk.caption) : (blk.text || 'Diagram');
      return `<figure class="du-figure" data-zoom-src="${escHtml(blk.src)}" data-zoom-cap="${escHtml(cap)}">
        <img src="${escHtml(blk.src)}" alt="${escHtml(cap)}" loading="lazy">
        <figcaption>${escHtml(cap)}</figcaption>
      </figure>`;
    }
    return '';
  }

  function renderAfmUnit(entry) {
    const u = entry.unit;
    const blocks = u.bilingualBlocks ? (u.bilingualBlocks[state.lang] || u.bilingualBlocks.en) : u.blocks;
    const statusCls = entry.chapter.status === 'APPROVED' ? 'banner-amber' : '';
    let html = `
      <div class="du-banner ${statusCls}">
        <div class="du-banner-title">${escHtml(u.code)} — ${escHtml(t(u.title))}</div>
        <div class="du-banner-meta">DA 40 NG AFM • ${escHtml(entry.chapter.code)} • ${escHtml(entry.chapter.status)} • ${escHtml(u.rev || 'REV 4')}</div>
      </div>`;
    blocks.forEach((b, i) => { html += renderAfmBlock(u.id, i, b); });
    html += `<div class="du-end">// END OF DOCUMENTARY UNIT ${escHtml(u.code)} //</div>`;
    elReader.innerHTML = html;
  }

  // ---- RENDERING: eQRH / SOP INTERACTIVE PROCEDURE ----
  function renderQrhBlock(proc, blk, idx) {
    if (blk.type === 'warning' || blk.type === 'caution' || blk.type === 'note') {
      return `<div class="callout callout-${blk.type}">
        <span class="callout-lbl">${blk.type.toUpperCase()}</span>
        <div>${linkifyAbbr(t(blk.text))}</div>
      </div>`;
    }
    if (blk.type === 'subhead') {
      return `<div class="qrh-subhead">${escHtml(t(blk.text))}</div>`;
    }
    if (blk.type === 'memory') {
      const inner = blk.steps.map((s, si) => renderQrhStep(proc, s)).join('');
      return `<div class="memory-box">
        <div class="memory-title">■ ${escHtml(t(blk.title))}</div>
        ${inner}
      </div>`;
    }
    if (blk.type === 'step') {
      return renderQrhStep(proc, blk);
    }
    if (blk.type === 'table') {
      const hdrs = (blk.headers[state.lang] || blk.headers.en || []).map(h => `<th>${escHtml(h)}</th>`).join('');
      const rows = blk.rows.map(r => '<tr>' + r.map(c => `<td>${escHtml(c)}</td>`).join('') + '</tr>').join('');
      return `<div class="tech-table-wrap"><table class="tech-table"><thead><tr>${hdrs}</tr></thead><tbody>${rows}</tbody></table></div>`;
    }
    if (blk.type === 'link') {
      return `<button class="qrh-link-btn" data-nav="${escHtml(blk.target)}">➜ ${escHtml(t(blk.label))}</button>`;
    }
    if (blk.type === 'branch') {
      const bKey = `${proc.id}::${blk.id}`;
      const sel = state.qrhBranches[bKey] || null;
      const btns = blk.options.map(opt => {
        let cls = '';
        if (sel === opt.id) {
          cls = opt.badge === 'RED' ? 'selected-red' : opt.badge === 'GREEN' ? 'selected-green' : 'selected-amber';
        } else if (sel) {
          cls = 'dimmed';
        }
        return `<button class="branch-opt-btn ${cls}" data-branch-key="${escHtml(bKey)}" data-opt-id="${escHtml(opt.id)}">
          ${sel === opt.id ? '▶ ' : '○ '}${escHtml(t(opt.label))}
        </button>`;
      }).join('');
      let content = '';
      if (sel) {
        const chosen = blk.options.find(o => o.id === sel);
        if (chosen) {
          content = `<div class="branch-content">${chosen.items.map((sub, si) => renderQrhBlock(proc, sub, `${idx}_${si}`)).join('')}</div>`;
        }
      }
      return `<div class="branch-box">
        <div class="branch-prompt">◆ ${escHtml(t(blk.prompt))}</div>
        <div class="branch-options">${btns}</div>
        ${content}
      </div>`;
    }
    return '';
  }

  function renderQrhStep(proc, s) {
    const key = `${proc.id}::${s.id}`;
    const done = !!state.qrhChecks[key];
    const isDef = state.deferred.some(d => d.procId === proc.id && d.stepId === s.id);
    const defBtn = s.deferrable
      ? `<button class="qrh-def-btn ${isDef ? 'is-def' : ''}" data-defer-proc="${escHtml(proc.id)}" data-defer-step="${escHtml(s.id)}">${isDef ? 'DEFERRED' : '+ DEF'}</button>`
      : '';
    return `<div class="qrh-step ${done ? 'done' : ''}" data-step-key="${escHtml(key)}">
      <div class="qrh-check">✓</div>
      <div class="qrh-step-body">
        <span class="qrh-item">${escHtml(t(s.item))}</span>
        <span class="qrh-dots"></span>
        <span class="qrh-action">${escHtml(t(s.action))}</span>
      </div>
      ${defBtn}
    </div>`;
  }

  function renderQrhProc(entry) {
    const p = entry.proc;
    const bannerCls = entry.cat === 'EMERGENCY' ? 'banner-red' : entry.cat === 'ABNORMAL' ? 'banner-amber' : 'banner-green';
    const checkedCount = Object.keys(state.qrhChecks).filter(k => k.startsWith(p.id + '::') && state.qrhChecks[k]).length;
    let html = `
      <div class="du-banner ${bannerCls}">
        <div class="du-banner-title">${escHtml(p.code)} — ${escHtml(t(p.title))}</div>
        <div class="du-banner-meta">${escHtml(entry.cat)} • ${escHtml(p.group)} • ${escHtml(t(p.subtitle))}</div>
      </div>
      <div class="qrh-controls">
        <span class="qrh-prog">COMPLETED ITEMS: <strong>${checkedCount}</strong></span>
        <button class="qrh-reset-btn" data-reset-proc="${escHtml(p.id)}">↺ RESET PROCEDURE</button>
      </div>`;
    p.blocks.forEach((b, i) => { html += renderQrhBlock(p, b, i); });
    html += `<div class="du-end">// END OF CHECKLIST ${escHtml(p.code)} //</div>`;
    elReader.innerHTML = html;
  }

  // ---- RENDERING: TOOLS / BACKUP ----
  function renderTools() {
    const hlCount = Object.keys(state.highlights).length;
    const noteCount = Object.keys(state.notes).filter(k => state.notes[k]?.trim()).length;
    elReader.innerHTML = `
      <div class="du-banner">
        <div class="du-banner-title">DATA MANAGEMENT &amp; OFFLINE STATUS</div>
        <div class="du-banner-meta">DA40 NG OLB • AFM REV. 4 (31-DEC-2024) + RU SYNCED</div>
      </div>
      <div class="tools-card">
        <h3>LOCAL STORAGE SUMMARY</h3>
        <p>Favorites: <strong>${state.favorites.length}</strong> &nbsp;|&nbsp; Highlighted Blocks: <strong>${hlCount}</strong> &nbsp;|&nbsp; Notes: <strong>${noteCount}</strong> &nbsp;|&nbsp; Deferred eQRH: <strong>${state.deferred.length}</strong></p>
        <div style="display:flex;gap:8px;flex-wrap:wrap;">
          <button class="act-btn act-primary" id="btnExportBackup">EXPORT BACKUP (.JSON)</button>
          <label class="act-btn" style="display:inline-flex;align-items:center;cursor:pointer;">
            IMPORT BACKUP (.JSON)<input type="file" id="inpImportBackup" accept=".json" style="display:none;">
          </label>
          <button class="act-btn act-danger" id="btnResetAllQrh">RESET ALL eQRH CHECKS</button>
        </div>
      </div>
      <div class="tools-card">
        <h3>DOCUMENT SOURCES INCORPORATED</h3>
        <p>• Diamond DA 40 NG AFM Doc. # 6.01.15-E, Revision 4 (31-Dec-2024) — Primary English Master.<br>
           • РЛЭ DA 40 NG Ред. 3 (01-июля-2014) — Russian text aligned &amp; updated to Rev. 4.<br>
           • Interactive eQRH Emergency (Ch. 3), Abnormal (Ch. 4B) &amp; Normal SOP (Ch. 4A).<br>
           • 12 High-Resolution AFM Schematics &amp; Performance Diagrams (Offline Cached).</p>
      </div>`;

    $('btnExportBackup').onclick = () => {
      const blob = new Blob([JSON.stringify(state, null, 2)], { type: 'application/json' });
      const a = document.createElement('a');
      a.href = URL.createObjectURL(blob);
      a.download = `DA40NG-OLB-backup-${new Date().toISOString().slice(0, 10)}.json`;
      a.click();
    };
    $('inpImportBackup').onchange = (e) => {
      const f = e.target.files[0];
      if (!f) return;
      const rd = new FileReader();
      rd.onload = () => {
        try {
          const parsed = JSON.parse(rd.result);
          state = { ...defaultState, ...parsed };
          saveState();
          renderAll();
          alert('Backup restored successfully.');
        } catch { alert('Invalid backup JSON file.'); }
      };
      rd.readAsText(f);
    };
    $('btnResetAllQrh').onclick = () => {
      state.qrhChecks = {};
      state.qrhBranches = {};
      state.deferred = [];
      saveState();
      renderAll();
    };
  }

  // ---- MASTER RENDER ----
  function renderAll() {
    document.documentElement.setAttribute('data-theme', state.theme);
    $('btnTheme').textContent = state.theme === 'night' ? '☀ DAY' : '☾ NIGHT';

    document.querySelectorAll('#langSwitch .seg-btn').forEach(b => {
      b.classList.toggle('active', b.dataset.lang === state.lang);
    });
    document.querySelectorAll('#layerTabs .layer-tab').forEach(b => {
      b.classList.toggle('active', Number(b.dataset.layer) === state.activeLayer);
    });
    document.querySelectorAll('.dock-btn').forEach(b => {
      b.classList.toggle('active', b.dataset.module === curLayer().module);
    });
    document.querySelectorAll('#markerBar [data-color]').forEach(b => {
      b.classList.toggle('active', b.dataset.color === state.markerColor);
    });
    elReaderPane.classList.toggle('marker-active', state.markerColor !== 'off');

    const L = curLayer();
    $('btnBack').disabled = L.histIdx <= 0;
    $('btnFwd').disabled  = L.histIdx >= L.history.length - 1;
    $('favCount').textContent = state.favorites.length;
    $('defCount').textContent = state.deferred.length;
    $('btnDeferred').classList.toggle('has-items', state.deferred.length > 0);
    const hasNote = !!(state.notes[L.itemId] && state.notes[L.itemId].trim());
    $('noteCount').textContent = hasNote ? '1' : '0';

    elTopTitle.textContent = L.module === 'eqrh'
      ? 'DA40 NG eQRH — EMERGENCY / ABNORMAL'
      : L.module === 'sop'
      ? 'DA40 NG NORMAL SOP — AFM CH. 4A'
      : 'DA40 NG AFM — REV 4 — 31-DEC-2024';

    renderSidebar();
    renderBreadcrumbs();

    if (L.module === 'tools') {
      renderTools();
    } else {
      const entry = UNIT_MAP.get(L.itemId);
      if (!entry) return;
      if (entry.kind === 'afm') renderAfmUnit(entry);
      else renderQrhProc(entry);
    }
  }

  // ---- GLOBAL SEARCH (EN + RU) ----
  function runGlobalSearch(query) {
    const q = query.trim().toLowerCase();
    const box = $('searchResults');
    if (q.length < 2) {
      box.innerHTML = '<div style="color:var(--text-muted);font-size:12.5px;">Type at least 2 characters to search AFM &amp; eQRH in English or Russian.</div>';
      return;
    }
    const hits = [];
    UNIT_MAP.forEach((entry, id) => {
      const blob = JSON.stringify(entry.kind === 'afm' ? entry.unit : entry.proc).toLowerCase();
      if (blob.includes(q)) {
        const title = entry.kind === 'afm'
          ? `${entry.chapter.code} • ${entry.unit.code} — ${t(entry.unit.title)}`
          : `eQRH ${entry.cat} • ${entry.proc.code} — ${t(entry.proc.title)}`;
        const cas = entry.proc?.cas ? `[${entry.proc.cas}] ` : '';
        hits.push({ id, title: cas + title, kind: entry.kind });
      }
    });
    if (!hits.length) {
      box.innerHTML = '<div style="color:var(--text-muted);">No matches found.</div>';
      return;
    }
    box.innerHTML = hits.slice(0, 40).map(h => `
      <div class="search-res-item" data-search-nav="${escHtml(h.id)}">
        <div class="search-res-title">${escHtml(h.title)}</div>
        <div class="search-res-snip">Tap to open in Layer ${state.activeLayer + 1}</div>
      </div>`).join('');
  }

  // ---- MODALS & POPOVERS ----
  function openModal(id) { $(id).classList.remove('hidden'); }
  function closeModal(id) { $(id).classList.add('hidden'); }

  function closeMobileSidebar() {
    elSidebar.classList.remove('open-mobile');
    elBackdrop.classList.remove('visible');
  }

  function showGlossary(abbr, targetEl) {
    const def = GLOSSARY[abbr];
    if (!def) return;
    elGlossaryPop.innerHTML = `<strong>${escHtml(abbr)}</strong>${escHtml(t(def))}`;
    elGlossaryPop.classList.remove('hidden');
    const r = targetEl.getBoundingClientRect();
    const top = Math.min(window.innerHeight - 130, r.bottom + 8);
    const left = Math.min(window.innerWidth - 350, Math.max(10, r.left));
    elGlossaryPop.style.top = `${top}px`;
    elGlossaryPop.style.left = `${left}px`;
  }

  let imgZoom = 100;
  function openDiagram(src, cap) {
    imgZoom = 100;
    $('imgModalTitle').textContent = cap || 'DIAGRAM';
    $('imgModalEl').src = src;
    $('imgModalEl').style.width = '100%';
    $('btnZoomReset').textContent = '100%';
    openModal('imgModal');
  }

  // ---- EVENT LISTENERS ----
  $('btnIndex').onclick = () => {
    if (window.innerWidth <= 900) {
      elSidebar.classList.toggle('open-mobile');
      elBackdrop.classList.toggle('visible');
    } else {
      elSidebar.classList.toggle('collapsed');
    }
  };
  $('btnCloseSidebar').onclick = closeMobileSidebar;
  elBackdrop.onclick = closeMobileSidebar;

  $('btnBack').onclick = goBack;
  $('btnFwd').onclick = goForward;

  $('btnTheme').onclick = () => {
    state.theme = state.theme === 'night' ? 'day' : 'night';
    saveState();
    renderAll();
  };

  $('langSwitch').onclick = (e) => {
    const btn = e.target.closest('[data-lang]');
    if (!btn) return;
    state.lang = btn.dataset.lang;
    saveState();
    renderAll();
  };

  $('layerTabs').onclick = (e) => {
    const btn = e.target.closest('[data-layer]');
    if (!btn) return;
    switchLayer(Number(btn.dataset.layer));
  };

  $('markerBar').onclick = (e) => {
    const btn = e.target.closest('[data-color]');
    if (!btn) return;
    state.markerColor = btn.dataset.color;
    saveState();
    renderAll();
  };

  document.querySelectorAll('.dock-btn').forEach(b => {
    b.onclick = () => switchModule(b.dataset.module);
  });

  elSidebarFilter.oninput = renderSidebar;

  elSidebarTree.onclick = (e) => {
    const item = e.target.closest('[data-nav]');
    if (item) navigateTo(item.dataset.nav);
  };

  elCrumbs.onclick = (e) => {
    const star = e.target.closest('[data-fav]');
    if (!star) return;
    const id = star.dataset.fav;
    const i = state.favorites.indexOf(id);
    if (i >= 0) state.favorites.splice(i, 1);
    else state.favorites.push(id);
    saveState();
    renderAll();
  };

  // Reader Pane Delegated Events (eQRH steps, branches, links, highlighter, glossary, zoom)
  elReader.onclick = (e) => {
    elGlossaryPop.classList.add('hidden');

    // Glossary term tap
    const abbrEl = e.target.closest('.abbr-term');
    if (abbrEl && state.markerColor === 'off') {
      e.stopPropagation();
      showGlossary(abbrEl.dataset.abbr, abbrEl);
      return;
    }

    // Diagram tap to zoom
    const fig = e.target.closest('.du-figure');
    if (fig) {
      openDiagram(fig.dataset.zoomSrc, fig.dataset.zoomCap);
      return;
    }

    // Cross-link button
    const navBtn = e.target.closest('[data-nav]');
    if (navBtn) {
      navigateTo(navBtn.dataset.nav);
      return;
    }

    // Reset single eQRH procedure
    const rstBtn = e.target.closest('[data-reset-proc]');
    if (rstBtn) {
      const pid = rstBtn.dataset.resetProc;
      Object.keys(state.qrhChecks).forEach(k => { if (k.startsWith(pid + '::')) delete state.qrhChecks[k]; });
      Object.keys(state.qrhBranches).forEach(k => { if (k.startsWith(pid + '::')) delete state.qrhBranches[k]; });
      state.deferred = state.deferred.filter(d => d.procId !== pid);
      saveState();
      renderAll();
      return;
    }

    // Defer item button
    const defBtn = e.target.closest('[data-defer-proc]');
    if (defBtn) {
      e.stopPropagation();
      const procId = defBtn.dataset.deferProc;
      const stepId = defBtn.dataset.deferStep;
      const idx = state.deferred.findIndex(d => d.procId === procId && d.stepId === stepId);
      if (idx >= 0) {
        state.deferred.splice(idx, 1);
      } else {
        const entry = UNIT_MAP.get(procId);
        const proc = entry?.proc;
        // Find step text recursively
        let found = null;
        const scan = (arr) => {
          for (const b of arr || []) {
            if (b.type === 'step' && b.id === stepId) found = b;
            if (b.steps) scan(b.steps);
            if (b.options) b.options.forEach(o => scan(o.items));
          }
        };
        scan(proc?.blocks);
        state.deferred.push({
          procId, stepId,
          code: proc?.code || '',
          labelEn: found ? `${found.item.en} — ${found.action.en}` : stepId,
          labelRu: found ? `${found.item.ru} — ${found.action.ru}` : stepId
        });
      }
      saveState();
      renderAll();
      return;
    }

    // Branch selection button
    const brBtn = e.target.closest('[data-branch-key]');
    if (brBtn) {
      const bk = brBtn.dataset.branchKey;
      const oid = brBtn.dataset.optId;
      state.qrhBranches[bk] = state.qrhBranches[bk] === oid ? null : oid;
      saveState();
      renderAll();
      return;
    }

    // eQRH step checkbox toggle
    const stepEl = e.target.closest('[data-step-key]');
    if (stepEl) {
      const sk = stepEl.dataset.stepKey;
      state.qrhChecks[sk] = !state.qrhChecks[sk];
      saveState();
      renderAll();
      return;
    }

    // Highlighter mode tap on AFM block
    if (state.markerColor !== 'off') {
      const hlEl = e.target.closest('[data-hl]');
      if (hlEl) {
        const key = hlEl.dataset.hl;
        if (state.markerColor === 'clear') delete state.highlights[key];
        else state.highlights[key] = state.markerColor;
        saveState();
        renderAll();
      }
    }
  };

  document.addEventListener('click', (e) => {
    if (!e.target.closest('.abbr-term') && !e.target.closest('#glossaryPop')) {
      elGlossaryPop.classList.add('hidden');
    }
  });

  // Search Modal
  $('btnSearch').onclick = () => {
    openModal('searchModal');
    setTimeout(() => $('globalSearchInput').focus(), 60);
    runGlobalSearch($('globalSearchInput').value);
  };
  $('globalSearchInput').oninput = (e) => runGlobalSearch(e.target.value);
  $('searchResults').onclick = (e) => {
    const r = e.target.closest('[data-search-nav]');
    if (r) { closeModal('searchModal'); navigateTo(r.dataset.searchNav); }
  };

  // Favorites Modal
  $('btnFavList').onclick = () => {
    const body = $('favModalBody');
    if (!state.favorites.length) {
      body.innerHTML = '<div style="color:var(--text-muted);">No favorites yet. Tap the ★ star in the breadcrumb bar to bookmark any chapter or procedure.</div>';
    } else {
      body.innerHTML = state.favorites.map(id => {
        const e = UNIT_MAP.get(id);
        if (!e) return '';
        const title = e.kind === 'afm'
          ? `${e.chapter.code} • ${e.unit.code} — ${t(e.unit.title)}`
          : `eQRH ${e.cat} • ${e.proc.code} — ${t(e.proc.title)}`;
        return `<div class="search-res-item" data-fav-nav="${escHtml(id)}">
          <div class="search-res-title">★ ${escHtml(title)}</div>
        </div>`;
      }).join('');
    }
    openModal('favModal');
  };
  $('favModalBody').onclick = (e) => {
    const r = e.target.closest('[data-fav-nav]');
    if (r) { closeModal('favModal'); navigateTo(r.dataset.favNav); }
  };

  // Notes Modal
  $('btnNotes').onclick = () => {
    const id = curLayer().itemId;
    const e = UNIT_MAP.get(id);
    const lbl = e ? (e.kind === 'afm' ? `${e.unit.code} ${t(e.unit.title)}` : `${e.proc.code} ${t(e.proc.title)}`) : id;
    $('notesModalTitle').textContent = `NOTES — ${lbl}`;
    $('noteTextarea').value = state.notes[id] || '';
    openModal('notesModal');
  };
  $('btnSaveNote').onclick = () => {
    state.notes[curLayer().itemId] = $('noteTextarea').value;
    saveState();
    closeModal('notesModal');
    renderAll();
  };
  $('btnDeleteNote').onclick = () => {
    delete state.notes[curLayer().itemId];
    saveState();
    closeModal('notesModal');
    renderAll();
  };

  // Deferred Modal
  $('btnDeferred').onclick = () => {
    const body = $('defModalBody');
    if (!state.deferred.length) {
      body.innerHTML = '<div style="color:var(--text-muted);">No deferred eQRH items.</div>';
    } else {
      body.innerHTML = state.deferred.map((d, idx) => `
        <div class="search-res-item" style="display:flex;justify-content:space-between;align-items:center;gap:10px;">
          <div data-def-nav="${escHtml(d.procId)}" style="flex:1;cursor:pointer;">
            <div class="search-res-title">${escHtml(d.code)}</div>
            <div class="search-res-snip">${escHtml(state.lang === 'ru' ? d.labelRu : d.labelEn)}</div>
          </div>
          <button class="act-btn act-danger" data-def-rm="${idx}">DONE</button>
        </div>`).join('');
    }
    openModal('defModal');
  };
  $('defModalBody').onclick = (e) => {
    const rm = e.target.closest('[data-def-rm]');
    if (rm) {
      state.deferred.splice(Number(rm.dataset.defRm), 1);
      saveState();
      $('btnDeferred').click();
      renderAll();
      return;
    }
    const nav = e.target.closest('[data-def-nav]');
    if (nav) { closeModal('defModal'); navigateTo(nav.dataset.defNav); }
  };

  // Diagram Zoom Controls
  $('btnZoomIn').onclick = () => {
    imgZoom = Math.min(300, imgZoom + 35);
    $('imgModalEl').style.width = imgZoom + '%';
    $('btnZoomReset').textContent = imgZoom + '%';
  };
  $('btnZoomOut').onclick = () => {
    imgZoom = Math.max(60, imgZoom - 35);
    $('imgModalEl').style.width = imgZoom + '%';
    $('btnZoomReset').textContent = imgZoom + '%';
  };
  $('btnZoomReset').onclick = () => {
    imgZoom = 100;
    $('imgModalEl').style.width = '100%';
    $('btnZoomReset').textContent = '100%';
  };

  // Generic Modal Close
  document.querySelectorAll('[data-close]').forEach(btn => {
    btn.onclick = () => closeModal(btn.dataset.close);
  });
  document.querySelectorAll('.modal-overlay').forEach(ov => {
    ov.onclick = (e) => { if (e.target === ov) ov.classList.add('hidden'); };
  });

  // ---- BOOTSTRAP & SERVICE WORKER ----
  async function init() {
    await openIDB();
    let saved = await idbGet(STORE_KEY);
    if (!saved) {
      try {
        const raw = localStorage.getItem(STORE_KEY);
        if (raw) saved = JSON.parse(raw);
      } catch {}
    }
    if (saved) {
      state = { ...state, ...saved };
      if (!Array.isArray(state.layers) || state.layers.length !== 3) {
        state.layers = defaultState.layers;
      }
    }
    renderAll();

    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('./sw.js').then(() => {
        $('offlinePill').textContent = 'OFFLINE READY';
      }).catch(() => {
        $('offlinePill').textContent = 'LOCAL MODE';
      });
    }
  }

  init();
})();
