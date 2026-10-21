# Materiálové údaje v programe DEFORM

*Prednáška 3 · Modelovanie a simulácia procesov I – tvárnenie (MSPO2_6I) · Ing. Martin Necpal, PhD.*

Hovorený text — 120 minút, 43 snímok, bez prestávky. Časové údaje sú hodiny:minúty od začiatku prednášky. Rovnaký text je v poznámkach prednášajúceho v HTML prezentácii (stlačte **S**).

| Blok | Čas | Snímky |
|---|---|---|
| Blok 1 · Prečo na materiálových údajoch záleží | 0:00–0:10 | 1–3 |
| Blok 2 · Okno Material v programe DEFORM | 0:10–0:20 | 4–7 |
| Blok 3 · Elastické údaje | 0:20–0:30 | 8–11 |
| Blok 4 · Pretvárny odpor | 0:30–1:00 | 12–22 |
| Blok 5 · Podmienky plasticity a spevnenie | 1:00–1:20 | 23–29 |
| Blok 6 · Tečenie (creep) | 1:20–1:30 | 30–32 |
| Blok 7 · Tepelné údaje | 1:30–1:45 | 33–37 |
| Blok 8 · Nad rámec mechaniky | 1:45–1:55 | 38–41 |
| Blok 9 · Zhrnutie | 1:55–2:00 | 42–43 |

---

## Blok 1 · Prečo na materiálových údajoch záleží

### Snímka 1 — Titulná snímka  `[0:00–0:02]`

Dobrý deň. Minulý týždeň sme porovnali programy na simuláciu tvárnenia a pol hodiny sme venovali programu DEFORM. Dnes v preprocesore DEFORMu otvoríme jedno okno – okno Material – a zostaneme v ňom dve hodiny.

Znie to úzko, ale takmer každé číslo, ktoré simulácia vráti – sila lisu, teplota, zaplnenie zápustky, veľkosť zrna, trhliny – sa počíta z toho, čo do tohto okna zadáte. Na konci dnešnej prednášky by ste mali vedieť pozrieť sa na materiál v DEFORMe a povedať, aké údaje potrebuje pre váš proces, odkiaľ tieto údaje pochádzajú a kedy im nemôžete veriť.


### Snímka 2 — Program  `[0:02–0:04]`

Tu je plán. Poradie sleduje záložky okna Material a desiatu kapitolu manuálu DEFORMu. Najväčší blok, pol hodiny, je pretvárny odpor, pretože pri objemovom tvárnení rozhoduje o väčšine výsledku. Potom podmienky plasticity a spevnenie – dôležité pre plechy a odpruženie – tečenie, tepelné údaje a údaje „nad rámec mechaniky“ pre mikroštruktúru a tepelné spracovanie.

Prestávku nemáme, preto vám každých pár snímok položím krátku otázku – prosím, odpovedajte, udrží nás to oboch pri bdelosti.


### Snímka 3 — Garbage in, garbage out  `[0:04–0:10]`

Začnem malým numerickým experimentom. Pechujeme valec s priemerom 20 milimetrov a výškou 30 na výšku 15. Rovnaká geometria, rovnaký súčiniteľ trenia. Jediný rozdiel je krivka spevnenia. Krivka A je typická knižničná krivka pre oceľ C45 za studena; krivka B je to, čo by ste namerali na vlastnej žíhanej tyči tej istej nominálnej značky.

Sily na konci zdvihu sú približne 540 a 427 kilonewtonov – rozdiel zhruba 27 percent.

> 🗒️ *Klik – zobrazí sa bod o sieti a materiáli.*

Ak zjemníte sieť, zmeníte silu o niekoľko percent. Ak zvolíte nesprávnu krivku spevnenia, zmeníte ju o desiatky percent – a možno objednáte nesprávny lis.

To je význam hesla „garbage in, garbage out“. Riešič veľmi dobre rieši rovnice; netuší však, či materiál, ktorý ste mu dali, je materiál, ktorý je v dielni. To je vaša úloha a je to úloha dnešnej prednášky.

Pozrite sa na rámček dole: sila a energia, teplota, zaplnenie zápustky, porušenie, odpruženie, mikroštruktúra – každý z týchto výsledkov závisí od inej časti materiálových údajov. Stretneme sa so všetkými.

> **Otázka pre študentov:** Čo by ste zmenili ako prvé, ak je simulovaná sila o 30 % nižšia, ako namerali na lise – sieť, trenie alebo materiál?


## Blok 2 · Okno Material v programe DEFORM

### Snímka 4 — Rozloženie okna Material  `[0:10–0:13]`

Toto je to okno. Vľavo je zoznam materiálov: každý materiál použitý v projekte a každý objekt – polotovar, zápustka – sa na jeden z nich odkazuje číslom. Vpravo hore je prepínač medzi Regular a Mixture; pod ním tlačidlá Phase, ktoré sa aktivujú pre zmesi.

Cez stred vidíte záložky. Plastic obsahuje pretvárny odpor, podmienku plasticity a spevnenie. Elastic – Youngov modul, Poissonovo číslo a teplotnú rozťažnosť. Thermal – tepelnú vodivosť, tepelnú kapacitu, emisivitu a hustotu. Potom Diffusion, Dislocation, Hardness, Electro-magnetic, Advanced a Texture, ktorých sa dotkneme v bloku 8.

Dva praktické detaily. Každá hodnota môže byť konštanta alebo funkcia teploty; ikona ceruzky otvorí tabuľku. A vpravo dole je tlačidlo Unit conversion – zapamätajte si ho, budeme ho potrebovať o tri minúty.


### Snímka 5 — Knižnica materiálov  `[0:13–0:15]`

Väčšina z vás začne knižnicou. Load from library ponúkne zoznam podľa triedy materiálu a potom podľa značky. Dôležité je, že materiál sa skopíruje do vášho projektu. Ak ho upravíte, upravujete svoju kópiu, nie knižnicu.

Keď máte namerané vlastné údaje, použite Save in library, aby ďalší projekt začínal od vašich údajov, a nie od všeobecných. Export a Import prenášajú materiál ako súbor – medzi kolegami, medzi univerzitou a firmou alebo medzi verziami DEFORMu.

A varovanie v rámčeku: knižničné značky sú namerané v určitom rozsahu teplôt a rýchlostí deformácie a tento rozsah je zvyčajne uvedený v názve. Ak vezmete krivku pre tvárnenie za studena do simulácie kovania za tepla pri 1100 stupňoch, DEFORM sa nebude sťažovať – bude extrapolovať a výsledok bude nesprávny. K extrapolácii sa vrátime v bloku 4.


### Snímka 6 — Regular alebo Mixture  `[0:15–0:17]`

