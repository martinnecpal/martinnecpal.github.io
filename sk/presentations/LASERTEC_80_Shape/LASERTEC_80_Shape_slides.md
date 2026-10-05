# LASERTEC 80 Shape — opis snímok
*Spracované zo súboru záverečných prác — MTF STU Trnava*

---

## Snímka 1 — Titulná snímka

**LASERTEC 80 Shape**
Päťosový presný laserový obrábací systém
DMG MORI

*Centrum excelentnosti päťosového obrábania (CE5AM)*
*Materiálovotechnologická fakulta STU so sídlom v Trnave*

---

## Snímka 2 — Prehľad

**Čo je LASERTEC 80 Shape?**

- Päťosový presný CNC laserový obrábací systém od spoločnosti **DMG MORI** (predtým SAUER)
- K dispozícii v **Centre excelentnosti päťosového obrábania (CE5AM)** na MTF STU v Trnave
- Určený na:
  - laserové štruktúrovanie a gravírovanie vstrekovacích foriem,
  - laserové mikroobrábanie a abláciu,
  - textúrovanie povrchu (tribologické, funkčné),
  - výrobu lámačov triesok na rezných doštičkách.
- Dva laserové stroje na MTF STU v Trnave: **LASERTEC 80 Shape** + laser TruDisk 4002 (TRUMPF)

---

## Snímka 3 — Laserový zdroj

**Vláknový laser Nd:YAG**

| Parameter | Hodnota |
|-----------|---------|
| Typ lasera | vláknový (yterbiový) Nd:YAG |
| Vlnová dĺžka | 1064 nm |
| Stredný výkon lasera | 50 W (menovitý) / 100 W (max.) |
| Voliteľné rozšírenie | až 200 W |
| Prevádzkový režim | **iba pulzný** |
| Rozsah frekvencie pulzov | 20 – 100 kHz |
| Priemer lúča v ohnisku | ~1 µm |
| Minimálna šírka stopy | od 40 µm |

- Rovnaký typ vláknového lasera využíva aj LASERTEC 210 Shape (väčší formát)
- Pulzný režim umožňuje presný úber materiálu bez nadmerného tepelného zaťaženia

---

## Snímka 4 — Osi a pracovný priestor

**Päťosová konfigurácia**

| Os | Dráha / rozsah |
|----|----------------|
| Os X | 800 mm |
| Os Y | 500 mm |
| Os Z (fokusácia) | 700 mm |
| Os B (výkyvná) | −110° až +150° |
| Os C (rotačná) | 360° |

**Rozmery stola:**

| Konfigurácia | Veľkosť stola | Max. zaťaženie |
|--------------|---------------|----------------|
| Trojosová | 900 × 600 mm | 200 kg |
| Päťosová | Ø 200 / 400 mm | 14 / 40 kg |

- Rozsah vychýlenia lúča skenerom: ±60 mm (sústava šošoviek a zrkadiel)
- Upínanie obrobku **upínačmi EROWA** na otočno-sklopnom stole

---

## Snímka 5 — Dynamika pohybu

**Vysokodynamický systém lineárnych pohonov**

| Parameter | Hodnota |
|-----------|---------|
| Rýchloposuv X / Y | 120 / 120 m/min |
| Rýchloposuv Z | 30 m/min |
| Zrýchlenie (X / Y) | **> 1,2 g** |
| Rozsah rýchlosti skenovania | 100 – 4 000 mm/s |

- Lineárne pohony v osiach X a Y — bez mechanickej vôle
- 4. a 5. os: **vodou chladené momentové motory (torque)**
- Zaraďuje sa medzi **vysokodynamické** laserové obrábacie centrá
- Umožňuje päťosové laserové štruktúrovanie veľkých tvárniacich nástrojov a úzkych foriem s odvzdušňovacími kanálmi

---

## Snímka 6 — Konštrukcia a hlavné komponenty

**Konštrukcia stroja**

