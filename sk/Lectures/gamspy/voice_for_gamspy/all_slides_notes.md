# Od GAMS ku GAMSPy – optimalizačné modelovanie v Pythone, od modelu po interaktívnu webovú stránku

**Hovorený text — hosťovská prednáška** · Martin Necpal · MTF STU Trnava

Prezentácia: gamspy.html (82 snímok) · Trvanie: 120 minút

> [!TIP]
> **Ako používať tento text**
>
> - Každý blok zodpovedá jednej snímke: [číslo · názov · čas].
> - Riadky začínajúce 🗒️ sú pokyny pre prednášajúceho a nečítajú sa nahlas.
> - Očakávané tempo reči: približne 110–120 slov za minútu. Snímky označené NAŽIVO obsahujú iba krátky úvod a záver; zvyšok času vyplní ukážka naživo.

## Prehľad snímok

| # | Snímka | Čas |
|--:|---|---|
| | **[ÚVOD](#úvod-000--005)** | **0:00 – 0:05** |
| 1 | [Úvodná snímka](#snímka-1--úvodná-snímka) | 0:00–0:02 |
| 2 | [O mne](#snímka-2--o-mne) | 0:02–0:03 |
| 3 | [Program](#snímka-3--program) | 0:03–0:05 |
| | **[ČASŤ 1 — ÚVOD DO GAMS](#časť-1--úvod-do-gams-005--025)** | **0:05 – 0:25** |
| 4 | [Časť 1 — Úvod do GAMS](#snímka-4--časť-1--úvod-do-gams) | 0:05 |
| 5 | [Čo je GAMS?](#snímka-5--čo-je-gams) | 0:05–0:07 |
| 6 | [Stručná história](#snímka-6--stručná-história) | 0:07–0:08 |
| 7 | [Ekosystém GAMS](#snímka-7--ekosystém-gams) | 0:08–0:09 |
| 8 | [Ako funguje GAMS](#snímka-8--ako-funguje-gams) | 0:09–0:11 |
| 9 | [Typy úloh a riešiče](#snímka-9--typy-úloh-a-riešiče) | 0:11–0:13 |
| 10 | [Kde sa GAMS používa?](#snímka-10--kde-sa-gams-používa) | 0:13–0:14 |
| 11 | [GAMS v chemickom inžinierstve](#snímka-11--gams-v-chemickom-inžinierstve) | 0:14–0:15 |
| 12 | [GAMS v strojárstve a výrobe](#snímka-12--gams-v-strojárstve-a-výrobe) | 0:15–0:16 |
| 13 | [Prečo by inžinieri mali používať GAMS?](#snímka-13--prečo-by-inžinieri-mali-používať-gams) | 0:16–0:17 |
| 14 | [Zdroje](#snímka-14--zdroje) | 0:17–0:18 |
| 15 | [Inštalácia GAMS](#snímka-15--inštalácia-gams) | 0:18–0:19 |
| 16 | [GAMS Studio v kocke](#snímka-16--gams-studio-v-kocke) | 0:19–0:20 |
| 17 | [Prvé spustenie v 5 krokoch](#snímka-17--prvé-spustenie-v-5-krokoch) | 0:20–0:21 |
| 18 | [Čítanie výstupu](#snímka-18--čítanie-výstupu) | 0:21–0:22 |
| 19 | [Hľadanie a oprava chýb](#snímka-19--hľadanie-a-oprava-chýb) | 0:22–0:23 |
| 20 | [Ďalšie užitočné nástroje Studia](#snímka-20--ďalšie-užitočné-nástroje-studia) | 0:23–0:24 |
| 21 | [Užitočné klávesové skratky](#snímka-21--užitočné-klávesové-skratky) | 0:24–0:25 |
| 22 | [Odkazy](#snímka-22--odkazy) | 0:25 |
| | **[ČASŤ 2 — PRÍKLAD 1 V GAMS](#časť-2--príklad-1-v-gams-025--040)** | **0:25 – 0:40** |
| 23 | [Časť 2 — Príklad 1 v GAMS](#snímka-23--časť-2--príklad-1-v-gams) | 0:25 |
| 24 | [Úloha](#snímka-24--úloha) | 0:25–0:27 |
| 25 | [Grafické riešenie](#snímka-25--grafické-riešenie) | 0:27–0:30 |
| 26 | [Ten istý model v GAMS](#snímka-26--ten-istý-model-v-gams) | 0:30–0:32 |
| 27 | [Čítanie kódu riadok po riadku](#snímka-27--čítanie-kódu-riadok-po-riadku) | 0:32–0:34 |
| 28 | [Spustenie v GAMS Studio (NAŽIVO)](#snímka-28--spustenie-v-gams-studio-naživo) | 0:34–0:37 |
| 29 | [Výsledky vo výpise](#snímka-29--výsledky-vo-výpise) | 0:37–0:38 |
| 30 | [Vyskúšajte si](#snímka-30--vyskúšajte-si) | 0:38–0:40 |
| | **[ČASŤ 3 — OD GAMS KU GAMSPY](#časť-3--od-gams-ku-gamspy-040--055)** | **0:40 – 0:55** |
| 31 | [Časť 3 — Od GAMS ku GAMSPy](#snímka-31--časť-3--od-gams-ku-gamspy) | 0:40 |
| 32 | [Čo je GAMSPy?](#snímka-32--čo-je-gamspy) | 0:40–0:41 |
| 33 | [Krok 1 – Inštalácia Pythonu](#snímka-33--krok-1--inštalácia-pythonu) | 0:41–0:42 |
| 34 | [Krok 2 – Vytvorenie virtuálneho prostredia](#snímka-34--krok-2--vytvorenie-virtuálneho-prostredia) | 0:42–0:43 |
| 35 | [Krok 3 – Inštalácia GAMSPy](#snímka-35--krok-3--inštalácia-gamspy) | 0:43–0:44 |
| 36 | [Krok 4 – Riešiče](#snímka-36--krok-4--riešiče) | 0:44–0:45 |
| 37 | [Krok 5 – Licencia (voliteľné)](#snímka-37--krok-5--licencia-voliteľné) | 0:45–0:46 |
| 38 | [Krok 6 – Otestujte to](#snímka-38--krok-6--otestujte-to) | 0:46–0:47 |
| 39 | [Rýchly prehľad](#snímka-39--rýchly-prehľad) | 0:47–0:48 |
| 40 | [Krok 1 – Inštalácia VS Code](#snímka-40--krok-1--inštalácia-vs-code) | 0:48–0:49 |
| 41 | [Krok 2 – Rozšírenie Python](#snímka-41--krok-2--rozšírenie-python) | 0:49–0:50 |
| 42 | [Krok 3 – Otvorenie priečinka projektu](#snímka-42--krok-3--otvorenie-priečinka-projektu) | 0:50–0:51 |
| 43 | [Krok 4 – Výber prostredia Pythonu](#snímka-43--krok-4--výber-prostredia-pythonu) | 0:51–0:52 |
| 44 | [Krok 5 – Inštalácia GAMSPy do prostredia](#snímka-44--krok-5--inštalácia-gamspy-do-prostredia) | 0:52–0:53 |
| 45 | [Krok 6 – Spustenie prvého skriptu](#snímka-45--krok-6--spustenie-prvého-skriptu) | 0:53–0:54 |
| 46 | [Skratky VS Code pre túto prednášku](#snímka-46--skratky-vs-code-pre-túto-prednášku) | 0:54–0:55 |
| | **[ČASŤ 4 — PRÍKLAD 1 V GAMSPY](#časť-4--príklad-1-v-gamspy-055--105)** | **0:55 – 1:05** |
| 47 | [Časť 4 — Príklad 1 v GAMSPy](#snímka-47--časť-4--príklad-1-v-gamspy) | 0:55 |
| 48 | [GAMS → GAMSPy: slovník](#snímka-48--gams--gamspy-slovník) | 0:55–0:57 |
| 49 | [Vedľa seba](#snímka-49--vedľa-seba) | 0:57–0:59 |
| 50 | [Ako previesť model – krok za krokom](#snímka-50--ako-previesť-model--krok-za-krokom) | 0:59–1:00 |
| 51 | [Spustenie vo VS Code (NAŽIVO)](#snímka-51--spustenie-vo-vs-code-naživo) | 1:00–1:02 |
| 52 | [Výsledky](#snímka-52--výsledky) | 1:02–1:03 |
| 53 | [Po pythonovsky – kratšie](#snímka-53--po-pythonovsky--kratšie) | 1:03–1:04 |
| 54 | [Bonus: späť do GAMS a LaTeXu](#snímka-54--bonus-späť-do-gams-a-latexu) | 1:04–1:05 |
| | **[ČASŤ 5 — PRÍKLAD 3: MIEŠANIE PRÚDOV](#časť-5--príklad-3-miešanie-prúdov-105--120)** | **1:05 – 1:20** |
| 55 | [Časť 5 — Príklad 3: Miešanie prúdov](#snímka-55--časť-5--príklad-3-miešanie-prúdov) | 1:05 |
| 56 | [Úloha](#snímka-56--úloha) | 1:05–1:06 |
| 57 | [Matematická formulácia](#snímka-57--matematická-formulácia) | 1:06–1:08 |
| 58 | [Krok 1 – priamy preklad](#snímka-58--krok-1--priamy-preklad) | 1:08–1:10 |
| 59 | [Problém: čísla sú vnútri rovníc](#snímka-59--problém-čísla-sú-vnútri-rovníc) | 1:10–1:11 |
| 60 | [Krok 2 – všeobecná (indexovaná) formulácia](#snímka-60--krok-2--všeobecná-indexovaná-formulácia) | 1:11–1:13 |
| 61 | [Množiny a dáta](#snímka-61--množiny-a-dáta) | 1:13–1:14 |
| 62 | [Premenné, rovnice, model](#snímka-62--premenné-rovnice-model) | 1:14–1:16 |
| 63 | [Výsledky](#snímka-63--výsledky) | 1:16–1:17 |
| 64 | [Čo ak: zmena limitu vody (NAŽIVO)](#snímka-64--čo-ak-zmena-limitu-vody-naživo) | 1:17–1:19 |
| 65 | [Vyskúšajte si](#snímka-65--vyskúšajte-si) | 1:19–1:20 |
| | **[ČASŤ 6 — OD MODELU K WEBOVEJ STRÁNKE](#časť-6--od-modelu-k-webovej-stránke-120--140)** | **1:20 – 1:40** |
| 66 | [Časť 6 — Od modelu k webovej stránke](#snímka-66--časť-6--od-modelu-k-webovej-stránke) | 1:20 |
| 67 | [Čo postavíme](#snímka-67--čo-postavíme) | 1:20–1:22 |
| 68 | [Krok 1 – Inštalácia Matplotlib a Flask](#snímka-68--krok-1--inštalácia-matplotlib-a-flask) | 1:22–1:23 |
| 69 | [Krok 2 – Model ako opakovane použiteľná funkcia](#snímka-69--krok-2--model-ako-opakovane-použiteľná-funkcia) | 1:23–1:25 |
| 70 | [Krok 3 – Graf „čo ak" v Matplotlib](#snímka-70--krok-3--graf-čo-ak-v-matplotlib) | 1:25–1:27 |
| 71 | [Krok 4 – Najmenšia aplikácia Flask](#snímka-71--krok-4--najmenšia-aplikácia-flask) | 1:27–1:29 |
| 72 | [Krok 5 – Formulár, ktorý rieši model](#snímka-72--krok-5--formulár-ktorý-rieši-model) | 1:29–1:31 |
| 73 | [Krok 6 – Pridanie grafu z Matplotlib](#snímka-73--krok-6--pridanie-grafu-z-matplotlib) | 1:31–1:33 |
| 74 | [Krok 7 – Interaktívna stránka: JSON API](#snímka-74--krok-7--interaktívna-stránka-json-api) | 1:33–1:35 |
| 75 | [Krok 7 – Interaktívna stránka: posuvníky + JavaScript](#snímka-75--krok-7--interaktívna-stránka-posuvníky--javascript) | 1:35–1:36 |
| 76 | [Výsledok (NAŽIVO)](#snímka-76--výsledok-naživo) | 1:36–1:39 |
| 77 | [Zhrnutie a ďalšie kroky](#snímka-77--zhrnutie-a-ďalšie-kroky) | 1:39–1:40 |
| | **[ZHRNUTIE A OTÁZKY](#zhrnutie-a-otázky-140--200)** | **1:40 – 2:00** |
| 78 | [Čo sme sa dnes naučili](#snímka-78--čo-sme-sa-dnes-naučili) | 1:40–1:43 |
| 79 | [Kontrolné otázky](#snímka-79--kontrolné-otázky) | 1:43–1:52 |
| 80 | [Kde pokračovať](#snímka-80--kde-pokračovať) | 1:52–1:53 |
| 81 | [Poďakovanie](#snímka-81--poďakovanie) | 1:53–1:54 |
| 82 | [Ďakujem – otázky?](#snímka-82--ďakujem--otázky) | 1:54–2:00 |

---

## ÚVOD 0:00 – 0:05

### Snímka 1 · Úvodná snímka

⏱️ `0:00–0:02`

Dobré ráno a vitajte. Veľmi pekne ďakujem za pozvanie – naozaj ma teší, že som dnes tu s vami.

Názov dnešnej prednášky je Od GAMS ku GAMSPy: optimalizačné modelovanie v Pythone, od modelu až po interaktívnu webovú stránku.

Čo si z nasledujúcich dvoch hodín odnesiete? Tri veci. Po prvé, napíšete malý optimalizačný model v GAMS, klasickom algebraickom modelovacom jazyku. Po druhé, napíšete presne ten istý model v Pythone, pomocou balíka GAMSPy. A po tretie, z takého modelu urobíte malú webovú stránku, na ktorej ktokoľvek posunie posuvník a hneď uvidí nové optimálne riešenie.

Obrázok vpravo ukazuje, kde skončíme: stránku, ktorá s minimálnymi nákladmi mieša dva chemické prúdy. Všetko, čo na nej vidíte, počíta na pozadí optimalizačný model.

### Snímka 2 · O mne

⏱️ `0:02–0:03`

Niekoľko slov o mne. Volám sa Martin Necpal, som vysokoškolský učiteľ na Ústave výrobných technológií Materiálovotechnologickej fakulty v Trnave, ktorá je súčasťou Slovenskej technickej univerzity v Bratislave.

Moja dizertačná práca sa venovala automatizovanému projektovaniu technologických postupov a jeho integrácii do počítačom podporovaných systémov. Učím aplikácie CAD a CAM a programovanie NC strojov a pracujem s laserovým obrábaním na päťosovom stroji LASERTEC 80 Shape. V posledných rokoch sa veľa venujem Pythonu, dátovej vede a strojovému učeniu.

Prečo optimalizácia? Pretože projektovanie technológie a výroba sú plné optimalizačných úloh – rezné podmienky, poradie operácií, rozmiestnenie dielcov na plechu. Presne tam pomáhajú nástroje ako GAMS a GAMSPy.

### Snímka 3 · Program

⏱️ `0:03–0:05`

Tu je plán na dnes.

V prvých dvadsiatich minútach predstavím GAMS: čo to je, kde sa používa, ako ho nainštalovať a ako pracovať v GAMS Studio. Potom pätnásť minút riešime náš prvý príklad, jednoduchú úlohu lineárneho programovania, najprv ručne na papieri a potom v GAMS.

V tretej časti sa pripravíme na Python: nainštalujeme Python, GAMSPy a Visual Studio Code. Ak už máte všetko nainštalované, touto časťou prejdeme rýchlo.

Vo štvrtej časti preložíme Príklad 1 z GAMS do GAMSPy. Piata časť je prvým jadrom prednášky: skutočný inžiniersky príklad, miešanie dvoch prúdov, na ktorom sa naučíme množiny, parametre a dáta. Šiesta časť je druhým jadrom: krok za krokom z tohto modelu urobíme webovú stránku pomocou Matplotlib a Flask.

Na konci bude zhrnutie, kontrolné otázky a čas na vaše otázky.

---

## ČASŤ 1 — ÚVOD DO GAMS 0:05 – 0:25

### Snímka 4 · Časť 1 — Úvod do GAMS

⏱️ `0:05`

Začnime prvou časťou: GAMS, General Algebraic Modeling System, teda všeobecný algebraický modelovací systém.

### Snímka 5 · Čo je GAMS?

⏱️ `0:05–0:07`

Čo je teda GAMS?

GAMS je vysokoúrovňový algebraický modelovací jazyk pre matematickú optimalizáciu. Dôležité slovo je algebraický. Nepíšete algoritmus, nepíšete cykly, ktoré skladajú maticu. Model zapíšete rovnako, ako by ste ho napísali na papier, ako matematiku: definujete množiny, parametre, premenné a rovnice.

GAMS potom tento model skompiluje a odovzdá ho riešiču. Riešič je samostatný program, ktorý obsahuje numerický algoritmus – napríklad simplexovú metódu pre lineárne úlohy alebo metódu vnútorného bodu pre nelineárne.

A keďže model a riešič sú oddelené, ten istý model sa dá riešiť rôznymi riešičmi bez prepísania jedinej rovnice. GAMS zvláda lineárne, nelineárne, diskrétne, stochastické a rovnovážne modely, a to aj vo veľmi veľkom rozsahu, s miliónmi premenných.

Pozrite sa na rámček vpravo, pretože toto je kľúčová myšlienka celej prednášky: oddeliť, čo je úloha – model – od toho, ako sa rieši – riešič. Vy ako inžinieri opisujete fyziku, ekonomiku, technológiu. O matematiku hľadania optima sa postará riešič.

### Snímka 6 · Stručná história

⏱️ `0:07–0:08`

Stručná história. GAMS vznikol v roku 1976 ako výskumný projekt vo Svetovej banke pod vedením Alexandra Meerausa. Tamojší ekonómovia budovali veľké ekonomické modely a písali ich ručne ako takzvané generátory matíc – bolo to pomalé a plné chýb. Cieľom bola jedna reprezentácia modelu, ktorú vedia čítať ľudia aj počítače.

V roku 1987 sa GAMS stal komerčným produktom. V roku 2001 pribudol formát GDX na výmenu dát. V roku 2012 získali tvorcovia algebraických modelovacích jazykov cenu INFORMS Impact Prize. V roku 2018 prišlo GAMS Studio, súčasné vývojové prostredie. A v roku 2023 GAMSPy: algebraické modelovanie priamo v Pythone, s GAMS ako výpočtovým jadrom. Dnes máme GAMS vo verzii 54 a GAMSPy vo verzii 1.29.

### Snímka 7 · Ekosystém GAMS

⏱️ `0:08–0:09`

Dnes GAMS nie je len jeden program, ale malý ekosystém štyroch produktov.

Samotný jazyk GAMS spolu s prostredím GAMS Studio. GAMSPy, natívne rozhranie pre Python, ktoré vám dáva rovnaké modelovacie možnosti priamo v Pythone. GAMS MIRO, ktoré z modelu urobí interaktívnu webovú aplikáciu pre ľudí, ktorí nie sú odborníkmi na optimalizáciu. A GAMS Engine, ktorý spúšťa optimalizačné úlohy vo veľkom – paralelne, v cloude, s veľkou pamäťou.

Dnes budeme podrobne pracovať s prvými dvoma, označenými červenou. A myšlienku MIRO – model s priateľským webovým rozhraním – si na konci prednášky postavíme sami, v čistom Pythone.

### Snímka 8 · Ako funguje GAMS

⏱️ `0:09–0:11`

Ako GAMS funguje? Sledujte štyri bloky zľava doprava.

Vľavo je súbor modelu s príponou bodka gms. Tento súbor píšete vy: množiny, dáta, premenné a rovnice.

Kompilátor GAMS tento súbor prečíta, skontroluje syntax a vygeneruje konkrétnu inštanciu modelu – všetky čísla, ktoré riešič potrebuje.

Riešič – napríklad CPLEX, CONOPT alebo BARON – potom spustí numerický algoritmus a nájde optimum.

A nakoniec GAMS zapíše výpis, súbor s príponou bodka lst. Tento súbor čítate vy: stav riešiča, stav modelu a hodnoty všetkých premenných.

Dole vidíte pevné poradie každého modelu v GAMS. Najprv množiny, potom dáta – parametre, tabuľky a skaláry – potom premenné, rovnice, príkaz model, príkaz solve a nakoniec výpis výsledkov. Toto poradie si zapamätajte. Uvidíte ho dnes v každom príklade, v GAMS aj v GAMSPy.

### Snímka 9 · Typy úloh a riešiče

⏱️ `0:11–0:13`

GAMS vie riešiť mnoho typov úloh. Tabuľka ukazuje tie najdôležitejšie.

LP – lineárne programovanie – všetko je lineárne, typické riešiče sú CPLEX, HiGHS, Gurobi alebo XPRESS. MIP – zmiešané celočíselné programovanie – lineárny model, v ktorom niektoré premenné musia byť celé čísla, napríklad rozhodnutia áno alebo nie. NLP – nelineárne programovanie – riešia ho CONOPT, IPOPT, SNOPT alebo KNITRO. MINLP – zmiešané celočíselné nelineárne – najťažšia bežná trieda, s riešičmi ako DICOPT, SBB, SHOT alebo BARON. Ďalej modely s kvadratickými ohraničeniami, rovnovážne a komplementárne úlohy a nakoniec globálna optimalizácia.

Ten posledný riadok je dôležitý. Nelineárna úloha môže mať niekoľko lokálnych optím. Riešiče ako CONOPT alebo IPOPT nájdu lokálne optimum – dobrý bod, ale nie nutne najlepší. Globálne riešiče ako BARON alebo SCIP dokážu, že riešenie je globálnym optimom.

A teraz krása GAMS: zmena riešiča je jediný riadok, napríklad option NLP rovná sa BARON. Samotný model sa vôbec nemení.

### Snímka 10 · Kde sa GAMS používa?

⏱️ `0:13–0:14`

Kde sa GAMS používa? Prakticky všade, kde sa rozhoduje pri obmedzeniach.

V energetických systémoch: plánovanie elektrární, nasadzovanie zdrojov, zachytávanie a ukladanie uhlíka. V ekonomike a politike: modely vypočítateľnej všeobecnej rovnováhy a medzinárodný obchod, napríklad model METRO organizácie OECD. V poľnohospodárstve, vodnom hospodárstve a lesníctve: alokácia pôdy, vody a ďalších zdrojov. Vo financiách: optimalizácia portfólia a rizika. V logistike: doprava, rozvrhovanie, plánovanie trás vozidiel. A v inžinierstve: chemické procesy, konštruovanie strojov a výroba.

Na webe GAMS nájdete prípadové štúdie od OECD, TotalEnergies, Alpro alebo Rhodium Group. Pozrime sa bližšie na dve inžinierske oblasti.

### Snímka 11 · GAMS v chemickom inžinierstve

⏱️ `0:14–0:15`

Chemické inžinierstvo je klasickou oblasťou použitia, ktorú výrazne rozvinul profesor Grossmann na Carnegie Mellon University a mnohí ďalší.

Syntéza procesov rozhoduje o štruktúre celej technologickej schémy – ktoré zariadenia postaviť a ako ich prepojiť – a typicky ide o zmiešanú celočíselnú nelineárnu úlohu. Ďalej siete výmenníkov tepla, poradie destilačných kolón, siete reaktorov a kinetika, pooling a blending v rafinériách a návrh a rozvrhovanie vsádzkových prevádzok.

Vpravo vidíte príklady z knižnice modelov GAMS Model Library. Všetky sa dajú otvoriť priamo v GAMS Studio. A náš dnešný Príklad 3, miešanie dvoch prúdov, je najjednoduchším možným prípadom úlohy blendingu.

### Snímka 12 · GAMS v strojárstve a výrobe

⏱️ `0:15–0:16`

A strojárstvo a výroba, ktoré sú bližšie mojej vlastnej oblasti.

Návrh častí strojov, ako sú ozubené kolesá, pružiny a ložiská. Optimalizácia konštrukcií – priehradových konštrukcií a tvarov. Optimálne riadenie, napríklad trajektória ramena robota. Výrobné úlohy ako delenie materiálu a minimalizácia odpadu, plánovanie výroby a rozvrhovanie flow shop. A energia vo výrobe, kde sa stroje rozvrhujú tak, aby sa znížili náklady na energiu.

Aj tu má knižnica modelov hotové príklady pre všetky: návrh ozubeného prevodu, skrutkovú tlačnú pružinu, ložiská, topológiu priehradovej konštrukcie, tvar vačky, rameno robota, delenie materiálu a rozvrhovanie. Pri obrábaní je napríklad voľba rezných podmienok nelineárna úloha a poradie operácií je zmiešaná celočíselná úloha.

### Snímka 13 · Prečo by inžinieri mali používať GAMS?

⏱️ `0:16–0:17`

Prečo by ste teda vy ako inžinieri mali používať GAMS?

Pretože model sa číta ako matematická formulácia na papieri. Pretože ten istý model môžete použiť s mnohými riešičmi a porovnať lokálne a globálne výsledky. Pretože sa škáluje od školských príkladov po priemyselné modely. Pretože v knižnici je viac ako štyristopäťdesiat hotových modelov, z ktorých sa môžete učiť. Pretože bezplatná demo licencia je súčasťou každého stiahnutia a dostupné sú aj akademické licencie. A pretože s GAMSPy môže model žiť priamo v Pythone, vedľa vašich dát, grafov a webových aplikácií.

Ďalej si vezmeme jeden príklad a vyriešime ho najprv v GAMS a neskôr v GAMSPy.

### Snímka 14 · Zdroje

⏱️ `0:17–0:18`

Tu sú najdôležitejšie zdroje: domovská stránka GAMS, dokumentácia, knižnica modelov, dokumentácia GAMSPy a príklady GAMSPy na GitHube a klasická kniha GAMS – A User's Guide od autorov Brooke, Kendrick, Meeraus a Raman. Nemusíte si ich zapisovať – všetky odkazy sú v PDF tejto prezentácie.

### Snímka 15 · Inštalácia GAMS

⏱️ `0:18–0:19`

Teraz, ako nainštalovať GAMS. Sú to tri kroky.

Po prvé, stiahnite inštalátor zo stránky gams bodka com lomka download. Existuje pre Windows, Linux aj macOS.

Po druhé, spustite inštalátor. GAMS Studio sa nainštaluje automaticky spolu s GAMS. Vo Windows sa môže zobraziť upozornenie SmartScreen – kliknite na More info a potom na Run anyway.

Po tretie, licencia. Bezplatná demo licencia s obmedzenou veľkosťou modelu je súčasťou každého stiahnutia a na dnešok stačí. Bezplatné akademické licencie sú dostupné na webe GAMS. V GAMS Studio licenciu vložíte alebo skontrolujete v ponuke Help, GAMS Licensing.

### Snímka 16 · GAMS Studio v kocke

⏱️ `0:19–0:20`

Toto je GAMS Studio. Pozrime sa na hlavné oblasti.

Vľavo Project Explorer so všetkými súbormi projektu. Hlavný súbor – ten, ktorý sa bude spúšťať – je označený zeleným trojuholníkom. V strede editor kódu pre súbor modelu, so zvýrazňovaním syntaxe a dopĺňaním kódu. Po spustení sa otvorí výpis s výsledkami. Dole Process Log zobrazuje hlásenia behu a chyby s klikateľnými odkazmi. A hore panel nástrojov s najdôležitejším tlačidlom: Run, alebo kláves F9.

### Snímka 17 · Prvé spustenie v 5 krokoch

⏱️ `0:20–0:21`

Vaše prvé spustenie v piatich krokoch.

Jeden: vytvorte projekt cez File, New Project a vyberte pracovný priečinok. Dva: otvorte model, napríklad z Model Library Explorera klávesom F6 – vyskúšajte klasický dopravný model trnsport – alebo vytvorte nový súbor. Tri: skontrolujte hlavný súbor, zelený trojuholník v Project Exploreri. Štyri: spustite zeleným tlačidlom alebo klávesom F9. Päť: prečítajte si výsledky v Process Logu a vo výpise, ktorý sa otvorí automaticky.

Jedno dôležité upozornenie: GAMS Studio spúšťa hlavný súbor projektu, nie nutne súbor, ktorý je práve otvorený v editore. To mnohých začiatočníkov mätie.

### Snímka 18 · Čítanie výstupu

⏱️ `0:21–0:22`

Ako čítať výstup. V Process Logu farba riadka hovorí, čo sa stane po dvojkliku. Modrý riadok otvorí výpis na danom mieste. Červený riadok je chyba a skočí priamo na riadok vo vašom zdrojovom kóde. Zelený riadok otvorí vytvorený súbor, napríklad súbor GDX.

Výpis má vľavo navigačný strom: kompilácia, výpis rovníc, štatistika modelu, správa o riešení a výstup príkazu display.

Čo skontrolovať ako prvé? Tri riadky: SOLVER STATUS 1, Normal Completion; MODEL STATUS 1, Optimal; a OBJECTIVE VALUE, hodnotu účelovej funkcie.

### Snímka 19 · Hľadanie a oprava chýb

⏱️ `0:22–0:23`

Chyby. Zobrazujú sa ako červené riadky v Process Logu. Zlaté pravidlo: vždy začnite prvou chybou. Ďalšie chyby sú veľmi často len dôsledkom tej prvej.

Kliknite na červený riadok a kurzor skočí na chybu vo vašom súbore modelu. Vo výpise je miesto chyby označené znakom dolára a číslom chyby.

Najčastejšie chyby začiatočníkov sú: chýbajúca bodkočiarka, nedeklarovaný symbol, preklep v prvku množiny alebo znak rovná sa napísaný namiesto rovná-e-rovná.

### Snímka 20 · Ďalšie užitočné nástroje Studia

⏱️ `0:23–0:24`

GAMS Studio má ďalšie užitočné nástroje. GDX Viewer zobrazuje množiny, parametre a hodnoty riešenia ako tabuľky a vie ich exportovať do Excelu – ten budete používať veľa. Model Library Explorer s viac ako štyristo modelmi. Editor nastavení riešiča, kde vytvoríte súbory nastavení cez formulár namiesto písania. Integrovanú pomoc klávesom F1 ku kľúčovému slovu pod kurzorom. Debugger s bodmi prerušenia. A možnosť riešiť model vzdialene, na serveri NEOS alebo v GAMS Engine.

### Snímka 21 · Užitočné klávesové skratky

⏱️ `0:24–0:25`

Niekoľko skratiek. F9 spustí model, Shift F9 ho iba skompiluje. F6 otvorí knižnicu modelov, F1 pomoc. Control medzerník ponúkne dopĺňanie kódu a Control hviezdička zakomentuje alebo odkomentuje riadky. Ak si zapamätáte iba jednu, zapamätajte si F9.

Ďalej náš prvý príklad, zapísaný v GAMS.

### Snímka 22 · Odkazy

⏱️ `0:25`

Toto sú odkazy na stiahnutie, inštaláciu a príručku a návod ku GAMS Studio – opäť ich nájdete v PDF.

---

## ČASŤ 2 — PRÍKLAD 1 V GAMS 0:25 – 0:40

### Snímka 23 · Časť 2 — Príklad 1 v GAMS

⏱️ `0:25`

Druhá časť: Príklad 1, jednoduchá úloha lineárneho programovania. Tento príklad je prevzatý z prednášky profesora Elvisa Ahmetovića z Univerzity v Tuzle.

### Snímka 24 · Úloha

⏱️ `0:25–0:27`

Tu je úloha. Chceme maximalizovať Z rovná sa tri x jedna plus dva x dva.

Za dvoch podmienok: x jedna plus tri x dva je menšie alebo rovné štyrom a x jedna plus x dva je menšie alebo rovné dvom. A obe premenné musia byť nezáporné.

Je to úloha lineárneho programovania: účelová funkcia je lineárna a všetky ohraničenia sú lineárne. A má iba dve premenné. To je skvelé na učenie, pretože ju môžeme nakresliť do roviny a vyriešiť graficky. Potom overíme, že GAMS nám dá rovnakú odpoveď. To je vo všeobecnosti dobrý zvyk: keď začínate s novým nástrojom, najprv vyriešte úlohu, ktorej odpoveď už poznáte.

Obrázok vpravo ukazuje prípustnú oblasť – množinu všetkých bodov, ktoré spĺňajú všetky ohraničenia. Podrobne si ju pozrieme na ďalšej snímke.

### Snímka 25 · Grafické riešenie

⏱️ `0:27–0:30`

Grafické riešenie. Každé ohraničenie je polrovina ohraničená priamkou. Modrá priamka je x jedna plus tri x dva rovná sa štyri, oranžová priamka je x jedna plus x dva rovná sa dva. Spolu s dvoma osami uzatvárajú prípustnú oblasť, modrý mnohouholník s vrcholmi A, B, C a D.

Základná vlastnosť lineárneho programovania: ak optimum existuje, leží vo vrchole prípustnej oblasti. Stačí teda vyčísliť účelovú funkciu v štyroch vrcholoch.

V bode A, v začiatku, je Z rovné nule. V bode B, v bode dva, nula, je Z rovné šiestim. V bode C je Z rovné piatim. A v bode D, v bode nula, štyri tretiny, je Z rovné ôsmim tretinám.

Ako sme našli bod C? Je to priesečník dvoch priamok. Odčítajte druhú rovnicu od prvej a dostanete dva x dva rovná sa dva, teda x dva rovná sa jedna, a potom x jedna rovná sa jedna.

Optimum je teda v bode B: x jedna rovná sa dva, x dva rovná sa nula, Z rovná sa šesť.

Vidíte to aj na obrázku: prerušované čiary sú čiary konštantného Z. Keď posúvame priamku Z rovná sa konštanta ďalej doprava hore, posledný bod oblasti, ktorého sa dotkne, je B. Zapamätajte si tento výsledok – šesť – pretože ho teraz overíme v GAMS.

### Snímka 26 · Ten istý model v GAMS

⏱️ `0:30–0:32`

A tu je ten istý model v GAMS. Všimnite si, ako blízko je k matematike.

Prvý riadok je len nadpis. Potom deklarujeme premenné: x jedna a x dva ako kladné premenné, čo znamená väčšie alebo rovné nule, a Z ako voľnú premennú.

Potom deklarujeme názvy troch rovníc: obj, eq jedna a eq dva. A potom ich definujeme. Obj hovorí, že Z sa rovná tri x jedna plus dva x dva. Eq jedna hovorí, že x jedna plus tri x dva je menšie alebo rovné štyrom. Eq dva hovorí, že x jedna plus x dva je menšie alebo rovné dvom.

Príkaz model hovorí, že model Example01 tvoria všetky rovnice. Príkaz solve hovorí: vyrieš Example01 maximalizáciou Z pomocou LP. A príkaz display vypíše výsledky.

Prakticky každý riadok matematickej formulácie má v kóde svoj riadok.

### Snímka 27 · Čítanie kódu riadok po riadku

⏱️ `0:32–0:34`

Prečítajme si kód riadok po riadku, pretože týchto pár príkazov je jadrom GAMS.

Positive Variables deklaruje rozhodovacie premenné s dolnou hranicou nula. Free Variable Z deklaruje účelovú premennú. V GAMS musí byť účelová premenná voľná, bez akéhokoľvek obmedzenia znamienka.

Kľúčové slovo Equations iba deklaruje názvy. Definícia prichádza neskôr, s dvoma bodkami: názov, dve bodky a potom telo rovnice.

Rovná-e-rovná znamená rovná sa, rovná-l-rovná znamená menšie alebo rovné a rovná-g-rovná znamená väčšie alebo rovné.

Model Example01 lomka all lomka hovorí, že model obsahuje všetky deklarované rovnice. Príkaz Solve obsahuje tri informácie: smer, maximalizácia alebo minimalizácia, účelovú premennú a typ modelu, tu LP.

Display x jedna bodka l vypíše úroveň premennej, teda jej optimálnu hodnotu. Okrem bodka l majú premenné aj bodka lo a bodka up pre hranice a bodka m pre marginálnu hodnotu, ktorá je pri rovniciach tieňovou cenou.

A všimnite si prosím: každý príkaz končí bodkočiarkou. Chýbajúca bodkočiarka je najčastejšou chybou začiatočníkov vôbec.

### Snímka 28 · Spustenie v GAMS Studio (NAŽIVO)

⏱️ `0:34–0:37`

Teraz ho spustíme, naživo v GAMS Studio. Kroky sú na snímke.

Vytvorte nový projekt, napríklad v priečinku GAMS podčiarkovník lecture. Vytvorte nový súbor Example01 bodka gms a napíšte alebo vložte kód. Uložte ho cez Control S a skontrolujte zelenú značku hlavného súboru. Stlačte F9. Process Log zobrazí beh a výpis sa otvorí automaticky.

> 🗒️ *UKÁŽKA NAŽIVO v GAMS Studio. Najprv zámerne zmazať jednu bodkočiarku a spustiť: ukázať červený riadok v Process Logu, dvojklik naň, ukázať značku dolára a číslo chyby vo výpise. Potom bodkočiarku opraviť a spustiť znova. Približne 2 minúty.*

Videli ste teda, ako vyzerá chyba a ako rýchlo ju nájdete, keď začnete od prvého červeného riadka. Teraz sa pozrime na výsledky správneho behu.

### Snímka 29 · Výsledky vo výpise

⏱️ `0:37–0:38`

Toto sú výsledky z výpisu, skopírované zo skutočného behu v GAMS 54.

Súhrn riešenia nám hovorí: model Example01, typ LP, smer maximalizácia, riešič CPLEX. Stav riešiča jedna, normálne dokončenie. Stav modelu jedna, optimálny. Hodnota účelovej funkcie šesť.

A výstup príkazu display vpravo: x jedna rovná sa dva, x dva rovná sa nula, Z rovná sa šesť.

Presne rovnako ako grafické riešenie. Všimnite si tiež, že sme riešič nevyberali – CPLEX je jednoducho predvolený riešič pre LP.

### Snímka 30 · Vyskúšajte si

⏱️ `0:38–0:40`

Teraz je rad na vás. Štyri malé cvičenia.

Po prvé, zmeňte účelovú funkciu na Z rovná sa dva x jedna plus tri x dva. Ktorý vrchol vyhrá teraz?

Po druhé, pozrite sa na marginálne hodnoty rovníc, eq jedna bodka m a eq dva bodka m. Ktoré ohraničenie je aktívne?

Po tretie, zmeňte riešič: pred príkaz solve pridajte riadok option LP rovná sa HiGHS a porovnajte.

A po štvrté, zmeňte maximalizáciu na minimalizáciu. Čo sa stane a prečo?

> 🗒️ *Dať študentom približne jednu minútu, potom prezradiť odpovede.*

Odpovede. S novou účelovou funkciou vyhrá bod C, jedna, jedna, so Z rovným piatim, kým D dáva iba štyri. V bode B je aktívne ohraničenie eq dva, jeho marginálna hodnota je tri, kým eq jedna má rezervu a jeho marginálna hodnota je nula. HiGHS dá rovnaké optimum. A minimalizácia dá triviálne riešenie v začiatku, v bode A, so Z rovným nule – samozrejme, ak chcete najmenšiu hodnotu a všetky koeficienty sú kladné, nevyrobíte nič.

Ďalej ten istý model v Pythone, s GAMSPy.

---

## ČASŤ 3 — OD GAMS KU GAMSPY 0:40 – 0:55

### Snímka 31 · Časť 3 — Od GAMS ku GAMSPy

⏱️ `0:40`

Tretia časť: od GAMS ku GAMSPy. Najprv musíme vo Windows nainštalovať Python, GAMSPy a Visual Studio Code.

### Snímka 32 · Čo je GAMSPy?

⏱️ `0:40–0:41`

Čo je GAMSPy? Je to balík pre Python na algebraické modelovanie. Množiny, parametre, premenné a rovnice sa stávajú objektmi Pythonu. Na pozadí využíva výpočtové jadro GAMS a riešiče GAMS.

Nepotrebujete samostatnú inštaláciu GAMS: pip install gamspy prinesie vlastné jadro GAMS. A keďže ide o Python, spolupracuje s pandas, NumPy, Matplotlib, Jupyterom a webovými aplikáciami. Demo licencia je súčasťou a pre akademickú obec je GAMSPy zadarmo cez GAMS Academic Program.

Jedno upozornenie: licencie GAMS a GAMSPy sú rozdielne. Licenciu GAMS nemožno použiť pre GAMSPy.

### Snímka 33 · Krok 1 – Inštalácia Pythonu

⏱️ `0:41–0:42`

Prvý krok: Python. GAMSPy potrebuje Python 3.11 alebo novší. Stiahnite ho zo stránky python bodka org. V inštalátore nezabudnite zaškrtnúť Add python bodka exe to PATH. Potom otvorte PowerShell a overte ho príkazom python pomlčka pomlčka version. Ak už používate Anacondu, môžete namiesto toho použiť Anaconda Prompt – ostatné kroky sú rovnaké.

### Snímka 34 · Krok 2 – Vytvorenie virtuálneho prostredia

⏱️ `0:42–0:43`

Druhý krok: virtuálne prostredie. Udržiava balíky GAMSPy oddelene od vašich ostatných projektov v Pythone.

Otvorte PowerShell vo svojom pracovnom priečinku, napríklad C dvojbodka GAMS podčiarkovník lecture. Napíšte python pomlčka m venv bodka gamspy podčiarkovník venv, čím ho vytvoríte, a potom spustite aktivačný skript. Keď výzva príkazového riadka začína názvom prostredia v zátvorkách, funguje to.

Ak PowerShell odmietne spustiť skript, pretože spúšťanie skriptov je zakázané, raz spustite príkaz Set-ExecutionPolicy zo snímky a skúste to znova.

### Snímka 35 · Krok 3 – Inštalácia GAMSPy

⏱️ `0:43–0:44`

Tretí krok: inštalácia GAMSPy. Jeden príkaz: pip install gamspy.

Potom ho overte príkazom gamspy pomlčka pomlčka version. Mali by ste vidieť verziu GAMSPy, 1.29, a verziu jadra GAMS, ktoré prišlo s ním, 54.6. Neskôr ho aktualizujete príkazom pip install gamspy pomlčka pomlčka upgrade.

### Snímka 36 · Krok 4 – Riešiče

⏱️ `0:44–0:45`

Štvrtý krok: riešiče. Príkaz gamspy list solvers zobrazí nainštalované riešiče. Štandardne dostanete CPLEX pre lineárne a zmiešané celočíselné úlohy, CONOPT pre nelineárne úlohy, SBB pre zmiešané celočíselné nelineárne úlohy a PATH pre komplementárne úlohy.

Ďalšie môžete doinštalovať podľa potreby, napríklad gamspy install solver highs ipopt. A v Pythone vyberiete riešič jedným argumentom: model bodka solve, solver rovná sa highs.

### Snímka 37 · Krok 5 – Licencia (voliteľné)

⏱️ `0:45–0:46`

Piaty krok, licencia, je voliteľný. Demo licencia funguje hneď pre malé modely a na túto prednášku stačí.

Ak máte akademickú alebo plnú licenciu, dostanete tridsaťšesťznakový prístupový kód. Nainštalujete ho príkazom gamspy install license a kódom a skontrolujete príkazom gamspy show license. Na návrat k demo licencii použite gamspy uninstall license.

### Snímka 38 · Krok 6 – Otestujte to

⏱️ `0:46–0:47`

Šiesty krok: test. Toto je najmenší možný model v GAMSPy.

Importujeme gamspy ako gp, vytvoríme Container, jednu premennú x a jednu rovnicu e, ktorá hovorí, že x je väčšie alebo rovné jednej. Model minimalizuje x, takže odpoveď musí byť jedna. Vyriešime ho a vypíšeme stav a hodnotu účelovej funkcie.

Uložte ho ako test podčiarkovník gamspy bodka py a spustite ho. Ak uvidíte ModelStatus OptimalGlobal a jedna celá nula, GAMSPy je pripravený.

### Snímka 39 · Rýchly prehľad

⏱️ `0:47–0:48`

Táto tabuľka je rýchlym prehľadom všetkých príkazov z inštalácie: vytvorenie a aktivácia prostredia, inštalácia GAMSPy, kontrola verzie, výpis a pridanie riešičov a inštalácia a zobrazenie licencie. Nemusíte si ich pamätať – keď budete inštalovať doma, majte túto snímku z PDF vedľa počítača.

### Snímka 40 · Krok 1 – Inštalácia VS Code

⏱️ `0:48–0:49`

Teraz editor. Budeme používať Visual Studio Code, ktorý je bezplatný, nenáročný a beží vo Windows, macOS aj Linuxe.

Stiahnite ho zo stránky code bodka visualstudio bodka com a spustite inštalátor. Dôležité sú dve zaškrtnutia: Add Open with Code do kontextovej ponuky Prieskumníka a Add to PATH. Potom spustite VS Code.

### Snímka 41 · Krok 2 – Rozšírenie Python

⏱️ `0:49–0:50`

Druhý krok: rozšírenie Python. Otvorte zobrazenie Extensions cez Control Shift X, vyhľadajte Python a nainštalujte rozšírenie od Microsoftu. Python Debugger sa nainštaluje automaticky spolu s ním. Voliteľne môžete pridať rozšírenie Jupyter pre notebooky.

Pamätajte však: rozšírenie neobsahuje samotný Python. Python 3.11 alebo novší už musí byť nainštalovaný, ako sme to urobili pred chvíľou.

### Snímka 42 · Krok 3 – Otvorenie priečinka projektu

⏱️ `0:50–0:51`

Tretí krok: otvorte priečinok projektu – File, Open Folder, a vyberte C dvojbodka GAMS podčiarkovník lecture. Alebo kliknite pravým tlačidlom na priečinok v Prieskumníkovi Windows a vyberte Open with Code. Potvrďte, že dôverujete autorom.

Pravidlo znie: jeden priečinok je jeden projekt. Vaše súbory Pythonu aj virtuálne prostredie sú v tomto priečinku. Vždy otvárajte celý priečinok, nie iba jeden súbor.

### Snímka 43 · Krok 4 – Výber prostredia Pythonu

⏱️ `0:51–0:52`

Štvrtý krok: výber prostredia Pythonu. Otvorte Command Palette cez Control Shift P.

Možnosť A: ak prostredie už existuje, pretože ste ho vytvorili v PowerShell, vyberte Python: Select Interpreter a zvoľte bodka gamspy podčiarkovník venv.

Možnosť B: ak ste kroky v PowerShell vynechali, vyberte Python: Create Environment, potom Venv a potom svoju verziu Pythonu. VS Code vytvorí prostredie v priečinku a automaticky ho aktivuje. Toto je najjednoduchšia cesta.

Vybrané prostredie sa zobrazuje v stavovom riadku vpravo dole.

### Snímka 44 · Krok 5 – Inštalácia GAMSPy do prostredia

⏱️ `0:52–0:53`

Piaty krok: nainštalujte GAMSPy do tohto prostredia. Otvorte integrovaný terminál cez Terminal, New Terminal. Výzva by mala začínať názvom prostredia – skontrolujte to skôr, ako niečo nainštalujete.

Potom napíšte pip install gamspy matplotlib a znova skontrolujte verziu. Matplotlib inštalujeme už teraz, pretože neskôr ho použijeme na vykreslenie výsledkov.

### Snímka 45 · Krok 6 – Spustenie prvého skriptu

⏱️ `0:53–0:54`

Šiesty krok: spustite svoj prvý skript. Vytvorte súbor test podčiarkovník gamspy bodka py, vložte testovací model a uložte ho.

Teraz sú tri spôsoby, ako ho spustiť. Kliknite na tlačidlo Run Python File vpravo hore v editore. Alebo kliknite pravým tlačidlom a vyberte Run Python File in Terminal. Alebo označte niekoľko riadkov a stlačte Shift Enter, čím spustíte iba výber.

Výstup sa zobrazí v paneli Terminal – a opäť, ModelStatus OptimalGlobal a jedna celá nula znamená, že všetko funguje.

### Snímka 46 · Skratky VS Code pre túto prednášku

⏱️ `0:54–0:55`

A skratky VS Code, ktoré dnes potrebujeme. Najdôležitejšia je Control Shift P, Command Palette – odtiaľ urobíte všetko. Control Shift X pre rozšírenia, Control Shift spätný apostrof pre nový terminál, Shift Enter na spustenie výberu, F5 na spustenie ladenia, Control lomka na zakomentovanie riadka a Control P na rýchle otvorenie súboru.

Teraz sme pripravení: Príklad 1 zapísaný v GAMSPy.

---

## ČASŤ 4 — PRÍKLAD 1 V GAMSPY 0:55 – 1:05

### Snímka 47 · Časť 4 — Príklad 1 v GAMSPy

⏱️ `0:55`

Štvrtá časť: ten istý model ako predtým, teraz v Pythone.

### Snímka 48 · GAMS → GAMSPy: slovník

⏱️ `0:55–0:57`

Na preklad z GAMS do GAMSPy potrebujeme malý slovník. Tu je.

Celý súbor GAMS zodpovedá jednému Containeru v GAMSPy. Každý symbol žije vnútri tohto containera.

Množina GAMS sa stáva gp bodka Set, s containerom, názvom a záznamami. Parameter sa stáva gp bodka Parameter, s doménou a záznamami. Kladná premenná sa stáva gp bodka Variable s type rovná sa positive a voľná premenná s type rovná sa free. Rovnica sa stáva gp bodka Equation.

Definícia s dvoma bodkami sa stáva priradením s hranatými zátvorkami a tromi bodkami: e, zátvorka, bodka bodka bodka, zátvorka, rovná sa ľavá strana, dvojité rovná sa, pravá strana. Rovná-l-rovná a rovná-g-rovná sa stávajú operátormi Pythonu menšie alebo rovné a väčšie alebo rovné. Súčet sum z GAMS sa stáva gp bodka Sum.

Príkaz model sa stáva gp bodka Model so zoznamom rovníc a príkaz solve sa rozdelí: typ úlohy, smer a účelová funkcia sú argumentmi modelu a potom zavoláme metódu solve. A namiesto Display používame print, s toValue alebo records.

Kľúčová myšlienka: každý symbol GAMS sa stáva objektom Pythonu, ktorý žije v Containeri. A tri bodky v hranatých zátvorkách znamenajú: pre všetky prvky domény.

### Snímka 49 · Vedľa seba

⏱️ `0:57–0:59`

Tu sú obe verzie vedľa seba – GAMS vľavo, GAMSPy vpravo. Prejdime ich blok po bloku.

Premenné: v GAMS jeden riadok deklaruje x jedna a x dva ako kladné. V Pythone je každá premenná samostatný objekt, s type rovná sa positive, a Z s type rovná sa free.

Rovnice: v GAMS jeden riadok s tromi názvami. V Pythone tri objekty, obj, eq jedna a eq dva.

Definície: riadky GAMS s dvoma bodkami sa stávajú priradeniami s tromi bodkami v zátvorkách. Relácie sa píšu operátormi Pythonu: dvojité rovná sa a menšie alebo rovné. Všimnite si, že na konci nie je bodkočiarka.

Model a riešenie: v GAMS dva príkazy. V Pythone jedno volanie gp bodka Model, s equations rovná sa m bodka getEquations – to je ekvivalent lomka all lomka – a problem LP, sense max, objective Z. Potom example01 bodka solve.

A nakoniec print s toValue.

Verzia v Pythone je o niečo dlhšia, ale každý riadok má vľavo svojho priameho partnera.

### Snímka 50 · Ako previesť model – krok za krokom

⏱️ `0:59–1:00`

Prevod ako recept v siedmich krokoch. Importujte gamspy a vytvorte Container. Každá deklarácia premennej sa stáva gp bodka Variable s typom. Rovnice sa deklarujú pomocou gp bodka Equation a definujú pomocou troch bodiek v zátvorkách. Relácie sa stávajú operátormi Pythonu a bodkočiarky odpadajú. Model dostane zoznam rovníc, typ úlohy, smer a účelovú funkciu. Zavoláte solve – predvolený riešič LP je opäť CPLEX. A výsledky čítate pomocou toValue pre skaláry alebo records, čo je pandas DataFrame, pre indexované symboly.

Upozornenie dole je najčastejšou pascou. Ak napíšete eq jedna rovná sa, bez zátvoriek a troch bodiek, rovnicu nedefinujete. Jednoducho prepíšete premennú Pythonu eq jedna výrazom a model potichu stratí svoje ohraničenie.

### Snímka 51 · Spustenie vo VS Code (NAŽIVO)

⏱️ `1:00–1:02`

Spustime ho, naživo vo VS Code. Otvorte priečinok, skontrolujte prostredie, vytvorte súbor example01 podčiarkovník gams podčiarkovník style bodka py, vložte kód, uložte ho a kliknite na Run Python File. Výsledok sa zobrazí v termináli.

Ak chcete vidieť úplný log riešiča, ako ho poznáte z GAMS Studio, odovzdajte metóde solve argument output rovná sa sys bodka stdout.

> 🗒️ *UKÁŽKA NAŽIVO: spustiť code/gamspy/example01_gams_style.py vo VS Code, potom ešte raz s output=sys.stdout, aby bol vidieť log riešiča. Približne 1,5 minúty.*

Model teda beží v Pythone a log je rovnaký ako v GAMS – pretože pod ním je to isté výpočtové jadro.

### Snímka 52 · Výsledky

⏱️ `1:02–1:03`

Výsledky. Metóda solve vráti súhrnnú tabuľku, pandas DataFrame: stav riešiča normálne dokončenie, stav modelu globálne optimálny, účelová funkcia šesť, typ modelu LP, riešič CPLEX a čas riešenia niekoľko milisekúnd.

Hodnoty: x jedna rovná sa dva, x dva rovná sa nula, Z rovná sa šesť.

A ak vypíšete x jedna bodka records, dostanete úplný záznam premennej – úroveň, marginálnu hodnotu, dolnú a hornú hranicu a mierku.

Opäť rovnaký výsledok ako na papieri a v GAMS: x jedna rovná sa dva, x dva rovná sa nula, Z rovná sa šesť.

### Snímka 53 · Po pythonovsky – kratšie

⏱️ `1:03–1:04`

V GAMSPy to môžeme napísať kratšie. Účelová funkcia nepotrebuje premennú Z a rovnicu obj. Výraz tri x jedna plus dva x dva môžeme odovzdať priamo ako účelovú funkciu modelu.

Potom vypíšeme stav modelu, hodnotu účelovej funkcie a marginálne hodnoty dvoch ohraničení, ktoré prečítame zo záznamov.

Výstup: optimálny, šesť a marginálne hodnoty nula a tri. To odpovedá na jednu z otázok cvičenia z druhej časti: eq dva je aktívne, s tieňovou cenou tri, a eq jedna má rezervu. Ak by sme mohli druhé ohraničenie uvoľniť o jednu jednotku, účelová funkcia by narástla o tri.

### Snímka 54 · Bonus: späť do GAMS a LaTeXu

⏱️ `1:04–1:05`

Malý bonus. Model GAMSPy sa dá exportovať späť do GAMS pomocou toGams a do LaTeXu pomocou toLatex. Vpravo vidíte vygenerovaný súbor GAMS – ten istý model, ktorý sme na začiatku napísali ručne.

To sa hodí, ak chcete model otvoriť v GAMS Studio, alebo ak píšete článok či záverečnú prácu a potrebujete rovnice v LaTeXu.

Ďalej realistickejšie dáta: Príklad 3.

---

## ČASŤ 5 — PRÍKLAD 3: MIEŠANIE PRÚDOV 1:05 – 1:20

### Snímka 55 · Časť 5 — Príklad 3: Miešanie prúdov

⏱️ `1:05`

Piata časť: Príklad 3, miešanie prúdov. Tu sa naučíme množiny, parametre a dáta v GAMSPy. Príklad je opäť podľa profesora Ahmetovića a úloha pochádza z knihy Edena.

### Snímka 56 · Úloha

⏱️ `1:05–1:06`

Úloha. Dva vstupné prúdy sa miešajú na zmes MEA a vody. MEA je monoetanolamín, rozpúšťadlo používané napríklad pri zachytávaní oxidu uhličitého.

Prúd jedna obsahuje osemdesiat percent MEA a dvadsať percent vody a stojí osemdesiat centov za kilogram. Prúd dva obsahuje šesťdesiatosem percent MEA a tridsaťdva percent vody a stojí šesťdesiat centov za kilogram.

Produkt môže obsahovať najviac dvadsaťpäť hmotnostných percent vody. Otázka: pri akom pomere miešania sú náklady na jeden kilogram zmesi minimálne? Prúd dva je lacnejší, ale má príliš veľa vody – musíme teda nájsť správnu rovnováhu.

### Snímka 57 · Matematická formulácia

⏱️ `1:06–1:08`

Matematická formulácia, na báze jedného kilogramu zmesi.

Premenné sú m jedna a m dva, hmotnosti prúdu jedna a prúdu dva v kilogramoch, a z, náklady na jeden kilogram zmesi v centoch.

Minimalizujeme z rovná sa osemdesiat m jedna plus šesťdesiat m dva. Za podmienky obsahu vody: nula celá dva m jedna plus nula celá tridsaťdva m dva je menšie alebo rovné nula celá dvadsaťpäť. A hmotnostnej bilancie: m jedna plus m dva rovná sa jedna. Obe hmotnosti sú nezáporné.

Obrázok vpravo ukazuje grafické riešenie. Vďaka hmotnostnej bilancii ležia všetky prípustné body na hrubej úsečke. Ohraničenie vody túto úsečku pretína a najlacnejší prípustný bod je tam, kde je obsah vody presne dvadsaťpäť percent: m jedna rovná sa nula celá päťsto osemdesiattri, m dva rovná sa nula celá štyristo sedemnásť a náklady sú sedemdesiatjeden celá šesťdesiatsedem centov za kilogram.

Malý bod na diskusiu: v pôvodnej prednáške o GAMS sa tento model riešil ako NLP. Všetky rovnice sú však lineárne, preto je správnym typom modelu LP. Vždy vyberajte najjednoduchší typ modelu, ktorý zodpovedá vašim rovniciam.

### Snímka 58 · Krok 1 – priamy preklad

⏱️ `1:08–1:10`

Prvý krok: priamy preklad, presne v štýle Príkladu 1.

Vytvoríme container a tri premenné, m jedna, m dva a z. Nový je tu argument description – krátky text, ktorý dokumentuje význam a jednotku každej premennej. Je to dobrá prax a zobrazí sa aj vo výsledkoch.

Potom tri rovnice: obj, water a balance. Definície nasledujú matematiku: z sa rovná osemdesiat m jedna plus šesťdesiat m dva, obsah vody menší alebo rovný nula celá dvadsaťpäť a bilancia, m jedna plus m dva dvojité rovná sa jedna. Dvojité rovná sa sa používa pre ohraničenie typu rovnosť.

Potom model s problem LP, sense min a objective z, a riešenie.

Výsledok: z sa rovná sedemdesiatjeden celá šesťsto šesťdesiatsedem centov za kilogram, m jedna nula celá päťsto osemdesiattri, m dva nula celá štyristo sedemnásť. Presne grafické riešenie. Takže tu nič nové – iba dvojité rovná sa pre bilanciu a popisy.

### Snímka 59 · Problém: čísla sú vnútri rovníc

⏱️ `1:10–1:11`

Tento model má však problém. Všetky čísla – ceny a zloženia – sú napevno zapísané vnútri rovníc. Ak chcete tretí prúd alebo tretiu zložku, musíte prepísať celý model. A skutočné modely majú stovky prúdov, s dátami, ktoré prichádzajú zo súborov Excelu alebo z databáz.

Riešením je oddeliť model od dát. Na to slúžia množiny a parametre. Tabuľka ukazuje pojmy: indexovú množinu, dáta ako parameter, dvojrozmernú tabuľku, indexovanú premennú a súčet cez množinu – každý v GAMS aj v GAMSPy.

### Snímka 60 · Krok 2 – všeobecná (indexovaná) formulácia

⏱️ `1:11–1:13`

Tu je teda všeobecná, indexovaná formulácia.

Máme dve množiny: f, vstupné prúdy, a c, zložky. Parametre: cost od f, cena každého prúdu; w od f a c, hmotnostný zlomok zložky c v prúde f; wmax od c, najvyšší povolený podiel zložky c v produkte; a M, množstvo produktu. A jednu indexovanú premennú: x od f, hmotnosť prúdu f v produkte.

Minimalizujeme súčet cez f z ceny krát x. Za podmienok: pre každú zložku c, ktorá má limit, je súčet cez f z w krát x menší alebo rovný wmax krát M. A súčet všetkých x sa rovná M.

Porovnajte to s verziou s dvoma premennými. Tam bolo každé číslo zapísané v rovnici. Tu rovnice obsahujú iba symboly. A to je veľká výhoda: model sa nemení, keď pridáte prúdy alebo zložky. Menia sa iba dáta.

### Snímka 61 · Množiny a dáta

⏱️ `1:13–1:14`

Takto zadáme množiny a dáta v GAMSPy.

Množina f má záznamy feed jedna a feed dva a množina c má záznamy MEA a water.

Zloženie je pandas DataFrame s jedným riadkom pre každú kombináciu prúdu a zložky a jej hodnotou. V praxi by mohlo prísť priamo z Excelu – to by bol jeden riadok, pandas read excel.

Potom parametre: w s doménou f a c, naplnený z DataFrame; cost s doménou f; wmax s doménou c – všimnite si, že limit zadávame iba pre vodu; a skalár M rovný jednej.

### Snímka 62 · Premenné, rovnice, model

⏱️ `1:14–1:16`

Teraz premenné, rovnice a model.

Premenná x je kladná a má doménu f – v skutočnosti sú to teda dve premenné, jedna pre každý prúd.

Rovnica spec má doménu c – jedna rovnica pre každú zložku. A balance je jediná rovnica.

Pozrite sa na definíciu spec. Spec od c, bodka where, wmax od c. To znamená: vytvor rovnicu iba pre tie zložky, pre ktoré má wmax hodnotu. Pre MEA limit nemáme, takže rovnica nevznikne; pre vodu vznikne jedna. V GAMS je to dolárová podmienka. A potom súčet cez f z w krát x, menší alebo rovný wmax krát M. Bilancia hovorí, že súčet všetkých x sa rovná M.

Model minimalizuje súčet cez f z ceny krát x a vyriešime ho.

Malá tabuľka dole opakuje tri nové veci a ich ekvivalenty v GAMS: indexovanú rovnicu, podmienku where a súčet.

### Snímka 63 · Výsledky

⏱️ `1:16–1:17`

Výsledky. Minimálne náklady sú opäť sedemdesiatjeden celá šesťsto šesťdesiatsedem centov za kilogram. Keďže x je indexované, x bodka records dá malú tabuľku s jedným riadkom pre každý prúd: prúd jedna nula celá päťsto osemdesiattri, prúd dva nula celá štyristo sedemnásť.

A odvodené hodnoty môžeme počítať priamo v GAMSPy. Tu vytvoríme parameter product a vypočítame zloženie produktu: sedemdesiatpäť percent MEA a dvadsaťpäť percent vody. Obsah vody je presne na limite – ohraničenie je aktívne. Preto optimum leží presne na tejto hranici.

### Snímka 64 · Čo ak: zmena limitu vody (NAŽIVO)

⏱️ `1:17–1:19`

A teraz skutočná sila Pythonu. Analýza čo ak: ako sa zmení optimum, ak zmeníme limit vody?

Napíšeme jednoduchý cyklus cez niekoľko limitov. V každom kroku nastavíme nové záznamy pre wmax, model znova vyriešime a vypíšeme výsledky. Meníme iba dáta – model sa neprepisuje.

> 🗒️ *NAŽIVO: spustiť code/gamspy/example03_indexed.py a ukázať tabuľku čo ak v termináli. Približne 1 minúta.*

Pozrite sa na tabuľku. Pri limite dvadsať percent sú náklady osemdesiat a používa sa iba prúd jedna. S rastúcim limitom sa dá použiť viac lacného prúdu dva a náklady klesajú. Pri tridsiatich dvoch percentách sa používa iba prúd dva, za šesťdesiat centov.

Pod dvadsať percent je úloha neprípustná, pretože už aj čistý prúd jedna obsahuje dvadsať percent vody. A nad tridsaťdva percent limit už nie je aktívny a lacnejší prúd dva sa použije samostatne.

Ďalej túto tabuľku premeníme na graf v Matplotlib.

### Snímka 65 · Vyskúšajte si

⏱️ `1:19–1:20`

Niekoľko cvičení pre vás. Pridajte tretí prúd s deväťdesiatimi percentami MEA, desiatimi percentami vody a cenou deväťdesiatpäť centov za kilogram – uvidíte, že sa menia iba dáta. Pridajte minimálny obsah MEA sedemdesiatdva percent, s parametrom wmin a rovnicou väčšie alebo rovné. Vyrobte tisíc kilogramov namiesto jedného. A vyskúšajte limit vody nula celá pätnásť – a skontrolujte mixing bodka status. Uvidíte, že model je neprípustný, čo je dobrá príležitosť naučiť sa čítať stav modelu v Pythone.

---

## ČASŤ 6 — OD MODELU K WEBOVEJ STRÁNKE 1:20 – 1:40

### Snímka 66 · Časť 6 — Od modelu k webovej stránke

⏱️ `1:20`

Šiesta časť: od modelu k webovej stránke. GAMSPy, Matplotlib a Flask, v siedmich krokoch, z ktorých každý môžete otestovať skôr, ako budete pokračovať.

### Snímka 67 · Čo postavíme

⏱️ `1:20–1:22`

Najprv sa pozrime, čo postavíme. Sledujte jednu požiadavku diagramom.

Používateľ posunie posuvník v prehliadači. JavaScript pošle požiadavku do Flasku, malého webového servera napísaného v Pythone, v súbore app bodka py. Flask zavolá náš model GAMSPy v súbore mixing podčiarkovník model bodka py, ktorý odovzdá úlohu riešiču, CPLEX. Výsledok sa vráti do Flasku. Flask tiež požiada Matplotlib v súbore plot podčiarkovník mixing bodka py, aby nakreslil graf. A potom Flask pošle prehliadaču čísla ako JSON a graf ako obrázok PNG.

Tabuľka ukazuje súbory a krok, v ktorom každý z nich vytvoríme: model ako funkciu v druhom kroku, graf v treťom kroku, Flask rastúci od štvrtého po šiesty krok a výslednú interaktívnu stránku v siedmom kroku.

### Snímka 68 · Krok 1 – Inštalácia Matplotlib a Flask

⏱️ `1:22–1:23`

Prvý krok: v termináli VS Code, s aktívnym prostredím, nainštalujte Matplotlib a Flask pomocou pip.

Každý krok má test. Tu je to jednoriadkový príkaz Pythonu, ktorý importuje gamspy, matplotlib a flask a vypíše all OK. Ak uvidíte all OK, pokračujte.

Vpravo je štruktúra priečinka, ktorú vytvoríme: priečinok webapp s modelom, skriptom na graf, tromi priebežnými aplikáciami Flask, výslednou aplikáciou a priečinkom templates so stránkou HTML.

### Snímka 69 · Krok 2 – Model ako opakovane použiteľná funkcia

⏱️ `1:23–1:25`

Druhý krok: Príklad 3 zabalíme do opakovane použiteľnej funkcie solve mixing. Jej vstupmi sú limit vody, dve ceny a množstvo. Jej výstupom je slovník s výsledkami.

Vnútri vytvoríme pri každom volaní nový container, potom množiny, parametre, premenné a rovnice, presne ako predtým, a model vyriešime. Ak stav nie je optimálny, vrátime ok false a stav. Inak vrátime ok true, náklady a množstvá oboch prúdov.

Prečo funkcia? Pretože webový server ju bude volať s rôznymi vstupmi pri každej požiadavke. A prečo slovník? Pretože slovník sa veľmi ľahko pošle prehliadaču ako JSON.

Test: spustite python mixing podčiarkovník model bodka py. Mali by ste vidieť jeden optimálny výsledok pre dvadsaťpäť percent a jeden neprípustný výsledok pre pätnásť percent.

### Snímka 70 · Krok 3 – Graf „čo ak" v Matplotlib

⏱️ `1:25–1:27`

Tretí krok: graf čo ak v Matplotlib.

Prvé dva riadky sú pre webové aplikácie dôležité. Matplotlib use Agg znamená: bez okna, kresli iba do súboru alebo do pamäte. Webový server nemá obrazovku.

Potom model vyriešime pre trinásť limitov vody, od dvadsiatich po tridsaťdva percent, a nakreslíme dva grafy: náklady vľavo a množstvá prúdov vpravo.

Prečo dva samostatné grafy? Pretože náklady sú v centoch na kilogram a množstvá v kilogramoch – rôzne jednotky. Nikdy ich nedávajte do jedného grafu s dvoma osami y; je to mätúce. V kóde používame aj vyrovnávaciu pamäť, takže trinásť riešení sa zapamätá pre každú kombináciu cien a stránka zostane rýchla.

Test: spustite plot podčiarkovník mixing bodka py a otvorte súbor PNG. Mal by vyzerať ako obrázok vpravo.

### Snímka 71 · Krok 4 – Najmenšia aplikácia Flask

⏱️ `1:27–1:29`

Štvrtý krok: najmenšia možná aplikácia Flask, iba niekoľko riadkov.

Importujeme Flask a vytvoríme aplikáciu. Dekorátor app bodka route s lomkou spája adresu – koreň webovej stránky – s funkciou Pythonu. Funkcia home vráti kúsok HTML, nadpis Hello from Flask. A app bodka run s debug rovná sa true spustí server; v režime ladenia sa automaticky reštartuje pri každom uložení zmeny.

Test: spustite python app podčiarkovník step four bodka py a v prehliadači otvorte adresu sto dvadsaťsedem bodka nula bodka nula bodka jedna, dvojbodka päťtisíc. Mali by ste vidieť pozdrav. Pred ďalším krokom zastavte server cez Control C.

### Snímka 72 · Krok 5 – Formulár, ktorý rieši model

⏱️ `1:29–1:31`

Piaty krok: formulár, ktorý rieši model. Teraz prehliadač pošle číslo a Flask zavolá GAMSPy.

Stránka je malá šablóna v reťazci Pythonu. Má formulár s jedným číselným vstupom pre maximálny obsah vody a tlačidlom Solve. Pod formulárom je podmienka: ak je výsledok ok, zobraz minimálne náklady; inak zobraz No feasible mixture so stavom. Dvojité zložené zátvorky vypisujú hodnotu a zložená zátvorka so znakmi percenta je rozhodovanie – to je šablónovací jazyk Jinja, ktorý Flask používa.

Trasa teraz prijíma GET aj POST. Prečíta číslo z formulára, zavolá solve mixing s limitom vody vydeleným stom a vykreslí stránku s výsledkom.

Test: zadajte dvadsaťdva a dostanete sedemdesiatšesť celá šesťdesiatsedem centov za kilogram. Zadajte pätnásť a dostanete no feasible mixture, teda žiadnu prípustnú zmes.

### Snímka 73 · Krok 6 – Pridanie grafu z Matplotlib

⏱️ `1:31–1:33`

Šiesty krok: pridáme graf. Druhá trasa, lomka plot bodka png, vráti graf z Matplotlib ako obrázok.

Funkcia prečíta limit vody z adresy, vyrieši model a nakreslí graf s vyznačeným aktuálnym prípadom. Potom graf uloží nie na disk, ale do pamäte – do objektu BytesIO, ktorý sa správa ako súbor v pamäti. Graf zatvoríme, aby sme uvoľnili pamäť – to je dôležité na serveri, ktorý beží celé dni. A bajty vrátime s typom image lomka png.

Na stránke jednoducho použijeme značku obrázka, ktorej zdrojom je táto adresa, s limitom vody ako parametrom.

Test: otvorte adresu grafu priamo v prehliadači, s water rovná sa dvadsaťdva, a mali by ste vidieť graf. Potom otvorte hlavnú stránku – graf je teraz pod formulárom.

### Snímka 74 · Krok 7 – Interaktívna stránka: JSON API

⏱️ `1:33–1:35`

Siedmy krok je výsledná interaktívna stránka a má dve časti. Najprv serverová strana, app bodka py.

Sú tu tri trasy. Koreň vráti stránku HTML z priečinka templates. Trasa lomka api lomka solve vráti výsledky ako JSON: z adresy prečíta limit vody a obe ceny, zavolá solve mixing a slovník prevedie pomocou jsonify. A trasa lomka plot bodka png vráti graf, ako v šiestom kroku.

Toto je malé API – aplikačné programové rozhranie. Stránka si pýta dáta a server odpovedá číslami, nie celou stránkou.

Test: otvorte adresu API s water dvadsaťpäť a cenami osemdesiat a šesťdesiat. Mali by ste vidieť JSON zo snímky: cost sedemdesiatjeden celá šesťdesiatsedem, feed jedna nula celá päťsto osemdesiattri, feed dva nula celá štyristo sedemnásť, ok true.

### Snímka 75 · Krok 7 – Interaktívna stránka: posuvníky + JavaScript

⏱️ `1:35–1:36`

Druhou časťou je strana prehliadača, súbor index bodka html. Sú tu tri posuvníky – pre limit vody a dve ceny – a obrázok pre graf.

Malá funkcia v JavaScripte, update, sa spustí pri každej zmene posuvníka. Zostaví dotaz z hodnôt posuvníkov, načíta JSON z nášho API – tam GAMSPy rieši model – a zapíše náklady do stránky. Potom zmení zdroj obrázka, takže Matplotlib nakreslí nový graf.

Test: spustite python app bodka py a hýbte posuvníkmi. Čísla aj graf by sa mali aktualizovať.

### Snímka 76 · Výsledok (NAŽIVO)

⏱️ `1:36–1:39`

A toto je výsledok: interaktívny optimalizátor miešania. Vľavo posuvníky pre limit vody a cenu prúdu jedna a prúdu dva. Hore karty s minimálnymi nákladmi, pomerom prúdov ako pruhom a obsahom vody v produkte. A graf čo ak, s aktuálnym prípadom vyznačeným prerušovanou čiarou. Ak je vstup neprípustný, pod dvadsať percent vody, namiesto čísel sa zobrazí červené upozornenie.

> 🗒️ *UKÁŽKA NAŽIVO: python app.py v code/webapp, otvoriť http://127.0.0.1:5000. Nastaviť prúd 1 lacnejší ako prúd 2 (70 vs 90): limit vody už nie je aktívny a používa sa iba prúd 1. Potom posunúť limit vody pod 20 %. Približne 2,5 minúty.*

S približne sto riadkami Pythonu a krátkou stránkou HTML sa teda z optimalizačného modelu stal nástroj, ktorý môže v prehliadači použiť ktokoľvek, bez toho, aby o GAMS čokoľvek vedel.

### Snímka 77 · Zhrnutie a ďalšie kroky

⏱️ `1:39–1:40`

Zhrňme webovú časť ako štyri vrstvy. Optimalizačný model je GAMSPy, v mixing podčiarkovník model bodka py. Vizualizácia je Matplotlib, v plot podčiarkovník mixing bodka py. Webový server je Flask, v app bodka py. A používateľské rozhranie je HTML a JavaScript, v index bodka html.

Ako pokračovať? Pridajte tretí prúd alebo minimálny obsah MEA – mení sa iba súbor modelu. Načítajte dáta o prúdoch z Excelu pomocou pandas. A nasaďte aplikáciu pre študentov, na univerzitnom serveri, alebo použite GAMS MIRO, ak chcete hotové rozhranie. Rovnaký vzor funguje pre ľubovoľný model GAMSPy: funkcia, trasa JSON a stránka.

---

## ZHRNUTIE A OTÁZKY 1:40 – 2:00

### Snímka 78 · Čo sme sa dnes naučili

⏱️ `1:40–1:43`

Čo sme sa dnes naučili? Porovnajme GAMS a GAMSPy riadok po riadku.

Jazyk: GAMS má vlastný algebraický jazyk v súboroch bodka gms, kým GAMSPy je balík pre Python.

Prostredie: GAMS Studio pre GAMS a VS Code alebo Jupyter pre GAMSPy.

Výsledky: v GAMS výpis a súbory GDX; v GAMSPy pandas DataFrames a metóda toValue.

Dáta: v GAMS tabuľky v modeli alebo súbory GDX; v GAMSPy pandas, Excel a databázy – celý svet Pythonu.

Aplikácie: GAMS má MIRO; s GAMSPy môžete použiť Matplotlib, Flask alebo akýkoľvek iný nástroj Pythonu, ako sme to dnes urobili.

A riešiče sú rovnaké: CPLEX, CONOPT, BARON, HiGHS a mnohé ďalšie.

Takže: rovnaký algebraický model, dva spôsoby zápisu. GAMS si vyberte na čisté modelovanie a GAMSPy, keď je model súčasťou väčšieho pracovného postupu v Pythone – s dátami, grafmi a webovými stránkami.

### Snímka 79 · Kontrolné otázky

⏱️ `1:43–1:52`

Overme si, čo vám zostalo v hlave. Otázky budem klásť jednu po druhej – skúste odpovedať skôr, ako budem pokračovať.

> 🗒️ *Prečítať každú otázku, počkať na odpovede študentov, potom potvrdiť očakávanou odpoveďou.*

**Otázka jedna:** Aká je kľúčová myšlienka algebraického modelovacieho jazyka, ako je GAMS?

> ✅ **Očakávané:** Model píšete ako matematiku – množiny, parametre, premenné, rovnice – a je oddelený od riešiča; ten istý model sa dá riešiť rôznymi riešičmi.

**Otázka dva:** Prečo musí byť účelová premenná Z v GAMS deklarovaná ako Free?

> ✅ **Očakávané:** Účelová funkcia môže nadobudnúť akúkoľvek hodnotu, kladnú aj zápornú; GAMS vyžaduje, aby účelová premenná bola voľná, bez obmedzenia znamienka.

**Otázka tri:** Čo znamenajú rovná-e-rovná, rovná-l-rovná a rovná-g-rovná a ako sa zapisujú v GAMSPy?

> ✅ **Očakávané:** Rovná sa, menšie alebo rovné, väčšie alebo rovné; v GAMSPy dvojité rovná sa, menšie alebo rovné a väčšie alebo rovné.

**Otázka štyri:** Ktoré ohraničenie je v optime Príkladu 1 aktívne a ako to zistíte?

> ✅ **Očakávané:** Eq dva, x jedna plus x dva menšie alebo rovné dvom; jeho marginálna hodnota je tri, kým eq jedna má marginálnu hodnotu nula a rezervu.

**Otázka päť:** Čo robia tri bodky v hranatých zátvorkách v eq jedna, zátvorka, bodka bodka bodka, rovná sa – a čo sa stane bez nich?

> ✅ **Očakávané:** Definujú rovnicu na celej jej doméne; bez nich prepíšete premennú Pythonu a ohraničenie sa stratí.

**Otázka šesť:** Prečo je pre Príklad 3 správnym typom modelu LP, a nie NLP?

> ✅ **Očakávané:** Všetky rovnice sú lineárne; vždy vyberajte najjednoduchší typ modelu, ktorý zodpovedá.

**Otázka sedem:** Prečo oddeľujeme model od dát pomocou množín a parametrov?

> ✅ **Očakávané:** Nové prúdy alebo zložky menia iba dáta, nie rovnice; dáta môžu prichádzať z Excelu alebo databáz a analýzy čo ak menia iba dáta.

**Otázka osem:** Prečo je limit vody pod dvadsať percent neprípustný?

> ✅ **Očakávané:** Už aj čistý prúd jedna, prúd s najmenším obsahom vody, obsahuje dvadsať percent vody, takže žiadna zmes nemôže mať menej.

Ďakujem. Toto boli najdôležitejšie body dneška.

### Snímka 80 · Kde pokračovať

⏱️ `1:52–1:53`

Kde pokračovať? Knižnica modelov GAMS Model Library s viac ako štyristo modelmi, mnohé z nich z chemického inžinierstva a strojárstva. Príklady GAMSPy na GitHube. Príručka GAMSPy pre používateľov GAMS. A všetok dnešný kód, ktorý si môžete stiahnuť ako súbor zip z odkazu na tejto snímke.

A nápad na domácu úlohu: rozšírte Príklad 3 o tretí prúd a minimálny obsah MEA a potom výsledok zobrazte vo webovej aplikácii.

### Snímka 81 · Poďakovanie

⏱️ `1:53–1:54`

Poďakovanie. Príklady 1 a 3 sú prevzaté z prednášky profesora Elvisa Ahmetovića z Univerzity v Tuzle, Matematické modelovanie v GAMS, ktorú predniesol ako prednášku Erasmus+ na našej univerzite v novembri 2025. Úloha Príkladu 3 pochádza z knihy Edena, Process Synthesis, Simulation and Optimization. A veľká vďaka našim hostiteľom za pozvanie.

### Snímka 82 · Ďakujem – otázky?

⏱️ `1:54–2:00`

> 🗒️ *Túto snímku nechať zobrazenú počas otázok.*

Veľmi pekne ďakujem za pozornosť. Na snímke nájdete môj kontakt a zdroje a ďalšie čítanie: prednášku profesora Ahmetovića, knihu Edena, príručku GAMS User's Guide, dokumentáciu GAMS a GAMSPy a dokumentáciu VS Code, Matplotlib a Flask.

Teraz rád odpoviem na vaše otázky.

---

*Koniec textu*