Prepínač Regular a Mixture rozhoduje, koľko súborov údajov potrebujete. Pre tvárnenie a obrábanie stačí jedna fáza: materiál je typu Regular s jednou krivkou spevnenia, jednou tepelnou vodivosťou a tak ďalej.

Pri tepelnom spracovaní sa materiál počas simulácie mení – austenit sa mení na ferit, perlit, bainit alebo martenzit. Vtedy definujete Mixture: každá fáza má vlastné vlastnosti a DEFORM ich spriemeruje podľa objemových podielov, ako v jednoduchom zmiešavacom pravidle. Navyše tlačidlo Transformation obsahuje údaje medzi fázami: kinetiku, uvoľnené latentné teplo, zmenu objemu a transformačnú plasticitu.

Obrázok ukazuje, prečo na tom záleží: cementované a zakalené ozubené koleso s podielom martenzitu. Bez zmesi nedostanete tento obrázok, ani deformácie a zvyškové napätia, ktoré z neho vyplývajú.


### Snímka 7 — Pasca jednotiek  `[0:17–0:20]`

A teraz pasca. Snímka obrazovky spred dvoch snímok ukazuje meď C10100 s Youngovým modulom 16 679. Šestnásťtisíc megapascalov pre meď? To by bolo sedemkrát mäkšie. Číslo je v ksi – materiál bol uložený v anglických jednotkách. 16 679 ksi je 115 gigapascalov, čo pre meď sedí. To isté platí pre teplotnú rozťažnosť na stupeň Fahrenheita a referenčnú teplotu 68 stupňov Fahrenheita, čo je 20 stupňov Celzia.

DEFORM nastavuje sústavu jednotiek pre celú úlohu. Ak prenesiete materiál v anglických jednotkách do úlohy v SI, prepočítajte ho tlačidlom Unit conversion – čísla neprepisujte ručne. Všimnite si jednotky SI, ktoré DEFORM používa: napätie v megapascaloch, hustotu v tonách na kubický milimeter – pre oceľ 7,7 krát desať na mínus deviatu – a objemovú tepelnú kapacitu v newtonoch na štvorcový milimeter a stupeň.

Pravá tabuľka odpovedá na otázku „ktoré záložky naozaj potrebujem?“. Izotermické kovanie potrebuje iba záložku Plastic. Hneď ako sa mení teplota, sú potrebné tepelné údaje. Elastické údaje iba vtedy, keď záleží na elastických deformáciách – odpruženie, zvyškové napätia, napätia v zápustke. Tepelné spracovanie potrebuje všetko.

> **Otázka pre študentov:** Meď s E = 16 679 MPa – čo je zle a ako to overíte za desať sekúnd?


## Blok 3 · Elastické údaje

### Snímka 8 — Kedy sú potrebné elastické údaje  `[0:20–0:22]`

Elastické údaje sa často nechávajú na predvolených knižničných hodnotách, preto si ujasnime, kedy na nich záleží. Pri tuhoplastickom polotovare – štandardnom type objektu pri kovaní – DEFORM elastickú deformáciu zanedbáva. Youngov modul sa jednoducho nepoužije. Plastické deformácie sú stovky percent, elastické zlomok percenta.

Elastické údaje sú nevyhnutné v troch prípadoch. Po prvé, elastické zápustky: tu je obrázok napätí v zápustke, vložky zápustiek a bandážovacie krúžky. Po druhé, elasticko-plastické výrobky, pri ktorých nás zaujíma, čo sa stane pri odľahčení – odpruženie pri tvárnení plechov, zvyškové napätia. Po tretie, tepelné spracovanie, kde je celková deformácia súčtom elastickej, plastickej, tepelnej a transformačnej zložky a deformácie súčiastky vznikajú z ich súhry.


### Snímka 9 — E a ν  `[0:22–0:25]`

Hookov zákon, Poissonovo číslo a modul pružnosti v šmyku – tie poznáte z pružnosti a pevnosti. V DEFORMe zadáte E a ný; modul v šmyku a objemový modul z nich vyplývajú.

Pozrite sa na stĺpcový graf v logaritmickej mierke. Tvárnené kovy ležia v úzkom pásme medzi približne 45 a 210 gigapascalmi; vložky zo spekaného karbidu sú trikrát tuhšie ako oceľ, a práve preto sa používajú tam, kde sa zápustka nesmie prehnúť.

Jeden dôsledok uvidíte v prednáške o plechoch: odpruženie rastie s pomerom napätia a modulu. Hliník má tretinový modul oproti oceli, takže pri rovnakom napätí odpruží približne trikrát viac. Preto sú hliníkové karosárske diely problémom odpruženia.


### Snímka 10 — E(T) a α(T)  `[0:25–0:28]`

Obe elastické vlastnosti závisia od teploty. Ľavý graf je redukčný súčiniteľ modulu uhlíkovej ocele podľa Eurokódu: pri 600 stupňoch zostáva len asi tretina hodnoty pri izbovej teplote a blízko kovacej teploty takmer nič. Ak simulujete kalenie z 850 stupňov s konštantným modulom 210 gigapascalov, napätia na začiatku ochladzovania výrazne nadhodnotíte.

Vpravo je teplotná rozťažnosť niekoľkých ocelí tak, ako je uložená v DEFORMe. Všimnite si pole „Reference temperature“ v záložke Elastic. DEFORM používa sečnicový súčiniteľ: tepelná deformácia je alfa krát rozdiel od referenčnej teploty. Ak prevezmete okamžité hodnoty z príručky, nie je to to isté – overte si, ktorú hodnotu váš zdroj uvádza.

A pri tepelnom spracovaní: austenit sa rozťahuje viac ako ferit, takže v zmesi potrebuje každá fáza vlastné alfa – zmena objemu pri premene sa zadáva samostatne v dialógu Transformation.


### Snímka 11 — Hyperelastické materiály  `[0:28–0:30]`

Posledná elastická téma je hyperelasticita – materiály ako guma, ktoré sa natiahnu o niekoľko sto percent a stále sa vrátia. Lineárna pružnosť tu zlyháva: pozrite sa na graf. Do niekoľkých percent sa obe krivky zhodujú; pri väčšom natiahnutí sa neo-Hookova krivka od priamky odchyľuje a v tlaku sa výrazne stuží.

Namiesto E a ný používa hyperelastický model funkciu deformačnej energie. Neo-Hookov model má jednu konštantu, Mooney–Rivlinov dve. V tvárnení sa s nimi stretnete pri tvárnení gumovým vankúšom v leteckom priemysle, pri pružných nástrojoch a keď sú tesnenia súčasťou zostavy. Jedno pravidlo: konštanty fitujte aspoň z dvoch druhov deformácie, pretože fit iba z ťahu môže byť v tlaku nestabilný.

