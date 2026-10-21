# Zenerov–Hollomonov parameter a zákon sinh-Arrhenius — hĺbkový pohľad

*Podprezentácia k prednáške 3 „Materiálové údaje v programe DEFORM“ · zvislé snímky 20.1–20.10 pod snímkou 20 (v prezentácii stlačte ↓)*

Hovorený text — asi 32 minút, 10 snímok. Časové údaje sú hodiny:minúty od začiatku hĺbkového pohľadu. Hĺbkový pohľad je nepovinný: v 120-minútovej prednáške ho preskočte alebo ho použite na cvičení či na samostatnom stretnutí. Rovnaký text je v poznámkach prednášajúceho pri každej zvislej snímke (stlačte **S**).

| # | Snímka | Čas |
|---|---|---|
| 20.1 | Pôvod a myšlienka parametra Z | 0:00–0:03 |
| 20.2 | Fyzikálny základ a aktivačná energia | 0:03–0:06 |
| 20.3 | Mocninový, exponenciálny a sinh zákon | 0:06–0:09 |
| 20.4 | Matematika zákona sinh | 0:09–0:12 |
| 20.5 | Kalibrácia α, n, Q a A | 0:12–0:16 |
| 20.6 | Kompenzácia deformácie a krivky s DRX | 0:16–0:19 |
| 20.7 | Z riadi mikroštruktúru | 0:19–0:22 |
| 20.8 | Príbuzné zákony a vstup do DEFORMu | 0:22–0:25 |
| 20.9 | Kde sa Z a zákon sinh používajú | 0:25–0:28 |
| 20.10 | Obmedzenia, zhrnutie a otázky | 0:28–0:32 |

---

## Snímka 20.1 — Pôvod a myšlienka parametra Z  `[ZH+0:00–0:03]`

Tento hĺbkový pohľad je o najpoužívanejšej myšlienke tvárnenia za tepla: o Zenerovom–Hollomonovom parametri a o zákone hyperbolického sínusu, ktorý je na ňom postavený.

V roku 1944 publikovali Clarence Zener a John Hollomon štúdiu o vplyve rýchlosti deformácie na plastické tečenie ocele. Ich kľúčové pozorovanie: zvýšenie rýchlosti deformácie má na pretvárny odpor rovnaký účinok ako zníženie teploty. Obe veličiny sa preto dajú spojiť do jednej premennej – teplotne kompenzovanej rýchlosti deformácie Z: rýchlosť deformácie krát exp Q lomeno RT. Z má jednotku rýchlosti deformácie a teplota musí byť absolútna.

Pozrite sa na čísla pre uhlíkovo-mangánovú oceľ. Pri 1000 stupňoch a jednej za sekundu je Z asi 6,3 krát desať na dvanástu. Pri 900 stupňoch a desiatich za sekundu je viac ako stokrát vyššie – 7,8 krát desať na štrnástu; pri 1200 stupňoch a 0,01 za sekundu asi desaťtisíckrát nižšie.

Graf ukazuje čiary konštantného Z v rovine teplota – rýchlosť deformácie. Každý bod na jednej čiare dáva rovnaký pretvárny odpor a podobnú rekryštalizovanú veľkosť zrna. To je veľmi praktické: pomalá laboratórna skúška pri vyššej teplote môže zastupovať rýchly priemyselný lis pri nižšej teplote.


## Snímka 20.2 — Fyzikálny základ a aktivačná energia  `[ZH+0:03–0:06]`

Prečo by sa deformácia za tepla mala vôbec riadiť Arrheniovým zákonom? Nad približne polovicou teploty tavenia dislokácie už len nekĺžu. Šplhajú a priečne kĺžu okolo prekážok a šplhanie potrebuje difúziu vakancií. Difúzia je tepelne aktivovaný proces s vlastným Arrheniovým členom, takže ho rýchlosť deformácie zdedí. V tomto zmysle je tvárnenie za tepla vysokoteplotné tečenie, len miliónkrát rýchlejšie.

