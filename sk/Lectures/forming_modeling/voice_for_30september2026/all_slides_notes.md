# Softvér a metódy simulácie procesov tvárnenia

**Hovorený text — prednáška 2** · Modelovanie a simulácia procesov I – tvárnenie (MSPO2_6I) · MTF STU Trnava

Prezentácia: forming-software-lecture2-SK.html (49 snímok) · Trvanie: 120 minút bez prestávky

> [!TIP]
> **Ako používať tento text**
>
> - Každý blok zodpovedá jednej snímke: [číslo · názov · časový údaj].
> - Text v hranatých zátvorkách [ ] je pokyn pre prednášajúceho, nečíta sa nahlas.
> - Predpokladané tempo reči: asi 110–120 slov za minútu. Snímky s videom obsahujú iba krátky úvod a záver; čas vyplní samotné video.
> - Snímka 38 (druhé video o DEFORMe) je voliteľná — ak meškáte, preskočte ju.

## Prehľad snímok

| # | Snímka | Čas |
|--:|---|---|
| | **[ÚVOD](#úvod-000--010)** | **0:00 – 0:10** |
| 1 | [Titulná snímka](#snímka-1--titulná-snímka) | 0:00–0:02 |
| 2 | [Motivácia: od pokusov v lisovni k virtuálnemu odskúšaniu](#snímka-2--motivácia-od-pokusov-v-lisovni-k-virtuálnemu-odskúšaniu) | 0:02–0:05 |
| 3 | [Otázky, na ktoré simulácia tvárnenia odpovedá](#snímka-3--otázky-na-ktoré-simulácia-tvárnenia-odpovedá) | 0:05–0:07 |
| 4 | [Kam zapadá dnešná prednáška](#snímka-4--kam-zapadá-dnešná-prednáška) | 0:07–0:08 |
| 5 | [Program dnešnej prednášky](#snímka-5--program-dnešnej-prednášky) | 0:08–0:10 |
| | **[ČASŤ I — ANALYTICKÉ METÓDY](#časť-i--analytické-metódy-010--025)** | **0:10 – 0:25** |
| 6 | [Časť I — Analytické metódy tvárnenia](#snímka-6--časť-i--analytické-metódy-tvárnenia) | 0:10 |
| 7 | [Klasické analytické metódy teórie plasticity](#snímka-7--klasické-analytické-metódy-teórie-plasticity) | 0:10–0:13 |
| 8 | [Metóda rezov: pechovanie valca](#snímka-8--metóda-rezov-pechovanie-valca) | 0:13–0:17 |
| 9 | [Ťahanie a pretláčanie: výsledky v uzavretom tvare](#snímka-9--ťahanie-a-pretláčanie-výsledky-v-uzavretom-tvare) | 0:17–0:19 |
| 10 | [Riešenie analytických modelov: MATLAB · Python · GAMS](#snímka-10--riešenie-analytických-modelov-matlab--python--gams) | 0:19–0:23 |
| 11 | [Prečo analytické metódy nestačia](#snímka-11--prečo-analytické-metódy-nestačia) | 0:23–0:25 |
| | **[ČASŤ II — SOFTVÉR PRE TVÁRNENIE](#časť-ii--softvér-pre-tvárnenie-025--107)** | **0:25 – 1:07** |
| 12 | [Časť II — Softvér na simuláciu tvárnenia](#snímka-12--časť-ii--softvér-na-simuláciu-tvárnenia) | 0:25 |
| 13 | [Dve skupiny softvéru pre tvárnenie](#snímka-13--dve-skupiny-softvéru-pre-tvárnenie) | 0:25–0:28 |
| 14 | [Každý program má rovnaký postup](#snímka-14--každý-program-má-rovnaký-postup) | 0:28–0:30 |
| 15 | [Ansys Forming — lisovanie s riešičom LS-DYNA](#snímka-15--ansys-forming--lisovanie-s-riešičom-ls-dyna) | 0:30–0:33 |
| 16 | [Ansys Forming — postup a typické výsledky](#snímka-16--ansys-forming--postup-a-typické-výsledky) | 0:33–0:36 |
| 17 | [Video: Ansys Forming](#snímka-17--video-ansys-forming) | 0:36–0:39 |
| 18 | [Simufact Forming — dva riešiče v jednom programe](#snímka-18--simufact-forming--dva-riešiče-v-jednom-programe) | 0:39–0:42 |
| 19 | [Simufact Forming — predikcia chýb](#snímka-19--simufact-forming--predikcia-chýb) | 0:42–0:45 |
| 20 | [Video: vznik preložky pri kovaní vidlicovej hlavy](#snímka-20--video-vznik-preložky-pri-kovaní-vidlicovej-hlavy) | 0:45–0:48 |
| 21 | [Abaqus — univerzálny nástroj](#snímka-21--abaqus--univerzálny-nástroj) | 0:48–0:51 |
| 22 | [Príklad v Abaqus: osovo súmerné hlboké ťahanie](#snímka-22--príklad-v-abaqus-osovo-súmerné-hlboké-ťahanie) | 0:51–0:54 |
| 23 | [Abaqus: veľké deformácie a porušenie](#snímka-23--abaqus-veľké-deformácie-a-porušenie) | 0:54–0:57 |
| 24 | [Autodesk Moldflow — tvárnenie polymérov](#snímka-24--autodesk-moldflow--tvárnenie-polymérov) | 0:57–1:00 |
| 25 | [Moldflow: typy sietí a chyby](#snímka-25--moldflow-typy-sietí-a-chyby) | 1:00–1:03 |
| 26 | [Video: prehľad Autodesk Moldflow](#snímka-26--video-prehľad-autodesk-moldflow) | 1:03–1:05 |
| 27 | [Porovnanie piatich programov](#snímka-27--porovnanie-piatich-programov) | 1:05–1:07 |
| | **[ČASŤ III — DEFORM](#časť-iii--deform-107--137)** | **1:07 – 1:37** |
| 28 | [Časť III — DEFORM](#snímka-28--časť-iii--deform) | 1:07 |
| 29 | [DEFORM — od ALPID k úplnému simulátoru procesov](#snímka-29--deform--od-alpid-k-úplnému-simulátoru-procesov) | 1:07–1:10 |
| 30 | [Produktová rodina DEFORM](#snímka-30--produktová-rodina-deform) | 1:10–1:12 |
| 31 | [Riešič DEFORM: tuho-viskoplastická formulácia](#snímka-31--riešič-deform-tuho-viskoplastická-formulácia) | 1:12–1:15 |
| 32 | [Práca s DEFORMom: Pre → Simulácia → Post](#snímka-32--práca-s-deformom-pre--simulácia--post) | 1:15–1:18 |
| 33 | [Kľúčové vstupy: pretvárny odpor, trenie, prestup tepla](#snímka-33--kľúčové-vstupy-pretvárny-odpor-trenie-prestup-tepla) | 1:18–1:21 |
| 34 | [Automatický remeshing a viac operácií](#snímka-34--automatický-remeshing-a-viac-operácií) | 1:21–1:23 |
| 35 | [Výsledky: od zaplnenia dutiny po životnosť nástroja](#snímka-35--výsledky-od-zaplnenia-dutiny-po-životnosť-nástroja) | 1:23–1:26 |
| 36 | [Mikroštruktúra a tepelné spracovanie](#snímka-36--mikroštruktúra-a-tepelné-spracovanie) | 1:26–1:29 |
| 37 | [Video: DEFORM — simulácia procesov tvárnenia kovov](#snímka-37--video-deform--simulácia-procesov-tvárnenia-kovov) | 1:29–1:32 |
| 38 | [Video: kovaný kotúč turbíny — mikroštruktúra (VOLITEĽNÉ)](#snímka-38--video-kovaný-kotúč-turbíny--mikroštruktúra-voliteľné) | — |
| 39 | [DEFORM dnes: V14.1 → V15.0](#snímka-39--deform-dnes-v141--v150) | 1:32–1:34 |
| 40 | [DEFORM na našich cvičeniach](#snímka-40--deform-na-našich-cvičeniach) | 1:34–1:37 |
| | **[ČASŤ IV — ŠPECIÁLNY SIMULAČNÝ SOFTVÉR](#časť-iv--špeciálny-simulačný-softvér-137--152)** | **1:37 – 1:52** |
| 41 | [Časť IV — Špeciálny simulačný softvér](#snímka-41--časť-iv--špeciálny-simulačný-softvér) | 1:37 |
| 42 | [Metódy a softvér, ktorý ich implementuje](#snímka-42--metódy-a-softvér-ktorý-ich-implementuje) | 1:37–1:41 |
| 43 | [Jednoduchý príklad: jedno pretláčanie, štyri opisy](#snímka-43--jednoduchý-príklad-jedno-pretláčanie-štyri-opisy) | 1:41–1:44 |
| 44 | [Jednoduché príklady: inverzná metóda a náhradný AI model](#snímka-44--jednoduché-príklady-inverzná-metóda-a-náhradný-ai-model) | 1:44–1:47 |
| 45 | [Príklady použitia z výskumu a priemyslu](#snímka-45--príklady-použitia-z-výskumu-a-priemyslu) | 1:47–1:50 |
| 46 | [Video: špecializovaná simulácia pretláčania (QForm)](#snímka-46--video-špecializovaná-simulácia-pretláčania-qform) | 1:50–1:52 |
| | **[ZHRNUTIE A OTÁZKY](#zhrnutie-a-otázky-152--200)** | **1:52 – 2:00** |
| 47 | [Zhrnutie](#snímka-47--zhrnutie) | 1:52–1:54 |
| 48 | [Kontrolné otázky](#snímka-48--kontrolné-otázky) | 1:54–2:00 |
| 49 | [Zdroje a ďalšie čítanie](#snímka-49--zdroje-a-ďalšie-čítanie) | (počas otázok) |

---

## ÚVOD 0:00 – 0:10

### Snímka 1 · Titulná snímka

⏱️ `0:00–0:02`

Dobrý deň, vitajte na druhej prednáške z predmetu Modelovanie a simulácia procesov – tvárnenie.

Minulý týždeň sme si povedali, čo vlastne je modelovanie a simulácia. Rozlíšili sme fyzikálny a matematický model a prešli sme si reťazec, ktorý vedie od reálneho procesu tvárnenia k modelu, ktorý vieme vypočítať.

Dnes sa pozrieme na nástroje. Začneme tými najstaršími – analytickými metódami, ktoré vyriešite ceruzkou na papieri alebo krátkym skriptom. Potom prejdeme päť simulačných programov, ktoré sa používajú v priemysle aj vo výskume. Najviac času venujeme poslednému z nich, DEFORMu, pretože s ním budete pracovať na cvičeniach celý semester. Na záver sa pozrieme na špeciálny simulačný softvér, ktorý ide za hranice klasickej metódy konečných prvkov.

Obrázok vpravo je zápustkovo kovaná vidlica simulovaná v DEFORM-3D. Na konci dnešnej prednášky by ste mali vedieť, ako takýto obrázok vzniká a čo z neho technológ vyčíta.

### Snímka 2 · Motivácia: od pokusov v lisovni k virtuálnemu odskúšaniu

⏱️ `0:02–0:05`

Začnem otázkou. Predstavte si, že máte zaviesť do výroby nový výkovok. Koľko skúšok nástroja by ste čakali, kým z lisu vyjde prvý dobrý kus?

> 🗒️ *Pauza, nechajte odpovedať dvoch–troch študentov.*

Bez simulácie je poctivá odpoveď z praxe „niekoľko". A pozrite sa na hornú slučku v diagrame: navrhnete nástroj, vyrobíte ho, vyskúšate na lise, nájdete chybu – preložku, nezaplnenie, trhlinu – a vraciate sa upravovať nástroj. Každá takáto slučka stojí týždne a veľa peňazí. Zápustky a lisovacie nástroje ľahko stoja desaťtisíce eur.

Je tu aj druhý argument. Väčšina nákladov na výrobok sa určí už vo fáze návrhu, dávno pred začiatkom výroby. Rozhodnutia urobené na začiatku sa na papieri menia lacno, v oceli veľmi draho.

Simulácia presúva túto slučku do počítača – to je červená slučka dole. Zmeníte predkovok, polomer zápustky alebo mazivo a spustíte výpočet znova. To trvá hodiny, nie týždne.

> 🗒️ *Klik – zobrazí sa ďalší bod.*

Výsledkom je menej úprav nástrojov, rýchlejší nábeh výroby a menej materiálu stráveného vo výronku a odpade. Všimnite si však vetu dole: overenie na lise je stále potrebné. Simulácia skúšku na lise nenahrádza – ideálne ju zredukuje na jednu.

### Snímka 3 · Otázky, na ktoré simulácia tvárnenia odpovedá

⏱️ `0:05–0:07`

Čo vlastne chce technológ zo simulácie vedieť? Zhrnul som to do šiestich otázok.

Prvá: zaplní sa dutina zápustky? Nevznikne nezaplnenie, zákovok, preložka alebo lievikovitá dutina?

Druhá: aký lis potrebujem? Simulácia dá silu a energiu v závislosti od zdvihu.

Tretia: praskne alebo sa diel zúži? Pri objemovom tvárnení sledujeme porušenie, pri plechoch diagram medzných pretvorení a stenčenie.

Štvrtá: zachová si diel tvar? Odpruženie pri plechoch, skrivenie pri plastových dieloch, deformácia po tepelnom spracovaní.

Piata: aká bude životnosť nástroja? Napätie v nástroji, opotrebenie a teplota.

A šiesta: čo je vo vnútri dielu? Veľkosť zrna, fázy, tvrdosť.

Obrázok ukazuje postupnosť viacerých valcovacích úberov v DEFORMe. Zapamätajte si týchto šesť otázok. Každý program, ktorý dnes uvidíme, odpovedá na niektoré z nich, a kontrolné otázky na konci sa k tomuto zoznamu vrátia.

### Snímka 4 · Kam zapadá dnešná prednáška

⏱️ `0:07–0:08`

Rýchle zopakovanie reťazca modelovania z minulého týždňa. Začíname reálnym procesom, idealizujeme ho do fyzikálneho modelu, opíšeme ho rovnicami – to je matematický model – a potom ho riešime, buď analyticky, alebo numericky pomocou softvéru. Na konci je verifikácia a validácia experimentom.

Dnes sa venujeme krokom tri a štyri – zvýrazneným rámčekom. Časť I prednášky je analytické riešenie matematického modelu. Časti II až IV sú numerické modely a softvér.

Vpravo vidíte, ako to nadväzuje na zvyšok predmetu: budúci týždeň materiálové modely, potom preprocessing a príklady plošného a objemového tvárnenia.

> 🗒️ *Klik.*

A na cvičeniach: DEFORM. Dnešná časť III je teda vaša výbava na celý semester.

### Snímka 5 · Program dnešnej prednášky

⏱️ `0:08–0:10`

Toto je plán na najbližšie dve hodiny. Ideme bez prestávky, takže budem držať stabilné tempo.

Asi pätnásť minút analytické metódy. Potom zhruba štyridsať minút štyri programy: Ansys Forming, Simufact Forming, Abaqus a Moldflow. Potom hlavná časť – tridsať minút DEFORM. Ďalej pätnásť minút špeciálny simulačný softvér a posledných osem minút zhrnutie a kontrolné otázky.

DEFORM je zámerne na konci. Keď uvidíte štyri iné programy, oveľa lepšie pochopíte, čo je pre DEFORM typické a prečo sme ho vybrali na cvičenia.

---

## ČASŤ I — ANALYTICKÉ METÓDY 0:10 – 0:25

### Snímka 6 · Časť I — Analytické metódy tvárnenia

⏱️ `0:10`

Časť prvá: analytické metódy tvárnenia. Sú to modely v uzavretom alebo poloanalytickom tvare. Sú rýchle a prehľadné a – to je dôležité – sú referenciou, s ktorou by ste mali porovnať každý výsledok MKP, ktorý kedy vytvoríte.

### Snímka 7 · Klasické analytické metódy teórie plasticity

⏱️ `0:10–0:13`

Táto tabuľka je mapa klasických metód.

Metóda rezov, nazývaná aj elementárna teória plasticity, vezme tenký rez materiálu a napíše preň rovnováhu síl za predpokladu homogénnej deformácie. Dostaneme rozloženie tlaku a celkovú silu. Používa sa pri pechovaní, kovaní, valcovaní a ťahaní.

Metóda sklzových čiar využíva charakteristiky poľa napätí. Dáva presné riešenia, ale len pre rovinnú deformáciu a tuho-ideálne plastický materiál – typickými príkladmi sú vtláčanie, pretláčanie a obrábanie.

Metóda hornej hranice predpokladá kinematicky prípustné pole rýchlostí a minimalizuje výkon. Jej dôležitá vlastnosť je, že vypočítaná sila je vždy väčšia alebo rovná skutočnej. To je bezpečné pri voľbe lisu. Jej prvková verzia, UBET, sa používa pri zápustkovom kovaní a zapĺňaní dutiny.

Metóda dolnej hranice je opak: staticky prípustné pole napätí a sila menšia alebo rovná skutočnej.

A vizioplasticita je hybrid – meriate, ako sa deformuje sieť na vzorke, a z toho vypočítate rýchlosti pretvorenia a napätia.

Spoločné majú to, čo je napísané dole: tuho-plastický materiál, konštantný alebo stredný pretvárny odpor, jednoduchý zákon trenia a jednoduchú geometriu. Zapamätajte si tieto predpoklady – presne tie softvér odstraňuje.

### Snímka 8 · Metóda rezov: pechovanie valca

⏱️ `0:13–0:17`

Pozrime sa na jeden príklad podrobne: pechovanie valca medzi dvoma rovnými nástrojmi s Coulombovým trením.

Ak napíšeme rovnováhu tenkého prstenca materiálu, dostaneme prvú rovnicu: zmena kontaktného tlaku pozdĺž polomeru, dp podľa dr, sa rovná mínus dva mí p lomeno h. Trenie na plochách nástroja brzdí tok materiálu smerom von, a tlak musí smerom k stredu narastať, aby ho prekonal.

Integráciou dostaneme rozloženie tlaku: p od r sa rovná pretvárnemu odporu krát exponenciála dva mí krát R mínus r, lomeno h. Na okraji, kde r sa rovná R, je tlak rovný pretvárnemu odporu. Smerom k stredu exponenciálne rastie.

Celková sila je integrál tohto tlaku po kontaktnej ploche. A keďže sa objem zachováva, polomer s klesajúcou výškou rastie: R sa rovná R nula krát odmocnina z h nula lomeno h.

Pozrite sa na diagram. Tlak má vrchol v strede – to je známy trecí kopec. Červená krivka je pre mí rovné 0,3, sivá čiarkovaná pre 0,1. Väčšie trenie alebo plochejší polotovar – menšie h – robí kopec strmším a silu väčšou.

> 🗒️ *Ak je čas, nakreslite na tabuľu element rezu a rovnováhu síl.*

Prečo ukazujem práve tento príklad? Pretože pechovanie je prvá úloha, ktorú budete simulovať v DEFORMe. Analytická sila z tohto vzorca je vaša prvá kontrola, či je výsledok z DEFORMu vôbec reálny.

### Snímka 9 · Ťahanie a pretláčanie: výsledky v uzavretom tvare

⏱️ `0:17–0:19`

Dva ďalšie klasické výsledky, tentoraz pre ťahanie a pretláčanie.

Vľavo je Sachsov vzorec pre napätie pri ťahaní drôtu, odvodený metódou rezov. B je mí krát kotangens uhla prievlaku a zátvorka obsahuje pomer prierezov. Existuje prirodzená hranica: napätie pri ťahaní nemôže prekročiť pretvárny odpor ťahaného drôtu, inak sa drôt pretrhne namiesto toho, aby sa ťahal. Z tejto podmienky dostanete najväčší úber na jeden ťah.

Vpravo je zjednodušený výsledok metódy hornej hranice pre pretláčanie cez kužeľovú matricu. Tlak pri pretláčaní lomeno pretvárny odpor má tri členy. Prvý je ideálna práca – prirodzený logaritmus pomeru pretláčania. Druhý je trenie a s rastúcim uhlom matrice klesá, pretože sa skracuje dĺžka kontaktu. Tretí je nadbytočná, čiže strihová práca, a s uhlom matrice rastie, pretože materiál musí prudšie meniť smer.

Vzorec sa nemusíte učiť naspamäť – pozrite si poznámku dole, je to didaktický tvar. Podstatná je štruktúra: jeden člen s uhlom matrice rastie, druhý klesá. Musí teda existovať optimálny uhol matrice. A len čo hľadáme optimum, analytický model sa stáva optimalizačnou úlohou. To nás privádza k ďalšej snímke.

### Snímka 10 · Riešenie analytických modelov: MATLAB · Python · GAMS

⏱️ `0:19–0:23`

Analytický neznamená „bez softvéru". Väčšina analytických modelov sa dnes rieši skriptom.

Tabuľka ukazuje, ako sa úlohy z tvárnenia priraďujú k typom riešičov. Vzorec v uzavretom tvare, napríklad sila ťahania, sa jednoducho vyčísli – NumPy alebo MATLAB. Neutrálny bod pri valcovaní je nelineárna rovnica – fzero v MATLABe, brentq v Pythone. Kovanie metódou rezov alebo von Kármánova rovnica valcovania je obyčajná diferenciálna rovnica – ode45 alebo solve_ivp. Odvodenia sa dajú robiť symbolicky v SymPy. Horná hranica s optimálnym uhlom matrice je úloha nelineárnej optimalizácie – fmincon alebo GAMS s riešičom CONOPT. A ak plánujete úbery, kde počet ťahov musí byť celé číslo, máte zmiešanú celočíselnú úlohu – tam sú silné GAMS s BARONom alebo Pyomo. Existujú aj ucelené otvorené frameworky, napríklad PyRolL z TU Freiberg pre valcovanie v kalibroch.

Vpravo je náš príklad pechovania v Pythone – asi desať riadkov. Výšku postupne znižujeme, polomer aktualizujeme zo stálosti objemu, integrujeme tlak a vypíšeme silu.

> 🗒️ *Ak je pripravený notebook, spustite skript naživo.*

Vidíte, ako sila s klesajúcou výškou rastie. To je krivka sila–zdvih – presne tá krivka, ktorú vám na cvičení dá DEFORM.

### Snímka 11 · Prečo analytické metódy nestačia

⏱️ `0:23–0:25`

Prečo teda vôbec potrebujeme drahý softvér?

Pozrite sa na tabuľku. Analytické metódy zvládnu jednoduchú geometriu – valec, pás, kužeľ. Softvér zvládne ľubovoľnú 3D geometriu z CAD. Analytické metódy používajú konštantný alebo stredný pretvárny odpor; softvér ho používa ako funkciu pretvorenia, rýchlosti pretvorenia a teploty, plus anizotropiu a porušenie. Analytické metódy dajú silu a stredný tlak; softvér dá úplné polia – pretvorenie, teplotu, napätie, chyby, dokonca mikroštruktúru.

Na druhej strane analytická odpoveď trvá sekundy a každý člen je viditeľný. Softvér počíta minúty až dni a je to čierna skrinka, ktorú treba kontrolovať.

Pravidlo je teda jednoduché: analytické výsledky použite na prvý odhad a na kontrolu výsledkov MKP – a zvyšok nechajte na softvér. Tým sa dostávame k časti II.

---

## ČASŤ II — SOFTVÉR PRE TVÁRNENIE 0:25 – 1:07

### Snímka 12 · Časť II — Softvér na simuláciu tvárnenia

⏱️ `0:25`

Časť druhá: softvér na simuláciu tvárnenia. Prejdeme štyri programy – Ansys Forming, Simufact Forming, Abaqus a Moldflow – a potom v časti III piaty, DEFORM.

### Snímka 13 · Dve skupiny softvéru pre tvárnenie

⏱️ `0:25–0:28`

Skôr než sa pozrieme na jednotlivé programy, dám vám dve zásuvky, do ktorých ich budeme triediť.

Prvá zásuvka je špecializovaný softvér orientovaný na proces. Má šablóny pre lisy, nástroje, brzdiace lišty, valcovacie úbery. Je určený pre technológa, nie pre špecialistu na MKP. Pre plechy je to Ansys Forming, AutoForm alebo PAM-STAMP; pre objemové tvárnenie Simufact, DEFORM, QForm alebo FORGE; pre plasty Moldflow alebo Moldex3D.

Druhá zásuvka je univerzálna nelineárna MKP. Tam si používateľ všetko zostaví sám – diely, kontakty, kroky výpočtu. Získa maximálnu flexibilitu a možnosť napísať vlastné materiálové podprogramy. Typickými príkladmi sú Abaqus, LS-DYNA, Ansys Mechanical a MSC Marc. Používajú sa vo výskume, vo výučbe a pri neobvyklých procesoch.

Tabuľka dole ich triedi podľa typu riešiča – a to je typická skúšková otázka. Implicitný riešič hľadá rovnováhu v každom prírastku a môže robiť veľké kroky; takto pracuje DEFORM aj Abaqus Standard a je to správna voľba pre odpruženie. Explicitný riešič robí veľmi malé stabilné časové kroky a kontakt zvláda veľmi robustne; príkladmi sú LS-DYNA a Abaqus Explicit a typickou oblasťou je lisovanie plechov. A riešič konečných objemov používa pevnú Eulerovu sieť, cez ktorú materiál preteká – FV riešič v Simufacte a riešiče toku v Moldflow.

### Snímka 14 · Každý program má rovnaký postup

⏱️ `0:28–0:30`

Nech použijete akýkoľvek program, postup má vždy rovnakých šesť krokov.

Geometria – zvyčajne import z CAD vo formáte STEP, IGES alebo STL a rozhodnutie o symetrii. Materiál – krivka spevnenia, tepelné údaje, parametre porušenia. Sieť – typ prvku, veľkosť a remeshing. Okrajové podmienky – trenie, prestup tepla, pohyb nástroja. Potom samotný výpočet – riešič, časové kroky, podmienky ukončenia. A nakoniec vyhodnotenie – polia, krivky, chyby a protokol.

Kroky jeden až štyri sú preprocessing; venujeme mu štvrtú prednášku. Krok šesť je postprocessing, prednášky päť a šesť.

Programy sa líšia hlavne tým, koľko z krokov jeden až štyri za vás automatizujú šablóny. Používajte to dnes ako optiku pri každom programe: ktoré kroky urobí za vás?

> 🗒️ *Klik.*

A jedno varovanie: garbage in, garbage out – čo do programu vložíte, to z neho dostanete. Kvalitu odpovede oveľa viac ako farba grafu určuje krivka spevnenia a súčiniteľ trenia.

### Snímka 15 · Ansys Forming — lisovanie s riešičom LS-DYNA

⏱️ `0:30–0:33`

Program číslo jeden: Ansys Forming.

Je to ucelená aplikácia na lisovanie plechov. Preprocessing, výpočet aj postprocessing sú v jednom grafickom prostredí. Pod ním pracuje riešič LS-DYNA – explicitný pre samotné tvárnenie, implicitný pre gravitáciu a odpruženie.

Dodávateľom je Ansys, ktorý je od roku 2025 súčasťou firmy Synopsys. Samotný produkt je pomerne mladý – prvá verzia vyšla ako 2022 R1. Predtým používatelia LS-DYNA pracovali so staršími preprocesormi ako eta/DYNAFORM alebo modul LS-PrePost pre tvárnenie kovov.

Môžete vytvoriť štyri typy projektov: lisovanie za studena, lisovanie za tepla – to je kalenie v nástroji z bórových ocelí, typické pre B-stĺpiky – lemovanie, zatiaľ v beta verzii, a One Step, rýchlu inverznú metódu, s ktorou sa ešte stretneme v časti IV.

A cieľový používateľ je v poslednom bode: technológovia a nástrojári. Nemusíte byť expert na MKP. Obrázok ukazuje vnútorný diel kapoty auta.

### Snímka 16 · Ansys Forming — postup a typické výsledky

⏱️ `0:33–0:36`

Rozhranie sleduje záložky, ktoré vidíte vľavo.

Process: import CAD, natočenie dielu – teda otočenie z polohy vo vozidle do polohy v lise – a voľba presnosti. Blank: obrys prístrihu, materiál, krivka medzných pretvorení, prípadne zvárané prístrihy. Operations: ťahanie, strihanie, ohýbanie lemu, brzdiace lišty. Potom záložka Advance, ktorá je najzaujímavejšia: kompenzácia odpruženia, vývoj línie strihu a analýza robustnosti. Kompenzácia odpruženia znamená, že softvér iteračne upravuje povrch nástroja, kým diel nie je v tolerancii. To priamo šetrí úpravy nástroja. A nakoniec Analysis s automatickým protokolom v PowerPointe.

Vpravo sú typické výsledky. Diagram medzných pretvorení a index tvárniteľnosti povedia, či diel praskne alebo sa zvlní. Stenčenie ukazuje lokálny úbytok hrúbky. Odpruženie ukazuje tvar po odľahčení. Stoning a zebra čiary odhalia viditeľné povrchové chyby – veľmi dôležité pri vonkajších dieloch karosérie. Vťahovanie a stopy opisujú pohyb prístrihu. A sila lisu určí veľkosť lisu.

Dve praktické pravidlá: na polomere 90 stupňov majte aspoň tri prvky a zvoľte jednu z troch predvolieb – Fast na kontrolu nastavenia, Accurate ako štandard, Very Accurate pre kompenzáciu odpruženia. Všimnite si aj, že pri explicitnom výpočte sa rýchlosti nástrojov umelo zvyšujú, aby sa skrátil čas výpočtu.

### Snímka 17 · Video: Ansys Forming

⏱️ `0:36–0:39`

Pozrime sa na to v pohybe. Toto je predstavovacie video firmy Ansys. Pri pozeraní sledujte tri veci: prístrih, pridržiavač s brzdiacimi lištami a na konci farebné zobrazenie diagramu medzných pretvorení.

> 🗒️ *Pustite dve až tri minúty.*

Videli ste farby na dieli? Zelená je bezpečná, žltá hraničná, červená znamená trhlinu. To je diagram medzných pretvorení premietnutý na geometriu – najčastejší výsledok simulácie lisovania plechov.

### Snímka 18 · Simufact Forming — dva riešiče v jednom programe

⏱️ `0:39–0:42`

Program číslo dva: Simufact Forming.

Je to procesne orientovaný softvér pre objemové a plošné tvárnenie. Pochádza z firmy Simufact v Hamburgu, kúpil ho MSC Software a dnes je súčasťou skupiny Hexagon. Rozsah procesov je široký: kovanie, pechovanie hláv, pretláčanie, valcovanie krúžkov, voľné kovanie, presné strihanie a aj mechanické spájanie – samoprebíjacie nitovanie a clinching, ktoré sú dôležité pri montáži karosérie – plus tepelné spracovanie.

Zvláštnosťou je, že Simufact má dva riešiče, a táto tabuľka je kľúčová.

Riešič konečných prvkov je Lagrangeov: sieť sa pohybuje spolu s materiálom. Používa šesťsteny alebo štvorsteny a pri zdeformovaní prvkov potrebuje remeshing. Je to voľba pre tvárnenie za studena, plechy, napätie v nástroji a spájanie. Vychádza z riešiča MSC Marc.

Riešič konečných objemov je Eulerov: sieť je v priestore pevná a materiál preteká bunkami. Preto nepotrebuje remeshing. Je ideálny pre trojrozmerné zápustkové kovanie za tepla, kde materiál tečie do výronku. Pochádza z programu MSC SuperForge.

Medzi FE a FV sa dá prepínať z jednej operácie na druhú. A od roku 2022 beží FV riešič paralelne – až štyrikrát rýchlejšie. Zapamätajte si slová Lagrangeov a Eulerov; vrátime sa k nim v časti IV.

### Snímka 19 · Simufact Forming — predikcia chýb

⏱️ `0:42–0:45`

Čo nám Simufact povie o chybách?

Obrázok a ukazuje výsledok nazvaný „zóny chýb toku". Deteguje lievikovitú dutinu a preložky. Lievikovitá dutina, po anglicky piping, je typická pre kovanie a pretláčanie: materiál odteká od čela a zanechá lievikovitú dutinu, čo vedie k nezaplneným zápustkám a dutinám. Bez simulácie sa predpovedá veľmi ťažko. Preložka vzniká tam, kde sa povrch materiálu preloží sám cez seba a neskôr sa prejaví ako chyba podobná trhline.

Obrázok b je animácia vzniku a šírenia trhliny na základe porušenia. Trhlina rastie v smere gradientu vypočítaného porušenia. V 2D sa sieť rozdelí, v 3D sa porušené prvky vymažú. Používa sa to pri strihaní, presnom strihaní a samoprebíjacom nitovaní.

### Snímka 20 · Video: vznik preložky pri kovaní vidlicovej hlavy

⏱️ `0:45–0:48`

Tu je krátke video zo Simufactu práve k tomuto problému: kovanie vidlicovej hlavy. Pôvodný návrh procesu mal jasný sklon k tvorbe preložky v prechodovej oblasti. Sledujte, kde materiál tečie späť sám na seba.

> 🗒️ *Pustite video.*

Simulácia preložku ukázala a predkovok sa zmenil skôr, ako sa vyrobil akýkoľvek nástroj. Zapamätajte si to – v DEFORMe nájdete rovnaký typ chyby pomocou sledovania bodov a tokových čiar.

### Snímka 21 · Abaqus — univerzálny nástroj

⏱️ `0:48–0:51`

Program číslo tri: Abaqus od Dassault Systèmes SIMULIA. Existuje bezplatná Learning Edition obmedzená na asi tisíc uzlov – to stačí na 2D a osovo súmerné úlohy tvárnenia, ak si to chcete vyskúšať doma.

Hlavný rozdiel: Abaqus nemá šablóny pre tvárnenie. Nie je tam tlačidlo „zápustka", „pridržiavač" ani „brzdiaca lišta". Diely, kontakty a kroky si zostavíte sami. Je to pomalšie, ale mimoriadne flexibilné – vlastný materiálový zákon môžete napísať v podprograme UMAT alebo VUMAT. Preto je taký obľúbený vo výskume.

Abaqus má dva riešiče. Explicit sa používa na tvárnenie s náročným kontaktom a veľkými deformáciami; nemá problémy s konvergenciou, ale stabilný časový krok je veľmi malý, preto často používame škálovanie hmotnosti. Standard je implicitný: skutočná rovnováha, veľké prírastky, ale ťažkosti s konvergenciou pri kontakte. Používa sa na odpruženie, plynulé kvázistatické zaťaženie a prestup tepla.

Priemyselný štandard je: tvárniť v Explicit, importovať do Standard a vypočítať odpruženie.

A jednu kontrolu v Explicit by ste mali robiť vždy – je v červenom rámčeku: pomer kinetickej energie k vnútornej energii, v Abaqus ALLKE lomeno ALLIE, by mal zostať pod asi päť až desať percent. Tým dokážete, že zrýchlením procesu ste z kvázistatického tvárnenia neurobili dynamický ráz.

### Snímka 22 · Príklad v Abaqus: osovo súmerné hlboké ťahanie

⏱️ `0:51–0:54`

Aby ste videli, čo znamená „zostaviť si všetko sám", tu je model hlbokého ťahania v Abaqus/CAE – sedem krokov, jeden pre každý modul.

Part: prístrih je deformovateľná osovo súmerná škrupina; ťažník, ťažnica a pridržiavač sú analyticky tuhé čiary. Property: oceľ, modul pružnosti 200 gigapascalov, Poissonovo číslo 0,3 a krivka spevnenia. Step: dynamický explicitný krok trvajúci sedem milisekúnd. Interaction: penaltové trenie s mí 0,1 medzi prístrihom a ťažnicou a prístrihom a pridržiavačom. Load: ťažník sa posunie o 60 milimetrov s amplitúdou smooth step – ten plynulý rozbeh a dobeh udrží výpočet kvázistatický. Mesh: sieťuje sa iba prístrih, zjemnený na polomeroch. Výsledky: ekvivalentné plastické pretvorenie PEEQ, hrúbka STH a sila ťažníka.

Porovnajte to s Ansys Forming, kde je ten istý model šablóna vyplnená niekoľkými kliknutiami. To je cena aj hodnota flexibility.

### Snímka 23 · Abaqus: veľké deformácie a porušenie

⏱️ `0:54–0:57`

Remeshing je ústredný problém Lagrangeovho objemového tvárnenia a Abaqus ponúka niekoľko ciest, ako ho obísť.

Adaptívna sieť ALE – Arbitrary Lagrangian-Eulerian – posúva uzly tak, aby sa znížilo skreslenie, a pritom zachováva rovnakú topológiu siete. Používa sa pri kovaní, valcovaní a pretláčaní v Explicit; vidíte ju na obrázku. Adaptívny remeshing v Standard zjemní sieť tam, kde je chyba veľká. Mapovanie sieť–sieť vytvorí úplne novú sieť a premietne na ňu riešenie – používa sa pri veľmi veľkých deformáciách a operáciách kovania. A prepojená Eulerovsko-Lagrangeova metóda, CEL, zvládne extrémny tok materiálu.

Pre porušenie ponúka Abaqus celú rodinu kritérií: ductile, Johnson-Cook, shear a pre plechy FLD, FLSD, MSFLD a model Marciniak-Kuczynski.

A pre presné odpruženie: aspoň päť až sedem integračných bodov po hrúbke a kinematický zákon spevnenia.

Zapamätajte si problém remeshingu – DEFORM ho rieši plne automatickým remeshingom a to je jeden z dôvodov, prečo sa tak presadil v kovaní.

### Snímka 24 · Autodesk Moldflow — tvárnenie polymérov

⏱️ `0:57–1:00`

Program číslo štyri: Moldflow. Možno sa pýtate, prečo je program na plasty v predmete o tvárnení kovov.

Odpoveď: filozofia je rovnaká – virtuálne odskúšanie formy namiesto zápustky – ale fyzika je iná. Moldflow nepočíta plasticitu tuhej látky. Počíta tok nenewtonovskej viskóznej taveniny polyméru s prestupom tepla. Viskozita sa riadi modelom Cross-WLF, správanie tlak–objem–teplota Taitovou rovnicou. Pre nás je relevantný aj cez vstrekovanie kovových práškov.

Moldflow bol založený v roku 1978 v Melbourne a od roku 2008 patrí firme Autodesk. Je tu Adviser pre konštruktérov a Insight pre analytikov, s rozhraním Synergy a bezplatným prehliadačom Communicator. Databáza obsahuje takmer štrnásťtisíc termoplastov.

Vpravo je cyklus vstrekovania: uzatvorenie formy, plnenie – kde vznikajú studené spoje, uzavretý vzduch a nedostreky – dotlak, kde sa rozhoduje o zmraštení a prepadlinách, chladenie, ktoré je zvyčajne najdlhšou časťou cyklu, a vyhodenie, po ktorom sa diel skriví.

### Snímka 25 · Moldflow: typy sietí a chyby

⏱️ `1:00–1:03`

Dve tabuľky. Vľavo typy sietí – kľúčový pojem v Moldflow.

Midplane je škrupinová sieť na strednej ploche steny. Využíva Hele-Shawovu aproximáciu, ktorá predpokladá, že dĺžka toku je oveľa väčšia ako hrúbka steny – pravidlo „štyri ku jednej". Je najrýchlejšia. Dual Domain používa zhodné povrchové siete na oboch stranách dielu, vytvorené priamo z CAD – vhodné pre tenké jednoduché diely. 3D používa štvorsteny a rieši úplný trojrozmerný tok bez Hele-Shawovho predpokladu – pre hrubé masívne diely, za cenu oveľa dlhšieho výpočtu. A nosníkové prvky sa používajú pre rozvodné a chladiace kanály.

Vpravo sú typické chyby a čo navrhuje simulácia. Nedostrek: pridať alebo presunúť vtok, zhrubnúť stenu, zvýšiť teplotu taveniny. Studené spoje: presunúť vtok tak, aby spoje padli do nekritickej oblasti. Uzavretý vzduch: odvzdušnenie. Prepadliny: odľahčiť hrubé miesta, predĺžiť dotlak. Skrivenie: vyrovnať chladenie, dodržať rovnomernú hrúbku steny.

Postupnosť analýz je dole: poloha vtoku, plnenie, dotlak, chladenie, deformácia. A pri materiáloch vystužených vláknami sa orientácia vlákien odovzdá do pevnostného výpočtu MKP.

### Snímka 26 · Video: prehľad Autodesk Moldflow

⏱️ `1:03–1:05`

Krátky pohľad na Moldflow. Sledujte, ako postupuje čelo toku dutinou, a sledujte miesta, kde sa stretnú dve čelá – to sú studené spoje.

> 🗒️ *Pustite asi dve minúty.*

Tam, kde sa čelá toku stretnú, je v hotovom dieli slabé miesto, preto sa ho konštruktéri snažia presunúť mimo zaťažených oblastí.

### Snímka 27 · Porovnanie piatich programov

⏱️ `1:05–1:07`

Postavme päť programov vedľa seba, vrátane DEFORMu, ktorý nasleduje.

Zameranie: Ansys Forming – lisovanie plechov; Simufact – objemové tvárnenie, plechy a spájanie; Abaqus – univerzálna MKP; Moldflow – vstrekovanie plastov; DEFORM – objemové tvárnenie, tepelné spracovanie a mikroštruktúra.

Riešič: LS-DYNA explicitný; FE plus FV; Standard plus Explicit; riešič toku v 2.5D alebo 3D; a pri DEFORMe implicitný Lagrangeov riešič s možnosťou ALE.

Príprava: všade šablóny okrem Abaqusu. DEFORM má šablóny, ale je aj otvorený – môžete doň pridať vlastné podprogramy.

Silné stránky: kompenzácia odpruženia; rýchle FV kovanie za tepla; flexibilita; reťazec plnenie, dotlak, chladenie, deformácia; a pri DEFORMe remeshing, mikroštruktúra a opotrebenie nástroja.

> 🗒️ *Klik.*

A záver: „najlepší" softvér neexistuje. Existuje iba vhodný softvér pre daný proces a pre otázku, ktorú kladiete.

---

## ČASŤ III — DEFORM 1:07 – 1:37

### Snímka 28 · Časť III — DEFORM

⏱️ `1:07`

Časť tretia, hlavná: DEFORM – názov znamená Design Environment for FORMing. Je to softvér našich cvičení, preto prosím dávajte nasledujúcu polhodinu zvlášť pozor.

### Snímka 29 · DEFORM — od ALPID k úplnému simulátoru procesov

⏱️ `1:07–1:10`

DEFORM je systém metódy konečných prvkov pre tvárnenie, tepelné spracovanie, obrábanie a spájanie. Dodáva ho SFTC – Scientific Forming Technologies Corporation – z Columbusu v Ohiu, pomerne malá firma s asi tridsiatimi ľuďmi.

Jeho korene siahajú k programu ALPID, ktorý vznikol v inštitúte Battelle v Columbuse s financovaním amerického letectva. ALPID bol prvý praktický nástroj metódy konečných prvkov pre výrobné tvárnenie kovov. Teória je v knihe Kobayashiho, Oha a Altana „Metal Forming and the Finite Element Method" z roku 1989 – stále klasika.

Časová os: DEFORM-2D v roku 1989, v roku 1991 bývalí pracovníci Battelle založili SFTC a v tom istom roku DEFORM prevzali. DEFORM-3D nasledoval v roku 1993. Dnes máme verziu 14.1, servisnú verziu 14.1.1 z roku 2026 a ohlásená je verzia 15.

Používa sa v letectve – na kotúče turbín zo superzliatin a titánu – v automobilovom priemysle, pri výrobe spojovacích súčiastok, v ropnom priemysle a v mnohých výskumných ústavoch. Jeho otvorenosť pre výskum je jedným z dôvodov, prečo ho majú radi univerzity.

### Snímka 30 · Produktová rodina DEFORM

⏱️ `1:10–1:12`

DEFORM nie je jeden program, ale celá rodina.

DEFORM-2D rieši osovo súmerné a rovinné úlohy – tam začínajú naše prvé cvičenia. DEFORM-3D rieši úplné trojrozmerné deformačné, tepelné a mikroštruktúrne úlohy. PREMIER je úplný balík so všetkým. FORMING EXPRESS je zjednodušený systém pre bežné procesy. DEFORM-HT je určený na tepelné spracovanie – cementovanie, kalenie, popúšťanie. DEFORM-3D Machining má šablóny pre sústruženie, vŕtanie a frézovanie. A potom sú tu moduly: mikroštruktúra, návrh experimentov a optimalizácia, valcovanie krúžkov, voľné kovanie, valcovanie profilov a pretláčanie.

Zoznam procesov dole je dlhý: kovanie za tepla, poloohrevu aj za studena, valcovanie, pretláčanie, ťahanie, pechovanie, dierovanie rúr, tlačenie, strihanie, nitovanie, clinching, lisovanie práškov a dokonca guľôčkovanie.

### Snímka 31 · Riešič DEFORM: tuho-viskoplastická formulácia

⏱️ `1:12–1:15`

Teraz sa pozrime pod kapotu. Táto rovnica je srdcom klasického riešiča DEFORM – tuho-viskoplastická, čiže tokovú formulácia.

Zapíšeme funkcionál pí. Prvý člen je výkon plastickej deformácie: efektívne napätie krát efektívna rýchlosť pretvorenia, integrované cez objem. Druhý člen je penaltový: K je veľká konštanta a násobí druhú mocninu objemovej rýchlosti pretvorenia. Vynucuje nestlačiteľnosť – plastická deformácia nemení objem. Tretí člen je práca povrchového zaťaženia. Skutočné pole rýchlostí je to, pri ktorom sa variácia pí rovná nule.

Neznáme sú rýchlosti, nie posunutia. V každom kroku sa sústava rieši Newtonovou-Raphsonovou metódou alebo priamou iteráciou – implicitne, s aktualizovanou Lagrangeovou sieťou.

Elastické pretvorenia sa zanedbávajú. Pri veľkom plastickom toku, ako je kovanie, je to úplne prijateľné. Keď na elasticite záleží – odpruženie, zvyškové napätia, napätia v nástroji – DEFORM ponúka elasto-plastické a elastické objekty. A pre ustálené alebo rotačné procesy, ako valcovanie krúžkov alebo pretláčanie, sú k dispozícii riešiče ALE a ustáleného stavu.

Všimnite si prepojenie s časťou I. Minimalizácia funkcionálu výkonu – to je presne myšlienka metódy hornej hranice. Rozdiel je v tom, že tu pole rýchlostí nie je odhadnuté ručne, ale je diskretizované konečnými prvkami a nájde ho počítač.

### Snímka 32 · Práca s DEFORMom: Pre → Simulácia → Post

⏱️ `1:15–1:18`

Takto budete s DEFORMom pracovať na cvičení – tri programy.

Preprocesor, v ktorom definujete objekty, ich geometriu a sieť, materiál, pohyb nástrojov, medziobjektové podmienky – trenie a prestup tepla – podmienky ukončenia a počet krokov. Z toho vygenerujete databázu: zo súboru KEY vznikne súbor DB. Databáza je celá simulácia – zálohujte ju.

Potom simulačný engine vykoná výpočet MKP s automatickým remeshingom. Zapisuje súbory message a log; naučte sa ich čítať, lebo práve tam uvidíte problémy s konvergenciou a remeshing.

A postprocesor, v ktorom sa pozriete na stavové veličiny, krivku sila–zdvih, sledovanie bodov, tokové čiary a porušenie.

Vpravo sú typy objektov. Rigid – nástroje, ktoré sa nedeformujú, voliteľne s prestupom tepla. Plastic – polotovar, tuho-viskoplastický. Elastic – na analýzu napätí v nástroji. Elasto-plastic – na odpruženie a zvyškové napätia. Porous – pre prášky a spekané materiály.

A DEFORM pozná skutočné typy strojov: hydraulické, mechanické a skrutkové lisy a buchary, pri ktorých je pohyb nástroja riadený energiou, nie predpísanou rýchlosťou.

### Snímka 33 · Kľúčové vstupy: pretvárny odpor, trenie, prestup tepla

⏱️ `1:18–1:21`

O väčšine odpovede rozhodujú tri vstupy.

Prvý je pretvárny odpor ako funkcia efektívneho pretvorenia, rýchlosti pretvorenia a teploty. Vezmete ho z materiálovej knižnice – ocele, hliník, titán, superzliatiny, meď – alebo z vlastných skúšok tlakom. Novšie verzie vedia pretvárny odpor ocelí dokonca predpovedať z chemického zloženia pomocou neurónovej siete. Materiálovým modelom sa podrobne venujeme budúci týždeň.

Druhý je trenie. V metóde rezov sme používali Coulombovo trenie – šmykové napätie sa rovná mí krát tlak. Pri objemovom tvárnení DEFORM väčšinou používa šmykový model: trecie napätie je m krát k, kde k je medza klzu v šmyku, teda pretvárny odpor lomeno odmocnina z troch. Faktor trenia m ide od nuly – bez trenia – po jednotku – úplné prilepenie.

Tabuľka dáva orientačné hodnoty: asi 0,08 až 0,12 pre tvárnenie za studena s dobrým mazaním, asi 0,2 pre tvárnenie za poloohrevu, 0,3 pre kovanie za tepla s mazaním a 0,7 až 1,0 pre kovanie za tepla za sucha.

Tretí je prestup tepla medzi nástrojom a polotovarom. Súčiniteľ prestupu tepla sa dá určiť z meraní termočlánkami pomocou modulu Inverse HTC.

A najdôležitejší bod: pretvárny odpor a trenie sú najcitlivejšie vstupy. Ak vám výsledok vyzerá čudne, skontrolujte najprv tieto dva.

### Snímka 34 · Automatický remeshing a viac operácií

⏱️ `1:21–1:23`

Dve vlastnosti, vďaka ktorým sa DEFORM presadil v kovaní.

Prvá je automatický remeshing. Lagrangeova sieť sa deformuje spolu s materiálom. Keď sa prvok zdegeneruje alebo prenikne do nástroja, DEFORM automaticky vytvorí novú sieť a pokračuje. V 3D používa štvorsteny, v 2D štvoruholníky, voliteľne šesťsteny, a okná siete umožňujú zjemniť kritické oblasti, napríklad roh zápustky. Každý remeshing však interpoluje stavové veličiny zo starej siete na novú a zakaždým sa trochu objemu stratí. Preto udržujte počet remeshingov primeraný a na konci vždy skontrolujte objem.

Druhá je Multiple Operations, teda viac operácií. Vpravo je typický technologický postup: ohrev v peci, presun k lisu s chladnutím na vzduchu, jeden alebo viac úderov kovania, ostrihanie výronku, tepelné spracovanie a obrábanie. V DEFORMe je celý tento reťazec jeden projekt, ktorý beží automaticky, a história – pretvorenie, teplota, mikroštruktúra – sa odovzdáva z každého kroku do nasledujúceho.

### Snímka 35 · Výsledky: od zaplnenia dutiny po životnosť nástroja

⏱️ `1:23–1:26`

Aké výsledky z DEFORMu dostaneme?

Vľavo: zaplnenie dutiny, zákovky a preložky a tokové čiary pomocou sledovania bodov a tokového poľa. Polia efektívneho pretvorenia, rýchlosti pretvorenia, teploty a triaxiality napätia. Krivka sila–zdvih a energia na voľbu lisu. Napätie v nástroji – aj v predpätých nástrojoch – a opotrebenie nástroja. A asi dve desiatky modelov tvárneho porušenia s možnosťou mazania prvkov, ak chcete modelovať samotnú trhlinu.

Vpravo sú dva najpoužívanejšie modely.

Normalizované kritérium Cockcroft–Latham integruje pomer najväčšieho hlavného napätia k efektívnemu napätiu po efektívnom pretvorení. Keď integrál dosiahne kritickú hodnotu C, očakávame trhlinu. Prispieva iba ťahové napätie – čo je intuitívne. Používa sa na šípovité trhliny pri pretláčaní a povrchové trhliny pri pechovaní.

Archardov model opotrebenia: hĺbka opotrebenia rastie s kontaktným tlakom a rýchlosťou kĺzania a klesá s tvrdosťou nástroja. A keďže horúce nástroje mäknú, teplota nástroja má na opotrebenie veľký vplyv. Preto je tepelná simulácia nástroja dôležitá.

### Snímka 36 · Mikroštruktúra a tepelné spracovanie

⏱️ `1:26–1:29`

DEFORM predpovedá aj to, čo sa deje vo vnútri materiálu.

Obrázok a je kovaný kotúč turbíny z Waspaloy s vypočítanou veľkosťou zrna. Pri leteckých kotúčoch zákazník predpisuje nielen tvar, ale aj veľkosť zrna v jednotlivých oblastiach. Preto existuje predikcia mikroštruktúry.

Obrázok b je indukčne kalené ozubené koleso – aplikácia tepelného spracovania. DEFORM-HT predpovedá podiely fáz, tvrdosť, deformáciu a trhliny pri kalení.

Rovnica je model JMAK – Johnson, Mehl, Avrami, Kolmogorov – pre podiel rekryštalizovaného objemu X. Keď pretvorenie prekročí kritickú hodnotu epsilon c, rekryštalizácia sa začne a podiel sleduje túto esovitú exponenciálnu krivku. Beta d a k d sú materiálové konštanty a epsilon 0,5 je pretvorenie, pri ktorom je rekryštalizovaná polovica materiálu.

Okrem dynamickej a statickej rekryštalizácie DEFORM modeluje rast zrna, podiely fáz, tvrdosť, precipitáty a dokonca kryštalografickú textúru pomocou kryštalovej plasticity.

### Snímka 37 · Video: DEFORM — simulácia procesov tvárnenia kovov

⏱️ `1:29–1:32`

Pozrime sa na DEFORM v akcii. Toto je prehľadové video samotnej firmy SFTC. Sledujte tri veci, ktoré už poznáte: remeshing počas kovania, krivku sila–zdvih a postupnosť viacerých operácií.

> 🗒️ *Pustite dve až tri minúty.*

Všetko, čo ste videli, si na cvičeniach urobíte sami – začneme však oveľa jednoduchším dielom.

### Snímka 38 · Video: kovaný kotúč turbíny — mikroštruktúra (VOLITEĽNÉ)

⏱️ `—`

> 🗒️ *Iba ak je čas; inak preskočte na snímku 39.*

Druhé krátke video o kotúči turbíny, ktorý sme videli na snímke o mikroštruktúre. Sledujte, ako sa mení veľkosť zrna počas kovania a pri nasledujúcom tepelnom spracovaní.

> 🗒️ *Pustite video.*

Takúto úroveň detailu dnes očakávajú zákazníci z letectva.

### Snímka 39 · DEFORM dnes: V14.1 → V15.0

⏱️ `1:32–1:34`

Kam DEFORM smeruje? Táto tabuľka je zo stretnutia používateľov SFTC v máji 2026.

Riešič je rýchlejší: elastické nástroje môžu opätovne použiť svoju maticu tuhosti, čo dáva až takmer trojnásobne rýchlejší výpočet – najmä pri valcovaní – a nový iteračný elasto-plastický riešič je o viac ako päťdesiat percent rýchlejší ako predchádzajúci. Pri tlačení skráti metóda rýchleho odhadu výpočet z desiatok hodín na asi štrnásť minút.

Najzaujímavejší riadok je AI: neurónová sieť typu U-Net, natrénovaná na tisícoch výpočtov v DEFORMe, predpovedá viacnásobné valcovanie profilov takmer okamžite a optimalizátor ju využíva na návrh kalibrov valcov.

Ďalej: model varu pri kalení, špeciálna sieť v strižnej medzere pri strihaní a rozhranie v Pythone – DEFORM-API – na skriptovanie a automatické protokoly.

Hlavná myšlienka: simulácia tvárnenia smeruje k automatizácii a náhradným AI modelom trénovaným na výsledkoch MKP. Vrátime sa k tomu v časti IV.

### Snímka 40 · DEFORM na našich cvičeniach

⏱️ `1:34–1:37`

Niekoľko praktických slov o cvičeniach.

Začneme pechovaním valca v DEFORM-2D, osovo súmerne. Potom krivku sila–zdvih porovnáte s metódou rezov z časti I – áno, so vzorcom zo snímky 8. Potom dopredné pretláčanie, pri ktorom sa pozrieme na uhol matrice, trenie a porušenie. Potom zápustkové kovanie v DEFORM-3D so zaplnením dutiny a preložkami. A nakoniec vaše zadanie.

Na prvé cvičenie si prosím prineste poznámky z časti I. A zvyknite si kontrolovať výsledky priebežne: je sila reálna v porovnaní s analytickým odhadom? Zachoval sa objem? Koľkokrát prebehol remeshing?

Hodnotenie: zadanie na cvičenie dáva najviac 20 bodov, písomná skúška najviac 80.

---

## ČASŤ IV — ŠPECIÁLNY SIMULAČNÝ SOFTVÉR 1:37 – 1:52

### Snímka 41 · Časť IV — Špeciálny simulačný softvér

⏱️ `1:37`

Časť štvrtá. Doteraz bolo všetko postavené na Lagrangeovej metóde konečných prvkov, s niekoľkými Eulerovými výnimkami. Teraz sa pozrieme ďalej: inverzné metódy, konečné objemy, častice, diskrétne prvky, viacškálové a dátové nástroje. Najprv prehľad, potom jednoduché príklady a potom príklady použitia.

### Snímka 42 · Metódy a softvér, ktorý ich implementuje

⏱️ `1:37–1:41`

Táto tabuľka je prehľad.

Inverzné metódy one-step vychádzajú z hotového dielu a rozvinú ho do rovného prístrihu. Sú v AutoForme, v Ansys Forming One Step a v PAM-STAMP a používajú sa na určenie tvaru prístrihu a rýchle posúdenie uskutočniteľnosti.

Metóda konečných objemov používa pevnú Eulerovu sieť – Simufact FV pre kovanie za tepla; QForm Extrusion je špecializovaný nástroj na pretláčanie hliníka.

SPH – hydrodynamika vyhladených častíc – je bezsieťová metóda s Lagrangeovými časticami. Ponúka ju DualSPHysics a LS-DYNA, pre extrémne deformácie, vstrekovanie kovových práškov alebo trecie zváranie premiešaním.

DEM – metóda diskrétnych prvkov – modeluje jednotlivé zrná v kontakte. EDEM, LIGGGHTS alebo Yade sa používajú na plnenie dutiny nástroja práškom.

Viacškálové metódy – celulárne automaty, kryštalová plasticita, fázové pole – v DAMASK alebo v module mikroštruktúry DEFORMu, na rekryštalizáciu, textúru a cípatosť.

Dátové metódy – neurónové siete a modely so zníženým rádom trénované na MKP – v Pythone s PyTorch alebo cez DEFORM-API.

Analytické frameworky ako PyRolL spájajú analytické modely do úplného návrhu valcovacích úberov.

A fyzikálna simulácia na zariadení Gleeble reprodukuje priebeh pretvorenia, rýchlosti pretvorenia a teploty na vzorke – na meranie kriviek spevnenia a validáciu modelov.

Spomeniem aj ďalšie veľké špecializované programy: AutoForm, ktorý je štandardom pre plechy v automobilkách, a QForm a FORGE pre objemové tvárnenie. Existujú popri piatich, ktoré sme prebrali podrobne.

### Snímka 43 · Jednoduchý príklad: jedno pretláčanie, štyri opisy

⏱️ `1:41–1:44`

Tento obrázok vysvetľuje, prečo existuje špeciálny softvér. Ten istý materiál tečúci cez matricu, opísaný štyrmi spôsobmi.

Lagrangeova MKP vľavo: sieť sa pohybuje spolu s materiálom. Je presná a prirodzene sleduje históriu, ale deformuje sa, preto potrebuje remeshing. To je DEFORM, Abaqus, Simufact FE.

Eulerova MKO: sieť je pevná a materiál ňou preteká. Bez remeshingu, ale sledovanie voľného povrchu a histórie je ťažšie. Simufact FV a Abaqus CEL.

SPH: vôbec žiadna sieť. Materiál je súbor častíc a každá častica nesie vlastnú históriu – pretvorenie, teplotu. Zvládne extrémne deformácie. DualSPHysics, LS-DYNA SPH.

A DEM vpravo: tu materiál vôbec nie je kontinuum. Každé zrno prášku je samostatná častica, ktorá sa dotýka susedov. Takto sa simuluje plnenie dutiny práškom a získa sa rozloženie hustoty.

Každá metóda teda odstraňuje jedno obmedzenie Lagrangeovej MKP: remeshing v prípade MKO a SPH, predpoklad kontinua v prípade DEM.

### Snímka 44 · Jednoduché príklady: inverzná metóda a náhradný AI model

⏱️ `1:44–1:47`

Ďalšie dva jednoduché príklady, oba sú skratky.

Vľavo je inverzná metóda one-step pre plechy. Vezmete geometriu hotového dielu z CAD, jedným krokom ju rozviniete do roviny a dostanete tvar rovného prístrihu a odhad pretvorení. Potom pretvorenia skontrolujete v diagrame medzných pretvorení, či nehrozí trhlina alebo zvlnenie. Trvá to minúty namiesto hodín. Cena: ignoruje históriu procesu – pridržiavač, brzdiace lišty, postupnosť kontaktu.

Vpravo je náhradný model pre objemové tvárnenie. V rámci návrhu experimentov spustíte stovky alebo tisíce výpočtov MKP. Na nich natrénujete neurónovú sieť. Potom sieť dá predikciu okamžite a optimalizátor môže prehľadávať priestor návrhu – presne to, čo sme videli pri valcovaní profilov v DEFORMe. Cena: platí iba v rámci priestoru návrhu, na ktorom bola natrénovaná. Mimo neho sa môže veľmi mýliť.

V oboch prípadoch zostáva úplný model MKP referenciou.

### Snímka 45 · Príklady použitia z výskumu a priemyslu

⏱️ `1:47–1:50`

Nakoniec príklady použitia z výskumu a priemyslu.

Zápustkové kovanie dielu s rebrom a stenou sa analyzovalo metódou UBET a overilo na modeloch z plastelíny – sily aj tok materiálu súhlasili. Pretláčanie hliníkových profilov s pomerom pretláčania nad dvadsaťpäť sa simulovalo metódou konečných objemov, takže remeshing nebol potrebný, a spojilo sa s neurónovými sieťami a genetickými algoritmami na optimalizáciu matrice. Vstrekovanie kovového prášku zo zmesi 17-4 PH sa simulovalo metódou SPH v DualSPHysics a overilo reálnymi vstrekmi. Plnenie dutiny práškom sa simulovalo metódou DEM a hustota sa odovzdala ako vstup do MKP modelu lisovania. Cípatosť pri hlbokom ťahaní hliníkového plechu sa predpovedala kryštalovou plasticitou z textúry. Veľkosť zrna pri kovaní za tepla sa predpovedala celulárnymi automatmi prepojenými s DEFORM-2D. A odpruženie pri ohýbaní predpovedala neurónová sieť natrénovaná na výsledkoch MKP.

> 🗒️ *Vyberte dva príklady a vysvetlite ich podrobnejšie. Návrh: pretláčanie metódou konečných objemov, ktoré nadväzuje na Simufact FV, a celulárne automaty s DEFORMom, ktoré nadväzujú na časť III.*

### Snímka 46 · Video: špecializovaná simulácia pretláčania (QForm)

⏱️ `1:50–1:52`

Posledné krátke video: pretláčanie hliníkového profilu v QForme. Sledujte, ako materiál tečie cez komorovú matricu a ako rôzne časti profilu vychádzajú z matrice rôznou rýchlosťou – práve tento rozdiel spôsobuje ohnutý alebo skrútený profil.

> 🗒️ *Pustite krátko.*

Pod videom nájdete odkazy na kanál AutoForm, DualSPHysics a PyRolL, ak sa chcete doma pozrieť ďalej.

---

## ZHRNUTIE A OTÁZKY 1:52 – 2:00

### Snímka 47 · Zhrnutie

⏱️ `1:52–1:54`

Zhrniem dnešok do piatich viet – jedna za každú časť.

Analytické metódy – metóda rezov, horná hranica a sklzové čiary – dávajú rýchly odhad sily a sú prvou kontrolou každého výsledku MKP.

Špecializovaný softvér automatizuje proces: Ansys Forming pre lisovanie plechov, Simufact pre objemové tvárnenie a spájanie, Moldflow pre polyméry.

Univerzálna MKP ako Abaqus je flexibilná, ale všetko si zostavujete sami.

DEFORM je implicitný tuho-viskoplastický program MKP s automatickým remeshingom, porušením, opotrebením nástroja a mikroštruktúrou – a je to náš nástroj na cvičenia.

A špeciálny softvér prekonáva hranice klasickej MKP: konečné objemy, častice, diskrétne prvky, inverzné metódy, viacškálové modely a náhradné AI modely.

Budúci týždeň pôjdeme hlbšie do najcitlivejšieho vstupu zo všetkých: materiálových modelov – elasticity, plasticity, spevnenia a kriviek spevnenia.

### Snímka 48 · Kontrolné otázky

⏱️ `1:54–2:00`

Overme si, čo vám zostalo v hlave. Otázky budem ukazovať jednu po druhej – skúste odpovedať skôr, než pokračujem.

> 🗒️ *Každú otázku odkryte šípkou a počkajte na odpovede.*

**Otázka jedna:** Prečo je kontaktný tlak pri pechovaní najväčší v strede a čo tento vrchol zvyšuje?

> ✅ **Očakávané:** trenie brzdí tok materiálu smerom von; väčšie trenie a menší pomer výšky k priemeru.

**Otázka dva:** Je sila podľa hornej hranice väčšia alebo menšia ako skutočná – a prečo je to užitočné?

> ✅ **Očakávané:** väčšia alebo rovná; lis zvolený podľa nej je bezpečný.

**Otázka tri:** Explicitný alebo implicitný – ktorý riešič na lisovanie, ktorý na odpruženie?

> ✅ **Očakávané:** explicitný na tvárnenie, implicitný na odpruženie.

**Otázka štyri:** Aký je rozdiel medzi Lagrangeovým a Eulerovým opisom?

> ✅ **Očakávané:** sieť sa pohybuje s materiálom vs. pevná sieť, cez ktorú materiál preteká.

**Otázka päť:** Prečo je fyzika v Moldflow iná ako v DEFORMe?

> ✅ **Očakávané:** viskózny tok nenewtonovskej taveniny vs. plastická deformácia tuhej látky.

**Otázka šesť:** Ktoré dva vstupy v DEFORMe najviac ovplyvnia výsledok a čo je faktor trenia m?

> ✅ **Očakávané:** pretvárny odpor a trenie; tau sa rovná m krát k, m od 0 po 1.

**Otázka sedem:** Uveďte jeden model porušenia a jeden model opotrebenia v DEFORMe a čo predpovedajú.

> ✅ **Očakávané:** Cockcroft–Latham pre trhliny, Archard pre opotrebenie nástroja.

**Otázka osem:** Kedy by ste použili inverznú metódu one-step alebo náhradnú neurónovú sieť namiesto úplnej MKP?

> ✅ **Očakávané:** rýchle posúdenie uskutočniteľnosti a rýchle návrhové štúdie, v známych hraniciach platnosti.

Ďakujem. Zostáva nám niekoľko minút – máte nejaké vlastné otázky?

### Snímka 49 · Zdroje a ďalšie čítanie

⏱️ `(počas otázok)`

> 🗒️ *Túto snímku nechajte na plátne počas otázok.*

Ak chcete čítať ďalej, najdôležitejším zdrojom pre tento predmet je naša učebnica Necpal a Sobota. Pre teóriu metódy konečných prvkov v tvárnení je klasikou kniha Kobayashiho, Oha a Altana. Pre analytické metódy Hosford a Caddell, a v slovenčine Teória tvárnenia od Bílika, Kapustovej a Ridzoňa. Uvedená je aj dokumentácia výrobcov všetkých piatich programov. Všetky obrázky a videá patria ich vlastníkom a boli použité iba na účely výučby.

Vidíme sa na cvičení – a nezabudnite si poznámky k metóde rezov.

---

*Koniec textu*
