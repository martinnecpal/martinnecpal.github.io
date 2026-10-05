# Poznámky k relácii — prezentácia o laserovom mikroobrábaní
**Dátum:** 2026-05-28  
**Relácia:** čítanie 7 diplomových prác → kategorizácia → zostavenie celej prezentácie

---

## Čo sa v tejto relácii urobilo

1. Prehľadalo sa všetkých 7 diplomových prác vo formáte PDF v adresári `thesis/`
2. Z praktických častí a výsledkov každej práce sa extrahoval text
3. Sedem prác sa rozdelilo do 3 výskumných skupín
4. Vytvorila sa prezentácia Reveal.js s 19 snímkami (šablóna gradient-modern)
5. Zo všetkých 7 PDF sa extrahovali obrázky do `images/t1–t7/`
6. Pre všetkých 19 snímok sa napísali podrobné texty prednesu (v `speech/`)
7. Napísal sa súbor narration.json s textom pripraveným na TTS
8. Upratovanie: odstránila sa verzia so šablónou MTF, adresár je samostatný

---

## 7 prác — rýchly prehľad

| Súbor | Rok | Téma | Kategória |
|---|---|---|---|
| `zaverecna_prace.pdf` | 2014 | Lámač triesok na karbidovej doštičke — laser | C |
| `zaverecna_prace-1.pdf` | 2014 | Laserové mikroobrábanie titánu GRADE 2 | A |
| `zaverecna_prace-2.pdf` | 2017 | Laserové textúrovanie vstrekovacích foriem (v angličtine) | C |
| `zaverecna_prace-3.pdf` | 2018 | Laserové mikroobrábanie spekaného karbidu WC-Co | A |
| `zaverecna_prace-4.pdf` | 2013 | Laserom štruktúrované povrchy — tribológia (oceľ 11373) | B |
| `zaverecna_prace-5.pdf` | 2014 | Laserom štruktúrované povrchy — tribológia (nástrojová oceľ 1.2311) | B |
| `zaverecna_prace-6.pdf` | 2015 | Laserové textúrovanie povrchu — tribológia + mazivá (90MnCrV8) | B |

Všetky práce: Ústav výrobných technológií, MTF STU Trnava  
Spoločný stroj: **DMG MORI LASERTEC 80 Shape** — centrum CE5AM, MTF STU Trnava

---

## Tri výskumné kategórie

### A — Optimalizácia parametrov lasera
Nájsť najlepšiu kombináciu: frekvencia pulzov · výkon · rýchlosť skenovania · rozostup dráh  
Výstupná veličina: drsnosť povrchu Ra (+ rýchlosť ablácie pri spekanom karbide)  
Metóda: Taguchi L9 (titán) a polovičný faktorový plán 3³/27 experimentov (spekaný karbid)

**Hlavné zistenia:**
- Rozostup dráh je konzistentne najvplyvnejším faktorom (> 40 – 51 % variability Ra)
- Rýchlosť skenovania má najmenší vplyv (< 14 %)
- Krížové šrafovanie vytvára izotropné povrchy — má prednosť pred šrafovaním
- Najlepšia Ra pri titáne: 1,17 µm (šrafovanie) / 1,55 µm izotropne (krížové šrafovanie)
- Výsledky sú vždy špecifické pre stroj — nemožno ich prenášať medzi strojmi

### B — Tribológia povrchu (Ring test)
Vytvoriť laserom mikroštruktúry → zmerať zmenu koeficientu trenia Ring testom  
Hydraulický lis EU 40 (0 – 200 kN) · laboratórium tvárnenia MTF STU Trnava

**Hlavné zistenia podľa štúdie:**
- Oceľ 11373 (2013): široké drážky → f = 0,128 (−32 %); hrebene úzkych drážok → trenie ↑; pologule ≈ referencia
- Nástrojová oceľ 1.2311 (2014): veľké štruktúry (500 µm) → f = 0,315 (+22 %) — materiál natiekol do dutín; vhodné na uchopenie, nie na mazanie
- Nástrojová oceľ 90MnCrV8 (2015): Textúra IV + Variocut C462 → f = 0,158 (−46 %); vysokoviskózne mazivo účinok textúry potláča

