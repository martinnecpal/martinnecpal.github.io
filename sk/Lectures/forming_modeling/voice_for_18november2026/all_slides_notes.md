# Ťahanie bezšvových rúr: teória, simulácia a validácia

**Hovorený text — prednáška 4** · Modelovanie a simulácia procesov I – tvárnenie (MSPO2_6I) · MTF STU Trnava

Prezentácia: 18november2026.html (78 hlavných snímok + 7 podsnímok v hĺbkových pohľadoch) · Trvanie: 152 minút (hĺbkové pohľady navyše, mimo trvania)

> [!TIP]
> **Ako používať tento text**
>
> - Každý blok zodpovedá jednej snímke: [číslo · názov · časový údaj].
> - Riadky začínajúce 🗒️ sú pokyny pre prednášajúceho, nečítajú sa nahlas.
> - Predpokladané tempo reči: asi 110–120 slov za minútu. Časy sú vypočítané z dĺžky textu, každá obsahová snímka má však aspoň 2 minúty na výklad pri tabuli a diskusiu; pri kontrolných otázkach je navyše čas na odpovede študentov.
> - Hĺbkové pohľady (snímky 26.1–26.4 a 64.1–64.3) sú nepovinné; ich čas `SM+…` a `DO+…` sa nepočíta do trvania prednášky.

## Prehľad snímok

