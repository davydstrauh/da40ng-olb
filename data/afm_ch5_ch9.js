window.AFM_CH5_CH9 = [
  {
    "id": "ch5",
    "code": "CH 5",
    "title": {
      "en": "CHAPTER 5 — PERFORMANCE",
      "ru": "РАЗДЕЛ 5 — ЛЁТНО-ТЕХНИЧЕСКИЕ ХАРАКТЕРИСТИКИ"
    },
    "status": "NON-APPROVED",
    "units": [
      {
        "id": "du-5-1",
        "code": "5.1 – 5.3.2",
        "title": {
          "en": "INTRODUCTION, AIRSPEED CALIBRATION & FUEL FLOW",
          "ru": "ВВЕДЕНИЕ, ПОПРАВКИ СКОРОСТИ И РАСХОД ТОПЛИВА"
        },
        "rev": "REV 4 — 31-DEC-2024",
        "blocks": [
          {
            "type": "p",
            "en": "Performance tables and diagrams are based on ISA sea level (15°C / 1013.25 hPa). Use linear interpolation between temperatures, altitudes, and weights. For weights below 1100 kg use 1100 kg data; for OAT lower than table use lowest OAT shown.",
            "ru": "Таблицы и графики приведены к условиям МСА (+15°C / 1013,25 гПа). Для промежуточных значений температуры, высоты и массы используйте линейную интерполяцию. Для массы менее 1100 кг используйте данные для 1100 кг."
          },
          {
            "type": "h3",
            "en": "5.3.1 Airspeed Indicator Calibration (KIAS → KCAS)",
            "ru": "5.3.1 Тарировка указателя воздушной скорости (KIAS → KCAS)"
          },
          {
            "type": "table",
            "headers": {
              "en": [
                "KIAS",
                "Flaps UP",
                "Flaps T/O",
                "Flaps LDG"
              ],
              "ru": [
                "KIAS",
                "Закрылки UP",
                "Закрылки T/O",
                "Закрылки LDG"
              ]
            },
            "rows": [
              [
                "65",
                "—",
                "64",
                "64"
              ],
              [
                "70",
                "70",
                "69",
                "69"
              ],
              [
                "75",
                "75",
                "74",
                "74"
              ],
              [
                "80",
                "79",
                "79",
                "78"
              ],
              [
                "85",
                "84",
                "84",
                "83"
              ],
              [
                "90",
                "89",
                "89",
                "89"
              ],
              [
                "95",
                "93",
                "94",
                "94"
              ],
              [
                "100",
                "98",
                "99",
                "100"
              ],
              [
                "105",
                "103",
                "104",
                "—"
              ],
              [
                "110",
                "108",
                "109",
                "—"
              ],
              [
                "120",
                "118",
                "—",
                "—"
              ],
              [
                "130",
                "128",
                "—",
                "—"
              ],
              [
                "140",
                "138",
                "—",
                "—"
              ],
              [
                "150",
                "149",
                "—",
                "—"
              ],
              [
                "160",
                "159",
                "—",
                "—"
              ],
              [
                "170",
                "170",
                "—",
                "—"
              ]
            ]
          },
          {
            "type": "h3",
            "en": "5.3.2 Fuel Flow Schedule",
            "ru": "5.3.2 Расход топлива по режимам нагрузки"
          },
          {
            "type": "note",
            "en": "G1000 MFD FUEL CALC does not use fuel quantity indicators — endurance/range on MFD is advisory only.",
            "ru": "Расчёт топлива на MFD G1000 не использует датчики уровня — данные о дальности/времени носят справочный характер."
          },
          {
            "type": "table",
            "headers": {
              "en": [
                "Power [%]",
                "US gal / h",
                "Liter / h"
              ],
              "ru": [
                "Нагрузка [%]",
                "Амер. галл/ч",
                "Литр/ч"
              ]
            },
            "rows": [
              [
                "30%",
                "2.9",
                "11.0"
              ],
              [
                "40%",
                "3.7",
                "14.0"
              ],
              [
                "45%",
                "4.0",
                "15.5"
              ],
              [
                "50%",
                "4.4",
                "16.5"
              ],
              [
                "60%",
                "5.1",
                "19.5"
              ],
              [
                "65%",
                "5.6",
                "21.5"
              ],
              [
                "70%",
                "6.1",
                "23.0"
              ],
              [
                "75% (Rec. Cruise)",
                "6.6 [GREEN]",
                "25.0 [GREEN]"
              ],
              [
                "80%",
                "7.1",
                "27.0"
              ],
              [
                "85%",
                "7.6",
                "28.5"
              ],
              [
                "90%",
                "8.1",
                "30.5"
              ],
              [
                "92% (MCP)",
                "8.3 [AMBER]",
                "31.5 [AMBER]"
              ],
              [
                "100% (Max T/O)",
                "9.4 [RED]",
                "35.5 [RED]"
              ]
            ]
          }
        ]
      },
      {
        "id": "du-5-3",
        "code": "5.3.3 – 5.3.6",
        "title": {
          "en": "DENSITY ALTITUDE, ISA, STALLING SPEEDS & WIND COMPONENTS",
          "ru": "ВЫСОТА ПО ПЛОТНОСТИ, МСА, СКОРОСТИ СВАЛИВАНИЯ И ВЕТЕР"
        },
        "rev": "REV 4 — 31-DEC-2024",
        "blocks": [
          {
            "type": "figure",
            "src": "assets/fig_density_alt.png",
            "caption": {
              "en": "5.3.3 PRESSURE ALTITUDE — DENSITY ALTITUDE (Tap to zoom)",
              "ru": "5.3.3 БАРОМЕТРИЧЕСКАЯ ВЫСОТА — ВЫСОТА ПО ПЛОТНОСТИ (нажмите для увеличения)"
            }
          },
          {
            "type": "figure",
            "src": "assets/fig_isa.png",
            "caption": {
              "en": "5.3.4 INTERNATIONAL STANDARD ATMOSPHERE (Tap to zoom)",
              "ru": "5.3.4 МЕЖДУНАРОДНАЯ СТАНДАРТНАЯ АТМОСФЕРА — МСА (нажмите для увеличения)"
            }
          },
          {
            "type": "h3",
            "en": "5.3.5 Stalling Speeds (Most Fwd CG, Power Off — KIAS / KCAS)",
            "ru": "5.3.5 Скорости сваливания (предельно передняя ЦТ, МГ — KIAS / KCAS)"
          },
          {
            "type": "table",
            "headers": {
              "en": [
                "Mass / Flaps",
                "0° Bank",
                "30° Bank",
                "45° Bank",
                "60° Bank"
              ],
              "ru": [
                "Масса / Закрылки",
                "Крен 0°",
                "Крен 30°",
                "Крен 45°",
                "Крен 60°"
              ]
            },
            "rows": [
              [
                "1310 kg — UP",
                "66 / 63",
                "68 / 68",
                "74 / 75",
                "88 / 89"
              ],
              [
                "1310 kg — T/O",
                "62 / 59",
                "65 / 63",
                "71 / 70",
                "84 / 83"
              ],
              [
                "1310 kg — LDG",
                "60 / 58",
                "63 / 62",
                "69 / 69",
                "82 / 82"
              ],
              [
                "1200 kg — UP",
                "64 / 61",
                "67 / 66",
                "73 / 73",
                "86 / 87"
              ],
              [
                "1200 kg — T/O",
                "60 / 57",
                "64 / 62",
                "69 / 68",
                "82 / 81"
              ],
              [
                "1200 kg — LDG",
                "59 / 56",
                "62 / 61",
                "68 / 67",
                "81 / 80"
              ],
              [
                "1100 kg — UP",
                "61 / 59",
                "63 / 64",
                "70 / 71",
                "83 / 84"
              ],
              [
                "1100 kg — T/O",
                "56 / 55",
                "60 / 60",
                "66 / 66",
                "79 / 78"
              ],
              [
                "1100 kg — LDG",
                "57 / 54",
                "59 / 58",
                "65 / 65",
                "77 / 77"
              ],
              [
                "1000 kg — UP",
                "58 / 56",
                "59 / 60",
                "64 / 66",
                "76 / 79"
              ],
              [
                "1000 kg — T/O",
                "54 / 53",
                "58 / 57",
                "63 / 63",
                "75 / 74"
              ],
              [
                "1000 kg — LDG",
                "55 / 52",
                "56 / 55",
                "61 / 61",
                "72 / 73"
              ]
            ]
          },
          {
            "type": "figure",
            "src": "assets/fig_wind.png",
            "caption": {
              "en": "5.3.6 WIND COMPONENTS — Max Demonstrated Crosswind: 25 kt (Tap to zoom)",
              "ru": "5.3.6 СОСТАВЛЯЮЩИЕ ВЕТРА — Макс. боковой ветер: 25 узл. (нажмите для увеличения)"
            }
          }
        ]
      },
      {
        "id": "du-5-7",
        "code": "5.3.7 – 5.3.10",
        "title": {
          "en": "TAKE-OFF DISTANCE, CLIMB & TIME/FUEL TO CLIMB",
          "ru": "ВЗЛЁТНАЯ ДИСТАНЦИЯ, НАБОР ВЫСОТЫ, ВРЕМЯ И ТОПЛИВО"
        },
        "rev": "REV 4 — 31-DEC-2024",
        "blocks": [
          {
            "type": "h3",
            "en": "5.3.7 Take-Off Distance Correction Factors (MAX Power, Flaps T/O, Dry Paved Level)",
            "ru": "5.3.7 Поправки к взлётной дистанции (MAX, закрылки T/O, сухая ровная ИВПП)"
          },
          {
            "type": "kv",
            "rows": [
              {
                "k": {
                  "en": "Headwind / Tailwind",
                  "ru": "Встречный / Попутный ветер"
                },
                "v": {
                  "en": "Headwind: -10% per 12 kt | Tailwind: +10% per 2 kt",
                  "ru": "Встречный: -10% на каждые 12 узл. | Попутный: +10% на каждые 2 узл."
                }
              },
              {
                "k": {
                  "en": "Grass Runway",
                  "ru": "Грунтовая ВПП (трава)"
                },
                "v": {
                  "en": "≤5 cm: +10% roll | 5–10 cm: +30% | 25 cm: +45% | >25 cm: DO NOT ATTEMPT [RED]",
                  "ru": "≤5 см: +10% разбега | 5–10 см: +30% | 25 см: +45% | >25 см: ВЗЛЁТ ЗАПРЕЩЁН [RED]"
                }
              },
              {
                "k": {
                  "en": "Wet Grass / Soft Ground / Slope",
                  "ru": "Мокрая трава / Мягкий грунт / Уклон"
                },
                "v": {
                  "en": "Wet grass: +20% | Soft ground: +50% | Uphill 1%: +15% ground roll",
                  "ru": "Мокрая трава: +20% | Мягкий грунт: +50% | Подъём 1%: +15% разбега"
                }
              },
              {
                "k": {
                  "en": "Without Wheel Fairings",
                  "ru": "Без обтекателей колёс"
                },
                "v": {
                  "en": "+20 m ground roll | +30 m over 50 ft obstacle",
                  "ru": "+20 м разбег | +30 м взлётная дистанция (15 м)"
                }
              }
            ]
          },
          {
            "type": "h3",
            "en": "Take-Off Distance — 1310 kg (VR 67 / V50 72) & 1280 kg [meters]",
            "ru": "Взлётная дистанция — 1310 кг (VR 67 / V50 72) и 1280 кг [метры]"
          },
          {
            "type": "table",
            "headers": {
              "en": [
                "Mass / PA [ft]",
                "Dist",
                "0°C",
                "10°C",
                "20°C",
                "30°C",
                "40°C",
                "50°C",
                "ISA"
              ],
              "ru": [
                "Масса / PA [фт]",
                "Дист.",
                "0°C",
                "10°C",
                "20°C",
                "30°C",
                "40°C",
                "50°C",
                "ISA"
              ]
            },
            "rows": [
              [
                "1310 kg SL",
                "Roll / 50ft",
                "365 / 550",
                "385 / 580",
                "410 / 610",
                "430 / 640",
                "460 / 680",
                "495 / 720",
                "397 / 590"
              ],
              [
                "1310 kg 2000",
                "Roll / 50ft",
                "415 / 610",
                "440 / 640",
                "465 / 680",
                "500 / 730",
                "540 / 780",
                "575 / 830",
                "439 / 646"
              ],
              [
                "1310 kg 4000",
                "Roll / 50ft",
                "470 / 690",
                "500 / 720",
                "540 / 780",
                "590 / 840",
                "630 / 900",
                "680 / 960",
                "490 / 708"
              ],
              [
                "1310 kg 6000",
                "Roll / 50ft",
                "540 / 770",
                "585 / 830",
                "640 / 900",
                "700 / 980",
                "750 / 1040",
                "—",
                "549 / 783"
              ],
              [
                "1280 kg SL",
                "Roll / 50ft",
                "365 / 540",
                "385 / 570",
                "405 / 600",
                "425 / 630",
                "460 / 670",
                "490 / 710",
                "391 / 581"
              ],
              [
                "1280 kg 2000",
                "Roll / 50ft",
                "410 / 610",
                "435 / 640",
                "460 / 670",
                "495 / 720",
                "535 / 770",
                "570 / 820",
                "436 / 636"
              ],
              [
                "1200 kg SL",
                "Roll / 50ft",
                "325 / 490",
                "345 / 520",
                "365 / 540",
                "385 / 570",
                "410 / 610",
                "440 / 640",
                "352 / 524"
              ],
              [
                "1100 kg SL",
                "Roll / 50ft",
                "280 / 430",
                "295 / 450",
                "310 / 470",
                "330 / 490",
                "355 / 530",
                "380 / 560",
                "303 / 457"
              ]
            ]
          },
          {
            "type": "h3",
            "en": "5.3.8–5.3.9 Climb Performance (ISA, 92% / 2100 RPM) [ft/min]",
            "ru": "5.3.8–5.3.9 Скороподъёмность (МСА, 92% / 2100 об/мин) [фт/мин]"
          },
          {
            "type": "table",
            "headers": {
              "en": [
                "PA [ft]",
                "T/O Climb 1310 kg (72 kt)",
                "T/O Climb 1280 kg",
                "Cruise Climb 1310 kg (88 kt)",
                "Cruise Climb 1200 kg"
              ],
              "ru": [
                "PA [фт]",
                "Взл. набор 1310 кг (72 узл.)",
                "Взл. набор 1280 кг",
                "Крейс. набор 1310 кг (88 узл.)",
                "Крейс. набор 1200 кг"
              ]
            },
            "rows": [
              [
                "SL",
                "629 fpm",
                "643 fpm",
                "651 fpm",
                "739 fpm"
              ],
              [
                "2000",
                "613 fpm",
                "627 fpm",
                "644 fpm",
                "732 fpm"
              ],
              [
                "4000",
                "597 fpm",
                "611 fpm",
                "633 fpm",
                "721 fpm"
              ],
              [
                "6000",
                "580 fpm",
                "593 fpm",
                "621 fpm",
                "709 fpm"
              ],
              [
                "8000",
                "557 fpm",
                "570 fpm",
                "609 fpm",
                "697 fpm"
              ],
              [
                "10000",
                "533 fpm",
                "545 fpm",
                "596 fpm",
                "684 fpm"
              ],
              [
                "14000",
                "492 fpm",
                "503 fpm",
                "568 fpm",
                "655 fpm"
              ],
              [
                "16400",
                "471 fpm",
                "482 fpm",
                "546 fpm",
                "632 fpm"
              ]
            ]
          },
          {
            "type": "note",
            "en": "Without wheel fairings: Take-Off Climb -20 ft/min, Cruise Climb -40 ft/min. At 1310 kg 100% power MSL ISA: 714 ft/min (3.6 m/s).",
            "ru": "Без обтекателей колёс: взлётный набор -20 фт/мин, крейсерский набор -40 фт/мин. При 1310 кг 100% MSL МСА: 714 фт/мин (3,6 м/с)."
          }
        ]
      },
      {
        "id": "du-5-11",
        "code": "5.3.11 – 5.3.16",
        "title": {
          "en": "CRUISE, LANDING DISTANCES, GO-AROUND, GLIDE & NOISE",
          "ru": "КРЕЙСЕРСКИЙ ПОЛЁТ, ПОСАДКА, УХОД НА 2-Й КРУГ, ПЛАНИРОВАНИЕ И ШУМ"
        },
        "rev": "REV 4 — 31-DEC-2024",
        "blocks": [
          {
            "type": "h3",
            "en": "5.3.11 Cruise Performance (Rev. 4 — 1310 kg, Flaps UP, ISA)",
            "ru": "5.3.11 Крейсерский полёт (Ред. 4 — 1310 кг, закрылки UP, МСА)"
          },
          {
            "type": "table",
            "headers": {
              "en": [
                "PA [ft]",
                "92% (8.3 gal/h)",
                "75% (6.6 gal/h)",
                "60% (5.1 gal/h)",
                "45% (4.0 gal/h)"
              ],
              "ru": [
                "PA [фт]",
                "92% (8,3 галл/ч)",
                "75% (6,6 галл/ч)",
                "60% (5,1 галл/ч)",
                "45% (4,0 галл/ч)"
              ]
            },
            "rows": [
              [
                "2000",
                "136 KTAS",
                "125 KTAS",
                "113 KTAS",
                "96 KTAS"
              ],
              [
                "4000",
                "138 KTAS",
                "127 KTAS",
                "114 KTAS",
                "97 KTAS"
              ],
              [
                "6000",
                "141 KTAS",
                "129 KTAS",
                "116 KTAS",
                "98 KTAS"
              ],
              [
                "8000",
                "143 KTAS",
                "131 KTAS",
                "118 KTAS",
                "99 KTAS"
              ],
              [
                "10000",
                "146 KTAS",
                "134 KTAS",
                "120 KTAS",
                "100 KTAS"
              ],
              [
                "12000",
                "149 KTAS",
                "136 KTAS",
                "122 KTAS",
                "100 KTAS"
              ],
              [
                "14000",
                "151 KTAS (8.4)",
                "138 KTAS",
                "124 KTAS",
                "101 KTAS"
              ],
              [
                "16000",
                "154 KTAS (8.4)",
                "141 KTAS",
                "126 KTAS",
                "111 KTAS (50%)"
              ]
            ]
          },
          {
            "type": "note",
            "en": "Without wheel fairings: expect 4% TAS reduction at all power settings.",
            "ru": "Без обтекателей колёс: уменьшение истинной скорости (TAS) на 4% на всех режимах."
          },
          {
            "type": "h3",
            "en": "5.3.12–5.3.13 Landing Distances (Dry Paved Level, IDLE) [meters]",
            "ru": "5.3.12–5.3.13 Посадочные дистанции (сухая ИВПП, МГ) [метры]"
          },
          {
            "type": "kv",
            "rows": [
              {
                "k": {
                  "en": "Wind & Surface Factors",
                  "ru": "Поправки на ветер и покрытие"
                },
                "v": {
                  "en": "Headwind: -10%/20 kt | Tailwind: +10%/3 kt | Wet paved: +15% | Grass ≤5cm: +30% roll | >5cm: +45% | Wet/soft: +15% | Downhill 1%: +10%",
                  "ru": "Встречный: -10%/20 узл. | Попутный: +10%/3 узл. | Мокрая ИВПП: +15% | Трава ≤5см: +30% | >5см: +45% | Мокрая/мягкая: +15% | Спуск 1%: +10%"
                }
              }
            ]
          },
          {
            "type": "table",
            "headers": {
              "en": [
                "Config / PA [ft]",
                "Dist",
                "0°C",
                "10°C",
                "20°C",
                "30°C",
                "40°C",
                "ISA"
              ],
              "ru": [
                "Конфиг. / PA [фт]",
                "Дист.",
                "0°C",
                "10°C",
                "20°C",
                "30°C",
                "40°C",
                "ISA"
              ]
            },
            "rows": [
              [
                "LDG 1310 kg SL (77 kt)",
                "Roll / 50ft",
                "305 / 620",
                "315 / 650",
                "325 / 670",
                "335 / 680",
                "355 / 720",
                "318 / 650"
              ],
              [
                "LDG 1280 kg SL (77 kt)",
                "Roll / 50ft",
                "295 / 610",
                "305 / 630",
                "320 / 650",
                "330 / 670",
                "345 / 710",
                "310 / 639"
              ],
              [
                "LDG 1200 kg SL (76 kt)",
                "Roll / 50ft",
                "280 / 600",
                "290 / 620",
                "300 / 640",
                "310 / 660",
                "325 / 690",
                "293 / 626"
              ],
              [
                "LDG 1100 kg SL (72 kt)",
                "Roll / 50ft",
                "255 / 590",
                "265 / 610",
                "275 / 630",
                "285 / 640",
                "300 / 680",
                "270 / 612"
              ],
              [
                "ABNORMAL T/O or UP 1310 kg SL",
                "Roll / 50ft",
                "355 / 790",
                "365 / 810",
                "380 / 840",
                "390 / 870",
                "415 / 920",
                "372 / 822"
              ],
              [
                "ABNORMAL T/O or UP 1280 kg SL",
                "Roll / 50ft",
                "350 / 770",
                "360 / 790",
                "370 / 820",
                "385 / 850",
                "410 / 900",
                "364 / 803"
              ]
            ]
          },
          {
            "type": "h3",
            "en": "5.3.14–5.3.16 Go-Around, Glide & Noise Data",
            "ru": "5.3.14–5.3.16 Уход на второй круг, планирование и шум"
          },
          {
            "type": "kv",
            "rows": [
              {
                "k": {
                  "en": "Go-Around Climb (Flaps LDG, MAX, SL ISA)",
                  "ru": "Уход на 2-й круг (LDG, MAX, SL МСА)"
                },
                "v": {
                  "en": "1310 kg: 388 fpm (2.9°) | 1280 kg: 400 fpm (3.0°) | 1200 kg: 488 fpm | 1100 kg: 607 fpm",
                  "ru": "1310 кг: 388 фт/мин (2,9°) | 1280 кг: 400 фт/мин (3,0°) | 1200 кг: 488 | 1100 кг: 607 фт/мин"
                }
              },
              {
                "k": {
                  "en": "Glide (Flaps UP, 88 KIAS, Windmilling)",
                  "ru": "Планирование (UP, 88 узл., авторотация)"
                },
                "v": {
                  "en": "1 : 9.7 → 1.59 NM (2.94 km) / 1000 ft  |  No fairings: 1 : 9.4 → 1.54 NM (2.85 km) / 1000 ft",
                  "ru": "1 : 9,7 → 1,59 NM (2,94 км) на 1000 фт  |  Без обтекателей: 1 : 9,4 → 1,54 NM (2,85 км)"
                }
              },
              {
                "k": {
                  "en": "Approved Noise (ICAO Annex 16 Ch. X)",
                  "ru": "Уровень шума (ICAO Прил. 16 Гл. X)"
                },
                "v": {
                  "en": "1280 kg: 74.5 dB(A) | With muffler: 71.5 dB(A) | 1310 kg: 71.4 dB(A)",
                  "ru": "1280 кг: 74,5 дБ(А) | С глушителем: 71,5 дБ(А) | 1310 кг: 71,4 дБ(А)"
                }
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "ch6",
    "code": "CH 6",
    "title": {
      "en": "CHAPTER 6 — MASS & BALANCE / EQUIPMENT",
      "ru": "РАЗДЕЛ 6 — МАССА, ЦЕНТРОВКА И ОБОРУДОВАНИЕ"
    },
    "status": "NON-APPROVED",
    "units": [
      {
        "id": "du-6-1",
        "code": "6.1 – 6.4.3",
        "title": {
          "en": "DATUM PLANE, MOMENT ARMS & LOADING CALCULATION",
          "ru": "ПЛОСКОСТЬ ОТСЧЁТА, ПЛЕЧИ МОМЕНТОВ И РАСЧЁТ ЗАГРУЗКИ"
        },
        "rev": "REV 4 — 31-DEC-2024",
        "blocks": [
          {
            "type": "p",
            "en": "The Datum Plane (DP) is located 2.194 m (86.38 in) forward of the most forward point of the stub wing root rib. Empty mass includes brake fluid, coolant, gearbox oil, engine oil (7.0 L), and unusable fuel (2.0 US gal / 7.6 L).",
            "ru": "Плоскость отсчёта (ПО) расположена на 2,194 м (86,38 дюйма) спереди от передней точки корневой нервюры крыла. Масса пустого самолёта включает тормозную и охлаждающую жидкости, масло редуктора, масло двигателя (7,0 л) и невырабатываемый остаток топлива (2,0 галл / 7,6 л)."
          },
          {
            "type": "h3",
            "en": "6.4.1 Moment Arms (Aft of Datum Plane)",
            "ru": "6.4.1 Плечи моментов (сзади от плоскости отсчёта)"
          },
          {
            "type": "table",
            "headers": {
              "en": [
                "Station / Item",
                "Lever Arm [m]",
                "Lever Arm [in]",
                "Limit / Notes"
              ],
              "ru": [
                "Элемент загрузки",
                "Плечо [м]",
                "Плечо [дюйм]",
                "Ограничение / Примечание"
              ]
            },
            "rows": [
              [
                "Front Seats / Передние кресла",
                "2.30 m",
                "90.6 in",
                "—"
              ],
              [
                "Wing Tanks (Std & LR) / Топливо",
                "2.63 m",
                "103.5 in",
                "0.84 kg/L (7.01 lb/US gal)"
              ],
              [
                "Rear Seats / Задние кресла",
                "3.25 m",
                "128.0 in",
                "—"
              ],
              [
                "Standard Baggage / Стандартный багажник",
                "3.65 m",
                "143.7 in",
                "Max 30 kg (66 lb)"
              ],
              [
                "Fwd Extended Baggage (OÄM 40-164)",
                "3.89 m",
                "153.1 in",
                "Max 45 kg (100 lb)"
              ],
              [
                "Short Baggage Extension (OÄM 40-331)",
                "3.97 m",
                "156.3 in",
                "Max 15 kg (33 lb)"
              ],
              [
                "Baggage Tube / Удлинённый отсек",
                "4.32 m",
                "170.1 in",
                "Max 5 kg (11 lb)"
              ],
              [
                "Aft Extended Baggage (OÄM 40-164)",
                "4.54 m",
                "178.7 in",
                "Max 18 kg (Combined ≤ 45 kg)"
              ]
            ]
          },
          {
            "type": "figure",
            "src": "assets/fig_loading.png",
            "caption": {
              "en": "6.4.2 LOADING DIAGRAM — Graphical Moment Determination (Tap to zoom)",
              "ru": "6.4.2 ГРАФИК ЗАГРУЗКИ — Графическое определение моментов (нажмите для увеличения)"
            }
          }
        ]
      },
      {
        "id": "du-6-4",
        "code": "6.4.4 – 6.5",
        "title": {
          "en": "PERMISSIBLE CG & MOMENT ENVELOPES + EQUIPMENT LIST",
          "ru": "ДОПУСТИМЫЕ ДИАПАЗОНЫ ЦТ И МОМЕНТОВ + ПЕРЕЧЕНЬ ОБОРУДОВАНИЯ"
        },
        "rev": "REV 4 — 31-DEC-2024",
        "blocks": [
          {
            "type": "figure",
            "src": "assets/fig_cg_range.png",
            "caption": {
              "en": "6.4.4 PERMISSIBLE CENTER OF GRAVITY RANGE (Tap to zoom)",
              "ru": "6.4.4 ДОПУСТИМЫЙ ДИАПАЗОН ЦЕНТРОВОК (нажмите для увеличения)"
            }
          },
          {
            "type": "figure",
            "src": "assets/fig_moment_range.png",
            "caption": {
              "en": "6.4.5 PERMISSIBLE MOMENT RANGE (Tap to zoom)",
              "ru": "6.4.5 ДОПУСТИМЫЙ ДИАПАЗОН МОМЕНТОВ (нажмите для увеличения)"
            }
          },
          {
            "type": "h3",
            "en": "6.5 Key Approved Equipment Highlights (Rev. 4)",
            "ru": "6.5 Ключевое утверждённое оборудование (Ред. 4)"
          },
          {
            "type": "kv",
            "rows": [
              {
                "k": {
                  "en": "Avionics (G1000 / G1000 NXi)",
                  "ru": "Авионика (G1000 / NXi)"
                },
                "v": {
                  "en": "PFD GDU 1040/1050, MFD GDU 1044/1054, GIA 63W/64W, GRS 77/79 AHRS, GDC 74A/72 ADC, GMU 44/44B, GEA 71/71B, GTX 33/335R/345R",
                  "ru": "PFD GDU 1040/1050, MFD GDU 1044/1054, GIA 63W/64W, GRS 77/79, GDC 74A/72, GMU 44/44B, GEA 71/71B, GTX 33/335R/345R"
                }
              },
              {
                "k": {
                  "en": "Autopilot & Standby",
                  "ru": "Автопилот и резервные приборы"
                },
                "v": {
                  "en": "Garmin GFC 700 (GSA 81 servos), Mid-Continent 4300 Attitude Gyro or MD302 SAM (OÄM 40-1029)",
                  "ru": "Garmin GFC 700 (сервоприводы GSA 81), резервный АГ 4300 или модуль MD302 SAM (OÄM 40-1029)"
                }
              },
              {
                "k": {
                  "en": "Batteries",
                  "ru": "Аккумуляторные батареи"
                },
                "v": {
                  "en": "Main: Concorde RG24-15 (24V) | ECU Backup: 2× Panasonic LC-R127R2P | Emergency: D60-2560-91-00",
                  "ru": "Основная: Concorde RG24-15 (24В) | Резервная ECU: 2× Panasonic LC-R127R2P | Аварийная: D60-2560-91-00"
                }
              },
              {
                "k": {
                  "en": "Safety & Powerplant",
                  "ru": "Безопасность и СУ"
                },
                "v": {
                  "en": "Artex ME406/ELT1000, Amerex 337TS/A620T or Total HAL 1, Fiskars Axe / Egress Hammer, Austro E4-A + 2× Bosch 0-580-054-001 Fuel Pumps",
                  "ru": "Artex ME406/ELT1000, огнетушитель Amerex 337TS/Total HAL 1, топор/молоток, Austro E4-A + 2× Bosch топливных насоса"
                }
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "ch7",
    "code": "CH 7",
    "title": {
      "en": "CHAPTER 7 — AIRPLANE & SYSTEMS DESCRIPTION",
      "ru": "РАЗДЕЛ 7 — ОПИСАНИЕ САМОЛЁТА И ЕГО СИСТЕМ"
    },
    "status": "NON-APPROVED",
    "units": [
      {
        "id": "du-7-1",
        "code": "7.1",
        "title": {
          "en": "INTRODUCTION",
          "ru": "ВВЕДЕНИЕ"
        },
        "rev": "REV 4 (EN) / РЕД. 3 (RU)",
        "bilingualBlocks": {
          "en": [
            {
              "type": "p",
              "text": "Chapter 7 contains a description of the airplane and its systems, together with operating instructions. For details about optional equipment see Chapter 9."
            }
          ],
          "ru": [
            {
              "type": "p",
              "text": "В разделе 7 приводится описание самолета и его систем, а также указания по эксплуатации. Подробная информация о дополнительном оборудовании приведена в разделе 9."
            }
          ]
        }
      },
      {
        "id": "du-7-2",
        "code": "7.2",
        "title": {
          "en": "AIRFRAME",
          "ru": "ПЛАНЕР"
        },
        "rev": "REV 4 (EN) / РЕД. 3 (RU)",
        "bilingualBlocks": {
          "en": [
            {
              "type": "h3",
              "text": "7.2.1 FUSELAGE"
            },
            {
              "type": "p",
              "text": "The GFRP fuselage is of semi monocoque molded construction. The fire protection on the firewall is of a special fire-resistant matting, which is covered on the engine side by stainless steel cladding. The two main bulkheads are GFRP/CFRP items."
            },
            {
              "type": "h3",
              "text": "7.2.2 WINGS"
            },
            {
              "type": "p",
              "text": "The wings have a front and rear spar; each wing has a top shell and a bottom shell - a “fail safe” concept. The wings, as well as the ailerons and flaps, are made of GFRP/CFRP, and are principally of sandwich construction. An aluminum fuel tank is installed in each of the wings."
            },
            {
              "type": "h3",
              "text": "7.2.3 EMPENNAGE"
            },
            {
              "type": "p",
              "text": "The airplane has a T-tail of GFRP semi monocoque construction. Both the stabilizers have twin spars and a skin with no sandwich. The rudder and elevator are of sandwich construction."
            }
          ],
          "ru": [
            {
              "type": "p",
              "text": "Фюзеляж Фюзеляж типа «полумонокок» выполнен из пластмассы, армированной стекловолокном, (стеклопластика) методом литья в форму. Противопожарный защитный слой на противопожарной перегородке состоит из специальных листов, закрытых на стороне двигателя облицовкой из нержавеющей стали. Два главных лонжерона изготовлены из стеклопластика/углепластика."
            },
            {
              "type": "p",
              "text": "Крылья Конструкция крыльев включает в себя передний и задний лонжероны; каждое крыло имеет верхнюю обшивку и нижнюю обшивку (отказобезопасная конструкция); Крылья, а также элероны и закрылки, изготовлены из пластмассы, армированной стекловолокном, (стеклопластика)/углепластика и имеют многослойную конструкцию с наполнителем. В каждом крыле установлен алюминиевый топливный бак."
            },
            {
              "type": "p",
              "text": "Оперение Самолет имеет Т-образное хвостовое оперение конструкции «полумонокок» из стеклопластика. Киль и стабилизатор имеют двойные лонжероны и конструкцию с обшивкой без заполнителя. Руль направления и руль высоты имеют многослойную конструкцию с наполнителем."
            }
          ]
        }
      },
      {
        "id": "du-7-3",
        "code": "7.3",
        "title": {
          "en": "FLIGHT CONTROLS",
          "ru": "СИСТЕМА УПРАВЛЕНИЯ"
        },
        "rev": "REV 4 (EN) / РЕД. 3 (RU)",
        "bilingualBlocks": {
          "en": [
            {
              "type": "p",
              "text": "The ailerons, elevator and wing flaps are operated through control rods, while the rudder is controlled by cables. The flaps are electrically operated. Elevator forces can be balanced by a trim tab on the elevator, which is operated by a Bowden cable."
            },
            {
              "type": "h3",
              "text": "7.3.1 AILERONS"
            },
            {
              "type": "p",
              "text": "Construction: GFRP/CFRP composite sandwich. Hinges: There are 4 hinges, which are hinge pins mounted in an aluminum bracket. They are secured in position by a roll pin. The absence of this roll pin can lead to the loss of the hinge pin and a consequent loss of flight safety."
            },
            {
              "type": "p",
              "text": "Operation: A rod-end bearing is screwed into a steel push rod and locked by means of a jam nut which has locking varnish applied to it. Damage to this varnish can indicate a twisting and thus a change to the adjustment. The connection between the rod-end bearing and the control horn is a bolt, the nut of which is likewise sealed with locking varnish."
            },
            {
              "type": "p",
              "text": "The aluminum control horn is attached to the aileron with 3 screws."
            },
            {
              "type": "h3",
              "text": "7.3.2 FLAPS"
            },
            {
              "type": "p",
              "text": "Construction: GFRP/CFRP composite sandwich. Hinges: There are 6 hinges, which are hinge pins mounted in an aluminum bracket. They are secured in position by a roll pin. The absence of this roll pin can lead to the loss of the hinge pin and a consequent loss of flight safety. Another aluminum fitting is located at the fuselage and is attached to a torsion tube. The torsion tube is located in the fuselage, creating a connection between the left and right flaps."
            },
            {
              "type": "p",
              "text": "Operation: A rod-end bearing is screwed into a steel push rod and locked by means of a jam nut which has locking varnish applied to it. Damage to this varnish can indicate a twisting and thus a change to the adjustment. The connection between the rod-end bearing and the control horn is a bolt, the nut of which is likewise sealed with locking varnish."
            },
            {
              "type": "p",
              "text": "The flap control horn is attached to the flap with 3 screws. The flaps are driven by an electric motor and have 3 settings:"
            },
            {
              "type": "p",
              "text": "- Cruise (UP), totally retracted"
            },
            {
              "type": "p",
              "text": "- Take-off (T/O), and"
            },
            {
              "type": "p",
              "text": "- Landing (LDG). The flaps are operated by means of a 3-position flap selector switch on the instrument panel. The positions of the switch correspond to the positions of the flaps, the cruise position of the switch being at the top. If the switch is moved to another position, the flaps continue to travel automatically until they have reached the position selected on the switch. The UP and LDG positions are additionally protected by a limit switch to guard against over-running the end positions."
            },
            {
              "type": "p",
              "text": "The electrical flap drive has an automatic circuit breaker which can also be operated manually. Flap Position Indicator: The current flap position is indicated by means of three lights beside the flap selector switch."
            },
            {
              "type": "p",
              "text": "When the upper light (green) is illuminated, the flaps are in the cruise position (UP); when the center light (white) is illuminated, the flaps are in the take-off position (T/O); when the lower light (white) is illuminated, the flaps are in the landing position (LDG)."
            },
            {
              "type": "p",
              "text": "When two lights are illuminated simultaneously, the flaps are between the two indicated positions. This is the case only when the flaps are traveling."
            },
            {
              "type": "h3",
              "text": "7.3.3 ELEVATOR"
            },
            {
              "type": "p",
              "text": "Construction: GFRP sandwich. Hinges: 5 hinges. Operation: Steel push-rods; Two of the bellcrank bearings are accessible to visual inspection next to the lower hinge of the rudder. The elevator horn and its bearing, as well as the connection to the push-rod, can be visually inspected at the upper end of the rudder."
            },
            {
              "type": "h3",
              "text": "7.3.4 RUDDER"
            },
            {
              "type": "p",
              "text": "Construction: GFRP sandwich. Hinges: Upper hinge: One bolt. Lower hinge: Bearing bracket including rudder stops, held by 4 screws to the rear web of the vertical stabilizer. The mating part on the rudder is a bracket which is attached to the rudder by 2 bolts. The bolts and nuts are accessible to visual inspection."
            },
            {
              "type": "p",
              "text": "Operation: Steel cables, the eyes of which are connected to the bolts on the bracket."
            },
            {
              "type": "h3",
              "text": "7.3.5 ELEVATOR TRIM"
            },
            {
              "type": "p",
              "text": "The trim control is a black wheel in the center console to the rear of the power lever. To guard against over-rotating, the trim wheel incorporates a friction device. A mark on the wheel shows the take-off (T/O) position."
            },
            {
              "type": "p",
              "text": "Turn wheel to the front = nose down Turn wheel to the rear = nose up"
            },
            {
              "type": "h3",
              "text": "7.3.6 PEDAL ADJUSTMENT"
            },
            {
              "type": "note",
              "text": "The pedals are unlocked by pulling the black T-grip handle, which is located behind the rear attachment, straight back. The pedals may only be adjusted on the ground."
            },
            {
              "type": "h4",
              "text": "(a) Forward Adjustment:"
            },
            {
              "type": "p",
              "text": "Whilst keeping the handle pulled, push the pedals forward with your feet. Release the handle and allow the pedals to lock into place."
            },
            {
              "type": "h4",
              "text": "(b) Rearward Adjustment:"
            },
            {
              "type": "p",
              "text": "Using the unlocking handle, pull the pedals back to the desired position. Release the handle and push the pedals forward with your feet until they lock into place."
            },
            {
              "type": "h4",
              "text": "(c) Electrical Pedal Adjustment (Optional Equipment, OÄM 40-251):"
            },
            {
              "type": "note",
              "text": "The pedals may only be adjusted on the ground. The pedals are adjusted using a rocker switch, located on the floor side panel in the leg room. The related circuit breaker is located above the switch. Forward adjustment To move the pedals forward, depress the front side of the switch. When the pedals are in the correct position, release the switch. Rearward adjustment To move the pedals rearward, depress the rear side of the switch. When the pedals are in the correct position, release the switch."
            },
            {
              "type": "p",
              "text": "Locking Upon release, the switch moves automatically to the “power off” position, locking the pedals in position."
            }
          ],
          "ru": [
            {
              "type": "p",
              "text": "Элероны, руль высоты и закрылки приводятся в действие тягами управления, руль направления — тросами. Управление з акрылками электрическое . Усилия на руле высоты можно балансировать при помощи триммерной поверхности на руле высоты, которая приводится в действие тросом в боуденовской оболочке."
            },
            {
              "type": "p",
              "text": "Элероны Конструктивное исполнение: Многослойная конструкция из композиционных материалов (стеклопластик/углепластик) с наполнителем. Шарниры навески: Имеется 4 узла навески, которые установлены шарнироно на шпильках в алюминиевом кронштейне. Узлы крепятся на месте при помощи цилиндрического штифта."
            },
            {
              "type": "p",
              "text": "Отсутствие цилиндрического штифта может привести к выпадению шпильки и нарушению безопасности полета. Эксплуатация: Торцевой подшипник тяги ввинчен в стальную тягутолкатель и зафиксирован при помощи зажимной гайки, которая, в свою очередь, зафиксирована контровочным лаком. Нарушение лакового слоя может указывать на поворот гайки и нарушение в результате этого регулировки. Торцевой подшипник тяги крепится к кабанчику болтом, гайка которого также зафиксирована контровочным лаком."
            },
            {
              "type": "p",
              "text": "Алюминиевый кабанчик крепится к элерону 3 винтами. Закрылки Конструктивное исполнение: Многослойная конструкция из композиционных материалов (стеклопластик/углепластик) с наполнителем."
            },
            {
              "type": "p",
              "text": "Шарниры навески: Имеется 6 узлов навески, которые установлены на шпильках шарниров в алюминиевом кронштейне. Узлы крепятся на месте при помощи цилиндрического штифта."
            },
            {
              "type": "p",
              "text": "Отсутствие цилиндрического штифта может привести к выпадению шпильки и нарушению безопасности полета. В фюзеляже расположен еще один алюминиевый кронштейн, к которому прикреплен вал трансмиссии, также расположенный в фюзеляже и предназначенный для соединения левого и правого закрылков."
            },
            {
              "type": "p",
              "text": "Эксплуатация: Торцевой подшипник тяги ввинчен в стальную тягутолкатель и зафиксирован при помощи зажимной гайки, которая, в свою очередь, зафиксирована контровочным лаком. Нарушение лакового слоя может указывать на проворот гайки и нарушение в результате этого регулировки. Торцевой подшипник тяги крепится к кабанчику болтом, гайка которого также законтрена лаком."
            },
            {
              "type": "p",
              "text": "Кабанчик закрылка крепится к закрылку 3 болтами. Закрылки приводятся в действие электродвигателем и имеют 3 положения: − крейсерский полет (UP) (полностью убраны) − взлетное положение (T/O) − посадочное положение (LDG)."
            },
            {
              "type": "p",
              "text": "Для управления закрылками используется 3-позиционный переключатель управления закрылками, расположенный на приборной панели. Положения переключателя соответствуют положениям закрылков, при этом положение крейсерского полета располагается вверху. При установке переключателя в другое положение закрылки автоматически приводятся в положение, заданное переключателем управления. В положении крейсерского полета и посадочном положении в качестве средства дополнительной защиты установлены концевые выключатели, не допускающие выхода закрылков за конечные положения."
            },
            {
              "type": "p",
              "text": "Электрический привод закрылков оснащен АЗСом, который также можно привести в действие вручную. Индикатор положения закрылков: Для индикации текущего положения закрылков используются три лампы, расположенные рядом с рычагом управления закрылками."
            },
            {
              "type": "p",
              "text": "Верхняя лампа (зеленая) загорается при установке закрылков в положение крейсерского полета (UP); центральная лампа (белая) загорается при установке закрылков во взлетное положение (T/O); нижняя лампа (белая) загорается при установке закрылков в посадочное положение (LDG)."
            },
            {
              "type": "p",
              "text": "Одновременное загорание двух ламп означает, что закрылки находятся в положении, промежуточном между двумя указанными. Такая индикация возможна только во время движения закрылков."
            },
            {
              "type": "p",
              "text": "Руль высоты Конструктивное исполнение: Многослойная конструкция из стеклопластика с заполнителем. Шарниры навески: 5 шт. Эксплуатация: стальные тяги-толкатели."
            },
            {
              "type": "p",
              "text": "Два подшипника качалки, расположенные рядом с нижним узлом навески руля направления, доступны для визуального осмотра. Кабанчик руля высоты и его подшипник, а также соединение с тягой - толкателем в верхней части руля направления, доступны для визуального осмотра."
            },
            {
              "type": "p",
              "text": "Руль направления Конструктивное исполнение: Многослойная конструкция из стеклопластика с наполнителем. Шарниры навески: Верхний узел навески: Один болт. Нижний узел навески: Несущий кронштейн с ограничителями руля направления, крепится при помощи 4 винтов к задней стенке вертикального стабилизатора. Ответной частью руля направления является кронштейн, который крепится к рулю направления 2 болтами. Болты и гайки доступны для визуального осмотра."
            },
            {
              "type": "p",
              "text": "Эксплуатация: Стальные тросы, проушинами которые крепятся к болтам на кронштейне. Триммер руля высоты Для управления триммером используется штурвальчик черного цвета, расположеннЫЙ на центральнойм пульте сзади от рычага управления двигателем. Для защиты от чрезмерного триммирования колесо управления триммером оснащено фрикционным устройством."
            },
            {
              "type": "p",
              "text": "Взлетное положение (T/O) обозначено на колесе соответствующей меткой. Вращение колеса вперед = пикирующий момент Вращение колеса назад = кабрирующий момент Регулировка педалей"
            },
            {
              "type": "note",
              "text": "Регулировка педалей возможна только на земле. Для разблокирования педалей потянуть черную ручку, расположенную за задним узлом крепления. Смещение вперед: Потянув и удерживая ручку, нажать педали ногами в переднем направлении. Отпустить ручку, дождаться фиксации педалей. Смещение назад: Пользуясь ручкой разблокирования, переместить педали назад в нужное положение."
            },
            {
              "type": "p",
              "text": "Отпустить ручку, натжать педали ногами в переднем направлении до фиксации педалей. (if installed)"
            }
          ]
        }
      },
      {
        "id": "du-7-4",
        "code": "7.4",
        "title": {
          "en": "INSTRUMENT PANEL",
          "ru": "ГЛАВНАЯ ПРИБОРНАЯ ПАНЕЛЬ"
        },
        "rev": "REV 4 (EN) / РЕД. 3 (RU)",
        "bilingualBlocks": {
          "en": [
            {
              "type": "p",
              "text": "Instrument Panel with G1000 Instrument Panel with G1000 Instrument Panel with SED, MED and White Wire Annunciator Panel Major Instruments and Controls 1 Electric Master key switch 21 ELT control unit 2 Fuel Transfer switch 22 Accessory power socket 3 Pitot Heat switch 4 Avionics Master switch 24 Primary Flight Display (PFD) 5 Essential Bus switch 25 Audio amplifier / Intercom / Marker beacon receiver 6 Fuel pumps switch 26 Multi Function Display (MFD) 7 ECU Test button 27 Airspeed Indicator 8 ECU Voter switch 28 Attitude Gyro (artificial horizon) 9 Engine Master switch** 29 Altimeter 10 Rotary buttons for instrument lighting and flood light 30 Vertical Speed Indicator (VSI) 11 Light switches 31 Directional Gyro 12 Emergency switch** 32 Turn & Bank indicator 13 Circuit breakers* 33 Intercom 14 Flap selector switch 34 Annunciator panel 15 Alternate static valve 35 Main Engine Display (MED) 16 Ventilation nozzles 36 Secondary Engine Display (SED) 17 Backup airspeed indicator 37 Chronometer with OAT Indicator 18 Backup artificial horizon 38 COM/NAV 19 Backup altimeter 39 Transponder 20 Emergency compass *) Designations and abbreviations used to identify the circuit breakers are explained in Section 1.5 - DEFINITIONS AND ABBREVIATIONS of the AFM. **) The Emergency switch and optionally the Engine Master switch are guarded. Lift the guard prior to actuating the toggle. After switching, lower the Engine Master switch guard with the toggle in the desired position. Do not lower the Emergency switch guard with the toggle in the ON position."
            },
            {
              "type": "note",
              "text": "The figures on the previous pages show the typical DA 40 NG installation position for the equipment. The actual installation may vary due to the approved equipment version."
            },
            {
              "type": "h3",
              "text": "7.4.1 COCKPIT VENTILATION"
            },
            {
              "type": "p",
              "text": "Ventilation in the front is provided by the movable ventilation nozzles (16) in the instrument panel. Furthermore there are spherical nozzles in the roll bar on the left and right side next to the front seats as well as on the central console above the passengers’ heads. The spherical nozzles are opened and closed by twisting."
            },
            {
              "type": "p",
              "text": "Unconditioned ambient air is supplied to the interior through an inlet on the bottom surface of the left wing. To increase cabin temperatures when operating at low outside air temperatures, a ventilation inlet baffle may be installed at the inlet. With the baffle installed, the rear cabin ventilation nozzles on the left and right hand side and in the central console above the passengers’ heads will be inoperative."
            },
            {
              "type": "p",
              "text": "The ventilation inlet baffle consists of a metal plate with rubber edging and is attached to the bottom LH wing by a camloc."
            },
            {
              "type": "h3",
              "text": "7.4.2 HEATING"
            },
            {
              "type": "p",
              "text": "Heating is operated using two levers located on the small center console under the instrument panel. Right lever: up = heating ON down = heating OFF Central lever (air distribution lever): up = airflow to canopy (DEFROST) down = airflow to floor (FLOOR)"
            },
            {
              "type": "h3",
              "text": "7.4.3 MD302 STANDBY ATTITUDE MODULE"
            },
            {
              "type": "p",
              "text": "When installed (via OAM 40-1029) The Mid Continent MD302 Standby Attitude Module is a self-contained situational awareness instrument that provides airplane attitude, altitude, airspeed, and slip indication in lieu of the analogue standby instruments."
            },
            {
              "type": "p",
              "text": "The Standby Attitude Module consists of two separate LCD displays. One display serves as the artificial horizon, and the other serves as an airspeed indicator and altimeter. The user interface of the Standby Attitude Module allows for simple, intuitive operation using a single push-and-turn control knob."
            },
            {
              "type": "p",
              "text": "Refer to the Mid Continent MD302 Standby Attitude Module Pilot’s Guide P/N 9017846, latest effective issue, for more information. The MD302 Standby Attitude Module is not connected to an external ARINC 429 source, thus heading information and automatic BARO synchronization is not available in the DA 40 NG."
            },
            {
              "type": "figure",
              "src": "assets/fig_panel_g1000.png",
              "text": "7.4 INSTRUMENT PANEL WITH GARMIN G1000 (Tap to zoom)"
            }
          ],
          "ru": [
            {
              "type": "p",
              "text": "ALTERNATE AIR EEC U BU S 20 20 20 ESSENT IAL BUS 3 5 5 5 5 5 5 5 10 3 5 5 2 30 30 M A IN B US AVIO N ICS BU S 60 5 5 5 25 5 5 5 2 3 10 5 3 5 5 3 EMERGENCY P A R R E K L I E N A G S E D E F R O S T F L O O R ON B R A K E C A B I N L O C K OFF 100% (если установлено) GOAROUND 0% FUEL VALVE NORMAL EMERGENCY Приборная панель самолета с установленным комплексом G1000 OFF Приборная панель самолета с установленным комплексом G1000 Приборная панель с установленным вспомогательным индикатором параметров двигателя (SED), основным индикатором параметров двигателя (MED) и панелью сигнализации White Wire."
            },
            {
              "type": "p",
              "text": "Основные приборы и органы управления 1 Ключ-выключатель ELECTRIC МASTER (главный выключатель электрооборудования) 21 Блок управления аварийным маяком 2 Переключатель перекачки топлива 22 Разъем дополнительного питания 3 Переключатель обогрева ППД 4 Выключатель AVIONIC MASTER (главный выключатель БРЭО) 24 Основной пилотажный индикатор (PFD) 5 Выключатель ESSENTIAL BUS (выключатель шины основных потребителей) 25 Пульт управления звуковой сигнализацией / системой внутренней связи / маркерным приемником 6 Выключатель FUEL PUM PS (выключатель топливных насосов) 26 Многофункциональный индикатор (М FD) 7 Кнопки проверки блоков управления двигателем 27 Указатель воздушной скорости 8 Селектор ECU VOTER (переключатель блоков управления двигателем) 28 Указатель пространственного положения (авиагоризонт) 9 Выключатель ENGINE MASTER ** (главный выключатель двигателя) 29 Высотомер 10 Кремальеры управления подсветкой приборов и заливающим освещением 30 Вариометр 11 Выключатели светотехнического оборудования 31 Гиродатчик курса 12 Аварийный выключатель ** 32 Указатель поворота и крена 13 АЗСы* 33 Система переговорного устройства 14 Переключатель управления закрылками 34 Панель табло сигнализации 15 Кран резервного приемника статического давления 35 Основной индикатор параметров двигателя (М ED) 16 Вентиляционные насадки 36 Вспомогательный индикатор параметров двигателя (SED) 17 Резервный указатель воздушной скорости 37 Хронометр с указателем температуры наружного воздуха 18 Резервный авиагоризонт 38 COМ /NAV 19 Резервный высотомер 39 Ответчик 20 Аварийный компас *) Обозначения и расшифровка сокращений предохранителей приводятся в разделе РЛЭ 1.5 — «ОПРЕДЕЛЕНИЯ И АББРЕВИАТУРЫ». **) Аварийный выключатель и устанавливаемый дополнительно главный в ыключатель двигателя находятся под колпачками . Поднимите колпачок перед тем, как начать работать с ними. После включения опустите колпачок главного в ыключателя двигателя , оставляя в ыключатель в нужном положении. Не закрывайте колпачок аварийного выключателя, если он включен."
            },
            {
              "type": "note",
              "text": "На рисунках на предыдущих страницах показано типовое расположение оборудования самолета DA 40-NG. Фактическое расположение может отличаться от показанного на рисунке и зависит от утвержденной версии оборудования. Вентиляция кабины Для вентиляции передней части кабины используются подвижные вентиляционные насадки (16), расположенные на приборной панели. Кроме того, предусмотрены сферические насадки, расположенные с левой и правой стороны на дуге безопасности рядом с передними креслами, а также на центральном щитке над головами пассажиров."
            },
            {
              "type": "p",
              "text": "Сферические насадки открываются и закрываются вращением. Некондиционированный забортный воздух подается в кабину через отверстие на нижней поверхности левого крыла. Для повышения температуры в кабине при низкой температуре наружного воздуха возможна установка на этом отверстии специальной заслонки. С установленной заслонкой отсутствует подача воздуха в задние вентиляционные насадки кабины, расположенные с левой и правой стороны и в центральном щитке над головами пассажиров."
            },
            {
              "type": "p",
              "text": "Вентиляционная заслонка выполнена в виде металлической пластины с резиновым уплотнением по периметру и крепится к нижней поверхности левого крыла при помощи быстросъемного замка Camloc."
            },
            {
              "type": "p",
              "text": "Обогрев Для управления оборудованием отопления используются два рычага на небольшом центральном пульте под приборной доской. Правый рычаг: верхнее положение = обогрев включено (положение ON (вкл.)) нижнее положение = обогрев выключено (положение OFF (выкл.)) Центральный рычаг (рычаг распределительного воздушного крана): верхнее положение = подача теплого воздуха на остекление фонаря (положение DEFROST (оттаивание)) нижнее положение = подача теплого воздуха в область пола (положение FLOOR (пол))"
            },
            {
              "type": "figure",
              "src": "assets/fig_panel_g1000.png",
              "text": "7.4 ПРИБОРНАЯ ПАНЕЛЬ С КОМПЛЕКСОМ GARMIN G1000 (нажмите для увеличения)"
            }
          ]
        }
      },
      {
        "id": "du-7-5",
        "code": "7.5",
        "title": {
          "en": "LANDING GEAR",
          "ru": "ШАССИ"
        },
        "rev": "REV 4 (EN) / РЕД. 3 (RU)",
        "bilingualBlocks": {
          "en": [
            {
              "type": "p",
              "text": "The landing gear consists of a main landing gear of spring steel struts, and a free-castering nose wheel which is spring-loaded by an elastomer package. The wheel fairings are removable. When flying without wheel fairings, it should be noted that there is a reduction in some areas of performance (see Chapter 5)."
            },
            {
              "type": "h3",
              "text": "7.5.1 WHEEL BRAKES"
            },
            {
              "type": "p",
              "text": "Hydraulically operating disk brakes act on the wheels of the main landing gear. The wheel brakes are individually operated by means of toe pedals."
            },
            {
              "type": "h3",
              "text": "7.5.2 PARKING BRAKE"
            },
            {
              "type": "p",
              "text": "The parking brake lever is located on the small center console under the instrument panel, and is in the upper position when the brakes are released. To operate the parking brake pull the lever downwards until it catches. Brake pressure is built up by multiple operation of the toe brake pedals, and is maintained until the parking brake is released. To release, apply toe pressure to the brakes, and push the lever upwards."
            },
            {
              "type": "p",
              "text": "Hydraulic System Schematic"
            },
            {
              "type": "figure",
              "src": "assets/fig_hydraulic.png",
              "text": "7.5 HYDRAULIC BRAKE SYSTEM SCHEMATIC (Tap to zoom)"
            }
          ],
          "ru": [
            {
              "type": "p",
              "text": "Шасси самолета состоит из основных опор, конструктивно выполненных в виде листовых рессор из стали, и передней опоры с самоориентирующимся колесом и амортизатором (эластомерным пружинным пакетом)."
            },
            {
              "type": "p",
              "text": "Обтекатели колес съемные. При эксплуатации без обтекателей колес некоторые летные характеристики самолета ухудшаются (см. раздел 5). Тормоза колес На основных опорах шасси установлены дисковые тормоза, работающие от гидродавления. Колесные тормоза являются независимыми друг от друга и приводятся в действие при помощи верхних секторов ножных педалей."
            },
            {
              "type": "p",
              "text": "Стояночный тормоз Рычаг стояночного тормоза расположен на небольшом центральном пульте под приборной панелью. Верхнее положение рычага соответствует расторможенному положению. Чтобы привести в действие стояночный тормоз, необходимо нажать на рычаг вниз до фиксации. Тормозное давление создается многократным нажатием на педали тормозов и поддерживается до растормаживания стояночного тормоза. Чтобы снять стояночный тормоз, рычаг приводится в верхнее положение."
            },
            {
              "type": "p",
              "text": "Принципиальная схема гидравлической системы"
            },
            {
              "type": "figure",
              "src": "assets/fig_hydraulic.png",
              "text": "7.5 СХЕМА ГИДРАВЛИЧЕСКОЙ ТОРМОЗНОЙ СИСТЕМЫ (нажмите для увеличения)"
            }
          ]
        }
      },
      {
        "id": "du-7-6",
        "code": "7.6",
        "title": {
          "en": "SEATS AND SAFETY HARNESSES",
          "ru": "КРЕСЛА И ПРИВЯЗНЫЕ РЕМНИ"
        },
        "rev": "REV 4 (EN) / РЕД. 3 (RU)",
        "bilingualBlocks": {
          "en": [
            {
              "type": "p",
              "text": "To increase passive safety, the seats are constructed using a carbon fiber/Kevlar hybrid material and GFRP. The seats are removable to allow the maintenance and inspection of the underlying controls. Covers on the control sticks prevent loose objects from falling into the area of the controls."
            },
            {
              "type": "p",
              "text": "The seats have removable furnishings and are equipped with energy-absorbing foam elements. The seats are fitted with three-point safety harnesses. The harnesses are fastened by inserting the belt clip into the belt lock, and are opened by pressing the release on the belt lock."
            },
            {
              "type": "p",
              "text": "The backs of the rear seats can be laid forward after pulling upwards on the knob of the locking bolt. If front seats with adjustable backrests are installed (OÄM 40-252 or OÄM 40-375), the angle of the backrest, and the lumbar support, can be adjusted for best comfort. The backrest control lever is situated on the outboard side of the backrest if OÄM 40-252 is installed. The backrest release button in the case of OÄM 40-375, is situated on the upper side of the seat´s side frame."
            },
            {
              "type": "p",
              "text": "However, during take-off, landing and emergency landings, the backrests must be fixed in the upright position designated by a placard on the roll-over bar. The lumbar support can be adjusted by operating the lumbar support lever mounted on the outboard side of the seat pan."
            },
            {
              "type": "caution",
              "text": "Before the backrest lever is lifted in order to unlock the backrest, lean back towards the backrest to counteract the spring load; otherwise the backrest may snap forward."
            },
            {
              "type": "caution",
              "text": "Before adjusting the angle, lean against the backrest to counteract the spring load. Otherwise, the backrest may snap forward."
            },
            {
              "type": "caution",
              "text": "Do not apply a load of more than 90 N (202 lbf) to the top of the backrest. Otherwise, damage to the adjustment mechanism may result. For adjustment lift the backrest lever, or press the button, and bend the backrest forward or backward to the desired backrest angle. For fixing the position, press down the backrest lever, or release the button. If OÄM 40-252 is installed, and in case of a defective adjustment mechanism, the outboard friction adjustment screw can be tightened with a 10 mm hexagon nut in clockwise direction to fix the backrest in the upright position."
            },
            {
              "type": "p",
              "text": "If possible, set the backrest lever to the locked position. The mechanism must be repaired at the next scheduled inspection. If OÄM 40-375 is installed, and in case of a malfunction of the release button, the backrest can be moved into the upright position by pulling (480 N) the backrest forward."
            },
            {
              "type": "p",
              "text": "Outboard HingeInboard HingeLamella PackageFriction AdjustmentScrewSeat LeverLumbar Support Lever Lumbar Support If seats with adjustable backrests are installed (OÄM 40-252):"
            },
            {
              "type": "p",
              "text": "Lumbar SupportInboard HingeLumbar Support LeverOutboard HingeBowden CableRelease Button If seats with adjustable backrest - Hydrolok are installed (OÄM 40-375):"
            }
          ],
          "ru": [
            {
              "type": "p",
              "text": "Для повышения пассивной безопасности кресла изготовлены из композиционного материала (углеволокно/кевлар) и стеклопластика. Предусмотрена возможность демонтажа кресел для технического обслуживания и контроля, расположенных под креслами органов управления. Крышки на ручках управления позволяют предотвратить падение незакрепленных предметов на органы управления."
            },
            {
              "type": "p",
              "text": "Кресла оснащены съемными чехлами и энергопоглощающими элементами из пеноматериала и оборудованы трехточечными привязными ремнями. Для застегивания ремней необходимо вставить язычок в замок, для отстегивания — нажать на красную кнопку на замке."
            },
            {
              "type": "p",
              "text": "Спинки задних кресел можно сложить вперед, для чего сначала необходимо потянуть вверх головку стопорного болта. Если установлены сид ения с регулируемыми сп инками ( по доработке OÄМ 40-252), угол кронштейна может быть отрегулирован для более удобного порложения. Рычаг спинки кресла расположен на внешней стороне спинки. Тем не менее , во время взлета , посадки и аварийной посадки спинки кресел должны быть зафикси рованы в вертикальном положении, как показано на трафарете на дуге безопасности."
            },
            {
              "type": "caution",
              "text": "До поднятия рычага спинки кресла на расфиксацию замка, отклонитесь назад для противодействия нагрузке пружины; в противном случае спинка может резко отскочить и ударить. Для регулировки поднимите рычаг регулировки спинки и наклонитесь вперед или назад на нужный угол. Затем отпустите и надавите на рычаг регулировки спинки вниз. Если регулировочный механизм имеет дефект, можно затянуть регулировочный винт фрикционного механизма 10 мм шестигранной гайкой по часовой стрелке, чтобы закрепить спинку в вертикальном положении."
            },
            {
              "type": "p",
              "text": "Если возможно, поставьте рычаг регулировки спинки в положение «зафиксировано». Механизм следует отремонтировать на очередной форме технического обслуживания. Поясничная о пора может быть отрегулирована рычагом регулировки опоры , смонтированным на внешней стороне сидения."
            },
            {
              "type": "p",
              "text": "Если установлены кресла по доработке (ОÄМ 40-252): Поясничная опора Внутренний шарнир Пластинчатый наполнитель Регулировочный винт Рычаг кресла Внешний шарнир Поясничный опорный рычаг"
            }
          ]
        }
      },
      {
        "id": "du-7-7",
        "code": "7.7",
        "title": {
          "en": "BAGGAGE COMPARTMENT",
          "ru": "БАГАЖНЫЙ ОТСЕК"
        },
        "rev": "REV 4 (EN) / РЕД. 3 (RU)",
        "bilingualBlocks": {
          "en": [
            {
              "type": "p",
              "text": "The baggage compartment is behind the seat backs of the rear seats. Without a baggage net, no baggage may be loaded. As options, a baggage tube or a baggage extension (OÄM 40-164) or a short baggage extension (OÄM 40-331) may be installed."
            },
            {
              "type": "note",
              "text": "If OÄM 40-331 is installed, make sure that the baggage does not block the air vents in the back wall of the short baggage extension."
            }
          ],
          "ru": [
            {
              "type": "p",
              "text": "Багажный отсек расположен за спинками задних кресел. Без багажной сетки загрузка багажа невозможна. По заказу возможна установка удлиненнения багажного отсека (OÄМ 40-164) или короткого дополнительного багажного отсека (OÄМ 40-331)."
            },
            {
              "type": "note",
              "text": "При загрузке багажа в короткий дополнительный багажный отсек (устанавливается по рекомендации OÄМ 40-331) следить за тем, чтобы багаж не закрывал воздушные вентиляционные отверстия в задней стенке этого отсека."
            }
          ]
        }
      },
      {
        "id": "du-7-8",
        "code": "7.8",
        "title": {
          "en": "CANOPY, REAR DOOR, AND CABIN INTERIOR",
          "ru": "ФОНАРЬ, ЗАДНЯЯ ДВЕРЬ И ИНТЕРЬЕР КАБИНЫ"
        },
        "rev": "REV 4 (EN) / РЕД. 3 (RU)",
        "bilingualBlocks": {
          "en": [
            {
              "type": "h3",
              "text": "7.8.1 FRONT CANOPY"
            },
            {
              "type": "p",
              "text": "The front canopy is closed by pulling down on the canopy frame and locking it with the handle on the left hand side of the canopy frame. On locking, steel bolts catch into mating holes in polyethylene blocks. “Cooling gap” position: A second setting allows the bolts to lock in, leaving a gap under the forward canopy."
            },
            {
              "type": "p",
              "text": "The canopy can be key-locked by a locking mechanism on the left side near the canopy lever by turning the key clockwise. The closed and locked canopy can be opened from inside by pulling the lever inside the opening handle."
            },
            {
              "type": "warning",
              "text": "The airplane may be operated with the front canopy in the “cooling gap” position on the ground only. Before take-off the front canopy must be completely closed and latched, but not key-locked. Do not key-lock the front canopy before flight to assure emergency evacuation from outside. A window on the left and right hand side of the canopy can be opened for additional ventilation or as an emergency window."
            },
            {
              "type": "h3",
              "text": "7.8.2 REAR DOOR"
            },
            {
              "type": "p",
              "text": "The rear door is closed in the same way, by pulling down on the frame and locking it with the handle. A gas pressure damper prevents the door from dropping; in strong winds the assembly must be held. The rear door is protected against unintentional opening by an additional lever."
            },
            {
              "type": "p",
              "text": "The door can be locked by a locking mechanism on the left side near the door opening lever by turning the key clockwise. The closed and locked door can be opened from inside by pulling the lever inside the opening handle. For better handling an additional handle is mounted."
            },
            {
              "type": "warning",
              "text": "Before starting the engine the door must be closed and latched, but not key-locked. Do not key-lock the door before flight in order to assure emergency evacuation from outside."
            },
            {
              "type": "h3",
              "text": "7.8.3 EMERGENCY AXE"
            },
            {
              "type": "p",
              "text": "If OÄM 40-326 is incorporated with an emergency axe or on the floor panel under the co-pilot’s seat (see Figure below). If the canopy can not be opened in case of an emergency use the emergency axe to break through the canopy."
            },
            {
              "type": "warning",
              "text": "Make sure not to harm any person by using the emergency axe."
            },
            {
              "type": "warning",
              "text": "Beware of sharp edges and fragments of the broken canopy."
            },
            {
              "type": "h3",
              "text": "7.8.4 EMERGENCY EGRESS HAMMER"
            },
            {
              "type": "p",
              "text": "If OÄM 40-401 is incorporated, the emergency egress hammer is installed on the floor panel under the co-pilot’s seat. If the canopy cannot be opened in case of an emergency, use the emergency egress hammer to break through the canopy."
            },
            {
              "type": "warning",
              "text": "Make sure not to harm other persons by using the emergency egress hammer."
            },
            {
              "type": "warning",
              "text": "Beware of sharp edges and fragments of the broken canopy."
            },
            {
              "type": "h3",
              "text": "7.8.5 FIRE EXTINGUISHER"
            },
            {
              "type": "p",
              "text": "The Hal 1 fire extinguisher is located behind the co-pilot's seat. Screws attach the extinguisher mounting bracket to the closing rib between the front and the rear main bulkhead. The extinguisher uses a liquid gas which is non-toxic and does not have a residue."
            },
            {
              "type": "p",
              "text": "With MÄM 40-1162 installed, the Amerex 337TS fire extinguisher is installed horizontally (fore/aft) on the side floor behind the co-pilot seat. The fire extinguisher is held into the bracket with a quick release metal straps. Screws, washers and nuts attach the extinguisher mounting bracket to the floor. The fire extinguisher utilizes Halotron BrX (2-BTP) as the extinguishing agent, which is nontoxic and does not have a residue."
            }
          ],
          "ru": [
            {
              "type": "p",
              "text": "Передняя часть фонаря Для закрытия передней части фонаря необходимо потянуть вниз за раму каркаса фонаря, после чего запереть фонарь ручкой на левой стороне каркаса. При блокировке стальные болты входят в ответные отверстия в полиэтиленовых сухарях."
            },
            {
              "type": "p",
              "text": "Положение «зазор для охлаждения»: в этом положении болты входят в отверстия, однако при этом под передней частью фонаря остается зазор. Запереть фонарь можно на ключ при помощи механизма, расположенного на левой стороне рядом с рычагом открытия фонаря, повернув ключ по часовой стрелке. Закрытый и запертый фонарь можно открыть изнутри, потянув рычаг внутри ручки открытия."
            },
            {
              "type": "warning",
              "text": "Эксплуатация самолета с передней частью фонаря в положении зазора для охлаждения допускается только на земле. Перед взлетом переднюю часть фонаря необходимо полностью закрыть и зафиксировать, но не запирать на ключ. Чтобы обеспечить возможность аварийной эвакуации снаружи, запрещается перед полетом запирать переднюю часть фонаря на ключ. Окна на левой и правой сторонах фонаря можно открывать для вентиляции или для использования в качестве аварийных выходов."
            },
            {
              "type": "p",
              "text": "Задняя дверь Задняя дверь закрывается аналогичным образом. Для ее закрытия необходимо потянуть вниз за раму каркаса и запереть дверь ручкой. Чтобы не допустить резкого падения двери, она оснащена газовым амортизатором; при сильном ветре дверь следует придерживать. Задняя дверь оборудована дополнительным рычагом, предотвращающим ее случайное открытие."
            },
            {
              "type": "p",
              "text": "Запирание двери осуществляется при помощи замка, расположенного на левой стороне рядом с рычагом открытия двери, поворотом ключа по часовой стрелке. Закрытую и запертую дверь можно открыть изнутри, потянув рычаг в ручке открытия. Для удобства открывания предусмотрена дополнительная ручка."
            },
            {
              "type": "warning",
              "text": "Перед запуском двигателя дверь необходимо закрыть и зафиксировать, но не запирать на ключ. Чтобы обеспечить возможность аварийной эвакуации снаружи, запрещается перед полетом запирать дверь на ключ. Floor Panel Аварийный топор По рекомендации OÄМ 40-326 на панели пола под креслом пилота размещается аварийный топор (см. рисунок ниже). Аварийный топор используется для вырубания фонаря в аварийной ситуации, когда открыть фонарь невозможно."
            },
            {
              "type": "warning",
              "text": "При пользовании аварийным топором не допускать нанесения травм другим людям."
            },
            {
              "type": "warning",
              "text": "Остерегаться острых краев разбитого фонаря и осколков. топор Пол Аварийный топор"
            }
          ]
        }
      },
      {
        "id": "du-7-9",
        "code": "7.9",
        "title": {
          "en": "POWER PLANT",
          "ru": "СИЛОВАЯ УСТАНОВКА"
        },
        "rev": "REV 4 (EN) / РЕД. 3 (RU)",
        "bilingualBlocks": {
          "en": [
            {
              "type": "h3",
              "text": "7.9.1  ENGINE, GENERAL"
            },
            {
              "type": "p",
              "text": "The installed Austro Engine E4-A engine has the following specifications:"
            },
            {
              "type": "p",
              "text": "- Liquid-cooled four-cylinder four-stroke engine with wet sump lubrication"
            },
            {
              "type": "p",
              "text": "- Inline construction"
            },
            {
              "type": "p",
              "text": "- Common rail direct injection"
            },
            {
              "type": "p",
              "text": "- Propeller speed reducing gear 1:1.69"
            },
            {
              "type": "p",
              "text": "- Digital engine control with integrated propeller governor (using the gearbox oil system)"
            },
            {
              "type": "p",
              "text": "- Turbo charger with intercooler Displacement: 1991 cm 3 (121.5 in3) Max. power: 123.5 kW (165.6 DIN-HP) at 2300 RPM at sea level and ISA Max. continuous power: 114.0 kW (152.8 DIN-HP) at 2100 RPM at sea level and ISA The indications for monitoring important engine parameters during operation are integrated within the Garmin G1000 display (if installed) or on the MED and SED (if installed). The engine can only be operated with the ENGINE MASTER switch ON. The engine has an EECU (Electrical Engine Control Unit) which receives its electrical power from the generator when the engine is running. When the engine is not running, the ECU receives its electrical power from the battery."
            },
            {
              "type": "h3",
              "text": "7.9.2  OPERATING CONTROLS"
            },
            {
              "type": "h4",
              "text": "(a) POWER Lever"
            },
            {
              "type": "p",
              "text": "The engine performance is controlled by the power lever, situated on the large center console. Front and rear are defined in relation to the direction of flight."
            },
            {
              "type": "p",
              "text": "This lever is used to set the desired engine power LOAD (%). Lever forward (MAX) = Full power Lever to rear (IDLE) = Idle The ECU controls manifold pressure, injected fuel quantity and propeller speed according to the desired engine power preselected with the power lever."
            },
            {
              "type": "p",
              "text": "The propeller governor is attached to the top rear side of the gearbox and uses gearbox oil for propeller pitch regulation. Following a loss of oil pressure the propeller blades go to the low pitch stop (maximum RPM), thus allowing continuation of the flight according to 3.3.6 - DEFECTIVE RPM REGULATING SYSTEM."
            },
            {
              "type": "h4",
              "text": "(b) ELECTRIC MASTER"
            },
            {
              "type": "p",
              "text": "The key can be switched into three positions: OFF Disconnecting battery power. ON Connecting battery power to the power distribution system. STARTStarting the engine."
            },
            {
              "type": "h4",
              "text": "(c) ENGINE MASTER"
            },
            {
              "type": "p",
              "text": "The engine can only be cranked with the ENGINE MASTER switched to ON. To shut down the engine the ENGINE MASTER is switched to OFF."
            },
            {
              "type": "h4",
              "text": "(d) ECU VOTER"
            },
            {
              "type": "p",
              "text": "For normal operation the switch is set to AUTO. The engine is controlled by either ECU A or ECU B. In case of a failure of the active electrical engine control unit (ECU) there is an automatic switch-over to the other ECU. If the automatic switch over fails, switch over can be done manually by switching to ECU A or ECU B. This procedure should only be applied in an emergency."
            },
            {
              "type": "h4",
              "text": "(e) ECU TEST"
            },
            {
              "type": "p",
              "text": "POWER lever at IDLE: By pushing and holding the button until the end of the procedure, the self-test of each engine control unit is started. The procedure is possible on the ground only. Otherwise the test will not start. During the procedure the ECU performs a switch from ECU A to ECU B or ECU B to ECU A, whichever is active at the moment, with the propeller cycling. The propeller RPM is monitored automatically by the ECU. When switching from one ECU to the other, a slight shake of the engine may occur. Finally the ECU switches back. After that both caution lights must extinguish and the engine must run without a change."
            },
            {
              "type": "h4",
              "text": "(f) Alternate Air"
            },
            {
              "type": "p",
              "text": "In the event of power loss because of icing or blockage of the air filter, there is the possibility of drawing air from the engine compartment. The ALTERNATE AIR operating lever is located under the instrument panel on the left side of the center console. To open the alternate air source the lever is pulled to the rear. The alternate air source is closed, with the lever being in the forward position."
            },
            {
              "type": "p",
              "text": "Placard on the lever, forward position: ALTERNATE AIR Placard on the lever, visible when lever is in the rearward position (alternate air open): ALTERNATE AIR ON"
            },
            {
              "type": "h3",
              "text": "7.9.3  PROPELLER"
            },
            {
              "type": "p",
              "text": "An mt-Propeller MTV-6-R/190-69 hydraulically regulated 3-bladed constant speed propeller is installed. The propeller has wood-composite blades with fiber-reinforced plastic coating and metal leading edge protection; in the region of the propeller hub the leading edge is coated with adhesive PU tape. These blades combine the lowest weight whilst minimizing vibration."
            },
            {
              "type": "h4",
              "text": "(a) Propeller Control"
            },
            {
              "type": "p",
              "text": "The propeller pitch is controlled by the P-853-16 mt-Propeller governor. The pitch is set by the ECU via an electro-mechanical actuator on the governor. To change the blade pitch angle, gearbox oil is pumped into the propeller hub which leads to an increase in pitch and a lower propeller RPM. When oil leaves the propeller hub pitch is reduced and RPM will increase."
            },
            {
              "type": "p",
              "text": "In flight depending on the power setting the propeller pitch is adjusted such that the required RPM will be obtained as shown in the following diagram. Ground Operation:"
            },
            {
              "type": "caution",
              "text": "Operation on the ground at high RPM should be avoided as far as possible, as the blades could suffer stone damage. For this reason a suitable site for engine runs should be selected, where there are no loose stones or similar items."
            },
            {
              "type": "warning",
              "text": "Never rotate the propeller by hand."
            },
            {
              "type": "h3",
              "text": "7.9.4 FUEL SYSTEM"
            },
            {
              "type": "p",
              "text": "Standard Tank Schematic Long Range Tank Schematic Fuel is stored in the fuel tanks which are located in the wings. Normally fuel is taken from the MAIN tank (left wing)."
            },
            {
              "type": "p",
              "text": "The fuel is injected with high pressure directly into the combustion chambers. The injection nozzles (one per cylinder) are supplied with fuel by the common rail. Pressure inside the rail is generated by a high pressure pump which receives fuel from two independent low pressure fuel pumps."
            },
            {
              "type": "p",
              "text": "Both pumps are powered electrically. Depending on the power setting the rail pressure is controlled by the ECU through an electric valve. Fuel that is not injected into the combustion chambers is routed through the AUX fuel tank (right wing) and fed back into the MAIN fuel tank (left wing). This way hot fuel from the rail is cooled and cold fuel in both tanks is heated."
            },
            {
              "type": "p",
              "text": "With the help of an electrical transfer pump fuel can be transferred from the AUX tank (right wing) to the MAIN tank (left wing) manually. The transfer pump is switched off automatically when the auxiliary tank is empty or the main tank is full."
            },
            {
              "type": "p",
              "text": "If fuel transfer with the transfer pump becomes impossible for any reason, fuel can also be taken directly from the AUX tank (right wing) by switching the fuel valve to the EMERGENCY position."
            },
            {
              "type": "p",
              "text": "As the return line goes back into the MAIN tank (left wing), fuel will then be transferred from right to left fuel tank. As an option long range tanks may be installed."
            },
            {
              "type": "caution",
              "text": "Switching the fuel valve to the EMERGENCY position will start the transferring of fuel with the help of the electrically driven and engine driven fuel pumps from the auxiliary tank through the fuel return line to the main tank at a rate of approximately 45 US gal/h (170 liter/h) with the FUEL PUMPS switch in the OFF position. The fuel valve must be switched back to the NORMAL position before the auxiliary tank indication reads zero. If the fuel valve is not switched back to the NORMAL position, the engine will stop running as soon as the auxiliary tank is empty."
            },
            {
              "type": "h4",
              "text": "(a) Fuel Pumps"
            },
            {
              "type": "p",
              "text": "The engine is supplied with fuel by two parallel installed independent low pressure electrically driven fuel pumps. During normal operation one of the two fuel pumps is always working. In case of a low fuel pressure, the ECU switches automatically to the second fuel pump. During landing and take-off, or in case of a low fuel pressure both fuel pumps can be activated with the FUEL PUMPS switch. If both fuel pumps are set to ON the fuel pressure increases."
            },
            {
              "type": "p",
              "text": "Each fuel pump is electrically connected to an ECU BUS and protected by a 7.5 A circuit breaker."
            },
            {
              "type": "note",
              "text": "By switching between ECU A and B the two independent electrical fuel pumps are switched over as well. In case of an emergency both pumps can be activated simultaneously by pushing the FUEL PUMPS switch to the ON position."
            },
            {
              "type": "h4",
              "text": "(b) Fuel Valve"
            },
            {
              "type": "p",
              "text": "The fuel valve is located at the center console. The selectable positions are NORMAL, EMERGENCY and OFF. The desired position is reached by turning the valve handle while pulling up the safety latch on the valve handle. This is to ensure that a selection is not made unintentionally."
            },
            {
              "type": "h4",
              "text": "(c) Standard Fuel Tanks"
            },
            {
              "type": "p",
              "text": "Main Tank (Left Wing): The main tank consists of an aluminum chamber and a filler tube which are connected by a flexible hose. There are two tank vents. One includes a check valve with a capillary and one includes a pressure relief valve, which operates at 150 mbar (2 PSI) and allows fuel and air to flow to the outside at higher internal pressure. The relief pressure valve protects the tank against high pressure if the tank will be overfilled in case of a fuel transfer failure. The check valve with capillary allows air to enter the tank but prevents flow of fuel to the outside. The capillary equalizes the air pressure during climb. The hose terminations are situated on the underside of the wing, approximately 2 meter (7 ft) from the wing tip."
            },
            {
              "type": "p",
              "text": "Auxiliary Tank (Right Wing): The auxiliary tank consists of an aluminum chamber and a filler tube which are connected by a flexible hose. There are two tank vents. One includes a check valve with a capillary and one includes a capillary. The check valve with capillary allows air to enter the tank during descent but prevents flow of fuel to the outside. The capillary equalizes the air pressure during climb."
            },
            {
              "type": "p",
              "text": "The second capillary is installed for additional safety. The hose terminations are situated on the underside of the wing, approximately 2 meter (7 ft) from the wing tip."
            },
            {
              "type": "p",
              "text": "In each tank a coarse filter (finger filter) is fitted before the outlet. To allow draining of the tank, an outlet valve (drain valve) is installed at the lowest point of the fuel tank."
            },
            {
              "type": "p",
              "text": "A gascolator is located at the bottom side of the fuselage which is the lowest point of the entire fuel system. A drain valve (pull to drain) is mounted to the gascolator, to allow the removal of water and sediment which has collected in the fuel system."
            },
            {
              "type": "p",
              "text": "A capacity probe measures the fuel quantity in each tank. The indication is non-linear, therefore proportional calculations to determine the remaining fuel quantity or direct calculations of fuel consumption are not possible. Information about the fuel consumption can be found in Chapter 5 - PERFORMANCE."
            },
            {
              "type": "h4",
              "text": "(d) Long Range Tank (if installed)"
            },
            {
              "type": "p",
              "text": "The tank chamber has a capacity of approx. 5 US gal (19 liter). The ventilation system of the main and the auxiliary tank remains unchanged. When the fuel quantity indicator reads zero, only the unusable fuel remains in the tank. The useable capacity of each tank is 19.5 US gal, the maximum quantity that can be indicated is 14 US gal. Up to an actual quantity of 14 US gal the indication is correct. At an actual quantity above 14 US gal the indication remains at 14 US gal."
            },
            {
              "type": "note",
              "text": "When the fuel quantity indicator reads 14 US gal, the correct fuel quantity must be determined with the alternate means for fuel quantity indication. If this measurement is not carried out, the fuel quantity available for flight planning is 14 US gal."
            },
            {
              "type": "h4",
              "text": "(e) Alternate Means For Fuel Quantity Indication"
            },
            {
              "type": "p",
              "text": "The alternate means for fuel quantity indication allows the fuel quantity in the tank to be determined during the pre-flight inspection. It functions according to the principle of communicating containers. The fuel quantity measuring device has a recess which fits the airfoil of the wing."
            },
            {
              "type": "p",
              "text": "With this recess the device is held against the stall strip at the leading edge of the wing. The exact position is marked by a bore in the stall strip. Then the metal connector is pressed against the drain of the tank. The amount of fuel in the tank can now be read off from the vertical ascending pipe."
            },
            {
              "type": "p",
              "text": "For an exact indication the airplane must stand on level ground. The designated place for the fuel quantity measuring device is the bag on the rear side of the pilot seat."
            },
            {
              "type": "p",
              "text": "Fuel Quantity Measuring Device"
            },
            {
              "type": "h4",
              "text": "(f) Alternate Means for Fuel Quantity Indication with Fuel Indicator II"
            },
            {
              "type": "p",
              "text": "For an exact indication, the airplane must stand on horizontal ground with the wings level. The fuel indicator II includes a protractor for an additional pitch angle measurement. The fuel indicator II is placed on top of the fuselage tube just in front of the vertical tail. The lower edge of the fuel indicator II must be supported by the fuselage for its entire length. Read the pitch angle on the fuel indicator II and read the exact fuel quantity on the tables provided."
            },
            {
              "type": "p",
              "text": "Standard tank configuration Fuel Quantity Indicator II Pitch Angle ReadingUsable Fuel Quantity 1° 2° 3° 4° 5° US gal Liter up to 5 up to 5 up to 5 up to 5 up to 5 0 0 25 21 16 12 6 1 3.8 47 37 28 20 10 2 7.6 72 58 45 32 30 3 11.3 83 75 55 48 40 4 15.1 90 87 78 71 55 5 18.9 105 97 90 80 73 6 22.7 112 107 98 92 83 7 26.5 123 115 108 103 95 8 30.3 135 128 120 112 105 9 34.1 145 137 130 124 112 10 37.8 160 152 145 137 130 11 41.6 175 168 157 150 143 12 45.4 192 188 180 172 165 13 49.2 225 215 208 202 192 14 53.0 Long range tank configuration (if installed) Fuel Quantity Indicator II Pitch Angle ReadingUsable Fuel Quantity 1° 2° 3° 4° 5° US gal Liter up to 5 up to 5 up to 5 up to 5 up to 0 0 0 35 25 16 8 1 1 3.8 45 36 30 20 15 2 7.6 65 48 40 35 28 3 11.3 75 68 55 47 39 4 15.1 92 80 72 66 55 5 18.9 110 90 78 70 65 6 22.7 118 108 95 87 77 7 26.5 130 123 110 100 90 8 30.3 140 132 115 102 95 9 34.1 148 136 129 122 113 10 37.8 162 149 138 130 118 11 41.6 174 158 150 138 131 12 45.4 180 171 162 156 146 13 49.2 185 180 175 166 156 14 53.0 200 195 184 176 168 15 56.8 217 205 196 189 181 16 60.6 232 220 215 204 196 17 64.4 248 238 230 221 214 18 68.1 Fuel Quantity Indicator II"
            },
            {
              "type": "h3",
              "text": "7.9.5 COOLING SYSTEM"
            },
            {
              "type": "p",
              "text": "The engine is liquid cooled. The liquid cooling system consists of a radiator circuit (coolant heat exchanger) and a bypass circuit (cabin heat exchanger). The radiator circuit is only open during hot coolant temperatures. This assures that a cold engine will warm up quickly. Upon reaching approximately 80°C (126°F) coolant temperature the radiator circuit is activated by a thermostatic valve."
            },
            {
              "type": "p",
              "text": "Integrated in the bypass circuit is a coolant to air heat exchanger (cabin heat exchanger) which provides warm air for the cabin heat system. A coolant expansion tank allows coolant expansion and pressure adjustment. The coolant system is protected against overpressure by means of a pressure relief valve."
            },
            {
              "type": "h3",
              "text": "7.9.6 TURBO CHARGER SYSTEM"
            },
            {
              "type": "p",
              "text": "The intake air is compressed in the compressor which is driven by the turbine, and is subsequently cooled down in the intercooler. Cooling the air increases engine efficiency and power through the higher density of cold air. The exhaust system contains a manifold which collects exhaust gases from the outlets of the cylinders and feeds them to the turbine of the turbo charger. Behind the turbine the exhaust gases are guided through an exhaust pipe and exits at the bottom cowling opening. Excess exhaust gases bypass the turbine. The bypass is controlled by the ECU through the waste gate valve. A manifold pressure sensor behind the compressor allows the ECU to calculate the correct position of the waste gate valve. This prevents excessive manifold pressures at low density altitudes."
            },
            {
              "type": "h3",
              "text": "7.9.7 OIL SYSTEMS"
            },
            {
              "type": "p",
              "text": "The engine has two separate oil systems."
            },
            {
              "type": "h4",
              "text": "(a) Lubrication System (Engine and Turbo Charger)"
            },
            {
              "type": "p",
              "text": "The engine lubrication is a wet sump lubrication system. Oil is cooled by a separate cooler on the underside of the engine. A dip-stick is provided to check the oil quantity through an inspection door on the LH side of the upper cowling. If required, oil can also be filled in there (for specified oil types refer to 2.4 - POWER-PLANT LIMITATIONS)."
            },
            {
              "type": "h4",
              "text": "(b) Gearbox and Propeller Governor System"
            },
            {
              "type": "p",
              "text": "The second oil circuit lubricates the gearbox and serves the governor system and the regulation of the propeller. Gearbox oil quantity can be checked via an inspection glass which can be reached through an inspection door on the LH side of the upper cowling."
            },
            {
              "type": "caution",
              "text": "If the gearbox oil quantity is too low, unscheduled maintenance is necessary (for specified oil types refer to 2.4 - POWER-PLANT LIMITATIONS)."
            },
            {
              "type": "figure",
              "src": "assets/fig_fuel_std.png",
              "text": "7.9.4 FUEL SYSTEM — STANDARD TANK SCHEMATIC (Tap to zoom)"
            },
            {
              "type": "figure",
              "src": "assets/fig_fuel_lr.png",
              "text": "7.9.4 FUEL SYSTEM — LONG RANGE TANK SCHEMATIC (Tap to zoom)"
            }
          ],
          "ru": [
            {
              "type": "h3",
              "text": "7.9.1 ДВИГАТЕЛЬ. ОБЩАЯ ИНФОРМАЦИЯ"
            },
            {
              "type": "p",
              "text": "Установленный на самолете двигатель Austro Engine E4-A имеет следующие характеристики: − Четырехтактный четырехцилиндровый двигатель с жидкостным охлаждением, оснащенный системой смазки с мокрым картером − Однорядная конструкция − Система непосредственного впрыска с общей топливной рампой − Редуктор воздушного винта с отношением 1:1,69 − Цифровое управление двигателем с встроенным регулятором оборотов воздушного винта (использущий маслосистему редуктора) − Турбокомпрессор с промежуточным охладителем Рабочий объем:"
            },
            {
              "type": "p",
              "text": "Максимальная мощность: 123,5 кВт (165,6 л.с.) при 2300 об/мин в условиях МСА на уровне моря Номинальная мощность: 114,0 кВт (152,8 л.с.) при 2100 об/мин в условиях МСА на уровне моря Индикация для контроля основных параметров двигателя во время работы осуществляется на индикаторе комплекса Garmin G1000 (для самолетов, оснащенных этим комплексом) или на основном (MED) и вспомогательном (SED) индикаторах параметров двигателя (для самолетов с этими индикаторами). Запуск двигателя возможен только после установки выключателя ENGINE MASTER (главный выключатель двигателя) в положение ON (вкл.)."
            },
            {
              "type": "p",
              "text": "Двигатель оснащен электронным блоком управления, электропитание на который подается от генератора при работающем двигателе. Когда двигатель не работает, питание на блок управления двигателем подается от аккумуляторной батареи."
            },
            {
              "type": "h3",
              "text": "7.9.2 ОРГАНЫ УПРАВЛЕНИЯ"
            },
            {
              "type": "p",
              "text": "Рычаг управления двигателем Для управления мощностью двигателя используется рычаг управления двигателем, расположенный на центральном пульте. Термины «вперед» и «назад» приведены относительно направления полета."
            },
            {
              "type": "p",
              "text": "Рычаг управления двигателем устанавливает требуемую НАГРУЗКУ двигателя (%) Рычаг впереди (MAX (максимум)) = полная мощность Рычаг убран назад (IDLE (малый газ)) = малый газ Блок управления двигателем выполняет функции управления давлением в распределителе, количеством подаваемого топлива и частотой вращения воздушного винта в соответствии с заданной РУДом мощностью двигателя."
            },
            {
              "type": "p",
              "text": "Регулятор оборотов воздушного винта установлен сверху справа от редуктора. Для управления шагом воздушного винта используется масло коробки приводов . В случае утечки масла лопасти воздушного винта устанавливаются на упор малого шага (максимальная частота вращения), что позволяет продолжать полет в соответствии с разделом 3.3.6. «НЕИСПРАВНОСТЬ СИСТЕМЫ РЕГУЛИРОВАНИЯ ЧАСТОТЫ ВРАЩЕНИЯ ВОЗДУШНОГО ВИНТА»."
            },
            {
              "type": "p",
              "text": "ELECTRIC МASTER (главный выключатель электрооборудования) Этот ключ-выключатель имеет три положения: OFF (выкл.) Электропитание от аккумуляторной батареи отключено."
            },
            {
              "type": "p",
              "text": "ON (вкл.) Электропитание от аккумуляторной батареи подается в систему распределения. START (пуск) Запуск двигателя. ENGINE МASTER (главный выключатель двигателя) Холодная прокрутка двигателя возможна только после установки выключателя ENGINE MASTER (главный выключатель двигателя) в положение ON (вкл.). Останов двигателя производится переводом выключателя ENGINE MASTER (главный выключатель двигателя) в положение OFF (выкл.)."
            },
            {
              "type": "p",
              "text": "ECU VOTER (переключатель выбора электронных блоков управления двигателем) Для нормальной работы переключатель устанавливается в положение AUTO (автоматически). Управление двигателем осуществляет блок управления двигателем A или B."
            },
            {
              "type": "p",
              "text": "При отказе рабочего блока управления двигателем происходит автоматическое переключение на другой блок управления. Если автоматического переключения не происходит, переключиться на резервный блок управления двигателем А или B можно вручную. Это разрешается только в аварийной ситуации."
            },
            {
              "type": "p",
              "text": "ECU TEST (проверка блока управления двигателем) Рычаг управления двигателем в положении IDLE (малый газ): Нажатие и удержание кнопки до завершения процедуры запускает процедуру самоконтроля каждого блока управления двигателем. Выполнение процедуры возможно только на земле. В противном случае запуска самоконтроля не происходит."
            },
            {
              "type": "p",
              "text": "В ходе процедуры блок управления двигателем производит переключение с блока управления двигателем A на блок управления двигателем B (или с блока В на блок А, в зависимости от того, который из блоков осуществляет управление в текущий момент) при вращающемся воздушном винте. Контроль частоты вращения воздушного винта осуществляется блоком управления двигателем автоматически. При переключении между блоками управления двигателем может возникать небольшое потрясывание двигателя. В завершение процедуры выполняется переключение на исходный блок управления двигателем. После этого оба предупредительных сигнализатора должны погаснуть и двигатель должен работать без изменений."
            },
            {
              "type": "p",
              "text": "Подача воздуха из резервного источника В случае падения мощности в результате обледенения или засорения воздушного фильтра существует возможность забора воздуха из двигательного отсека. Рычаг ALTERNATE AIR (подача воздуха из резервного источника) расположен под приборной панелью, слева от центральнго пульта. Для открытия резервного источника подачи воздуха рычаг необходимо оттянуть назад. В переднем положении рычага резервный источник подачи воздуха закрыт."
            },
            {
              "type": "p",
              "text": "Трафарет на рычаге, переднее положение: Трафарет на рычаге виден, когда рычаг находится в заднем положении (резервный источник подачи воздуха закрыт): ALTERNATE AIR ON (подача воздуха из резервного источника вкл.) ALTERNATE AIR (подача воздуха из резервного источника)"
            },
            {
              "type": "h3",
              "text": "7.9.3 ВОЗДУШНЫЙ  ВИНТ"
            },
            {
              "type": "p",
              "text": "На самолете установлен трехлопастной воздушный винт mt-Propeller МTV-6-R/190-69 с постоянным числом оборотов и с гидравлической системой регулировки шага. Воздушный винт оснащен деревянно-композитными лопастями с обшивкой из пластмассы, армированной волокном, и металлической оковкой; в области втулки воздушного винта передняя кромка лопасти имеет покрытие из липкой полиуретановой ленты. Такая конструкция лопасти позволяет обеспечить минимальную массу и сократить до минимума вибрацию."
            },
            {
              "type": "p",
              "text": "Система управления воздушным винтом Шаг винта регулируется регулятором оборотов воздушного винта mt-Propeller P -853-16. Регулирование шага осуществляется блоком управления двигателем при помощи электромеханического исполнительного механизма регулятора. Для изменения шага лопастей во втулку воздушного винта закачивается масло из редуктора, при этом увеличивается шаг и уменьшается число оборотов винта. При уменьшении давления масла во втулке воздушного винта происходит уменьшение шага винта и увеличение числа оборотов."
            },
            {
              "type": "p",
              "text": "В полете, в зависимости от установки мощности, шаг воздушного винта регулируется таким образом, что обеспечивается поддержание заданного числа оборотов (см. следующую схему)."
            },
            {
              "type": "p",
              "text": "График вращения воздушного винта Положение рычага управления двигателем [%] Наземная эксплуатация:"
            },
            {
              "type": "caution",
              "text": "Частота вращения воздушного винта [об/мин] При эксплуатации самолета на земле следует избегать высокой частоты вращения воздушного винта, поскольку при этом возможно повреждение лопастей камнями. По этой причине для опробования двигателя необходимо выбрать пригодную для этого площадку, на которой отсутствуют свободно лежащие камни и аналогичные предметы."
            },
            {
              "type": "warning",
              "text": "Категорически запрещается проворачивать воздушный винт рукой."
            },
            {
              "type": "h3",
              "text": "7.9.4 Топливная система"
            },
            {
              "type": "p",
              "text": "Схема топливной системы самолета со стандартными баками Схема топливной системы самолета с баками увеличенной емкости Топливо хранится в баках, которые расположены в крыльях. При нормальной работе забор топлива осуществляется из основного бака (в левом крыле)."
            },
            {
              "type": "p",
              "text": "В двигатель топливо впрыскивается под высоким давлением непосредственно в камеру сгорания. Топливные форсунки (по одной на цилиндр) получают топливо через общий топливный распределитель. Давление в р аспределителе нагнетается насосом высокого давления, на который топливо подается двумя независимыми топливными насосами низкого давления. Оба насоса работают от электропитания. Давление в распределителе регулируется блоком управления двигателем через электрический клапан в соответствии с выставленным режимом дигателя."
            },
            {
              "type": "p",
              "text": "Топливо, не впрыснутое в камеру сгорания, сливается через резервный топливный бак (в правом крыле) в основной топливный бак (в левом крыле). За счет этого обеспечивается охлаждение топлива, поступающего из топливного распределителя, и нагрев холодного топлива в обоих баках."
            },
            {
              "type": "p",
              "text": "При помощи электрического насоса перекачки топливо можно перекачать из резервного бака (в правом крыле) в основной бак (в левом крыле) в ручном режиме. Насос перекачки отключается автоматически при опорожнении резервного топливного бака или заполнении основного бака."
            },
            {
              "type": "p",
              "text": "Если перекачка топлива при помощи насоса перекачки по какой-либо причине невозможна, забор топлива может осуществляться непосредственно из резервного бака (бака в правом крыле), для чего необходимо установить топливный кран в положение EMERGENCY (аварийная ситуация). Поскольку магистраль слива из резервного бака идет в основной бак (бак в левом крыле), будет происходить перекачка топлива из правого бака в левый."
            },
            {
              "type": "p",
              "text": "По дополнительному заказу возможна установка баков увеличенной емкости."
            },
            {
              "type": "caution",
              "text": "При установке топливного крана в положение EMERGENCY (аварийная ситуация) начинается перекачка топлива электрическими топливными насосами и механическими двигательными насосами из резервного бака через обратную магистраль слива в основной бак со скоростью приблизительно 45 ам. галл/ч ( 170 л/ч), если выключатель FUEL PUMPS (выключатель топливных насосов) установлен в положение OFF (выкл.). Топливный кран необходимо вернуть в положение NORMAL (нормальное положение) до того, как количество топлива в резервном баке по показаниям топливомера будет равно нулю. Если топливный кран не вернуть в положение NORMAL (нормальное положение), сразу после опорожнения резервного бака произойдет останов двигателя."
            },
            {
              "type": "p",
              "text": "Топливные насосы Топливо в двигатель подается двумя параллельно установленными автономными электрическими топливными насосами низкого давления. При нормальной работе всегда работает только один из двух топливных насосов. При обнаружении низкого давления топлива блок управления двигателем автоматически переключается на второй топливный насос. Во время посадки и взлета, а также в случае низкого давления топлива возможно включение обоих топливных насосов при помощи выключателя FUEL PUMPS (выключатель топливных насосов). При включении обоих топливных насосов давление топлива увеличивается."
            },
            {
              "type": "p",
              "text": "Каждый топливный насос подключен к шине блоков управления двигателем и защищен АЗС номиналом 7,5 A."
            },
            {
              "type": "note",
              "text": "При переключении между блоками управления двигателем A и B выполняется также переключение между двумя автономными электрическими топливными насосами. В аварийной ситуации возможно одновременное включение обоих насосов при помощи установки выключателя FUEL PUMPS (выключатель топливных насосов) в положение ON (вкл.). Топливный кран Ручка топливного крана расположена на центральной панели и имеет следующие положения: NORМAL (нормальное положение), EМERGENCY (аварийная ситуация) и OFF (выкл.). Для установки крана в нужное положение необходимо повернуть ручку крана, вытягивая предохранительную защелку на ручке крана. Это предусмотрено для того, чтобы исключить возможность случайного изменения положения крана."
            },
            {
              "type": "p",
              "text": "Стандартные топливные баки Основной бак (в левом крыле): Основной бак состоит из алюминиевой камеры и трубы заливной горловины, которые соединяются гибким шлангом. В баке имеется два продувочных отверстия. Одно оснащено обратным клапаном с капиллярной трубкой, а второе — предохранительным клапаном с давлением уставки 150 мбар (2 фунт/кв. дюйм), который позволяет топливу и воздуху вытекать наружу при чрезмерном повышении внутреннего давления. Предохранительный клапан обеспечивает защиту бака от высокого давления в случае его переполнения при отказе системы перекачки топлива. Обратный клапан с капиллярной трубкой позволяет воздуху входить в бак, но препятствует вытеканию топлива наружу. Капиллярная трубка обеспечивает выравнивание давления воздуха во время набора высоты. Точки подключения шлангов расположены на нижней стороне крыла, на расстоянии около 2 м (7 футов) от законцовки крыла."
            },
            {
              "type": "p",
              "text": "Резервный бак (в правом крыле): Резервный бак состоит из алюминиевой камеры и трубы заливной горловины, которые соединяются гибким шлангом. В баке имеется два дренажных отверстия. На одном отверстии установлен обратный клапан с капиллярной трубкой, на втором — клапан сброса давления, который срабатывает при давлении в баке 150 мбар (2 фунта/дюйм2) и позволяет топливу и воздуху перетечь наружу при большом внутренне м давлении."
            },
            {
              "type": "p",
              "text": "Клапан сброса давления защищает бак от высокого давления, если бак переполнен в случае от каза системы перкачки топлива . Обратный клапан с капиллярной трубкой позволяет воздуху входить в бак при снижении самолета, но препятствует вытеканию топлива наружу. Капиллярная трубка обеспечивает выравнивание давления воздуха во время набора высоты. Точки подключения шлангов расположены на нижней стороне крыла, на расстоянии около 2 м (7 футов) от консоли крыла."
            },
            {
              "type": "p",
              "text": "На выходе из каждого бака установлен фильтр грубой очистки (гребенчатый фильтр). Чтобы обеспечить слив топлива из бака, в его нижней точке установлен сливной кран."
            },
            {
              "type": "p",
              "text": "На нижней поверхности фюзеляжа, на самой нижней точке всей топливной системы, расположен отстойник. На нем смонтирован сливной кран для слива воды и осадка из топливной системы."
            },
            {
              "type": "p",
              "text": "Для измерения количества топлива в каждом баке имеется емкостный датчик. Индикация количества топлива не прямолинейная, поэтому пропорциональные расчеты для определения остатка топли ва или прямые подсчеты р асхода топлива не приемлемы."
            },
            {
              "type": "p",
              "text": "Информацию о расходе топлива см. в разделе 5 — «ЛЕТНО-ТЕХНИЧЕСКИЕ ХАРАКТЕРИСТИКИ». Исполнение с баками увеличенной емкости (по заказу) Емкость топливного бака составляет приблизительно 5 ам. галл (19 л). Дренажная система основного и резервного баков остается без изменений."
            },
            {
              "type": "p",
              "text": "Когда количество топлива по показаниям топливомера равно нулю, в баке остается только невырабатываемый остаток топлива. Полезная емкость каждого бака составляет 19,5 ам. галл, максимальное количество топлива по индикации топливомера равно 14 ам. галл. При фактическом количестве топлива до 14 ам. галл показания топливомера соответствуют количеству топлива. Если фактическое количество топлива превышает 14 ам. галл, показания топливомера остаются на уровне 14 ам. галл."
            },
            {
              "type": "note",
              "text": "Когда количество топлива по показаниям топливомера равно 14 ам. галл, фактическое количество топлива необходимо определять с использованием резервных средств индикации количества топлива. Если фактическое количество топлива с использованием резервных средств не определено, при планировании полета количество топлива принять равным 14 ам. галл. Резервные средства индикации количества топлива Резервные средства замера количества топлива позволяют определить количество топлива в баке в ходе предполетной проверки. Они работаю т по принципу сообщающихся сосудов. Устройство измерения уровня топлива имеет углубление, соответствующее аэродинамическому профилю крыла."
            },
            {
              "type": "p",
              "text": "Устройство устанавливается этим углублением напротив ленты срыва потока на передней кромке крыла. Точное положение устройства отмечено отверстием в ленте срыва потока. Металлический соединитель прижимается к сливному отверстию бака. После этого количество топлива в баке можно определить по вертикальной восходящей трубке."
            },
            {
              "type": "p",
              "text": "Чтобы обеспечить точность показаний, самолет должен располагаться на горизонтальной поверхности. Устройство измерения уровня топлива должно храниться в чехле с задней стороны от кресла пилота."
            },
            {
              "type": "p",
              "text": "Неиспользуемое топливо Самолет на земле Единицы измерения галлоны США Не отображается на приборной панеле"
            },
            {
              "type": "h3",
              "text": "7.9.5 СИСТЕМА ОХЛАЖДЕНИЯ"
            },
            {
              "type": "p",
              "text": "Двигатель оснащен системой жидкостного охлаждения. Система жидкостного охлаждения состоит из контура радиатора (теплообменник охлаждающей жидкости) и перепускного контура (теплообменник обогрева кабины). Контур радиатора открывается только тогда, когда охлаждающая жидкость имеет высокую температуру. Это обеспечивает быстрый прогрев холодного двигателя. После увеличения температуры охлаждающей жидкости приблизительно до 80°C (126°F) включается терморегулирующий клапан, направляющий охлаждающую жидкость через контур радиатора."
            },
            {
              "type": "p",
              "text": "Перепускной контур оснащен теплообменником «охлаждающая жидкость — воздух» (теплообменником обогрева кабины), который обеспечивает подогрев воздуха для системы обогрева кабины."
            },
            {
              "type": "p",
              "text": "Для компенсации расширения и регулирования давления охлаждающей жидкости предусмотрен расширительный бак. Для защиты системы охлаждения от высокого давления установлен предохранительный клапан."
            },
            {
              "type": "h3",
              "text": "7.9.6 СИСТЕМА ТУРБОНАДДУВА"
            },
            {
              "type": "p",
              "text": "Входящий воздух сжимается компрессором, приводимым в движение турбиной , и затем охлаждается в промежуточном радиаторе. Охлаждение воздуха позволяет увеличить КПД и мощность двигателя благодаря более высокой плотности холодного воздуха."
            },
            {
              "type": "p",
              "text": "Выхлопная система состоит из коллектора, который собирает выхлопные газы с выходов цилиндров и подает их на турбину турбокомпрессора. После турбины выхлопные газы проходят через выхлопную трубу и выходят наружу через отверстие в нижнем капоте."
            },
            {
              "type": "p",
              "text": "Излишек выхлопных газов направляется в обход турбины. Перепуск газов регулируется блоком управления двигателем при помощи клапана перпуска газов. Датчик давления в коллекторе после компрессора позволяет блоку управления двигателем рассчитать нужное положение клапана. Это предотвращает развитие чрезмерного давления в коллекторе на высотах с малой плотностью."
            },
            {
              "type": "h3",
              "text": "7.9.7 МАСЛОСИСТЕМА"
            },
            {
              "type": "p",
              "text": "Двигатель оснащен двумя отдельными маслосистемами. Система смазки (двигателя и турбокомпрессора) Для смазки двигателя применяется система смазки с мокрым картером. Масло охлаждается отдельным радиатором, расположенным на нижней стороне двигателя."
            },
            {
              "type": "p",
              "text": "Для проверки уровня масла через люк, расположенный с левой стороны верхнего капота, предусмотрен специальная мерная линейка . При необходимости можно доливать масло через это отверстие (информацию о разрешенных к применению марках масла см. в разделе 2.4. — «ОГРАНИЧЕНИЯ СИЛОВОЙ УСТАНОВКИ»)."
            },
            {
              "type": "p",
              "text": "Редуктор и система регулирования частоты вращения воздушного винта Второй масляный контур обеспечивает смазку редуктора, обслуживает систему регулирования частоты вращения воздушного винта и используется для регулирования частоты вращения."
            },
            {
              "type": "p",
              "text": "Количество масла в редукторе можно проверить по мерному стеклу, которое видно через смотровой люк с левой стороны верхнего капота."
            },
            {
              "type": "caution",
              "text": "Если масла в редукторе слишком мало, необходимо провести внеплановое техническое обслуживание (информацию о разрешенных к применению марках масла см. в разделе 2.4 — «ОГРАНИЧЕНИЯ СИЛОВОЙ УСТАНОВКИ»)."
            },
            {
              "type": "figure",
              "src": "assets/fig_fuel_std.png",
              "text": "7.9.4 ТОПЛИВНАЯ СИСТЕМА — СТАНДАРТНЫЕ БАКИ (нажмите для увеличения)"
            },
            {
              "type": "figure",
              "src": "assets/fig_fuel_lr.png",
              "text": "7.9.4 ТОПЛИВНАЯ СИСТЕМА — БАКИ УВЕЛИЧЕННОЙ ЁМКОСТИ (нажмите для увеличения)"
            }
          ]
        }
      },
      {
        "id": "du-7-10",
        "code": "7.10",
        "title": {
          "en": "ELECTRICAL SYSTEM",
          "ru": "СИСТЕМА ЭЛЕКТРОСНАБЖЕНИЯ"
        },
        "rev": "REV 4 (EN) / РЕД. 3 (RU)",
        "bilingualBlocks": {
          "en": [
            {
              "type": "p",
              "text": "Electrical System Schematic"
            },
            {
              "type": "h3",
              "text": "7.10.1  GENERAL"
            },
            {
              "type": "p",
              "text": "The DA 40 NG has a 28 Volt DC system, which can be sub-divided into:"
            },
            {
              "type": "p",
              "text": "- Power generation"
            },
            {
              "type": "p",
              "text": "- Storage"
            },
            {
              "type": "p",
              "text": "- Distribution"
            },
            {
              "type": "p",
              "text": "- Consumers"
            },
            {
              "type": "h4",
              "text": "(a) Power Generation"
            },
            {
              "type": "p",
              "text": "Power generation is provided by a 70 Ampère alternator (generator) which is mounted on the bottom left side of the engine. The alternator is driven by a flat-belt."
            },
            {
              "type": "p",
              "text": "The power output line of the alternator is connected to the ENG ECU bus via a 100 A fuse, which is installed in the instrument panel. The power output line also runs through the current sensor, which provides an indication of the power being supplied to the electrical system by the alternator including the current for battery charging."
            },
            {
              "type": "p",
              "text": "In the event of a main battery failure the field of the alternator is energized by two 12 V, 7.2 Ah sealed-lead-acid batteries (ECU backup batteries) which are installed behind the first ring frame."
            },
            {
              "type": "p",
              "text": "The ENGINE MASTER switch connects the ECU backup battery to the alternator voltage regulator via a 10 A fuse. Alternator Control: The alternator control unit includes a comprehensive set of diagnostic functions that will warn the operator using a warning message (ALTN FAIL on the G1000 system (if installed) or ALTERNATOR on the White Wire annunciator panel (if installed)) in case of overor undervoltage as well as a couple of other internal warning levels."
            },
            {
              "type": "h4",
              "text": "(b) Storage"
            },
            {
              "type": "p",
              "text": "Main battery power is stored in a 24 V, 13.6 Ah lead-acid battery mounted behind the baggage compartment frame. The main battery is connected to the battery bus via the battery-relay which is installed in the relay junction box behind the baggage compartment frame."
            },
            {
              "type": "p",
              "text": "The battery relay is controlled with the ELECTRIC MASTER key switch which is located in the center of the instrument panel. In addition, two 12 V, 7.2 Ah sealed-lead-acid batteries (ECU backup-batteries) are installed behind the first ring frame as a further source of electrical power for the Engine Control Unit (ECU B only)."
            },
            {
              "type": "p",
              "text": "Under normal operating conditions the ECU backup batteries are charged by the ECU bus. In the event of an alternator failure and a depleted main battery the ECU backup batteries automatically supply electrical power to ECU B via a 32 A fuse. This prevents the engine from stopping in the unlikely event of an alternator failure and a totally discharged main battery."
            },
            {
              "type": "p",
              "text": "In addition, a non-rechargeable dry battery is installed in the IFR model as a further source of power for the attitude gyro (artificial horizon) and the flood light. When the EMERGENCY switch is set to ON, these two systems are supplied with power for 1 hour, independent of all other electrical consumers. During each 100 hour inspection, this battery is checked for proper functioning. Every 2 years or after use (broken seal on the switch) the battery pack must be replaced."
            },
            {
              "type": "h4",
              "text": "(c) Distribution"
            },
            {
              "type": "p",
              "text": "Electrical power is distributed via the hot battery bus, the battery bus 1, the battery bus 2, the ECU-bus, the main bus, the essential bus and the avionic bus. Hot Battery Bus:"
            },
            {
              "type": "p",
              "text": "The hot battery bus is directly connected to the main-battery installed in the relay junction box and cannot be disconnected from the main battery. The hot battery bus provides power to the accessory power plug and ELT which are protected by their own fuses."
            },
            {
              "type": "p",
              "text": "Battery Bus 1: The battery bus 1 is connected to the main-battery via the battery-relay which can be controlled by the ELECTRIC MASTER key switch. The battery bus 1 provides power to the battery bus 2 and heavy duty power to the starter."
            },
            {
              "type": "p",
              "text": "The battery bus 1 is also connected to the power input line of the external power plug. Battery Bus 2: The battery bus 2 is connected to the battery bus 1 via a 100 A fuse and provides power to the ECU bus via an 80 A fuse. It also provides power to the main bus via the power relay which can be controlled by the ELECTRIC MASTER key switch and the ESSENTIAL BUS switch. The ELECTRIC MASTER key switch must be set to ON and the ESSENTIAL BUS switch must be set to OFF to connect the battery bus to the main bus."
            },
            {
              "type": "p",
              "text": "ECU Bus: The ECU bus is connected to the battery bus 2 via an 80 A fuse and provides power for the ECU A and ECU B and their fuel pumps. It is also connected to the power output line of the alternator via a 100 A fuse. It also provides power for charging the ECU backup-battery. The ENGINE MASTER switch must be set to ON to connect ECU A and ECU B to the ECU bus."
            },
            {
              "type": "p",
              "text": "Main Bus: The main bus is connected to the battery bus via the power-relay. It provides power to the consumers directly connected to the main bus and the avionic bus via the avionic master-relay."
            },
            {
              "type": "p",
              "text": "The AVIONIC MASTER switch must be set to ON to connect the main bus to the avionic bus. Under normal operating conditions the main bus is also connected to the essential bus via the essential tie-relay. In the event of an alternator failure the pilot must switch ON the ESSENTIAL BUS switch (refer to Section 3.4 - FAILURES IN THE ELECTRICAL SYSTEM). This separates the main bus from the battery bus and the essential bus and the equipment connected to the main bus no longer has power."
            },
            {
              "type": "p",
              "text": "Essential Bus: Under normal operating conditions the essential bus is connected to the main bus via the essential tie-relay. The essential bus provides power to the consumers connected to the essential bus."
            },
            {
              "type": "p",
              "text": "The AVIONIC MASTER switch must be set to ON to connect the essential bus to the avionic bus. In the event of an alternator failure the pilot must switch ON the ESSENTIAL BUS switch (refer to Section 3.4 - FAILURES IN THE ELECTRICAL SYSTEM). This separates the essential bus from the main bus. The essential bus is then connected to the battery bus 2 which provides battery power for a limited time to the equipment essential for safe flight and landing."
            },
            {
              "type": "h4",
              "text": "(d) Consumers"
            },
            {
              "type": "p",
              "text": "The individual consumers (e.g. radio, electrical fuel transfer pump, position lights, etc.) are connected to the appropriate bus via automatic circuit breakers. Designations and abbreviations used to identify the circuit breakers are explained in Section 1.5 - DEFINITIONS AND ABBREVIATIONS."
            },
            {
              "type": "h4",
              "text": "(e) Voltmeter"
            },
            {
              "type": "p",
              "text": "The voltmeter shows the voltage of the essential bus. Under normal operating conditions the alternator voltage is shown, otherwise it is the voltage of the main battery."
            },
            {
              "type": "h4",
              "text": "(f) Ammeter"
            },
            {
              "type": "p",
              "text": "The ammeter displays the intensity of current which is supplied to the electrical system by the alternator, including the current for battery charging."
            },
            {
              "type": "h4",
              "text": "(g) Landing and Taxi Lights"
            },
            {
              "type": "p",
              "text": "Landing and taxi lights are built into the left wing, and are each operated by means of a switch (LANDING, TAXI) on the row of switches on the instrument panel."
            },
            {
              "type": "h4",
              "text": "(h) Position and Strobe Lights"
            },
            {
              "type": "p",
              "text": "Combined position and strobe lights (anti collision lights) are installed on both wing tips. Each system is operated by a switch (POSITION, STROBE) on the row of switches on the instrument panel."
            },
            {
              "type": "h4",
              "text": "(i) Flood Light"
            },
            {
              "type": "p",
              "text": "A two-dimensional light emitter is mounted above the instrument panel. It illuminates the instrument panel as well as all levers, switches, etc. With a rotary button (FLOOD) in the left-hand section of the instrument panel the flood light is switched on and its brightness is adjusted."
            },
            {
              "type": "h4",
              "text": "(j) Instrument Lighting"
            },
            {
              "type": "p",
              "text": "With a rotary button (INSTRUMENT) in the left-hand section of the instrument panel the internal lighting of the instruments is switched on and its brightness is adjusted."
            },
            {
              "type": "h4",
              "text": "(k) Pitot Heating"
            },
            {
              "type": "p",
              "text": "The Pitot probe, which provides measurement for the Pitot-static system, is electrically heated. The heating is activated with a switch (PITOT) on the row of switches on the instrument panel."
            },
            {
              "type": "p",
              "text": "The temperature is automatically kept constant by means of a thermal switch on the Pitot probe, and as an additional safety measure a thermal fuse is built in. If this thermal fuse is activated, the Pitot heating can no longer be switched on. PITOT FAIL on the G1000 (if installed) or PITOT on the White Wire annunciator panel (if installed) will be displayed, if the thermal fuse or the thermal switch is activated and the PITOT HT is set to ON. The PITOT HT OFF indication on the G1000 (if installed) is on if the Pitot heating is switched off."
            },
            {
              "type": "h3",
              "text": "7.10.2 ENGINE CONTROL UNIT / ECU"
            },
            {
              "type": "h4",
              "text": "(a) Engine Control and Regulation"
            },
            {
              "type": "p",
              "text": "The Electrical ECU is used to control the engine actuator (e.g. fuel injector) according to the engine sensor information. The ECU monitors, controls and regulates all important parameters for engine operation."
            },
            {
              "type": "p",
              "text": "Sensors installed are:"
            },
            {
              "type": "p",
              "text": "- Oil temperature (lubrication system engine) / OIL TEMP (G1000, if installed), OT (MED, if installed)"
            },
            {
              "type": "p",
              "text": "- Oil pressure (lubrication system engine) / OIL PRES (G1000, if installed), OP (MED, if installed)"
            },
            {
              "type": "p",
              "text": "- Coolant temperature / COOLANT TEMP (G1000, if installed), CT (MED, if installed)"
            },
            {
              "type": "p",
              "text": "- Gearbox temperature / GEARBOX (G1000, if installed), GT (MED, if installed)"
            },
            {
              "type": "p",
              "text": "- Camshaft RPM (twice)"
            },
            {
              "type": "p",
              "text": "- Crankshaft RPM (twice)"
            },
            {
              "type": "p",
              "text": "- Fuel pressure in the common rail"
            },
            {
              "type": "p",
              "text": "- Manifold pressure"
            },
            {
              "type": "p",
              "text": "- Manifold air temperature"
            },
            {
              "type": "p",
              "text": "- Ambient air pressure"
            },
            {
              "type": "p",
              "text": "- Propeller governor / oil pressure"
            },
            {
              "type": "p",
              "text": "- POWER lever position (twice)"
            },
            {
              "type": "p",
              "text": "- Voltage"
            },
            {
              "type": "p",
              "text": "- Starter switch signal"
            },
            {
              "type": "p",
              "text": "- Fuel pressure"
            },
            {
              "type": "p",
              "text": "- VOTER switch signal"
            },
            {
              "type": "p",
              "text": "- ECU TEST switch signal In accordance with the received signals and a comparison with the programmed characteristic diagrams the necessary inputs are calculated and transmitted by the following signal lines to the engine:"
            },
            {
              "type": "p",
              "text": "- Signal for propeller governor pressure valve"
            },
            {
              "type": "p",
              "text": "- Signal for the rail-pressure regulation valve"
            },
            {
              "type": "p",
              "text": "- Signal for each of the 4 injection nozzles"
            },
            {
              "type": "p",
              "text": "- Activation of the glow plugs"
            },
            {
              "type": "p",
              "text": "- Signal for the waste gate valve The following alerts are displayed on the PFD of the G1000 (if installed) or White Wire annunciator panel (if installed):"
            },
            {
              "type": "p",
              "text": "- Glow sparks active"
            },
            {
              "type": "p",
              "text": "- Status ECU A"
            },
            {
              "type": "p",
              "text": "- Status ECU B"
            },
            {
              "type": "p",
              "text": "- Low fuel pressure warning (on the G1000, if installed) The Electronic ECU consists of two similar ECUs. A VOTER switch is integrated in the Electronic ECU and proposes (if set to AUTO) an ECU to control the engine regarding the ECU operating hours or - in case of a failure - the ECU with better engine control capability. If the VOTER switch is set to A or B, the EECU is forced to control the engine with ECU A or ECU B, respectively."
            },
            {
              "type": "p",
              "text": "A fault in one of the ECUs is indicated by a caution message (ECU A/B FAIL on the PFD (if G1000 is installed) or ECU A/B on the White Wire annunciator panel (if installed)). Two types of faults are known:"
            },
            {
              "type": "p",
              "text": "- Faults which lead to a latched caution indication"
            },
            {
              "type": "p",
              "text": "- Faults which lead to a non-latched indication In case of a latched caution, unscheduled maintenance is necessary and Austro Engine GmbH has to be be informed."
            },
            {
              "type": "figure",
              "src": "assets/fig_elec.png",
              "text": "7.10 ELECTRICAL SYSTEM SCHEMATIC (Tap to zoom)"
            }
          ],
          "ru": [
            {
              "type": "p",
              "text": "Принципиальная схема системы электроснабжения ENGINE M ASTER ( гл а вн ый выкл юча те ль дви га те л я ) Бло к уп р а вл е н и я двига телем A Ш И Н А Б Л О К FUEL PUM P A ( топ л и вн ый на со с A) Блок управления двигателем A О В К ТО ПЛИВНО М У НАСОСУ А У П Р А ВЛ Е Н И Я К ЭЛЕК ТРО ННО М У БЛО КУ УПРАВЛЕНИЯ ДВИГАТЕЛЕМ FUEL PUM P В ( то п л и вн ый на со с В) Д В И Г А Т Е Л Е М К ТО ПЛИВНО М У НАСО СУ В Блок управления двигателем В Блок управления двигателем В К ЭЛ ЕКТРО ННО М У БЛО К У УПРАВЛЕНИЯ ДВИГАТЕЛЕМ FUEL PUM PS ( то п ли вн ые н а со сы) РЕЗЕРВНАЯ АК КУМ УЛЯТО РНАЯ БАТАРЕЯ БЛО КА УПРАВЛЕНИЯ ДВИГАТЕЛЕМ ГЕНЕРАТ О Р 28 В / 7 0 A РЕГУЛЯТО Р ЛЕВО ГО ГЕНЕРАТ О РА ДАТ ЧИК ТО К А СТАРТЕР С РЕЛЕ СТАРТЕРА START (пуск) PWR PWR (питание) (питание) AVIO NICS BUS ( ши на БРЭО ) Ш и н а ESS TIE ( р е л е ш и н ы M AIN TIE ( осн о вн ая ГЛАВНО Е РЕЛЕ БРЭО Б Р Э О осн о вн ых п о тр е б и тел ей ) ши н а ) ГЛАВНАЯ АКК УМ УЛЯТО РНАЯ БАТАРЕЯ 2 4 В / 1 3 ,6 Ач EL ECTRIC M ASTER O FF ( гла вн ый выкл юча те л ь ( выкл .) OFF ( выкл .) O N электр оо б о рудо ва ни я ) ( вкл .) ON ( вкл .) ESS TIE ( ре л е ши н ы осн о вн ых п о тр е б и тел ей ) РЕЛЕ АЭРО ДРО М НО ГО ПИТАНИЯ ШИНА ОСНО ВНЫХ ПО ТРЕБИТЕЛЕЙ OFF ( выкл .) M ASTER CO NTRO L ( гла вн ый п р ед охр а н и те ль) ON ( вкл .) ВИЛК А РАЗЪ ЕМ А АЭРО ДРО М НО ГО ПИТАНИЯ AVIO NIC M ASTER ( гла вн ый выкл юча те л ь БРЭО )"
            },
            {
              "type": "h3",
              "text": "7.10.1 ОБЩИЕ СВЕДЕНИЯ"
            },
            {
              "type": "p",
              "text": "Самолет DA 40 NG оснащен электросистемой постоянного тока с напряжением 28 В. Систему можно разделить на следующие подсистемы: − Генерирование электроэнергии − Аккумулирование электроэнергии − Распределение электроэнергии − Потребители Генерирование электроэнергии Генерирование электроэнергии осуществляется 70 амперным генератором переменного тока, который установлен на нижней стороне двигателя, слева . Привод генератора осуществляется через плоский ремень."
            },
            {
              "type": "p",
              "text": "Выход генератора подключен к шине блоков управления двигателем через плавкий предохранитель номиналом 100 A, установленный в приборной панели. К выходу генератора также подключен датчик нагрузки тока, обеспечивающий индикацию электропитания подаваемого в электросистему, включая ток на зарядку аккумуляторных батарей."
            },
            {
              "type": "p",
              "text": "При отказе главной аккумуляторной батареи напряжение возбуждения на генератор подается от двух герметичных свинцово-кислотных аккумуляторных батарей (резервных аккумуляторных батарей блоков управления двигателем) напряжением 12В и емкостью 7,2 Ач, которые установлены за первым кольцевым шпангоутом. Подключение резервной аккумуляторной батареи блока управления двигателем к регулятору напряжения генератора осуществляется выключателем ENGINE MASTER (главный выключатель двигателя) через плавкий предохранитель номиналом 10 A."
            },
            {
              "type": "p",
              "text": "Управление генератором: Блок управления генератором имеет полный набор встроенных функций диагностики, которые предупредят эксплуатаната о чрезмерном понижении или повышении напряжения, а также некоторых других отклонениях, сигализацией ALTN FAIL (отказ генератора) на основном пилотажном индикаторе (PFD) комплекса G1000 (на самолетах, оснащенных этим комплексом) или ALTERNATOR (генератор) на панели сигнализации White Wire (на самолетах с этой панелью) Аккумулирование электроэнергии Основным элементом, выполняющим функции хранения электроэнергии, является главная свинцово-кислотная аккумуляторная батарея напряжением 24В и емкостью 13,6 Ач, установленная за шпангоутом крепления багажного отсека. Главная аккумуляторная батарея подключается к аккумуляторной шине через реле аккумуляторной батареи, установленное в релейной распределительтной коробке за шпангоутом крепления багажного отсека."
            },
            {
              "type": "p",
              "text": "Реле батареи управляется ключ-выключателем ELECTRIC MASTER (главный выключатель электрооборудования), расположенным в центральной части приборной панели. Кроме того, за первым кольцевым шпангоутом установлены две герметичные свинцовокислотные аккумуляторные батареи (резервные аккумуляторные батареи блока управления двигателем) напряжением 12В и емкостью 7,2 Ач, которые используются в качестве резервного источника электропитания блока управления двигателем (только блок управления B)."
            },
            {
              "type": "p",
              "text": "При нормальной работе зарядка резервных аккумуляторных батарей блока управления двигателем происходит от шины блоков управления двигателем. В случае отказа генератора и разрядки главной аккумуляторной батареи напряжение питания подается на блок управления двигателем B от резервных аккумуляторных батарей блока управления двигателем автоматически через плавкий предохранитель номиналом 32 A. Это позволяет предотвратить останов двигателя в маловероятном случае отказа генератора и полной разрядки главной аккумуляторной батареи."
            },
            {
              "type": "p",
              "text": "Кроме того, в модели, сертифицированной для ППП, в качестве резервного источника питания резервного указателя пространственного положения (авиагоризонта) и заливающего освещения установлена неперезаряжаемая батарея сухого типа. При установке выключателя EMERGENCY (аварийный выключатель) в положение ON (вкл.) на эти два потребителя в течение 1 часа подается электропитание независимо от всех других электропотребителей. Исправность данной батареи необходимо проверять в ходе осмотра через каждые 100 часов. Батарею необходимо заменять каждые 2 года или каждый раз после использования (если нарушена пломба на выключателе)."
            },
            {
              "type": "p",
              "text": "Распределение электроэнергии Распределение электроэнергии осуществляется через аварийную аккумуляторную шину, аккумуляторные шины 1 и 2, шину блоков управления двигателем, основную шину, шину основных потребителей и шину БРЭО."
            },
            {
              "type": "p",
              "text": "Аварийная аккумуляторная шина: Аварийная аккумуляторная шина подключена непосредственно к главной аккумуляторной батарее, которая установлена в релейной распределительной коробке, отсоединение шины от главной аккумуляторной батареи невозможно. Аварийная аккумуляторная шина используется для подачи питания на разъем дополнительного питания и аварийный маяк, которые защищены своими плавкими предохранителями."
            },
            {
              "type": "p",
              "text": "Аккумуляторная шина 1: Аккумуляторная шина 1 подключена к главной аккумуляторной батарее через реле аккумуляторной батареи, управление которым осуществляется при помощи ключвыключателя ELECTRIC MASTER (главный выключатель электрооборудования)."
            },
            {
              "type": "p",
              "text": "Аккумуляторная шина 1 используется для подачи электропитания на аккумуляторную шину 2 и при токах большой нгагрузки и на стаpтеp. Аккумуляторная шина 1 также подключена к входу на разъеме аэродромного источника питания."
            },
            {
              "type": "p",
              "text": "Аккумуляторная шина 2: Аккумуляторная шина 2 подключена к аккумуляторной шине 1 через плавкий предохранитель номиналом 100 A и обеспечивает подачу питания на шину блоков управления двигателем через плавкий предохранитель номиналом 80 A, а также на основную шину через реле питания, которое приводится в действие ключ-выключателем ELECTRIC MASTER (главный выключатель электрооборудования) и выключателем ESSENTIAL BUS (выключатель шины основных потребителей). Для подключения аккумуляторной шины к основной шине ключ-выключатель ELECTRIC MASTER (главный выключатель электрооборудования) должен быть установлен в положение ON (вкл.), а выключатель ESSENTIAL BUS (выключатель шины основных потребителей) — в положение OFF (выкл.)."
            },
            {
              "type": "p",
              "text": "Шина блоков управления двигателем: Шина блоков управления двигателем подключена к аккумуляторной шине 2 через плавкий предохранитель номиналом 80 A и обеспечивает подачу питания на блоки управления двигателем A и B и соответствующие топливные насосы. Эта шина также подключена к выходу генератора через плавкий предохранитель номиналом 100 A и обеспечивает подачу тока на зарядку резервной аккумуляторной батареи блока управления двигателем. Для подключения блоков управления двигателем A и B к шине блоков управления двигателем выключатель ENGINE MASTER (главный выключатель двигателя) должен быть установлен в положение ON (вкл.)."
            },
            {
              "type": "p",
              "text": "Основная шина: Основная шина подключается к аккумуляторной шине через реле питания. Она используется для подачи электропитания потребителям, непосредственно подключенным к основной шине, а также к шине БРЭО через реле, управляемое главным выключателем БРЭО. Для подключения основной шины к шине БРЭО выключатель AVIONIC MASTER (главный выключатель БРЭО) должен быть установлен в положение ON (вкл.). При нормальной работе основная шина также подключена к шине основных потребителей через реле объединения с шиной основных потребителей. В случае отказа генератора пилот должен установить выключатель ESSENTIAL BUS (выключатель шины основных потребителей) в положение ON (вкл.) (см. раздел 3.4 — «ОТКАЗЫ ЭЛЕКТРОСИСТЕМЫ»)."
            },
            {
              "type": "p",
              "text": "При этом основная шина отключается от аккумуляторной шины и шины основных потребителей и электропитание на оборудование, подключенное к основной шине, не подается."
            },
            {
              "type": "p",
              "text": "Шина основных потребителей: При нормальной работе шина основных потребителей подключена к основной шине через реле шины основных потребителей. Шина основных потребителей используется для подачи электропитания потребителям, подключенным к шине основных потребителей. Для подключения шины основных потребителей к шине БРЭО выключатель AVIONIC MASTER (главный выключатель БРЭО) должен быть установлен в положение ON (вкл.). В случае отказа генератора пилот должен установить выключатель ESSENTIAL BUS (выключатель шины основных потребителей) в положение ON (вкл.) (см. раздел 3.4 — «ОТКАЗЫ ЭЛЕКТРОСИСТЕМЫ»). При этом шина основных потребителей отключается от основной шины и подключается к аккумуляторной шине 2, которая в течение ограниченного времени обеспечивает подачу электропитания от батареи на оборудование, необходимое для обеспечения безопасного полета и посадки."
            },
            {
              "type": "p",
              "text": "Потребители Отдельные потребители (радиостанция, электрический насос перекачки топлива, аэронавигационные огни и т.д.) подключаются к соответствующей шине через автоматы защиты (предохранители)."
            },
            {
              "type": "p",
              "text": "Обозначения и расшифровка сокращений предохранителей приводятся в разделе 1.5 — «ОПРЕДЕЛЕНИЯ И АББРЕВИАТУРЫ». Вольтметр Вольтметр обеспечивает индикацию напряжения на шине основных потребителей. В штатных рабочих условиях отображается напряжение генератора, в других условиях — напряжение главной аккумуляторной батареи."
            },
            {
              "type": "p",
              "text": "Амперметр Амперметр обеспечивает индикацию силы тока, подаваемого в электросистему генератором переменного тока, включая ток на зарядку аккумуляторных батарей. Посадочная и рулежная фары Посадочная и рулежная фары установлены в левом крыле. Для включения фар используются соответствующие выключатели (LANDING (посадочная фара), TAXI (рулежная фара)), расположенные в ряду выключателей на главной приборной панели."
            },
            {
              "type": "p",
              "text": "Аэронавигационные и проблесковые огни Комбинированные аэронавигационные и проблесковые огни (проблесковые световые маяки) установлены на консолях обоих крыльев. Для включения каждой системы используется соответствующий выключатель (POSITION (аэронавигационные огни), STROBE (проблесковые огни)), расположенные в ряду выключателей на приборной панели."
            },
            {
              "type": "p",
              "text": "Заливающее освещение Двухмерный светоизлучатель установлен над приборной панелью. Он обеспечивает освещение главной приборной панели, а также всех рычагов, переключателей и т.д. Для включения заливающего освещения и регулировки его яркости используется поворотная кнопка (FLOOD (заливающее освещение)) в левой части главной приборной панели."
            },
            {
              "type": "p",
              "text": "Подсветка приборов Для включения внутренней подсветки приборов и регулировки ее яркости используется поворотная кнопка (INSTRUMENT (подсветка приборов)) в левой части главной приборной панели."
            },
            {
              "type": "p",
              "text": "Обогрев приемника полного давления Приемник полного давления, обеспечивающий измерение давления для системы статики и динамики , оснащен электрообогревом. Для включения обогрева используется выключатель (PITOT (обогрев ППД)), расположенный в ряду выключателей на приборной доске. Поддержание постоянной температуры осуществляется при помощи термореле на приемнике полного давления. Для дополнительной защиты предусмотрен также встроенный плавкий предохранитель. При срабатывании плавкого предохранителя включение обогрева ППД невозможно; в этом случае при установке выключателя PITOT HT (обогрев ППД) в положение ON (вкл.) загорается сигнализатор PITOT FAIL (отказ обогрева ППД) на экране индикатора комплекса G1000 (для самолетов, оснащенных этим комплексом) или PITOT (отказ обогрева ППД) на панели сигнализации White Wire (для самолетов с этой панелью). Если обогрев ППД выключен, на экране индикатора комплекса G1000 (для самолетов, оснащенных этим комплексом) горит сигнализатор PITOT HT OFF (обогрев ППД выключен)."
            },
            {
              "type": "h3",
              "text": "7.10.2 БЛОК УПРАВЛЕНИЯ и РЕГУЛИРОВКИ ДВИГАТЕЛЕМ (ECU)"
            },
            {
              "type": "p",
              "text": "Управление и регулировка двигателем Управление и регулировка двигателем осуществляется исполнительными устройствами двигателя (например, топливными форсунками) в соответствии с сигналами, поступающими от датчиков двигателя. Блок управления двигателем осуществляет контроль всех важных параметров работы двигателя, управление ими и их регулировку."
            },
            {
              "type": "p",
              "text": "Установлены следующие датчики: Температуры масла (маслосистема двигателя) Давления масла (маслосистема двигателя) / OIL TEMP (на экране индикатора комплекса G1000 для самолетов, оснащенных этим комплексом), OT (на основном индикаторе параметров двигателя (MED) для самолетов, оснащенных этим индикатором) / OIL PRES (на экране индикатора комплекса G1000 для самолетов, оснащенных этим комплексом), OP (на основном индикаторе параметров двигателя (MED) для самолетов, оснащенных этим индикатором) Температуры охлаждающей жидкости / COOLANT TEMP (на экране индикатора комплекса G1000 для самолетов, оснащенных этим комплексом), CT (на основном индикаторе параметров двигателя (МED) для самолетов, оснащенных этим индикатором) Температуры редуктора / GEARBOX (на экране индикатора комплекса G1000 для самолетов, оснащенных этим комплексом), GT (на основном индикаторе параметров двигателя (МED) для самолетов, оснащенных этим индикатором) − Частоты вращения распределительного вала (2 шт.) − Частоты вращения коленчатого вала (2 шт.) − Давления топлива в общем топливном распределителе − Давления в коллекторе − Температуры воздуха в коллекторе − Давления окружающего воздуха − Регулятора оборотов воздушного винта / давления масла − Положения рычага управления двигателем (2 шт.) − Напряжения − Сигнала запуска стартера − Давления топлива − Сигнала включения переключателя VOTER (переключатель блоков управления двигателем) − Сигнала проверки блока управления двигателем На основании поступивших сигналов и сравнения с запрограммированными характеристиками схем производится расчет необходимых входных сигналов, которые подаются на двигатель через следующие линии управляющих сигналов: − Сигнал на клапан регулятора оборотов воздушного винта − Сигнал на клапан регулирования давления в общем топливном распределителе − Сигналы на каждую из 4 форсунок системы впрыска − Включение свечей накаливания − Сигнал на регулятор давления наддува На основном пилотажном индикаторе (PFD) комплекса G1000 (для самолетов, оснащенных этим комплексом) или панели сигнализации (для самолетов с этой панелью) отображаются следующие сигналы: − Включение свечей накаливания − Состояние блока управления двигателем A − Состояние блока управления двигателем B − Аварийный сигнализатор низкого давления топлива на экране индикатора комплекса G1000 (для самолетов, оснащенных этим комплексом) Электронный блок управления двигателем состоит из двух одинаковых блоков управления двигателем. Электронный блок управления двигателем имеет встроенный переключатель VOTER (переключатель блоков управления двигателем), который предлагает переключение управления двигателем на блок, имеющий меньшую наработку или (в случае отказа) обладающий лучшими рабочими характеристиками."
            },
            {
              "type": "p",
              "text": "При неисправности одного из блоков управления двигателем загорается предупредительный сигнализатор (ECU A/B FAIL (неисправность блока управления A/B) на основном пилотажном индикаторе (PFD) (для самолетов, оснащенных комплексом G1000) или ECU A/B (блок управления A/B) на панели сигнализации White Wire (для самолетов с этой панелью)). После загорания предупредительного сигнализатора ECU A/B FAIL (неисправность блока управления A/B) или сообщения – предупреждения ECU A /B (блок управления A/B) необходимо выполнить обслуживание двигателя."
            },
            {
              "type": "figure",
              "src": "assets/fig_elec.png",
              "text": "7.10 ПРИНЦИПИАЛЬНАЯ ЭЛЕКТРИЧЕСКАЯ СХЕМА (нажмите для увеличения)"
            }
          ]
        }
      },
      {
        "id": "du-7-11",
        "code": "7.11",
        "title": {
          "en": "PITOT-STATIC SYSTEM",
          "ru": "СИСТЕМА ИЗМЕРЕНИЯ ВОЗДУШНОГО ДАВЛЕНИЯ"
        },
        "rev": "REV 4 (EN) / РЕД. 3 (RU)",
        "bilingualBlocks": {
          "en": [
            {
              "type": "p",
              "text": "Total pressure is measured at the leading edge of a Pitot probe under the left wing. Static pressure is measured through the static ports in the rear fuselage. To protect against dirt and condensation there are filters in the system. The Pitot probe is electrically heated."
            },
            {
              "type": "p",
              "text": "With the alternate static valve, the static pressure in the cabin can be used as static pressure source in the event of a failure of the static system."
            }
          ],
          "ru": [
            {
              "type": "p",
              "text": "Полное давление измеряется на передней кромке приемника полного давления (ППД), расположенного под левым крылом. Измерение статического давления обеспечивается приемниками статического давления в хвостовой части фюзеляжа. Для защиты от грязи и конденсации в системе установлены фильтры. Приемник полного давления оснащен электрообогревом."
            },
            {
              "type": "p",
              "text": "Кран резервного приемника статического давления позволяет переключиться на использование статического давления кабины в качестве источника статического давления в случае отказа системы измерения статического давления."
            }
          ]
        }
      },
      {
        "id": "du-7-12",
        "code": "7.12",
        "title": {
          "en": "STALL WARNING SYSTEM",
          "ru": "СИСТЕМА ПРЕДУПРЕЖДЕНИЯ О СВАЛИВАНИИ"
        },
        "rev": "REV 4 (EN) / РЕД. 3 (RU)",
        "bilingualBlocks": {
          "en": [
            {
              "type": "p",
              "text": "If airspeed drops, suction on the orifice at the leading edge of the left wing will increase until the stall warning horn, located in the instrument panel, will sound. The horn becomes progressively louder the closer one gets to stalling speed. Suction at an orifice on the left wing leading edge activates the horn via a hose. The orifice for the stall warning in the left wing is marked by a red ring."
            }
          ],
          "ru": [
            {
              "type": "p",
              "text": "При снижении воздушной скорости увеличивается объем воздуха, всасываемого через отверстие в передней кромке левого крыла, и устройство звуковой сигнализации предупреждения о приближении к режиму сваливания, расположенное в главной приборной панели, подает звуковой сигнал. При приближении к скорости сваливания громкость сигнала становится все больше и больше. Отверстие в передней кромке левого крыла соединяется с устройством звуковой сигнализации при помощи шланга. Отверстие системы предупреждения о приближении к режиму сваливания в левом крыле маркировано красным кругом."
            }
          ]
        }
      }
    ]
  },
  {
    "id": "ch8",
    "code": "CH 8",
    "title": {
      "en": "CHAPTER 8 — HANDLING, CARE & MAINTENANCE",
      "ru": "РАЗДЕЛ 8 — ОБСЛУЖИВАНИЕ И УХОД ЗА САМОЛЁТОМ"
    },
    "status": "NON-APPROVED",
    "units": [
      {
        "id": "du-8-1",
        "code": "8.1",
        "title": {
          "en": "INTRODUCTION",
          "ru": "ВВЕДЕНИЕ"
        },
        "rev": "REV 4 (EN) / РЕД. 3 (RU)",
        "bilingualBlocks": {
          "en": [
            {
              "type": "p",
              "text": "Chapter 8 contains the manufacturer's recommended procedures for proper ground handling and servicing of the airplane. The Airplane Maintenance Manual (Doc. No. 6.02.15) lists certain inspection and maintenance requirements which must be followed if the airplane is to retain a new plane performance and reliability."
            }
          ],
          "ru": [
            {
              "type": "p",
              "text": "В разделе 8 приводятся рекомендованные изготовителем процедуры наземного и технического обслуживания самолета. В Руководстве по технической эксплуатации самолета (док. № 6.02.15) перечисляются все т ребования к осмотрам и техническому обслуживанию самолета, вы полнение которых необходимо д ля обеспечения исходных летно-технических характеристик и надежности самолета."
            }
          ]
        }
      },
      {
        "id": "du-8-2",
        "code": "8.2",
        "title": {
          "en": "AIRPLANE INSPECTION INTERVALS",
          "ru": "ПЕРИОДИЧНОСТЬ ПРОВЕДЕНИЯ ОСМОТРОВ"
        },
        "rev": "REV 4 (EN) / РЕД. 3 (RU)",
        "bilingualBlocks": {
          "en": [
            {
              "type": "p",
              "text": "Inspections are scheduled every 100, 200 and 1000 hours. Independent of the flight hours an annual inspection must be performed every year. The respective inspection checklists are prescribed in the Airplane Maintenance Manual, Chapter 05."
            },
            {
              "type": "p",
              "text": "For maintenance work on engine and propeller, the currently effective Operator's Manuals, Service Instructions, Service Letters and Service Bulletins of Austro Engine and mt-Propeller must be followed. For airframe inspections, the currently effective checklists/manuals, Service Bulletins and Service Instructions of the manufacturer must be followed."
            },
            {
              "type": "caution",
              "text": "Unscheduled maintenance checks are required after:"
            },
            {
              "type": "p",
              "text": "- Hard landings"
            },
            {
              "type": "p",
              "text": "- Propeller strike"
            },
            {
              "type": "p",
              "text": "- Engine fire"
            },
            {
              "type": "p",
              "text": "- Lightning strike"
            },
            {
              "type": "p",
              "text": "- Occurrence of other malfunctions and damage Unscheduled maintenance checks are described in the Airplane Maintenance Manual (Doc. No. 6.02.15; Section 05-50)."
            }
          ],
          "ru": [
            {
              "type": "p",
              "text": "Плановые осмотры проводятся каждые 100, 200 и 1000 часов. Годовые осмотры должны проводиться каждый год вне зависимости от фактического числа летных часов. Контрольная карта с перечнем работ при осмотре приводится в Руководстве по технической эксплуатации самолета (раздел 05)."
            },
            {
              "type": "p",
              "text": "При проведении технического обслуживания двигателя и воздушного винта необходимо выполнять требования действующих Руководств по эксплуатации, Инструкций по обслуживанию, Эксплуатационных циркуляров и Эксплуатационных бюллетеней компаний Austro Engine и mt-Propeller. При осмотре планера необходимо выполнять требования изданных изготовителем действующих технологических карт / руководств, Эксплуатационных бюллетеней и Инструкций по обслуживанию изготовителя."
            },
            {
              "type": "caution",
              "text": "Внеплановое техническое обслуживание проводится в следующих случаях: − После грубой посадки − После удара воздушным винтом − После пожара двигателя − После удара молнии − При возникновении других неисправностей и повреждений Внеплановоые формы технического обслуживания описаны в Руководстве по технической эксплуатации самолета (док. № 6.02.15; раздел 05-50)."
            }
          ]
        }
      },
      {
        "id": "du-8-3",
        "code": "8.3",
        "title": {
          "en": "AIRPLANE ALTERATIONS OR REPAIRS",
          "ru": "МОДИФИКАЦИЯ И РЕМОНТ САМОЛЕТА"
        },
        "rev": "REV 4 (EN) / РЕД. 3 (RU)",
        "bilingualBlocks": {
          "en": [
            {
              "type": "p",
              "text": "Alterations or repairs of the airplane may be carried out only according to the Airplane Maintenance Manual, Doc. No. 6.02.15, and only by authorized personnel."
            }
          ],
          "ru": [
            {
              "type": "p",
              "text": "Модификация и ремонт самолета могут проводиться только в соответствии с Руководством по технической эксплуатации самолета (док. № 6.02.15) и только уполномоченным персоналом."
            }
          ]
        }
      },
      {
        "id": "du-8-4",
        "code": "8.4",
        "title": {
          "en": "GROUND HANDLING / ROAD TRANSPORT",
          "ru": "ОБСЛУЖИВАНИЕ НА ЗЕМЛЕ / ТРАНСПОРТИРОВКА"
        },
        "rev": "REV 4 (EN) / РЕД. 3 (RU)",
        "bilingualBlocks": {
          "en": [
            {
              "type": "h3",
              "text": "8.4.1 GROUND HANDLING WITHOUT TOW BAR"
            },
            {
              "type": "p",
              "text": "During forward traversing the nose wheel will follow the movement of the airplane. A change in direction is achieved by pulling on the propeller near the spinner. To traverse in the rear direction, the tail section of the airplane should be pushed down until the nose wheel is clear of the ground. This method can also be used to turn the airplane around its main landing gear."
            },
            {
              "type": "h3",
              "text": "8.4.2  GROUND HANDLING WITH TOW BAR"
            },
            {
              "type": "p",
              "text": "For pushing or pulling the airplane on the ground, it is recommended to use the tow bar which is available from the manufacturer. The tow bar is bent apart and engaged in the appropriate holes in the nose wheel fairing as shown on the picture below. The arresting knob must be fully engaged."
            },
            {
              "type": "warning",
              "text": "The tow bar must be removed before starting the engine."
            },
            {
              "type": "caution",
              "text": "The tow bar may only be used for moving the airplane on the ground by hand. After moving the airplane, the tow bar must be removed."
            },
            {
              "type": "note",
              "text": "When moving the airplane rearward, the tow bar must be held firmly to prevent abrupt sideward deflection of the nose wheel."
            },
            {
              "type": "h3",
              "text": "8.4.3 PARKING"
            },
            {
              "type": "p",
              "text": "For short term parking, the airplane must be positioned into the wind, the parking brake must be engaged and the wing flaps must be in the retracted position. For extended and unattended parking, as well as in unpredictable wind conditions, the airplane must be anchored to the ground or placed in a hangar. Parking in a hangar is recommended."
            },
            {
              "type": "p",
              "text": "For outdoor parking at temperatures below -38°C (-36.4°F), make sure that the distilled water / coolant mixture ratio is 40 % to 60 %. If the battery heating system (OÄM 40-363) is installed, it is recommended to use the system when the airplane is parked at outside air temperature below 0°C (32°F)."
            },
            {
              "type": "h4",
              "text": "(a) Control Surfaces Gust Lock"
            },
            {
              "type": "p",
              "text": "The manufacturer offers a control surfaces gust lock which can be used to block the primary controls. It is recommended that the control surfaces gust lock be used when parking outdoors, because otherwise the control surfaces can hit the stops in strong tail wind. This can lead to excessive wear or damage."
            },
            {
              "type": "warning",
              "text": "The control surfaces gust lock must be removed before flight. The control surfaces gust lock is installed as follows: 1. Move the rudder pedals fully rearward. 2. Engage the control surfaces gust lock with the pedals. 3. Engage the stick, wrap straps around stick once. 4. Attach the locks and tighten the straps. For removal, reverse the sequence."
            },
            {
              "type": "note",
              "text": "It is recommended to cover the canopy when the airplane is parked outdoors, in direct sunlight, at outside air temperatures above +25 °C (77 °F), in order to prevent excessive heat generation within the instrument panel which can cause damage to the equipment. Such a canopy cover is available from Diamond Aircraft Industries, P/N: S_30172."
            },
            {
              "type": "note",
              "text": "The figures below show the gust lock installed in a DA 42. Nevertheless, the figures are an accurate depiction of the gust lock installed correctly in the DA 40 NG."
            },
            {
              "type": "h3",
              "text": "8.4.4 MOORING"
            },
            {
              "type": "p",
              "text": "The tail fin of the airplane has a hole which can be used to tie-down the airplane to the ground. Also on each wing near the wing tip, an eyelet with a metric M8 thread can be installed and used as tie-down points."
            },
            {
              "type": "h3",
              "text": "8.4.5 JACKING"
            },
            {
              "type": "p",
              "text": "The airplane can be jacked at the two jackpoints located on the lower side of the fuselage's LH and RH root ribs as well as at the tail fin."
            },
            {
              "type": "h3",
              "text": "8.4.6 ALIGNMENT"
            },
            {
              "type": "p",
              "text": "For alignment push down on the tail section at the fuselage/vertical tail junction until the nose wheel is clear of the ground. With the nose wheel free, the airplane can be turned around the main landing gear. After turning the airplane into the correct position, release the tail section slowly until the nose wheel is back on the ground."
            },
            {
              "type": "h3",
              "text": "8.4.7 ROAD TRANSPORT"
            },
            {
              "type": "p",
              "text": "For transporting the airplane on the road it is recommended that an open trailer be used. All airplane components must be stored on a cushioned surface and secured to avoid any movement during transportation."
            },
            {
              "type": "note",
              "text": "Disassembling and assembling of the airplane is a maintenance action and requires qualified personnel."
            },
            {
              "type": "h4",
              "text": "(a) Fuselage:"
            },
            {
              "type": "p",
              "text": "The fuselage should stand on the main and nose landing gear. It must be ensured that the fuselage will not move in any direction. Furthermore, it must be ensured that the propeller has sufficient clearance so that it cannot be damaged due to fuselage movement during transportation."
            },
            {
              "type": "h4",
              "text": "(b) Wings:"
            },
            {
              "type": "p",
              "text": "For transportation, both wings must be removed from the fuselage. To avoid any damage, the wings must be stored in an upright position on the leading edge with the root rib area positioned on an upholstered profiled surface with a width of at least 400 mm (1.3 ft). The outside wing area (approximately 3 m (10 ft) from the root rib area) must be placed on an upholstered profiled surface with a minimum width of 300 mm (1 ft)."
            },
            {
              "type": "p",
              "text": "The wings must be secured to avoid any sliding movement to the rear."
            },
            {
              "type": "h4",
              "text": "(c) Horizontal Stabilizer:"
            },
            {
              "type": "p",
              "text": "The horizontal stabilizer must be stored flat on the trailer and secured with straps, or in an upright position sitting on the leading edge on a profiled surface. All storing surfaces must be upholstered with felt or cellular rubber."
            }
          ],
          "ru": [
            {
              "type": "h3",
              "text": "8.4.1 ОБСЛУЖИВАНИЕ НА ЗЕМЛЕ БЕЗ ИСПОЛЬЗОВАНИЯ БУКСИРОВОЧНОГО ВОДИЛА"
            },
            {
              "type": "p",
              "text": "При движении вперед колесо передней опоры шасси движется по направлению движения самолета. Для изменения направления движения потянуть самолет, за воздушноый винт рядом с коком. Для перемещения в заднем направлении нажать на хвостовую часть фюзеляжа самолета так, чтобы колесо передней опоры шасси оторвалось от земли. Этот же способ можно использовать для поворота самолета на основных опорах шасси."
            },
            {
              "type": "h3",
              "text": "8.4.2 НАЗЕМНОЕ ОБСЛУЖИВАНИЕ С ИСПОЛЬЗОВАНИЕМ  БУКСИРОВОЧНОГО  ВОДИЛА"
            },
            {
              "type": "p",
              "text": "Для перемещения самолета на земле рекомендуется использовать буксировочное водило, которое имеется у изготовителя. Концы буксиpовочного водила разводятся в стороны и устанавливаются в предназначенные для этого отверстия в обтекателе передней опоры шасси, как показано на рисунке ниже. Стопор должен надежно зафиксироваться."
            },
            {
              "type": "warning",
              "text": "Перед запуском двигателя буксировочное водило необходимо демонтировать."
            },
            {
              "type": "caution",
              "text": "Буксиpовочное водило разрешается использовать только для перемещения самолета вручную. После перемещения самолета буксировочное водило необходимо демонтировать."
            },
            {
              "type": "note",
              "text": "При буксировке самолета назад необходимо надежно удерживать водило, чтобы не допустить резкого отклонения колеса передней опоры шасси вбок."
            },
            {
              "type": "h3",
              "text": "8.4.3 ПОСТАНОВКА НА СТОЯНКУ"
            },
            {
              "type": "p",
              "text": "Для кратковременной стоянки необходимо развернуть самолет против ветра, установить стояночный тормоз и убрать закрылки. Для продолжительной стоянки или оставляя самолет без присмотра, а также в условиях непрогнозируемого направления и скорости ветра самолет необходимо пришвартовать, прикрепив его к земле, или поставить в ангар."
            },
            {
              "type": "p",
              "text": "Рекомендуется оставлять самолет для стоянки в ангаре. Оставляя самолет на стоянку под открытым небом пр и температуре наружного воздуха"
            },
            {
              "type": "p",
              "text": "-38oC (-36.4F), убедитесь, что соотношение дистиллированной воды и охлаждающего агента в смеси составляет 40% на 60%. Если установлена система обогрева аккумулятора (по OÄМ 40-363), рекомендуется пользоваться этой системой при стоянке самолета в условиях температуры наружного воздуха ниже 0оС (32оF) Стопор рулевых поверхностей У изготовителя можно приобрести стопор рулевых поверхностей, который можно использовать для стопорения рычагов управления основных рулей. Стопор рулевых поверхностей рекомендуется устанавливать при парковке самолета на стоянке вне ангара, в противном случае при сильном попутном ветре рулевые поверхности могут биться об упоры. Это может привести к чрезмерному износу или повреждению поверхностей."
            },
            {
              "type": "warning",
              "text": "Перед полетом стопор рулевых поверхностей необходимо убрать. Порядок установки стопора рулевых поверхностей: 1. Отжать педали управления рулем направления в крайнее заднее положение. 2. Зацепить стопор рулевых поверхностей педалями. 3. Зацепить ручку управления, один раз обмотав вокруг нее ремни. 4. Застегнуть замки и затянуть ремни. Демонтаж стопора производится в обратном порядке."
            },
            {
              "type": "note",
              "text": "При постановке самолета на стоянку вне ангара, под прямыми солнечными лучами и при температуре наружного воздуха более +25°C (77°F) рекомендуется зачехлять фонарь самолета для предотвращения чрезмерного нагрева приборной доски, который может привести к выходу оборудования из строя. Чехол для фонаря можно заказать в компании Diamond Aircra ft Industries ( ч/н: S_30172)."
            },
            {
              "type": "h3",
              "text": "8.4.4 ШВАРТОВКА"
            },
            {
              "type": "p",
              "text": "В киле хвоста самолета предусмотрено отверстие, которое можно использовать для швартовки самолета на земле. Кроме того, на каждом крыле рядом с консолью возможна установка специальных проушин с метрической резьбой М8, которые могут использоваться в качестве узлов швартовки."
            },
            {
              "type": "h3",
              "text": "8.4.5 ВЫВЕШИВАНИЕ САМОЛЕТА"
            },
            {
              "type": "p",
              "text": "Самолет вывешивают на 2 подъемниках, устанавливаемых в двух точках крепления, на нижней стороне корневых нервюр центроплана, слева и справа, а также на киле."
            },
            {
              "type": "h3",
              "text": "8.4.6 РАЗВОРОТ НА СТОЯНКЕ"
            },
            {
              "type": "p",
              "text": "Для разворота самолета нажать в точке соединения хвостовой части фюзеляжа с килем так, чтобы колесо передней опоры шасси оторвалось от земли. После этого самолет можно повернуть на основных опорах шасси. После разворота самолета в нужное положение медленно отпустить хвостовую часть фюзеляжа, чтобы колесо передней опоры шасси опустилось на землю."
            },
            {
              "type": "h3",
              "text": "8.4.7 ТРАНСПОРТИРОВКА ПО ЗЕМЛЕ"
            },
            {
              "type": "p",
              "text": "Для транспортировки самолета по земле рекомендуется использовать открытый трейлер. Все части самолета необходимо уложить на мягкую поверхность и надежно зафиксировать во избежание их смещения при транспортировке."
            },
            {
              "type": "note",
              "text": "Операции монтажа /демонтажа самолета относятся к техническому обслуживанию и должны выполняться квалифицированным персоналом. 1. Фюзеляж: Фюзеляж должен опираться на основные опоры и переднюю опору шасси. Необходимо исключить смещение фюзеляжа в каком-либо направлении. Необходимо также оставить зазор достаточной ширины вокруг воздушного винта, чтобы не допустить повреждения воздушного винта в случае смещения фюзеляжа в ходе транспортировки."
            },
            {
              "type": "p",
              "text": "2. Крылья: Для транспортировки оба крыла необходимо демонтировать с фюзеляжа. Во избежание повреждения крылья необходимо транспортировать в вертикальном положении, установив их на переднюю кромку и разместив корневую нервюру на профиль, оббитый мягким материалом, шириной не менее 400 мм (1,3 фута). Внешнюю часть крыла (на расстоянии приблизительно 3 м (10 футов) от области корневой нервюры) необходимо разместить на профиль, оббитый мягким материалом, шириной не менее 300 мм (1 фут)."
            },
            {
              "type": "p",
              "text": "Крылья необходимо надежно закрепить для предотвращения их смещения назад. 3. Стабилизатор: Стабилизатор необходимо перевозить на трейлере в горизонтальном положении, закрепив его ремнями, или в вертикальном положении, установив его на переднюю кромку в профиле. Все поверхности должны быть оббиты войлоком или пористой резиной."
            }
          ]
        }
      },
      {
        "id": "du-8-5",
        "code": "8.5",
        "title": {
          "en": "CLEANING AND CARE",
          "ru": "МОЙКА И УХОД ЗА МАТЕРИАЛАМИ"
        },
        "rev": "REV 4 (EN) / РЕД. 3 (RU)",
        "bilingualBlocks": {
          "en": [
            {
              "type": "caution",
              "text": "The airplane must be kept clean. The bright surface prevents the structure from overheating."
            },
            {
              "type": "caution",
              "text": "Excessive dirt deteriorates the flight performance."
            },
            {
              "type": "h3",
              "text": "8.5.1  PAINTED SURFACES"
            },
            {
              "type": "p",
              "text": "The entire surface of the airplane is painted with a white weatherproof two component paint. Nevertheless, it is recommended to protect the airplane against moisture and dampness. It is also recommended not to store the airplane outside for long periods of time."
            },
            {
              "type": "p",
              "text": "Dirt, insects, etc. can be removed with water alone and if necessary with a mild detergent. An automotive paint cleaner can be used for stubborn spots. For best results, clean the airplane after the day's flying is ended, so that the dirt will not become ingrained."
            },
            {
              "type": "p",
              "text": "Oil stains, exhaust stains, etc. on the lower fuselage skin can be removed with a cold detergent. Before starting, ensure that the detergent does not affect the surface finish. Use commercial automotive preservatives without silicone additives to conserve the paint finish."
            },
            {
              "type": "h3",
              "text": "8.5.2  CANOPY AND REAR DOOR"
            },
            {
              "type": "p",
              "text": "The canopy and rear door should be cleaned with Plexiklar or any other acrylic glass detergent if available; otherwise use lukewarm water. Final cleaning should be done with a clean piece of chamois-leather or soft cloth. Never rub or polish dry acrylic glass."
            },
            {
              "type": "h3",
              "text": "8.5.3 PROPELLER"
            },
            {
              "type": "p",
              "text": "Damage and malfunctions during operation must be inspected by authorized personnel."
            },
            {
              "type": "h4",
              "text": "(a) Surface"
            },
            {
              "type": "p",
              "text": "The manufacturer uses PU paint or acrylic paint which is resistant to almost any solvent. The blades may be treated with commercial automotive cleaning agents or preservatives. The penetration of moisture into the wooden core must be avoided by all means. Should doubts arise, an appropriately rated inspector must be consulted."
            },
            {
              "type": "h3",
              "text": "8.5.4 ENGINE"
            },
            {
              "type": "p",
              "text": "Engine cleaning is part of the scheduled inspections."
            },
            {
              "type": "h3",
              "text": "8.5.5 INTERIOR SURFACES"
            },
            {
              "type": "p",
              "text": "The interior should be cleaned using a vacuum cleaner. All loose items (pens, bags etc.) should be removed or properly stored and secured. All instruments can be cleaned using a soft dry cloth, plastic surfaces should be wiped clean using a damp cloth without any cleaning agents."
            },
            {
              "type": "caution",
              "text": "The PFD and MFD displays use a lens coated with a special antireflective coating that is very sensitive to skin oils, waxes, and abrasive cleaners. CLEANERS CONTAINING AMMONIA WILL HARM THE ANTI-REFLECTIVE COATING. It is very important to clean the lens using a clean, lint-free cloth and an eyeglass lens cleaner that is specified as safe for anti-reflective coatings."
            }
          ],
          "ru": [
            {
              "type": "caution",
              "text": "Самолет необходимо содержать в чистоте. Чистая светоотражающая поверхность предотвращает перегрев самолета."
            },
            {
              "type": "caution",
              "text": "Чрезмерное загрязнение самолета ухудшает его летные характеристики."
            },
            {
              "type": "h3",
              "text": "8.5.1 ОКРАШЕННЫЕ ПОВЕРХНОСТИ"
            },
            {
              "type": "p",
              "text": "Вся поверхность самолета окрашена белой двухкомпонентной краской, устойчивой к атмосферным воздействиям. Тем не менее, рекомендуется обеспечить защиту самолета от влаги и сырости. Не рекомендуется для продолжительной стоянки оставлять самолет вне ангара."
            },
            {
              "type": "p",
              "text": "Для удаления грязи, насекомых и т.п. достаточно вымыть самолет чистой водой или водой с добавлением мягкого моющего средства. Для удаления трудноудаляемых пятен можно пользоваться автомобильными чистящими средствами. Чтобы упростить удаление грязи, рекомендуется чистить самолет после завершения летного дня, чтобы исключить застарелые пятна грязи на поверхностях."
            },
            {
              "type": "p",
              "text": "Для удаления пятен масла, гари и т.п. с нижней части фюзеляжа можно пользоваться холодными моющими средствами. Перед началом работы необходимо убедиться, что моющее средство не повредит верхний слой краски. Для защиты лакокрасочных поверхностей следует пользоваться обычными автомобильными защитными средствами без добавок силикона."
            },
            {
              "type": "h3",
              "text": "8.5.2 ФОНАРЬ И ЗАДНЯЯ ДВЕРЬ"
            },
            {
              "type": "p",
              "text": "Фонарь кабины и заднюю дверь следует чистить чистящим средством Plexiklar или любым другим чистящим средством для акрилового стекла; при отсутствии таких средств пользоваться чуть теплой водой. В завершение мойки вытереть поверхность чистой замшей или мягкой тканью. Запрещается тереть и полировать сухое акриловое стекло."
            },
            {
              "type": "h3",
              "text": "8.5.3 ВОЗДУШНЫЙ ВИНТ"
            },
            {
              "type": "p",
              "text": "В случае повреждения или неисправностей воздушного винта в ходе эксплуатации необходимо провести осмотр винта. Осмотр должен проводиться персоналом, имеющим допуск к ТО."
            },
            {
              "type": "p",
              "text": "Поверхность Изготовитель использует для окрашивания винта полиуретановую или акриловую краску, устойчивую почти ко всем растворителям. Для чистки и защиты лопастей можно пользоваться обычными автомобильными чистящими и защитными средствами."
            },
            {
              "type": "p",
              "text": "Проникновение влаги во внутренние деревянные части лопастей категорически не допускается. При возникновении сомнений по наличию влаг и в винте необходимо проконсультироваться с инспектором - специалистом соответствующей категории."
            },
            {
              "type": "h3",
              "text": "8.5.4 ДВИГАТЕЛЬ"
            },
            {
              "type": "p",
              "text": "Мойка двигателя производится в ходе плановых форм ТО."
            },
            {
              "type": "h3",
              "text": "8.5.5 ВНУТРЕННИЕ ПОВЕРХНОСТИ"
            },
            {
              "type": "p",
              "text": "Для чистки внутренних поверхностей следует пользоваться пылесосом. Все незакрепленные предметы (ручки, сумки и т.п.) необходимо убрать из кабины или убрать в соответствующие ящики и закрепить."
            },
            {
              "type": "p",
              "text": "Для чистки приборов пользоваться сухой мягкой тканью, пластмассовые поверхности протирать тканью, смоченной в воде без добавления моющих средств."
            },
            {
              "type": "caution",
              "text": "Линзы экранов основного пилотажного индикатора и многофункционального индикатора имеют специальное антибликовым покрытие, которое чувствительно к кремам для кожи, воску и абразивным чистящим средствам. ЧИСТЯЩИЕ СРЕДСТВА С СОДЕРЖАНИЕМ АММИАКА МОГУТ ПОВРЕДИТЬ АНТИБЛИКОВОЕ ПОКРЫТИЕ. Для очистки линз экранов пользоваться чистой тряпкой из безворсового материала, в инструкции по применеию которой, указано, что она пригодна для очистки антибликовых покрытий."
            }
          ]
        }
      },
      {
        "id": "du-8-6",
        "code": "8.6",
        "title": {
          "en": "DE-ICING ON THE GROUND",
          "ru": "ПРОТИВООБЛЕДЕНИТЕЛЬНАЯ ОБРАБОТКА НА ЗЕМЛЕ"
        },
        "rev": "REV 4 (EN) / РЕД. 3 (RU)",
        "bilingualBlocks": {
          "en": [
            {
              "type": "h4",
              "text": "(a) Approved De-Icing Fluids"
            },
            {
              "type": "p",
              "text": "Manufacturer Name Kilfrost TKS 80 Aeroshell Compound 07 Any source AL-5 (DTD 406B)"
            },
            {
              "type": "h4",
              "text": "(b) De-Icing Procedure"
            },
            {
              "type": "p",
              "text": "1. Remove any snow from the airplane using a soft brush. 2. Spray de-icing fluid onto ice-covered surfaces using a suitable spray bottle. 3. Use a soft piece of cloth to wipe the airplane dry."
            }
          ],
          "ru": [
            {
              "type": "p",
              "text": "Разрешенные противообледенительные жидкости: Изготовитель Наименование Kilfrost TKS 80 Aeroshell Compound 07 Любой AL-5 (DTD 406B) 1. Очистить самолет от снега, пользуясь мягкой щеткой."
            },
            {
              "type": "p",
              "text": "2. Нанести противообледенительную жидкость на обледеневшие поверхности, пользуясь пригодным для этого разбрызгивателем. 3. Мягкой тканью насухо протереть самолет."
            }
          ]
        }
      }
    ]
  },
  {
    "id": "ch9",
    "code": "CH 9",
    "title": {
      "en": "CHAPTER 9 — SUPPLEMENTS",
      "ru": "РАЗДЕЛ 9 — ДОПОЛНИТЕЛЬНОЕ ОБОРУДОВАНИЕ"
    },
    "status": "NON-APPROVED",
    "units": [
      {
        "id": "du-9-1",
        "code": "9.1",
        "title": {
          "en": "INTRODUCTION",
          "ru": "ВВЕДЕНИЕ"
        },
        "rev": "REV 4 (EN) / РЕД. 3 (RU)",
        "bilingualBlocks": {
          "en": [
            {
              "type": "p",
              "text": "Chapter 9 contains information concerning additional (optional) equipment of the DA 40 NG. Unless otherwise stated, the procedures given in the Supplements must be applied in addition to the procedures given in the main part of the Airplane Flight Manual."
            },
            {
              "type": "p",
              "text": "All approved supplements are listed in the List of Supplements in this Chapter. The Airplane Flight Manual contains exactly those Supplements which correspond to the installed equipment according to the Equipment Inventory of Section 6.5."
            },
            {
              "type": "note",
              "text": "The listed Supplements cannot be installed in any arbitrary combination."
            }
          ],
          "ru": [
            {
              "type": "p",
              "text": "В разделе 9 приводится документация о дополнительном (устанавливаемом по отдельному заказу) оборудовании самолета DA 40 NG. Если не указано иное, процедуры, приведенные в Дополнениях, должны выполняться дополнительно к процедурам, приведенным в основной части Руководства по летной эксплуатации."
            },
            {
              "type": "p",
              "text": "Все утвержденные Дополнения перечислены в Перечне дополнений в данном разделе. В Руководство по летной эксплуатации включены только те Дополнения , которые соответствует установленному на самолете оборудованию согласно Перечню установленного оборудования, в разделе 6.5."
            },
            {
              "type": "note",
              "text": "Не допускается установка оборудования из приведенного перечня Дополнений в любой произвольной конфигурации."
            }
          ]
        }
      },
      {
        "id": "du-9-2",
        "code": "9.2",
        "title": {
          "en": "LIST OF SUPPLEMENTS",
          "ru": "ПЕРЕЧЕНЬ ДОПОЛНЕНИЙ"
        },
        "rev": "REV 4 (EN) / РЕД. 3 (RU)",
        "bilingualBlocks": {
          "en": [
            {
              "type": "p",
              "text": "Airplane S/N: Registration: Date: Sup. No. Title Rev. No. Date Applicable YES NO A01 Garmin G1000 Avionics System 2 08 Apr 2015 A02 Garmin G1000 NXi Avionics System1 08 Feb 2019 A03 Intercom System PM 1000 II, PS Engineering Inc. 0 09 May 2017 A05 Conventional Cockpit DA 40 NG Club0 15 Mar 2011 A13 Autopilot System KAP 140, Bendix/King1 15 Mar 2011 A29 DA 40 NG Garmin Transponder GTX 3280 15 Mar 2011 A30 DA 40 NG Garmin COM/NAV, SL 30 0 15 Mar 2011 A33 Garmin G1000 SBAS and P-RNAV Operation 2 01 Jul 2014 E07 Operation with Ventilation Inlet Baffle1 01 Jul 2014 N017 Operation in CIS 2 17 Dec 2013 N023 Operation in Brazil 0 16 May 2022 N048 Operation in the Ukraine 0 01 Jul 2011 O01 Use of the DA 40 NG as Tow-Plane 1 01 Jul 2014 Airplane S/N: Registration: Date:"
            },
            {
              "type": "p",
              "text": "Sup. No. Title Rev. No. Date Applicable YES NO O02 Landing Gear with Large Tyres and 1280 kg Maximum Landing Mass2 01 Jul 2014 O03 Cold Weather Operation 1 01 Jul 2014 O04 Diesel Operation 0 06 Dec 2013 O09 Operation with D64-9028-11-01 Fuel Pumps 3 30 Sep 2024 S04 406MHz Emergency Locator Transmitter Artex ME 406 0 01 Apr 2010 S06 G1000 Synthetic Vision Technology 1 15 Mar 2011 S07 Recirculating Air - Cabin Cooling 7 22 Jun 2016 S10 Flight Data Logging Device 0 29 Jan 2016 S11 Garmin GTX 335R/345R Transponders with ADS-B 0 15 Apr 2019"
            }
          ],
          "ru": [
            {
              "type": "p",
              "text": "Серийный номер самолета: Регистрация: Дата: № доп. Название Ред. № Дата Применяется ДА НЕТ A01 Комплекс бортового радиоэлектронного оборудования Garmin G1000 1 1 июля 2014 г. □ □ A02 Система внутренней связи РМ 1000 II 0 15 марта 2011 г. □ □ A05 Кабина в комплектации DA 40 NG Club (вспомогательный индикатор параметров двигателя (SED), основной индикатор параметров двигателя (МED), панель сигнализации White Wire) 0 15 марта 2011 г. □ □ A13 Система автопилота Bendix/King KAP 140 1 15 марта 2011г. □ □ A29 Ответчик Garmin GTX 328 0 15 марта 2011г. □ □ A30 Приемопередатчик COМ /NAV Garmin УМ 30 0 15 марта 2011г. □ □ А33 Комплекс бортового радиоэлектронного оборудования Garmin G1000, со спутниковой и зональной навигацей (SBAS, P-RNAV) 2 1 июля 2014 г. □ □ E07 Заслонка забора свежего воздуха (зимой) 1 1 июля 2014 г. □ □ S04 Аварийный передатчик ELT ME 406 0 01 апреля 2010 г. □ □ S06 Система трехмерного изображения Synthetic Vision для комплекса G1000 1 15 марта 2011г. □ □ S07 Система вентиляции и охлаждения кабины с рециркуляцией воздуха 5 1 июля 2014 г. □ □ О01 Использование DA40NG в качестве буксира 1 1 июля 2014 г. □ □ Серийный номер самолета: Регистрация: Дата: № доп. Название Ред. № Дата Применяется ДА НЕТ О02 Шасси с колесами и шинами на колесах большего размера для максимального посадочно веса 1280 кг 2 1 июля 2014 г. □ □ О03 Эксплуатация при минусовых температурах 1 1 июля 2014 г □ □ О04 Эксплуатация на дизеле 0 6 декабря 2013 г. □ □"
            }
          ]
        }
      }
    ]
  }
];