**Všeobecné ponaučenie:** mierka štruktúry a viskozita maziva sa musia zosúladiť. Príliš veľké = mechanické zachytenie, trenie ↑. Príliš plytké = žiadny účinok. Optimum: pomer hĺbky a priemeru 0,1 – 0,2, hustota textúry 30 – 40 %, mazivo s nízkou viskozitou.

### C — Aplikovaná výroba
Laserom vyrobiť funkčný diel; vyhodnotiť rozmerovú kvalitu a obmedzenia procesu.

**Lámač triesok (2014):**
- Postup: Inventor CAD → LpsWin CAM → LASERTEC 80 Shape → 3D sken ATOS GOM
- Optimum: 60 kHz · 2000 mm/s · ~29 W · rozostup 10 µm · 1 µm/vrstva
- Max. odchýlka: 0,09 mm · čas obrábania: 25 – 30 min/strana
- Záver: vhodné na prototypy vo výskume a vývoji; na sériovú výrobu príliš pomalé

**Textúrovanie vstrekovacích foriem (2017):**
- Postup: PowerSHAPE CAD → GenBmp → GIMP → LpsWin → LASERTEC 80 Shape → vstrekovanie Babyplast (HDPE)
- 3 kolá: po prvom neúspechu boli textúry prepracované z 0,4 mm na 4 mm
- Päťosové textúrovanie zložitej dutiny: realizovateľné, ale kvalita v strede dutiny zhoršená
- Kritické zistenie: na spoľahlivý prenos na HDPE je potrebná hĺbka textúry > 1 mm
- Najlepšia textúra: šesťuholníková (najhlbšia, najzreteľnejší prenos)

---

## Štruktúra prezentácie

19 snímok — šablóna gradient-modern (fialovo-indigový prechod)

| Snímky | Obsah |
|---|---|
| 1 – 2 | Titulná snímka + prehľad troch kategórií |
| 3 – 7 | Kategória A: titán (návrh, faktory, výsledky) + spekaný karbid (návrh, fotografie povrchov) |
| 8 – 14 | Kategória B: metóda Ring testu + 3 tribologické štúdie (usporiadanie + výsledky každej) |
| 15 – 18 | Kategória C: lámač triesok (postup + výsledky skenu) + textúrovanie foriem (postup + 3 kolá) |
| 19 | Súhrnná tabuľka všetkých 7 prác + prierezové témy |

---

## Súbory v tomto adresári

```
laser_research_gm/
  index.html          — prezentácia Reveal.js s 19 snímkami (gradient-modern)
  narration.json      — text komentára pre TTS pre všetkých 19 snímok
  SESSION_NOTES.md    — tento súbor
  images/
    t1/  — práca o lámači triesok (zaverecna_prace.pdf)
    t2/  — práca o titáne (zaverecna_prace-1.pdf)
    t3/  — práca o textúrovaní foriem (zaverecna_prace-2.pdf)
    t4/  — práca o spekanom karbide (zaverecna_prace-3.pdf)
    t5/  — tribológia, oceľ 11373 (zaverecna_prace-4.pdf)
    t6/  — tribológia, nástrojová oceľ 1.2311 (zaverecna_prace-5.pdf)
    t7/  — tribológia, nástrojová oceľ 90MnCrV8 (zaverecna_prace-6.pdf)
  speech/
    slide_01.txt … slide_19.txt — podrobné texty prednesu
    slide_01.mp3 … slide_19.mp3 — slovenský hlasový komentár (generovaný z .txt)
```

---

## Úpravy CSS (nad rámec predvolených hodnôt šablóny)

- `.img-caption { font-size: 0.92em }` — zdvojnásobené z 0.46em
- `.slide-source { font-size: 0.8em }` — zdvojnásobené z 0.4em
- Pridané: `.cat-bar`, `.cat-cards`, `.cat-card`, `.fig-row`, `.img-caption`, štýly tabuliek
- Navigačná lišta: tmavé bridlicové pozadie zladené s paletou gradient-modern
