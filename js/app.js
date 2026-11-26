/* ============================================================
   DA40 NG — Apple-Style Offline Flight Manual & eQRH Engine (v5.0)
   San Francisco Typography • Exact Text-Selection Highlighter
   ============================================================ */

(() => {
  'use strict';

  // ---- DATA REGISTRY ----
  const AFM_CHAPTERS   = window.AFM_ALL_CHAPTERS || [];
  const EQRH_EMERGENCY = window.EQRH_EMERGENCY   || [];
  const EQRH_ABNORMAL  = window.EQRH_ABNORMAL    || [];
  const EQRH_NORMAL    = window.EQRH_NORMAL      || [];
  const GLOSSARY       = window.OLB_GLOSSARY     || {};

  const UNIT_MAP = new Map();
  const AFM_FLAT = [];
  AFM_CHAPTERS.forEach(ch => {
    ch.units.forEach(u => {
      const entry = { kind: 'afm', chapter: ch, unit: u, flatIdx: AFM_FLAT.length };
      AFM_FLAT.push(entry);
      UNIT_MAP.set(u.id, entry);
    });
  });
  EQRH_EMERGENCY.forEach(p => UNIT_MAP.set(p.id, { kind: 'eqrh', cat: 'EMERGENCY', proc: p }));
  EQRH_ABNORMAL.forEach(p  => UNIT_MAP.set(p.id, { kind: 'eqrh', cat: 'ABNORMAL',  proc: p }));
  EQRH_NORMAL.forEach(p    => UNIT_MAP.set(p.id, { kind: 'sop',  cat: 'NORMAL',    proc: p }));

  // ---- STORAGE (IndexedDB + localStorage) ----
  const DB_NAME   = 'DA40NG_OLB_DB';
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
      req.onerror   = () => resolve(null);
    });
  }

  function idbGet(key) {
    return new Promise((resolve) => {
      if (!idb) return resolve(null);
      try {
        const tx = idb.transaction('kv', 'readonly');
        const req = tx.objectStore('kv').get(key);
        req.onsuccess = () => resolve(req.result || null);
        req.onerror   = () => resolve(null);
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

  // ---- STATE ----
  const defaultState = {
    lang: 'en',
    theme: 'light',
    activeLayer: 0,
    layers: [
      { module: 'afm',  itemId: 'du-2-2',  history: ['du-2-2'],  histIdx: 0, scroll: 0 },
      { module: 'eqrh', itemId: 'em-334',  history: ['em-334'],  histIdx: 0, scroll: 0 },
      { module: 'sop',  itemId: 'nm-4a56', history: ['nm-4a56'], histIdx: 0, scroll: 0 }
    ],
    favorites: ['du-2-2', 'du-2-5', 'em-334'],
    notes: {},
    textHighlights: {},   // { [scopeKey]: [{ start, end, color }] }
    qrhChecks: {},
    qrhBranches: {},
    deferred: []
  };

  let state = JSON.parse(JSON.stringify(defaultState));
  let swStatusLabel = 'Ready';

  function saveState() { idbSet(STORE_KEY, state); }
  function curLayer()  { return state.layers[state.activeLayer]; }

  // ---- DOM REFS ----
  const $ = (id) => document.getElementById(id);
  const elSidebar       = $('sidebar');
  const elBackdrop      = $('sidebarBackdrop');
  const elSidebarTree   = $('sidebarTree');
  const elSidebarFilter = $('sidebarFilter');
  const elReaderPane    = $('readerPane');
  const elReader        = $('readerContent');
  const elGlossaryPop   = $('glossaryPop');
  const elHlPopover     = $('hlPopover');
  const elHlSep         = $('hlSep');
  const elHlDeleteBtn   = $('hlDeleteBtn');

  // ---- ICONS (Clean SF-Style Inline SVGs) ----
  const ICO_SUN = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><line x1="12" y1="2" x2="12" y2="4"/><line x1="12" y1="20" x2="12" y2="22"/><line x1="4.93" y1="4.93" x2="6.34" y2="6.34"/><line x1="17.66" y1="17.66" x2="19.07" y2="19.07"/><line x1="2" y1="12" x2="4" y2="12"/><line x1="20" y1="12" x2="22" y2="12"/><line x1="4.93" y1="19.07" x2="6.34" y2="17.66"/><line x1="17.66" y1="6.34" x2="19.07" y2="4.93"/></svg>`;
  const ICO_MOON = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>`;
  const ICO_STAR_OFF = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`;
  const ICO_STAR_ON = `<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`;
  const ICO_CHECK = `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>`;

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

  // Clean eQRH/SOP titles: strip redundant CAS prefix and soften shouting ALL CAPS
  const KEEP_UPPER = new Set([
    'AFM','DA','NG','VFR','NVFR','IFR','IMC','GPS','G1000','NXI','GFC','AFCS','ECU','EECU',
    'FADEC','RPM','IAS','CAS','TAS','KIAS','KCAS','KTAS','ISA','MSL','AGL','OAT','QNH','CG',
    'MTOM','MLM','MZFM','LDG','T/O','UP','MED','SED','PFD','MFD','AHRS','ADC','ELT','COM',
    'NAV','VOR','DME','ADF','XPDR','CO','AC','DC','USB','SAM','MD302','OÄM','MÄM','ON','OFF',
    'AUTO','MAX','IDLE','OPEN','CLOSED','LOW','HIGH','FAIL','TEMP','PRES','PRESS','AMPS',
    'VOLTS','COOL','LVL','FUEL','ENG','OIL','GBOX','ALTN','DOOR','PITOT','HT','LOI','XFER',
    'РЛЭ','ПВП','ППП','МСА','ЦТ','БРЭО','ППД','РУД','АЗС','УВД','ЛТХ','МГ','ВПП','ПОШ','ТНВ'
  ]);
  const SMALL_EN = new Set(['and','or','of','the','in','on','to','for','with','at','from','by','as','an','a','is','not']);

  function cleanProcTitle(proc, stripCas = true) {
    let raw = t(proc.title).trim();
    if (stripCas && proc.cas) {
      const esc = proc.cas.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      raw = raw.replace(new RegExp('^' + esc + '\\s*[—–\\-:]\\s*', 'i'), '');
    }
    // Check if shouting ALL CAPS
    const letters = raw.match(/[A-Za-zА-Яа-яЁё]/g) || [];
    const upper = letters.filter(c => c === c.toUpperCase() && c !== c.toLowerCase()).length;
    if (letters.length < 4 || upper / letters.length < 0.72) return raw;

    const isRu = state.lang === 'ru';
    const words = raw.split(/\s+/);
    return words.map((w, idx) => {
      const bare = w.replace(/[^A-Za-zА-Яа-яЁё0-9/ÄÖÜ-]/g, '');
      if (!bare || KEEP_UPPER.has(bare.toUpperCase()) && (bare === bare.toUpperCase())) {
        if (KEEP_UPPER.has(bare)) return w;
      }
      if (/^[A-Z]+\d+$/.test(bare)) return w;
      if (isRu) {
        if (idx === 0) return w.charAt(0).toUpperCase() + w.slice(1).toLowerCase();
        return w.toLowerCase();
      } else {
        if (idx > 0 && SMALL_EN.has(w.toLowerCase())) return w.toLowerCase();
        return w.split('-').map(p => KEEP_UPPER.has(p) ? p : (p ? p.charAt(0).toUpperCase() + p.slice(1).toLowerCase() : '')).join('-');
      }
    }).join(' ');
  }

  function cleanGroupName(grp) {
    if (!grp) return '';
    return grp.split(/\s+/).map((w, i) => {
      if (KEEP_UPPER.has(w)) return w;
      if (i > 0 && SMALL_EN.has(w.toLowerCase())) return w.toLowerCase();
      return w.charAt(0).toUpperCase() + w.slice(1).toLowerCase();
    }).join(' ');
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

  function formatLegacyCell(raw) {
    let cls = '';
    let txt = String(raw ?? '');
    if (txt.includes('[GREEN]'))      { cls = 'tone-green'; txt = txt.replace(/\s*\[GREEN\]/g, ''); }
    else if (txt.includes('[AMBER]')) { cls = 'tone-amber'; txt = txt.replace(/\s*\[AMBER\]/g, ''); }
    else if (txt.includes('[RED]'))   { cls = 'tone-red';   txt = txt.replace(/\s*\[RED\]/g, ''); }
    return { cls, html: escHtml(txt) };
  }

  // ---- NAVIGATION ----
  function navigateTo(itemId, pushHist = true) {
    const entry = UNIT_MAP.get(itemId);
    if (!entry) return;
    hideHlPopover();
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
    hideHlPopover();
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
    hideHlPopover();
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

  // ---- SIDEBAR ----
  function renderSidebar() {
    const L = curLayer();
    const q = (elSidebarFilter.value || '').trim().toLowerCase();
    let html = '';

    if (L.module === 'afm') {
      $('sidebarTitle').textContent = state.lang === 'ru' ? 'РЛЭ DA40 NG' : 'Flight Manual';
      AFM_CHAPTERS.forEach(ch => {
        const units = ch.units.filter(u => {
          if (!q) return true;
          return (u.code + ' ' + u.title.en + ' ' + u.title.ru).toLowerCase().includes(q);
        });
        if (!units.length) return;
        html += `<div class="tree-group-hdr">${escHtml(ch.code)}. ${escHtml(t(ch.title))}</div>`;
        units.forEach(u => {
          const act = u.id === L.itemId ? 'active' : '';
          html += `<div class="tree-item ${act}" data-nav="${u.id}">
            <span class="tree-code">${escHtml(u.code)}</span>
            <span class="tree-label">${escHtml(t(u.title))}</span>
          </div>`;
        });
      });
    } else if (L.module === 'eqrh') {
      $('sidebarTitle').textContent = 'eQRH';
      const renderList = (title, cls, arr, casCls) => {
        const items = arr.filter(p => {
          if (!q) return true;
          return (p.code + ' ' + (p.cas || '') + ' ' + p.title.en + ' ' + p.title.ru + ' ' + p.group).toLowerCase().includes(q);
        });
        if (!items.length) return;
        html += `<div class="tree-group-hdr ${cls}">${escHtml(title)}</div>`;
        items.forEach(p => {
          const act = p.id === L.itemId ? 'active' : '';
          const casHtml = p.cas ? `<span class="cas-pill ${casCls}">${escHtml(p.cas)}</span>` : '';
          html += `<div class="tree-item ${act}" data-nav="${p.id}">
            <span class="tree-code">${escHtml(p.code)}</span>
            <span class="tree-label">${casHtml}${escHtml(cleanProcTitle(p, true))}</span>
          </div>`;
        });
      };
      renderList(state.lang === 'ru' ? 'Аварийные ситуации (Гл. 3)' : 'Emergency (Ch. 3)', 'grp-red', EQRH_EMERGENCY, 'cas-red');
      renderList(state.lang === 'ru' ? 'Особые случаи (Гл. 4B)' : 'Abnormal (Ch. 4B)', 'grp-amber', EQRH_ABNORMAL, 'cas-amber');
    } else if (L.module === 'sop') {
      $('sidebarTitle').textContent = state.lang === 'ru' ? 'Чеклисты' : 'Checklists';
      const items = EQRH_NORMAL.filter(p => {
        if (!q) return true;
        return (p.code + ' ' + p.title.en + ' ' + p.title.ru + ' ' + p.group).toLowerCase().includes(q);
      });
      if (items.length) {
        html += `<div class="tree-group-hdr grp-green">${state.lang === 'ru' ? 'Нормальная эксплуатация (Гл. 4A)' : 'Normal Procedures (Ch. 4A)'}</div>`;
        items.forEach(p => {
          const act = p.id === L.itemId ? 'active' : '';
          html += `<div class="tree-item ${act}" data-nav="${p.id}">
            <span class="tree-code">${escHtml(p.code)}</span>
            <span class="tree-label">${escHtml(cleanProcTitle(p, false))}</span>
          </div>`;
        });
      }
    } else {
      $('sidebarTitle').textContent = state.lang === 'ru' ? 'Настройки' : 'Settings';
      html = `<div class="tree-item active"><span class="tree-label">${state.lang === 'ru' ? 'Данные и резервная копия' : 'Data & Backup'}</span></div>`;
    }

    elSidebarTree.innerHTML = html || `<div class="empty-state">${state.lang === 'ru' ? 'Ничего не найдено' : 'No matching sections'}</div>`;
  }

  // ---- AFM RENDERING (Apple Books Editorial Style + Text Highlight Scopes) ----
  function renderAfmUnit(entry) {
    const u = entry.unit;
    const ch = entry.chapter;
    const blocks = u.bilingualBlocks ? (u.bilingualBlocks[state.lang] || u.bilingualBlocks.en) : (u.blocks || []);
    const isFav = state.favorites.includes(u.id);
    const chLabel = state.lang === 'ru' ? `Глава ${ch.code} · ${t(ch.title)}` : `Chapter ${ch.code} · ${t(ch.title)}`;
    const apprChip = ch.status === 'APPROVED'
      ? `<span class="status-chip chip-approved">${state.lang === 'ru' ? 'Утверждено' : 'Approved'}</span>`
      : '';

    let scopeSeq = 0;
    const nextScope = () => `${u.id}::${state.lang}::${scopeSeq++}`;

    let html = `
      <header class="doc-header">
        <div class="doc-eyebrow">
          <span>${escHtml(chLabel)}</span>
          ${apprChip}
        </div>
        <div class="doc-title-row">
          <h1 class="doc-title"><span class="doc-title-code">${escHtml(u.code)}</span>${escHtml(t(u.title))}</h1>
          <button class="fav-toggle-btn ${isFav ? 'starred' : ''}" data-fav="${escHtml(u.id)}" title="Bookmark">${isFav ? ICO_STAR_ON : ICO_STAR_OFF}</button>
        </div>
      </header>`;

    blocks.forEach((blk) => {
      if (blk.type === 'p') {
        const txt = blk.text !== undefined ? blk.text : t(blk);
        html += `<p class="du-p hl-scope" data-hl-scope="${nextScope()}">${linkifyAbbr(txt)}</p>`;
      } else if (blk.type === 'h3') {
        html += `<h2 class="du-h3">${escHtml(blk.text !== undefined ? blk.text : t(blk))}</h2>`;
      } else if (blk.type === 'h4') {
        html += `<h3 class="du-h4">${escHtml(blk.text !== undefined ? blk.text : t(blk))}</h3>`;
      } else if (blk.type === 'list') {
        const items = Array.isArray(blk.items)
          ? blk.items
          : String(blk.text || '').split('\n').filter(Boolean).map(l => l.replace(/^[•\-–—*]\s*/, ''));
        if (items.length) {
          html += `<ul class="afm-list">` + items.map(it =>
            `<li class="hl-scope" data-hl-scope="${nextScope()}">${linkifyAbbr(it)}</li>`
          ).join('') + `</ul>`;
        }
      } else if (blk.type === 'warning' || blk.type === 'caution' || blk.type === 'note') {
        const lblMap = state.lang === 'ru'
          ? { warning: 'Предупреждение', caution: 'Осторожно', note: 'Примечание' }
          : { warning: 'Warning', caution: 'Caution', note: 'Note' };
        const rawTxt = blk.text !== undefined ? blk.text : t(blk);
        const paras = String(rawTxt).split(/\n{2,}/).filter(Boolean).map(p =>
          `<p class="hl-scope" data-hl-scope="${nextScope()}">${linkifyAbbr(p)}</p>`
        ).join('');
        html += `<div class="callout callout-${blk.type}"><span class="callout-lbl">${lblMap[blk.type]}</span>${paras}</div>`;
      } else if (blk.type === 'kv') {
        const rows = (blk.rows || []).map(r => {
          const k = typeof r.k === 'string' ? r.k : t(r.k);
          const v = typeof r.v === 'string' ? r.v : t(r.v);
          return `<div class="kv-row">
            <div class="kv-k hl-scope" data-hl-scope="${nextScope()}">${escHtml(k)}</div>
            <div class="kv-v hl-scope" data-hl-scope="${nextScope()}">${linkifyAbbr(v)}</div>
          </div>`;
        }).join('');
        html += `<div class="kv-card">${rows}</div>`;
      } else if (blk.type === 'checklist') {
        const rows = (blk.rows || []).map(r => `<div class="afm-chk-row">
          <div class="afm-chk-item hl-scope" data-hl-scope="${nextScope()}">${linkifyAbbr(r.item || '')}</div>
          ${r.action ? `<div class="afm-chk-action hl-scope" data-hl-scope="${nextScope()}">${linkifyAbbr(r.action)}</div>` : ''}
        </div>`).join('');
        html += `<div class="afm-chk-card">${rows}</div>`;
      } else if (blk.type === 'gridtable') {
        const rows = blk.rows || [];
        if (rows.length) {
          let headHtml = '';
          let bodyHtml = '';
          rows.forEach((row) => {
            const isHead = row.length > 0 && row.every(c => c.th);
            const tr = '<tr>' + row.map(c => {
              const tag = c.th ? 'th' : 'td';
              const attrs = [];
              if (c.cs > 1) attrs.push(`colspan="${c.cs}"`);
              if (c.rs > 1) attrs.push(`rowspan="${c.rs}"`);
              const cls = [c.tone ? `tone-${c.tone}` : '', c.th ? '' : 'hl-scope'].filter(Boolean).join(' ');
              if (cls) attrs.push(`class="${cls}"`);
              if (!c.th) attrs.push(`data-hl-scope="${nextScope()}"`);
              return `<${tag} ${attrs.join(' ')}>${c.th ? escHtml(c.t) : linkifyAbbr(c.t)}</${tag}>`;
            }).join('') + '</tr>';
            if (isHead && !bodyHtml) headHtml += tr;
            else bodyHtml += tr;
          });
          html += `<div class="data-table-card"><table class="data-table">
            ${headHtml ? `<thead>${headHtml}</thead>` : ''}
            ${bodyHtml ? `<tbody>${bodyHtml}</tbody>` : ''}
          </table></div>`;
        }
      } else if (blk.type === 'table') {
        const hdrs = (blk.headers[state.lang] || blk.headers.en || []).map(h => `<th>${escHtml(h)}</th>`).join('');
        const rows = (blk.rows || []).map(row =>
          '<tr>' + row.map(c => {
            const { cls, html: chHtml } = formatLegacyCell(c);
            return `<td class="${cls} hl-scope" data-hl-scope="${nextScope()}">${chHtml}</td>`;
          }).join('') + '</tr>'
        ).join('');
        html += `<div class="data-table-card"><table class="data-table"><thead><tr>${hdrs}</tr></thead><tbody>${rows}</tbody></table></div>`;
      } else if (blk.type === 'figure') {
        const cap = blk.caption ? t(blk.caption) : (blk.text || 'Diagram');
        html += `<figure class="du-figure" data-zoom-src="${escHtml(blk.src)}" data-zoom-cap="${escHtml(cap)}">
          <img src="${escHtml(blk.src)}" alt="${escHtml(cap)}" loading="lazy">
          <figcaption>${escHtml(cap)}</figcaption>
        </figure>`;
      }
    });

    // Previous / Next section pager
    const prev = entry.flatIdx > 0 ? AFM_FLAT[entry.flatIdx - 1] : null;
    const next = entry.flatIdx < AFM_FLAT.length - 1 ? AFM_FLAT[entry.flatIdx + 1] : null;
    html += `<nav class="doc-pager">
      ${prev ? `<button class="pager-btn" data-nav="${escHtml(prev.unit.id)}">
        <span class="pager-dir">← ${state.lang === 'ru' ? 'Предыдущий раздел' : 'Previous'}</span>
        <span class="pager-title">${escHtml(prev.unit.code)} ${escHtml(t(prev.unit.title))}</span>
      </button>` : '<div></div>'}
      ${next ? `<button class="pager-btn pager-next" data-nav="${escHtml(next.unit.id)}">
        <span class="pager-dir">${state.lang === 'ru' ? 'Следующий раздел' : 'Next'} →</span>
        <span class="pager-title">${escHtml(next.unit.code)} ${escHtml(t(next.unit.title))}</span>
      </button>` : '<div></div>'}
    </nav>`;

    elReader.innerHTML = html;
    applyHighlightsToDOM();
  }

  // ---- eQRH / CHECKLIST RENDERING ----
  function renderQrhBlock(proc, blk, idx) {
    if (blk.type === 'warning' || blk.type === 'caution' || blk.type === 'note') {
      const lblMap = state.lang === 'ru'
        ? { warning: 'Предупреждение', caution: 'Осторожно', note: 'Примечание' }
        : { warning: 'Warning', caution: 'Caution', note: 'Note' };
      return `<div class="callout callout-${blk.type}">
        <span class="callout-lbl">${lblMap[blk.type]}</span>
        <p>${linkifyAbbr(t(blk.text))}</p>
      </div>`;
    }
    if (blk.type === 'subhead') {
      return `<div class="qrh-subhead">${escHtml(t(blk.text))}</div>`;
    }
    if (blk.type === 'memory') {
      const inner = blk.steps.map(s => renderQrhStep(proc, s)).join('');
      return `<div class="memory-box">
        <div class="memory-title">${escHtml(t(blk.title))}</div>
        ${inner}
      </div>`;
    }
    if (blk.type === 'step') {
      return renderQrhStep(proc, blk);
    }
    if (blk.type === 'table') {
      const hdrs = (blk.headers[state.lang] || blk.headers.en || []).map(h => `<th>${escHtml(h)}</th>`).join('');
      const rows = blk.rows.map(r => '<tr>' + r.map(c => `<td>${escHtml(c)}</td>`).join('') + '</tr>').join('');
      return `<div class="data-table-card"><table class="data-table"><thead><tr>${hdrs}</tr></thead><tbody>${rows}</tbody></table></div>`;
    }
    if (blk.type === 'link') {
      return `<button class="qrh-link-btn" data-nav="${escHtml(blk.target)}">${escHtml(t(blk.label))} →</button>`;
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
        return `<button class="branch-opt-btn ${cls}" data-branch-key="${escHtml(bKey)}" data-opt-id="${escHtml(opt.id)}">${escHtml(t(opt.label))}</button>`;
      }).join('');
      let content = '';
      if (sel) {
        const chosen = blk.options.find(o => o.id === sel);
        if (chosen) {
          content = `<div class="branch-content">${chosen.items.map((sub, si) => renderQrhBlock(proc, sub, `${idx}_${si}`)).join('')}</div>`;
        }
      }
      return `<div class="branch-box">
        <div class="branch-prompt">${escHtml(t(blk.prompt))}</div>
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
      ? `<button class="qrh-def-btn ${isDef ? 'is-def' : ''}" data-defer-proc="${escHtml(proc.id)}" data-defer-step="${escHtml(s.id)}">${isDef ? 'Deferred' : 'Defer'}</button>`
      : '';
    return `<div class="qrh-step ${done ? 'done' : ''}" data-step-key="${escHtml(key)}">
      <div class="qrh-check">${ICO_CHECK}</div>
      <div class="qrh-step-body">
        <span class="qrh-item">${escHtml(t(s.item))}</span>
        <span class="qrh-action">${escHtml(t(s.action))}</span>
      </div>
      ${defBtn}
    </div>`;
  }

  function renderQrhProc(entry) {
    const p = entry.proc;
    const isFav = state.favorites.includes(p.id);
    const chipCls = entry.cat === 'EMERGENCY' ? 'chip-red' : entry.cat === 'ABNORMAL' ? 'chip-amber' : 'chip-green';
    const catLbl = entry.cat === 'EMERGENCY'
      ? (state.lang === 'ru' ? 'Аварийная' : 'Emergency')
      : entry.cat === 'ABNORMAL'
      ? (state.lang === 'ru' ? 'Особый случай' : 'Abnormal')
      : (state.lang === 'ru' ? 'Нормальный чеклист' : 'Normal Checklist');

    const checkedCount = Object.keys(state.qrhChecks).filter(k => k.startsWith(p.id + '::') && state.qrhChecks[k]).length;

    const m = (p.code || '').match(/^([0-9]+[AB]?\.(?:5\.[0-9]+|[0-9]+))/i);
    const secCode = m ? m[1] : '';
    const targetId = secCode ? ('du-' + secCode.toLowerCase().replace(/\./g, '-')) : '';
    const afmJumpBtn = (targetId && UNIT_MAP.has(targetId))
      ? `<button class="btn btn-sm" data-nav="${escHtml(targetId)}">${state.lang === 'ru' ? 'Открыть в РЛЭ ' + escHtml(secCode) : 'Open AFM ' + escHtml(secCode)}</button>`
      : '';

    const casPill = p.cas
      ? `<span class="cas-pill ${entry.cat === 'EMERGENCY' ? 'cas-red' : 'cas-amber'}">${escHtml(p.cas)}</span>`
      : '';

    let html = `
      <header class="doc-header">
        <div class="doc-eyebrow">
          <span class="status-chip ${chipCls}">${escHtml(catLbl)}</span>
          ${casPill}
          <span>${escHtml(cleanGroupName(p.group))}</span>
        </div>
        <div class="doc-title-row">
          <h1 class="doc-title"><span class="doc-title-code">${escHtml(p.code)}</span>${escHtml(cleanProcTitle(p, true))}</h1>
          <button class="fav-toggle-btn ${isFav ? 'starred' : ''}" data-fav="${escHtml(p.id)}" title="Bookmark">${isFav ? ICO_STAR_ON : ICO_STAR_OFF}</button>
        </div>
        ${p.subtitle ? `<p class="doc-subtitle">${escHtml(t(p.subtitle))}</p>` : ''}
      </header>
      <div class="qrh-bar">
        <span class="qrh-prog">${state.lang === 'ru' ? 'Выполнено пунктов' : 'Completed'}: <strong>${checkedCount}</strong></span>
        <div class="qrh-actions">
          ${afmJumpBtn}
          <button class="btn btn-sm" data-reset-proc="${escHtml(p.id)}">${state.lang === 'ru' ? 'Сбросить' : 'Reset'}</button>
        </div>
      </div>`;

    p.blocks.forEach((b, i) => { html += renderQrhBlock(p, b, i); });
    elReader.innerHTML = html;
  }

  // ---- SETTINGS / DATA PANEL ----
  function renderTools() {
    const hlTotal = Object.values(state.textHighlights || {}).reduce((acc, arr) => acc + (arr?.length || 0), 0);
    const noteCount = Object.keys(state.notes || {}).filter(k => state.notes[k]?.trim()).length;
    const isRu = state.lang === 'ru';

    elReader.innerHTML = `
      <header class="doc-header">
        <div class="doc-eyebrow"><span>DA40 NG · v5.0</span></div>
        <div class="doc-title-row">
          <h1 class="doc-title">${isRu ? 'Настройки и данные' : 'Settings & Data'}</h1>
        </div>
      </header>

      <section class="settings-group">
        <div class="settings-group-title">${isRu ? 'Ваши данные' : 'Library Data'}</div>
        <div class="settings-card">
          <div class="settings-row"><span>${isRu ? 'Закладки' : 'Bookmarks'}</span><span class="settings-row-val">${state.favorites.length}</span></div>
          <div class="settings-row"><span>${isRu ? 'Выделения цветом' : 'Text Highlights'}</span><span class="settings-row-val">${hlTotal}</span></div>
          <div class="settings-row"><span>${isRu ? 'Заметки' : 'Notes'}</span><span class="settings-row-val">${noteCount}</span></div>
          <div class="settings-row"><span>${isRu ? 'Отложенные пункты eQRH' : 'Deferred eQRH Items'}</span><span class="settings-row-val">${state.deferred.length}</span></div>
          <div class="settings-row"><span>${isRu ? 'Офлайн-режим' : 'Offline Cache'}</span><span class="settings-row-val">${escHtml(swStatusLabel)}</span></div>
        </div>
      </section>

      <section class="settings-group">
        <div class="settings-group-title">${isRu ? 'Резервное копирование и кэш' : 'Backup & Cache'}</div>
        <div class="settings-card">
          <div class="settings-actions">
            <button class="btn btn-primary" id="btnExportBackup">${isRu ? 'Экспорт (.json)' : 'Export Backup'}</button>
            <label class="btn" style="cursor:pointer;">
              ${isRu ? 'Импорт (.json)' : 'Import Backup'}<input type="file" id="inpImportBackup" accept=".json" style="display:none;">
            </label>
            <button class="btn" id="btnForceUpdate">${isRu ? 'Обновить кэш' : 'Refresh App Cache'}</button>
            <button class="btn btn-destructive" id="btnResetAllQrh">${isRu ? 'Сбросить все чеклисты' : 'Reset All Checklists'}</button>
          </div>
        </div>
      </section>

      <section class="settings-group">
        <div class="settings-group-title">${isRu ? 'Источники' : 'Document Sources'}</div>
        <div class="settings-card">
          <div class="settings-row"><span>DA 40 NG AFM Doc. # 6.01.15-E</span><span class="settings-row-val">Rev. 4 (31-Dec-2024)</span></div>
          <div class="settings-row"><span>РЛЭ DA 40 NG (русская версия)</span><span class="settings-row-val">Ред. 3 + 4B.9 (Ред. 4)</span></div>
          <div class="settings-row"><span>${isRu ? 'Схемы и графики' : 'Diagrams & Charts'}</span><span class="settings-row-val">34</span></div>
        </div>
      </section>`;

    $('btnExportBackup').onclick = () => {
      const blob = new Blob([JSON.stringify(state, null, 2)], { type: 'application/json' });
      const a = document.createElement('a');
      a.href = URL.createObjectURL(blob);
      a.download = `DA40NG-backup-${new Date().toISOString().slice(0, 10)}.json`;
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
    $('btnForceUpdate').onclick = async () => {
      try {
        if ('caches' in window) {
          const keys = await caches.keys();
          await Promise.all(keys.map(k => caches.delete(k)));
        }
        if ('serviceWorker' in navigator) {
          const regs = await navigator.serviceWorker.getRegistrations();
          await Promise.all(regs.map(r => r.unregister()));
        }
      } catch {}
      location.reload();
    };
  }

  // ============================================================
  // TRUE TEXT-SELECTION HIGHLIGHTER ENGINE
  // ============================================================
  let pendingRanges = []; // [{ scopeKey, start, end }]

  function hideHlPopover() {
    elHlPopover.classList.add('hidden');
    pendingRanges = [];
  }

  function mergeHighlightIntervals(list, start, end, color) {
    // 1. Subtract [start, end) from every existing interval
    const next = [];
    for (const iv of (list || [])) {
      if (iv.end <= start || iv.start >= end) {
        next.push({ ...iv });
      } else {
        if (iv.start < start) next.push({ start: iv.start, end: start, color: iv.color });
        if (iv.end > end)     next.push({ start: end, end: iv.end, color: iv.color });
      }
    }
    // 2. Insert new interval if applying a color
    if (color && color !== 'clear') {
      next.push({ start, end, color });
    }
    // 3. Sort and coalesce touching/overlapping intervals of identical color
    next.sort((a, b) => a.start - b.start);
    const merged = [];
    for (const iv of next) {
      if (iv.end <= iv.start) continue;
      const last = merged[merged.length - 1];
      if (last && last.color === iv.color && last.end >= iv.start) {
        last.end = Math.max(last.end, iv.end);
      } else {
        merged.push(iv);
      }
    }
    return merged;
  }

  function hasOverlapWithSaved(ranges) {
    for (const r of ranges) {
      const list = state.textHighlights[r.scopeKey] || [];
      if (list.some(iv => iv.start < r.end && iv.end > r.start)) return true;
    }
    return false;
  }

  function positionHlPopover(rect, showDelete) {
    elHlSep.classList.toggle('hidden', !showDelete);
    elHlDeleteBtn.classList.toggle('hidden', !showDelete);
    elHlPopover.classList.remove('hidden');

    const popW = elHlPopover.offsetWidth || 150;
    const popH = elHlPopover.offsetHeight || 40;
    let left = rect.left + rect.width / 2 - popW / 2;
    left = Math.max(12, Math.min(window.innerWidth - popW - 12, left));

    let top = rect.top - popH - 10;
    if (top < 60) {
      top = rect.bottom + 10;
    }
    top = Math.max(58, Math.min(window.innerHeight - popH - 64, top));

    elHlPopover.style.left = `${Math.round(left)}px`;
    elHlPopover.style.top  = `${Math.round(top)}px`;
  }

  function computeSelectedScopeRanges(range) {
    const scopes = elReader.querySelectorAll('.hl-scope[data-hl-scope]');
    const found = [];
    scopes.forEach(scopeEl => {
      if (!range.intersectsNode(scopeEl)) return;
      const sub = document.createRange();
      sub.selectNodeContents(scopeEl);
      if (range.compareBoundaryPoints(Range.START_TO_START, sub) > 0) {
        sub.setStart(range.startContainer, range.startOffset);
      }
      if (range.compareBoundaryPoints(Range.END_TO_END, sub) < 0) {
        sub.setEnd(range.endContainer, range.endOffset);
      }
      const selectedStr = sub.toString();
      if (!selectedStr || !selectedStr.trim()) return;

      const pre = document.createRange();
      pre.selectNodeContents(scopeEl);
      pre.setEnd(sub.startContainer, sub.startOffset);
      const start = pre.toString().length;
      const end = start + selectedStr.length;
      if (end > start) {
        found.push({ scopeKey: scopeEl.dataset.hlScope, start, end });
      }
    });
    return found;
  }

  function handleSelectionCheck() {
    const sel = window.getSelection();
    if (!sel || sel.isCollapsed || sel.rangeCount === 0) {
      return;
    }
    const range = sel.getRangeAt(0);
    if (!elReader.contains(range.commonAncestorContainer)) {
      return;
    }
    const ranges = computeSelectedScopeRanges(range);
    if (!ranges.length) return;

    pendingRanges = ranges;
    const rect = range.getBoundingClientRect();
    if (rect.width === 0 && rect.height === 0) return;
    positionHlPopover(rect, hasOverlapWithSaved(ranges));
  }

  function applyHighlightsToScope(scopeEl) {
    const key = scopeEl.dataset.hlScope;
    const intervals = state.textHighlights[key];
    // First unwrap any existing mark.txt-hl inside scopeEl so re-application is idempotent
    scopeEl.querySelectorAll('mark.txt-hl').forEach(mk => {
      const parent = mk.parentNode;
      while (mk.firstChild) parent.insertBefore(mk.firstChild, mk);
      parent.removeChild(mk);
    });
    scopeEl.normalize();

    if (!intervals || !intervals.length) return;

    // Collect text nodes with exact character spans
    const walker = document.createTreeWalker(scopeEl, NodeFilter.SHOW_TEXT, null);
    const nodes = [];
    let pos = 0;
    let node;
    while ((node = walker.nextNode())) {
      const len = node.nodeValue.length;
      if (len > 0) nodes.push({ node, start: pos, end: pos + len });
      pos += len;
    }

    // Replace each text node that overlaps any highlight interval
    for (const tn of nodes) {
      const overlaps = intervals.filter(iv => iv.start < tn.end && iv.end > tn.start);
      if (!overlaps.length) continue;

      const frag = document.createDocumentFragment();
      let cursor = tn.start;
      const raw = tn.node.nodeValue;

      for (const iv of overlaps) {
        const s = Math.max(tn.start, iv.start);
        const e = Math.min(tn.end, iv.end);
        if (s > cursor) {
          frag.appendChild(document.createTextNode(raw.slice(cursor - tn.start, s - tn.start)));
        }
        const mk = document.createElement('mark');
        mk.className = `txt-hl hl-${iv.color}`;
        mk.dataset.hlScope = key;
        mk.dataset.hlStart = String(iv.start);
        mk.dataset.hlEnd   = String(iv.end);
        mk.textContent = raw.slice(s - tn.start, e - tn.start);
        frag.appendChild(mk);
        cursor = e;
      }
      if (cursor < tn.end) {
        frag.appendChild(document.createTextNode(raw.slice(cursor - tn.start)));
      }
      tn.node.parentNode.replaceChild(frag, tn.node);
    }
  }

  function applyHighlightsToDOM() {
    elReader.querySelectorAll('.hl-scope[data-hl-scope]').forEach(el => {
      const key = el.dataset.hlScope;
      if (state.textHighlights[key] && state.textHighlights[key].length) {
        applyHighlightsToScope(el);
      }
    });
  }

  // Prevent tapping the floating popover from destroying the active selection
  elHlPopover.addEventListener('mousedown', (e) => e.preventDefault());
  elHlPopover.addEventListener('touchstart', (e) => {
    const btn = e.target.closest('[data-hl-color]');
    if (btn) e.preventDefault();
  }, { passive: false });

  function commitHighlightAction(color) {
    if (!pendingRanges.length) return;
    if (!state.textHighlights) state.textHighlights = {};

    const touchedKeys = new Set();
    for (const r of pendingRanges) {
      const next = mergeHighlightIntervals(state.textHighlights[r.scopeKey], r.start, r.end, color);
      if (next.length) state.textHighlights[r.scopeKey] = next;
      else delete state.textHighlights[r.scopeKey];
      touchedKeys.add(r.scopeKey);
    }
    saveState();

    // Update affected DOM nodes immediately in-place (zero scroll jump!)
    touchedKeys.forEach(k => {
      const el = elReader.querySelector(`.hl-scope[data-hl-scope="${CSS.escape(k)}"]`);
      if (el) applyHighlightsToScope(el);
    });

    try { window.getSelection().removeAllRanges(); } catch {}
    hideHlPopover();
  }

  elHlPopover.addEventListener('click', (e) => {
    const btn = e.target.closest('[data-hl-color]');
    if (!btn) return;
    e.stopPropagation();
    commitHighlightAction(btn.dataset.hlColor);
  });
  // Also support fast iPad tap via touchend on popover buttons
  elHlPopover.addEventListener('touchend', (e) => {
    const btn = e.target.closest('[data-hl-color]');
    if (!btn) return;
    e.preventDefault();
    e.stopPropagation();
    commitHighlightAction(btn.dataset.hlColor);
  });

  // Listen for native text selections (Desktop + iPad Safari)
  let selTimer = null;
  document.addEventListener('selectionchange', () => {
    clearTimeout(selTimer);
    selTimer = setTimeout(() => {
      const sel = window.getSelection();
      if (!sel || sel.isCollapsed) {
        // Keep popover open if editing an existing highlight mark (no native selection)
        return;
      }
      handleSelectionCheck();
    }, 110);
  });

  elReaderPane.addEventListener('mouseup', () => setTimeout(handleSelectionCheck, 20));
  elReaderPane.addEventListener('touchend', () => setTimeout(handleSelectionCheck, 160));
  elReaderPane.addEventListener('scroll', () => {
    if (!elHlPopover.classList.contains('hidden')) hideHlPopover();
  }, { passive: true });

  // ---- MASTER RENDER ----
  function renderAll() {
    document.documentElement.setAttribute('data-theme', state.theme);
    $('btnTheme').innerHTML = state.theme === 'dark' ? ICO_SUN : ICO_MOON;
    $('metaThemeColor').setAttribute('content', state.theme === 'dark' ? '#141416' : '#ffffff');

    document.querySelectorAll('#langSwitch .seg-item').forEach(b => {
      b.classList.toggle('active', b.dataset.lang === state.lang);
    });
    document.querySelectorAll('#layerTabs .seg-item').forEach(b => {
      b.classList.toggle('active', Number(b.dataset.layer) === state.activeLayer);
    });
    document.querySelectorAll('.tab-btn').forEach(b => {
      b.classList.toggle('active', b.dataset.module === curLayer().module);
    });

    const L = curLayer();
    $('btnBack').disabled = L.histIdx <= 0;
    $('btnFwd').disabled  = L.histIdx >= L.history.length - 1;

    // Badges (only visible when > 0 to keep top bar visually clean!)
    const favCnt = state.favorites.length;
    $('favCount').textContent = favCnt;
    $('favCount').classList.toggle('hidden', favCnt === 0);

    const defCnt = state.deferred.length;
    $('defCount').textContent = defCnt;
    $('btnDeferred').classList.toggle('hidden', defCnt === 0);

    const hasNote = !!(state.notes[L.itemId] && state.notes[L.itemId].trim());
    $('noteDot').classList.toggle('hidden', !hasNote);

    renderSidebar();

    if (L.module === 'tools') {
      renderTools();
    } else {
      let entry = UNIT_MAP.get(L.itemId);
      if (!entry) {
        if (L.module === 'eqrh') L.itemId = EQRH_EMERGENCY[0]?.id || 'em-334';
        else if (L.module === 'sop') L.itemId = EQRH_NORMAL[0]?.id || 'nm-4a4';
        else L.itemId = AFM_CHAPTERS[0]?.units[0]?.id || 'du-1-1';
        entry = UNIT_MAP.get(L.itemId);
      }
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
      box.innerHTML = `<div class="empty-state">${state.lang === 'ru' ? 'Введите минимум 2 символа для поиска по РЛЭ и eQRH' : 'Type at least 2 characters to search AFM & eQRH'}</div>`;
      return;
    }
    const hits = [];
    UNIT_MAP.forEach((entry, id) => {
      const blob = JSON.stringify(entry.kind === 'afm' ? entry.unit : entry.proc).toLowerCase();
      if (blob.includes(q)) {
        const title = entry.kind === 'afm'
          ? `${entry.unit.code} ${t(entry.unit.title)}`
          : `${entry.proc.code} ${cleanProcTitle(entry.proc, true)}`;
        const sub = entry.kind === 'afm'
          ? `${state.lang === 'ru' ? 'Глава' : 'Chapter'} ${entry.chapter.code} · ${t(entry.chapter.title)}`
          : `${entry.cat === 'EMERGENCY' ? 'Emergency' : entry.cat === 'ABNORMAL' ? 'Abnormal' : 'Checklist'}${entry.proc.cas ? ' · ' + entry.proc.cas : ''}`;
        hits.push({ id, title, sub });
      }
    });
    if (!hits.length) {
      box.innerHTML = `<div class="empty-state">${state.lang === 'ru' ? 'Совпадений не найдено' : 'No matches found'}</div>`;
      return;
    }
    box.innerHTML = hits.slice(0, 40).map(h => `
      <div class="search-res-item" data-search-nav="${escHtml(h.id)}">
        <div class="search-res-title">${escHtml(h.title)}</div>
        <div class="search-res-snip">${escHtml(h.sub)}</div>
      </div>`).join('');
  }

  // ---- MODALS & POPOVERS ----
  function openModal(id)  { $(id).classList.remove('hidden'); }
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
    const left = Math.min(window.innerWidth - 335, Math.max(12, r.left));
    elGlossaryPop.style.top = `${top}px`;
    elGlossaryPop.style.left = `${left}px`;
  }

  let imgZoom = 100;
  function openDiagram(src, cap) {
    imgZoom = 100;
    $('imgModalTitle').textContent = cap || 'Diagram';
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
    state.theme = state.theme === 'dark' ? 'light' : 'dark';
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

  document.querySelectorAll('.tab-btn').forEach(b => {
    b.onclick = () => switchModule(b.dataset.module);
  });

  elSidebarFilter.oninput = renderSidebar;
  elSidebarTree.onclick = (e) => {
    const item = e.target.closest('[data-nav]');
    if (item) navigateTo(item.dataset.nav);
  };

  // Reader Pane Delegated Events
  elReader.onclick = (e) => {
    elGlossaryPop.classList.add('hidden');

    // If user just finished dragging a text selection, let selection popover handle it
    const sel = window.getSelection();
    if (sel && !sel.isCollapsed) return;

    // Favorite toggle in page header
    const favBtn = e.target.closest('[data-fav]');
    if (favBtn) {
      const id = favBtn.dataset.fav;
      const i = state.favorites.indexOf(id);
      if (i >= 0) state.favorites.splice(i, 1);
      else state.favorites.push(id);
      saveState();
      renderAll();
      return;
    }

    // Tap on existing highlight mark -> open color/remove popover
    const markEl = e.target.closest('mark.txt-hl');
    if (markEl) {
      e.stopPropagation();
      pendingRanges = [{
        scopeKey: markEl.dataset.hlScope,
        start: Number(markEl.dataset.hlStart),
        end: Number(markEl.dataset.hlEnd)
      }];
      positionHlPopover(markEl.getBoundingClientRect(), true);
      return;
    }

    hideHlPopover();

    // Glossary term tap
    const abbrEl = e.target.closest('.abbr-term');
    if (abbrEl) {
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

    // Cross-link / Pager / AFM jump
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
        const proc = UNIT_MAP.get(procId)?.proc;
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

    // eQRH step toggle
    const stepEl = e.target.closest('[data-step-key]');
    if (stepEl) {
      const sk = stepEl.dataset.stepKey;
      state.qrhChecks[sk] = !state.qrhChecks[sk];
      saveState();
      renderAll();
    }
  };

  document.addEventListener('click', (e) => {
    if (!e.target.closest('.abbr-term') && !e.target.closest('#glossaryPop')) {
      elGlossaryPop.classList.add('hidden');
    }
    if (!e.target.closest('#hlPopover') && !e.target.closest('mark.txt-hl')) {
      const sel = window.getSelection();
      if (!sel || sel.isCollapsed) hideHlPopover();
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

  // Bookmarks Modal
  $('btnFavList').onclick = () => {
    const body = $('favModalBody');
    if (!state.favorites.length) {
      body.innerHTML = `<div class="empty-state">${state.lang === 'ru' ? 'Закладок пока нет. Нажмите звёздочку рядом с заголовком раздела.' : 'No bookmarks yet. Tap the star next to any section title.'}</div>`;
    } else {
      body.innerHTML = state.favorites.map(id => {
        const e = UNIT_MAP.get(id);
        if (!e) return '';
        const title = e.kind === 'afm'
          ? `${e.unit.code} ${t(e.unit.title)}`
          : `${e.proc.code} ${cleanProcTitle(e.proc, true)}`;
        const sub = e.kind === 'afm' ? t(e.chapter.title) : e.cat;
        return `<div class="search-res-item" data-fav-nav="${escHtml(id)}">
          <div class="search-res-title">${escHtml(title)}</div>
          <div class="search-res-snip">${escHtml(sub)}</div>
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
    const lbl = e ? (e.kind === 'afm' ? `${e.unit.code} ${t(e.unit.title)}` : `${e.proc.code} ${cleanProcTitle(e.proc, true)}`) : 'Notes';
    $('notesModalTitle').textContent = lbl;
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
      body.innerHTML = '<div class="empty-state">No deferred items.</div>';
    } else {
      body.innerHTML = state.deferred.map((d, idx) => `
        <div class="search-res-item" style="display:flex;justify-content:space-between;align-items:center;gap:12px;">
          <div data-def-nav="${escHtml(d.procId)}" style="flex:1;cursor:pointer;">
            <div class="search-res-title">${escHtml(d.code)}</div>
            <div class="search-res-snip">${escHtml(state.lang === 'ru' ? d.labelRu : d.labelEn)}</div>
          </div>
          <button class="btn btn-sm btn-destructive" data-def-rm="${idx}">Done</button>
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

  // Diagram Zoom
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
      // Migrate old theme names ('day' -> 'light', 'night' -> 'dark')
      if (saved.theme === 'day') saved.theme = 'light';
      if (saved.theme === 'night') saved.theme = 'dark';
      state = { ...state, ...saved };
      if (!state.textHighlights || typeof state.textHighlights !== 'object') {
        state.textHighlights = {};
      }
      if (!Array.isArray(state.layers) || state.layers.length !== 3) {
        state.layers = defaultState.layers;
      }
      state.layers.forEach(L => {
        if (L.module !== 'tools' && !UNIT_MAP.has(L.itemId)) {
          L.itemId = L.module === 'eqrh' ? (EQRH_EMERGENCY[0]?.id || 'em-334')
            : L.module === 'sop' ? (EQRH_NORMAL[0]?.id || 'nm-4a4')
            : (AFM_CHAPTERS[0]?.units[0]?.id || 'du-1-1');
          L.history = [L.itemId];
          L.histIdx = 0;
        }
      });
    }
    renderAll();

    if ('serviceWorker' in navigator) {
      let swReloading = false;
      navigator.serviceWorker.addEventListener('controllerchange', () => {
        if (swReloading) return;
        swReloading = true;
        location.reload();
      });
      navigator.serviceWorker.register('./sw.js?v=5.0').then((reg) => {
        reg.update().catch(() => {});
        swStatusLabel = 'Active (v5.0)';
      }).catch(() => {
        swStatusLabel = 'Local (v5.0)';
      });
    }
  }

  init();
})();
