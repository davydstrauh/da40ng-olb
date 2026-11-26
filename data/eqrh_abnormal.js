window.EQRH_ABNORMAL = [
  {
    "id": "ab-4b31",
    "code": "4B.3.1",
    "cas": "ECU A FAIL",
    "group": "G1000 CAUTIONS",
    "title": {
      "en": "ECU A FAIL — ENGINE CONTROL UNIT A FAILURE",
      "ru": "ECU A FAIL — ОТКАЗ БЛОКА УПРАВЛЕНИЯ ДВИГАТЕЛЕМ A"
    },
    "subtitle": {
      "en": "ECU A has failed or is being tested during FADEC test. System auto-switches to ECU B.",
      "ru": "Неисправность ECU A (или тестирование FADEC). Система автоматически переключается на ECU B."
    },
    "blocks": [
      {
        "type": "note",
        "text": {
          "en": "Non-latched cautions clear only on the active ECU (on passive ECU by selecting that ECU with VOTER). Latched cautions remain until cleared by maintenance.",
          "ru": "Нефиксируемые отказы сбрасываются только на активном ECU (на пассивном — переключением VOTER). Фиксируемые требуют техобслуживания."
        }
      },
      {
        "type": "branch",
        "id": "b1",
        "prompt": {
          "en": "SELECT CONDITION — ON GROUND OR IN FLIGHT:",
          "ru": "ВЫБЕРИТЕ УСЛОВИЕ — НА ЗЕМЛЕ ИЛИ В ПОЛЁТЕ:"
        },
        "options": [
          {
            "id": "gnd",
            "label": {
              "en": "(a) ECU A CAUTION ON GROUND (CLEARING)",
              "ru": "(a) ОТКАЗ ECU A НА ЗЕМЛЕ (СБРОС)"
            },
            "badge": "AMBER",
            "items": [
              {
                "type": "step",
                "id": "g1",
                "item": {
                  "en": "1. ALTERNATE AIR",
                  "ru": "1. ALTERNATE AIR (резервный воздух)"
                },
                "action": {
                  "en": "CHECK CLOSED",
                  "ru": "ПРОВЕРИТЬ ЗАКРЫТ (CLOSED)"
                }
              },
              {
                "type": "step",
                "id": "g2",
                "item": {
                  "en": "2. Fuel pumps",
                  "ru": "2. Топливные насосы"
                },
                "action": {
                  "en": "OFF",
                  "ru": "ВЫКЛ (OFF)"
                }
              },
              {
                "type": "step",
                "id": "g3",
                "item": {
                  "en": "3. VOTER switch",
                  "ru": "3. Переключатель VOTER"
                },
                "action": {
                  "en": "CHECK AUTO",
                  "ru": "ПРОВЕРИТЬ AUTO"
                }
              },
              {
                "type": "step",
                "id": "g4",
                "item": {
                  "en": "4. ECU B caution",
                  "ru": "4. Сигнализация ECU B"
                },
                "action": {
                  "en": "CHECK OFF",
                  "ru": "УБЕДИТЬСЯ, ЧТО НЕ ГОРИТ"
                }
              },
              {
                "type": "step",
                "id": "g5",
                "item": {
                  "en": "5. VOTER switch",
                  "ru": "5. Переключатель VOTER"
                },
                "action": {
                  "en": "ECU A",
                  "ru": "ECU A"
                }
              },
              {
                "type": "step",
                "id": "g6",
                "item": {
                  "en": "6. Wait",
                  "ru": "6. Выждать"
                },
                "action": {
                  "en": "5 SECONDS",
                  "ru": "5 СЕКУНД"
                }
              },
              {
                "type": "step",
                "id": "g7",
                "item": {
                  "en": "7. VOTER switch",
                  "ru": "7. Переключатель VOTER"
                },
                "action": {
                  "en": "AUTO",
                  "ru": "AUTO"
                }
              },
              {
                "type": "caution",
                "text": {
                  "en": "If ECU A caution persists: TERMINATE FLIGHT PREPARATION.",
                  "ru": "Если сигнализация ECU A не гаснет: ПРЕКРАТИТЬ ПОДГОТОВКУ К ПОЛЁТУ."
                }
              }
            ]
          },
          {
            "id": "flt",
            "label": {
              "en": "(b) ECU A CAUTION DURING FLIGHT",
              "ru": "(b) ОТКАЗ ECU A В ПОЛЁТЕ"
            },
            "badge": "RED",
            "items": [
              {
                "type": "note",
                "text": {
                  "en": "In case of ECU A failure, the system automatically switches to ECU B.",
                  "ru": "При отказе ECU A система автоматически переходит на ECU B."
                }
              },
              {
                "type": "step",
                "id": "f1",
                "item": {
                  "en": "1. ALTERNATE AIR",
                  "ru": "1. ALTERNATE AIR"
                },
                "action": {
                  "en": "OPEN",
                  "ru": "ОТКРЫТЬ (OPEN)"
                }
              },
              {
                "type": "step",
                "id": "f2",
                "item": {
                  "en": "2. Fuel pumps",
                  "ru": "2. Топливные насосы"
                },
                "action": {
                  "en": "ON",
                  "ru": "ВКЛ (ON)"
                }
              },
              {
                "type": "step",
                "id": "f3",
                "item": {
                  "en": "3. Circuit breakers",
                  "ru": "3. Предохранители (АЗС)"
                },
                "action": {
                  "en": "CHECK / RESET IF NECESSARY",
                  "ru": "ПРОВЕРИТЬ / ЗАМКНУТЬ"
                }
              },
              {
                "type": "step",
                "id": "f4",
                "item": {
                  "en": "4. VOTER switch",
                  "ru": "4. Переключатель VOTER"
                },
                "action": {
                  "en": "AUTO",
                  "ru": "AUTO"
                }
              },
              {
                "type": "caution",
                "text": {
                  "en": "If ECU A caution persists: Land at next suitable airfield. If additional engine problems occur, refer to 3.3.3.",
                  "ru": "Если сигнал не гаснет: выполнить посадку на ближайшем пригодном аэродроме. При дополнительных сбоях двигателя см. 3.3.3."
                }
              },
              {
                "type": "link",
                "target": "em-333",
                "label": {
                  "en": "IF ENGINE PROBLEMS → 3.3.3 ENGINE TROUBLESHOOTING",
                  "ru": "ПРИ СБОЯХ ДВИГАТЕЛЯ → 3.3.3 УСТРАНЕНИЕ НЕИСПРАВНОСТЕЙ"
                }
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "ab-4b32",
    "code": "4B.3.2",
    "cas": "ECU B FAIL",
    "group": "G1000 CAUTIONS",
    "title": {
      "en": "ECU B FAIL — ENGINE CONTROL UNIT B FAILURE",
      "ru": "ECU B FAIL — ОТКАЗ БЛОКА УПРАВЛЕНИЯ ДВИГАТЕЛЕМ B"
    },
    "subtitle": {
      "en": "ECU B has failed or is being tested during FADEC test. System auto-switches to ECU A.",
      "ru": "Неисправность ECU B (или тестирование FADEC). Система автоматически переключается на ECU A."
    },
    "blocks": [
      {
        "type": "branch",
        "id": "b1",
        "prompt": {
          "en": "SELECT CONDITION — ON GROUND OR IN FLIGHT:",
          "ru": "ВЫБЕРИТЕ УСЛОВИЕ — НА ЗЕМЛЕ ИЛИ В ПОЛЁТЕ:"
        },
        "options": [
          {
            "id": "gnd",
            "label": {
              "en": "(a) ECU B CAUTION ON GROUND (CLEARING)",
              "ru": "(a) ОТКАЗ ECU B НА ЗЕМЛЕ (СБРОС)"
            },
            "badge": "AMBER",
            "items": [
              {
                "type": "step",
                "id": "g1",
                "item": {
                  "en": "1. ALTERNATE AIR",
                  "ru": "1. ALTERNATE AIR"
                },
                "action": {
                  "en": "CHECK CLOSED",
                  "ru": "ПРОВЕРИТЬ ЗАКРЫТ (CLOSED)"
                }
              },
              {
                "type": "step",
                "id": "g2",
                "item": {
                  "en": "2. Fuel pumps",
                  "ru": "2. Топливные насосы"
                },
                "action": {
                  "en": "OFF",
                  "ru": "ВЫКЛ (OFF)"
                }
              },
              {
                "type": "step",
                "id": "g3",
                "item": {
                  "en": "3. VOTER switch",
                  "ru": "3. Переключатель VOTER"
                },
                "action": {
                  "en": "CHECK AUTO",
                  "ru": "ПРОВЕРИТЬ AUTO"
                }
              },
              {
                "type": "step",
                "id": "g4",
                "item": {
                  "en": "4. ECU A caution",
                  "ru": "4. Сигнализация ECU A"
                },
                "action": {
                  "en": "CHECK OFF",
                  "ru": "УБЕДИТЬСЯ, ЧТО НЕ ГОРИТ"
                }
              },
              {
                "type": "step",
                "id": "g5",
                "item": {
                  "en": "5. VOTER switch",
                  "ru": "5. Переключатель VOTER"
                },
                "action": {
                  "en": "ECU B",
                  "ru": "ECU B"
                }
              },
              {
                "type": "step",
                "id": "g6",
                "item": {
                  "en": "6. Wait",
                  "ru": "6. Выждать"
                },
                "action": {
                  "en": "5 SECONDS",
                  "ru": "5 СЕКУНД"
                }
              },
              {
                "type": "step",
                "id": "g7",
                "item": {
                  "en": "7. VOTER switch",
                  "ru": "7. Переключатель VOTER"
                },
                "action": {
                  "en": "AUTO",
                  "ru": "AUTO"
                }
              },
              {
                "type": "caution",
                "text": {
                  "en": "If ECU B caution persists: TERMINATE FLIGHT PREPARATION.",
                  "ru": "Если сигнализация ECU B не гаснет: ПРЕКРАТИТЬ ПОДГОТОВКУ К ПОЛЁТУ."
                }
              }
            ]
          },
          {
            "id": "flt",
            "label": {
              "en": "(b) ECU B CAUTION DURING FLIGHT",
              "ru": "(b) ОТКАЗ ECU B В ПОЛЁТЕ"
            },
            "badge": "RED",
            "items": [
              {
                "type": "note",
                "text": {
                  "en": "In case of ECU B failure, the system automatically switches to ECU A.",
                  "ru": "При отказе ECU B система автоматически переходит на ECU A."
                }
              },
              {
                "type": "step",
                "id": "f1",
                "item": {
                  "en": "1. ALTERNATE AIR",
                  "ru": "1. ALTERNATE AIR"
                },
                "action": {
                  "en": "OPEN",
                  "ru": "ОТКРЫТЬ (OPEN)"
                }
              },
              {
                "type": "step",
                "id": "f2",
                "item": {
                  "en": "2. Fuel pumps",
                  "ru": "2. Топливные насосы"
                },
                "action": {
                  "en": "ON",
                  "ru": "ВКЛ (ON)"
                }
              },
              {
                "type": "step",
                "id": "f3",
                "item": {
                  "en": "3. Circuit breakers",
                  "ru": "3. Предохранители (АЗС)"
                },
                "action": {
                  "en": "CHECK / RESET IF NECESSARY",
                  "ru": "ПРОВЕРИТЬ / ЗАМКНУТЬ"
                }
              },
              {
                "type": "step",
                "id": "f4",
                "item": {
                  "en": "4. VOTER switch",
                  "ru": "4. Переключатель VOTER"
                },
                "action": {
                  "en": "AUTO",
                  "ru": "AUTO"
                }
              },
              {
                "type": "caution",
                "text": {
                  "en": "If ECU B caution persists: Land at next suitable airfield. If additional engine problems occur, refer to 3.3.3.",
                  "ru": "Если сигнал не гаснет: выполнить посадку на ближайшем пригодном аэродроме. При сбоях двигателя см. 3.3.3."
                }
              },
              {
                "type": "link",
                "target": "em-333",
                "label": {
                  "en": "IF ENGINE PROBLEMS → 3.3.3 ENGINE TROUBLESHOOTING",
                  "ru": "ПРИ СБОЯХ ДВИГАТЕЛЯ → 3.3.3 УСТРАНЕНИЕ НЕИСПРАВНОСТЕЙ"
                }
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "ab-4b33",
    "code": "4B.3.3",
    "cas": "FUEL LOW",
    "group": "G1000 CAUTIONS",
    "title": {
      "en": "FUEL LOW — LEFT (MAIN) FUEL QUANTITY LOW",
      "ru": "FUEL LOW — НИЗКИЙ УРОВЕНЬ ТОПЛИВА В ОСНОВНОМ БАКЕ"
    },
    "subtitle": {
      "en": "Usable fuel in left (main) tank is low. Calibrated for straight and level flight.",
      "ru": "Низкий уровень расходуемого топлива в основном (левом) баке."
    },
    "blocks": [
      {
        "type": "step",
        "id": "s1",
        "item": {
          "en": "1. Fuel transfer pump",
          "ru": "1. Насос перекачки топлива"
        },
        "action": {
          "en": "ON",
          "ru": "ВКЛ (ON)"
        }
      },
      {
        "type": "step",
        "id": "s2",
        "item": {
          "en": "2. Fuel quantity",
          "ru": "2. Количество топлива"
        },
        "action": {
          "en": "CHECK",
          "ru": "ПРОВЕРИТЬ"
        }
      },
      {
        "type": "step",
        "id": "s3",
        "item": {
          "en": "3. Flight coordination",
          "ru": "3. Координация полёта"
        },
        "action": {
          "en": "RETURN TO COORDINATED FLIGHT (≤ ½ BALL SLIP, 3°–5° BANK)",
          "ru": "УСТРАНИТЬ СКОЛЬЖЕНИЕ (≤ ½ ШАРИКА, КРЕН 3°–5°)"
        }
      },
      {
        "type": "branch",
        "id": "b1",
        "prompt": {
          "en": "DOES FUEL LOW CAUTION EXTINGUISH?",
          "ru": "СИГНАЛ FUEL LOW ПОГАС?"
        },
        "options": [
          {
            "id": "yes",
            "label": {
              "en": "YES — CAUTION EXTINGUISHED",
              "ru": "ДА — СИГНАЛ ПОГАС"
            },
            "badge": "GREEN",
            "items": [
              {
                "type": "note",
                "text": {
                  "en": "Continue monitoring MAIN & AUX fuel quantities and transfer rate (~1 US gal/min).",
                  "ru": "Продолжайте контролировать остаток в основном и резервном баках (~1 галл/мин)."
                }
              }
            ]
          },
          {
            "id": "no",
            "label": {
              "en": "NO — CAUTION REMAINS ON",
              "ru": "НЕТ — СИГНАЛ ПРОДОЛЖАЕТ ГОРЕТЬ"
            },
            "badge": "RED",
            "items": [
              {
                "type": "caution",
                "text": {
                  "en": "Expect loss of fuel.",
                  "ru": "Ожидайте утечку топлива."
                }
              },
              {
                "type": "step",
                "id": "s4",
                "item": {
                  "en": "4. Fuel valve",
                  "ru": "4. Топливный кран"
                },
                "action": {
                  "en": "EMERGENCY",
                  "ru": "АВАРИЙНОЕ (EMERGENCY)"
                }
              },
              {
                "type": "step",
                "id": "s5",
                "item": {
                  "en": "5. Fuel transfer pump",
                  "ru": "5. Насос перекачки"
                },
                "action": {
                  "en": "OFF",
                  "ru": "ВЫКЛ (OFF)"
                }
              },
              {
                "type": "warning",
                "text": {
                  "en": "If caution still does not extinguish: Be prepared for emergency landing (3.7.1). If air enters high pressure fuel pump, inspection is mandatory before next flight.",
                  "ru": "Если сигнал не гаснет: подготовьтесь к аварийной посадке (3.7.1). При попадании воздуха в ТНВД требуется техосмотр перед следующим полётом."
                }
              },
              {
                "type": "link",
                "target": "em-371",
                "label": {
                  "en": "GO TO 3.7.1 — EMERGENCY LANDING WITH ENGINE OFF",
                  "ru": "ПЕРЕЙТИ К 3.7.1 — АВАРИЙНАЯ ПОСАДКА"
                }
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "ab-4b34",
    "code": "4B.3.4",
    "cas": "COOL LVL",
    "group": "G1000 CAUTIONS",
    "title": {
      "en": "COOL LVL — ENGINE COOLANT LEVEL LOW",
      "ru": "COOL LVL — НИЗКИЙ УРОВЕНЬ ОХЛАЖДАЮЩЕЙ ЖИДКОСТИ"
    },
    "subtitle": {
      "en": "May indicate coolant leak leading to loss of cooling and engine failure.",
      "ru": "Может указывать на утечку ОЖ, ухудшение охлаждения и последующий отказ двигателя."
    },
    "blocks": [
      {
        "type": "step",
        "id": "s1",
        "item": {
          "en": "1. Annunciations / engine instruments",
          "ru": "1. Сигнализация и приборы двигателя"
        },
        "action": {
          "en": "MONITOR CLOSELY (CHECK COOLANT TEMP)",
          "ru": "ВНИМАТЕЛЬНО КОНТРОЛИРОВАТЬ (ТЕМП. ОЖ)"
        }
      },
      {
        "type": "note",
        "text": {
          "en": "Calibrated for straight & level flight; may trigger briefly during uncoordinated turns or taxiing in curves.",
          "ru": "Калибровка для прямолинейного ГП; возможны кратковременные срабатывания при скольжении или рулении."
        }
      },
      {
        "type": "link",
        "target": "ab-4b22",
        "label": {
          "en": "GO TO 4B.2.2 — COOLANT TEMPERATURE",
          "ru": "ПЕРЕЙТИ К 4B.2.2 — ТЕМПЕРАТУРА ОЖ"
        }
      }
    ]
  },
  {
    "id": "ab-4b35",
    "code": "4B.3.5",
    "cas": "PITOT FAIL",
    "group": "G1000 CAUTIONS",
    "title": {
      "en": "PITOT FAIL — PITOT HEATING FAILURE",
      "ru": "PITOT FAIL — ОТКАЗ ОБОГРЕВА ППД"
    },
    "subtitle": {
      "en": "Pitot heating system has failed.",
      "ru": "Неисправность системы обогрева приёмника полного давления."
    },
    "blocks": [
      {
        "type": "subhead",
        "text": {
          "en": "IF IN ICING CONDITIONS:",
          "ru": "ПРИ НАЛИЧИИ УСЛОВИЙ ОБЛЕДЕНЕНИЯ:"
        }
      },
      {
        "type": "step",
        "id": "s1",
        "item": {
          "en": "1. Airspeed indication",
          "ru": "1. Индикация скорости"
        },
        "action": {
          "en": "EXPECT LOSS OF AIRSPEED INDICATION",
          "ru": "ОЖИДАТЬ ОТКАЗ УКАЗАТЕЛЯ СКОРОСТИ"
        }
      },
      {
        "type": "step",
        "id": "s2",
        "item": {
          "en": "2. Icing zone",
          "ru": "2. Зона обледенения"
        },
        "action": {
          "en": "LEAVE IMMEDIATELY (SEE 3.9.1)",
          "ru": "НЕМЕДЛЕННО ПОКИНУТЬ (3.9.1)"
        }
      },
      {
        "type": "link",
        "target": "em-391",
        "label": {
          "en": "GO TO 3.9.1 — ICING",
          "ru": "ПЕРЕЙТИ К 3.9.1 — ОБЛЕДЕНЕНИЕ"
        }
      }
    ]
  },
  {
    "id": "ab-4b27",
    "code": "4B.2.7",
    "cas": "VOLTS LOW",
    "group": "G1000 CAUTIONS",
    "title": {
      "en": "VOLTS LOW — LOW VOLTAGE (< 25 V)",
      "ru": "VOLTS LOW — НИЗКОЕ НАПРЯЖЕНИЕ (< 25 В)"
    },
    "subtitle": {
      "en": "Engine bus voltage below green range (< 25 V).",
      "ru": "Напряжение бортовой сети ниже зелёного сектора (< 25 В)."
    },
    "blocks": [
      {
        "type": "branch",
        "id": "b1",
        "prompt": {
          "en": "SELECT CONDITION:",
          "ru": "ВЫБЕРИТЕ УСЛОВИЕ:"
        },
        "options": [
          {
            "id": "gnd",
            "label": {
              "en": "(a) ON GROUND WITH ENGINE RUNNING",
              "ru": "(a) НА ЗЕМЛЕ ПРИ РАБОТАЮЩЕМ ДВИГАТЕЛЕ"
            },
            "badge": "RED",
            "items": [
              {
                "type": "warning",
                "text": {
                  "en": "TERMINATE FLIGHT PREPARATION.",
                  "ru": "ПРЕКРАТИТЬ ПОДГОТОВКУ К ПОЛЁТУ."
                }
              }
            ]
          },
          {
            "id": "flt",
            "label": {
              "en": "(b) DURING FLIGHT",
              "ru": "(b) В ПОЛЁТЕ"
            },
            "badge": "AMBER",
            "items": [
              {
                "type": "step",
                "id": "f1",
                "item": {
                  "en": "1. Circuit breakers",
                  "ru": "1. Предохранители (АЗС)"
                },
                "action": {
                  "en": "CHECK",
                  "ru": "ПРОВЕРИТЬ"
                }
              },
              {
                "type": "step",
                "id": "f2",
                "item": {
                  "en": "2. Electrical equipment",
                  "ru": "2. Электрооборудование"
                },
                "action": {
                  "en": "OFF IF NOT NEEDED",
                  "ru": "ВЫКЛЮЧИТЬ НЕНУЖНОЕ"
                }
              },
              {
                "type": "link",
                "target": "em-328",
                "label": {
                  "en": "IF LOW VOLTAGE PERSISTS → 3.2.8 ALTERNATOR FAIL",
                  "ru": "ЕСЛИ НЕ ГАСНЕТ → 3.2.8 ОТКАЗ ГЕНЕРАТОРА"
                }
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "ab-4b28",
    "code": "4B.2.8",
    "cas": null,
    "group": "OUT OF GREEN RANGE",
    "title": {
      "en": "CURRENT — HIGH ALTERNATOR LOAD (> 60 A YELLOW)",
      "ru": "СИЛА ТОКА — НАГРУЗКА ГЕНЕРАТОРА В ЖЁЛТОМ СЕКТОРЕ (> 60 А)"
    },
    "subtitle": {
      "en": "Electric power consumption exceeds 60 A.",
      "ru": "Потребление тока превышает 60 А."
    },
    "blocks": [
      {
        "type": "step",
        "id": "s1",
        "item": {
          "en": "1. Electrical equipment",
          "ru": "1. Электрооборудование"
        },
        "action": {
          "en": "SWITCH OFF AS NECESSARY & POSSIBLE",
          "ru": "ВЫКЛЮЧИТЬ ВСЁ НЕНУЖНОЕ ДЛЯ СНИЖЕНИЯ НАГРУЗКИ"
        }
      },
      {
        "type": "step",
        "id": "s2",
        "item": {
          "en": "2. If problem does not clear",
          "ru": "2. Если проблема не исчезла"
        },
        "action": {
          "en": "LAND ON NEAREST SUITABLE AIRFIELD",
          "ru": "ПОСАДКА НА БЛИЖАЙШЕМ ПРИГОДНОМ АЭРОДРОМЕ"
        },
        "deferrable": true
      }
    ]
  },
  {
    "id": "ab-4b21",
    "code": "4B.2.1",
    "cas": null,
    "group": "OUT OF GREEN RANGE",
    "title": {
      "en": "RPM — HIGH RPM (2100–2300 RPM YELLOW)",
      "ru": "ОБОРОТЫ ДВИГАТЕЛЯ — ВЫСОКИЕ ОБОРОТЫ (2100–2300 ОБ/МИН)"
    },
    "subtitle": {
      "en": "Yellow range (2100–2300 RPM) permissible up to 5 minutes (T/O or Go-Around).",
      "ru": "Жёлтый сектор (2100–2300 об/мин) допускается до 5 минут (взлёт/уход на второй круг)."
    },
    "blocks": [
      {
        "type": "step",
        "id": "s1",
        "item": {
          "en": "1. POWER lever",
          "ru": "1. РУД"
        },
        "action": {
          "en": "REDUCE POWER",
          "ru": "УМЕНЬШИТЬ РЕЖИМ"
        }
      },
      {
        "type": "step",
        "id": "s2",
        "item": {
          "en": "2. RPM",
          "ru": "2. Обороты винта"
        },
        "action": {
          "en": "KEEP WITHIN GREEN RANGE (≤ 2100 RPM)",
          "ru": "УДЕРЖИВАТЬ В ЗЕЛЁНОМ СЕКТОРЕ (≤ 2100 ОБ/МИН)"
        }
      },
      {
        "type": "step",
        "id": "s3",
        "item": {
          "en": "3. If not solved",
          "ru": "3. Если проблема не решена"
        },
        "action": {
          "en": "LAND AT NEAREST SUITABLE AIRFIELD (SEE 3.3.6)",
          "ru": "ПОСАДКА НА БЛИЖАЙШЕМ АЭРОДРОМЕ (СМ. 3.3.6)"
        }
      },
      {
        "type": "link",
        "target": "em-336",
        "label": {
          "en": "GO TO 3.3.6 — DEFECTIVE RPM REGULATING SYSTEM",
          "ru": "ПЕРЕЙТИ К 3.3.6 — НЕИСПРАВНОСТЬ РЕГУЛИРОВАНИЯ ОБОРОТОВ"
        }
      }
    ]
  },
  {
    "id": "ab-4b22",
    "code": "4B.2.2",
    "cas": null,
    "group": "OUT OF GREEN RANGE",
    "title": {
      "en": "COOLANT TEMPERATURE (OUTSIDE GREEN RANGE)",
      "ru": "ТЕМПЕРАТУРА ОХЛАЖДАЮЩЕЙ ЖИДКОСТИ (ВНЕ ЗЕЛЁНОГО СЕКТОРА)"
    },
    "subtitle": {
      "en": "Normal: 60–100 °C (Rev. 4). Yellow: -30..60 °C or 100..105 °C.",
      "ru": "Норма (Ред. 4): 60–100 °C. Жёлтый сектор: -30..60 °C или 100..105 °C."
    },
    "blocks": [
      {
        "type": "branch",
        "id": "b1",
        "prompt": {
          "en": "HIGH OR LOW COOLANT TEMPERATURE?",
          "ru": "ВЫСОКАЯ ИЛИ НИЗКАЯ ТЕМПЕРАТУРА ОЖ?"
        },
        "options": [
          {
            "id": "high",
            "label": {
              "en": "(a) HIGH COOLANT TEMP (> 100 °C)",
              "ru": "(a) ВЫСОКАЯ ТЕМПЕРАТУРА ОЖ (> 100 °C)"
            },
            "badge": "RED",
            "items": [
              {
                "type": "link",
                "target": "em-321",
                "label": {
                  "en": "PROCEED ACCORDING TO 3.2.1 — ENGINE TEMPERATURE",
                  "ru": "ВЫПОЛНЯТЬ 3.2.1 — ТЕМПЕРАТУРА ДВИГАТЕЛЯ"
                }
              }
            ]
          },
          {
            "id": "low",
            "label": {
              "en": "(b) LOW COOLANT TEMP (< 60 °C)",
              "ru": "(b) НИЗКАЯ ТЕМПЕРАТУРА ОЖ (< 60 °C)"
            },
            "badge": "AMBER",
            "items": [
              {
                "type": "step",
                "id": "l1",
                "item": {
                  "en": "COOL LVL caution",
                  "ru": "Сигнализация COOL LVL"
                },
                "action": {
                  "en": "CHECK",
                  "ru": "ПРОВЕРИТЬ"
                }
              },
              {
                "type": "note",
                "text": {
                  "en": "During extended low-power descent from high altitude, increasing power and reducing airspeed can restore temperature.",
                  "ru": "При длительном снижении на малом газе увеличение режима и уменьшение скорости помогает восстановить температуру."
                }
              },
              {
                "type": "warning",
                "text": {
                  "en": "If COOL LVL is DISPLAYED: Reduce power, expect loss of coolant, and prepare for engine failure (3.3.3 / 3.3.4).",
                  "ru": "Если горит COOL LVL: уменьшите режим, ожидайте утечку ОЖ, подготовьтесь к отказу двигателя (3.3.3 / 3.3.4)."
                }
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "ab-4b23",
    "code": "4B.2.3",
    "cas": null,
    "group": "OUT OF GREEN RANGE",
    "title": {
      "en": "OIL TEMPERATURE (OUTSIDE GREEN RANGE)",
      "ru": "ТЕМПЕРАТУРА МАСЛА (ВНЕ ЗЕЛЁНОГО СЕКТОРА)"
    },
    "subtitle": {
      "en": "Normal: 50–135 °C. High → 3.2.2; Low (< 50 °C) → Increase power / Reduce airspeed.",
      "ru": "Норма: 50–135 °C. Высокая → 3.2.2; Низкая (< 50 °C) → Увеличить режим / Снизить скорость."
    },
    "blocks": [
      {
        "type": "branch",
        "id": "b1",
        "prompt": {
          "en": "HIGH OR LOW OIL TEMPERATURE?",
          "ru": "ВЫСОКАЯ ИЛИ НИЗКАЯ ТЕМПЕРАТУРА МАСЛА?"
        },
        "options": [
          {
            "id": "high",
            "label": {
              "en": "(a) HIGH OIL TEMP (> 135 °C)",
              "ru": "(a) ВЫСОКАЯ ТЕМПЕРАТУРА МАСЛА (> 135 °C)"
            },
            "badge": "RED",
            "items": [
              {
                "type": "link",
                "target": "em-322",
                "label": {
                  "en": "GO TO 3.2.2 — OIL TEMPERATURE",
                  "ru": "ПЕРЕЙТИ К 3.2.2 — ТЕМПЕРАТУРА МАСЛА"
                }
              }
            ]
          },
          {
            "id": "low",
            "label": {
              "en": "(b) LOW OIL TEMP (< 50 °C)",
              "ru": "(b) НИЗКАЯ ТЕМПЕРАТУРА МАСЛА (< 50 °C)"
            },
            "badge": "AMBER",
            "items": [
              {
                "type": "step",
                "id": "l1",
                "item": {
                  "en": "POWER lever",
                  "ru": "РУД"
                },
                "action": {
                  "en": "INCREASE POWER",
                  "ru": "УВЕЛИЧИТЬ РЕЖИМ"
                }
              },
              {
                "type": "step",
                "id": "l2",
                "item": {
                  "en": "Airspeed",
                  "ru": "Воздушная скорость"
                },
                "action": {
                  "en": "REDUCE AIRSPEED",
                  "ru": "УМЕНЬШИТЬ СКОРОСТЬ"
                }
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "ab-4b24",
    "code": "4B.2.4",
    "cas": null,
    "group": "OUT OF GREEN RANGE",
    "title": {
      "en": "OIL PRESSURE — HIGH OIL PRESSURE (> 6.0 BAR)",
      "ru": "ДАВЛЕНИЕ МАСЛА — ВЫСОКОЕ ДАВЛЕНИЕ (> 6,0 БАР)"
    },
    "subtitle": {
      "en": "Normal: 2.5–6.0 bar. High oil pressure check depends on oil & coolant temperatures.",
      "ru": "Норма: 2,5–6,0 бар. Действия зависят от температуры масла и ОЖ."
    },
    "blocks": [
      {
        "type": "note",
        "text": {
          "en": "At low oil temperature during warm-up, high oil pressure may occur — reduce power until warning clears and warm up at reduced setting.",
          "ru": "При холодном масле на прогреве возможно высокое давление — уменьшите режим до исчезновения сигнализации."
        }
      },
      {
        "type": "step",
        "id": "s1",
        "item": {
          "en": "Oil temperature & Coolant temperature",
          "ru": "Температура масла и ОЖ"
        },
        "action": {
          "en": "CHECK",
          "ru": "ПРОВЕРИТЬ"
        }
      },
      {
        "type": "branch",
        "id": "b1",
        "prompt": {
          "en": "ARE OIL & COOLANT TEMPERATURES IN GREEN RANGE?",
          "ru": "ТЕМПЕРАТУРЫ МАСЛА И ОЖ В ЗЕЛЁНОМ СЕКТОРЕ?"
        },
        "options": [
          {
            "id": "in_green",
            "label": {
              "en": "YES — TEMPERATURES IN GREEN RANGE",
              "ru": "ДА — ТЕМПЕРАТУРЫ В ЗЕЛЁНОМ СЕКТОРЕ"
            },
            "badge": "AMBER",
            "items": [
              {
                "type": "step",
                "id": "ig1",
                "item": {
                  "en": "Oil pressure indication",
                  "ru": "Показания давления масла"
                },
                "action": {
                  "en": "EXPECT FALSE INDICATION — KEEP MONITORING TEMPS",
                  "ru": "ВОЗМОЖНА ЛОЖНАЯ ИНДИКАЦИЯ — КОНТРОЛИРОВАТЬ ТЕМПЕРАТУРЫ"
                }
              }
            ]
          },
          {
            "id": "out_green",
            "label": {
              "en": "NO — TEMPERATURES OUTSIDE GREEN RANGE",
              "ru": "НЕТ — ТЕМПЕРАТУРЫ ВНЕ ЗЕЛЁНОГО СЕКТОРА"
            },
            "badge": "RED",
            "items": [
              {
                "type": "step",
                "id": "og1",
                "item": {
                  "en": "POWER lever",
                  "ru": "РУД"
                },
                "action": {
                  "en": "REDUCE POWER",
                  "ru": "УМЕНЬШИТЬ РЕЖИМ"
                }
              },
              {
                "type": "warning",
                "text": {
                  "en": "Land at nearest suitable airfield. Prepare for engine failure (3.7.1).",
                  "ru": "Посадка на ближайшем пригодном аэродроме. Подготовиться к отказу двигателя (3.7.1)."
                }
              },
              {
                "type": "link",
                "target": "em-371",
                "label": {
                  "en": "GO TO 3.7.1 — EMERGENCY LANDING WITH ENGINE OFF",
                  "ru": "ПЕРЕЙТИ К 3.7.1 — АВАРИЙНАЯ ПОСАДКА"
                }
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "ab-4b26",
    "code": "4B.2.6",
    "cas": null,
    "group": "OUT OF GREEN RANGE",
    "title": {
      "en": "FUEL TEMPERATURE (OUTSIDE GREEN RANGE)",
      "ru": "ТЕМПЕРАТУРА ТОПЛИВА (ВНЕ ЗЕЛЁНОГО СЕКТОРА)"
    },
    "subtitle": {
      "en": "Normal: -20..+55 °C. High (>55 °C) → 3.2.5; Low (<-20 °C) → Increase power / Reduce speed.",
      "ru": "Норма: -20..+55 °C. Высокая → 3.2.5; Низкая (<-20 °C) → Увеличить режим / Снизить скорость."
    },
    "blocks": [
      {
        "type": "step",
        "id": "s1",
        "item": {
          "en": "If low fuel temp: POWER lever",
          "ru": "При низкой темп. топлива: РУД"
        },
        "action": {
          "en": "INCREASE POWER",
          "ru": "УВЕЛИЧИТЬ МОЩНОСТЬ"
        }
      },
      {
        "type": "step",
        "id": "s2",
        "item": {
          "en": "Airspeed",
          "ru": "Воздушная скорость"
        },
        "action": {
          "en": "REDUCE AIRSPEED",
          "ru": "УМЕНЬШИТЬ СКОРОСТЬ"
        }
      },
      {
        "type": "caution",
        "text": {
          "en": "If fuel temperature does not return to green range, perform precautionary landing on nearest suitable airfield. Prepare for engine failure (3.3.4).",
          "ru": "Если температура топлива не возвращается в зелёный сектор — выполнить посадку на ближайшем аэродроме. Подготовиться к отказу двигателя (3.3.4)."
        }
      }
    ]
  },
  {
    "id": "ab-4b5",
    "code": "4B.5",
    "cas": null,
    "group": "SYSTEMS & OTHER",
    "title": {
      "en": "FAILURES IN FLAP OPERATING SYSTEM",
      "ru": "ОТКАЗЫ СИСТЕМЫ УПРАВЛЕНИЯ ЗАКРЫЛКАМИ"
    },
    "subtitle": {
      "en": "Failure in flap position indication or function + modified approach speeds.",
      "ru": "Отказ индикации или привода закрылков + модифицированные скорости захода."
    },
    "blocks": [
      {
        "type": "step",
        "id": "s1",
        "item": {
          "en": "1. FLAPS position",
          "ru": "1. Положение закрылков"
        },
        "action": {
          "en": "CHECK VISUALLY",
          "ru": "ПРОВЕРИТЬ ВИЗУАЛЬНО"
        }
      },
      {
        "type": "step",
        "id": "s2",
        "item": {
          "en": "2. Airspeed",
          "ru": "2. Воздушная скорость"
        },
        "action": {
          "en": "KEEP IN WHITE RANGE (MAX 98 KIAS)",
          "ru": "УДЕРЖИВАТЬ В БЕЛОМ СЕКТОРЕ (≤ 98 УЗЛОВ)"
        }
      },
      {
        "type": "step",
        "id": "s3",
        "item": {
          "en": "3. FLAPS switch",
          "ru": "3. Переключатель FLAPS"
        },
        "action": {
          "en": "RE-CHECK ALL POSITIONS",
          "ru": "ПРОВЕРИТЬ ВО ВСЕХ ПОЛОЖЕНИЯХ"
        }
      },
      {
        "type": "branch",
        "id": "b1",
        "prompt": {
          "en": "SELECT AVAILABLE FLAP SETTING:",
          "ru": "ВЫБЕРИТЕ ДОСТУПНОЕ ПОЛОЖЕНИЕ ЗАКРЫЛКОВ:"
        },
        "options": [
          {
            "id": "up",
            "label": {
              "en": "(a) ONLY UP AVAILABLE",
              "ru": "(a) ДОСТУПНО ТОЛЬКО UP (УБРАНЫ)"
            },
            "badge": "RED",
            "items": [
              {
                "type": "table",
                "headers": {
                  "en": [
                    "Mass",
                    "940 kg",
                    "1000 kg",
                    "1100 kg",
                    "1200 kg",
                    "1216 kg",
                    "1280+ kg"
                  ],
                  "ru": [
                    "Масса",
                    "940 кг",
                    "1000 кг",
                    "1100 кг",
                    "1200 кг",
                    "1216 кг",
                    "1280+ кг"
                  ]
                },
                "rows": [
                  [
                    "VREF (UP)",
                    "71 KIAS",
                    "73 KIAS",
                    "78 KIAS",
                    "82 KIAS",
                    "82 KIAS",
                    "83 KIAS"
                  ]
                ]
              },
              {
                "type": "caution",
                "text": {
                  "en": "Land at a flat approach angle; use POWER lever to control airspeed and rate of descent. Expect significantly increased landing distance (AFM 5.3.13).",
                  "ru": "Заход по пологой глиссаде; выдерживать скорость и вертикальную скорость РУДом. Учесть значительное увеличение посадочной дистанции (5.3.13)."
                }
              }
            ]
          },
          {
            "id": "to",
            "label": {
              "en": "(b) ONLY T/O AVAILABLE",
              "ru": "(b) ДОСТУПНО ТОЛЬКО T/O (ВЗЛЁТ)"
            },
            "badge": "AMBER",
            "items": [
              {
                "type": "table",
                "headers": {
                  "en": [
                    "Mass",
                    "940 kg",
                    "1000 kg",
                    "1100 kg",
                    "1200 kg",
                    "1216 kg",
                    "1280+ kg"
                  ],
                  "ru": [
                    "Масса",
                    "940 кг",
                    "1000 кг",
                    "1100 кг",
                    "1200 кг",
                    "1216 кг",
                    "1280+ кг"
                  ]
                },
                "rows": [
                  [
                    "VREF (T/O)",
                    "68 KIAS",
                    "70 KIAS",
                    "74 KIAS",
                    "77 KIAS",
                    "77 KIAS",
                    "78 KIAS"
                  ]
                ]
              },
              {
                "type": "caution",
                "text": {
                  "en": "Land at a flat approach angle; use POWER lever to control airspeed and rate of descent.",
                  "ru": "Выполнять пологий заход; выдерживать скорость и снижение РУДом."
                }
              }
            ]
          },
          {
            "id": "ldg",
            "label": {
              "en": "(c) ONLY LDG AVAILABLE",
              "ru": "(c) ДОСТУПНО ТОЛЬКО LDG (ПОСАДКА)"
            },
            "badge": "GREEN",
            "items": [
              {
                "type": "note",
                "text": {
                  "en": "Perform normal landing (observe VFE LDG = 98 KIAS).",
                  "ru": "Выполнить нормальную посадку (не превышать VFE LDG = 98 узлов)."
                }
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "ab-4b6",
    "code": "4B.6",
    "cas": null,
    "group": "SYSTEMS & OTHER",
    "title": {
      "en": "LIGHTNING STRIKE",
      "ru": "УДАР МОЛНИИ"
    },
    "subtitle": {
      "en": "Airspeed below VO, firm control, disengage autopilot, verify instruments.",
      "ru": "Скорость ниже VO, отключить АП, сверять приборы, сесть на ближайшем аэродроме."
    },
    "blocks": [
      {
        "type": "step",
        "id": "s1",
        "item": {
          "en": "1. Airspeed",
          "ru": "1. Воздушная скорость"
        },
        "action": {
          "en": "AS LOW AS PRACTICABLE, DO NOT EXCEED VO (101/108/113 KIAS)",
          "ru": "МИНИМАЛЬНО ВОЗМОЖНАЯ, НЕ ПРЕВЫШАТЬ VO (101/108/113 УЗЛ.)"
        }
      },
      {
        "type": "step",
        "id": "s2",
        "item": {
          "en": "2. Flight controls",
          "ru": "2. Органы управления"
        },
        "action": {
          "en": "GRASP FIRMLY",
          "ru": "НАДЁЖНО УДЕРЖИВАТЬ"
        }
      },
      {
        "type": "step",
        "id": "s3",
        "item": {
          "en": "3. Autopilot (if installed)",
          "ru": "3. Автопилот"
        },
        "action": {
          "en": "DISENGAGE (CHECK)",
          "ru": "ОТКЛЮЧИТЬ (ПРОВЕРИТЬ)"
        }
      },
      {
        "type": "step",
        "id": "s4",
        "item": {
          "en": "4. PFD / Backup instruments",
          "ru": "4. PFD / Резервные приборы"
        },
        "action": {
          "en": "VERIFY PERIODICALLY",
          "ru": "ПЕРИОДИЧЕСКИ СВЕРЯТЬ"
        }
      },
      {
        "type": "step",
        "id": "s5",
        "item": {
          "en": "5–6. Flight & Landing",
          "ru": "5–6. Полёт и посадка"
        },
        "action": {
          "en": "CONTINUE BELOW VO & LAND ON NEXT SUITABLE AIRFIELD",
          "ru": "ПОЛЁТ НИЖЕ VO, ПОСАДКА НА БЛИЖАЙШЕМ АЭРОДРОМЕ"
        }
      },
      {
        "type": "caution",
        "text": {
          "en": "Avoid abrupt/full control movements, high g-loads, high yaw angles, turbulence, and known/forecast icing.",
          "ru": "Избегать резких отклонений рулей, больших перегрузок, скольжения, турбулентности и обледенения."
        }
      }
    ]
  },
  {
    "id": "ab-4b4",
    "code": "4B.4",
    "cas": null,
    "group": "SYSTEMS & OTHER",
    "title": {
      "en": "CANOPY IN COOLING GAP POSITION",
      "ru": "ФОНАРЬ В ПОЛОЖЕНИИ «ЗАЗОР ДЛЯ ОХЛАЖДЕНИЯ»"
    },
    "subtitle": {
      "en": "Inadvertent take-off with front canopy in cooling gap.",
      "ru": "Непреднамеренный взлёт с фонарём в положении «зазор для охлаждения»."
    },
    "blocks": [
      {
        "type": "caution",
        "text": {
          "en": "DO NOT attempt to close the canopy in flight. Land the airplane and close the canopy on ground.",
          "ru": "НЕ ПЫТАЙТЕСЬ закрыть фонарь в полёте. Совершите посадку и закройте фонарь на земле."
        }
      }
    ]
  },
  {
    "id": "ab-4b7",
    "code": "4B.7",
    "cas": null,
    "group": "SYSTEMS & OTHER",
    "title": {
      "en": "LANDING WITH MASS ABOVE MAXIMUM LANDING MASS",
      "ru": "ПОСАДКА С ПРЕВЫШЕНИЕМ МАКС. ПОСАДОЧНОЙ МАССЫ"
    },
    "subtitle": {
      "en": "Above 1216 kg (or above 1280 kg if MÄM 40-574 installed).",
      "ru": "Свыше 1216 кг (или свыше 1280 кг при наличии MÄM 40-574)."
    },
    "blocks": [
      {
        "type": "step",
        "id": "s1",
        "item": {
          "en": "Approach & Landing",
          "ru": "Заход и посадка"
        },
        "action": {
          "en": "PER CH. 4A, APPROACH SPEED 77 KIAS (FLAPS LDG, > 1280 KG)",
          "ru": "ПО ГЛ. 4A, СКОРОСТЬ ЗАХОДА 77 УЗЛОВ (FLAPS LDG, > 1280 КГ)"
        }
      }
    ]
  },
  {
    "id": "ab-4b9",
    "code": "4B.9",
    "cas": "ALT STATIC",
    "group": "SYSTEMS & OTHER",
    "title": {
      "en": "ERRONEOUS INDICATIONS OF AIRSPEED OR ALTITUDE (REV. 4)",
      "ru": "ОШИБОЧНЫЕ ПОКАЗАНИЯ СКОРОСТИ ИЛИ ВЫСОТЫ (РЕД. 4)"
    },
    "subtitle": {
      "en": "Added in AFM Rev. 4 (TR-MÄM-40-1087). Suspected static source blockage.",
      "ru": "Добавлено в AFM Ред. 4 (TR-MÄM-40-1087). Засорение приёмника статического давления."
    },
    "blocks": [
      {
        "type": "note",
        "text": {
          "en": "Erroneous ASI, altimeter, VSI, or autopilot behavior may result from static source blockage. Remember: Autopilot is PROHIBITED with Alternate Static open.",
          "ru": "Ошибочные показания УС, ВД, вариометра или работа АП могут быть вызваны засорением статики. Автопилот при открытом Alternate Static ЗАПРЕЩЁН."
        }
      },
      {
        "type": "step",
        "id": "s1",
        "item": {
          "en": "1. Alternate static source",
          "ru": "1. Кран резервной статики (Alternate static)"
        },
        "action": {
          "en": "OPEN",
          "ru": "ОТКРЫТЬ (OPEN)"
        }
      },
      {
        "type": "step",
        "id": "s2",
        "item": {
          "en": "2. Pitot heat",
          "ru": "2. Обогрев ППД"
        },
        "action": {
          "en": "ON",
          "ru": "ВКЛ (ON)"
        }
      },
      {
        "type": "step",
        "id": "s3",
        "item": {
          "en": "3. Emergency window(s)",
          "ru": "3. Аварийная форточка(и)"
        },
        "action": {
          "en": "CLOSE",
          "ru": "ЗАКРЫТЬ (CLOSE)"
        }
      },
      {
        "type": "step",
        "id": "s4",
        "item": {
          "en": "4. Air vents in cabin",
          "ru": "4. Вентиляция кабины"
        },
        "action": {
          "en": "CLOSE",
          "ru": "ЗАКРЫТЬ (CLOSE)"
        }
      }
    ]
  },
  {
    "id": "ab-4b1",
    "code": "4B.1",
    "cas": null,
    "group": "SYSTEMS & OTHER",
    "title": {
      "en": "PRECAUTIONARY LANDING",
      "ru": "ВЫНУЖДЕННАЯ ПОСАДКА (С РАБОТАЮЩИМ ДВИГАТЕЛЕМ)"
    },
    "subtitle": {
      "en": "Controlled off-field landing due to fuel shortage, weather, etc.",
      "ru": "Управляемая посадка вне аэродрома из-за нехватки топлива, погоды и др."
    },
    "blocks": [
      {
        "type": "note",
        "text": {
          "en": "If no level area is available, seek a landing on an upward slope.",
          "ru": "При отсутствии ровной площадки выбирайте площадку с восходящим уклоном."
        }
      },
      {
        "type": "step",
        "id": "s1",
        "item": {
          "en": "1–2. Landing area & Wind",
          "ru": "1–2. Площадка и ветер"
        },
        "action": {
          "en": "SELECT AREA & ASSESS WIND",
          "ru": "ВЫБРАТЬ УЧАСТОК И УЧЕСТЬ ВЕТЕР"
        }
      },
      {
        "type": "step",
        "id": "s3",
        "item": {
          "en": "3. Inspection pass",
          "ru": "3. Осмотр площадки"
        },
        "action": {
          "en": "OVERFLY AT SUITABLE HEIGHT TO CHECK OBSTACLES & DRIFT",
          "ru": "ОБЛЕТЕТЬ ДЛЯ ОСМОТРА ПРЕПЯТСТВИЙ И СНОСА"
        }
      },
      {
        "type": "step",
        "id": "s4",
        "item": {
          "en": "4. ATC & Approach",
          "ru": "4. УВД и заход"
        },
        "action": {
          "en": "ADVISE ATC — PERFORM 4A.5.12 APPROACH & LANDING",
          "ru": "ИЗВЕСТИТЬ УВД — ЗАХОД ПО 4A.5.12"
        }
      },
      {
        "type": "step",
        "id": "s5",
        "item": {
          "en": "5. Touchdown",
          "ru": "5. Касание"
        },
        "action": {
          "en": "LOWEST POSSIBLE AIRSPEED",
          "ru": "МИНИМАЛЬНАЯ ВОЗМОЖНАЯ СКОРОСТЬ"
        }
      },
      {
        "type": "caution",
        "text": {
          "en": "After safe touchdown, if obstacle collision/fire risk remains: ENGINE MASTER OFF, Fuel valve OFF, ELECTRIC MASTER OFF.",
          "ru": "После безопасного касания при угрозе столкновения/пожара: ENGINE MASTER OFF, Топливный кран OFF, ELECTRIC MASTER OFF."
        }
      }
    ]
  },
  {
    "id": "ab-4b8",
    "code": "4B.8",
    "cas": null,
    "group": "SYSTEMS & OTHER",
    "title": {
      "en": "STARTING ENGINE WITH EXTERNAL POWER",
      "ru": "ЗАПУСК ДВИГАТЕЛЯ ОТ НАЗЕМНОГО ИСТОЧНИКА"
    },
    "subtitle": {
      "en": "Prohibited prior to Night VFR or IFR flight if main battery is empty (AFM 2.16.2).",
      "ru": "Запрещён перед ночным ПВП или ППП с разряженной основной батареей (2.16.2)."
    },
    "blocks": [
      {
        "type": "step",
        "id": "s1",
        "item": {
          "en": "1. Pre-start cockpit setup (4B.8.1 items 1–17)",
          "ru": "1. Подготовка кабины (4B.8.1 пп. 1–17)"
        },
        "action": {
          "en": "COMPLETE (POWER IDLE, VOTER AUTO, FUEL PUMPS OFF)",
          "ru": "ВЫПОЛНИТЬ (РУД IDLE, VOTER AUTO, НАСОСЫ OFF)"
        }
      },
      {
        "type": "step",
        "id": "s2",
        "item": {
          "en": "18–19. ELECTRIC MASTER & AVIONIC MASTER",
          "ru": "18–19. ELECTRIC MASTER и AVIONIC MASTER"
        },
        "action": {
          "en": "CHECK OFF",
          "ru": "ПРОВЕРИТЬ OFF"
        }
      },
      {
        "type": "step",
        "id": "s3",
        "item": {
          "en": "20. External power",
          "ru": "20. Наземный источник питания"
        },
        "action": {
          "en": "CONNECT",
          "ru": "ПОДКЛЮЧИТЬ"
        }
      },
      {
        "type": "step",
        "id": "s4",
        "item": {
          "en": "21–25. ELECTRIC MASTER ON / G1000 / COOL LVL OFF / Fuel temp",
          "ru": "21–25. ELECTRIC MASTER ON / G1000 / COOL LVL OFF / Темп. топлива"
        },
        "action": {
          "en": "VERIFY",
          "ru": "ПРОВЕРИТЬ"
        }
      },
      {
        "type": "step",
        "id": "s5",
        "item": {
          "en": "Start sequence (4B.8.2 items 1–10)",
          "ru": "Запуск двигателя (4B.8.2 пп. 1–10)"
        },
        "action": {
          "en": "STROBE ON → ENG MSTR ON → GLOW OFF → START (MAX 10s) → OIL < 3s → 710±30 RPM",
          "ru": "МАЯК ON → ENG MSTR ON → GLOW OFF → START (≤10с) → МАСЛО <3с → 710±30"
        }
      },
      {
        "type": "step",
        "id": "s6",
        "item": {
          "en": "11–12. External power & GPU",
          "ru": "11–12. Наземный источник"
        },
        "action": {
          "en": "DISCONNECT & CHECK MOVED CLEAR OF AIRPLANE",
          "ru": "ОТКЛЮЧИТЬ И УБЕДИТЬСЯ, ЧТО УБРАН ОТ ВС"
        }
      }
    ]
  }
];