Tým končí blok o pružnosti. Teraz jadro prednášky – pretvárny odpor.


## Blok 4 · Pretvárny odpor

### Snímka 12 — Definícia pretvárneho odporu  `[0:30–0:33]`

Pretvárny odpor je skutočné napätie potrebné na to, aby materiál plasticky tiekol pri danej deformácii, rýchlosti deformácie a teplote. Táto rovnica – sigma s pruhom ako funkcia epsilon s pruhom, epsilon s pruhom a bodkou a T – je jediný riadok, ktorý si z dneška zapamätajte.

Vľavo: inžinierska a skutočná krivka. Trhacie stroje dávajú silu a predĺženie, teda inžinierske hodnoty. MKP potrebuje skutočné napätie a logaritmickú deformáciu; prepočtové vzťahy sú tu a platia iba do vzniku krčku.

V strede: zaťaženie nad medzu klzu zanechá trvalú deformáciu. Tuhoplastický program ako DEFORM používa iba plastickú časť krivky – krivka spevnenia v DEFORMe preto začína pri počiatočnej medzi klzu pri nulovej plastickej deformácii.


### Snímka 13 — Vplyv teploty a rýchlosti deformácie  `[0:33–0:35]`

Dve krivky z učebnice predmetu: pri konštantnej rýchlosti deformácie zvýšenie teploty krivku zníži; pri konštantnej teplote zvýšenie rýchlosti deformácie krivku zvýši. Aký silný je každý z vplyvov, závisí od homologickej teploty – teploty delenej teplotou tavenia v kelvinoch.

Tvárnenie za studena, pod približne 0,3 teploty tavenia: dominuje deformačné spevnenie a citlivosť na rýchlosť deformácie m je blízko nuly. Tvárnenie za tepla, nad približne polovicou teploty tavenia: spevnenie je vyvážené zotavením a dynamickou rekryštalizáciou, krivka sa splošťuje a citlivosť na rýchlosť stúpa na 0,1 až 0,2. Superplastické zliatiny idú nad 0,3.

Nezabudnite, že teplota sa počas tvárnenia sama mení: asi 90 percent plastickej práce sa premení na teplo. Pri rýchlom kovaní za studena sa polotovar môže zohriať o sto stupňov aj viac, takže aj „studená“ simulácia potrebuje tepelné údaje.

> **Otázka pre študentov:** Oceľ pri 1100 °C, T_m ≈ 1500 °C: tvárnenie za studena, za poloohrevu alebo za tepla? A hliník pri 20 °C?


### Snímka 14 — Skúšky na získanie kriviek spevnenia  `[0:35–0:39]`

Odkiaľ tieto krivky pochádzajú? Zo štyroch skúšok. Skúška ťahom je štandard, ale krčok ju obmedzuje na deformácie 0,2 až 0,3 – sama osebe je pre kovanie nepoužiteľná, pretože tam deformácie dosahujú 2 až 3.

Skúška tlakom – pechovanie valčeka – dosahuje deformácie okolo jednej. Jej slabinou je trenie: vzorka sa súdkovito vydúva, napätie už nie je jednoosové a nameranú silu treba korigovať, často inverznou MKP priamo v DEFORMe.

Gleeble – na fotografii – je termomechanický simulátor. Vzorku ohrieva priamym odporovým ohrevom a stláča ju pri riadenej teplote a rýchlosti deformácie; takto sa meria väčšina kriviek za tepla v knižniciach. Pod obrázkom je odkaz na krátke video o Gleeble, ak si ho chcete pozrieť.

Pre rýchlosti deformácie tisícok za sekundu – obrábanie, náraz – používame delenú Hopkinsonovu tyč, náčrt vpravo: úderník narazí do tyče, vlna prejde malou vzorkou a tenzometre dajú napätie a rýchlosť deformácie.

Tabuľka hovorí, na čo je ktorá skúška vhodná. Skúšku krutom pridávam pre úplnosť: dosahuje obrovské deformácie a používa sa pri štúdiu valcovania za tepla a rekryštalizácie.


### Snímka 15 — Tabuľkové údaje a interpolácia  `[0:39–0:42]`

Najčastejšia forma pretvárneho odporu v DEFORMe je tabuľka: súbor kriviek, každá pre jednu teplotu a jednu rýchlosť deformácie, každá vzorkovaná pri niekoľkých deformáciách. Vľavo vidíte graf v DEFORMe a tabuľku za ním.

Medzi bodmi tabuľky musí program interpolovať. Rýchlosť deformácie pri kovaní pokrýva päť až šesť rádov, takže záleží na tom, ako. Vpravo som vzal štyri body tejto tabuľky – rýchlosti deformácie 1, 10, 100 a 1000 – a pýtal som sa na hodnotu pri 50 za sekundu. Lineárna interpolácia dá približne 1012 megapascalov, logaritmická približne 1028. Rozdiel je tu mierny, ale rastie, keď je tabuľka hrubá. Pretvárny odpor je približne lineárny v logaritme rýchlosti deformácie, takže logaritmická interpolácia je fyzikálne rozumná voľba.

Dobrá tabuľka má päť až osem teplôt a štyri až šesť rýchlostí deformácie, ktoré pokrývajú proces. Táto posledná podmienka je témou nasledujúcej snímky.


### Snímka 16 — Varovanie pred extrapoláciou  `[0:42–0:45]`

Čo sa stane mimo tabuľky? Program musí hádať – buď podrží poslednú hodnotu, alebo predĺži posledný sklon. Ľavý graf: materiál sa správa podľa Johnsona–Cooka, ale tabuľka siaha len do 10 za sekundu. Pri simulácii obrábania s desaťtisíc za sekundu takto orezaná tabuľka podhodnotí pretvárny odpor asi o 8,2 percenta – a to pri izbovej teplote a s miernym vplyvom rýchlosti.

Pravý graf je mapa, ktorú by ste mali mať v hlave. Vodorovná os: rýchlosť deformácie v logaritmickej mierke. Zvislá: homologická teplota. Čiarkované obdĺžniky ukazujú, kam siahajú skúšky; plné obdĺžniky, kde bežia procesy. Kovanie za tepla sa dobre prekrýva s tlakovou skúškou na Gleeble. Obrábanie leží pri rýchlostiach deformácie, ku ktorým sa priblíži len Hopkinsonova tyč. Tečenie v prevádzke je pri rýchlostiach miliónkrát pomalších ako akákoľvek skúška tvárnenia.

Praktické pravidlo teda znie: po prvom výpočte otvorte postprocesor, skontrolujte maximálnu deformáciu, rýchlosť deformácie a teplotu a porovnajte ich s tabuľkou. DEFORM vás nevaruje.