1. **Pracovný kryt** — uzavretý pracovný priestor so špeciálnymi ochrannými dverami (trieda laserovej bezpečnosti 1)
2. **Skenovacia hlava** — sústava šošoviek a zrkadiel, dynamicky vychyľuje laserový lúč v ohniskovej rovine
3. **Otočno-sklopný stôl** — upínanie EROWA, osi B + C
4. **Riadiaca jednotka stroja** — riadi všetky pohyby osí
5. **Samostatný riadiaci počítač** — riadi skener a laserový zdroj
6. **CCD kamera** — 50× zväčšenie, nastaviteľná v X/Y na pozorovanie obrobku
7. **3D meracia sonda** — na rýchle vyrovnanie obrobku a meranie úberu materiálu
8. **Odsávacie zariadenie** — 1050 × 1200 × 2000 mm
9. **Chladiace zariadenie** — vodné chladenie momentových motorov a lasera; 1110 × 800 × 1450 mm

---

## Snímka 7 — Riadenie a softvér

**Architektúra riadenia**

| Komponent | Systém |
|-----------|--------|
| Riadenie CNC | **Siemens 840D** powerline / solutionline |
| Riadenie laserového procesu | **LaserSoft 3D** (samostatný riadiaci systém) |
| Programovací softvér | **LpsWin** (definícia súradníc, import bitmáp) |

**Softvérový postup:**
1. Návrh textúry / geometrie v CAD
2. Vygenerovanie bitmapy alebo dráhy nástroja
3. Import do **LpsWin** → definícia súradnicového systému a parametrov obrábania
4. Softvér vypočíta dráhy laserového lúča vrstvu po vrstve
5. Export NC programu → načítanie do stroja **LASERTEC 80 Shape**
6. Skúšobný beh (zahriatie + beh naprázdno) → výrobný beh

- Laserové tvarovanie paralelné s kontúrou: ohnisko sa dynamicky posúva v osi Z podľa 3D geometrie povrchu
- Hrúbka vrstvy: typicky 0,002 mm na vrstvu

---

## Snímka 8 — Súhrn technických parametrov

**Kompletné technické údaje (DMG MORI)**

| Parameter | Hodnota |
|-----------|---------|
| Typ laserového zdroja | vláknový (Nd:YAG/yterbiový) |
| Výkon lasera | 100 / 200 W |
| Ohniskové vzdialenosti | 100 / 160 / 255 mm |
| Frekvencia pulzov | 20 – 100 kHz |
| Rýchlosť skenovania | 100 – 4 000 mm/s |
| Priemer lúča | ~1 µm |
| Šírka stopy | od 40 µm |
| Príkon | max. 72 kVA |
| Prevádzkové napätie | 400 V / 50 Hz |
| Rozmery stroja | 3335 × 2058 × 2290 mm |
| Zastavaná plocha (vrátane zariadení) | 4500 × 6000 × 2300 mm |
| Celková hmotnosť | **7 000 kg** |
| Riadiaci systém | Siemens 840D powerline/solutionline |

---

## Snímka 9 — Aplikácie

**Oblasti použitia**

| Aplikácia | Opis |
|-----------|------|
| Textúrovanie vstrekovacích foriem | gravírovanie jemných povrchových štruktúr do tvarových dutín foriem |
| Výroba lámačov triesok | laserové mikroobrábanie rezných doštičiek (spekaný karbid) |
| Textúrovanie povrchu | funkčné tribologické textúry (jamky, drážky, šrafovanie) |
| Štruktúrovanie tvárniacich nástrojov | päťosové laserové štruktúrovanie veľkých lisovacích nástrojov |
| Obrábanie úzkych foriem | päťosové gravírovanie úzkych foriem s odvzdušňovacími kanálmi |
| Ablácia povlakov | selektívne odstraňovanie povlakov PVD/CVD (šírka stopy ≥ 40 µm) |

**Vhodné materiály:** spekaný karbid (WC-Co), titánové zliatiny, nástrojové ocele, povlakované povrchy

---

## Snímka 10 — Porovnanie: LASERTEC 80 vs. 210 Shape