| # | Snímka | Čas |
|--:|---|---|
| | **[ÚVOD](#úvod-000--014)** | **0:00 – 0:14** |
| 1 | [Titulná snímka](#snímka-1--titulná-snímka) | 0:00–0:02 |
| 2 | [Prečo práve ťahanie rúr?](#snímka-2--prečo-práve-ťahanie-rúr) | 0:02–0:04 |
| 3 | [Z čoho a v akých rozmeroch sa rúry ťahajú](#snímka-3--z-čoho-a-v-akých-rozmeroch-sa-rúry-ťahajú) | 0:04–0:06 |
| 4 | [Najprv za tepla: predvalok a valcovanie](#snímka-4--najprv-za-tepla-predvalok-a-valcovanie) | 0:06–0:08 |
| 5 | [Potom za studena: postup výroby presných rúr](#snímka-5--potom-za-studena-postup-výroby-presných-rúr) | 0:08–0:10 |
| 6 | [Kam zapadá dnešná prednáška](#snímka-6--kam-zapadá-dnešná-prednáška) | 0:10–0:12 |
| 7 | [Program dnešnej prednášky](#snímka-7--program-dnešnej-prednášky) | 0:12–0:14 |
| | **[ČASŤ I — ZÁKLADY PROCESU ŤAHANIA](#časť-i--základy-procesu-ťahania-014--040)** | **0:14 – 0:40** |
| 8 | [Časť I — Základy procesu ťahania](#snímka-8--časť-i--základy-procesu-ťahania) | 0:14 |
| 9 | [Princíp ťahania](#snímka-9--princíp-ťahania) | 0:14–0:16 |
| 10 | [Drôt, tyč a rúra – spoločné a rozdielne](#snímka-10--drôt-tyč-a-rúra--spoločné-a-rozdielne) | 0:16–0:18 |
| 11 | [Geometria prievlaku](#snímka-11--geometria-prievlaku) | 0:18–0:20 |
| 12 | [Štyri spôsoby ťahania rúr](#snímka-12--štyri-spôsoby-ťahania-rúr) | 0:20–0:22 |
| 13 | [Porovnanie spôsobov ťahania](#snímka-13--porovnanie-spôsobov-ťahania) | 0:22–0:24 |
| 14 | [Tŕne a ich poloha](#snímka-14--tŕne-a-ich-poloha) | 0:24–0:26 |
| 15 | [Hrotovanie – bez hrotu sa rúra neťahá](#snímka-15--hrotovanie--bez-hrotu-sa-rúra-neťahá) | 0:26–0:28 |
| 16 | [Redukcia, pretvorenie a súčiniteľ predĺženia](#snímka-16--redukcia-pretvorenie-a-súčiniteľ-predĺženia) | 0:28–0:30 |
| 17 | [Napäťovo-deformačný stav v prievlaku](#snímka-17--napäťovo-deformačný-stav-v-prievlaku) | 0:30–0:32 |
| 18 | [Kľúčové parametre procesu](#snímka-18--kľúčové-parametre-procesu) | 0:32–0:34 |
| 19 | [Čo ovplyvňuje presnosť ťahanej rúry](#snímka-19--čo-ovplyvňuje-presnosť-ťahanej-rúry) | 0:34–0:36 |
| 20 | [Spevnenie za studena: jeden ťah, veľká zmena](#snímka-20--spevnenie-za-studena-jeden-ťah-veľká-zmena) | 0:36–0:38 |
| 21 | [Čo musí model zachytiť](#snímka-21--čo-musí-model-zachytiť) | 0:38–0:40 |
| | **[ČASŤ II — ANALYTICKÉ METÓDY ŤAHANIA](#časť-ii--analytické-metódy-ťahania-040--100)** | **0:40 – 1:00** |
| 22 | [Časť II — Analytické metódy ťahania](#snímka-22--časť-ii--analytické-metódy-ťahania) | 0:40 |
| 23 | [Prečo najprv analytika – a označenie](#snímka-23--prečo-najprv-analytika--a-označenie) | 0:40–0:42 |
| 24 | [Ideálna deformácia – dolná hranica](#snímka-24--ideálna-deformácia--dolná-hranica) | 0:42–0:44 |
| 25 | [Metóda rezov (slab method)](#snímka-25--metóda-rezov-slab-method) | 0:44–0:46 |
| 26 | [Ťahanie na pevnom tŕni – tri zóny](#snímka-26--ťahanie-na-pevnom-tŕni--tri-zóny) | 0:46–0:48 |
| 26.1 | [Zóna I – zmenšenie priemeru](#snímka-261--zóna-i--zmenšenie-priemeru) | SM+0:00–0:01 |
| 26.2 | [Zóna II – zmenšenie priemeru aj steny](#snímka-262--zóna-ii--zmenšenie-priemeru-aj-steny) | SM+0:01–0:02 |
| 26.3 | [Zóna III – kalibrácia a ťažná sila](#snímka-263--zóna-iii--kalibrácia-a-ťažná-sila) | SM+0:02–0:03 |
| 26.4 | [Zhrnutie a otázky](#snímka-264--zhrnutie-a-otázky) | SM+0:03–0:04 |
| 27 | [Redundantná práca a vzorec typu Siebel](#snímka-27--redundantná-práca-a-vzorec-typu-siebel) | 0:48–0:50 |
| 28 | [Optimálny uhol prievlaku](#snímka-28--optimálny-uhol-prievlaku) | 0:50–0:52 |
| 29 | [Medzná redukcia na jeden ťah](#snímka-29--medzná-redukcia-na-jeden-ťah) | 0:52–0:54 |
| 30 | [Riešený príklad: tyč Ø10 mm, r = 20 %](#snímka-30--riešený-príklad-tyč-ø10-mm-r--20-) | 0:54–0:56 |
| 31 | [Analytika verzus meranie pri rúre](#snímka-31--analytika-verzus-meranie-pri-rúre) | 0:56–0:58 |
| 32 | [Čo analytika dokáže – a čo nie](#snímka-32--čo-analytika-dokáže--a-čo-nie) | 0:58–1:00 |
| | **[ČASŤ III — NUMERICKÁ SIMULÁCIA A NASTAVENIE MODELU](#časť-iii--numerická-simulácia-a-nastavenie-modelu-100--132)** | **1:00 – 1:32** |
| 33 | [Časť III — Numerická simulácia a nastavenie modelu ťahania](#snímka-33--časť-iii--numerická-simulácia-a-nastavenie-modelu-ťahania) | 1:00 |
| 34 | [Model = štyri nezávislé voľby](#snímka-34--model--štyri-nezávislé-voľby) | 1:00–1:02 |
| 35 | [Typické kombinácie v softvéri](#snímka-35--typické-kombinácie-v-softvéri) | 1:02–1:04 |
| 36 | [Základný model ťahania rúry – vstupy](#snímka-36--základný-model-ťahania-rúry--vstupy) | 1:04–1:06 |
| 37 | [Materiálové modely v našich štúdiách](#snímka-37--materiálové-modely-v-našich-štúdiách) | 1:06–1:08 |
| 38 | [Trenie – najcitlivejší vstup](#snímka-38--trenie--najcitlivejší-vstup) | 1:08–1:10 |
| 39 | [Implicitná analýza](#snímka-39--implicitná-analýza) | 1:10–1:12 |
| 40 | [Explicitná analýza](#snímka-40--explicitná-analýza) | 1:12–1:14 |
| 41 | [Implicitne alebo explicitne?](#snímka-41--implicitne-alebo-explicitne) | 1:14–1:16 |
| 42 | [Lagrangeov opis – sieť ide s materiálom](#snímka-42--lagrangeov-opis--sieť-ide-s-materiálom) | 1:16–1:18 |
| 43 | [ALE a Eulerov opis](#snímka-43--ale-a-eulerov-opis) | 1:18–1:20 |
| 44 | [Tuhoplastická verzus elastoplastická formulácia](#snímka-44--tuhoplastická-verzus-elastoplastická-formulácia) | 1:20–1:22 |
| 45 | [2D osovo symetricky alebo 3D?](#snímka-45--2d-osovo-symetricky-alebo-3d) | 1:22–1:24 |
| 46 | [Ako sme nastavovali modely v DEFORM](#snímka-46--ako-sme-nastavovali-modely-v-deform) | 1:24–1:26 |
| 47 | [Čo môžeme od ktorej simulácie čakať](#snímka-47--čo-môžeme-od-ktorej-simulácie-čakať) | 1:26–1:28 |
| 48 | [Typické numerické problémy a nápravy](#snímka-48--typické-numerické-problémy-a-nápravy) | 1:28–1:30 |
| 49 | [Ako si vybrať model](#snímka-49--ako-si-vybrať-model) | 1:30–1:32 |
| | **[ČASŤ IV — PRÍPADOVÉ ŠTÚDIE Z VLASTNÉHO VÝSKUMU](#časť-iv--prípadové-štúdie-z-vlastného-výskumu-132--208)** | **1:32 – 2:08** |
| 50 | [Časť IV — Prípadové štúdie z vlastného výskumu](#snímka-50--časť-iv--prípadové-štúdie-z-vlastného-výskumu) | 1:32 |
| 51 | [Mapa štúdií: jedna výskumná línia](#snímka-51--mapa-štúdií-jedna-výskumná-línia) | 1:32–1:34 |
| 52 | [Dva ťahy bez žíhania: E235 a E355](#snímka-52--dva-ťahy-bez-žíhania-e235-a-e355) | 1:34–1:36 |
| 53 | [Pretvorenie z mikroštruktúry](#snímka-53--pretvorenie-z-mikroštruktúry) | 1:36–1:38 |
| 54 | [Pretvorenie cez stenu a spevnenie](#snímka-54--pretvorenie-cez-stenu-a-spevnenie) | 1:38–1:40 |
| 55 | [Voronoiova mozaika ako „virtuálne zrná“](#snímka-55--voronoiova-mozaika-ako-virtuálne-zrná) | 1:40–1:42 |
| 56 | [Ako zmerať trenie: ťahanie na trhacom stroji](#snímka-56--ako-zmerať-trenie-ťahanie-na-trhacom-stroji) | 1:42–1:44 |
| 57 | [Inverzná analýza: sila je lineárna v trení](#snímka-57--inverzná-analýza-sila-je-lineárna-v-trení) | 1:44–1:46 |
| 58 | [S kalibrovaným trením: vplyv uhla prievlaku](#snímka-58--s-kalibrovaným-trením-vplyv-uhla-prievlaku) | 1:46–1:48 |
| 59 | [Trenie × uhol prievlaku → sila (DEFORM 3D)](#snímka-59--trenie--uhol-prievlaku--sila-deform-3d) | 1:48–1:50 |
| 60 | [Rýchlosť ťahania silu takmer nemení](#snímka-60--rýchlosť-ťahania-silu-takmer-nemení) | 1:50–1:52 |
| 61 | [Prievlačné ťahanie: stena sa zhrubne](#snímka-61--prievlačné-ťahanie-stena-sa-zhrubne) | 1:52–1:54 |
| 62 | [Experiment verzus MKP: Ø16 → Ø12 mm](#snímka-62--experiment-verzus-mkp-ø16--ø12-mm) | 1:54–1:56 |
| 63 | [Uhol a trenie verzus rozmery rúry](#snímka-63--uhol-a-trenie-verzus-rozmery-rúry) | 1:56–1:58 |
| 64 | [Plánovaný experiment v simulácii](#snímka-64--plánovaný-experiment-v-simulácii) | 1:58–2:00 |
| 64.1 | [Ako navrhnúť experiment v MKP](#snímka-641--ako-navrhnúť-experiment-v-mkp) | DO+0:00–0:01 |
| 64.2 | [Výsledky ANOVA](#snímka-642--výsledky-anova) | DO+0:01–0:02 |
| 64.3 | [Zhrnutie a otázky](#snímka-643--zhrnutie-a-otázky) | DO+0:02–0:03 |
| 65 | [Rúry s vnútorným rebrovaním: uhol drážky tŕňa](#snímka-65--rúry-s-vnútorným-rebrovaním-uhol-drážky-tŕňa) | 2:00–2:02 |
| 66 | [Stačí 2D model na silu pri rebrovanom tŕni?](#snímka-66--stačí-2d-model-na-silu-pri-rebrovanom-tŕni) | 2:02–2:04 |
| 67 | [Napätia v stene rúry s vnútornými rebrami](#snímka-67--napätia-v-stene-rúry-s-vnútornými-rebrami) | 2:04–2:06 |
| 68 | [Čo nás štúdie naučili](#snímka-68--čo-nás-štúdie-naučili) | 2:06–2:08 |
| | **[ČASŤ V — OPTIMALIZÁCIA A VALIDÁCIA](#časť-v--optimalizácia-a-validácia-208--220)** | **2:08 – 2:20** |
| 69 | [Časť V — Optimalizácia a validácia](#snímka-69--časť-v--optimalizácia-a-validácia) | 2:08 |
| 70 | [Rebrík overenia modelu ťahania](#snímka-70--rebrík-overenia-modelu-ťahania) | 2:08–2:10 |
| 71 | [Kalibrácia nie je validácia](#snímka-71--kalibrácia-nie-je-validácia) | 2:10–2:12 |
| 72 | [Model verzus realita – súhrn našich porovnaní](#snímka-72--model-verzus-realita--súhrn-našich-porovnaní) | 2:12–2:14 |
| 73 | [Aký uhol prievlaku je optimálny? Záleží na podmienkach](#snímka-73--aký-uhol-prievlaku-je-optimálny-záleží-na-podmienkach) | 2:14–2:16 |
| 74 | [Postup optimalizácie procesu simuláciou](#snímka-74--postup-optimalizácie-procesu-simuláciou) | 2:16–2:18 |
| 75 | [Neistoty a obmedzenia – buďte kritickí](#snímka-75--neistoty-a-obmedzenia--buďte-kritickí) | 2:18–2:20 |
| | **[ZHRNUTIE A OTÁZKY](#zhrnutie-a-otázky-220--232)** | **2:20 – 2:32** |
| 76 | [Zhrnutie](#snímka-76--zhrnutie) | 2:20–2:22 |
| 77 | [Kontrolné otázky](#snímka-77--kontrolné-otázky) | 2:22–2:32 |
| 78 | [Zdroje a ďalšie čítanie](#snímka-78--zdroje-a-ďalšie-čítanie) | (počas otázok) |

---

## ÚVOD 0:00 – 0:14

### Snímka 1 · Titulná snímka

⏱️ `0:00–0:02`

Dobrý deň, vitajte na štvrtej prednáške z predmetu Modelovanie a simulácia procesov jeden, tvárnenie.

Minule sme sa venovali materiálovým údajom v programe DEFORM, teda tomu, ako zadať pretvárny odpor, ako ho opísať mocninovým zákonom alebo modelom Johnsona a Cooka a odkiaľ vziať konštanty. Dnes to všetko použijeme na jednom konkrétnom procese, a to na ťahaní bezšvových rúr za studena.

Dnešná prednáška je dlhšia ako zvyčajne a má päť častí. Najprv si povieme, čo je ťahanie rúr technologicky. Potom si ukážeme analytické metódy, ktorými sa dá odhadnúť ťažná sila. V tretej časti prejdeme, ako sa nastavuje numerický model, teda implicitná a explicitná analýza, Lagrangeov a ALE opis, materiál, trenie a sieť. Vo štvrtej, hlavnej časti uvidíte prípadové štúdie z nášho vlastného výskumu na fakulte. A na záver si zhrnieme, ako model optimalizovať a hlavne ako ho overiť.

Obrázok vpravo je z programu DEFORM. Je to prievlačné ťahanie rúry z priemeru šestnásť na priemer dvanásť milimetrov a farby ukazujú efektívne pretvorenie. Presne takéto simulácie budete na konci prednášky vedieť nielen spustiť, ale hlavne kriticky posúdiť.

Ešte krátko k ovládaniu, ak si budete prezentáciu prechádzať sami. Návod je v rámčeku v dolnej časti tejto snímky. Šípkami doľava a doprava sa pohybujete medzi snímkami, medzerníkom spustíte alebo zastavíte komentár. A ak je pre vás písmo príliš malé alebo veľké, v pravom hornom rohu sú tlačidlá A mínus a A plus, prípadne klávesy mínus a plus. Písmo sa zmení na všetkých snímkach a kláves nula vráti pôvodnú veľkosť.

### Snímka 2 · Prečo práve ťahanie rúr?

⏱️ `0:02–0:04`

Prečo sa venujeme práve ťahaniu rúr? Presné bezšvové rúry sú všade okolo nás. Sú v hydraulických valcoch, v automobiloch, napríklad ako súčasti tlmičov alebo vstrekovacích systémov, v kotloch a vo výmenníkoch tepla.

Valcovaním za tepla sa dá vyrobiť rúra s približne správnym tvarom. Presné rozmery, kvalitný povrch a vyššiu pevnosť však získame až tvárnením za studena, teda ťahaním. Špeciálnou skupinou sú rúry s vnútorným rebrovaním. Rebrá na vnútornom povrchu zväčšujú plochu, a tým aj prestup tepla, preto sa používajú v energetike.

> 🗒️ *Klik – zobrazí sa ďalší bod.*

Lenže hľadať správne nástroje a parametre skúšaním priamo vo výrobe je drahé. Každý nový prievlak alebo tŕň stojí peniaze a každá skúška zastaví linku. Preto sa tu simulácia metódou konečných prvkov tak dobre uplatní.

> 🗒️ *Klik – zobrazí sa ďalší bod.*

Všetko, čo dnes uvidíte vo štvrtej časti, vzniklo v spolupráci so Železiarňami Podbrezová a v rámci projektov agentúry APVV. Obrázok vpravo ukazuje skutočnú rúru s priemerom osemnásť milimetrov pred ťahaním a po jednom ťahu na priemer dvanásť milimetrov. Všimnite si prechod na hrote, kde je vidieť, ako sa priemer postupne zmenšuje.

### Snímka 3 · Z čoho a v akých rozmeroch sa rúry ťahajú

⏱️ `0:04–0:06`

Pozrime sa, z akých materiálov sa rúry ťahajú. Najväčšiu skupinu tvoria uhlíkové a nízkolegované ocele. Patria sem napríklad ocele E dvestotridsaťpäť a E tristopäťdesiatpäť podľa normy pre presné rúry, alebo staršie označenia ako jedenásť tristopäťdesiattri. Používajú sa na hydraulické valce, v strojárstve, na tlakové potrubia a v kotloch.

Druhou skupinou sú korózivzdorné ocele, napríklad jedna celá štyri tisíc tristo jeden, ktoré nájdete v chemickom a potravinárskom priemysle. Ťahajú sa aj rúry z medi a jej zliatin, za studena v rozsahu priemerov od dvoch do stošesťdesiat milimetrov a s hrúbkou steny od pätnástich stotín milimetra do desiatich milimetrov. A napokon hliník a jeho zliatiny, napríklad šesťdesiatšesťdesiat alebo sedemdesiatsedemdesiatpäť.

Vo všetkých našich štúdiách, ktoré dnes uvidíte, sú feriticko-perlitické ocele E dvestotridsaťpäť, E tristopäťdesiatpäť a oceľ SPT tristošesťdesiat. Majú dobrú tvárnosť za studena, takže sú vhodné na viac ťahov za sebou. Zapamätajte si ich, lebo budú vystupovať v materiálových modeloch v tretej časti.

### Snímka 4 · Najprv za tepla: predvalok a valcovanie

⏱️ `0:06–0:08`

Skôr než sa rúra dostane na ťahaciu stolicu, musí vzniknúť za tepla. Obrázok ukazuje postup v Železiarňach Podbrezová. Na začiatku je kontinuálne liaty blok, ktorý sa ohreje v karuselovej peci, nadieruje sa na lise, predĺži sa na tŕni a potom prejde pretlačovacou stolicou. Po ohreve v krokovej peci nasleduje ťahová redukovňa, ktorá nastaví konečný priemer.

Pri inom postupe, kosom valcovaní, sa využíva takzvaný Mannesmannov jav. Dva šikmo postavené valce stláčajú rotujúci blok z boku, a v jadre bloku pritom vzniká ťahové napätie, ktoré materiál roztrhne a otvorí dutinu. Tŕň potom dutinu len vyhladí a kalibruje.

Výsledkom je rúra valcovaná za tepla, napríklad s priemerom sedemdesiat milimetrov a stenou šesť celých tri desatiny, alebo s priemerom dvadsaťosem a stenou štyri milimetre. Presne tieto rozmery uvidíte v štúdiách.

> 🗒️ *Klik – zobrazí sa ďalší bod.*

Dôležité je, že rúra za tepla nie je dokonalá. Má excentricitu, teda stena nie je všade rovnako hrubá, a na vnútornom povrchu môže mať jemný mnohouholník po valcovaní. Tieto chyby sa prenášajú do ťahania a obmedzujú presnosť výsledného výrobku.

### Snímka 5 · Potom za studena: postup výroby presných rúr

⏱️ `0:08–0:10`

Teraz postup za studena, opäť podľa praxe v Podbrezovej. Vstupom je rúra valcovaná za tepla. Najprv sa urobí hrot, teda zúžený koniec, ktorý prejde prievlakom a dá sa uchopiť. Potom nasleduje chemická úprava. Rúra sa moruje, aby sa odstránili okuje, fosfátuje sa a nanesie sa mazivo. Fosfátová vrstva drží mazivo na povrchu, a bez nej by sa oceľ na prievlak nalepila.

Štvrtým krokom je samotné ťahanie za studena, ktorému sa dnes venujeme. Po ňom nasleduje medzioperačné alebo finálne žíhanie v ochrannej atmosfére. Žíhanie je potrebné, pretože po jednom alebo dvoch ťahoch je materiál taký spevnený, že ďalší ťah by ho pretrhol. Na konci je rovnanie, delenie, kontrola, konzervácia a expedícia.

Všimnite si, že kroky dva až päť sa môžu opakovať niekoľkokrát, kým sa dosiahne požadovaný rozmer. Pre simuláciu to znamená, že musíme vedieť, či model začína so žíhaným materiálom, alebo s materiálom spevneným z predchádzajúceho ťahu.

### Snímka 6 · Kam zapadá dnešná prednáška

⏱️ `0:10–0:12`

Kde sme v rámci predmetu? Na prvej prednáške sme si povedali, čo je modelovanie tvárnenia a prečo ho robíme. Na druhej sme prešli analytické metódy a prehľad softvéru. Na tretej sme sa zaoberali materiálovými údajmi v DEFORM.

Na konci minulej prednášky som vám sľúbil preprocesing, teda sieť, okrajové podmienky a trenie. Dnes to urobíme na celom jednom procese, od technológie až po overenie výsledku. Takto sa s tým stretnete v praxi: nikto vám nepovie „nastavte sieť“, ale „zistite, prečo nám praská rúra na treťom ťahu“.

Mojím cieľom je, aby ste na konci vedeli sami zostaviť model ťahania, overiť ho a kriticky posúdiť jeho výsledky, aj keď pochádzajú z publikovaného článku.

### Snímka 7 · Program dnešnej prednášky

⏱️ `0:12–0:14`

Program je na snímke. Úvod máme takmer za sebou. Časť jedna sú základy ťahania: spôsoby ťahania, prievlak a tŕň, pretvorenie a parametre procesu. Časť dva sú analytické metódy: ideálna práca, metóda rezov, optimálny uhol prievlaku a medzná redukcia. V časti tri prejdeme numerickú simuláciu a nastavenie modelu.

Hlavným blokom je časť štyri, prípadové štúdie z našich článkov. Uvidíte, ako sme merali trenie, ako vplýva uhol prievlaku a rýchlosť, ako sa mení hrúbka steny, ako sa dá využiť plánovaný experiment v simulácii a ako sa simulujú rúry s vnútorným rebrovaním. Časť päť je syntéza: optimalizácia a validácia. Na konci budú kontrolné otázky. Prednáška je dlhá, takže si v polovici urobíme prestávku.

---

## ČASŤ I — ZÁKLADY PROCESU ŤAHANIA 0:14 – 0:40

### Snímka 8 · Časť I — Základy procesu ťahania

⏱️ `0:14`

Začíname prvou časťou, základmi procesu ťahania.

### Snímka 9 · Princíp ťahania

⏱️ `0:14–0:16`

Ťahanie je tvárnenie za studena, výnimočne za tepla, pri ktorom sa drôt, tyč alebo rúra preťahuje cez nepohyblivý prievlak. Prierez sa zmenšuje a dĺžka sa zväčšuje, pretože objem ostáva rovnaký.

Pozrite sa na schému vpravo. Sila F pôsobí na výstupe ako ťah. Samotné tvarovanie však prebieha tlakom: v kontakte s prievlakom vzniká normálový tlak p a k nemu trecie napätie mí krát p. Materiál sa teda deformuje tlakom, ale potrebnú silu prenáša ťahom už pretvorená časť za prievlakom. Z toho vyplýva hlavné obmedzenie ťahania, ku ktorému sa ešte vrátime: ťahané už pretvorené vlákno nesmie začať tiecť ani sa pretrhnúť.

Cieľmi ťahania sú presné rozmery, kvalitný povrch a vyššia pevnosť, ktorú materiál získa spevnením.

> 🗒️ *Klik – zobrazí sa ďalší bod.*

Rúra je dutý polotovar. Oproti drôtu preto pribúdajú dve veličiny, ktoré treba kontrolovať: hrúbka steny a vnútorný povrch. Často sa preto používa vnútorný nástroj, tŕň.

### Snímka 10 · Drôt, tyč a rúra – spoločné a rozdielne

⏱️ `0:16–0:18`

Tabuľka porovnáva tri druhy výrobkov. Drôt sa ťahá z valcovaného drôtu vo zvitku na viacnásobných ťahacích strojoch s bubnami. Prechádza mnohými prievlakmi za sebou, pri vysokých rýchlostiach a s malou redukciou v každom prievlaku.

Tyče sa ťahajú na ťahacích stoliciach, s menším počtom ťahov a pri väčších priemeroch. Rúry sa ťahajú z dutého predvalku na reťazových alebo hydraulických ťahacích stoliciach. Pri nich treba navyše kontrolovať hrúbku steny a vnútorný priemer, preto sa často ťahajú na tŕni.

Fyzika je však vo všetkých troch prípadoch rovnaká. Ťahové napätie na výstupe z prievlaku musí ostať pod medzou klzu ťahaného materiálu. Ak by ju prekročilo, materiál za prievlakom by sa začal predlžovať a nakoniec by sa pretrhol. Táto jedna podmienka sa bude ťahať celou dnešnou prednáškou.

### Snímka 11 · Geometria prievlaku

⏱️ `0:18–0:20`

Prievlak má štyri časti. Vstupný kužeľ vedie mazivo do prievlaku. Redukčný kužeľ s uhlom dva alfa je miesto, kde prebieha samotná deformácia. Kalibračná časť, nazývaná aj valček, je krátky valcový úsek, napríklad štvormilimetrový, ktorý určuje výsledný priemer a kompenzuje pružné odpruženie. Výstupný kužeľ chráni výrobok, aby sa pri výstupe nepoškriabal.

Obrázok vpravo je výkres prievlaku s priemerom dvadsaťpäť milimetrov, ktorý sme použili pri rúre dvadsaťosem krát štyri. Upozorňujem na jednu vec, ktorá vás pri čítaní literatúry bude mýliť. V knihe sa uvádza celý uhol kužeľa, dva alfa. V článkoch sa väčšinou uvádza polovičný uhol, alfa. Keď niekde čítate „uhol dvanásť stupňov“, vždy si overte, či ide o celý alebo polovičný uhol.

> 🗒️ *Klik – zobrazí sa ďalší bod.*

Prievlaky na ťahanie oceľových rúr sa vyrábajú najčastejšie zo spekaného karbidu, v triedach napríklad G desať až G šesťdesiat, alebo z nástrojovej ocele.

### Snímka 12 · Štyri spôsoby ťahania rúr

⏱️ `0:20–0:22`

Rúry sa ťahajú štyrmi základnými spôsobmi. Na obrázku a je prievlačné ťahanie, teda ťahanie bez tŕňa. Rúra prechádza iba prievlakom, vnútri nie je nič. Zmenšuje sa priemer, hrúbka steny sa určuje sama. Používa sa najmä ako posledná operácia pri malých priemeroch.

Na obrázku b je ťahanie na pevnom tŕni. Tŕň je upevnený na tŕňovej tyči a stojí v prievlaku. Rúra sa zmenšuje medzi prievlakom zvonka a tŕňom zvnútra, takže sa zmenšuje priemer aj hrúbka steny. Tŕň môže byť valcový alebo tvarový.

Na obrázku c je plávajúci tŕň. Nie je nijako uchytený, drží ho na mieste rovnováha síl od trenia a tlaku. Výhodou je, že dĺžka rúry nie je obmedzená tyčou, takže sa dajú ťahať veľmi dlhé rúry a navíjať do zvitku.

Na obrázku d je ťahanie na tyči. Dlhá tyč ide spolu s rúrou cez prievlak. Po ťahaní sa rúra musí z tyče stiahnuť, takže sa najprv odvaľuje, aby sa jej priemer o niekoľko desatín milimetra zväčšil.

### Snímka 13 · Porovnanie spôsobov ťahania

⏱️ `0:22–0:24`

Tabuľka porovnáva výhody a obmedzenia. Prievlačné ťahanie je najjednoduchšie, ale vnútorný povrch a vnútorný priemer sa nekontrolujú. Hrúbka steny sa pri ňom mierne zväčší. To je dôležitý poznatok, ku ktorému sa vrátime pri štúdiách.

Pevný tŕň dáva presné rozmery a výborný vnútorný povrch, ale dĺžka rúry je obmedzená dĺžkou tyče, sila je vyššia a redukcia na jeden ťah býva do tridsiatich percent. Plávajúci tŕň dovolí dlhé rúry, vyššie rýchlosti a redukciu až okolo štyridsaťpäť percent, ale je citlivý na geometriu nástroja a na mazanie. Ťahanie na tyči sa hodí na veľmi tenké steny pod jeden milimeter.

Pozrite sa na rámček dole, lebo to je dôležité pre simuláciu. Na pevnom tŕni trenie rúru brzdí, teda pôsobí proti smeru ťahania a zvyšuje silu. Na tyči, ktorá sa pohybuje s rúrou, trenie rúru ťahá dopredu a silu znižuje. Ak v modeli zle zadáte pohyb tŕňa, dostanete opačný smer trenia a úplne iný výsledok.

### Snímka 14 · Tŕne a ich poloha

⏱️ `0:24–0:26`

Pozrime sa bližšie na tŕne. Pevný tŕň je buď valcový, alebo tvarový, a je upevnený na tŕňovej tyči. V praxi sa často používa krúžok zo spekaného karbidu, naskrutkovaný na oceľové teleso. Na ľavom obrázku je krúžok označený jednotkou a teleso dvojkou. Opotrebený krúžok sa vymení a teleso ostáva.

Druhý obrázok ukazuje polohu tŕňa v prievlaku. Poloha tŕňa voči kalibračnej časti prievlaku určuje, kde sa stena začína stenčovať, a teda aj rozloženie síl. V simulácii je to jeden z geometrických parametrov, ktorý musíte zadať presne podľa skutočnosti. Tŕň sa navyše opotrebúva často viac ako prievlak.

> 🗒️ *Klik – zobrazí sa ďalší bod.*

Ak má tŕň na povrchu drážky, teda je rebrovaný alebo profilový, vytvarujú sa na vnútornom povrchu rúry rebrá. Tak vznikajú rúry s vnútorným rebrovaním, ktorým sa budeme venovať v troch štúdiách vo štvrtej časti.

### Snímka 15 · Hrotovanie – bez hrotu sa rúra neťahá

⏱️ `0:26–0:28`

Aby sa rúra dala ťahať, musí sa jej koniec zúžiť. Tomu sa hovorí hrotovanie. Hrot musí prejsť prievlakom a ťahacia stolica ho musí vedieť uchopiť.

Hrot sa robí buď za tepla rotačným kovaním, keď sa čeľuste pohybujú priamočiaro a rúra sa otáča. V našom experimente sme hrotovali pri teplote osemsto päťdesiat až deväťsto stupňov Celzia na priemer jedenásť milimetrov, teda menší ako prievlak s priemerom dvanásť. Druhou možnosťou je lisovanie za studena, ktoré sa hodí pre tenké steny. Na obrázkoch vidíte lisovanie hrotu a výsledný hrot.

> 🗒️ *Klik – zobrazí sa ďalší bod.*

Pre simuláciu z toho vyplýva praktické pravidlo. Hrot a koniec rúry, ktorý sa ešte neťahal, sa nehodnotia. Výsledky, teda rozmery, hrúbku steny a silu, čítame len zo strednej časti rúry, kde je proces ustálený.

### Snímka 16 · Redukcia, pretvorenie a súčiniteľ predĺženia

⏱️ `0:28–0:30`

Teraz tri základné veličiny, ktoré budeme používať celú prednášku. Najprv poučky, ktoré vidíte hore.

Redukcia R je pomerné zmenšenie plochy prierezu rúry ťahaním, vyjadrené v percentách pôvodného prierezu S nula. Hovorí nám, o koľko percent prierezu sme rúru v ťahu zmenšili.

Pretvorenie fí, presnejšie logaritmické pretvorenie, je prirodzený logaritmus pomeru prierezu pred ťahom a po ňom. Jeho veľká výhoda je, že pretvorenia po sebe idúcich ťahov môžeme jednoducho sčítať. Pri redukcii to neplatí.

Súčiniteľ predĺženia lambda udáva, koľkokrát sa rúra ťahaním predĺži. Pretože objem ostáva stály, rovná sa pomeru prierezov S nula lomeno S er. Pri ťahaní je teda vždy väčší ako jedna.

Pozrime sa na vzorce. Prierez rúry je pí štvrtín krát rozdiel štvorcov vonkajšieho a vnútorného priemeru. Dá sa napísať aj ako pí krát stredný priemer krát hrúbka steny, teda pí krát D mínus s krát s. Z prierezov potom vypočítame redukciu, pretvorenie aj súčiniteľ predĺženia. Všimnite si, že pretvorenie je logaritmus súčiniteľa predĺženia.

Tretí riadok je zákon stálosti objemu. Súčet pretvorení v dĺžke, v strednom priemere a v hrúbke steny je nula. Ak sa teda priemer a stena zmenšia, dĺžka musí narásť.

> 🗒️ *Klik – zobrazí sa príklad.*

Príklad z prvej štúdie. Rúra sedemdesiat krát šesť celých tri sa ťahá na päťdesiatpäť krát štyri celé sedemdesiatpäť. Pôvodný prierez je približne tisíc dvesto šesťdesiat štvorcových milimetrov, nový približne sedemsto päťdesiat. Redukcia je štyridsať a pol percenta, súčiniteľ predĺženia asi jedna celá šesťdesiatosem a pretvorenie nula celá päťdesiatdva. Rúra sa teda predĺži o dve tretiny. Skúste si to prepočítať doma, bude to aj v kontrolných otázkach.

### Snímka 17 · Napäťovo-deformačný stav v prievlaku

⏱️ `0:30–0:32`

Aký je stav napätosti v prievlaku? V pozdĺžnom smere je ťahové napätie sigma jedna, v radiálnom a tangenciálnom smere sú tlakové napätia sigma dva a sigma tri. Úloha je osovo symetrická, takže sigma dva a sigma tri sú približne rovnaké.

Vzťah medzi pretvoreniami a napätiami opisujú Lévyho a Misesove rovnice. Rozdiely pretvorení sú úmerné rozdielom napätí a konštanta úmernosti je tri polovice krát pomer intenzity pretvorenia a intenzity napätia. Na obrázku vpravo vidíte prievlak, pevný tŕň a tri zóny, v ktorých sa stav napätosti mení. K týmto zónam sa vrátime v analytickej časti.

Najdôležitejší je druhý vzorec. Napätie sigma jedna sa rovná ťažnej sile lomeno výsledný prierez. A toto napätie musí byť menšie ako medza klzu rúry, ktorá je už spevnená ťahaním.

> 🗒️ *Klik – zobrazí sa ďalší bod.*

Ak sigma jedna prekročí medzu klzu za prievlakom, rúra sa začne predlžovať, stenčovať a nakoniec sa pretrhne. Zároveň tým stratíte presnosť rozmerov, pretože rúra sa deformuje aj mimo prievlaku.

### Snímka 18 · Kľúčové parametre procesu

⏱️ `0:32–0:34`

Tabuľka zhŕňa kľúčové parametre. Uhol prievlaku: pri malom uhle je kontakt dlhý a veľa energie sa stráca trením, pri veľkom uhle materiál zbytočne mení smer toku a zvyšuje sa tlak na nástroj. Medzi tým je optimum, ktoré si v analytickej časti aj vypočítame.

Redukcia určuje silu a spevnenie a je obmedzená pevnosťou ťahaného materiálu. Trenie a mazanie ovplyvňujú silu, opotrebenie, povrch a teplo. V simulácii ho zadávame Coulombovým súčiniteľom mí alebo faktorom trenia m.

Rýchlosť ťahania ovplyvňuje mazací film a ohrev. Pri pomalom ťahaní rúr však na silu takmer nevplýva, uvidíme to v štúdiách. Kalibračná dĺžka určuje presnosť priemeru, ale ak je príliš dlhá, zvyšuje trenie. Geometria tŕňa určuje vnútorný priemer a hrúbku steny. Materiál vstupuje krivkou spevnenia a citlivosťou na rýchlosť deformácie, ale aj excentricitou vstupnej rúry.

Všimnite si, že každý z týchto parametrov je zároveň vstupom do modelu metódou konečných prvkov.

### Snímka 19 · Čo ovplyvňuje presnosť ťahanej rúry

⏱️ `0:34–0:36`

Čo ovplyvňuje presnosť výslednej rúry? V prvom rade vstupná rúra. Jej excentricita a vnútorný mnohouholník spôsobia, že sa materiál po obvode nepretvára rovnomerne.

Druhým faktorom je teplota. Deformačné teplo a teplo z trenia rúru ohrievajú. Termokamerou sme na výstupe z prievlaku namerali sto tridsať až sto osemdesiat stupňov Celzia. To nie je zanedbateľné, a pritom väčšina simulácií, aj našich, teplotu zanedbáva.

Tretím faktorom sú nástroje, teda ich rozmery, presnosť výroby a opotrebenie. Štvrtým je deformácia rúry za prievlakom, ak napätie od ťažnej sily prekročí medzu klzu spevnenej rúry.

> 🗒️ *Klik – zobrazí sa ďalší bod.*

Zaujímavý jav je pri prievlačnom ťahaní. Výsledný vonkajší priemer je o niečo menší ako priemer prievlaku. Rúra sa za prievlakom ešte mierne zúži. Obrázok vpravo ukazuje meranie rúry na súradnicovom meracom stroji ZEISS. Takto sme merali rozmery, ktoré potom slúžili na porovnanie so simuláciou.

### Snímka 20 · Spevnenie za studena: jeden ťah, veľká zmena

⏱️ `0:36–0:38`

Ako veľmi sa materiál pri ťahaní spevní? Tabuľka ukazuje výsledky ťahových skúšok ocele E dvestotridsaťpäť s hrúbkou steny jeden milimeter pred jedným ťahom a po ňom.

Pri ťahu z priemeru štrnásť na dvanásť, teda pri redukcii asi trinásť a pol percenta, stúpne medza klzu z dvestoosemdesiatpäť na štyristopätnásť megapascalov. Pri ťahu z osemnástich na dvanásť, s redukciou vyše tridsaťdva percent, stúpne medza klzu z dvestoosemdesiatpäť až na štyristošesťdesiatdeväť megapascalov a pevnosť z tristodeväťdesiatdeväť na päťstošesťdesiatosem.

Najväčšia zmena je však v ťažnosti. Z približne tridsiatich percent klesne na osem. Ťažnosť teda klesne na tretinu po jedinom ťahu. Preto sa po niekoľkých ťahoch musí žíhať.

> 🗒️ *Klik – zobrazí sa ďalší bod.*

Pre simuláciu to znamená, že krivka spevnenia rozhoduje o sile aj o medznej redukcii. Ak zadáte materiál bez spevnenia, model vám ukáže nesprávnu silu a nesprávne riziko pretrhnutia.

### Snímka 21 · Čo musí model zachytiť

⏱️ `0:38–0:40`

Na záver prvej časti si zhrňme, čo od modelu chceme. Chceme silu a napätie ťahania, aby sme vedeli dimenzovať stolicu a posúdiť riziko pretrhnutia. Chceme rozmery, teda vonkajší a vnútorný priemer, hrúbku steny a kruhovitosť. Chceme pretvorenie a spevnenie v stene. Chceme zvyškové napätia, ktoré vznikajú z nerovnomernej deformácie. A chceme zaťaženie a opotrebenie prievlaku a tŕňa.

Schéma vpravo ukazuje logiku celej dnešnej prednášky. Vstupmi sú geometria, krivka spevnenia, trenie a rýchlosť. Model metódou konečných prvkov z nich vypočíta silu, polia napätí a pretvorení a rozmery. A tieto výstupy musíme overiť, a to najprv analytickým odhadom a potom experimentom.

Preto teraz prejdeme k analytickým metódam. Nie preto, že by boli presnejšie, ale preto, že bez nich nemáte s čím simuláciu porovnať.

---

## ČASŤ II — ANALYTICKÉ METÓDY ŤAHANIA 0:40 – 1:00

### Snímka 22 · Časť II — Analytické metódy ťahania

⏱️ `0:40`

Druhá časť: analytické metódy ťahania.

### Snímka 23 · Prečo najprv analytika – a označenie

⏱️ `0:40–0:42`

Prečo sa vôbec zaoberať analytikou, keď máme simuláciu? Z troch dôvodov. Analytika dá rýchly odhad sily a výkonu, ktorý potrebujete napríklad pri výbere ťahacej stolice. Ukáže trendy, teda ako sila závisí od redukcie, trenia a uhla prievlaku. A dá referenčnú hodnotu, s ktorou porovnáte simuláciu.

> 🗒️ *Klik – zobrazí sa ďalší bod.*

Odtiaľ pochádza pravidlo, ktoré si prosím zapamätajte: simulácii neverte, kým ju neporovnáte aspoň s jednoduchým odhadom. Ak vám program vypočíta silu desaťkrát väčšiu, ako dáva ručný výpočet, chyba je takmer určite v modeli.

V tabuľke je označenie. A nula a A jedna sú prierezy pred a po ťahu, v knihe sa označujú S nula a S er. Redukcia r je pomerný úbytok prierezu. Epsilon je logaritmické pretvorenie, teda to isté ako fí z prvej časti. Sigma ef je stredný pretvárny odpor. Alfa je polovičný uhol prievlaku a mí súčiniteľ trenia. Sigma dé je napätie ťahania, sila je sigma dé krát A jedna a výkon je sila krát rýchlosť.

### Snímka 24 · Ideálna deformácia – dolná hranica

⏱️ `0:42–0:44`

Najjednoduchší odhad vychádza z energetickej bilancie. Práca vonkajšej sily sa rovná práci homogénnej plastickej deformácie. Dostaneme vzťah: napätie ťahania sa rovná pretvárnemu odporu krát logaritmus pomeru prierezov, teda sigma dé sa rovná sigma ef krát epsilon.

Tento vzťah neobsahuje trenie ani redundantnú prácu, teda prácu, ktorú materiál spotrebuje na zbytočné zmeny smeru toku. Je to preto dolná hranica napätia ťahania.

V príklade vpravo má materiál pretvárny odpor päťsto megapascalov a redukcia je dvadsať percent. Pretvorenie je logaritmus jednej lomeno nula celá osem, teda nula celá dvesto dvadsaťtri. Napätie ťahania vychádza sto dvanásť megapascalov.

> 🗒️ *Klik – zobrazí sa ďalší bod.*

Skutočné napätie je vždy vyššie, typicky jedenapolnásobok až dvaapolnásobok ideálnej hodnoty. O koľko presne, to nám povie metóda rezov.

### Snímka 25 · Metóda rezov (slab method)

⏱️ `0:44–0:46`

Metóda rezov, anglicky slab method, je klasická metóda teórie tvárnenia. V redukčnom kuželi si vyrežeme tenký element, napíšeme preň rovnováhu síl v smere ťahania, zahrnieme trenie na stene prievlaku a integrujeme od vstupu po výstup. Obrázok vpravo ukazuje taký element: napätie sigma na jednej strane, sigma plus dé sigma na druhej, normálový tlak sigma en a trenie ef krát sigma en.

Predpoklady sú: konštantný pretvárny odpor, Coulombovo trenie a homogénna deformácia, teda rovinné rezy ostávajú rovinné. Výsledok pre drôt a tyč je na snímke. Vystupuje v ňom parameter B, ktorý sa rovná mí krát kotangens alfa. Pre náš príklad, pri uhle šesť stupňov a trení nula celá jedna, je B približne nula celá deväťdesiatpäť a napätie ťahania vychádza stodeväťdesiatšesť megapascalov, teda takmer dvakrát viac ako ideálne.

> 🗒️ *Klik – zobrazí sa ďalší bod.*

Pre rúry platí rovnaký princíp. Parameter B potom obsahuje aj trenie na tŕni a namiesto pomeru prierezov vystupuje hrúbka steny.

> 🗒️ *Klik – zobrazí sa ďalší bod.*

Pozor, redundantná práca v tomto vzťahu nie je. Pridáva sa samostatnou korekciou, ku ktorej sa dostaneme o chvíľu.

### Snímka 26 · Ťahanie na pevnom tŕni – tri zóny

⏱️ `0:46–0:48`

Pri ťahaní rúry na pevnom tŕni sa deformačná oblasť delí na tri zóny. V zóne jedna sa zmenšuje iba priemer, rúra sa ešte nedotýka tŕňa a hrúbka steny ostáva konštantná. V zóne dva sa rúra dotkne tŕňa a zmenšuje sa priemer aj hrúbka steny. V zóne tri, v kalibračnej časti, sa rúra kalibruje a trenie pôsobí na prievlaku aj na tŕni zároveň.

Ťažná sila sa potom rovná napätiu na konci zóny tri krát výsledný prierez. V každej zóne sa použije metóda rezov s inými okrajovými podmienkami a výstup jednej zóny je vstupom do ďalšej.

> 🗒️ *Ak je čas: šípka dole otvorí štyri podsnímky s odvodením. Inak pokračujte doprava.*

Celé odvodenie je v knihe Výroba bezšvových rúr, v kapitole tri celé dva. Kto chce vidieť vzorce pre každú zónu, nájde ich v hĺbkovom pohľade pod touto snímkou. My pokračujeme ďalej.

### Snímka 26.1 · Zóna I – zmenšenie priemeru

⏱️ `SM+0:00–0:01`

V zóne jedna sa zmenšuje iba priemer. Odvodenie je rovnaké ako pri drôte, len namiesto polomeru drôtu vystupuje polomer strednice steny. R es je polomer strednice v danom reze a er es nula na vstupe.

Parameter A je jedna plus ef krát kotangens alfa, lomeno jedna mínus ef krát tangens alfa. Napätie v zóne jedna je A lomeno A mínus jedna, krát pretvárny odpor, krát jedna mínus pomer polomerov umocnený na A mínus jedna.

Okrajová podmienka na vstupe je, že napätie je nula, pretože rúru zozadu nič neťahá. Hovoríme, že nemáme protiťah. Ak dosadíme polomer na konci zóny jedna, teda tam, kde sa rúra dotkne tŕňa, dostaneme napätie sigma I nula. To je vstup do zóny dva.

Všimnite si, že ak by trenie bolo nulové, A by sa rovnalo jednej a vzorec by prešiel na ideálnu prácu. Tak si môžete vždy overiť, či ste vzorec opísali správne.

### Snímka 26.2 · Zóna II – zmenšenie priemeru aj steny

⏱️ `SM+0:01–0:02`

V zóne dva sa stena stenčuje medzi prievlakom a tŕňom. Parameter B má rovnaký prvý člen ako A, ale pribudne druhý člen. Ten obsahuje pomer vnútorného priemeru k súčtu vnútorného priemeru a oboch hrúbok steny, krát ef krát kotangens alfa. Tento člen predstavuje trenie na tŕni.

Preto je B vždy väčšie ako A, a napätie v zóne dva rastie rýchlejšie ako v zóne jedna. To je hlavný dôvod, prečo ťahanie na pevnom tŕni potrebuje väčšiu silu ako prievlačné ťahanie pri rovnakej zmene priemeru.

Vzorec pre napätie na konci zóny dva má dve časti. Prvá časť hovorí, že napätie z konca zóny jedna sa prenáša ďalej, ako keby to bol protiťah. Druhá časť je príspevok samotnej zóny dva. Pri odvodení sa vonkajší priemer nahrádza stredným priemerom, aby sa dal integrál vypočítať v uzavretom tvare.

### Snímka 26.3 · Zóna III – kalibrácia a ťažná sila

⏱️ `SM+0:02–0:03`

Zóna tri je kalibračná časť. Rúra sa tu už nezmenšuje, ale trenie pôsobí na oboch povrchoch, na prievlaku aj na tŕni. Napätie preto rastie exponenciálne s dĺžkou x, podľa výrazu e na dva ef x lomeno s er.

Na konci kalibrácie, teda pri x rovnom dĺžke l, dostaneme napätie sigma tri c. Ťažná sila je potom sigma tri c krát výsledný prierez, ktorý je pí krát rozdiel vonkajšieho priemeru a steny krát stena.

Z exponenciálneho člena je vidieť, prečo príliš dlhá kalibrácia škodí. Dlhšia kalibrácia a vyššie trenie zvyšujú silu veľmi rýchlo, najmä pri tenkej stene.

Pre praktický odhad uvádza kniha aj zjednodušený vzorec. Sila sa rovná strednému pretvárnemu odporu krát výsledný prierez krát pretvorenie, lomeno účinnosť éta ef. Účinnosť je nula celá štyri až nula celá šesť pre malé pretvorenie okolo nula celá pätnásť a nula celá sedem až nula celá osem pre pretvorenie okolo nula celá päť.

### Snímka 26.4 · Zhrnutie a otázky

⏱️ `SM+0:03–0:04`

Zhrňme hĺbkový pohľad. Napätie sa pri ťahaní na tŕni postupne načítava zónou po zóne a výstup jednej zóny je vstupom do ďalšej. Trenie na tŕni v zónach dva a tri robí ťahanie na tŕni náročnejším ako prievlačné ťahanie. A metóda dáva strednú silu, nie rozloženie napätí v stene.

> 🗒️ *Klik – zobrazí sa otázka 1; po odpovediach stlačte „odpoveď“.*

**Otázka jedna:** Prečo je parameter B v zóne dva väčší ako parameter A v zóne jedna?

> ✅ **Očakávané:** B obsahuje navyše člen trenia na tŕni d_r/(d_r+s_0+s_r)·f·cot α; v zóne II sa stena stenčuje medzi prievlakom a tŕňom.

> 🗒️ *Klik – zobrazí sa otázka 2.*

**Otázka dva:** Čo je okrajová podmienka na vstupe do zóny jedna?

> ✅ **Očakávané:** σ_I = 0 na vstupe (bez protiťahu); napätie na konci zóny I je vstupom do zóny II.

> 🗒️ *Klik – zobrazí sa otázka 3.*

**Otázka tri:** Ako sa mení napätie v kalibračnej zóne s jej dĺžkou?

> ✅ **Očakávané:** Exponenciálne podľa e^(2f·l/s_r) – dlhšia kalibrácia a vyššie trenie zvyšujú ťažnú silu.

> 🗒️ *Klik – zobrazí sa otázka 4.*

**Otázka štyri:** Čo z tejto metódy nezískate?

> ✅ **Očakávané:** Rozloženie napätí a pretvorení v stene, zvyškové napätia, zmenu hrúbky steny pri prievlačnom ťahaní – na to treba MKP.

Stlačte šípku hore pre návrat do hlavnej prednášky alebo šípku doprava pre pokračovanie.

### Snímka 27 · Redundantná práca a vzorec typu Siebel

⏱️ `0:48–0:50`

Teraz redundantná práca. Na vstupe do kužeľa a na výstupe z neho materiál náhle mení smer toku. Vzniká šmyk, ktorý nemení výsledný tvar, ale spotrebuje energiu. Materiál sa teda deformuje viac, než by vyžadovala samotná zmena tvaru. Táto nadbytočná práca rastie s uhlom prievlaku.

Jednoduchý spôsob, ako ju zahrnúť, je vzorec typu Siebel na snímke. Napätie ťahania je pretvárny odpor krát súčet troch členov. Prvý člen, epsilon, je ideálna práca. Druhý člen, epsilon krát mí krát kotangens alfa, je trenie. Tretí člen, dve tretiny alfa v radiánoch, je redundantná práca. Inou možnosťou je vynásobiť napätie faktorom redundantnej práce, ktorý je pri drôte jedna až približne jedna celá dva.

Pozrite sa na príklad vpravo, stále tá istá tyč. Ideálne vychádza sto dvanásť megapascalov, metóda rezov dáva stodeväťdesiatšesť a vzorec typu Siebel dvestopäťdesiattri megapascalov. Skutočné napätie je teda asi dva celé tri desatiny krát väčšie ako ideálne. Trenie ani redundantnú prácu teda zanedbať nemôžeme.

### Snímka 28 · Optimálny uhol prievlaku

⏱️ `0:50–0:52`

Graf vpravo som vypočítal zo vzorca typu Siebel pre náš príklad. Sivá prerušovaná čiara je ideálna práca, tá od uhla nezávisí. Tenká červená čiara je trenie. Pri malých uhloch je kontakt dlhý a trenie obrovské, s rastúcim uhlom klesá. Bodkovaná čiara je redundantná práca, ktorá s uhlom rastie lineárne. Hrubá čiara je súčet.

Súčet má minimum, a to je optimálny uhol prievlaku. Pre malé uhly sa dá vyjadriť jednoduchým vzorcom: sínus optimálneho uhla sa rovná odmocnine z jedna celá päť krát mí krát epsilon. Pre trenie nula celá jedna a pretvorenie nula celá dvesto dvadsaťtri vychádza optimálny uhol približne desať a pol stupňa. Optimálny uhol rastie s trením aj s redukciou.

> 🗒️ *Klik – zobrazí sa ďalší bod.*

A teraz to najdôležitejšie. Minimum je ploché. Uhly od ôsmich do štrnástich stupňov dávajú takmer rovnaké napätie, medzi dvestotridsaťtri a dvestotridsaťosem megapascalov. Naopak, uhol tri stupne je o štyridsaťsedem percent horší. Zapamätajte si to, lebo v štúdiách uvidíte, že rôzni autori uvádzajú rôzne optimálne uhly, a práve plochým minimom sa to dá vysvetliť.

### Snímka 29 · Medzná redukcia na jeden ťah

⏱️ `0:52–0:54`

Koľko môžeme zredukovať v jednom ťahu? Podmienka je, že napätie ťahania musí byť menšie ako pretvárny odpor materiálu za prievlakom. Pre ideálnu deformáciu bez spevnenia dostaneme, že maximálne pretvorenie je jedna. Potom pomer prierezov je e a maximálna redukcia je jedna mínus jedna lomeno e, teda asi šesťdesiattri percent.

Ak materiál spevňuje podľa mocninového zákona s exponentom n, maximálna redukcia je jedna mínus e na mínus jedna plus n. Tabuľka vpravo ukazuje, že spevnenie pomáha. Pri exponente nula celá štyridsaťštyri, ktorý má mäkká oceľ z našich štúdií, je ideálna medzná redukcia sedemdesiatšesť percent. Je to preto, že ťahaná časť za prievlakom je už spevnená, a teda pevnejšia ako materiál v deformačnej zóne.

> 🗒️ *Klik – zobrazí sa ďalší bod.*

Ak však zahrnieme trenie, redundantnú prácu a bezpečnostnú rezervu, praktické hodnoty sú oveľa nižšie, pri drôte dvadsať až tridsať percent na jeden ťah.

> 🗒️ *Klik – zobrazí sa ďalší bod.*

Pri rúrach sa uvádza na pevnom tŕni približne do tridsať percent, na plávajúcom tŕni približne do štyridsaťpäť percent, celkovo okolo päťdesiat percent podľa spôsobu ťahania.

### Snímka 30 · Riešený príklad: tyč Ø10 mm, r = 20 %

⏱️ `0:54–0:56`

Prejdime si celý príklad. Oceľová tyč s priemerom desať milimetrov sa ťahá s redukciou dvadsať percent. Pôvodný prierez je sedemdesiatosem celých päťdesiatštyri štvorcových milimetrov, nový šesťdesiatdva celých osemdesiattri a nový priemer osem celých deväťdesiatštyri milimetra. Pretvorenie je nula celá dvesto dvadsaťtri, pretvárny odpor päťsto megapascalov, polovičný uhol šesť stupňov, trenie nula celá jedna a výstupná rýchlosť jeden meter za sekundu.

Tabuľka vpravo porovnáva modely. Ideálne vychádza sto dvanásť megapascalov, metóda rezov stodeväťdesiatšesť a vzorec typu Siebel pri šiestich stupňoch dvestopäťdesiattri. Pri troch stupňoch by to bolo až tristoštyridsaťdva, pri desiatich dvestotridsaťtri a pri pätnástich dvestoštyridsať.

> 🗒️ *Klik – zobrazí sa ďalší bod.*

Sila je napätie krát výstupný prierez, teda približne pätnásť celých deväť kilonewtona. Výkon je sila krát rýchlosť, teda pätnásť celých deväť kilowattu.

> 🗒️ *Klik – zobrazí sa ďalší bod.*

A kontrola: napätie dvestopäťdesiattri megapascalov je menšie ako pretvárny odpor päťsto megapascalov, takže tyč sa ťahá a nepretrhne sa. Rezerva je približne dvojnásobná. Skúste si doma prepočítať jeden riadok tabuľky.

### Snímka 31 · Analytika verzus meranie pri rúre

⏱️ `0:56–0:58`

Teraz dva príklady s rúrami. Vľavo je rúra tridsať krát tri, ťahaná na tŕni na dvadsaťsedem krát dva a pol. Redukcia je dvadsaťštyri celé štyri percenta, pretvorenie nula celá dvadsaťosem. Pri pretvárnom odpore tristo megapascalov dá ideálna práca silu asi šestnásť kilonewtonov. Zjednodušený vzorec z knihy s účinnosťou nula celá päť dá asi tridsaťdva kilonewtonov, teda dvojnásobok.

Vpravo je prípad, kde máme aj meranie. Prievlačné ťahanie rúry šestnásť krát dva na priemer dvanásť, oceľ E dvestotridsaťpäť. Pretvorenie je nula celá tristo pätnásť a stredný pretvárny odpor, ako priemer medze klzu pred ťahaním a po ňom, je asi tristošesťdesiatsedem megapascalov.

> 🗒️ *Klik – zobrazí sa ďalší bod.*

Ideálna práca dá sedem celých šesť kilonewtona. Zjednodušený vzorec dá dvanásť a pol až pätnásť kilonewtonov. Vzorec typu Siebel, ak predpokladáme uhol dvanásť stupňov a trenie nula celá nula osem, dá trinásť celých osem kilonewtona.

> 🗒️ *Klik – zobrazí sa ďalší bod.*

Nameraná sila však bola dvadsaťjeden a pol až dvadsaťdva kilonewtonov a simulácia v DEFORM dala dvadsať a pol. Jednoduchá analytika teda pri prievlačnom ťahaní podhodnotí silu asi o tridsaťpäť percent. Nezachytí ohyb steny na vstupe do prievlaku, zhrubnutie steny ani reálne mazanie. Analytika je dobrá na rád veličiny, nie na návrh. Uhol prievlaku som pre tento odhad predpokladal, takže ho berte ako ilustráciu.

### Snímka 32 · Čo analytika dokáže – a čo nie

⏱️ `0:58–1:00`

Zhrňme, čo analytika dokáže. Dá strednú silu a napätie ťahania. Ukáže trendy s redukciou, trením a uhlom. Dá medznú redukciu a optimálny uhol. A je rýchla, nepotrebujete žiadny softvér.

Čo analytika nedokáže? Nedá lokálne rozloženie pretvorení, napätí a teploty. Nedá zvyškové napätia. Nedá rozloženie tlaku na nástroji ani jeho opotrebenie. Nezachytí excentricitu, ovalitu ani rozloženie hrúbky steny po obvode. A nepredpovie chyby, ako sú praskliny alebo povrchové chyby.

Takže analytika slúži na prvý návrh a na kontrolu vierohodnosti. Metódu konečných prvkov potrebujeme vtedy, keď záleží na lokálnych poliach, na rozmeroch, na nástrojoch a na chybách. A tým sa dostávame do tretej časti.

---

## ČASŤ III — NUMERICKÁ SIMULÁCIA A NASTAVENIE MODELU 1:00 – 1:32

### Snímka 33 · Časť III — Numerická simulácia a nastavenie modelu ťahania

⏱️ `1:00`

Tretia časť: numerická simulácia a nastavenie modelu ťahania rúr.

### Snímka 34 · Model = štyri nezávislé voľby

⏱️ `1:00–1:02`

Každý model metódou konečných prvkov je kombináciou štyroch volieb a tieto voľby sú od seba nezávislé. Prvou je časová integrácia, implicitná alebo explicitná. Odpovedá na otázku, ako sa v jednom kroku rieši pohybová rovnica. Druhou je opis siete, Lagrangeov, ALE alebo Eulerov. Odpovedá na otázku, či sa sieť pohybuje s materiálom. Treťou je formulácia materiálu, tuhoplastická alebo elastoplastická. Tá hovorí, či počítame aj pružné deformácie. Štvrtou je rozmer modelu, dvojrozmerný osovo symetrický alebo trojrozmerný.

Tieto pojmy sa často zamieňajú. Explicitný výpočet neznamená automaticky trojrozmerný a Lagrangeov opis neznamená automaticky implicitný výpočet. Keď budete čítať článok alebo manuál, vždy si všetky štyri voľby zvlášť ujasnite.

### Snímka 35 · Typické kombinácie v softvéri

⏱️ `1:02–1:04`

S akými kombináciami sa stretnete v praxi? DEFORM, dvojrozmerný aj trojrozmerný, počíta implicitne, s aktualizovaným Lagrangeovým opisom a automatickým preskieťovaním. Materiál môže byť tuhoplastický, teda tokový, alebo elastoplastický. Pre ustálené procesy, ako je valcovanie alebo pretláčanie, má DEFORM aj ALE riešič.

Abaqus Standard je implicitný, lagrangeovský a elastoplastický. Abaqus Explicit je explicitný, s lagrangeovskou alebo adaptívnou ALE sieťou. LS-DYNA vie oboje. V jednej štúdii z konferencie LS-DYNA sa ťahanie na plávajúcom tŕni počítalo implicitne a dvojrozmerne. A brazílski autori Neves a kolektív počítali ťahanie na pevnom tŕni elastoplasticky v programe MSC Superform a porovnali to s riešením hornej hranice.

Všetky naše štúdie, ktoré uvidíte vo štvrtej časti, sú v DEFORM, teda implicitné a lagrangeovské.

### Snímka 36 · Základný model ťahania rúry – vstupy

⏱️ `1:04–1:06`

Bez ohľadu na zvolenú metódu potrebuje model ťahania vždy tie isté vstupy. Geometriu: rúru s priemerom, stenou a dĺžkou, prievlak s uhlom a kalibráciou a tŕň. Rúra musí byť dosť dlhá, aby sa proces ustálil. Nástroje, ktoré sú buď tuhé, alebo pružné. Tuhé nástroje stačia, ak nás zaujíma sila a pretvorenie.

Materiál, teda krivku pretvárneho odporu v závislosti od pretvorenia, rýchlosti pretvorenia a teploty, a pri elastoplastickom modeli aj modul pružnosti a Poissonovo číslo. Trenie, zvlášť pre prievlak a pre tŕň. To je najcitlivejší vstup a treba ho kalibrovať meraním sily. Okrajové podmienky, teda rýchlosť ťahania a uchytenie tŕňa. Sieť, teda veľkosť prvkov a počet prvkov cez stenu. Teplo, ktoré sa pri pomalom ťahaní často zanedbáva. A pri viacerých ťahoch prenos stavu z prvého ťahu do druhého.

Jedno pravidlo platí pre všetky metódy: kvalita krivky spevnenia a trenia rozhoduje o kvalite výsledku viac ako voľba riešiča.

### Snímka 37 · Materiálové modely v našich štúdiách

⏱️ `1:06–1:08`

Tu sa vraciame k minulej prednáške. V našich štúdiách sme používali mocninový zákon: pretvárny odpor sa rovná c krát pretvorenie na n, krát rýchlosť pretvorenia na m, plus y. Parameter y je počiatočná medza klzu, c a n opisujú spevnenie a m citlivosť na rýchlosť pretvorenia.

V tabuľke sú parametre pre tri ocele. E dvestotridsaťpäť má y dvestotridsaťpäť a pol megapascala, c stosedemdesiatosem a n nula celá šesťdesiatjeden. E tristopäťdesiatpäť má vyššiu medzu klzu aj spevnenie. Oceľ SPT tristošesťdesiat má exponent m rovný nule. Z ťahovej skúšky sa totiž citlivosť na rýchlosť pretvorenia určiť nedá, preto sme materiál považovali za nezávislý od rýchlosti. V štúdiách rebrovaných rúr sme použili mäkkú oceľ podľa Holmquista a Johnsona: päťsto trinásť krát pretvorenie na nula celá štyridsaťštyri plus tristodvadsaťpäť megapascalov.

Graf vpravo ukazuje všetky štyri krivky. Všimnite si, aký veľký je rozdiel medzi E dvestotridsaťpäť a ostatnými. Vo všetkých prípadoch bol materiál plastický, s izotropným spevnením, podmienkou plasticity podľa Misesa a bez vplyvu teploty.

### Snímka 38 · Trenie – najcitlivejší vstup

⏱️ `1:08–1:10`

Trenie sa v simulácii zadáva dvoma základnými modelmi. Coulombov model hovorí, že trecie napätie je mí krát normálový tlak. Šmykový model hovorí, že trecie napätie je m krát šmyková medza klzu, teda m krát pretvárny odpor lomeno odmocnina z troch. Coulombov model sa hodí pri nižších tlakoch, šmykový pri vysokých tlakoch, ktoré sú typické pre objemové tvárnenie. DEFORM pri tvárnení za studena často používa práve šmykový model.

V literatúre nájdete pre ťahanie hodnoty trenia nula celá nula dva až nula celá nula tri. Tie sú však pre konkrétne mazivo a nástroj nespoľahlivé.

> 🗒️ *Klik – zobrazí sa ďalší bod.*

My sme používali faktor nula celá nula osem ako všeobecnú hodnotu a hodnotu okolo nula celá nula päťdesiattri až nula celá nula päťdesiatštyri pre karbidový prievlak, ktorú sme určili inverzne z merania.

> 🗒️ *Klik – zobrazí sa ďalší bod.*

Aké citlivé to je? V štúdii plávajúceho tŕňa v LS-DYNA zvýšenie trenia na prievlaku z nula celá nula päť na nula celá jedna zvýšilo silu asi o dvadsať percent. Postup vpravo, teda zmerať silu, simulovať pre niekoľko hodnôt trenia a nájsť zhodu, si podrobne ukážeme v štúdii z roku dvetisícosemnásť.

### Snímka 39 · Implicitná analýza

⏱️ `1:10–1:12`

Implicitná analýza rieši v každom kroku sústavu rovníc, zvyčajne Newtonovou a Raphsonovou metódou. Je bezpodmienečne stabilná, takže krok môže byť veľký a obmedzuje ho len to, či iterácie konvergujú. Hľadá rovnováhu, teda je prirodzene kvázistatická.

Ako nastaviť model ťahania? Použijeme kvázistatický krok, riadený posuvom. Ťahanie je pomalý, takmer ustálený proces, zotrvačnosť nepotrebujeme. Sila je potom výsledkom, nie vstupom. Každé teleso musí byť zabezpečené proti pohybu ako tuhé teleso, pretože zotrvačnosť ho nestabilizuje. Pevný tŕň preto uchytíme. Kontakt prievlaku s rúrou a tŕňa s rúrou zadáme s trením a na začiatku použijeme malé kroky. Krok volíme tak, aby sa uzol neposunul viac ako o zlomok najmenšieho prvku.

Výhody sú efektívnosť pri pomalých procesoch, hladké výsledky a priamy výpočet odľahčenia a zvyškových napätí. Nevýhodami sú drahé kroky, problémy s konvergenciou pri zmenách kontaktu a nutnosť stabilizovať plávajúci tŕň. V štúdii v LS-DYNA dalo statické riešenie podobnú silu ako dynamické, ale za dvadsaťdva minút namiesto stoštyroch.

### Snímka 40 · Explicitná analýza

⏱️ `1:12–1:14`

Explicitná analýza vypočíta nový stav priamo zo súčasného, bez riešenia sústavy rovníc, takže jeden krok je lacný. Je však len podmienečne stabilná. Časový krok musí byť menší ako čas, za ktorý zvuková vlna prejde najmenším prvkom. Rýchlosť vlny je odmocnina z modulu pružnosti lomeno hustota. Explicitný výpočet vždy rieši dynamickú rovnováhu, takže rýchlosť zaťaženia má vplyv.

Urobme si odhad. Rýchlosť zvuku v oceli je asi päťtisíc metrov za sekundu, prvok má štvrť milimetra. Stabilný krok vychádza päť krát desať na mínus ôsmu sekundy. Ťahanie päťdesiatich milimetrov rýchlosťou deväť metrov za minútu trvá tretinu sekundy. To je približne sedem miliónov krokov.

> 🗒️ *Klik – zobrazí sa ďalší bod.*

Preto sa proces v explicitnom výpočte umelo zrýchľuje alebo sa zväčšuje hmotnosť prvkov, čomu sa hovorí škálovanie hmotnosti. Obe úpravy zväčšia stabilný krok.

> 🗒️ *Klik – zobrazí sa ďalší bod.*

Treba však overiť, že sme nepokazili kvázistatický charakter. V Abaquse sa sleduje pomer kinetickej energie k vnútornej energii, ktorý by mal byť pod päť až desať percent. Výhody explicitného výpočtu sú robustný kontakt, lacné kroky a prirodzený pohyb plávajúceho tŕňa. Nevýhody sú malý krok, zašumené výsledky a citlivosť na malé prvky.

### Snímka 41 · Implicitne alebo explicitne?

⏱️ `1:14–1:16`

Tabuľka zhŕňa porovnanie. Implicitný výpočet má veľký a drahý krok, explicitný malý a lacný. Implicitný je bezpodmienečne stabilný, explicitný len podmienečne. Pri kontakte môže implicitný výpočet prestať konvergovať, explicitný je robustný. Sila z implicitného výpočtu je hladká, z explicitného osciluje a treba ju priemerovať. Zvyškové napätia dá implicitný výpočet priamo, explicitný až po prenose výsledku do implicitného riešiča.

Pre ťahanie sa implicitný výpočet používa v DEFORM a v Abaqus Standard, explicitný v Abaqus Explicit a LS-DYNA.

V priemyselnej praxi sa často kombinujú. Samotné tvárnenie sa počíta explicitne, pretože je robustné. Výsledok sa potom prenesie do implicitného riešiča, ktorý vypočíta odpruženie a zvyškové napätia. Tomu sa hovorí hybridný postup.

### Snímka 42 · Lagrangeov opis – sieť ide s materiálom

⏱️ `1:16–1:18`

Pri Lagrangeovom opise sú uzly siete pripojené k materiálovým bodom a sieť sa deformuje spolu s materiálom. DEFORM používa aktualizovaný Lagrangeov opis a neznámymi sú rýchlosti uzlov. Výhodou je, že sa prirodzene sledujú voľné povrchy, kontakt a história každého bodu, teda koľko sa pretvoril a ako sa spevnil.

V dvojrozmernom modeli používame štruktúrovanú sieť štvoruholníkov, v našich štúdiách štyri až osem prvkov cez stenu. Pri stredných pretvoreniach sme preskieťovanie nepotrebovali. Proces má tri fázy: nábeh, keď hrot vchádza do prievlaku, ustálený stav a dobeh na konci rúry. Silu čítame v ustálenej časti.

Obrázok vpravo je z prvej štúdie. Vidíte dvojrozmerný osovo symetrický model dvoch ťahov a sieť, ktorá sa deformuje s materiálom. Farby ukazujú pozdĺžne pretvorenie.

> 🗒️ *Klik – zobrazí sa ďalší bod.*

Pri viacerých ťahoch sa konečná sieť a stav po prvom ťahu použijú ako začiatok druhého ťahu. Tak sa prenesie aj spevnenie, ak sa medzi ťahmi nežíha.

### Snímka 43 · ALE a Eulerov opis

⏱️ `1:18–1:20`

Pri opise ALE, teda ľubovoľnom Lagrangeovom a Eulerovom opise, sa sieť môže pohybovať nezávisle od materiálu, ale zachováva si topológiu. Prvky sa tak menej deformujú. Pri Eulerovom opise je sieť pevná v priestore a materiál ňou preteká. Abaqus na to ponúka metódu CEL, ktorá spája Eulerov a Lagrangeov opis.

Pri ťahaní je zaujímavá myšlienka ustáleného stavu. Keď sa proces ustáli, geometria v prievlaku sa už nemení. Stačí teda modelovať krátky úsek okolo prievlaku a tŕňa, so vtokom a výtokom materiálu. Výhodami sú menšie skreslenie siete, malá oblasť, krátky výpočet a hladké polia. Nevýhodami sú náročnejšie okrajové podmienky a to, že nevidíte nábeh ani dobeh. Navyše sa história materiálu prenáša s chybou a nie každý riešič to podporuje.

> 🗒️ *Klik – zobrazí sa ďalší bod.*

Úprimne: publikované nastavenie ALE pre ťahanie rúr sme v zdrojoch nenašli. Väčšina štúdií, aj tie naše, používa Lagrangeov opis. Ak by ste chceli ALE použiť, vychádzajte z dokumentácie konkrétneho softvéru.

### Snímka 44 · Tuhoplastická verzus elastoplastická formulácia

⏱️ `1:20–1:22`

Tuhoplastická, alebo toková, formulácia zanedbáva pružné deformácie. Neznámymi sú rýchlosti a nestlačiteľnosť sa zabezpečí penalizačným členom. Je to klasický prístup Kobayashiho, Oha a Altana a základ riešiča DEFORM. Hodí sa na silu, pretvorenie a hrúbku steny. Nehodí sa na zvyškové napätia a pružné javy.

Elastoplastická formulácia počíta pružné aj plastické deformácie. Je potrebná na zvyškové napätia a odpruženie, ale je drahšia a horšie konverguje.

Rovnica dole je funkcionál z našich článkov. Prvý člen je práca plastickej deformácie. Druhý člen s konštantou K je penalizácia objemovej zmeny: veľké K núti objemovú rýchlosť pretvorenia k nule, teda materiál je nestlačiteľný. Tretí člen je práca vonkajších síl na povrchu. Diskretizáciou dostaneme nelineárne rovnice, ktoré sa riešia Newtonovou a Raphsonovou metódou.

K nástrojom: tuhé stačia na silu a pretvorenie. Ak vás zaujíma napätie v prievlaku alebo jeho opotrebenie, musíte prievlak modelovať ako pružné teleso, prípadne aj s nalisovaným krúžkom.

### Snímka 45 · 2D osovo symetricky alebo 3D?

⏱️ `1:22–1:24`

Dvojrozmerný osovo symetrický model platí vtedy, keď sú rúra, prievlak a tŕň súosové a zaťaženie je symetrické. Dá silu, pretvorenie a hrúbku steny a je lacný, takže sa hodí na parametrické štúdie. Trojrozmerný model potrebujeme pri excentricite, ovalite, profilových prierezoch a nesymetrickom zaťažení. Dá navyše excentricitu, ovalitu a úplný obraz zvyškových napätí, ale je drahý. V našej štúdii mal trojrozmerný model časový krok desať na mínus piatu sekundy, dvojrozmerný desať na mínus štvrtú, teda o rád väčší.

> 🗒️ *Klik – zobrazí sa ďalší bod.*

Pri rebrovanom tŕni sme použili štvrtinový trojrozmerný model so zrkadlovou symetriou. Obrázok vpravo ukazuje, ako sa sieť zjemní v oblasti rebra: zo siedmich desatín milimetra na sedem stotín. Bez takého zjemnenia by sa rebro do siete vôbec nezmestilo.

### Snímka 46 · Ako sme nastavovali modely v DEFORM

⏱️ `1:24–1:26`

Tu je prehľad konkrétnych nastavení z našich článkov. Čísla v hlavičke sú čísla zdrojov z mapy štúdií. Dvojrozmerné modely boli lagrangeovské a osovo symetrické, so štyrmi až ôsmimi štvoruholníkmi cez stenu a bez preskieťovania. Trojrozmerné modely mali tetraedrickú sieť so stošesťdesiat tisíc až päťsto deväťdesiatdva tisíc prvkami a preskieťovanie každých päťdesiat krokov.

Nástroje boli vždy tuhé. Rýchlosť bola väčšinou deväť metrov za minútu. V plánovanom experimente to bolo šesťdesiat milimetrov za minútu a v parametrických štúdiách od jedného do osemsto milimetrov za sekundu. Trenie bolo šmykové, buď nula celá nula osem, alebo nula celá nula päťdesiatštyri z merania.

Zaujímavý je riadok okrajových podmienok. V dvojrozmerných modeloch sa ťahal hrot rúry, ako v skutočnosti. Pri rúre s vnútornými rebrami sme to otočili: posúvali sa nástroje a koniec rúry bol upnutý. Fyzikálne je to to isté, len v inom súradnicovom systéme, ale výpočet lepšie konvergoval. A vyhodnocovali sme vždy len ustálenú strednú časť rúry.

### Snímka 47 · Čo môžeme od ktorej simulácie čakať

⏱️ `1:26–1:28`

Táto tabuľka hovorí, čo môžete čakať od ktorého typu simulácie. Silu ťahania dajú všetky, pri explicitnom výpočte ju treba filtrovať. Pretvorenie a hrúbku steny tiež dajú všetky. Zvyškové napätia dá priamo len elastoplastický implicitný výpočet, explicitný ich dá po prenose do implicitného riešiča.

Napätie v nástroji dostanete len s pružným prievlakom, s tuhým máte len tlak na povrchu. Nábeh a dobeh nedá ustálený ALE výpočet. Polohu plávajúceho tŕňa zvládne prirodzene explicitný výpočet, implicitný len s ťažkosťami. A chyby, ako sú praskliny, potrebujú kritérium porušenia.

Pre ilustráciu príklad z literatúry: v štúdii ťahania tenkostenných rúr zo zliatiny medi a cínu zväčšenie celého uhla prievlaku zo šiestich na tridsaťosem stupňov zvýšilo opotrebenie tŕňa o viac ako osemdesiat percent, ale opotrebenie prievlaku len asi o päť percent. To by ste bez simulácie s modelom opotrebenia nezistili.

### Snímka 48 · Typické numerické problémy a nápravy

⏱️ `1:28–1:30`

S akými problémami sa stretnete? Spomeniem tie najčastejšie. Sieť sa skreslí na vstupe do prievlaku alebo pri hrote tŕňa, kde je pretvorenie najväčšie. Pomôže jemnejšia sieť, preskieťovanie alebo ALE.

Implicitný výpočet nekonverguje. Príčinou sú zmeny kontaktu alebo to, že sa niektoré teleso môže voľne pohybovať. Pomôže menší krok, lepší počiatočný kontakt a správne väzby. Tŕň prejde prievlakom, čo sa stáva pri plávajúcom tŕni pri vysokom trení na tŕni.

Rúra stráca objem. To je typický dôsledok preskieťovania a hrubej siete. Kontrolujte objem pred a po ťahaní, mal by sa zachovať. A najčastejší problém: sila nesedí s meraním. Príčinou je takmer vždy zlé trenie alebo zlá krivka spevnenia, nie riešič.

Nakoniec, ak výsledok závisí od veľkosti siete, máte málo prvkov cez stenu. Vtedy treba urobiť štúdiu citlivosti siete, teda zjemňovať sieť dovtedy, kým sa výsledok nemení.

### Snímka 49 · Ako si vybrať model

⏱️ `1:30–1:32`

Na záver tretej časti rozhodovacia tabuľka. Ak vás zaujíma sila a pretvorenie v parametrickej štúdii uhla, redukcie a trenia, stačí dvojrozmerný osovo symetrický implicitný lagrangeovský model s tuhými nástrojmi. Ak potrebujete zvyškové napätia, musíte počítať elastoplasticky, a pri excentrickej rúre trojrozmerne. Na napätie a opotrebenie nástroja potrebujete pružný prievlak a model opotrebenia. Na plávajúci tŕň a nábeh sa hodí explicitný výpočet. Na dlhý ustálený proces s veľmi jemnou sieťou v prievlaku ALE. A na profilový tŕň s rebrami trojrozmerný model so symetriou a lokálnym zjemnením siete.

A vždy, bez výnimky, porovnajte výsledok s analytickým odhadom a s nameranou silou. Presne to robia prípadové štúdie, na ktoré sa teraz pozrieme.

> 🗒️ *Vhodné miesto na prestávku.*

---

## ČASŤ IV — PRÍPADOVÉ ŠTÚDIE Z VLASTNÉHO VÝSKUMU 1:32 – 2:08

### Snímka 50 · Časť IV — Prípadové štúdie z vlastného výskumu

⏱️ `1:32`

Štvrtá časť: prípadové štúdie z nášho vlastného výskumu.

### Snímka 51 · Mapa štúdií: jedna výskumná línia

⏱️ `1:32–1:34`

Štúdie, ktoré uvidíte, vznikli v rokoch dvetisícsedemnásť až dvetisícdvadsaťtri na našom ústave v rámci projektov APVV a VEGA a v spolupráci so Železiarňami Podbrezová. Nie sú to izolované články, ale jedna výskumná línia, v ktorej každá štúdia rieši problém, ktorý vznikol v predchádzajúcej.

Začali sme dvoma ťahmi na pevnom tŕni a otázkou, či vypočítané pretvorenie zodpovedá skutočnosti. Na to sme použili stereológiu, teda meranie z mikroštruktúry, a neskôr sme pridali Voronoiove zrná. Potom sme narazili na problém trenia, takže sme ho zmerali inverznou analýzou. S kalibrovaným trením sme skúmali vplyv uhla, trenia a rýchlosti na silu. Pri prievlačnom ťahaní sme sa zamerali na hrúbku steny a rozmery a na to, ako použiť plánovaný experiment a analýzu rozptylu. A nakoniec sme prešli na rúry s vnútorným rebrovaním, kde sme riešili geometriu tŕňa, sily a napätia.

Všimnite si posledný stĺpec, validáciu. Pri každej štúdii si položte otázku: čím sme model overili?

### Snímka 52 · Dva ťahy bez žíhania: E235 a E355

⏱️ `1:34–1:36`

Prvá štúdia. Rúra valcovaná za tepla z Podbrezovej, s priemerom sedemdesiat milimetrov a stenou šesť celých tri, sa ťahala na pevnom tŕni v dvoch ťahoch bez medzioperačného žíhania. Prvý ťah na päťdesiatpäť krát štyri celé sedemdesiatpäť mal redukciu štyridsať a pol percenta, druhý ťah na päťdesiat krát tri celé sedemdesiatpäť redukciu dvadsaťsedem percent. Celkovo je to asi päťdesiatsedem percent. Skúšali sme dve ocele, E dvestotridsaťpäť a E tristopäťdesiatpäť.

Model bol v DEFORM 2D, lagrangeovský, s rýchlosťou deväť metrov za minútu a faktorom trenia nula celá nula osem. V prvom ťahu bolo osem prvkov cez stenu, v druhom šesť, bez preskieťovania. Dôležité je, že druhý ťah začínal zo stavu po prvom ťahu. Do druhého ťahu sa teda prenieslo pretvorenie aj spevnenie.

> 🗒️ *Klik – zobrazí sa ďalší bod.*

A otázka, ktorú sme si položili: je vypočítané pretvorenie správne? Ako to overiť, keď pretvorenie v stene rúry nemôžeme zmerať tenzometrom?

### Snímka 53 · Pretvorenie z mikroštruktúry

⏱️ `1:36–1:38`

Odpoveďou je stereológia. Zo steny rúry sme pripravili metalografické rezy pri vnútornom, strednom a vonkajšom povrchu, na obrázku označené I, M a O. Pri tvárnení sa zrná predlžujú a ich hranice sa orientujú v smere toku. Pomocou orientovaných testovacích čiar podľa Saltykovovej metódy sa určí stupeň orientácie hraníc zŕn, a z neho lokálne pretvorenie. Dolný obrázok ukazuje mikroštruktúru pred ťahaním a po dvoch ťahoch. Rozdiel je zreteľný na prvý pohľad.

Tabuľka porovnáva pozdĺžne pretvorenie fí tri. Po prvom ťahu dala stereológia nula celá päťsto dvadsať a simulácia nula celá päťsto tridsaťsedem. Po druhom ťahu stereológia nula celá osemsto tridsaťdeväť a simulácia nula celá osemsto sedemdesiatštyri.

Posledný stĺpec som dopočítal z rozmerov rúry, ako logaritmus pomeru prierezov. Vychádza presne nula celá päťsto dvadsať a nula celá osemsto tridsaťdeväť.

> 🗒️ *Klik – zobrazí sa ďalší bod.*

Simulácia teda nadhodnocuje pretvorenie o tri až štyri percentá, kým stereológia sa zhoduje s jednoduchým výpočtom z rozmerov. Máme tri nezávislé čísla pre tú istú veličinu, a to je presne to, čo pri validácii chceme.

### Snímka 54 · Pretvorenie cez stenu a spevnenie

⏱️ `1:38–1:40`

Čo ďalej štúdia ukázala? Tangenciálne pretvorenie fí jedna je pri vonkajšom povrchu asi mínus nula celá dvadsaťštyri a pri vnútornom asi mínus nula celá dvadsaťdva. Vnútorný povrch sa teda deformuje o niečo menej. V prvom ťahu s veľkou redukciou sa v deformačnej zóne lokálne objavilo kladné radiálne pretvorenie, v druhom ťahu už len záporné.

Najzaujímavejšie zistenie je, že rozdiel medzi oceľami E dvestotridsaťpäť a E tristopäťdesiatpäť je v pretvorení takmer nulový. Pretvorenie pri ťahaní na tŕni určuje predovšetkým geometria, teda prievlak a tŕň, a nie materiál. Materiál rozhoduje o sile, ale nie o tom, kam sa kov presunie.

> 🗒️ *Klik – zobrazí sa ďalší bod.*

Graf vpravo ukazuje mechanické vlastnosti ocele E dvestotridsaťpäť. Po dvoch ťahoch mala pevnosť sedemsto štyridsaťsedem megapascalov a tvrdosť stosedemdesiatsedem Vickersa. Oceľ E tristopäťdesiatpäť mala osemsto deväťdesiattri megapascalov a dvestojedenásť Vickersa.

> 🗒️ *Klik – zobrazí sa ďalší bod.*

Záver štúdie: na výpočet pretvorenia pri ťahaní za studena stačia tuhé nástroje a plastický materiál s mocninovým zákonom.

### Snímka 55 · Voronoiova mozaika ako „virtuálne zrná“

⏱️ `1:40–1:42`

Druhá štúdia nadviazala na stereológiu. Otázka znela: dá sa stupeň orientácie zŕn predpovedať priamo v simulácii? Rúra dvadsaťosem krát štyri sa ťahala na tŕni s priemerom osemnásť na priemer dvadsaťpäť, takže stena klesla na tri a pol milimetra. Polovičný uhol prievlaku bol dvanásť stupňov a kalibrácia štyri milimetre. Redukcia bola dvadsaťjeden celých šesť percenta a analytické pomerné predĺženie nula celá dvesto sedemdesiatšesť.

V MATLABe sme vygenerovali Voronoiovu mozaiku. Je to rozdelenie roviny na bunky okolo náhodných bodov, ktoré vyzerá ako zrná v mikroštruktúre. Mozaiku sme vložili do DEFORM 2D ako vzor FLOWNET. FLOWNET sa deformuje spolu s materiálom a prežije aj preskieťovanie, takže funguje ako virtuálne vyleptaná sieťka. Horný obrázok vpravo ukazuje mozaiku v stene rúry medzi tŕňom a prievlakom.

> 🗒️ *Klik – zobrazí sa ďalší bod.*

Na „virtuálnych zrnách“ sa potom meria stupeň orientácie, ako pri skutočnom výbruse. Dolný obrázok ukazuje hodnoty pred ťahaním a po ňom. Pretvorenie vychádza asi nula celá dvadsaťštyri až nula celá dvadsaťsedem. Je to nástroj na prepojenie makroskopického modelu s mikroštruktúrou. Jedna poznámka: článok uvádza priemer prievlaku dvadsaťštyri milimetrov, ale uvedený prierez zodpovedá priemeru dvadsaťpäť. Aj v publikovaných článkoch sa vyskytujú preklepy, preto si čísla vždy prepočítajte.

### Snímka 56 · Ako zmerať trenie: ťahanie na trhacom stroji

⏱️ `1:42–1:44`

Tretia štúdia rieši trenie, najcitlivejší vstup modelu. Ako ho zmerať? Upravili sme trhací stroj. Prievlak nahradil dolnú traverzu a čeľuste na hornej traverze držali hrot rúry. Stroj tak zaznamenával ťažnú silu v závislosti od posuvu. Obrázok vľavo ukazuje schému.

Rúra mala rozmer dvadsaťosem krát štyri, oceľ SPT tristošesťdesiat, a ťahala sa prievlačne na priemer dvadsaťpäť. Mali sme štyri prievlaky zo spekaného karbidu s polovičnými uhlami šesť, osem, desať a dvanásť stupňov, s kalibráciou dva milimetre, a mazivo na báze rastlinného oleja.

Graf ukazuje namerané sily. Sila najprv nabehne, keď hrot vchádza do prievlaku, a potom sa ustáli. Do výpočtu ide priemer ustálenej časti. Pri šiestich stupňoch to bolo tridsaťosem kilonewtonov, pri ôsmich štyridsať celých tri, pri desiatich štyridsaťdva a pri dvanástich štyridsaťtri celých deväť kilonewtona. Všimnite si, že v experimente sila s uhlom rástla. K tomu sa ešte vrátime.

### Snímka 57 · Inverzná analýza: sila je lineárna v trení

⏱️ `1:44–1:46`

Teraz inverzná analýza. Pre prievlak s uhlom osem stupňov sme spustili sériu simulácií s rôznym trením a zaznamenali ustálenú silu. Graf vľavo ukazuje, že sila závisí od trenia lineárne.

Lineárnou regresiou sme dostali vzťah: trenie sa rovná sile mínus tridsať tisíc šesťsto dvadsať newtonov, lomeno stoosemdesiattri tisíc osemsto. Keď dosadíme nameranú silu štyridsať tisíc tristo štyridsaťdeväť newtonov, dostaneme trenie približne nula celá nula päťdesiattri. V článku je uvedená hodnota nula celá nula päťsto dvadsaťšesť. Neskoršie štúdie, ktoré na tento článok nadväzujú, používali nula celá nula päťsto štyridsaťjeden.

> 🗒️ *Klik – zobrazí sa ďalší bod.*

Dôležité: táto hodnota platí len pre tento prievlak, toto mazivo a tento materiál. Nie je to univerzálna konštanta, ktorú môžete prebrať do iného modelu.

> 🗒️ *Klik – zobrazí sa ďalší bod.*

A ešte jedna poznámka ku kritickému čítaniu. Text článku uvádza, že simulácie sa robili pre trenie nula celá dva až nula celá šesť. Graf však ukazuje rozsah nula celá nula dva až nula celá nula šesť, a regresia sedí s grafom. Výsledok teda leží vnútri rozsahu a nie je to extrapolácia. Vždy porovnajte text s grafom.

### Snímka 58 · S kalibrovaným trením: vplyv uhla prievlaku

⏱️ `1:46–1:48`

S kalibrovaným trením sme potom simulovali uhly od dvoch do štrnástich stupňov. Pri dvoch stupňoch vychádza sila šesťdesiatsedem kilonewtonov, pretože kontakt je veľmi dlhý a trenie obrovské. Pri šiestich, ôsmich a desiatich stupňoch je to štyridsať celých štyri, štyridsať celých tri a tridsaťdeväť celých jedna kilonewtona, teda ploché minimum. Pri dvanástich a štrnástich stupňoch sila znova rastie, pretože pribúda redundantná práca.

> 🗒️ *Klik – zobrazí sa ďalší bod.*

Všimnite si, že je to presne tvar krivky zo Siebelovho odhadu v druhej časti. Analytika a simulácia teda hovoria to isté.

> 🗒️ *Klik – zobrazí sa ďalší bod.*

Ale pozor. Článok uvádza ako optimum osem stupňov, hoci minimum v grafe je pri desiatich. Keďže minimum je ploché, oba závery sú v podstate správne. Zaujímavejšie je, že experiment medzi šiestimi a dvanástimi stupňami ukázal rast sily s uhlom, kým simulácia tam má ploché minimum. Jedno vysvetlenie je, že trenie nie je pri všetkých prievlakoch rovnaké, lebo každý prievlak má trochu iný povrch. Je to otvorená otázka pre validáciu a dobrý príklad, prečo trenie kalibrované pri jednom uhle nemusí platiť pri inom.

### Snímka 59 · Trenie × uhol prievlaku → sila (DEFORM 3D)

⏱️ `1:48–1:50`

Štvrtá štúdia skúmala interakciu trenia a uhla v trojrozmernom modeli. Rúra dvadsaťosem krát štyri sa ťahala prievlačne na priemer dvadsaťpäť, oceľ E dvestotridsaťpäť, sto šesťdesiat tisíc prvkov, rýchlosť dvesto milimetrov za sekundu. Trenie sa menilo od nula celá nula šesť po nula celá dvanásť a polovičný uhol od šiestich po dvanásť stupňov.

Graf ukazuje, že sila rastie s trením pri všetkých uhloch. Najstrmšie rastie pri šiestich stupňoch, zo štyridsaťdeväť na šesťdesiatpäť kilonewtonov. Najnižšia sila je pri desiatich stupňoch, zo štyridsaťšesť na päťdesiattri kilonewtonov. To zodpovedá analytike: parameter B je mí krát kotangens alfa, takže pri malom uhle má trenie väčšiu váhu.

> 🗒️ *Klik – zobrazí sa ďalší bod.*

Odporúčanie štúdie je uhol desať stupňov a trenie nula celá nula šesť až nula celá nula osem. V článku je síce aj protichodná veta o dvanástich stupňoch, ale graf jasne ukazuje desať.

### Snímka 60 · Rýchlosť ťahania silu takmer nemení

⏱️ `1:50–1:52`

Tabuľka z knihy ukazuje maximálnu silu pre dve hodnoty trenia, dva uhly a šesť rýchlostí od sto po osemsto milimetrov za sekundu. Pri trení nula celá nula osem a celom uhle dvadsať stupňov stúpne sila pri osemnásobnej rýchlosti z päťdesiat celých osem na päťdesiatjeden celých jedna kilonewtona, teda len o šesť desatín percenta. Naopak, zvýšenie trenia z nula celá nula osem na nula celá dvanásť zvýši silu o sedem až jedenásť percent. Trenie je teda omnoho dôležitejšie ako rýchlosť.

> 🗒️ *Klik – zobrazí sa ďalší bod.*

Buďte však kritickí. Model nemal teplotu a citlivosť materiálu na rýchlosť bola malá. V skutočnosti sa rýchlosť prejaví cez ohrev a cez hrúbku mazacieho filmu, a tie model nemal. Model teda ani nemohol ukázať veľký vplyv rýchlosti. Simulácia odpovedá len na otázky, ktoré do nej vložíte.

### Snímka 61 · Prievlačné ťahanie: stena sa zhrubne

⏱️ `1:52–1:54`

Piata skupina výsledkov je z knihy a týka sa prievlačného ťahania na priemer dvanásť milimetrov. Rúry so stenou jeden milimeter a priemerom štrnásť, šestnásť a osemnásť sa ťahali v jednom ťahu na stroji EU štyridsať. Prievlak mal vstupný polomer tridsaťpäť milimetrov, mazivo bolo Molykote, rýchlosť šesťdesiat milimetrov za minútu a rozmery sme merali súradnicovým meracím strojom s päťsto bodmi na kružnici.

Tabuľka ukazuje, že stena sa vždy zhrubla. Pri redukcii okolo trinásť percent asi o dve percentá, pri redukcii dvadsaťštyri až tridsaťtri percent o štyri a pol až päť percent. Prečo? Pri prievlačnom ťahaní sa obvod rúry stláča a materiál nemá kam ísť, len do dĺžky a do hrúbky. Časť obvodového stlačenia sa preto prejaví zhrubnutím steny.

> 🗒️ *Klik – zobrazí sa ďalší bod.*

V inom súbore rúr so stenou jeden a dva milimetre dala simulácia v DEFORM 3D zhrubnutie štyri až desať stotín milimetra a experiment štyri až štrnásť stotín, teda rovnaký rád aj trend. Obrázok vpravo ukazuje, ako sa hrúbka steny v DEFORM vyhodnocuje histogramom v ustálenej časti rúry.

> 🗒️ *Klik – zobrazí sa ďalší bod.*

Presnosť porovnania obmedzuje rozptyl vstupnej hrúbky steny. Ak má vstupná rúra stenu s rozptylom niekoľkých stotín milimetra, nemôžete čakať, že simulácia s ideálnou rúrou trafí výsledok presnejšie.

### Snímka 62 · Experiment verzus MKP: Ø16 → Ø12 mm

⏱️ `1:54–1:56`

Tu je priame porovnanie experimentu a simulácie pri ťahu zo šestnástich na dvanásť milimetrov so stenou dva milimetre. Experiment bol na hydraulickom stroji EU štyridsať s rýchlosťou jeden milimeter za sekundu. Simulácia mala dvesto dvadsať tisíc prvkov a faktor trenia nula celá nula osem.

Nameraná sila bola dvadsaťjeden a pol až dvadsaťdva kilonewtonov, simulácia dala asi dvadsať a pol. Pretvorenie v experimente bolo nula celá dvadsaťdeväť až nula celá tridsaťdva, v simulácii nula celá tri až nula celá štyri. Napätie ťahania bolo v experimente tristodvadsaťosem až tristotridsať megapascalov, v simulácii dvestoosemdesiat až tristopäťdesiat. Graf vpravo ukazuje priebeh sily zo simulácie: nábeh a potom ustálený stav okolo dvadsiatich kilonewtonov.

> 🗒️ *Klik – zobrazí sa ďalší bod.*

Simulácia vychádza asi o päť percent nižšie. Vysvetlenie je jednoduché: rúry sa mazali ručne minerálnym olejom, takže trenie nebolo konštantné. Pamätáte si analytický odhad z druhej časti? Ten bol o tridsaťpäť percent nižší. Simulácia je teda podstatne bližšie k realite.

### Snímka 63 · Uhol a trenie verzus rozmery rúry

⏱️ `1:56–1:58`

Ďalšia štúdia z knihy skúmala, ako uhol a trenie ovplyvňujú rozmery rúry, nie silu. Rúra dvadsaťosem krát štyri sa ťahala na priemer dvadsaťpäť. Bolo šestnásť simulácií, teda štyri hodnoty trenia krát štyri celé uhly prievlaku od dvanástich do dvadsiatich štyroch stupňov. Výsledné siete sa exportovali ako STL a vyhodnotili v programe GOM Inspect, rovnako ako sa vyhodnocuje sken skutočného dielu.

Trenie nemalo na rozmery, kruhovitosť ani súosovosť významný vplyv. Uhol však áno. Väčší uhol dáva menší vonkajší aj vnútorný priemer. Pri prievlaku s priemerom dvadsaťpäť milimetrov klesol vonkajší priemer z dvadsaťštyri celých šesťdesiatpäť pri dvanástich stupňoch na dvadsaťštyri celých dvadsaťšesť pri dvadsiatich štyroch stupňoch. Vplyv na kruhovitosť a súosovosť sa nepreukázal, rozdiely boli do troch stotín milimetra.

> 🗒️ *Klik – zobrazí sa ďalší bod.*

Vzniká kompromis. Väčší uhol môže šetriť silu, ale zväčšuje odchýlku výsledného priemeru od priemeru prievlaku. Optimalizácia teda nikdy nie je len o jednej veličine.

### Snímka 64 · Plánovaný experiment v simulácii

⏱️ `1:58–2:00`

Šiesta štúdia ukazuje, ako sa dá simulácia spojiť so štatistikou. Pri prievlačnom ťahaní sme použili plný faktorový plán dva na tretiu, teda tri faktory na dvoch úrovniach, s piatimi opakovaniami. To je štyridsať simulácií. Faktormi boli priemer vstupnej rúry šestnásť alebo osemnásť, hrúbka steny jeden alebo dva a priemer prievlaku dvanásť alebo štrnásť milimetrov. Odozvami boli výsledný vonkajší priemer a hrúbka steny. Výsledky sme spracovali regresiou a analýzou rozptylu v programe Minitab.

> 🗒️ *Klik – zobrazí sa ďalší bod.*

Výsledný vonkajší priemer určuje najmä priemer prievlaku, potom priemer vstupnej rúry a ich interakcia. Hrúbka steny ho významne neovplyvňuje. Graf hlavných efektov vpravo to ukazuje: čiara pre prievlak je strmá, ostatné sú takmer vodorovné.

> 🗒️ *Klik – zobrazí sa ďalší bod.*

Pri hrúbke steny sú významné všetky faktory, najviac vstupná hrúbka steny a priemer vstupnej rúry.

> 🗒️ *Ak je čas: šípka dole otvorí tri podsnímky o pláne a ANOVA. Inak pokračujte doprava.*

### Snímka 64.1 · Ako navrhnúť experiment v MKP

⏱️ `DO+0:00–0:01`

Ako navrhnúť plánovaný experiment v simulácii? V článku sme použili osem krokov podľa Montgomeryho. Najprv definujete problém, teda či ide o skríning, optimalizáciu alebo validáciu. Potom určíte odozvu a spôsob jej merania, v simulácii to je postprocesor. Tretím krokom sú faktory a úrovne. Štvrtým je typ plánu, počet opakovaní a poradie. Pri dvoch úrovniach si dajte pozor, že plán nezachytí zakrivenie. Piatym krokom je samotný výpočet, DEFORM má na to modul DOE. Šiestym je merací systém, teda čo vie postprocesor vyhodnotiť. Siedmym je štatistický softvér a ôsmym interpretácia v kontexte úlohy.

Tabuľka vpravo ukazuje maticu plánu. V prvých štyroch behoch je prievlak s priemerom dvanásť a striedajú sa priemer a stena rúry. V behoch päť až osem je to isté s prievlakom štrnásť.

Model bol dvojrozmerný lagrangeovský, s polovičným uhlom osem stupňov, kalibráciou štyri milimetre, trením nula celá nula osem, štyrmi prvkami cez stenu a rýchlosťou šesťdesiat milimetrov za minútu.

### Snímka 64.2 · Výsledky ANOVA

⏱️ `DO+0:01–0:02`

Tabuľky ukazujú výsledky analýzy rozptylu. Hodnota F hovorí, aký veľký je efekt v porovnaní so šumom. Hodnota p hovorí, aká je pravdepodobnosť, že taký efekt vznikol náhodou. Ak je p menšie ako nula celá nula päť, považujeme efekt za významný.

Pre výsledný vonkajší priemer má najvyššie F priemer prievlaku, štyridsaťšesť celých osem. Nasleduje priemer rúry s tridsaťjeden a interakcia priemeru rúry a prievlaku s dvadsaťsedem. Hrúbka steny má p nula celá nula deväť, teda nie je významná.

Pre výslednú hrúbku steny sú významné všetky faktory aj interakcie. Najvyššie F má vstupná hrúbka steny, tristodvadsaťpäť, a priemer rúry, tristopätnásť.

Rezíduá, teda rozdiely medzi modelom a dátami, mali normálne rozdelenie a žiadne odľahlé hodnoty. V poradí behov bol mierny trend, preto článok odporúča viac opakovaní. Ešte jedno pozorovanie: výsledný priemer vychádza menší ako prievlak, asi jedenásť a pol milimetra pre prievlak dvanásť, a stena sa zhrubne, presne ako v experimente.

### Snímka 64.3 · Zhrnutie a otázky

⏱️ `DO+0:02–0:03`

Zhrňme. Plánovaný experiment v kombinácii so simuláciou je lacný spôsob, ako vybrať dôležité parametre. Reálny experiment je však stále potrebný na validáciu. A jedna jemná poznámka: simulácia je deterministická. Rovnaký vstup dá rovnaký výsledok. Rozptyl medzi opakovaniami preto nepochádza z náhody ako v skutočnom experimente, ale z numeriky, napríklad zo siete alebo z veľkosti kroku.

> 🗒️ *Klik – zobrazí sa otázka 1; po odpovediach stlačte „odpoveď“.*

**Otázka jedna:** Koľko simulácií má plán dva na tretiu s piatimi opakovaniami?

> ✅ **Očakávané:** 2³ = 8 kombinácií × 5 opakovaní = 40 simulácií.

> 🗒️ *Klik – zobrazí sa otázka 2.*

**Otázka dva:** Ktorý faktor najviac ovplyvňuje výsledný vonkajší priemer?

> ✅ **Očakávané:** Priemer prievlaku C (F = 46,8), potom priemer vstupnej rúry A a interakcia A×C.

> 🗒️ *Klik – zobrazí sa otázka 3.*

**Otázka tri:** Čo znamená významná interakcia priemeru rúry a priemeru prievlaku?

> ✅ **Očakávané:** Vplyv priemeru rúry na výsledok závisí od priemeru prievlaku – efekty nemožno sčítať nezávisle.

> 🗒️ *Klik – zobrazí sa otázka 4.*

**Otázka štyri:** Prečo plánovaný experiment v simulácii nenahradí reálny experiment?

> ✅ **Očakávané:** Model obsahuje predpoklady (trenie, materiál, tuhé nástroje); štatistika hodnotí model, nie realitu – treba validáciu.

Stlačte šípku hore pre návrat do hlavnej prednášky alebo šípku doprava pre pokračovanie.

### Snímka 65 · Rúry s vnútorným rebrovaním: uhol drážky tŕňa

⏱️ `2:00–2:02`

Siedma štúdia sa týka rúr s vnútorným rebrovaním. Takéto rúry sa používajú vo vysokotlakových výmenníkoch tepla, výparníkoch a kondenzátoroch, pretože rebrá zväčšujú vnútorný povrch. Vyrábajú sa tak, že posledný ťah prebehne na rebrovanom tŕni. Hlavným znakom kvality je, ako dobre materiál vyplní drážky tŕňa a vytvorí rebrá.

Model bol v DEFORM 3D, s tetraedrickou sieťou, preskieťovaním každých päťdesiat krokov, trením nula celá nula päťsto štyridsaťjeden a redukciou dvanásť a pol percenta. Menili sme uhol bočnej steny drážky na tŕni, delta, od mínus pätnástich po plus pätnásť stupňov. Kvalitu sme hodnotili veľkosťou medzery medzi rúrou a tŕňom. Čím je medzera menšia, tým lepšie je rebro vyplnené.

Tabuľka ukazuje, že pri kladných uhloch je medzera dvadsaťjeden až dvadsaťdva stotín milimetra, pri záporných osemnásť až pätnásť stotín.

> 🗒️ *Klik – zobrazí sa ďalší bod.*

Záporný uhol drážky teda plní rebrá lepšie a najlepší bol uhol mínus pätnásť stupňov. Dôležité je, že sme na to nemuseli vyrobiť šesť rôznych tŕňov. Toto je typický príklad optimalizácie geometrie nástroja simuláciou.

### Snímka 66 · Stačí 2D model na silu pri rebrovanom tŕni?

⏱️ `2:02–2:04`

Ôsma štúdia sa pýtala, či na odhad sily pri rebrovanom tŕni nestačí lacný dvojrozmerný model. Rebrovaný tŕň nie je osovo symetrický, takže presne ho dvojrozmerne modelovať nemožno. Urobili sme preto dva dvojrozmerné modely s hladkým tŕňom. Jeden mal priemer sedemnásť milimetrov, teda priemer dna drážok, a druhý osemnásť, teda priemer vrcholov.

Tabuľka ukazuje výsledok. Model s tŕňom sedemnásť dal redukciu dvanásť a pol percenta a silu na prievlak tridsaťdeväť a pol kilonewtona. Trojrozmerný model s rebrovaným tŕňom dal redukciu sedemnásť percent a silu štyridsaťštyri celých deväť kilonewtona. Model s tŕňom osemnásť dal redukciu dvadsaťjeden celých šesť percenta a silu štyridsaťsedem kilonewtonov.

Dva dvojrozmerné modely teda ohraničujú trojrozmerný výsledok zdola a zhora. Graf vpravo to ukazuje aj na priebehu sily.

> 🗒️ *Klik – zobrazí sa ďalší bod.*

Na hrubý odhad sily teda stačia dva lacné dvojrozmerné výpočty. Na vyplnenie rebier a na napätia v nich však potrebujeme trojrozmerný model. Tento trik s ohraničením sa dá použiť aj pri iných úlohách.

### Snímka 67 · Napätia v stene rúry s vnútornými rebrami

⏱️ `2:04–2:06`

Deviata štúdia sa pozrela dovnútra steny rúry s vnútornými rebrami. Sila na prievlak sa ustálila okolo štyridsaťpäť kilonewtonov. Sila na tŕň bola v ustálenom stave asi jeden a pol kilonewtona, ale na začiatku bola vyššia, pretože materiál najprv plní profil tŕňa. Túto špičku treba zohľadniť pri dimenzovaní tŕňovej tyče.

Obrázok vpravo ukazuje efektívne napätie v priečnom reze a priebeh napätí cez stenu. Pozdĺžne napätie je pri vnútornom povrchu tlakové a pri vonkajšom ťahové. Maximálne normálové napätie je sústredené pri vonkajšom povrchu.

> 🗒️ *Klik – zobrazí sa ďalší bod.*

Z toho vyplýva pravidlo pre návrh nástroja a procesu. Chceme čo najväčší tlak pri vnútornom povrchu, aby sa rebrá spoľahlivo vyplnili. Zároveň musí ťahové napätie pri vonkajšom povrchu ostať pod pevnosťou materiálu, inak vzniknú praskliny. Pozdĺžne napätie je hlavným obmedzením ťahania, presne ako sme hovorili v prvej časti.

> 🗒️ *Klik – zobrazí sa ďalší bod.*

Výpočet trval asi štyridsať minút. Pohybovali sa nástroje a koniec rúry bol upnutý pre lepšiu konvergenciu. Toto je typ výsledku, ktorý vám analytika nikdy nedá.

### Snímka 68 · Čo nás štúdie naučili

⏱️ `2:06–2:08`

Zhrňme, čo nás štúdie naučili, do ôsmich bodov. Trenie treba merať, nie preberať z literatúry. Sila rastie s trením lineárne a s rýchlosťou takmer vôbec. Uhol prievlaku má ploché optimum, ktoré závisí od trenia. Pretvorenie určuje geometria, nie oceľ.

Pri prievlačnom ťahaní sa stena zhrubne o dve až päť percent a výsledný priemer je menší ako priemer prievlaku. Dvojrozmerný model stačí na silu a pretvorenie, trojrozmerný potrebujeme pri profiloch a na napätia. Geometriu tŕňa možno optimalizovať virtuálne. A každý model potrebuje nezávislé overenie.

Ten posledný bod nás privádza k piatej časti.

---

## ČASŤ V — OPTIMALIZÁCIA A VALIDÁCIA 2:08 – 2:20

### Snímka 69 · Časť V — Optimalizácia a validácia

⏱️ `2:08`

Piata časť: optimalizácia a validácia.

### Snímka 70 · Rebrík overenia modelu ťahania

⏱️ `2:08–2:10`

Validáciu si môžeme predstaviť ako rebrík. Na najnižšej priečke je analytický odhad. Dá rád sily a trendy s uhlom, trením a redukciou a je takmer zadarmo. Druhá priečka je nameraná sila, napríklad z trhacieho stroja alebo zo snímača na ťahacej stolici. Tretia priečka sú rozmery, teda vonkajší a vnútorný priemer a hrúbka steny, merané súradnicovým meracím strojom alebo skenom v GOM Inspect. Štvrtá priečka je lokálne pretvorenie zo stereológie, teda z orientácie zŕn. A najvyššia priečka sú vlastnosti a napätia: tvrdosť, pevnosť a zvyškové napätia.

Každá vyššia priečka je drahšia a prácnejšia, ale povie o modeli viac. Všetky tieto úrovne sme v našich štúdiách použili.

Druhú priečku, teda nameranú silu, sme však použili na kalibráciu trenia.

> 🗒️ *Klik – zobrazí sa ďalší bod.*

A preto sú pre nás priečky tri až päť skutočnou, nezávislou validáciou. Prečo je to také dôležité, uvidíte na ďalšej snímke.

### Snímka 71 · Kalibrácia nie je validácia

⏱️ `2:10–2:12`

Toto je podľa mňa najdôležitejšia metodická snímka dnešnej prednášky. Kalibrácia znamená, že nastavíme neznámy parameter, napríklad trenie, tak, aby model sedel s meraním. Validácia znamená, že model porovnáme s inou veličinou alebo s iným prípadom, ktorý sme na kalibráciu nepoužili. Až potom môžeme model použiť na predikciu pre nové parametre.

Konkrétne: ak sme trenie kalibrovali zo sily pri uhle osem stupňov, model musíme overiť na sile pri iných uhloch, na rozmeroch alebo na pretvorení.

> 🗒️ *Klik – zobrazí sa ďalší bod.*

Predstavte si, že by sme trenie kalibrovali pri každom uhle zvlášť. Model by potom sedel vždy, a nič by to nedokazovalo. Zhoda by bola vynútená. Mimochodom, presne to sme videli v tretej štúdii: experiment ukázal rast sily s uhlom, ktorý model s jedným trením nevystihol. To je cenná informácia, nie chyba, ktorú treba schovať.

> 🗒️ *Klik – zobrazí sa ďalší bod.*

Praktická rada: rozdeľte si dáta. Časť použite na kalibráciu a časť si odložte na validáciu, rovnako ako sa to robí pri strojovom učení.

### Snímka 72 · Model verzus realita – súhrn našich porovnaní

⏱️ `2:12–2:14`

Tabuľka zhŕňa všetky porovnania z našich štúdií. Pozdĺžne pretvorenie po prvom ťahu: stereológia nula celá päťsto dvadsať, simulácia nula celá päťsto tridsaťsedem, teda plus tri percentá. Po druhom ťahu plus štyri percentá. Sila pri ťahu zo šestnástich na dvanásť: simulácia o päť až sedem percent nižšie ako meranie. Napätie ťahania je v rozsahu experimentu. Zhrubnutie steny má rovnaký rád aj trend. Trojrozmerná sila pri rebrovanom tŕni leží vnútri dvojrozmerných hraníc. A pre porovnanie, analytický odhad pri tom istom ťahu, kde je sila mínus tridsaťpäť percent.

Všeobecný záver je v rámčeku dole. Integrálne veličiny, ako je sila alebo priemerné pretvorenie, sedia na plus-mínus päť percent. Lokálne veličiny, ako je hrúbka steny, sedia skôr na trend. Sú citlivé na rozptyl vstupnej rúry a na sieť. Keď teda niekomu prezentujete výsledky simulácie, povedzte aj to, s akou presnosťou ste ich overili.

### Snímka 73 · Aký uhol prievlaku je optimálny? Záleží na podmienkach

⏱️ `2:14–2:16`

Teraz optimalizácia na príklade, ktorý nás sprevádzal celú prednášku: aký uhol prievlaku je optimálny? Tabuľka zbiera odpovede. Analytický odhad podľa Siebela dáva desať a pol stupňa. Štúdia z roku dvetisícosemnásť uvádza osem stupňov, hoci graf má minimum pri desiatich. Štúdia z roku dvetisícdevätnásť dáva desať stupňov. Kniha odporúča celý uhol dvadsaťštyri stupňov, teda polovičný dvanásť. A klasik Počta z roku tisícdeväťstošesťdesiattri uvádza celý uhol dvadsaťštyri až dvadsaťosem stupňov.

Je to rozpor? Nie. Všetky hodnoty ležia v pásme polovičného uhla približne osem až štrnásť stupňov. A to je presne ploché minimum, ktoré sme videli v grafe v druhej časti. Rôzne trenie, rôzna redukcia a rôzna kalibrácia posunú minimum o pár stupňov, ale sila sa v tomto pásme mení len málo.

> 🗒️ *Klik – zobrazí sa ďalší bod.*

O konečnej voľbe teda rozhoduje aj niečo iné ako sila: životnosť nástroja, presnosť rozmerov, pretože väčší uhol dáva menší priemer, a stabilita mazania.

### Snímka 74 · Postup optimalizácie procesu simuláciou

⏱️ `2:16–2:18`

Ako postupovať pri optimalizácii? Najprv si definujte cieľ a obmedzenia. Napríklad minimálnu silu, výsledný priemer v tolerancii a podmienku, že napätie ťahania ostane pod medzou klzu. Potom potrebujete kalibrovaný a validovaný základný model. Bez neho je celá optimalizácia len hra s číslami. Tretím krokom je plánovaný experiment na skríning faktorov a analýza rozptylu, ako v šiestej štúdii. Štvrtým krokom je jemnejší plán okolo nájdeného optima, takzvaná plocha odozvy. A posledným krokom je overovacia simulácia a skúšobný ťah v prevádzke.

Tabuľka vpravo zhŕňa páky, ktoré máte k dispozícii. Nižšiu silu dosiahnete uhlom v pásme osem až dvanásť stupňov a lepším mazaním. Presný priemer dosiahnete priemerom prievlaku, s korekciou na to, že rúra vychádza menšia, a menším uhlom. Hrúbku steny určuje vstupná stena, tŕň a redukcia. Vyplnenie rebier zlepší záporný uhol drážky tŕňa a vysoký tlak pri vnútornom povrchu. A pretrhnutiu zabránite redukciou, pri ktorej napätie ťahania ostane pod medzou klzu.

### Snímka 75 · Neistoty a obmedzenia – buďte kritickí

⏱️ `2:18–2:20`

Na záver piatej časti chcem byť kritický aj k vlastným štúdiám, pretože to od vás budem chcieť aj ja. Trenie je v nadväzujúcich článkoch raz nula celá nula päťsto dvadsaťšesť a raz nula celá nula päťsto štyridsaťjeden, hoci ide o ten istý pokus. Teplota bola zanedbaná, hoci rúra má na výstupe sto tridsať až sto osemdesiat stupňov. Nástroje boli tuhé, takže sme nevideli odpruženie prievlaku ani jeho opotrebenie. A vstupná rúra bola v modeli ideálna, bez excentricity a bez mnohouholníka.

V článkoch sa vyskytli aj preklepy: priemer prievlaku dvadsaťštyri namiesto dvadsaťpäť milimetrov, protichodné vety o desiatich a dvanástich stupňoch a oceľ E dvestotridsaťpäť označená ako nehrdzavejúca. Mazanie v experimente bolo ručné, takže trenie nebolo konštantné. A v plánovanom experimente boli len štyri prvky cez stenu, bez štúdie citlivosti siete.

> 🗒️ *Klik – zobrazí sa ďalší bod.*

Nič z toho neznamená, že výsledky sú zlé. Znamená to, že simulácia je presne taká dobrá, aké dobré sú jej vstupy a jej overenie. Čítajte preto pozorne aj publikované články, vrátane mojich.

---

## ZHRNUTIE A OTÁZKY 2:20 – 2:32

### Snímka 76 · Zhrnutie

⏱️ `2:20–2:22`

Zhrňme celú prednášku do piatich viet. V základoch sme videli štyri spôsoby ťahania rúr a hlavné obmedzenie: ťahové napätie musí ostať pod medzou klzu spevnenej rúry. V analytike sme videli, že ideálna práca je menšia ako výsledok metódy rezov a ten je menší ako výsledok vzorca typu Siebel, a že optimum uhla je ploché. Pri numerickej simulácii sme si povedali, že model je kombináciou štyroch nezávislých volieb a že o výsledku najviac rozhoduje trenie a krivka spevnenia. Štúdie ukázali, ako zmerať trenie, že rýchlosť silu takmer nemení, že pri prievlačnom ťahaní stena hrubne, že dvojrozmerné modely ohraničia trojrozmerný a že záporný uhol drážky plní rebrá lepšie. A pri validácii platí: kalibrujte na jednej veličine a overujte na iných.

Nabudúce sa pozrieme na preprocesing priamo v DEFORM, teda ako sa v praxi nastavuje sieť, okrajové podmienky a trenie.

### Snímka 77 · Kontrolné otázky

⏱️ `2:22–2:32`

Overme si, čo vám zostalo v hlave. Otázky budem ukazovať jednu po druhej, skúste odpovedať skôr, než pokračujem.

> 🗒️ *Klik – zobrazí sa otázka 1. Každú otázku odkryte šípkou a počkajte na odpovede; tlačidlo „odpoveď“ ukáže text odpovede.*

**Otázka jedna:** Rúra s priemerom sedemdesiat milimetrov a stenou šesť celých tri sa ťahá na priemer päťdesiatpäť a stenu štyri celé sedemdesiatpäť. Vypočítajte redukciu a pretvorenie.

> ✅ **Očakávané:** S₀ = π·63,7·6,3 = 1260,9 mm², S = π·50,25·4,75 = 749,9 mm²; R = 40,5 %, φ = ln(1260,9/749,9) = 0,52.

> 🗒️ *Klik – zobrazí sa otázka 2.*

**Otázka dva:** Prečo existuje optimálny uhol prievlaku?

> ✅ **Očakávané:** Práca trenia s uhlom klesá, redundantná práca rastie; ich súčet s ideálnou prácou má ploché minimum (≈ 8–14°).

> 🗒️ *Klik – zobrazí sa otázka 3.*

**Otázka tri:** Aká je podmienka medznej redukcie a aká je jej ideálna hodnota bez spevnenia?

> ✅ **Očakávané:** Napätie ťahania musí byť menšie ako pretvárny odpor materiálu za prievlakom; ideálne r_max = 1 − 1/e ≈ 63 %.

> 🗒️ *Klik – zobrazí sa otázka 4.*

**Otázka štyri:** Ako sa mení hrúbka steny pri prievlačnom ťahaní a pri ťahaní na pevnom tŕni?

> ✅ **Očakávané:** Prievlačne sa stena mierne zhrubne (≈ 2–5 %); na pevnom tŕni sa stenčí, lebo tŕň určuje vnútorný priemer.

> 🗒️ *Klik – zobrazí sa otázka 5.*

**Otázka päť:** Prečo explicitná simulácia pomalého ťahania potrebuje zrýchlenie alebo škálovanie hmotnosti a ako overíte, že je výsledok kvázistatický?

> ✅ **Očakávané:** Stabilný krok ≈ 5·10⁻⁸ s by dal milióny krokov; kontrolou je pomer kinetickej a vnútornej energie pod 5–10 %.

> 🗒️ *Klik – zobrazí sa otázka 6.*

**Otázka šesť:** Ako sa určí súčiniteľ trenia inverznou analýzou?

> ✅ **Očakávané:** Zmeria sa ustálená sila, simuluje sa niekoľko hodnôt trenia, z lineárnej závislosti F(μ) sa nájde μ pre nameranú silu (≈ 0,053).

> 🗒️ *Klik – zobrazí sa otázka 7.*

**Otázka sedem:** Prečo nemožno model validovať tou istou silou, z ktorej sa kalibrovalo trenie?

> ✅ **Očakávané:** Zhoda je vynútená kalibráciou; validácia potrebuje nezávislú veličinu – rozmery, pretvorenie, silu pri iných podmienkach.

> 🗒️ *Klik – zobrazí sa otázka 8.*

**Otázka osem:** Kedy stačí dvojrozmerný osovo symetrický model a kedy treba trojrozmerný?

> ✅ **Očakávané:** 2D pri súosovej, symetrickej úlohe (sila, pretvorenie, stena); 3D pri excentricite, ovalite, profilových tŕňoch a pre napätia v rebrách.

Ďakujem. Zostáva nám niekoľko minút. Máte nejaké vlastné otázky?

### Snímka 78 · Zdroje a ďalšie čítanie

⏱️ `(počas otázok)`

> 🗒️ *Túto snímku nechajte na plátne počas otázok.*

Ak si chcete tému prečítať podrobnejšie, začnite monografiou Bílik, Necpal a Sobota, Výroba bezšvových rúr, z roku dvetisícdvadsaťtri. Sú v nej všetky spôsoby ťahania, odvodenie sily na pevnom tŕni a experimenty s prievlačným ťahaním. K simulácii všeobecne odporúčam našu učebnicu Necpal a Sobota, Modelovanie a simulácia procesov tvárnenia. Potom nasledujú jednotlivé články, z ktorých boli prípadové štúdie. Štyri z nich, v zborníkoch IOP a MATEC, sú voľne dostupné. A ak vás zaujíma teória tuhoplastickej metódy konečných prvkov, klasikou je kniha Kobayashiho, Oha a Altana.

---

*Koniec textu*