> **Otázka pre študentov:** Vaša tabuľka končí pri ε = 1,0; simulácia dosiahne vo výronku ε = 3. Čo tam DEFORM použije a záleží na tom?


### Snímka 17 — Mocninový zákon  `[0:45–0:47]`

Teraz rovnice. Prvá v zozname DEFORMu je mocninový zákon: c krát deformácia na n, krát rýchlosť deformácie na m, plus y. Bez rýchlostného člena a posunu je to Hollomonov zákon; Swift pridáva počiatočnú deformáciu epsilon nula.

Exponent n je exponent deformačného spevnenia. V skúške ťahom sa rovná rovnomernej deformácii pri vzniku krčku – to je pekná kontrola vášho fitu. Pozrite sa na graf: pri n rovnom 0,35 krivka stále stúpa; pri 0,1 je po prvých percentách takmer plochá. Nehrdzavejúca oceľ má n okolo 0,45, a preto sa pri hlbokom ťahaní tak silno spevňuje.

Jedna praktická poznámka. Čistý Hollomon dáva pri nulovej deformácii nulové napätie – na začiatku nekonečne mäkký materiál. DEFORM to rieši členom y, alebo použijete Swifta. V DEFORMe môže byť každé z c, n, m a y funkciou teploty, čo stačí na jednoduché tvárnenie za poloohrevu.


### Snímka 18 — Johnson–Cook  `[0:47–0:50]`

Johnson–Cook je štandardný model pre obrábanie a náraz. Je to súčin troch zátvoriek: spevnenia, rýchlosti a tepelného zmäkčenia. Každá zátvorka má vlastné konštanty a navzájom sa neovplyvňujú – to uľahčuje fitovanie a zároveň je to slabina modelu.

Konštanty sú tu pre oceľ AISI 1045, publikované Jaspersom a Dautzenbergom zo skúšok na Hopkinsonovej tyči, a graf je z nich vypočítaný. Prechod z 1 na desaťtisíc za sekundu zvýši krivku asi o 12 percent; ohrev na 700 stupňov odoberie zhruba polovicu pevnosti.

Verzia DEFORMu v rozbaľovacom zozname má dva parametre navyše – exponent na rýchlosti deformácie a pružnejšiu teplotnú zátvorku. Model je výborný pre obrábanie, kde sú rýchlosti deformácie extrémne a teploty mierne. Slabý je blízko teploty tavenia a pri kovaní za tepla, kde rekryštalizácia viaže teplotu a rýchlosť deformácie – a to oddelené zátvorky nedokážu opísať.


### Snímka 19 — Zerilli–Armstrong  `[0:50–0:52]`

Zerilli a Armstrong odvodili svoj model z mechaniky dislokácií. Kľúčový fyzikálny poznatok je rozdiel medzi kryštálovými mriežkami. V kovoch s priestorovo centrovanou kubickou mriežkou – feritických oceliach – pôsobí teplota a rýchlosť deformácie hlavne na medzu klzu, pretože dislokácie musia prekonať odpor mriežky. V kovoch s plošne centrovanou kubickou mriežkou – meď, hliník, nikel – pôsobia na člen spevnenia.

Graf používa pôvodné konštanty z roku 1987. Medzi teplotou kvapalného dusíka a izbovou teplotou stratí železo asi polovicu pevnosti, meď len asi tretinu – a počiatočná medza klzu medi sa takmer nemení. To je známa krehkosť feritických ocelí pri nízkych teplotách oproti húževnatosti medi a austenitických ocelí.

DEFORM ponúka vo svojom zozname tvar pre BCC. Použite ZA namiesto Johnsona–Cooka, keď potrebujete fyzikálne podloženú väzbu teploty a rýchlosti, napríklad pri vysokorýchlostnom tvárnení v širokom rozsahu teplôt.


### Snímka 20 — Tvárnenie za tepla: Norton–Hoff a sinh-Arrhenius  `[0:52–0:55]`

Pri tvárnení za tepla štandardný prístup spája teplotu a rýchlosť deformácie do jedného parametra – Zenerovho–Hollomonovho parametra Z, rýchlosť deformácie krát exp Q lomeno RT. Q je aktivačná energia deformácie za tepla: približne 300 až 320 kilojoulov na mól pre uhlíkovo-mangánové ocele, polovica pre hliník.

Zákon hyperbolického sínusu podľa Sellarsa a Tegarta viaže Z s pretvárnym odporom. Pri nízkych napätiach sa správa ako mocninový zákon a pri vysokých ako exponenciála, takže pokryje údaje pre tvárnenie za tepla v mnohých rádoch. Keď ho invertujete, máte napätie ako funkciu Z – graf. Pri 1000 stupňoch a jednej za sekundu je ustálené napätie asi 110 megapascalov; prechod na 900 stupňov a desať za sekundu ho takmer zdvojnásobí.

Norton–Hoff je viskoplastický mocninový zákon používaný vo viacerých európskych programoch – napätie úmerné rýchlosti deformácie na m. V rozbaľovacom zozname DEFORMu nájdete tvar so sínusom hyperbolickým aj mocninovo-exponenciálny tvar s aktivačnou energiou zapísanou ako delta H.


### Snímka 21 — Za hranicou rovníc  `[0:55–0:57]`

Rozbaľovací zoznam vľavo ukazuje, že DEFORM ponúka viac ako klasické rovnice. Prejdime tabuľku.

Model hustoty dislokácií počíta pretvárny odpor z hustoty dislokácií, ktorá sa sama vyvíja s deformáciou, rýchlosťou deformácie a teplotou – užitočné, keď záleží na histórii materiálu, napríklad medzi údermi pri viacoperačnom kovaní za tepla.

Modely textúry a kryštálovej plasticity vychádzajú z orientácie zŕn; záleží na nich pri titáne, horčíku a cípatosti plechov.

Od verzie 13 je k dispozícii prediktor na báze hlbokej neurónovej siete, ktorý odhadne krivku spevnenia z chemického zloženia – veľmi praktické v ranom návrhu, keď nemáte skúšobné údaje, ale berte to ako odhad.

A ak nič nesedí, môžete napísať vlastný podprogram a skompilovať ho do riešiča. Napokon Material Suite, samostatný nástroj firmy SFTC, fituje pretvárny odpor z tlakových skúšok a počíta diagramy IRA a konštanty JMAK.


### Snímka 22 — Voľba modelu pretvárneho odporu  `[0:57–1:00]`

Na záver bloku o pretvárnom odpore rozhodovací návod. Začnite procesom. Tvárnenie za studena – mocninový zákon, pretože dominuje spevnenie. Kovanie za poloohrevu a za tepla – nameraná tabuľka alebo model sinh-Arrhenius, ak musíte extrapolovať v teplote. Obrábanie – Johnson–Cook alebo Zerilli–Armstrong. Dlhá výdrž na teplote – model tečenia, to je náš blok 6. Tvárnenie plechov s odpružením – anizotropná podmienka plasticity a kinematické spevnenie, to je blok 5.