| Parameter | LASERTEC 80 Shape | LASERTEC 210 Shape |
|-----------|-------------------|--------------------|
| Os X [mm] | 800 | 1800 |
| Os Y [mm] | 500 | 2100 |
| Os Z [mm] | 700 | 1250 |
| Stôl (päťosový) [mm] | Ø 200 / 400 | Ø 1850 |
| Max. zaťaženie (päťosový) [kg] | 14 / 40 | 8 000 / 10 000 |
| Rýchloposuv X/Y [m/min] | 120 / 120 | 60 / 40 |
| Výkon lasera [W] | 100 / 200 | 100 / 200 |
| Celková hmotnosť [kg] | 7 000 | 42 000 |
| Rozmery stroja [mm] | 3335 × 2058 × 2290 | 6145 × 7308 × 5343 |
| Príkon [kVA] | max. 72 | max. 103 |

→ LASERTEC 80: **kompaktný a rýchly** — pre presné súčiastky a formy do strednej veľkosti  
→ LASERTEC 210: **veľkoformátový** — pre nástroje a zápustky v automobilovom meradle

---

## Snímka 11 — Procesný reťazec laserového textúrovania

**Celý pracovný postup na stroji LASERTEC 80 Shape**

```
[Návrh v CAD / návrh textúry]
        ↓
[Generovanie bitmapy / vektora]
        ↓
[LpsWin — súradnicový systém, rozdelenie na vrstvy, výpočet dráh]
        ↓
[Generovanie NC programu]
        ↓
[Zahriatie stroja + skúšobný beh]  ← nefunkčný povrch, znížený výkon
        ↓
[Výrobný beh — LASERTEC 80 Shape]
        ↓
[3D skenovanie / meranie povrchu]  ← skener ATOS, CCD kamera, drsnomer
```

- Zelené kroky: možno nahradiť softvérom tretích strán
- Červené kroky: vyžadujú natívny softvér stroja (LaserSoft 3D / LpsWin)

---

## Snímka 12 — Typické procesné parametre (z experimentov)

**Reprezentatívne rozsahy parametrov používané na MTF STU v Trnave**

| Parameter | Použitý rozsah |
|-----------|----------------|
| Výkon lasera | 10 – 100 W (10 – 100 % max.) |
| Frekvencia pulzov | 20 – 100 kHz |
| Rýchlosť skenovania | 200 – 4 000 mm/s |
| Ohnisková vzdialenosť | 100 mm (typická pri mikroobrábaní) |
| Veľkosť značkovacieho poľa | 13 × 13 mm (mikro) |
| Priemer laserovej stopy | 0,025 – 0,1 mm |
| Hĺbka úberu vrstvy | ~1 µm na prechod |
| Hĺbka úberu materiálu | až 40 µm na prvok textúry |
| Doba trvania pulzu | 10 ms – 120 ns (podľa režimu) |

*Zdroje: experimentálne štúdie spekaného karbidu, titánových zliatin a nástrojovej ocele v CE5AM na MTF STU v Trnave*

---

## Snímka 13 — Bezpečnostné a inštalačné požiadavky

**Prostredie inštalácie**

- Trieda laserovej bezpečnosti vyžadujúca **uzavretý kryt** s blokovanými ochrannými dverami
- Odsávacie zariadenie: 1050 × 1200 × 2000 mm (povinné — odstraňuje častice z ablácie a plyny)
- Vodný chladiaci okruh: potrebný pre momentové motory a laserový zdroj
- Elektrické napájanie: **400 V / 50 Hz**, max. 72 kVA
- Zastavaná plocha (všetky zariadenia): 4500 × 6000 × 2300 mm
- Celková hmotnosť stroja: 7 000 kg — vyžaduje vystuženú podlahu

---

*Všetky údaje sú prevzaté zo študentských záverečných prác odkazujúcich na dokumentáciu DMG MORI (2013 – 2017).*
*Primárny zdroj: technický list DMG MORI LASERTEC 80 Shape.*