Zároveň sa dislokácie množia – spevnenie – a odstraňujú ich dynamické zotavenie a dynamická rekryštalizácia – zmäkčenie. Keď sú oba procesy v rovnováhe, dosiahneme ustálené napätie a ustálené napätie je funkciou len parametra Z.

Tabuľka uvádza typické zdanlivé aktivačné energie. Pre čistý hliník je blízko aktivačnej energie samodifúzie, asi 142 kilojoulov na mól. Legovanie, rozpustené prvky a častice zdanlivú hodnotu zvyšujú: 260 až 320 pre uhlíkové a nízkolegované ocele, 400 až 460 pre austenitické nehrdzavejúce ocele. Titánová zliatina Ti-6Al-4V vykazuje asi 246 v oblasti beta, ale viac ako 600 v dvojfázovej oblasti, pretože sa s teplotou mení pomer fáz. Veľmi vysoké zdanlivé Q je varovaním, že sa mení samotná mikroštruktúra.


## Snímka 20.3 — Mocninový, exponenciálny a sinh zákon  `[ZH+0:06–0:09]`

Historicky sa používali dva zákony. Pri nízkych napätiach – podmienky tečenia – je Z úmerné napätiu na mocninu n s čiarkou. Pri vysokých napätiach – rýchle tvárnenie za tepla – rastie Z s napätím exponenciálne. Každý funguje vo svojej oblasti a v tej druhej zlyháva; prechod je v literatúre o tečení známy ako zlyhanie mocninového zákona.

Garofalo v roku 1963 a potom Sellars a Tegart v roku 1966 pre tvárnenie za tepla navrhli hyperbolický sínus. Pre malé argumenty je sinh x približne x, takže zákon prejde na mocninový. Pre veľké argumenty je sinh x približne e na x lomeno dva, takže prejde na exponenciálny. Graf to ukazuje s jednou sadou konštánt: červená krivka sinh sleduje modrý mocninový zákon pri nízkom napätí a oranžovú exponenciálu pri vysokom napätí a v sivom páse sa prepne.

Konštanty: n medzi približne 3 a 6, alfa – násobiteľ napätia – okolo 0,01 na megapascal pre ocele a viac pre hliníkové zliatiny. Alfa sa zvyčajne berie ako beta delené n s čiarkou, čo už napovedá, ako sa meria.


## Snímka 20.4 — Matematika zákona sinh  `[ZH+0:09–0:12]`

Matematika v troch riadkoch. Po prvé inverzia: argument hyperbolického sínusu zapísaný logaritmom dá pretvárny odpor priamo ako funkciu Z. Tento vzorec vyhodnocujú programy MKP v každom integračnom bode.

Po druhé, derivácia podľa logaritmu rýchlosti deformácie dá citlivosť na rýchlosť m: tangens hyperbolický z alfa sigma delený n krát alfa sigma. Pri nízkom napätí sa blíži k jednej lomeno n – hodnota pre tečenie, okolo 0,2. Pri vysokom napätí klesá k nule. Graf to ukazuje pre tri hodnoty n.

Po tretie, citlivosť na teplotu vyplýva z tej istej derivácie vynásobenej Q lomeno R T na druhú. Pre našu oceľ pri 1000 stupňoch a jednej za sekundu je alfa sigma 1,32, m asi 0,15 a ochladenie len o desať kelvinov zvýši pretvárny odpor asi o tri percentá. Preto je ochladenie povrchu zápustkou pri kovaní za tepla také dôležité.

> **Otázka pre študentov:** Ak m = 0,15, o koľko stúpne pretvárny odpor, keď sa rýchlosť deformácie zvýši desaťnásobne?


## Snímka 20.5 — Kalibrácia α, n, Q a A  `[ZH+0:12–0:16]`

Ako sa určia štyri konštanty? Začnite tlakovými skúškami za tepla, typicky na Gleeble: štyri až šesť teplôt a štyri rýchlosti deformácie. Z každej krivky vezmite maximálne napätie alebo ustálené napätie.

