window.EQRH_EMERGENCY = [
  {
    "id": "em-321",
    "code": "3.2.1",
    "cas": "ENG TEMP",
    "group": "G1000 WARNINGS",
    "title": {
      "en": "ENG TEMP — ENGINE COOLANT TEMPERATURE HIGH (> 105 °C)",
      "ru": "ENG TEMP — ВЫСОКАЯ ТЕМПЕРАТУРА ОХЛАЖДАЮЩЕЙ ЖИДКОСТИ (> 105 °C)"
    },
    "subtitle": {
      "en": "Coolant temperature in upper red range (> 105 °C). May lead to total loss of power.",
      "ru": "Температура ОЖ в верхнем красном диапазоне (> 105 °C). Возможна полная потеря тяги."
    },
    "blocks": [
      {
        "type": "step",
        "id": "s1",
        "item": {
          "en": "COOL LVL caution message (G1000) / WATERLEV (SED)",
          "ru": "Предупредительный сигнал COOL LVL (G1000) / WATERLEV (SED)"
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
          "en": "SELECT CONDITION — COOL LVL CAUTION STATUS:",
          "ru": "ВЫБЕРИТЕ УСЛОВИЕ — СТАТУС СИГНАЛА COOL LVL:"
        },
        "options": [
          {
            "id": "opt_off",
            "label": {
              "en": "IF COOL LVL IS NOT DISPLAYED",
              "ru": "ЕСЛИ COOL LVL НЕ ГОРИТ"
            },
            "badge": "AMBER",
            "items": [
              {
                "type": "subhead",
                "text": {
                  "en": "DURING CLIMB:",
                  "ru": "ПРИ НАБОРЕ ВЫСОТЫ:"
                }
              },
              {
                "type": "step",
                "id": "s2a",
                "item": {
                  "en": "POWER lever",
                  "ru": "РУД (POWER)"
                },
                "action": {
                  "en": "REDUCE BY 10% OR MORE AS REQUIRED",
                  "ru": "УМЕНЬШИТЬ НА 10% ИЛИ БОЛЕЕ"
                }
              },
              {
                "type": "step",
                "id": "s2b",
                "item": {
                  "en": "Airspeed",
                  "ru": "Воздушная скорость"
                },
                "action": {
                  "en": "INCREASE BY 10 KIAS OR MORE AS REQUIRED",
                  "ru": "УВЕЛИЧИТЬ НА 10 УЗЛОВ ИЛИ БОЛЕЕ"
                }
              },
              {
                "type": "step",
                "id": "s2c",
                "item": {
                  "en": "If coolant temp NOT in green within 60 sec",
                  "ru": "Если в течение 60 сек ОЖ не в зелёном секторе"
                },
                "action": {
                  "en": "REDUCE POWER AS FAR AS POSSIBLE & INCREASE AIRSPEED",
                  "ru": "УМЕНЬШИТЬ РЕЖИМ ДО МИН. И УВЕЛИЧИТЬ СКОРОСТЬ"
                }
              },
              {
                "type": "subhead",
                "text": {
                  "en": "DURING CRUISE:",
                  "ru": "В КРЕЙСЕРСКОМ ПОЛЁТЕ:"
                }
              },
              {
                "type": "step",
                "id": "s2d",
                "item": {
                  "en": "POWER lever / Airspeed",
                  "ru": "РУД / Воздушная скорость"
                },
                "action": {
                  "en": "REDUCE POWER OR INCREASE AIRSPEED (DESCEND IF NECESSARY)",
                  "ru": "УМЕНЬШИТЬ МОЩНОСТЬ ИЛИ УВЕЛИЧИТЬ СКОРОСТЬ (СНИЗИТЬСЯ)"
                }
              },
              {
                "type": "step",
                "id": "s2e",
                "item": {
                  "en": "Coolant temperature",
                  "ru": "Температура ОЖ"
                },
                "action": {
                  "en": "CHECK IN GREEN RANGE",
                  "ru": "ПРОВЕРИТЬ ВОЗВРАТ В ЗЕЛЁНЫЙ СЕКТОР"
                }
              },
              {
                "type": "caution",
                "text": {
                  "en": "If coolant temperature does not return to the green range, perform a precautionary landing on the nearest suitable airfield. Prepare for an engine failure in accordance with 3.3.4.",
                  "ru": "Если температура ОЖ не возвращается в зелёный сектор, выполнить вынужденную посадку на ближайшем пригодном аэродроме. Подготовиться к отказу двигателя (3.3.4)."
                }
              },
              {
                "type": "link",
                "target": "em-334",
                "label": {
                  "en": "GO TO 3.3.4 — ENGINE FAILURE IN FLIGHT",
                  "ru": "ПЕРЕЙТИ К 3.3.4 — ОТКАЗ ДВИГАТЕЛЯ В ПОЛЁТЕ"
                }
              }
            ]
          },
          {
            "id": "opt_on",
            "label": {
              "en": "IF COOL LVL IS DISPLAYED (ON)",
              "ru": "ЕСЛИ COOL LVL ГОРИТ"
            },
            "badge": "RED",
            "items": [
              {
                "type": "step",
                "id": "s3a",
                "item": {
                  "en": "POWER lever",
                  "ru": "РУД (POWER)"
                },
                "action": {
                  "en": "REDUCE POWER",
                  "ru": "УМЕНЬШИТЬ МОЩНОСТЬ"
                }
              },
              {
                "type": "step",
                "id": "s3b",
                "item": {
                  "en": "Coolant system",
                  "ru": "Система охлаждения"
                },
                "action": {
                  "en": "EXPECT LOSS OF COOLANT",
                  "ru": "ОЖИДАТЬ УТЕЧКУ ОЖ"
                }
              },
              {
                "type": "warning",
                "text": {
                  "en": "A further increase in coolant temperature must be expected. Prepare for an engine failure in accordance with 3.3.4 - ENGINE FAILURE IN FLIGHT.",
                  "ru": "Следует ожидать дальнейшего роста температуры ОЖ. Подготовиться к отказу двигателя в соответствии с разделом 3.3.4."
                }
              },
              {
                "type": "link",
                "target": "em-334",
                "label": {
                  "en": "GO TO 3.3.4 — ENGINE FAILURE IN FLIGHT",
                  "ru": "ПЕРЕЙТИ К 3.3.4 — ОТКАЗ ДВИГАТЕЛЯ В ПОЛЁТЕ"
                }
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "em-322",
    "code": "3.2.2",
    "cas": "OIL TEMP",
    "group": "G1000 WARNINGS",
    "title": {
      "en": "OIL TEMP — ENGINE OIL TEMPERATURE HIGH (> 140 °C)",
      "ru": "OIL TEMP — ВЫСОКАЯ ТЕМПЕРАТУРА МАСЛА (> 140 °C)"
    },
    "subtitle": {
      "en": "Oil temperature in upper red range (> 140 °C). Can lead to total loss of power.",
      "ru": "Температура масла в верхнем красном диапазоне (> 140 °C). Может привести к отказу двигателя."
    },
    "blocks": [
      {
        "type": "step",
        "id": "s1",
        "item": {
          "en": "Oil pressure",
          "ru": "Давление масла"
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
          "en": "SELECT CONDITION — OIL PRESSURE:",
          "ru": "ВЫБЕРИТЕ УСЛОВИЕ — ДАВЛЕНИЕ МАСЛА:"
        },
        "options": [
          {
            "id": "low",
            "label": {
              "en": "OUTSIDE GREEN RANGE (LOWER LIMIT)",
              "ru": "НИЖЕ ЗЕЛЁНОГО СЕКТОРА"
            },
            "badge": "RED",
            "items": [
              {
                "type": "step",
                "id": "s2a",
                "item": {
                  "en": "POWER lever",
                  "ru": "РУД"
                },
                "action": {
                  "en": "REDUCE POWER",
                  "ru": "УМЕНЬШИТЬ МОЩНОСТЬ"
                }
              },
              {
                "type": "step",
                "id": "s2b",
                "item": {
                  "en": "Oil system",
                  "ru": "Маслосистема"
                },
                "action": {
                  "en": "EXPECT LOSS OF ENGINE OIL",
                  "ru": "ОЖИДАТЬ УТЕЧКУ МАСЛА"
                }
              },
              {
                "type": "warning",
                "text": {
                  "en": "A further increase in oil temperature must be expected. Prepare for an engine failure in accordance with 3.3.4 - ENGINE FAILURE IN FLIGHT.",
                  "ru": "Следует ожидать дальнейшего роста температуры масла. Подготовиться к отказу двигателя (3.3.4)."
                }
              },
              {
                "type": "link",
                "target": "em-334",
                "label": {
                  "en": "GO TO 3.3.4 — ENGINE FAILURE IN FLIGHT",
                  "ru": "ПЕРЕЙТИ К 3.3.4 — ОТКАЗ ДВИГАТЕЛЯ В ПОЛЁТЕ"
                }
              }
            ]
          },
          {
            "id": "green",
            "label": {
              "en": "WITHIN GREEN RANGE (2.5–6.0 BAR)",
              "ru": "В ПРЕДЕЛАХ ЗЕЛЁНОГО СЕКТОРА (2,5–6,0 БАР)"
            },
            "badge": "AMBER",
            "items": [
              {
                "type": "step",
                "id": "s3a",
                "item": {
                  "en": "POWER lever",
                  "ru": "РУД"
                },
                "action": {
                  "en": "REDUCE POWER",
                  "ru": "УМЕНЬШИТЬ МОЩНОСТЬ"
                }
              },
              {
                "type": "step",
                "id": "s3b",
                "item": {
                  "en": "Airspeed",
                  "ru": "Воздушная скорость"
                },
                "action": {
                  "en": "INCREASE AIRSPEED",
                  "ru": "УВЕЛИЧИТЬ ВОЗДУШНУЮ СКОРОСТЬ"
                }
              },
              {
                "type": "caution",
                "text": {
                  "en": "If oil temperature does not return to the green range, perform a precautionary landing on the nearest suitable airfield. Prepare for an engine failure (3.3.4).",
                  "ru": "Если температура масла не возвращается в зелёный сектор, выполнить вынужденную посадку на ближайшем пригодном аэродроме и подготовиться к отказу двигателя (3.3.4)."
                }
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "em-323",
    "code": "3.2.3",
    "cas": "OIL PRES",
    "group": "G1000 WARNINGS",
    "title": {
      "en": "OIL PRES — ENGINE OIL PRESSURE LOW (< 0.9 BAR)",
      "ru": "OIL PRES — НИЗКОЕ ДАВЛЕНИЕ МАСЛА (< 0,9 БАР)"
    },
    "subtitle": {
      "en": "Oil pressure in lower red range (< 0.9 bar). Can lead to total loss of power.",
      "ru": "Давление масла в нижнем красном диапазоне (< 0,9 бар). Возможен отказ двигателя."
    },
    "blocks": [
      {
        "type": "step",
        "id": "s1",
        "item": {
          "en": "POWER lever",
          "ru": "РУД"
        },
        "action": {
          "en": "REDUCE POWER",
          "ru": "УМЕНЬШИТЬ МОЩНОСТЬ"
        }
      },
      {
        "type": "step",
        "id": "s2",
        "item": {
          "en": "Oil system",
          "ru": "Маслосистема"
        },
        "action": {
          "en": "EXPECT LOSS OF OIL",
          "ru": "ОЖИДАТЬ УТЕЧКУ МАСЛА"
        }
      },
      {
        "type": "warning",
        "text": {
          "en": "Land at the nearest suitable airfield. Prepare for an engine failure in accordance with 3.3.4 - ENGINE FAILURE IN FLIGHT.",
          "ru": "Совершить посадку на ближайшем пригодном аэродроме. Подготовиться к отказу двигателя (раздел 3.3.4)."
        }
      },
      {
        "type": "link",
        "target": "em-334",
        "label": {
          "en": "GO TO 3.3.4 — ENGINE FAILURE IN FLIGHT",
          "ru": "ПЕРЕЙТИ К 3.3.4 — ОТКАЗ ДВИГАТЕЛЯ В ПОЛЁТЕ"
        }
      }
    ]
  },
  {
    "id": "em-324",
    "code": "3.2.4",
    "cas": "GBOX TEMP",
    "group": "G1000 WARNINGS",
    "title": {
      "en": "GBOX TEMP — GEARBOX TEMPERATURE HIGH (> 120 °C)",
      "ru": "GBOX TEMP — ВЫСОКАЯ ТЕМПЕРАТУРА РЕДУКТОРА (> 120 °C)"
    },
    "subtitle": {
      "en": "Gearbox temperature in upper red range (> 120 °C).",
      "ru": "Температура редуктора в верхнем красном диапазоне (> 120 °C)."
    },
    "blocks": [
      {
        "type": "step",
        "id": "s1",
        "item": {
          "en": "POWER lever",
          "ru": "РУД"
        },
        "action": {
          "en": "REDUCE POWER",
          "ru": "УМЕНЬШИТЬ МОЩНОСТЬ"
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
          "en": "INCREASE AIRSPEED",
          "ru": "УВЕЛИЧИТЬ ВОЗДУШНУЮ СКОРОСТЬ"
        }
      },
      {
        "type": "caution",
        "text": {
          "en": "If gearbox temperature does not return to the green range, perform a precautionary landing on the nearest suitable airfield. Prepare for an engine failure (3.3.4).",
          "ru": "Если температура редуктора не возвращается в зелёный сектор, выполнить вынужденную посадку на ближайшем пригодном аэродроме. Подготовиться к отказу двигателя (3.3.4)."
        }
      },
      {
        "type": "link",
        "target": "em-334",
        "label": {
          "en": "GO TO 3.3.4 — ENGINE FAILURE IN FLIGHT",
          "ru": "ПЕРЕЙТИ К 3.3.4 — ОТКАЗ ДВИГАТЕЛЯ В ПОЛЁТЕ"
        }
      }
    ]
  },
  {
    "id": "em-325",
    "code": "3.2.5",
    "cas": "L/R FUEL TEMP",
    "group": "G1000 WARNINGS",
    "title": {
      "en": "L/R FUEL TEMP — FUEL TEMPERATURE HIGH (> 60 °C)",
      "ru": "L/R FUEL TEMP — ВЫСОКАЯ ТЕМПЕРАТУРА ТОПЛИВА (> 60 °C)"
    },
    "subtitle": {
      "en": "Fuel temperature above 60 °C reduces high-pressure fuel pump efficiency.",
      "ru": "Температура топлива выше 60 °C снижает эффективность насоса высокого давления."
    },
    "blocks": [
      {
        "type": "step",
        "id": "s1",
        "item": {
          "en": "POWER lever",
          "ru": "РУД"
        },
        "action": {
          "en": "REDUCE POWER",
          "ru": "УМЕНЬШИТЬ МОЩНОСТЬ"
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
          "en": "INCREASE AIRSPEED",
          "ru": "УВЕЛИЧИТЬ ВОЗДУШНУЮ СКОРОСТЬ"
        }
      },
      {
        "type": "note",
        "text": {
          "en": "Increased fuel temperature can occur when the fuel quantity in the main tank is low. The fuel temperature can be decreased by transferring fuel from the auxiliary to the main tank.",
          "ru": "Повышение температуры топлива возможно при малом остатке в основном баке. Температуру можно снизить перекачкой топлива из резервного бака в основной."
        }
      },
      {
        "type": "caution",
        "text": {
          "en": "If the fuel temperature does not return to the green range, perform a precautionary landing on the nearest suitable airfield.",
          "ru": "Если температура топлива не возвращается в зелёный сектор, выполнить вынужденную посадку на ближайшем пригодном аэродроме."
        }
      }
    ]
  },
  {
    "id": "em-326",
    "code": "3.2.6",
    "cas": "FUEL PRESS",
    "group": "G1000 WARNINGS",
    "title": {
      "en": "FUEL PRESS — ENGINE FUEL PRESSURE LOW (< 4 BAR)",
      "ru": "FUEL PRESS — НИЗКОЕ ДАВЛЕНИЕ ТОПЛИВА (< 4 БАР)"
    },
    "subtitle": {
      "en": "Engine fuel pressure below minimum limit.",
      "ru": "Давление топлива ниже минимального предела."
    },
    "blocks": [
      {
        "type": "step",
        "id": "s1",
        "item": {
          "en": "1. Fuel quantity",
          "ru": "1. Количество топлива"
        },
        "action": {
          "en": "CHECK",
          "ru": "ПРОВЕРИТЬ"
        }
      },
      {
        "type": "step",
        "id": "s2",
        "item": {
          "en": "2. Fuel valve",
          "ru": "2. Топливный кран"
        },
        "action": {
          "en": "CHECK ON (NORMAL)",
          "ru": "УБЕДИТЬСЯ, ЧТО ON (NORMAL)"
        }
      },
      {
        "type": "step",
        "id": "s3",
        "item": {
          "en": "3. Fuel pumps",
          "ru": "3. Топливные насосы"
        },
        "action": {
          "en": "ON",
          "ru": "ВКЛЮЧИТЬ (ON)"
        }
      },
      {
        "type": "branch",
        "id": "b1",
        "prompt": {
          "en": "DOES FUEL PRESS WARNING REMAIN?",
          "ru": "СИГНАЛ FUEL PRESS ПРОДОЛЖАЕТ ГОРЕТЬ?"
        },
        "options": [
          {
            "id": "cleared",
            "label": {
              "en": "NO — WARNING EXTINGUISHED",
              "ru": "НЕТ — СИГНАЛ ПОГАС"
            },
            "badge": "GREEN",
            "items": [
              {
                "type": "note",
                "text": {
                  "en": "Monitor engine parameters closely and land as soon as practicable.",
                  "ru": "Контролировать параметры двигателя и выполнить посадку при первой возможности."
                }
              }
            ]
          },
          {
            "id": "remains",
            "label": {
              "en": "YES — FUEL PRESS WARNING REMAINS",
              "ru": "ДА — СИГНАЛ FUEL PRESS НЕ ГАСНЕТ"
            },
            "badge": "RED",
            "items": [
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
                  "en": "5. Fuel pumps",
                  "ru": "5. Топливные насосы"
                },
                "action": {
                  "en": "OFF",
                  "ru": "ВЫКЛЮЧИТЬ (OFF)"
                }
              },
              {
                "type": "warning",
                "text": {
                  "en": "If FUEL PRESS warning still remains: Imminent engine failure must be expected. Prepare for 3.3.4 - ENGINE FAILURE IN FLIGHT.",
                  "ru": "Если сигнал FUEL PRESS по-прежнему не гаснет: следует ожидать скорого отказа двигателя. Подготовиться к 3.3.4 — ОТКАЗ ДВИГАТЕЛЯ В ПОЛЁТЕ."
                }
              },
              {
                "type": "link",
                "target": "em-334",
                "label": {
                  "en": "GO TO 3.3.4 — ENGINE FAILURE IN FLIGHT",
                  "ru": "ПЕРЕЙТИ К 3.3.4 — ОТКАЗ ДВИГАТЕЛЯ В ПОЛЁТЕ"
                }
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "em-327",
    "code": "3.2.7",
    "cas": "ALTN AMPS",
    "group": "G1000 WARNINGS",
    "title": {
      "en": "ALTN AMPS — HIGH ALTERNATOR OUTPUT (> 70 A)",
      "ru": "ALTN AMPS — ВЫСОКАЯ СИЛА ТОКА ГЕНЕРАТОРА (> 70 A)"
    },
    "subtitle": {
      "en": "Electrical power consumption too high (possible wiring or equipment fault).",
      "ru": "Слишком высокое потребление тока (возможен дефект проводки или оборудования)."
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
          "en": "SWITCH OFF AS NECESSARY & POSSIBLE TO REDUCE LOAD",
          "ru": "ВЫКЛЮЧИТЬ ВСЁ ВОЗМОЖНОЕ ДЛЯ СНИЖЕНИЯ НАГРУЗКИ"
        }
      },
      {
        "type": "step",
        "id": "s2",
        "item": {
          "en": "2. If problem does not clear itself",
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
    "id": "em-328",
    "code": "3.2.8",
    "cas": "ALTN FAIL",
    "group": "G1000 WARNINGS",
    "title": {
      "en": "ALTN FAIL — ALTERNATOR FAILURE",
      "ru": "ALTN FAIL — ОТКАЗ ГЕНЕРАТОРА"
    },
    "subtitle": {
      "en": "Batteries are the last remaining source of electrical power (~30 minutes).",
      "ru": "Батареи — последний источник питания (приблизительно на 30 минут)."
    },
    "blocks": [
      {
        "type": "step",
        "id": "s1",
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
        "id": "s2",
        "item": {
          "en": "2. ESSENTIAL BUS",
          "ru": "2. ШИНА ОСНОВНЫХ ПОТРЕБИТЕЛЕЙ (ESSENTIAL BUS)"
        },
        "action": {
          "en": "ON",
          "ru": "ВКЛЮЧИТЬ (ON)"
        }
      },
      {
        "type": "step",
        "id": "s3",
        "item": {
          "en": "3. Electrical equipment",
          "ru": "3. Электрооборудование"
        },
        "action": {
          "en": "SWITCH OFF ALL EQUIPMENT NOT NEEDED",
          "ru": "ОТКЛЮЧИТЬ ВСЁ НЕНУЖНОЕ ОБОРУДОВАНИЕ"
        }
      },
      {
        "type": "step",
        "id": "s4",
        "item": {
          "en": "4. Landing",
          "ru": "4. Посадка"
        },
        "action": {
          "en": "LAND ON NEAREST SUITABLE AIRFIELD",
          "ru": "ПОСАДКА НА БЛИЖАЙШЕМ ПРИГОДНОМ АЭРОДРОМЕ"
        },
        "deferrable": true
      },
      {
        "type": "warning",
        "text": {
          "en": "The ECU requires electrical power for engine operation. Switch off all unnecessary consumers and land as soon as possible. Be prepared for engine failure. An ECU backup battery system is installed for severe electrical failure.",
          "ru": "Для работы двигателя требуется питание блоков ECU. Отключите ненужных потребителей и совершите посадку как можно скорее. На случай критического отказа установлена резервная батарея ECU."
        }
      },
      {
        "type": "caution",
        "text": {
          "en": "An emergency battery is installed as an additional backup for the backup attitude gyro and flood light (switched ON via EMERGENCY switch, top left instrument panel).",
          "ru": "Резервная батарея питает резервный авиагоризонт и заливающее освещение (включается выключателем EMERGENCY в верхней левой части панели)."
        }
      }
    ]
  },
  {
    "id": "em-331",
    "code": "3.3.1",
    "cas": null,
    "group": "ENGINE",
    "title": {
      "en": "ENGINE PROBLEMS ON GROUND",
      "ru": "НЕИСПРАВНОСТИ ДВИГАТЕЛЯ НА ЗЕМЛЕ"
    },
    "subtitle": {
      "en": "Abnormal engine behavior prior to take-off.",
      "ru": "Ненормальная работа двигателя на земле."
    },
    "blocks": [
      {
        "type": "step",
        "id": "s1",
        "item": {
          "en": "1. POWER lever",
          "ru": "1. РУД (POWER)"
        },
        "action": {
          "en": "IDLE",
          "ru": "МАЛЫЙ ГАЗ (IDLE)"
        }
      },
      {
        "type": "step",
        "id": "s2",
        "item": {
          "en": "2. Brakes",
          "ru": "2. Тормоза"
        },
        "action": {
          "en": "AS REQUIRED",
          "ru": "ПО ОБСТОЯТЕЛЬСТВАМ"
        }
      },
      {
        "type": "caution",
        "text": {
          "en": "If the oil pressure is in the red range, the engine must be shut down immediately.",
          "ru": "Если давление масла находится в красном секторе — немедленно остановить двигатель."
        }
      },
      {
        "type": "warning",
        "text": {
          "en": "If the problem cannot be cleared, the airplane must not be flown.",
          "ru": "Если неисправность не устранена — вылет запрещён."
        }
      }
    ]
  },
  {
    "id": "em-332",
    "code": "3.3.2",
    "cas": null,
    "group": "ENGINE",
    "title": {
      "en": "ENGINE PROBLEMS DURING TAKE-OFF",
      "ru": "НЕИСПРАВНОСТИ ДВИГАТЕЛЯ ПРИ ВЗЛЁТЕ"
    },
    "subtitle": {
      "en": "Immediate decision based on remaining runway length.",
      "ru": "Немедленное решение в зависимости от располагаемой длины ВПП."
    },
    "blocks": [
      {
        "type": "branch",
        "id": "b1",
        "prompt": {
          "en": "CAN TAKE-OFF STILL BE ABORTED?",
          "ru": "ВЗЛЁТ ЕЩЁ МОЖНО ПРЕРВАТЬ?"
        },
        "options": [
          {
            "id": "abort",
            "label": {
              "en": "(a) YES — SUFFICIENT RUNWAY LENGTH AVAILABLE",
              "ru": "(a) ДА — ДЛИНЫ ВПП ДОСТАТОЧНО"
            },
            "badge": "AMBER",
            "items": [
              {
                "type": "memory",
                "title": {
                  "en": "LAND STRAIGHT AHEAD",
                  "ru": "ПОСАДКА ПРЯМО ПО КУРСУ"
                },
                "steps": [
                  {
                    "id": "m1",
                    "item": {
                      "en": "1. POWER lever",
                      "ru": "1. РУД (POWER)"
                    },
                    "action": {
                      "en": "IDLE",
                      "ru": "МАЛЫЙ ГАЗ (IDLE)"
                    }
                  },
                  {
                    "id": "m2",
                    "item": {
                      "en": "2. Brakes (on ground)",
                      "ru": "2. Тормоза (на земле)"
                    },
                    "action": {
                      "en": "AS REQUIRED",
                      "ru": "ПО ОБСТОЯТЕЛЬСТВАМ"
                    }
                  }
                ]
              },
              {
                "type": "warning",
                "text": {
                  "en": "If sufficient time remains, reduce fire risk on collision: Fuel valve OFF, ENGINE MASTER OFF, ELECTRIC MASTER OFF.",
                  "ru": "При наличии запаса времени для снижения риска пожара: Топливный кран OFF, ENGINE MASTER OFF, ELECTRIC MASTER OFF."
                }
              }
            ]
          },
          {
            "id": "cont",
            "label": {
              "en": "(b) NO — TAKE-OFF CAN NO LONGER BE ABORTED",
              "ru": "(b) НЕТ — ВЗЛЁТ ПРЕРВАТЬ НЕЛЬЗЯ"
            },
            "badge": "RED",
            "items": [
              {
                "type": "memory",
                "title": {
                  "en": "IMMEDIATE ACTION",
                  "ru": "НЕМЕДЛЕННЫЕ ДЕЙСТВИЯ"
                },
                "steps": [
                  {
                    "id": "m3",
                    "item": {
                      "en": "1. Airspeed",
                      "ru": "1. Воздушная скорость"
                    },
                    "action": {
                      "en": "IMMEDIATE PITCH DOWN TO AVOID AIRSPEED REDUCTION",
                      "ru": "НЕМЕДЛЕННО УМЕНЬШИТЬ ТАНГАЖ (НЕ ТЕРЯТЬ СКОРОСТЬ)"
                    }
                  }
                ]
              },
              {
                "type": "warning",
                "text": {
                  "en": "If safe height has not been reached, consider straight-ahead emergency landing. DO NOT ATTEMPT TO TURN BACK TO THE AIRFIELD. Turning back can be fatal.",
                  "ru": "Если безопасная высота не достигнута — аварийная посадка прямо по курсу. ЗАПРЕЩАЕТСЯ РАЗВОРАЧИВАТЬСЯ НА АЭРОДРОМ — это может привести к катастрофе."
                }
              },
              {
                "type": "subhead",
                "text": {
                  "en": "IF TIME ALLOWS:",
                  "ru": "ЕСЛИ ПОЗВОЛЯЕТ ВРЕМЯ:"
                }
              },
              {
                "type": "step",
                "id": "s2",
                "item": {
                  "en": "2. POWER lever",
                  "ru": "2. РУД"
                },
                "action": {
                  "en": "CHECK MAX",
                  "ru": "УБЕДИТЬСЯ, ЧТО MAX"
                }
              },
              {
                "type": "step",
                "id": "s3",
                "item": {
                  "en": "3. Fuel pumps",
                  "ru": "3. Топливные насосы"
                },
                "action": {
                  "en": "CHECK ON",
                  "ru": "УБЕДИТЬСЯ, ЧТО ВКЛ (ON)"
                }
              },
              {
                "type": "step",
                "id": "s4",
                "item": {
                  "en": "4. VOTER switch",
                  "ru": "4. Переключатель VOTER"
                },
                "action": {
                  "en": "CHECK AUTO",
                  "ru": "УБЕДИТЬСЯ, ЧТО AUTO"
                }
              },
              {
                "type": "link",
                "target": "em-371",
                "label": {
                  "en": "IF NOT CLEARED → 3.7.1 EMERGENCY LANDING (ENGINE OFF)",
                  "ru": "ЕСЛИ НЕ УСТРАНЕНО → 3.7.1 АВАРИЙНАЯ ПОСАДКА"
                }
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "em-333",
    "code": "3.3.3",
    "cas": "ECU A+B FAIL",
    "group": "ENGINE",
    "title": {
      "en": "ENGINE TROUBLESHOOTING IN FLIGHT",
      "ru": "ПОИСК И УСТРАНЕНИЕ НЕИСПРАВНОСТЕЙ ДВИГАТЕЛЯ В ПОЛЁТЕ"
    },
    "subtitle": {
      "en": "Power loss, rough running, or simultaneous ECU A & ECU B cautions.",
      "ru": "Потеря тяги, перебои в работе или одновременный отказ ECU A и ECU B."
    },
    "blocks": [
      {
        "type": "warning",
        "text": {
          "en": "Control over the flight attitude has priority over attempts to solve the current problem (\"first fly the airplane\").",
          "ru": "В первую очередь сохранять управление самолётом («прежде всего, управляй самолётом»)."
        }
      },
      {
        "type": "step",
        "id": "s1",
        "item": {
          "en": "1. Airspeed",
          "ru": "1. Воздушная скорость"
        },
        "action": {
          "en": "88 KIAS",
          "ru": "88 УЗЛОВ (KIAS)"
        }
      },
      {
        "type": "step",
        "id": "s2",
        "item": {
          "en": "2. POWER lever",
          "ru": "2. РУД"
        },
        "action": {
          "en": "MAX",
          "ru": "MAX (ДО УПОРА)"
        }
      },
      {
        "type": "branch",
        "id": "b1",
        "prompt": {
          "en": "ARE BOTH ECU A AND ECU B CAUTIONS ON SIMULTANEOUSLY + LOAD UNCHANGED + THRUST REDUCED + ROUGH/NOISE CHANGE?",
          "ru": "ГОРЯТ ЛИ ОДНОВРЕМЕННО ECU A И ECU B + LOAD НЕ ИЗМЕНИЛСЯ + ТЯГА УПАЛА + ДВИГАТЕЛЬ РАБОТАЕТ НЕРОВНО?"
        },
        "options": [
          {
            "id": "dual_ecu",
            "label": {
              "en": "(a) YES — SIMULTANEOUS ECU A + B WITH ALL 3 CONDITIONS",
              "ru": "(a) ДА — ОДНОВРЕМЕННО ECU A + B И ВСЕ 3 УСЛОВИЯ"
            },
            "badge": "RED",
            "items": [
              {
                "type": "step",
                "id": "da3",
                "item": {
                  "en": "3. POWER lever",
                  "ru": "3. РУД"
                },
                "action": {
                  "en": "IDLE FOR 1 SECOND",
                  "ru": "IDLE НА 1 СЕКУНДУ"
                }
              },
              {
                "type": "step",
                "id": "da4",
                "item": {
                  "en": "4. POWER lever",
                  "ru": "4. РУД"
                },
                "action": {
                  "en": "SLOWLY INCREASE TO 1975 RPM",
                  "ru": "МЕДЛЕННО УВЕЛИЧИТЬ ДО 1975 ОБ/МИН"
                }
              },
              {
                "type": "subhead",
                "text": {
                  "en": "IF POWER LOSS OCCURS DURING INCREASE:",
                  "ru": "ЕСЛИ ПРИ УВЕЛИЧЕНИИ НАБЛЮДАЕТСЯ ПАДЕНИЕ МОЩНОСТИ:"
                }
              },
              {
                "type": "step",
                "id": "da5",
                "item": {
                  "en": "5. POWER lever",
                  "ru": "5. РУД"
                },
                "action": {
                  "en": "IDLE FOR 1 SECOND",
                  "ru": "IDLE НА 1 СЕКУНДУ"
                }
              },
              {
                "type": "step",
                "id": "da6",
                "item": {
                  "en": "6. POWER lever",
                  "ru": "6. РУД"
                },
                "action": {
                  "en": "SLOWLY INCREASE, STOP PRIOR TO PREVIOUS POWER LOSS RPM",
                  "ru": "МЕДЛЕННО УВЕЛИЧИТЬ, ОСТАНОВИТЬ ДО ОБОРОТОВ ПОТЕРИ МОЩНОСТИ"
                }
              },
              {
                "type": "warning",
                "text": {
                  "en": "Do not increase POWER lever past 1975 RPM or the setting determined in step 6 — exceeding this causes another power loss. Provides up to 65% load at 1975 RPM.",
                  "ru": "Не превышать 1975 об/мин или режим из п. 6 — это вызовет повторное падение мощности (доступно до 65% нагрузки)."
                }
              },
              {
                "type": "step",
                "id": "da7",
                "item": {
                  "en": "7. Landing",
                  "ru": "7. Посадка"
                },
                "action": {
                  "en": "LAND AT NEXT SUITABLE AIRFIELD",
                  "ru": "ПОСАДКА НА БЛИЖАЙШЕМ ПРИГОДНОМ АЭРОДРОМЕ"
                },
                "deferrable": true
              }
            ]
          },
          {
            "id": "other",
            "label": {
              "en": "(b) OTHERWISE — SEQUENTIAL RESTORATION",
              "ru": "(b) В ПРОТИВНОМ СЛУЧАЕ — ПОШАГОВОЕ ВОССТАНОВЛЕНИЕ"
            },
            "badge": "AMBER",
            "items": [
              {
                "type": "step",
                "id": "o3",
                "item": {
                  "en": "3. Circuit breakers",
                  "ru": "3. Предохранители (АЗС)"
                },
                "action": {
                  "en": "CHECK / RESET IF NECESSARY",
                  "ru": "ПРОВЕРИТЬ / ВКЛЮЧИТЬ ПРИ НЕОБХОДИМОСТИ"
                }
              },
              {
                "type": "note",
                "text": {
                  "en": "After each step below: if normal engine operation is restored, continue flight and land ASAP.",
                  "ru": "После каждого шага: если нормальная работа восстановлена — продолжить полёт и совершить посадку как можно скорее."
                }
              },
              {
                "type": "step",
                "id": "o4",
                "item": {
                  "en": "4. VOTER switch",
                  "ru": "4. Переключатель VOTER"
                },
                "action": {
                  "en": "SWAP BETWEEN ECU A AND ECU B (KEEP IF RESTORED)",
                  "ru": "ПЕРЕКЛЮЧИТЬ МЕЖДУ ECU A И ECU B (ОСТАВИТЬ ЕСЛИ ПОМОГЛО)"
                }
              },
              {
                "type": "step",
                "id": "o5",
                "item": {
                  "en": "5. VOTER switch (if not restored)",
                  "ru": "5. Переключатель VOTER (если не помогло)"
                },
                "action": {
                  "en": "BACK TO AUTO (RETAIN REDUNDANCY)",
                  "ru": "ОБРАТНО В AUTO (СОХРАНИТЬ РЕЗЕРВИРОВАНИЕ)"
                }
              },
              {
                "type": "step",
                "id": "o6",
                "item": {
                  "en": "6. Fuel valve",
                  "ru": "6. Топливный кран"
                },
                "action": {
                  "en": "EMERGENCY (OBSERVE LATERAL IMBALANCE)",
                  "ru": "EMERGENCY (КОНТРОЛЬ ПОПЕРЕЧНОЙ РАЗБАЛАНСИРОВКИ)"
                }
              },
              {
                "type": "step",
                "id": "o7",
                "item": {
                  "en": "7. Fuel valve (if not restored)",
                  "ru": "7. Топливный кран (если не помогло)"
                },
                "action": {
                  "en": "NORMAL",
                  "ru": "NORMAL"
                }
              },
              {
                "type": "step",
                "id": "o8",
                "item": {
                  "en": "8. Alternate air",
                  "ru": "8. Резервный воздух (ALTERNATE AIR)"
                },
                "action": {
                  "en": "OPEN",
                  "ru": "ОТКРЫТЬ (OPEN)"
                }
              },
              {
                "type": "step",
                "id": "o9",
                "item": {
                  "en": "9. POWER lever",
                  "ru": "9. РУД"
                },
                "action": {
                  "en": "APPLY POWER AS REQUIRED",
                  "ru": "УСТАНОВИТЬ НЕОБХОДИМУЮ МОЩНОСТЬ"
                }
              },
              {
                "type": "link",
                "target": "em-334",
                "label": {
                  "en": "IF STILL NOT RESTORED → 3.3.4 ENGINE FAILURE IN FLIGHT",
                  "ru": "ЕСЛИ НЕ ВОССТАНОВЛЕНО → 3.3.4 ОТКАЗ ДВИГАТЕЛЯ В ПОЛЁТЕ"
                }
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "em-334",
    "code": "3.3.4",
    "cas": null,
    "group": "ENGINE",
    "title": {
      "en": "ENGINE FAILURE IN FLIGHT",
      "ru": "ОТКАЗ ДВИГАТЕЛЯ В ПОЛЁТЕ"
    },
    "subtitle": {
      "en": "Immediate glide establishment and restart vs forced landing decision.",
      "ru": "Немедленный переход на планирование и выбор: повторный запуск или аварийная посадка."
    },
    "blocks": [
      {
        "type": "memory",
        "title": {
          "en": "IMMEDIATE ACTIONS — FLY THE AIRCRAFT",
          "ru": "НЕМЕДЛЕННЫЕ ДЕЙСТВИЯ — ПРИОРИТЕТ ПИЛОТИРОВАНИЯ"
        },
        "steps": [
          {
            "id": "m1",
            "item": {
              "en": "1. Airspeed",
              "ru": "1. Воздушная скорость"
            },
            "action": {
              "en": "88 KIAS (BEST GLIDE)",
              "ru": "88 УЗЛОВ (НАИВЫГОДНЕЙШАЯ СКОРОСТЬ)"
            }
          },
          {
            "id": "m2",
            "item": {
              "en": "2. Flaps",
              "ru": "2. Закрылки"
            },
            "action": {
              "en": "UP",
              "ru": "УБРАТЬ (UP)"
            }
          }
        ]
      },
      {
        "type": "note",
        "text": {
          "en": "As long as there is no major mechanical engine defect, the propeller will continue to windmill.",
          "ru": "При отсутствии серьёзных механических повреждений винт продолжает вращаться в режиме авторотации."
        }
      },
      {
        "type": "branch",
        "id": "b1",
        "prompt": {
          "en": "IS REMAINING ALTITUDE SUFFICIENT FOR RESTART ATTEMPT?",
          "ru": "ДОСТАТОЧНО ЛИ ВЫСОТЫ ДЛЯ ПОПЫТКИ ПОВТОРНОГО ЗАПУСКА?"
        },
        "options": [
          {
            "id": "yes_alt",
            "label": {
              "en": "(a) YES — SUFFICIENT ALTITUDE",
              "ru": "(a) ДА — ВЫСОТЫ ДОСТАТОЧНО"
            },
            "badge": "AMBER",
            "items": [
              {
                "type": "link",
                "target": "em-335",
                "label": {
                  "en": "PROCEED TO 3.3.5 — RESTARTING THE ENGINE IN FLIGHT",
                  "ru": "ПЕРЕЙТИ К 3.3.5 — ПОВТОРНЫЙ ЗАПУСК В ПОЛЁТЕ"
                }
              }
            ]
          },
          {
            "id": "no_alt",
            "label": {
              "en": "(b) NO — INSUFFICIENT ALTITUDE",
              "ru": "(b) НЕТ — ВЫСОТЫ НЕДОСТАТОЧНО"
            },
            "badge": "RED",
            "items": [
              {
                "type": "link",
                "target": "em-371",
                "label": {
                  "en": "PROCEED TO 3.7.1 — EMERGENCY LANDING WITH ENGINE OFF",
                  "ru": "ПЕРЕЙТИ К 3.7.1 — АВАРИЙНАЯ ПОСАДКА С ОСТАНОВЛЕННЫМ ДВИГАТЕЛЕМ"
                }
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "em-335",
    "code": "3.3.5",
    "cas": null,
    "group": "ENGINE",
    "title": {
      "en": "RESTARTING THE ENGINE IN FLIGHT (REV. 4)",
      "ru": "ПОВТОРНЫЙ ЗАПУСК ДВИГАТЕЛЯ В ПОЛЁТЕ (РЕД. 4)"
    },
    "subtitle": {
      "en": "Windmilling restart procedure. Updated in AFM Rev. 4 (MÄM 40-838 & VOTER swap).",
      "ru": "Запуск от авторотации. Обновлено по Ред. 4 (MÄM 40-838 и проверка VOTER)."
    },
    "blocks": [
      {
        "type": "warning",
        "text": {
          "en": "A stopped propeller indicates a major mechanical engine defect. Starter-assisted restart SHALL NOT be considered.",
          "ru": "Остановка воздушного винта указывает на серьёзную механическую неисправность. Повторный запуск от стартера ЗАПРЕЩЁН."
        }
      },
      {
        "type": "note",
        "text": {
          "en": "Max Restart Altitude (Rev. 4): 16,400 ft PA immediate | 15,000 ft PA immediate (with MÄM 40-838 or later SW) | 10,000 ft PA within 2 minutes. After >2 min cool-down restart may fail.",
          "ru": "Макс. высота запуска (Ред. 4): 16 400 фт (немедленно) | 15 000 фт (немедленно при ПО MÄM 40-838 и новее) | 10 000 фт (в течение 2 мин). После охлаждения >2 мин запуск может не удаться."
        }
      },
      {
        "type": "step",
        "id": "s1",
        "item": {
          "en": "1. Airspeed",
          "ru": "1. Воздушная скорость"
        },
        "action": {
          "en": "88 KIAS",
          "ru": "88 УЗЛОВ (KIAS)"
        }
      },
      {
        "type": "step",
        "id": "s2",
        "item": {
          "en": "2. POWER lever",
          "ru": "2. РУД"
        },
        "action": {
          "en": "IDLE",
          "ru": "МАЛЫЙ ГАЗ (IDLE)"
        }
      },
      {
        "type": "step",
        "id": "s3",
        "item": {
          "en": "3. VOTER switch (Rev. 4)",
          "ru": "3. Переключатель VOTER (Ред. 4)"
        },
        "action": {
          "en": "SWAP BETWEEN ECU A AND B (KEEP IF RESTORED & LAND ASAP)",
          "ru": "ПЕРЕКЛЮЧИТЬ МЕЖДУ ECU A И B (ОСТАВИТЬ ЕСЛИ ПОМОГЛО)"
        }
      },
      {
        "type": "step",
        "id": "s4",
        "item": {
          "en": "4. VOTER switch (otherwise)",
          "ru": "4. Переключатель VOTER (иначе)"
        },
        "action": {
          "en": "SWITCH BACK TO AUTO (RETAIN REDUNDANCY)",
          "ru": "ВЕРНУТЬ В AUTO"
        }
      },
      {
        "type": "step",
        "id": "s5",
        "item": {
          "en": "5. Fuel valve",
          "ru": "5. Топливный кран"
        },
        "action": {
          "en": "CHECK NORMAL",
          "ru": "ПРОВЕРИТЬ NORMAL"
        }
      },
      {
        "type": "step",
        "id": "s6",
        "item": {
          "en": "6. Alternate air",
          "ru": "6. Резервный воздух"
        },
        "action": {
          "en": "AS REQUIRED",
          "ru": "ПО ОБСТОЯТЕЛЬСТВАМ"
        }
      },
      {
        "type": "step",
        "id": "s7",
        "item": {
          "en": "7. Fuel quantity",
          "ru": "7. Количество топлива"
        },
        "action": {
          "en": "CHECK",
          "ru": "ПРОВЕРИТЬ"
        }
      },
      {
        "type": "step",
        "id": "s8",
        "item": {
          "en": "8. Fuel transfer pump",
          "ru": "8. Насос перекачки топлива"
        },
        "action": {
          "en": "AS REQUIRED",
          "ru": "ПО ОБСТОЯТЕЛЬСТВАМ"
        }
      },
      {
        "type": "step",
        "id": "s9",
        "item": {
          "en": "9. ELECTRIC MASTER",
          "ru": "9. ELECTRIC MASTER"
        },
        "action": {
          "en": "CHECK ON",
          "ru": "ПРОВЕРИТЬ ON"
        }
      },
      {
        "type": "step",
        "id": "s10",
        "item": {
          "en": "10. ENGINE MASTER",
          "ru": "10. ENGINE MASTER"
        },
        "action": {
          "en": "CHECK ON",
          "ru": "ПРОВЕРИТЬ ON"
        }
      },
      {
        "type": "branch",
        "id": "b1",
        "prompt": {
          "en": "DID THE ENGINE START?",
          "ru": "ДВИГАТЕЛЬ ЗАПУСТИЛСЯ?"
        },
        "options": [
          {
            "id": "started",
            "label": {
              "en": "YES — ENGINE RUNNING",
              "ru": "ДА — ДВИГАТЕЛЬ РАБОТАЕТ"
            },
            "badge": "GREEN",
            "items": [
              {
                "type": "step",
                "id": "ok1",
                "item": {
                  "en": "Engine parameters & Landing",
                  "ru": "Параметры двигателя и посадка"
                },
                "action": {
                  "en": "MONITOR & LAND AS SOON AS POSSIBLE",
                  "ru": "КОНТРОЛИРОВАТЬ И СЕСТЬ КАК МОЖНО СКОРЕЕ"
                }
              }
            ]
          },
          {
            "id": "no_start",
            "label": {
              "en": "NO — ENGINE DOES NOT START",
              "ru": "НЕТ — ДВИГАТЕЛЬ НЕ ЗАПУСКАЕТСЯ"
            },
            "badge": "RED",
            "items": [
              {
                "type": "step",
                "id": "ns1",
                "item": {
                  "en": "10b. Fuel valve",
                  "ru": "10б. Топливный кран"
                },
                "action": {
                  "en": "EMERGENCY",
                  "ru": "АВАРИЙНОЕ (EMERGENCY)"
                }
              },
              {
                "type": "subhead",
                "text": {
                  "en": "IF STILL NO START — ADOPT GLIDE CONFIGURATION:",
                  "ru": "ЕСЛИ ВСЁ ЕЩЁ НЕ ЗАПУСКАЕТСЯ — КОНФИГУРАЦИЯ ПЛАНИРОВАНИЯ:"
                }
              },
              {
                "type": "step",
                "id": "ns2",
                "item": {
                  "en": "11. Flaps",
                  "ru": "11. Закрылки"
                },
                "action": {
                  "en": "UP (88 KIAS, GLIDE 1:9.7 / 1:9.4 NO FAIRINGS)",
                  "ru": "УБРАТЬ (88 УЗЛ., КАЧЕСТВО 9,7 / 9,4 БЕЗ ОБТЕК.)"
                }
              },
              {
                "type": "step",
                "id": "ns3",
                "item": {
                  "en": "12. AVIONIC MASTER",
                  "ru": "12. AVIONIC MASTER"
                },
                "action": {
                  "en": "ON, IF REQUIRED",
                  "ru": "ON ПРИ НЕОБХОДИМОСТИ"
                }
              },
              {
                "type": "caution",
                "text": {
                  "en": "Engine restart following an engine fire should only be attempted if a safe emergency landing is unlikely.",
                  "ru": "Повторный запуск после пожара двигателя допускается только при невозможности безопасной аварийной посадки."
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
    "id": "em-336",
    "code": "3.3.6",
    "cas": null,
    "group": "ENGINE",
    "title": {
      "en": "DEFECTIVE RPM REGULATING SYSTEM",
      "ru": "НЕИСПРАВНОСТЬ СИСТЕМЫ РЕГУЛИРОВАНИЯ ОБОРОТОВ ВИНТА"
    },
    "subtitle": {
      "en": "Oscillating RPM, Propeller Overspeed, or Propeller Underspeed.",
      "ru": "Колебания оборотов, заброс оборотов или пониженные обороты винта."
    },
    "blocks": [
      {
        "type": "caution",
        "text": {
          "en": "Following governor failure adjust RPM slowly with POWER lever. Light wooden blades produce faster RPM changes than metal blades.",
          "ru": "При отказе регулятора плавно управляйте оборотами РУДом. Деревянные лопасти реагируют быстрее металлических."
        }
      },
      {
        "type": "branch",
        "id": "b1",
        "prompt": {
          "en": "SELECT RPM FAILURE TYPE:",
          "ru": "ВЫБЕРИТЕ ХАРАКТЕР НЕИСПРАВНОСТИ ОБОРОТОВ:"
        },
        "options": [
          {
            "id": "osc",
            "label": {
              "en": "(a) OSCILLATING RPM",
              "ru": "(a) КОЛЕБАНИЯ ОБОРОТОВ"
            },
            "badge": "AMBER",
            "items": [
              {
                "type": "step",
                "id": "o1",
                "item": {
                  "en": "1. Power setting",
                  "ru": "1. Режим двигателя"
                },
                "action": {
                  "en": "CHANGE",
                  "ru": "ИЗМЕНИТЬ"
                }
              },
              {
                "type": "step",
                "id": "o2",
                "item": {
                  "en": "2. VOTER switch (if not cleared)",
                  "ru": "2. Переключатель VOTER (если не помогло)"
                },
                "action": {
                  "en": "SWAP BETWEEN ECU A AND B",
                  "ru": "ПЕРЕКЛЮЧИТЬ ECU A ↔ ECU B"
                }
              },
              {
                "type": "step",
                "id": "o3",
                "item": {
                  "en": "3. VOTER switch (if still not cleared)",
                  "ru": "3. Переключатель VOTER (если не помогло)"
                },
                "action": {
                  "en": "AUTO",
                  "ru": "AUTO"
                }
              },
              {
                "type": "step",
                "id": "o4",
                "item": {
                  "en": "4. Landing",
                  "ru": "4. Посадка"
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
            "id": "over",
            "label": {
              "en": "(b) PROPELLER OVERSPEED (> 2300 RPM)",
              "ru": "(b) ЗАБРОС ОБОРОТОВ (> 2300 ОБ/МИН)"
            },
            "badge": "RED",
            "items": [
              {
                "type": "note",
                "text": {
                  "en": "Propeller acts like a fixed-pitch propeller. Climb & go-around may not be possible under all conditions.",
                  "ru": "Винт работает как ВФШ. Набор высоты и уход на второй круг могут быть невозможны."
                }
              },
              {
                "type": "step",
                "id": "ov1",
                "item": {
                  "en": "1. POWER lever",
                  "ru": "1. РУД"
                },
                "action": {
                  "en": "REDUCE TO NOT EXCEED 2300 RPM",
                  "ru": "УМЕНЬШИТЬ (НЕ ПРЕВЫШАТЬ 2300 ОБ/МИН)"
                }
              },
              {
                "type": "step",
                "id": "ov2",
                "item": {
                  "en": "2. Airspeed",
                  "ru": "2. Воздушная скорость"
                },
                "action": {
                  "en": "88 KIAS",
                  "ru": "88 УЗЛОВ"
                }
              },
              {
                "type": "step",
                "id": "ov3",
                "item": {
                  "en": "3. Flaps",
                  "ru": "3. Закрылки"
                },
                "action": {
                  "en": "CHECK UP",
                  "ru": "ПРОВЕРИТЬ УБРАНЫ (UP)"
                }
              },
              {
                "type": "step",
                "id": "ov4",
                "item": {
                  "en": "4–5. After RPM < 2300: Airspeed & POWER",
                  "ru": "4–5. После < 2300: Скорость и РУД"
                },
                "action": {
                  "en": "AS REQUIRED, DO NOT EXCEED 2300 RPM",
                  "ru": "ПО ОБСТОЯТЕЛЬСТВАМ, ≤ 2300 ОБ/МИН"
                }
              },
              {
                "type": "step",
                "id": "ov6",
                "item": {
                  "en": "6. VOTER switch (if not cleared)",
                  "ru": "6. VOTER (если не помогло)"
                },
                "action": {
                  "en": "SWAP ECU A/B (BACK TO AUTO IF NO CHANGE)",
                  "ru": "ПЕРЕКЛЮЧИТЬ A/B (ВЕРНУТЬ В AUTO ЕСЛИ НЕ ПОМОГЛО)"
                }
              },
              {
                "type": "step",
                "id": "ov7",
                "item": {
                  "en": "7. Landing",
                  "ru": "7. Посадка"
                },
                "action": {
                  "en": "LAND ON NEAREST SUITABLE AIRFIELD",
                  "ru": "ПОСАДКА НА БЛИЖАЙШЕМ ПРИГОДНОМ АЭРОДРОМЕ"
                },
                "deferrable": true
              },
              {
                "type": "subhead",
                "text": {
                  "en": "IF INCREASED CLIMB RATE IS REQUIRED:",
                  "ru": "ЕСЛИ ТРЕБУЕТСЯ УВЕЛИЧИТЬ СКОРОПОДЪЁМНОСТЬ:"
                }
              },
              {
                "type": "step",
                "id": "ov8",
                "item": {
                  "en": "8–10. Flaps / Airspeed / POWER",
                  "ru": "8–10. Закрылки / Скорость / РУД"
                },
                "action": {
                  "en": "FLAPS T/O | 72 KIAS | DO NOT EXCEED 2300 RPM",
                  "ru": "ЗАКРЫЛКИ T/O | 72 УЗЛ. | ≤ 2300 ОБ/МИН"
                }
              }
            ]
          },
          {
            "id": "under",
            "label": {
              "en": "(c) PROPELLER UNDERSPEED",
              "ru": "(c) ПОНИЖЕННЫЕ ОБОРОТЫ ВИНТА"
            },
            "badge": "RED",
            "items": [
              {
                "type": "step",
                "id": "un1",
                "item": {
                  "en": "1. POWER lever",
                  "ru": "1. РУД"
                },
                "action": {
                  "en": "AS REQUIRED",
                  "ru": "ПО ОБСТОЯТЕЛЬСТВАМ"
                }
              },
              {
                "type": "step",
                "id": "un2",
                "item": {
                  "en": "2. VOTER switch (if not cleared)",
                  "ru": "2. VOTER (если не помогло)"
                },
                "action": {
                  "en": "SWAP BETWEEN ECU A AND B",
                  "ru": "ПЕРЕКЛЮЧИТЬ ECU A ↔ ECU B"
                }
              },
              {
                "type": "step",
                "id": "un3",
                "item": {
                  "en": "3. VOTER switch (if still not cleared)",
                  "ru": "3. VOTER (если не помогло)"
                },
                "action": {
                  "en": "AUTO",
                  "ru": "AUTO"
                }
              },
              {
                "type": "step",
                "id": "un4",
                "item": {
                  "en": "4. POWER lever",
                  "ru": "4. РУД"
                },
                "action": {
                  "en": "AS REQUIRED",
                  "ru": "ПО ОБСТОЯТЕЛЬСТВАМ"
                }
              },
              {
                "type": "warning",
                "text": {
                  "en": "Propeller RPM will drop. There may be NO climb performance and NO go-around power available.",
                  "ru": "Обороты винта снижаются. Набор высоты и уход на второй круг могут оказаться НЕВОЗМОЖНЫМИ."
                }
              },
              {
                "type": "step",
                "id": "un5",
                "item": {
                  "en": "5. Landing",
                  "ru": "5. Посадка"
                },
                "action": {
                  "en": "LAND ON NEAREST SUITABLE AIRFIELD",
                  "ru": "ПОСАДКА НА БЛИЖАЙШЕМ ПРИГОДНОМ АЭРОДРОМЕ"
                },
                "deferrable": true
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "em-337",
    "code": "3.3.7",
    "cas": null,
    "group": "ENGINE",
    "title": {
      "en": "FUEL TRANSFER PUMP FAILURE",
      "ru": "ОТКАЗ НАСОСА ПЕРЕКАЧКИ ТОПЛИВА"
    },
    "subtitle": {
      "en": "Emergency fuel transfer from AUX to MAIN tank (~45 US gal/h = 170 l/h).",
      "ru": "Аварийная перекачка из резервного бака в основной (~45 галл/ч = 170 л/ч)."
    },
    "blocks": [
      {
        "type": "step",
        "id": "s1",
        "item": {
          "en": "1. Fuel quantity",
          "ru": "1. Количество топлива"
        },
        "action": {
          "en": "CHECK",
          "ru": "ПРОВЕРИТЬ"
        }
      },
      {
        "type": "subhead",
        "text": {
          "en": "IF MAIN TANK FUEL QUANTITY LOW:",
          "ru": "ПРИ НИЗКОМ УРОВНЕ В ОСНОВНОМ БАКЕ:"
        }
      },
      {
        "type": "step",
        "id": "s2",
        "item": {
          "en": "2. Fuel valve",
          "ru": "2. Топливный кран"
        },
        "action": {
          "en": "EMERGENCY",
          "ru": "АВАРИЙНОЕ (EMERGENCY)"
        }
      },
      {
        "type": "step",
        "id": "s3",
        "item": {
          "en": "3. Fuel pumps",
          "ru": "3. Топливные насосы"
        },
        "action": {
          "en": "OFF",
          "ru": "ВЫКЛЮЧИТЬ (OFF)"
        }
      },
      {
        "type": "warning",
        "text": {
          "en": "Fuel valve MUST be switched back to NORMAL BEFORE AUX tank reads zero! Otherwise engine will stop in flight and fuel pump inspection is mandatory before next flight.",
          "ru": "Топливный кран НЕОБХОДИМО вернуть в NORMAL ДО обнуления резервного бака! Иначе произойдёт останов двигателя в полёте, а насос потребует техосмотра."
        }
      },
      {
        "type": "step",
        "id": "s4",
        "item": {
          "en": "4. AUX tank quantity",
          "ru": "4. Резервный бак (AUX)"
        },
        "action": {
          "en": "MONITOR (MIN 1 US GAL)",
          "ru": "КОНТРОЛИРОВАТЬ (НЕ МЕНЕЕ 1 ГАЛЛ.)"
        }
      },
      {
        "type": "step",
        "id": "s5",
        "item": {
          "en": "5. MAIN tank quantity",
          "ru": "5. Основной бак (MAIN)"
        },
        "action": {
          "en": "MONITOR (MAX 14 US GAL)",
          "ru": "КОНТРОЛИРОВАТЬ (НЕ БОЛЕЕ 14 ГАЛЛ.)"
        }
      },
      {
        "type": "step",
        "id": "s6",
        "item": {
          "en": "6. Fuel valve",
          "ru": "6. Топливный кран"
        },
        "action": {
          "en": "NORMAL",
          "ru": "НОРМАЛЬНОЕ (NORMAL)"
        }
      },
      {
        "type": "step",
        "id": "s7",
        "item": {
          "en": "7. Landing",
          "ru": "7. Посадка"
        },
        "action": {
          "en": "LAND AS SOON AS PRACTICABLE",
          "ru": "ПОСАДКА КАК МОЖНО БЫСТРЕЕ"
        },
        "deferrable": true
      }
    ]
  },
  {
    "id": "em-341",
    "code": "3.4.1",
    "cas": null,
    "group": "ELECTRICAL",
    "title": {
      "en": "COMPLETE FAILURE OF THE ELECTRICAL SYSTEM",
      "ru": "ПОЛНЫЙ ОТКАЗ ЭЛЕКТРОСИСТЕМЫ"
    },
    "subtitle": {
      "en": "ECU backup battery supplies ECU B ≥ 30 min; Emergency battery supplies backup gyro & flood ≥ 1 hour (Rev. 4).",
      "ru": "Резервная батарея питает ECU B ≥ 30 мин; аварийная батарея — резервный АГ и освещение ≥ 1 ч (Ред. 4)."
    },
    "blocks": [
      {
        "type": "step",
        "id": "s1",
        "item": {
          "en": "1. Circuit breakers",
          "ru": "1. Предохранители (АЗС)"
        },
        "action": {
          "en": "CHECK IN",
          "ru": "УБЕДИТЬСЯ, ЧТО ВКЛЮЧЕНЫ"
        }
      },
      {
        "type": "step",
        "id": "s2",
        "item": {
          "en": "2. ESSENTIAL BUS",
          "ru": "2. ШИНА ОСНОВНЫХ ПОТРЕБИТЕЛЕЙ"
        },
        "action": {
          "en": "ON",
          "ru": "ВКЛЮЧИТЬ (ON)"
        }
      },
      {
        "type": "branch",
        "id": "b1",
        "prompt": {
          "en": "IS ELECTRICAL POWER RESTORED?",
          "ru": "ЭЛЕКТРОПИТАНИЕ ВОССТАНОВЛЕНО?"
        },
        "options": [
          {
            "id": "yes",
            "label": {
              "en": "YES — POWER ON ESSENTIAL BUS",
              "ru": "ДА — ПИТАНИЕ НА ESSENTIAL BUS"
            },
            "badge": "AMBER",
            "items": [
              {
                "type": "step",
                "id": "ok1",
                "item": {
                  "en": "Landing",
                  "ru": "Посадка"
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
            "id": "no",
            "label": {
              "en": "(a) NO — STILL NO ELECTRICAL POWER AVAILABLE",
              "ru": "(a) НЕТ — ЭЛЕКТРОПИТАНИЕ ПО-ПРЕЖНЕМУ ОТСУТСТВУЕТ"
            },
            "badge": "RED",
            "items": [
              {
                "type": "step",
                "id": "s3",
                "item": {
                  "en": "3. EMERGENCY switch (if installed)",
                  "ru": "3. Аварийный выключатель (EMERGENCY)"
                },
                "action": {
                  "en": "ON",
                  "ru": "ВКЛ (ON)"
                }
              },
              {
                "type": "step",
                "id": "s4",
                "item": {
                  "en": "4. Flood light",
                  "ru": "4. Заливающее освещение"
                },
                "action": {
                  "en": "ON, IF NECESSARY",
                  "ru": "ВКЛ ПРИ НЕОБХОДИМОСТИ"
                }
              },
              {
                "type": "step",
                "id": "s5",
                "item": {
                  "en": "5. POWER",
                  "ru": "5. Мощность двигателя"
                },
                "action": {
                  "en": "SET BY LEVER POSITION & ENGINE NOISE",
                  "ru": "ПО ПОЛОЖЕНИЮ РУД И ЗВУКУ ДВИГАТЕЛЯ"
                }
              },
              {
                "type": "step",
                "id": "s6",
                "item": {
                  "en": "6. Flaps",
                  "ru": "6. Закрылки"
                },
                "action": {
                  "en": "PREPARE FOR LANDING WITH CURRENT FLAP POSITION (SEE 4B.5)",
                  "ru": "ПОСАДКА С ЗАКРЫЛКАМИ В ФАКТИЧЕСКОМ ПОЛОЖЕНИИ (4B.5)"
                },
                "deferrable": true
              },
              {
                "type": "step",
                "id": "s7",
                "item": {
                  "en": "7. Landing",
                  "ru": "7. Посадка"
                },
                "action": {
                  "en": "LAND ON NEAREST SUITABLE AIRFIELD (USE STANDBY ASI/ALT)",
                  "ru": "ПОСАДКА НА БЛИЖАЙШЕМ АЭРОДРОМЕ (РЕЗЕРВНЫЕ УС/ВД)"
                }
              },
              {
                "type": "warning",
                "text": {
                  "en": "Engine stoppage may occur depending on failure mode. ECU backup battery powers ECU B for at least 30 min. Backup horizon & flood light have power for at least 1 hour (Rev. 4).",
                  "ru": "Возможен останов двигателя. Резервная батарея питает ECU B не менее 30 мин. Резервный авиагоризонт и заливающее освещение работают не менее 1 часа (Ред. 4)."
                }
              },
              {
                "type": "link",
                "target": "ab-4b5",
                "label": {
                  "en": "GO TO 4B.5 — FAILURES IN FLAP OPERATING SYSTEM",
                  "ru": "ПЕРЕЙТИ К 4B.5 — ОТКАЗЫ СИСТЕМЫ ЗАКРЫЛКОВ"
                }
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "em-342",
    "code": "3.4.2",
    "cas": "STARTER",
    "group": "G1000 WARNINGS",
    "title": {
      "en": "STARTER — STARTER MALFUNCTION (REV. 4)",
      "ru": "STARTER — НЕИСПРАВНОСТЬ СТАРТЕРА (РЕД. 4)"
    },
    "subtitle": {
      "en": "Starter does not disengage after engine start (STARTER on G1000 / START on White Wire).",
      "ru": "Стартер не отключился после запуска двигателя."
    },
    "blocks": [
      {
        "type": "branch",
        "id": "b1",
        "prompt": {
          "en": "SELECT FLIGHT PHASE:",
          "ru": "ВЫБЕРИТЕ ЭТАП:"
        },
        "options": [
          {
            "id": "gnd",
            "label": {
              "en": "(a) ON GROUND",
              "ru": "(a) НА ЗЕМЛЕ"
            },
            "badge": "RED",
            "items": [
              {
                "type": "step",
                "id": "g1",
                "item": {
                  "en": "1. POWER lever",
                  "ru": "1. РУД"
                },
                "action": {
                  "en": "IDLE",
                  "ru": "МАЛЫЙ ГАЗ (IDLE)"
                }
              },
              {
                "type": "step",
                "id": "g2",
                "item": {
                  "en": "2. ENGINE MASTER",
                  "ru": "2. ENGINE MASTER"
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
                  "en": "3. ELECTRIC MASTER",
                  "ru": "3. ELECTRIC MASTER"
                },
                "action": {
                  "en": "OFF",
                  "ru": "ВЫКЛ (OFF)"
                }
              },
              {
                "type": "warning",
                "text": {
                  "en": "TERMINATE FLIGHT PREPARATION!",
                  "ru": "ПОДГОТОВКУ К ПОЛЁТУ ПРЕКРАТИТЬ!"
                }
              }
            ]
          },
          {
            "id": "flt",
            "label": {
              "en": "(b) IN FLIGHT",
              "ru": "(b) В ПОЛЁТЕ"
            },
            "badge": "AMBER",
            "items": [
              {
                "type": "step",
                "id": "f1",
                "item": {
                  "en": "Landing",
                  "ru": "Посадка"
                },
                "action": {
                  "en": "LAND AS SOON AS POSSIBLE",
                  "ru": "СОВЕРШИТЬ ПОСАДКУ КАК МОЖНО БЫСТРЕЕ"
                }
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "em-351",
    "code": "3.5.1",
    "cas": null,
    "group": "SMOKE & FIRE",
    "title": {
      "en": "SMOKE AND FIRE ON GROUND",
      "ru": "ЗАДЫМЛЕНИЕ И ПОЖАР НА ЗЕМЛЕ"
    },
    "subtitle": {
      "en": "Engine fire when starting on ground OR Electrical fire with smoke on ground.",
      "ru": "Пожар двигателя при запуске или пожар электрооборудования на земле."
    },
    "blocks": [
      {
        "type": "branch",
        "id": "b1",
        "prompt": {
          "en": "SELECT FIRE SOURCE:",
          "ru": "ВЫБЕРИТЕ ИСТОЧНИК ПОЖАРА:"
        },
        "options": [
          {
            "id": "eng",
            "label": {
              "en": "(a) ENGINE FIRE WHEN STARTING ON GROUND",
              "ru": "(a) ПОЖАР ДВИГАТЕЛЯ ПРИ ЗАПУСКЕ НА ЗЕМЛЕ"
            },
            "badge": "RED",
            "items": [
              {
                "type": "memory",
                "title": {
                  "en": "IMMEDIATE SHUTDOWN & EVACUATION",
                  "ru": "НЕМЕДЛЕННЫЙ ОСТАНОВ И ЭВАКУАЦИЯ"
                },
                "steps": [
                  {
                    "id": "e1",
                    "item": {
                      "en": "1. Fuel valve",
                      "ru": "1. Топливный кран"
                    },
                    "action": {
                      "en": "OFF",
                      "ru": "ЗАКРЫТ (OFF)"
                    }
                  },
                  {
                    "id": "e2",
                    "item": {
                      "en": "2. Fuel transfer pump",
                      "ru": "2. Насос перекачки"
                    },
                    "action": {
                      "en": "OFF",
                      "ru": "ВЫКЛ (OFF)"
                    }
                  },
                  {
                    "id": "e3",
                    "item": {
                      "en": "3. ENGINE MASTER",
                      "ru": "3. ENGINE MASTER"
                    },
                    "action": {
                      "en": "OFF",
                      "ru": "ВЫКЛ (OFF)"
                    }
                  },
                  {
                    "id": "e4",
                    "item": {
                      "en": "4. Fuel pumps",
                      "ru": "4. Топливные насосы"
                    },
                    "action": {
                      "en": "OFF",
                      "ru": "ВЫКЛ (OFF)"
                    }
                  },
                  {
                    "id": "e5",
                    "item": {
                      "en": "5. ELECTRIC MASTER",
                      "ru": "5. ELECTRIC MASTER"
                    },
                    "action": {
                      "en": "OFF",
                      "ru": "ВЫКЛ (OFF)"
                    }
                  }
                ]
              },
              {
                "type": "subhead",
                "text": {
                  "en": "AFTER STANDSTILL:",
                  "ru": "ПОСЛЕ ОСТАНОВКИ:"
                }
              },
              {
                "type": "step",
                "id": "e6",
                "item": {
                  "en": "6. Canopy",
                  "ru": "6. Фонарь"
                },
                "action": {
                  "en": "OPEN",
                  "ru": "ОТКРЫТЬ"
                }
              },
              {
                "type": "step",
                "id": "e7",
                "item": {
                  "en": "7. Airplane",
                  "ru": "7. Самолёт"
                },
                "action": {
                  "en": "EVACUATE IMMEDIATELY",
                  "ru": "НЕМЕДЛЕННО ПОКИНУТЬ"
                }
              }
            ]
          },
          {
            "id": "elec",
            "label": {
              "en": "(b) ELECTRICAL FIRE WITH SMOKE ON GROUND",
              "ru": "(b) ПОЖАР ЭЛЕКТРООБОРУДОВАНИЯ НА ЗЕМЛЕ"
            },
            "badge": "RED",
            "items": [
              {
                "type": "step",
                "id": "el1",
                "item": {
                  "en": "1. ELECTRIC MASTER",
                  "ru": "1. ELECTRIC MASTER"
                },
                "action": {
                  "en": "OFF",
                  "ru": "ВЫКЛ (OFF)"
                }
              },
              {
                "type": "subhead",
                "text": {
                  "en": "IF ENGINE IS RUNNING:",
                  "ru": "ЕСЛИ ДВИГАТЕЛЬ РАБОТАЕТ:"
                }
              },
              {
                "type": "step",
                "id": "el2",
                "item": {
                  "en": "2. POWER lever",
                  "ru": "2. РУД"
                },
                "action": {
                  "en": "IDLE",
                  "ru": "МАЛЫЙ ГАЗ (IDLE)"
                }
              },
              {
                "type": "step",
                "id": "el3",
                "item": {
                  "en": "3. ENGINE MASTER",
                  "ru": "3. ENGINE MASTER"
                },
                "action": {
                  "en": "OFF",
                  "ru": "ВЫКЛ (OFF)"
                }
              },
              {
                "type": "step",
                "id": "el4",
                "item": {
                  "en": "4. Fuel pumps",
                  "ru": "4. Топливные насосы"
                },
                "action": {
                  "en": "OFF",
                  "ru": "ВЫКЛ (OFF)"
                }
              },
              {
                "type": "subhead",
                "text": {
                  "en": "WHEN ENGINE HAS STOPPED:",
                  "ru": "ПОСЛЕ ОСТАНОВА ДВИГАТЕЛЯ:"
                }
              },
              {
                "type": "step",
                "id": "el5",
                "item": {
                  "en": "5. Canopy",
                  "ru": "5. Фонарь"
                },
                "action": {
                  "en": "OPEN",
                  "ru": "ОТКРЫТЬ"
                }
              },
              {
                "type": "step",
                "id": "el6",
                "item": {
                  "en": "6. Airplane",
                  "ru": "6. Самолёт"
                },
                "action": {
                  "en": "EVACUATE IMMEDIATELY",
                  "ru": "НЕМЕДЛЕННО ПОКИНУТЬ"
                }
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "em-352",
    "code": "3.5.2",
    "cas": null,
    "group": "SMOKE & FIRE",
    "title": {
      "en": "SMOKE AND FIRE DURING TAKE-OFF",
      "ru": "ЗАДЫМЛЕНИЕ И ПОЖАР ПРИ ВЗЛЁТЕ"
    },
    "subtitle": {
      "en": "Abort take-off if possible; otherwise short-cut circuit and land ASAP.",
      "ru": "Прервать взлёт при возможности; иначе — посадка по малому кругу."
    },
    "blocks": [
      {
        "type": "branch",
        "id": "b1",
        "prompt": {
          "en": "CAN TAKE-OFF STILL BE ABORTED?",
          "ru": "ВЗЛЁТ ЕЩЁ МОЖНО ПРЕРВАТЬ?"
        },
        "options": [
          {
            "id": "abort",
            "label": {
              "en": "(a) YES — TAKE-OFF CAN BE ABORTED",
              "ru": "(a) ДА — ВЗЛЁТ МОЖНО ПРЕРВАТЬ"
            },
            "badge": "AMBER",
            "items": [
              {
                "type": "step",
                "id": "a1",
                "item": {
                  "en": "1. POWER lever",
                  "ru": "1. РУД"
                },
                "action": {
                  "en": "IDLE",
                  "ru": "МАЛЫЙ ГАЗ (IDLE)"
                }
              },
              {
                "type": "step",
                "id": "a2",
                "item": {
                  "en": "2. Cabin heat",
                  "ru": "2. Обогрев кабины (CABIN HEAT)"
                },
                "action": {
                  "en": "OFF",
                  "ru": "ВЫКЛ (OFF)"
                }
              },
              {
                "type": "step",
                "id": "a3",
                "item": {
                  "en": "3. Brakes",
                  "ru": "3. Тормоза"
                },
                "action": {
                  "en": "APPLY — BRING AIRPLANE TO STOP",
                  "ru": "ЗАТОРМОЗИТЬ ДО ПОЛНОЙ ОСТАНОВКИ"
                }
              },
              {
                "type": "step",
                "id": "a4",
                "item": {
                  "en": "4. Fuel valve",
                  "ru": "4. Топливный кран"
                },
                "action": {
                  "en": "OFF",
                  "ru": "ЗАКРЫТ (OFF)"
                }
              },
              {
                "type": "step",
                "id": "a5",
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
                "type": "step",
                "id": "a6",
                "item": {
                  "en": "6. ENGINE MASTER",
                  "ru": "6. ENGINE MASTER"
                },
                "action": {
                  "en": "OFF",
                  "ru": "ВЫКЛ (OFF)"
                }
              },
              {
                "type": "step",
                "id": "a7",
                "item": {
                  "en": "7. Fuel pumps",
                  "ru": "7. Топливные насосы"
                },
                "action": {
                  "en": "OFF",
                  "ru": "ВЫКЛ (OFF)"
                }
              },
              {
                "type": "step",
                "id": "a8",
                "item": {
                  "en": "8. ELECTRIC MASTER",
                  "ru": "8. ELECTRIC MASTER"
                },
                "action": {
                  "en": "OFF",
                  "ru": "ВЫКЛ (OFF)"
                }
              },
              {
                "type": "step",
                "id": "a9",
                "item": {
                  "en": "9–10. After standstill: Canopy / Airplane",
                  "ru": "9–10. После остановки: Фонарь / Самолёт"
                },
                "action": {
                  "en": "OPEN / EVACUATE IMMEDIATELY",
                  "ru": "ОТКРЫТЬ / НЕМЕДЛЕННО ПОКИНУТЬ"
                }
              }
            ]
          },
          {
            "id": "cont",
            "label": {
              "en": "(b) NO — TAKE-OFF CANNOT BE ABORTED",
              "ru": "(b) НЕТ — ВЗЛЁТ ПРЕРВАТЬ НЕЛЬЗЯ"
            },
            "badge": "RED",
            "items": [
              {
                "type": "step",
                "id": "c1",
                "item": {
                  "en": "1. Cabin heat",
                  "ru": "1. Обогрев кабины"
                },
                "action": {
                  "en": "OFF",
                  "ru": "ВЫКЛ (OFF)"
                }
              },
              {
                "type": "step",
                "id": "c2",
                "item": {
                  "en": "2. Flight path",
                  "ru": "2. Траектория"
                },
                "action": {
                  "en": "SHORT-CUT CIRCUIT & LAND (DO NOT TURN BACK AT LOW ALTITUDE!)",
                  "ru": "ПО МАЛОМУ КРУГУ НА АЭРОДРОМ (НЕ РАЗВОРАЧИВАТЬСЯ НА МАЛОЙ ВЫСОТЕ!)"
                }
              },
              {
                "type": "subhead",
                "text": {
                  "en": "WHEN LANDING AREA CAN BE REACHED SAFELY:",
                  "ru": "ПОСЛЕ НАБОРА ВЫСОТЫ, ОБЕСПЕЧИВАЮЩЕЙ ДОЛЁТ ДО ПОСАДКИ:"
                }
              },
              {
                "type": "step",
                "id": "c3",
                "item": {
                  "en": "3–8. Fuel valve / Xfer / Cabin heat / ENG MSTR / Fuel pumps / ELEC MSTR",
                  "ru": "3–8. Кран / Перекачка / Обогрев / ENG MSTR / Насосы / ELEC MSTR"
                },
                "action": {
                  "en": "ALL OFF",
                  "ru": "ВСЁ ВЫКЛ (OFF)"
                }
              },
              {
                "type": "step",
                "id": "c9",
                "item": {
                  "en": "9. Emergency windows",
                  "ru": "9. Аварийные форточки"
                },
                "action": {
                  "en": "OPEN IF NECESSARY",
                  "ru": "ОТКРЫТЬ ПРИ НЕОБХОДИМОСТИ"
                }
              },
              {
                "type": "step",
                "id": "c10",
                "item": {
                  "en": "10. Emergency landing",
                  "ru": "10. Аварийная посадка"
                },
                "action": {
                  "en": "ENGINE OFF — ALLOW FOR FLAP POSITION (SEE 3.7.1)",
                  "ru": "С ОСТАНОВЛЕННЫМ ДВИГАТЕЛЕМ (3.7.1)"
                }
              },
              {
                "type": "caution",
                "text": {
                  "en": "In extreme smoke, front canopy may be unlatched in flight to partially open for ventilation.",
                  "ru": "При сильном задымлении переднюю часть фонаря можно снять с замков в полёте для вентиляции."
                }
              },
              {
                "type": "step",
                "id": "c11",
                "item": {
                  "en": "11–12. When stopped: Canopy / Airplane",
                  "ru": "11–12. После остановки: Фонарь / Самолёт"
                },
                "action": {
                  "en": "OPEN / EVACUATE IMMEDIATELY",
                  "ru": "ОТКРЫТЬ / НЕМЕДЛЕННО ПОКИНУТЬ"
                }
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "em-353",
    "code": "3.5.3",
    "cas": null,
    "group": "SMOKE & FIRE",
    "title": {
      "en": "SMOKE AND FIRE IN FLIGHT",
      "ru": "ЗАДЫМЛЕНИЕ И ПОЖАР В ПОЛЁТЕ"
    },
    "subtitle": {
      "en": "Engine fire in flight OR Electrical fire with smoke in flight.",
      "ru": "Пожар двигателя в полёте или пожар электрооборудования в полёте."
    },
    "blocks": [
      {
        "type": "warning",
        "text": {
          "en": "Prepare to land without delay while completing fire/smoke procedures. If fire cannot be visually verified extinguished, LAND IMMEDIATELY.",
          "ru": "Подготовиться к немедленной посадке. Если невозможно визуально убедиться, что пожар полностью потушен — ПОСАДКА НЕМЕДЛЕННО."
        }
      },
      {
        "type": "branch",
        "id": "b1",
        "prompt": {
          "en": "SELECT FIRE TYPE IN FLIGHT:",
          "ru": "ВЫБЕРИТЕ ТИП ПОЖАРА В ПОЛЁТЕ:"
        },
        "options": [
          {
            "id": "eng_flt",
            "label": {
              "en": "(a) ENGINE FIRE IN FLIGHT",
              "ru": "(a) ПОЖАР ДВИГАТЕЛЯ В ПОЛЁТЕ"
            },
            "badge": "RED",
            "items": [
              {
                "type": "step",
                "id": "ef1",
                "item": {
                  "en": "1. Cabin heat",
                  "ru": "1. Обогрев кабины"
                },
                "action": {
                  "en": "OFF",
                  "ru": "ВЫКЛ (OFF)"
                }
              },
              {
                "type": "step",
                "id": "ef2",
                "item": {
                  "en": "2. Emergency landing area",
                  "ru": "2. Площадка для посадки"
                },
                "action": {
                  "en": "SELECT APPROPRIATE AREA",
                  "ru": "ВЫБРАТЬ ПРИГОДНЫЙ УЧАСТОК"
                }
              },
              {
                "type": "subhead",
                "text": {
                  "en": "WHEN CERTAIN THAT LANDING AREA WILL BE REACHED:",
                  "ru": "КОГДА ДОЛЁТ ДО МЕСТА ПОСАДКИ ОБЕСПЕЧЕН:"
                }
              },
              {
                "type": "step",
                "id": "ef3",
                "item": {
                  "en": "3. Fuel valve",
                  "ru": "3. Топливный кран"
                },
                "action": {
                  "en": "OFF",
                  "ru": "ЗАКРЫТ (OFF)"
                }
              },
              {
                "type": "step",
                "id": "ef4",
                "item": {
                  "en": "4. POWER lever",
                  "ru": "4. РУД"
                },
                "action": {
                  "en": "MAX",
                  "ru": "MAX (ДО УПОРА)"
                }
              },
              {
                "type": "step",
                "id": "ef5",
                "item": {
                  "en": "5. Emergency windows",
                  "ru": "5. Аварийные форточки"
                },
                "action": {
                  "en": "OPEN IF REQUIRED",
                  "ru": "ОТКРЫТЬ ПРИ НЕОБХОДИМОСТИ"
                }
              },
              {
                "type": "step",
                "id": "ef6",
                "item": {
                  "en": "6. Landing",
                  "ru": "6. Посадка"
                },
                "action": {
                  "en": "LAND IMMEDIATELY (3.7.1) — THEN OPEN CANOPY & EVACUATE",
                  "ru": "ПОСАДКА НЕМЕДЛЕННО (3.7.1) — ОТКРЫТЬ ФОНАРЬ И ПОКИНУТЬ"
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
          },
          {
            "id": "elec_flt",
            "label": {
              "en": "(b) ELECTRICAL FIRE WITH SMOKE IN FLIGHT",
              "ru": "(b) ПОЖАР ЭЛЕКТРООБОРУДОВАНИЯ В ПОЛЁТЕ"
            },
            "badge": "RED",
            "items": [
              {
                "type": "step",
                "id": "el1",
                "item": {
                  "en": "1. EMERGENCY switch (if installed)",
                  "ru": "1. Аварийный выключатель (EMERGENCY)"
                },
                "action": {
                  "en": "ON",
                  "ru": "ВКЛ (ON)"
                }
              },
              {
                "type": "step",
                "id": "el2",
                "item": {
                  "en": "2. AVIONIC MASTER",
                  "ru": "2. AVIONIC MASTER"
                },
                "action": {
                  "en": "OFF",
                  "ru": "ВЫКЛ (OFF)"
                }
              },
              {
                "type": "step",
                "id": "el3",
                "item": {
                  "en": "3. ELECTRIC MASTER",
                  "ru": "3. ELECTRIC MASTER"
                },
                "action": {
                  "en": "OFF",
                  "ru": "ВЫКЛ (OFF)"
                }
              },
              {
                "type": "step",
                "id": "el4",
                "item": {
                  "en": "4. Cabin heat",
                  "ru": "4. Обогрев кабины"
                },
                "action": {
                  "en": "OFF",
                  "ru": "ВЫКЛ (OFF)"
                }
              },
              {
                "type": "step",
                "id": "el5",
                "item": {
                  "en": "5. Emergency windows",
                  "ru": "5. Аварийные форточки"
                },
                "action": {
                  "en": "OPEN IF REQUIRED",
                  "ru": "ОТКРЫТЬ ПРИ НЕОБХОДИМОСТИ"
                }
              },
              {
                "type": "warning",
                "text": {
                  "en": "ELECTRIC MASTER OFF shuts down all electrical/electronic equipment. EMERGENCY switch ON powers backup attitude gyro & flood light from emergency battery. Extreme smoke: front canopy may be unlatched.",
                  "ru": "ELECTRIC MASTER OFF обесточивает всё оборудование. Выключатель EMERGENCY ON питает резервный авиагоризонт и заливающее освещение. При сильном дыме можно расфиксировать фонарь."
                }
              },
              {
                "type": "step",
                "id": "el6",
                "item": {
                  "en": "6–8. Landing & Evacuation",
                  "ru": "6–8. Посадка и эвакуация"
                },
                "action": {
                  "en": "LAND IMMEDIATELY (3.7.1) — OPEN CANOPY & EVACUATE",
                  "ru": "ПОСАДКА НЕМЕДЛЕННО (3.7.1) — ОТКРЫТЬ ФОНАРЬ И ПОКИНУТЬ"
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
    "id": "em-36",
    "code": "3.6",
    "cas": null,
    "group": "LANDING & GLIDE",
    "title": {
      "en": "GLIDING",
      "ru": "ПЛАНИРОВАНИЕ"
    },
    "subtitle": {
      "en": "Best glide configuration and glide ratio data.",
      "ru": "Конфигурация наивыгоднейшего планирования и аэродинамическое качество."
    },
    "blocks": [
      {
        "type": "step",
        "id": "s1",
        "item": {
          "en": "1. Flaps",
          "ru": "1. Закрылки"
        },
        "action": {
          "en": "UP",
          "ru": "УБРАТЬ (UP)"
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
          "en": "88 KIAS",
          "ru": "88 УЗЛОВ (KIAS)"
        }
      },
      {
        "type": "note",
        "text": {
          "en": "With wheel fairings: Glide ratio 1 : 9.7 → 1.59 NM (2.94 km) per 1,000 ft (305 m) in still air (windmilling prop).\nWithout wheel fairings: Glide ratio 1 : 9.4 → 1.54 NM (2.85 km) per 1,000 ft.",
          "ru": "С обтекателями колёс: качество 9,7 → 1,59 NM (2,94 км) на каждые 1000 фт (305 м) в штиль (винт на авторотации).\nБез обтекателей колёс: качество 9,4 → 1,54 NM (2,85 км) на 1000 фт."
        }
      }
    ]
  },
  {
    "id": "em-371",
    "code": "3.7.1",
    "cas": null,
    "group": "LANDING & GLIDE",
    "title": {
      "en": "EMERGENCY LANDING WITH ENGINE OFF",
      "ru": "АВАРИЙНАЯ ПОСАДКА С ОСТАНОВЛЕННЫМ ДВИГАТЕЛЕМ"
    },
    "subtitle": {
      "en": "Securing engine/fuel/electrics and approach speed schedule.",
      "ru": "Обесточивание, перекрытие топлива и скорости захода на посадку."
    },
    "blocks": [
      {
        "type": "caution",
        "text": {
          "en": "Adjustable backrests (if installed) must be fixed in the upright position.",
          "ru": "Регулируемые спинки кресел (если установлены) должны быть зафиксированы в вертикальном положении."
        }
      },
      {
        "type": "step",
        "id": "s1",
        "item": {
          "en": "1. Adjustable backrests (if installed)",
          "ru": "1. Регулируемые спинки кресел"
        },
        "action": {
          "en": "UPRIGHT & VERIFY FIXATION",
          "ru": "ВЕРТИКАЛЬНО И ЗАФИКСИРОВАТЬ"
        }
      },
      {
        "type": "step",
        "id": "s2",
        "item": {
          "en": "2. ENGINE MASTER",
          "ru": "2. ENGINE MASTER"
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
          "en": "3. Fuel transfer pump",
          "ru": "3. Насос перекачки топлива"
        },
        "action": {
          "en": "OFF",
          "ru": "ВЫКЛ (OFF)"
        }
      },
      {
        "type": "step",
        "id": "s4",
        "item": {
          "en": "4. Fuel pumps",
          "ru": "4. Топливные насосы"
        },
        "action": {
          "en": "OFF",
          "ru": "ВЫКЛ (OFF)"
        }
      },
      {
        "type": "step",
        "id": "s5",
        "item": {
          "en": "5. Fuel valve",
          "ru": "5. Топливный кран"
        },
        "action": {
          "en": "OFF",
          "ru": "ЗАКРЫТ (OFF)"
        }
      },
      {
        "type": "step",
        "id": "s6",
        "item": {
          "en": "6. AVIONIC MASTER",
          "ru": "6. AVIONIC MASTER"
        },
        "action": {
          "en": "OFF",
          "ru": "ВЫКЛ (OFF)"
        }
      },
      {
        "type": "step",
        "id": "s7",
        "item": {
          "en": "7. Safety harnesses",
          "ru": "7. Привязные ремни"
        },
        "action": {
          "en": "CHECK FASTENED & TIGHTENED",
          "ru": "ЗАСТЁГНУТЫ И ЗАТЯНУТЫ"
        }
      },
      {
        "type": "subhead",
        "text": {
          "en": "WHEN SURE OF MAKING LANDING AREA:",
          "ru": "КОГДА ДОЛЁТ ДО ПЛОЩАДКИ ГАРАНТИРОВАН:"
        }
      },
      {
        "type": "step",
        "id": "s8",
        "item": {
          "en": "8. Flaps",
          "ru": "8. Закрылки"
        },
        "action": {
          "en": "T/O OR LDG, AS REQUIRED",
          "ru": "T/O ИЛИ LDG ПО ОБСТОЯТЕЛЬСТВАМ"
        },
        "deferrable": true
      },
      {
        "type": "table",
        "headers": {
          "en": [
            "Flaps",
            "940 kg",
            "1000 kg",
            "1080 kg",
            "1160 kg",
            "1216 kg",
            "up to 1280 kg"
          ],
          "ru": [
            "Закрылки",
            "940 кг",
            "1000 кг",
            "1080 кг",
            "1160 кг",
            "1216 кг",
            "до 1280 кг"
          ]
        },
        "rows": [
          [
            "T/O",
            "68 KIAS",
            "70 KIAS",
            "73 KIAS",
            "76 KIAS",
            "77 KIAS",
            "78 KIAS"
          ],
          [
            "LDG",
            "66 KIAS",
            "69 KIAS",
            "72 KIAS",
            "74 KIAS",
            "76 KIAS",
            "77 KIAS"
          ]
        ]
      },
      {
        "type": "step",
        "id": "s10",
        "item": {
          "en": "10. ELECTRIC MASTER",
          "ru": "10. ELECTRIC MASTER"
        },
        "action": {
          "en": "OFF",
          "ru": "ВЫКЛ (OFF)"
        },
        "deferrable": true
      },
      {
        "type": "step",
        "id": "s11",
        "item": {
          "en": "11. Touchdown",
          "ru": "11. Касание"
        },
        "action": {
          "en": "LOWEST PRACTICAL SPEED",
          "ru": "МИНИМАЛЬНАЯ ВОЗМОЖНАЯ СКОРОСТЬ"
        }
      }
    ]
  },
  {
    "id": "em-372",
    "code": "3.7.2",
    "cas": null,
    "group": "LANDING & GLIDE",
    "title": {
      "en": "LANDING WITH DEFECTIVE MAIN GEAR TIRE",
      "ru": "ПОСАДКА С ДЕФЕКТОМ ПНЕВМАТИКА ООШ"
    },
    "subtitle": {
      "en": "Swerve tendency occurs during roll-out or slow taxiing.",
      "ru": "Тенденция к уводу проявляется на пробеге и медленном рулении."
    },
    "blocks": [
      {
        "type": "step",
        "id": "s1",
        "item": {
          "en": "1. ATC",
          "ru": "1. Диспетчер УВД"
        },
        "action": {
          "en": "ADVISE",
          "ru": "ДОЛОЖИТЬ"
        }
      },
      {
        "type": "step",
        "id": "s2",
        "item": {
          "en": "2. Runway alignment",
          "ru": "2. Положение на ВПП"
        },
        "action": {
          "en": "LAND ON RUNWAY EDGE OF INTACT TIRE SIDE",
          "ru": "НА КРАЙ ВПП СО СТОРОНЫ ИСПРАВНОГО ПНЕВМАТИКА"
        }
      },
      {
        "type": "step",
        "id": "s3",
        "item": {
          "en": "3. Bank attitude",
          "ru": "3. Крен при касании"
        },
        "action": {
          "en": "HOLD WING LOW ON INTACT TIRE SIDE",
          "ru": "ОПУСТИТЬ КРЫЛО В СТОРОНУ ИСПРАВНОГО ПНЕВМАТИКА"
        }
      },
      {
        "type": "step",
        "id": "s4",
        "item": {
          "en": "4. Roll-out directional control",
          "ru": "4. Выдерживание направления"
        },
        "action": {
          "en": "USE RUDDER + STRONG BRAKE ON INTACT SIDE (EVEN TO WHEEL LOCK)",
          "ru": "РУЛЬ НАПРАВЛЕНИЯ + ИНТЕНСИВНОЕ ТОРМОЖЕНИЕ (Вплоть до юза)"
        }
      }
    ]
  },
  {
    "id": "em-373",
    "code": "3.7.3",
    "cas": null,
    "group": "LANDING & GLIDE",
    "title": {
      "en": "LANDING WITH DEFECTIVE BRAKES",
      "ru": "ПОСАДКА С НЕИСПРАВНЫМИ ТОРМОЗАМИ"
    },
    "subtitle": {
      "en": "Landing on grass is generally recommended to reduce landing run.",
      "ru": "Рекомендуется посадка на грунт для сокращения пробега."
    },
    "blocks": [
      {
        "type": "note",
        "text": {
          "en": "Landing on grass is recommended due to greater rolling resistance.",
          "ru": "Рекомендуется посадка на грунтовую ВПП для увеличения сопротивления качению."
        }
      },
      {
        "type": "warning",
        "text": {
          "en": "After safe touchdown, if collision risk exists and time allows, reduce fire risk:",
          "ru": "После безопасного касания, при риске столкновения и наличии времени:"
        }
      },
      {
        "type": "step",
        "id": "s1",
        "item": {
          "en": "1. Fuel valve",
          "ru": "1. Топливный кран"
        },
        "action": {
          "en": "OFF",
          "ru": "OFF"
        }
      },
      {
        "type": "step",
        "id": "s2",
        "item": {
          "en": "2. ENGINE MASTER",
          "ru": "2. ENGINE MASTER"
        },
        "action": {
          "en": "OFF",
          "ru": "OFF"
        }
      },
      {
        "type": "step",
        "id": "s3",
        "item": {
          "en": "3. Fuel pumps",
          "ru": "3. Топливные насосы"
        },
        "action": {
          "en": "OFF",
          "ru": "OFF"
        }
      },
      {
        "type": "step",
        "id": "s4",
        "item": {
          "en": "4. ELECTRIC MASTER",
          "ru": "4. ELECTRIC MASTER"
        },
        "action": {
          "en": "OFF",
          "ru": "OFF"
        }
      }
    ]
  },
  {
    "id": "em-38",
    "code": "3.8",
    "cas": null,
    "group": "OTHER EMERGENCIES",
    "title": {
      "en": "RECOVERY FROM AN UNINTENTIONAL SPIN",
      "ru": "ВЫХОД ИЗ НЕПРЕДНАМЕРЕННОГО ШТОПОРА"
    },
    "subtitle": {
      "en": "Steps 1 to 4 must be carried out IMMEDIATELY and SIMULTANEOUSLY.",
      "ru": "Пункты 1–4 выполнить НЕМЕДЛЕННО и ОДНОВРЕМЕННО."
    },
    "blocks": [
      {
        "type": "memory",
        "title": {
          "en": "MEMORY ITEMS — IMMEDIATE & SIMULTANEOUS (STEPS 1–4)",
          "ru": "ДЕЙСТВИЯ ПО ПАМЯТИ — НЕМЕДЛЕННО И ОДНОВРЕМЕННО (ПП. 1–4)"
        },
        "steps": [
          {
            "id": "m1",
            "item": {
              "en": "1. POWER lever",
              "ru": "1. РУД"
            },
            "action": {
              "en": "IDLE",
              "ru": "МАЛЫЙ ГАЗ (IDLE)"
            }
          },
          {
            "id": "m2",
            "item": {
              "en": "2. Ailerons",
              "ru": "2. Элероны"
            },
            "action": {
              "en": "NEUTRAL",
              "ru": "НЕЙТРАЛЬНО"
            }
          },
          {
            "id": "m3",
            "item": {
              "en": "3. Rudder",
              "ru": "3. Руль направления"
            },
            "action": {
              "en": "FULL DEFLECTION AGAINST SPIN DIRECTION",
              "ru": "ПОЛНОСТЬЮ ПРОТИВ ВРАЩЕНИЯ"
            }
          },
          {
            "id": "m4",
            "item": {
              "en": "4. Elevator (control stick)",
              "ru": "4. Руль высоты (РУС)"
            },
            "action": {
              "en": "FULLY FORWARD",
              "ru": "ПОЛНОСТЬЮ ОТ СЕБЯ (ВПЕРЁД)"
            }
          }
        ]
      },
      {
        "type": "subhead",
        "text": {
          "en": "WHEN ROTATION HAS STOPPED:",
          "ru": "ПОСЛЕ ПРЕКРАЩЕНИЯ ВРАЩЕНИЯ:"
        }
      },
      {
        "type": "step",
        "id": "s5",
        "item": {
          "en": "5. Flaps",
          "ru": "5. Закрылки"
        },
        "action": {
          "en": "UP",
          "ru": "УБРАТЬ (UP)"
        }
      },
      {
        "type": "step",
        "id": "s6",
        "item": {
          "en": "6. Rudder",
          "ru": "6. Руль направления"
        },
        "action": {
          "en": "NEUTRAL",
          "ru": "НЕЙТРАЛЬНО"
        }
      },
      {
        "type": "step",
        "id": "s7",
        "item": {
          "en": "7. Elevator (control stick)",
          "ru": "7. Руль высоты (РУС)"
        },
        "action": {
          "en": "PULL CAREFULLY",
          "ru": "ОСТОРОЖНО ВЗЯТЬ НА СЕБЯ"
        }
      },
      {
        "type": "step",
        "id": "s8",
        "item": {
          "en": "8. Pull-out",
          "ru": "8. Вывод из снижения"
        },
        "action": {
          "en": "RETURN TO LEVEL FLIGHT — DO NOT EXCEED VNE = 172 KIAS",
          "ru": "ВЫВЕСТИ В ГП — НЕ ПРЕВЫШАТЬ VNE = 172 УЗЛА"
        }
      }
    ]
  },
  {
    "id": "em-391",
    "code": "3.9.1",
    "cas": null,
    "group": "OTHER EMERGENCIES",
    "title": {
      "en": "UNINTENTIONAL FLIGHT INTO ICING CONDITIONS",
      "ru": "НЕПРЕДНАМЕРЕННОЕ ПОПАДАНИЕ В ОБЛЕДЕНЕНИЕ"
    },
    "subtitle": {
      "en": "DA40 NG is prohibited from flights into known or forecast icing.",
      "ru": "Полёты в условиях фактического или прогнозируемого обледенения запрещены."
    },
    "blocks": [
      {
        "type": "step",
        "id": "s1",
        "item": {
          "en": "1. Icing area",
          "ru": "1. Зона обледенения"
        },
        "action": {
          "en": "LEAVE IMMEDIATELY (CHANGE ALTITUDE OR TURN BACK)",
          "ru": "ПОКИНУТЬ (ИЗМЕНИТЬ ВЫСОТУ ИЛИ РАЗВЕРНУТЬСЯ)"
        }
      },
      {
        "type": "step",
        "id": "s2",
        "item": {
          "en": "2. Pitot heating",
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
          "en": "3. Cabin heat",
          "ru": "3. Обогрев кабины"
        },
        "action": {
          "en": "ON",
          "ru": "ВКЛ (ON)"
        }
      },
      {
        "type": "step",
        "id": "s4",
        "item": {
          "en": "4. Cabin air",
          "ru": "4. Обдув кабины"
        },
        "action": {
          "en": "DEFROST",
          "ru": "ОТТАИВАНИЕ (DEFROST)"
        }
      },
      {
        "type": "step",
        "id": "s5",
        "item": {
          "en": "5. POWER lever",
          "ru": "5. РУД"
        },
        "action": {
          "en": "INCREASE & VARY POWER PERIODICALLY (PROP ANTI-ICE)",
          "ru": "УВЕЛИЧИТЬ И ПЕРИОДИЧЕСКИ МЕНЯТЬ РЕЖИМ"
        }
      },
      {
        "type": "step",
        "id": "s6",
        "item": {
          "en": "6. Alternate air",
          "ru": "6. Резервный воздух"
        },
        "action": {
          "en": "OPEN",
          "ru": "ОТКРЫТЬ (OPEN)"
        }
      },
      {
        "type": "step",
        "id": "s7",
        "item": {
          "en": "7. Emergency windows",
          "ru": "7. Аварийные форточки"
        },
        "action": {
          "en": "OPEN IF REQUIRED",
          "ru": "ОТКРЫТЬ ПРИ НЕОБХОДИМОСТИ"
        }
      },
      {
        "type": "step",
        "id": "s8",
        "item": {
          "en": "8. ATC",
          "ru": "8. Диспетчер УВД"
        },
        "action": {
          "en": "ADVISE IF EMERGENCY EXPECTED",
          "ru": "ИЗВЕСТИТЬ ПРИ УГРОЗЕ АВАРИЙНОЙ СИТУАЦИИ"
        }
      },
      {
        "type": "caution",
        "text": {
          "en": "Ice build-up increases stalling speed. If Pitot heating fails, expect loss of airspeed indication.",
          "ru": "Обледенение увеличивает скорость сваливания. При отказе обогрева ППД ожидайте отказ указателя скорости."
        }
      }
    ]
  },
  {
    "id": "em-392",
    "code": "3.9.2",
    "cas": null,
    "group": "OTHER EMERGENCIES",
    "title": {
      "en": "SUSPICION OF CARBON MONOXIDE (CO) IN CABIN",
      "ru": "ПОДОЗРЕНИЕ НА ОКИСЬ УГЛЕРОДА (CO) В КАБИНЕ"
    },
    "subtitle": {
      "en": "Exhaust-like odor in cabin indicates possible CO contamination.",
      "ru": "Запах выхлопных газов в кабине указывает на возможную утечку CO."
    },
    "blocks": [
      {
        "type": "step",
        "id": "s1",
        "item": {
          "en": "1. Cabin heat",
          "ru": "1. Обогрев кабины"
        },
        "action": {
          "en": "OFF",
          "ru": "ВЫКЛ (OFF)"
        }
      },
      {
        "type": "step",
        "id": "s2",
        "item": {
          "en": "2. Ventilation",
          "ru": "2. Вентиляция"
        },
        "action": {
          "en": "OPEN",
          "ru": "ОТКРЫТЬ"
        }
      },
      {
        "type": "step",
        "id": "s3",
        "item": {
          "en": "3. Emergency windows",
          "ru": "3. Аварийные форточки"
        },
        "action": {
          "en": "OPEN",
          "ru": "ОТКРЫТЬ"
        }
      },
      {
        "type": "step",
        "id": "s4",
        "item": {
          "en": "4. Forward canopy",
          "ru": "4. Передняя часть фонаря"
        },
        "action": {
          "en": "UNLATCH, PUSH UP & LOCK IN COOLING GAP (MAX 117 KIAS)",
          "ru": "СНЯТЬ С ЗАМКОВ, ЗАФИКСИРОВАТЬ В «ЗАЗОР ДЛЯ ОХЛАЖДЕНИЯ» (≤ 117 УЗЛ.)"
        }
      },
      {
        "type": "caution",
        "text": {
          "en": "Maximum demonstrated airspeed for opening the front canopy in flight is 117 KIAS.",
          "ru": "Максимальная продемонстрированная скорость открытия фонаря в полёте — 117 узлов (KIAS)."
        }
      }
    ]
  },
  {
    "id": "em-393",
    "code": "3.9.3",
    "cas": "DOOR OPEN",
    "group": "G1000 WARNINGS",
    "title": {
      "en": "DOOR OPEN — UNLOCKED DOORS",
      "ru": "DOOR OPEN — ДВЕРИ НЕ ЗАПЕРТЫ"
    },
    "subtitle": {
      "en": "Front canopy and/or rear passenger door not closed and locked.",
      "ru": "Фонарь кабины и/или задняя дверь не закрыты или не на замке."
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
          "en": "REDUCE IMMEDIATELY",
          "ru": "НЕМЕДЛЕННО УМЕНЬШИТЬ"
        }
      },
      {
        "type": "step",
        "id": "s2",
        "item": {
          "en": "2. Canopy",
          "ru": "2. Фонарь"
        },
        "action": {
          "en": "CHECK VISUALLY IF CLOSED",
          "ru": "ВИЗУАЛЬНО ПРОВЕРИТЬ"
        }
      },
      {
        "type": "step",
        "id": "s3",
        "item": {
          "en": "3. Rear door",
          "ru": "3. Задняя дверь"
        },
        "action": {
          "en": "CHECK VISUALLY IF CLOSED",
          "ru": "ВИЗУАЛЬНО ПРОВЕРИТЬ"
        }
      },
      {
        "type": "branch",
        "id": "b1",
        "prompt": {
          "en": "WHICH DOOR IS UNLOCKED?",
          "ru": "КАКАЯ ДВЕРЬ НЕ ЗАПЕРТА?"
        },
        "options": [
          {
            "id": "canopy",
            "label": {
              "en": "(a) CANOPY UNLOCKED",
              "ru": "(a) НЕ ЗАПЕРТ ФОНАРЬ"
            },
            "badge": "AMBER",
            "items": [
              {
                "type": "step",
                "id": "c4",
                "item": {
                  "en": "4. Airspeed",
                  "ru": "4. Воздушная скорость"
                },
                "action": {
                  "en": "BELOW 140 KIAS",
                  "ru": "МЕНЕЕ 140 УЗЛОВ (KIAS)"
                }
              },
              {
                "type": "step",
                "id": "c5",
                "item": {
                  "en": "5. Landing",
                  "ru": "5. Посадка"
                },
                "action": {
                  "en": "LAND AT NEXT SUITABLE AIRFIELD",
                  "ru": "ПОСАДКА НА БЛИЖАЙШЕМ ПРИГОДНОМ АЭРОДРОМЕ"
                }
              }
            ]
          },
          {
            "id": "rear",
            "label": {
              "en": "(b) REAR DOOR UNLOCKED",
              "ru": "(b) НЕ ЗАПЕРТА ЗАДНЯЯ ДВЕРЬ"
            },
            "badge": "RED",
            "items": [
              {
                "type": "step",
                "id": "r4",
                "item": {
                  "en": "4. Airspeed",
                  "ru": "4. Воздушная скорость"
                },
                "action": {
                  "en": "BELOW 140 KIAS",
                  "ru": "МЕНЕЕ 140 УЗЛОВ (KIAS)"
                }
              },
              {
                "type": "step",
                "id": "r5",
                "item": {
                  "en": "5. Landing",
                  "ru": "5. Посадка"
                },
                "action": {
                  "en": "LAND AT NEXT SUITABLE AIRFIELD",
                  "ru": "ПОСАДКА НА БЛИЖАЙШЕМ ПРИГОДНОМ АЭРОДРОМЕ"
                }
              },
              {
                "type": "warning",
                "text": {
                  "en": "DO NOT try to lock the rear door in flight! Safety latch may disengage, opening the door and usually causing door separation.",
                  "ru": "НЕ ПЫТАЙТЕСЬ ЗАПЕРЕТЬ ЗАДНЮЮ ДВЕРЬ В ПОЛЁТЕ! Предохранительная защёлка может распахнуться, что обычно приводит к отрыву двери."
                }
              },
              {
                "type": "note",
                "text": {
                  "en": "If the rear door has been lost, the airplane can still be safely flown to the next suitable airfield.",
                  "ru": "При потере задней двери самолёт можно безопасно довести до ближайшего пригодного аэродрома."
                }
              }
            ]
          }
        ]
      }
    ]
  }
];