A pod tým všetkým červená čiara: nech zvolíte akýkoľvek model, porovnajte rozsah deformácie, rýchlosti deformácie a teploty, na ktorý bol fitovaný, s rozsahom, ktorý dosahuje váš proces. To je pol hodiny látky v jednej vete.

> **Otázka pre študentov:** Kovanie kľukového hriadeľa za tepla pri 1200 °C — aký model a akú skúšku by ste objednali?


## Blok 5 · Podmienky plasticity a spevnenie

### Snímka 23 — Od tenzora napätia k efektívnemu napätiu  `[1:00–1:03]`

Krivka spevnenia pochádza z jednoosovej skúšky, ale vo výkovku má každý bod úplný trojrozmerný stav napätosti – deväť zložiek, šesť nezávislých. Ako ich porovnáme? Tenzor zhustíme do jedného čísla, efektívneho napätia, a povieme, že materiál začne plasticky tiecť, keď efektívne napätie dosiahne pretvárny odpor.

Najprv odstránime hydrostatickú časť, stredné napätie, pretože samotný tlak kompaktné kovy plasticky nedeformuje. Zostane deviátor napätia. Efektívne napätie podľa von Misesa je odmocnina z troch polovíc jeho dvojitého skalárneho súčinu – alebo v hlavných napätiach známy vzorec s tromi rozdielmi.

Ako presne sa efektívne napätie počíta, určuje podmienka plasticity v záložke Plastic. O tom sú nasledujúce tri snímky.


### Snímka 24 — von Mises a Tresca  `[1:03–1:06]`

Dve klasické izotropné podmienky. Tresca hovorí, že plastické tečenie začne, keď maximálne šmykové napätie dosiahne kritickú hodnotu – šesťuholník. Von Mises používa efektívne napätie z predchádzajúcej snímky – elipsa.

Zhodujú sa pri jednoosovom ťahu a pri rovnomernom dvojosovom ťahu a najviac sa líšia pri čistom šmyku, asi o 15 percent. Experimenty na väčšine kovov ležia bližšie k von Misesovi a keďže je elipsa hladká, je oveľa jednoduchšia pre riešič metódy konečných prvkov. Preto je von Mises predvolený v DEFORMe aj takmer v každom programe na simuláciu tvárnenia.

Vpravo je rozbaľovací zoznam podmienky plasticity v DEFORMe: von Mises, Hillove kvadratické tvary a ďalšie možnosti. Objemové tvárnenie izotropných polotovarov – zostaňte pri von Misesovi. Plechy s valcovacou textúrou – nasledujúca snímka.


### Snímka 25 — Hill 48  `[1:06–1:09]`

Valcované plechy nie sú izotropné: valcovanie vytvára textúru a plech sa správa inak v smere valcovania, naprieč a po hrúbke. Hill v roku 1948 navrhol najjednoduchšie rozšírenie von Misesovej podmienky pre takéto ortotropné materiály – kvadratickú funkciu so šiestimi konštantami: F, G, H pre rozdiely normálových napätí a L, M, N pre šmyk.

Ak nastavíte F, G a H rovnaké a L, M, N trikrát väčšie, dostanete späť von Misesa – dobrá kontrola vstupu.

V DEFORMe môžete šesť konštánt zadať priamo – tento dialóg – alebo ich nechať DEFORM vypočítať z R-hodnôt. Vzťahy sú dole: tri R-hodnoty namerané pri 0, 45 a 90 stupňoch určujú pomery.


### Snímka 26 — R-hodnoty, Lankford, Barlat  `[1:09–1:12]`

R-hodnota, alebo Lankfordov súčiniteľ, sa meria v skúške ťahom plechu: pomer deformácie v šírke k deformácii v hrúbke. R väčšie ako jedna znamená, že plech odoláva stenčovaniu – dobré pre hlboké ťahanie. Hlbokoťažné ocele ako DC04 majú priemerné R približne 1,6 až 1,9.

Zmena R so smerom, delta r, spôsobuje cípy na ťahaných výťažkoch – náčrt v strede: štyri cípy pri 0 a 90 stupňoch, keď je delta r kladné.

Vpravo je Hillova plocha plasticity pre R rovné 1,8 a 0,6 v porovnaní s von Misesom. Vysoké R natiahne plochu v dvojosovom smere – plech je pevnejší pri rovnomernom dvojosovom naťahovaní. Hliníkové zliatiny s R pod jednou vykazujú správanie, ktoré Hill 48 dobre neopíše; na to bola navrhnutá nekvadratická podmienka Barlata z roku 1991 s exponentom 8 pre kovy FCC.


### Snímka 27 — Izotropné spevnenie  `[1:12–1:14]`

Spevnenie opisuje, ako sa plocha plasticity mení s narastajúcou plastickou deformáciou. Vľavo vidíte efekt: po deformácii potrebuje materiál na ďalšiu deformáciu vyššie napätie.

Pri izotropnom spevnení si plocha plasticity zachová stred a rovnomerne rastie – ľavá kružnica. Polomer je jednoducho pretvárny odpor pri aktuálnej plastickej deformácii. Presne to opisuje krivka spevnenia, takže izotropné spevnenie nepotrebuje žiadne ďalšie údaje. Je predvolené v DEFORMe a je presné, kým zaťaženie pôsobí jedným smerom – čo platí pre väčšinu kovania.


### Snímka 28 — Kinematické spevnenie a Bauschingerov efekt  `[1:14–1:17]`

Kinematické spevnenie je druhý extrém: plocha plasticity si zachová veľkosť, ale posúva sa, stred je posunutý o spätné napätie alfa. Prečo by na tom malo záležať? Pozrite sa na graf. Materiál natiahneme na 5 percent deformácie a potom zaťaženie obrátime. Pri izotropnom spevnení začne v tlaku tiecť až pri rovnakej veľkosti napätia, akú dosiahol v ťahu. Pri kinematickom spevnení zostáva elastický rozsah široký dve sigma nula, takže v tlaku začne tiecť oveľa skôr. Toto skoré plastické tečenie pri obrátení zaťaženia je Bauschingerov efekt a skutočné kovy ho vykazujú.

Pri tvárnení plechov sa kov ohýba a vyrovnáva cez polomery nástroja a brzdiace rebrá – presne obrátenie zaťaženia. Ak Bauschingerov efekt zanedbáte, predpoveď odpruženia nesedí. Najjednoduchšie zákony sú Pragerov a Zieglerov; Armstrong–Frederick pridáva nasýtenie. V praxi sa v rozbaľovacom zozname pravidla spevnenia volí zmiešané pravidlo – časť izotropná, časť kinematická.