Druhý krok: vyneste logaritmus rýchlosti deformácie voči logaritmu napätia – sklon dá n s čiarkou – a voči samotnému napätiu – sklon dá beta. Alfa je beta lomeno n s čiarkou.

Tretí krok: zlogaritmujte zákon sinh. Graf ln sinh alfa sigma voči ln rýchlosti deformácie dá rovnobežné priamky, jednu pre každú teplotu – graf. Sklon je jedna lomeno n.

Štvrtý krok: zvislé vzdialenosti medzi týmito priamkami pochádzajú od teploty. Vyneste ln sinh voči jednej lomeno T pri konštantnej rýchlosti deformácie; sklon krát n krát R je aktivačná energia Q. Piaty krok: úsek dá A.

Pod rámčekmi je publikovaný príklad pre oceľ 30CrMoA: alfa 0,011, n 4,4, Q 262 kilojoulov na mól, s koreláciou 0,98. To je štandardný postup – nájdete ho v stovkách článkov.


## Snímka 20.6 — Kompenzácia deformácie a krivky s DRX  `[ZH+0:16–0:19]`

Zákon sinh dá jedno číslo – maximálne alebo ustálené napätie. MKP potrebuje celú krivku. Bežné sú dva prístupy.

Prvý je čisto matematický: Arrheniov model s kompenzáciou deformácie. Kalibráciu zopakujete pri mnohých deformáciách – povedzme každých 0,05 od 0,05 do 0,8 – a každú konštantu, alfa, n, Q a ln A, nafitujete polynómom v deformácii. Lin a spolupracovníci to v roku 2008 spopularizovali pre oceľ 42CrMo a fit má typicky chybu tri až šesť percent. Cena: dvadsať až tridsať koeficientov bez fyzikálneho významu a nezmysly mimo nafitovaného rozsahu deformácie.

Druhý prístup využíva fyziku: graf ukazuje typický tvar. Krivka stúpa k maximu, pri kritickej deformácii, asi 0,8 deformácie v maxime, začne dynamická rekryštalizácia a napätie klesne na ustálenú hodnotu. Čím vyššie Z, tým vyššie a neskoršie maximum. Tieto krivky sú ilustračné, ale trendy sú presne tie, ktoré používajú mikroštruktúrne modely v DEFORMe.


## Snímka 20.7 — Z riadi mikroštruktúru  `[ZH+0:19–0:22]`

Z nie je len o napätí. Riadi mikroštruktúru. Veľkosť dynamicky rekryštalizovaného zrna sa riadi mocninovým zákonom v Z s malým záporným exponentom, typicky 0,1 až 0,3. Vysoká teplota a pomalé tvárnenie – nízke Z – dajú hrubé zrno; nízka teplota a rýchle tvárnenie – vysoké Z – jemné zrno. Preto sa posledná operácia kovania často robí chladnejšie a rýchlejšie. Tieto rovnice sú tie v údajoch Grain v DEFORMe, s ktorými sa znovu stretneme v bloku 8.

Z je aj základom procesných máp. V Prasadovom dynamickom materiálovom modeli sa citlivosť na rýchlosť deformácie m – ktorú sme práve odvodili zo zákona sinh – premení na účinnosť disipácie výkonu, dva m lomeno m plus jedna. Oblasti s vysokou účinnosťou, okolo 30 až 55 percent, zvyčajne zodpovedajú dynamickej rekryštalizácii – bezpečné okno. Kde je parameter nestability záporný, materiál má sklon tvoriť šmykové pásy alebo trhliny. Technológovia používajú tieto mapy na voľbu kovacej teploty a rýchlosti.


## Snímka 20.8 — Príbuzné zákony a vstup do DEFORMu  `[ZH+0:22–0:25]`