> **Otázka pre študentov:** Aké pravidlo spevnenia pre zápustkový výkovok a aké pre U-profil s odpružením?


### Snímka 29 — Yoshida–Uemori a odpruženie  `[1:17–1:20]`

Pokročilé vysokopevné ocele sú najťažší prípad odpruženia a najpoužívanejší model pre ne je Yoshida–Uemori. Používa dve plochy: malú plochu plasticity, ktorá sa pohybuje vnútri väčšej ohraničujúcej plochy. Tým zachytí detaily, ktoré obyčajné kinematické spevnenie nezachytí – plynulý prechod po obrátení zaťaženia, trvalé zmäkčenie a stagnáciu spevnenia.

Rovnako dôležitý je ďalší jav: modul pri odľahčení ocele klesne po plastickej deformácii o 10 až 20 percent. Vzorec tu opisuje tento pokles a mnohé štúdie odpruženia ukazujú, že je rovnako dôležitý ako model spevnenia.

Rámček použite ako kontrolný zoznam pre odpruženie: elasticko-plastický objekt, znížený modul, kinematické spevnenie alebo Yoshida–Uemori, anizotropná podmienka plasticity a dostatok prvkov po hrúbke. Yoshida–Uemori potrebuje asi sedem konštánt z cyklických skúšok – to v bežnej knižnici nenájdete.


## Blok 6 · Tečenie (creep)

### Snímka 30 — Základy tečenia  `[1:20–1:24]`

Tečenie je pomalá plastická deformácia pri konštantnom napätí. Dôležitým sa stáva nad približne 0,4 teploty tavenia – pre oceľ to je približne od 450 stupňov, pre hliník pri dlhých časoch už blízko izbovej teploty, pre olovo dokonca pri izbovej teplote.

Krivka tečenia má tri štádiá: primárne tečenie, pri ktorom rýchlosť klesá, lebo sa materiál spevňuje; sekundárne alebo ustálené tečenie s minimálnou rýchlosťou, pri ktorom sú spevnenie a zotavenie v rovnováhe; a terciárne tečenie, pri ktorom ho póry a zaškrcovanie urýchlia až k lomu. Vyššie napätie – červená krivka – všetko skráti.

V DEFORMe je tečenie ďalší člen rýchlosti deformácie popri elastickej, plastickej a tepelnej deformácii; zapína sa v záložke Plastic pre elasticko-plastické objekty – dialóg vpravo.


### Snímka 31 — Modely tečenia v DEFORMe  `[1:24–1:27]`

Možnosti tečenia v DEFORMe. Najbežnejší je Nortonov mocninový zákon: rýchlosť tečenia úmerná napätiu na n. Opisuje ustálené tečenie a používa sa na relaxáciu napätí. Bailey–Norton pridáva čas na mocninu menšiu ako jedna, čím zachytí aj primárne tečenie.

Perzyna je viskoplastický model nadmerného napätia: rýchlosť tečenia závisí od toho, o koľko napätie prekročí medzu klzu. Soderbergov a exponenciálny zákon pokrývajú oblasti nízkych a vysokých napätí a tabuľková možnosť priamo preberá namerané údaje.

Poznámka k Nortonovmu exponentu: tri až osem znamená dislokačné tečenie; približne jedna znamená difúzne tečenie, typické pre jemnozrnné alebo superplastické materiály. A údaje o tečení sa extrapolujú ešte horšie ako pretvárny odpor – fitujte ich na rozsah napätí a teplôt, ktorý simulujete.


### Snímka 32 — Tečenie v praxi tvárnenia  `[1:27–1:30]`

Kde sa pri tvárnení stretnete s tečením? Po prvé, relaxácia napätí. Bandážovací krúžok okolo horúcej vložky zápustky sa montuje s určitým predpätím; pri pracovnej teplote predpätie tečením klesá. Graf ukazuje Nortonovu relaxáciu: napätie najprv klesá rýchlo a potom pomaly – po desiatkach hodín je veľká časť predpätia preč.

Po druhé, izotermické kovanie a kovanie v ohriatych zápustkách titánových a niklových zliatin pri veľmi nízkych rýchlostiach deformácie a superplastické tvárnenie – tam je samotný proces tvárnenia podobný tečeniu.

Po tretie, žíhanie na odstránenie pnutí a kalibrovanie za tepla, kde chceme, aby tečenie odstránilo zvyškové napätia. Fotografia ukazuje klasický rám na skúšku tečenia so závažím – skúška, ktorá trvá tisíce hodín.

To je tečenie. Teraz tepelné údaje – pätnásť minút.


## Blok 7 · Tepelné údaje

### Snímka 33 — Záložka Thermal  `[1:30–1:33]`

Záložka Thermal má štyri riadky: tepelnú vodivosť, tepelnú kapacitu – alebo mernú tepelnú kapacitu, je tam prepínač – emisivitu a hustotu. Vstupujú do rovnice vedenia tepla na snímke: akumulované teplo sa rovná vedenému teplu plus teplu vznikajúcemu z plastickej práce, z fázovej premeny a z indukcie.

Všimnite si člen beta krát sigma krát epsilon s bodkou: to je plastická práca premenená na teplo, s beta okolo 0,9 – väzba medzi mechanikou a teplotou.

Opäť jednotky: tepelná vodivosť v newtonoch na sekundu a stupeň, čo je to isté ako watty na meter a kelvin, takže hodnoty z príručky môžete prevziať priamo. Tepelná kapacita je objemová, v newtonoch na štvorcový milimeter a stupeň. Tá ľudí mätie – o dve snímky.


### Snímka 34 — Tepelná vodivosť k(T)  `[1:33–1:36]`

Tepelná vodivosť rozhoduje, ako rýchlo sa teplo vo výrobku šíri. Graf: uhlíková oceľ začína okolo 54 wattov na meter a kelvin a pri 800 stupňoch klesne asi na 27; austenitická nehrdzavejúca oceľ začína pri 15 a stúpa. Použiť konštantu pri izbovej teplote pre kovanie za tepla je preto chyba o faktor dva.

Tabuľka ukazuje rozsah: meď vedie teplo 50-krát lepšie ako titán. Titánové a niklové zliatiny vedú teplo zle, takže povrch v kontakte so studenou zápustkou vychladne, kým jadro zostáva horúce – a pri rýchlej deformácii teplo zostane v šmykových pásoch. Preto sú titánové výkovky také citlivé na teplotu zápustky a preto sa titán ťažko obrába.


### Snímka 35 — Tepelná kapacita alebo merná tepelná kapacita  `[1:36–1:39]`

A tu je tá mätúca. Predvolená hodnota v DEFORMe je tepelná kapacita – energia na objem a stupeň – nie merná tepelná kapacita na hmotnosť. Pre oceľ: 7850 kilogramov na kubický meter krát 440 joulov na kilogram a kelvin dá približne 3,45 megajoulu na kubický meter a kelvin, čo je v jednotkách DEFORMu 3,45 newtona na štvorcový milimeter a stupeň. Ak tam napíšete 440, váš polotovar sa prakticky nikdy nezohreje.

Alternatívou je možnosť Specific heat; vtedy DEFORM sám násobí hustotou – a to je dôvod, prečo je hustota v záložke Thermal.

Graf je merná tepelná kapacita uhlíkovej ocele podľa Eurokódu. Všimnite si špičku pri približne 735 stupňoch – premena alfa na gama pohlcuje latentné teplo. V materiáli typu Regular táto špička predstavuje latentné teplo. V zmesi sa latentné teplo zadáva v údajoch o premene – takže ho nesmiete mať dvakrát.

> **Otázka pre študentov:** Študent zadá c_p = 460 do poľa tepelnej kapacity v úlohe v SI. Čo sa stane s teplotou polotovaru?


### Snímka 36 — Emisivita a hustota  `[1:39–1:42]`

Emisivita riadi sálanie z voľných povrchov. Sálanie rastie so štvrtou mocninou absolútnej teploty, takže pri polotovare s 1200 stupňami dominuje tepelným stratám počas prenosu z pece k lisu. Oxidovaná oceľ má emisivitu 0,7 až 0,9 – hodnota 0,7, ktorú ste videli na snímke obrazovky. Leštený hliník je pod 0,1 – preto hliníkové polotovary chladnú sálaním pomaly.

Obrázok ukazuje voľné kovanie veľkého ingotu: proces trvá hodiny a väčšina teplotných strát vzniká sálaním medzi úbermi. Tu je emisivita vstupom prvého rádu.

Hustota má tri úlohy: hmotnosť a zotrvačnosť pri bucharoch a vretenových lisoch, možnosť Specific heat a hustotu ako funkciu teploty, ktorá spôsobuje zmenu objemu pri tepelnom spracovaní.


### Snímka 37 — Súčiniteľ prestupu tepla na rozhraní a Inverse HTC  `[1:42–1:45]`

Posledná tepelná položka nie je v okne Material, ale patrí sem: prestup tepla medzi zápustkou a výrobkom. Tepelný tok je h krát rozdiel teplôt a h závisí od kontaktného tlaku, času, maziva a okovín. Nastavuje sa v dialógu Inter-object. Predvolená hodnota DEFORMu pre kontakt pri tvárnení je asi 11 kilowattov na štvorcový meter a kelvin a 0,02 pre konvekciu na voľných povrchoch.

Odkiaľ získať lepšie hodnoty? Tri obrázky ukazujú modul Inverse HTC od SFTC: urobíte skúšku s termočlánkami v zápustke alebo vo výrobku, potom DEFORM mení h, kým sa simulované teplotné krivky nezhodujú s nameranými, a vráti nafitované h.

Zapamätajte si túto myšlienku inverznej analýzy – je to rovnaký trik, akým sa koriguje trenie v tlakových skúškach pri určovaní pretvárneho odporu. Simulácia nie je iba používateľom materiálových údajov; je aj nástrojom na ich meranie.


## Blok 8 · Nad rámec mechaniky

### Snímka 38 — Veľkosť zrna a JMAK  `[1:45–1:48]`

Blok 8 – údaje, ktoré idú nad rámec mechaniky. Najprv mikroštruktúra. Počas deformácie za tepla a po nej materiál rekryštalizuje a rekryštalizovaný podiel sa riadi rovnicou JMAK, teda Avramiho rovnicou – krivky v tvare S. Čas do 50-percentnej rekryštalizácie závisí od počiatočnej veľkosti zrna, deformácie, rýchlosti deformácie a teploty cez Arrheniov člen: pri 1100 stupňoch je to zlomok sekundy, pri 900 stupňoch desiatky sekúnd.

Podobné rovnice dávajú veľkosť zrna po dynamickej rekryštalizácii a rast zrna počas výdrže. V DEFORMe sa tieto konštanty zadávajú pod tlačidlom Grain v oblasti Phase.

Výsledok je obrázok vpravo: veľkosť zrna v kovanom disku turbíny. Pri leteckých diskoch zákazník predpisuje veľkosť zrna, nielen tvar – je to teda konštrukčná veličina.


### Snímka 39 — Fázové premeny a tvrdosť  `[1:48–1:50]`

Pri tepelnom spracovaní potrebuje každá fázová premena kinetiku. Difúzne premeny – ferit, perlit, bainit – sa riadia Avramiho rovnicami, ktorých konštanty pochádzajú z diagramu IRA, rozšíreného na plynulé ochladzovanie pravidlom aditivity. Martenzit je atermický a riadi sa Koistinenovou–Marburgerovou rovnicou: podiel závisí len od toho, ako hlboko pod teplotou Ms sa nachádzate.

Tvrdosť je potom zmesou tvrdostí fáz, z ktorých každá závisí od zloženia a rýchlosti ochladzovania – to je záložka Hardness. Údaje IRA pochádzajú z dilatometrických skúšok alebo sa vypočítajú zo zloženia, napríklad v Material Suite od SFTC alebo v JMatPro.

Obrázky: zvyškové obvodové napätie po kalení disku – výsledok zmeny objemu pri premene a tepelného zmrštenia – a matica pechovaná za studena, kde rozloženie tvrdosti pochádza len z deformačného spevnenia.


### Snímka 40 — Difúzia a elektromagnetické údaje  `[1:50–1:52]`

Ďalšie dve záložky. Difúzia sa používa pri cementovaní a nitridovaní: druhý Fickov zákon s difúznym súčiniteľom závislým od teploty. Pre uhlík v austenite je D nula približne 2,3 krát desať na mínus piatu štvorcového metra za sekundu a aktivačná energia asi 148 kilojoulov na mól. Obsah uhlíka potom mení teplotu Ms, tvrdosť a krivky IRA – difúzia je teda previazaná s fázovými údajmi.

Záložka Electro-magnetic obsahuje elektrický merný odpor a magnetickú permeabilitu pre indukčný ohrev. Kľúčovou fyzikou je hĺbka vniku. Pod Curieovým bodom je oceľ feromagnetická a prúd tečie v tenkej povrchovej vrstve; nad približne 770 stupňami klesne permeabilita na jednu, hĺbka vniku vzrastie zhruba desaťnásobne a ohrievaná zóna sa posunie dovnútra. Bez permeability závislej od teploty nedokážete predpovedať zakalený obrys na tomto ozubenom kolese.