Dvaja príbuzní, s ktorými sa stretnete v iných programoch. Norton–Hoff je viskoplastický mocninový zákon – napätie úmerné rýchlosti deformácie na m, s konzistenciou K, ktorá závisí od teploty a deformácie. Je základom programu FORGE. Hensel–Spittel je dlhý empirický súčin teplotného, deformačného a rýchlostného člena – až deväť exponentov – používaný v knižniciach FORGE, QForm a Simufact. Nemá Z, ale fituje sa na rovnaké tlakové údaje za tepla.

V DEFORMe obsahuje zoznam pretvárneho odporu zákon sinh aj mocninový zákon presne tak, ako ich vidíte vpravo, s aktivačnou energiou zapísanou ako delta H a s absolútnou teplotou. Pred zadaním publikovaných hodnôt skontrolujte, aké jednotky DEFORM vo vašej sústave jednotiek očakáva pre delta H a R.

Praktická alternatíva, ktorú mnohí inžinieri uprednostňujú: zákon vyhodnoťte v tabuľkovom procesore alebo v Pythone a výsledok zadajte ako tabuľku pretvárneho odporu v závislosti od deformácie, rýchlosti deformácie a teploty. Vidíte čísla, pri malých deformáciách môžete pridať spevnenie a krivky si pred výpočtom vykreslíte v okne Material.


## Snímka 20.9 — Kde sa Z a zákon sinh používajú  `[ZH+0:25–0:28]`

Kde sa toto všetko používa? Prakticky všade nad polovicou teploty tavenia. Pri zápustkovom kovaní za tepla dáva zákon sinh pretvárny odpor pre zaplnenie zápustky a silu lisu a Z vstupuje do predpovede veľkosti zrna. Pri valcovaní za tepla dáva stredný pretvárny odpor každého úberu a Z rozhoduje, nakoľko materiál medzi úbermi rekryštalizuje.

Pretláčanie hliníka je klasická aplikácia: model sinh podľa Shepparda a Wrighta je štandardom už desaťročia a používa sa na predpoveď výstupnej teploty a maximálnej rýchlosti pretláčania pred vznikom povrchových trhlín.

Pri izotermickom kovaní titánových a niklových zliatin sú rýchlosti deformácie nízke, blízko oblasti tečenia, a záleží na citlivosti na rýchlosť zo zákona sinh. A pri návrhu procesu umožňuje myšlienka rovnakého Z prenášať laboratórne výsledky na lis a procesné mapy pomáhajú zvoliť bezpečné okno.

Obrázky ukazujú dve typické aplikácie DEFORMu: postup kovania disku za tepla a valcovanie krúžkov, kde sa teplota a rýchlosť deformácie – a teda Z – plynule menia pozdĺž valcovacej medzery.


## Snímka 20.10 — Obmedzenia, zhrnutie a otázky  `[ZH+0:28–0:32]`

Napokon obmedzenia. Zákon sinh opisuje ustálené alebo maximálne napätie; pre celú krivku potrebujete kompenzáciu deformácie alebo model rekryštalizácie. Konštanty platia len v odskúšanom okne a fázová premena – ferit na austenit, alfa na beta v titáne – mení aktivačnú energiu, takže cez ňu nefitujte. Nie je to model pre tvárnenie za studena ani za poloohrevu. A pri vysokých rýchlostiach deformácie sa skúšobná vzorka ohrieva, takže údaje pred fitovaním korigujte.

Zhrnutie v štyroch bodoch: Z spája teplotu a rýchlosť deformácie do jedného parametra s absolútnou teplotou. Jeho fyzikou je tepelne aktivované, difúziou riadené tečenie. Zákon sinh spája mocninový a exponenciálny zákon a dá sa invertovať na pretvárny odpor v uzavretom tvare. A Z určuje aj rekryštalizovanú veľkosť zrna a bezpečné procesné okná.

Na záver päť otázok. Na prvú si vezmite kalkulačky: vyjde približne 1,3 krát desať na dvanástu. Potom sa vrátime hore do hlavnej prednášky.