### Snímka 41 — Porušenie: Cockcroft–Latham  `[1:52–1:55]`

Posledná téma: porušenie. DEFORM ponúka mnoho kritérií tvárneho porušenia; najpoužívanejšie je normalizované kritérium Cockcrofta–Lathama. Poškodenie je integrál maximálneho hlavného napätia deleného efektívnym napätím pozdĺž dráhy deformácie, pričom sa počíta len ťahové napätie. Keď D dosiahne kritickú hodnotu C, očakáva sa trhlina.

Pri pechovaní – náčrt – má vydutý povrch ťahové obvodové napätie, takže poškodenie tam rastie najskôr; práve tam vznikajú trhliny pri pechovaní za studena. Pri priečnom klinovom valcovaní vpravo je stred tyče zaťažovaný striedavým ťahom a môže sa otvoriť – Mannesmannov efekt.

Pre materiálové údaje je dôležité, že C nie je univerzálne. Kalibrujete ho simuláciou skúšky – pechovania, ťahu, vrubovaných tyčí – do deformácie, pri ktorej skutočná vzorka praskla. Jeho hodnota závisí od čistoty ocele a teploty. Hodnota C z inej tavby materiálu je len hrubým vodidlom.

> **Otázka pre študentov:** Prečo poškodenie rastie na rovníku pechovaného valca, ale nie v jeho strede?


## Blok 9 · Zhrnutie

### Snímka 42 — Kontrolný zoznam podľa procesu  `[1:55–1:58]`

Tu je zhrnutie celej prednášky v jednej tabuľke – odložte si ju na cvičenia. Nájdite svoj proces v ľavom stĺpci a v riadku prečítajte, aké údaje potrebujete. Tučné položky sú tie, na ktoré študenti najčastejšie zabúdajú: tepelné údaje pri kovaní za tepla, anizotropia a kinematické spevnenie pri odpružení a údaje o premenách pri tepelnom spracovaní.

A štyri kontroly dole, pre každú simuláciu: jednotky, rozsah platnosti, teplotná závislosť a jedno overenie meraním – silou lisu alebo termočlánkom. Ak prejdú všetky štyri, môžete začať veriť farebným obrázkom.


### Snímka 43 — Kvíz a zdroje  `[1:58–2:00]`

Na záver osem otázok – všetky sú na snímke; odpovede hovorte nahlas. Takýto typ otázok uvidíte na písomnej skúške.

Vpravo sú hlavné zdroje: manuál DEFORMu, naša učebnica a pôvodné články k modelom, ktoré sme použili. Všetky grafy v tejto prednáške boli vypočítané z rovníc na snímkach s uvedenými konštantami, takže si ich môžete zopakovať. Budúci týždeň: preprocesing – sieť, okrajové podmienky a trenie. Ďakujem.

> 🗒️ *Všetky otázky sú viditeľné naraz; po odpovediach stlačte „odpoveď“ pri každej otázke.*

**Otázka jedna:** Napíšte všeobecnú funkciu pretvárneho odporu a pomenujte jej tri premenné.

> ✅ **Očakávané:** σ̄ = f(ε̄, ε̇̄, T): efektívna plastická deformácia, efektívna rýchlosť deformácie a teplota.

**Otázka dva:** Prečo môže tuhoplastická simulácia kovania bežať bez Youngovho modulu a Poissonovho čísla?

> ✅ **Očakávané:** Pri objemovom tvárnení plastické deformácie (stovky %) ďaleko prevyšujú elastické (zlomky %), preto tuhoplastická formulácia pružnosť zanedbáva. E a ν sú potrebné len pre elastické zápustky, odpruženie / zvyškové napätia a tepelné spracovanie.

**Otázka tri:** Aký model pretvárneho odporu by ste použili pre obrábanie, aký pre kovanie za tepla – a prečo?

> ✅ **Očakávané:** Obrábanie: Johnson–Cook (alebo Zerilli–Armstrong) – veľmi vysoké rýchlosti deformácie a adiabatický ohrev. Kovanie za tepla: nameraná tabuľka σ(ε, ε̇, T) alebo zákon sinh-Arrhenius – tepelne aktivované tečenie, pri ktorom sa T a ε̇ vzájomne ovplyvňujú.

**Otázka štyri:** Čo sa stane, ak proces prekročí rozsah rýchlostí deformácie v tabuľke?

> ✅ **Očakávané:** DEFORM extrapoluje bez varovania – podrží poslednú hodnotu alebo predĺži posledný sklon – takže pretvárny odpor je tam odhad (napr. tabuľka do 10 s⁻¹ použitá pri 10⁴ s⁻¹ je asi o 8 % nižšia). Porovnajte max. ε, ε̇, T z postprocesora s rozsahom tabuľky.

**Otázka päť:** Ako vstupujú R-hodnoty do Hillovej podmienky 48? A čo predpovedá delta r?

> ✅ **Očakávané:** R-hodnoty pri 0°, 45° a 90° určujú pomery Hillových konštánt (H/G = r₀, H/F = r₀/r₉₀, …). Δr = (r₀ − 2r₄₅ + r₉₀)/2 predpovedá cípatosť ťahaných výťažkov: Δr > 0 → cípy pri 0° a 90°, Δr < 0 → cípy pri 45°.

**Otázka šesť:** Izotropné verzus kinematické spevnenie: čo sa deje s plochou plasticity?

> ✅ **Očakávané:** Izotropné: plocha plasticity rovnomerne rastie okolo pevného stredu (polomer = aktuálny pretvárny odpor). Kinematické: zachová si veľkosť a posúva sa o spätné napätie α → skoré plastické tečenie pri obrátení zaťaženia (Bauschingerov efekt), dôležité pre odpruženie.

**Otázka sedem:** Tepelná kapacita verzus merná tepelná kapacita – čo očakáva DEFORM v jednotkách SI?

> ✅ **Očakávané:** Tepelná kapacita je na objem (ρ·c_p), merná tepelná kapacita na hmotnosť. Predvolené pole DEFORMu očakáva tepelnú kapacitu: oceľ ≈ 7850 kg/m³ × 440 J/(kg·K) ≈ 3,45 N/(mm²·°C) = 3,45 MJ/(m³·K). Ak tam zadáte 460, polotovar sa prakticky nikdy nezohreje.

**Otázka osem:** Ako sa získa konštanta C kritéria Cockcrofta–Lathama?

> ✅ **Očakávané:** Kalibráciou: simuluje sa skúška (pechovanie, ťah, vrubovaná tyč) do deformácie, pri ktorej skutočná vzorka praskla; poškodenie D v mieste trhliny v tom okamihu je C. Závisí od tavby materiálu, čistoty a teploty.