> 🗒️ *Klik – zobrazí sa otázka 1; po odpovediach stlačte „odpoveď“.*

**Otázka jedna:** Vypočítajte Z pre 1100 stupňov, 5 za sekundu a aktivačnú energiu 300 kilojoulov na mól.

> ✅ **Očakávané:** T = 1373 K, Q/RT = 300 000 / (8,314 · 1373) ≈ 26,3 → Z = 5 · e^26,3 ≈ 1,3·10¹² s⁻¹.

> 🗒️ *Klik – zobrazí sa otázka 2; po odpovediach stlačte „odpoveď“.*

**Otázka dva:** Prečo zákon sinh funguje pri nízkych aj pri vysokých napätiach?

> ✅ **Očakávané:** sinh x ≈ x pre malé x → mocninový zákon (oblasť tečenia); sinh x ≈ eˣ/2 pre veľké x → exponenciálny zákon (zlyhanie mocninového zákona). Jeden vzorec pokryje oboje.

> 🗒️ *Klik – zobrazí sa otázka 3; po odpovediach stlačte „odpoveď“.*

**Otázka tri:** Ktorý graf dá n a ktorý Q?

> ✅ **Očakávané:** n: ln ε̇ voči ln sinh(ασ) pri konštantnej T (sklon = n). Q: ln sinh(ασ) voči 1/T pri konštantnej ε̇ – Q = R · n · sklon.

> 🗒️ *Klik – zobrazí sa otázka 4; po odpovediach stlačte „odpoveď“.*

**Otázka štyri:** Výkovok má mať jemnejšie zrno. Zvýšite alebo znížite Z – a ako v praxi?

> ✅ **Očakávané:** Zvýšiť Z: nižšia teplota a / alebo vyššia rýchlosť deformácie – chladnejší, rýchlejší posledný úder. d_DRX ∝ Z^−(0,1…0,3).

> 🗒️ *Klik – zobrazí sa otázka 5; po odpovediach stlačte „odpoveď“.*

**Otázka päť:** Prečo je model s kompenzáciou deformácie riskantný nad deformáciou 0,8?

> ✅ **Očakávané:** α, n, Q a ln A sú polynómy nafitované len do ε = 0,8; mimo tohto rozsahu polynómy divergujú a dávajú nezmysly, pričom deformácie pri kovaní (výronok, rohy) ho ľahko prekročia.

---

## Zdroje

- Zener, C.; Hollomon, J. H.: Effect of strain rate upon plastic flow of steel. *J. Appl. Phys.* 15 (1944) 22–32
- Garofalo, F.: An empirical relation defining the stress dependence of minimum creep rate in metals. *Trans. AIME* 227 (1963) 351
- Sellars, C. M.; McG. Tegart, W. J.: La relation entre la résistance et la structure dans la déformation à chaud. *Mém. Sci. Rev. Métall.* 63 (1966) 731
- Zhang et al.: Constitutive model of 30CrMoA steel (strain-compensated Arrhenius). *Metals* 10 (2020) 1214 — postup kalibrácie, α = 0,011 MPa⁻¹, n = 4,40, Q = 262 kJ/mol
- Lin, Y. C.; Chen, M. S.; Zhong, J.: Constitutive modeling for elevated temperature flow behavior of 42CrMo steel. *Comput. Mater. Sci.* 42 (2008) 470 — kompenzácia deformácie
- Hot deformation characteristics of Ti-6Al-4V (CityU Scholars) — Q ≈ 246 kJ/mol (β), ≈ 621 kJ/mol (α+β)
- Prasad, Y. V. R. K. a kol.: procesné mapy / dynamický materiálový model; DRX v hliníku (IAS repository) — η = 2m/(m+1)
- Sheppard, T.; Wright, D. S.: Determination of flow stress, parts 1–2. *Metals Technology* 6 (1979) — zákon sinh pri pretláčaní hliníka
- SFTC: manuál DEFORM V14, kap. 10 Material Data — zoznam modelov pretvárneho odporu
