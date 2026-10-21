# Model Zerilli–Armstrong — hĺbkový pohľad

*Podprezentácia k prednáške 3 „Materiálové údaje v programe DEFORM“ · zvislé snímky 19.1–19.10 pod snímkou 19 (v prezentácii stlačte ↓)*

Hovorený text — asi 30 minút, 10 snímok. Časové údaje sú hodiny:minúty od začiatku hĺbkového pohľadu. Hĺbkový pohľad je nepovinný: v 120-minútovej prednáške ho preskočte alebo ho použite na cvičení či na samostatnom stretnutí. Rovnaký text je v poznámkach prednášajúceho pri každej zvislej snímke (stlačte **S**).

| # | Snímka | Čas |
|---|---|---|
| 19.1 | Pôvod a motivácia | 0:00–0:02 |
| 19.2 | Fyzikálny základ: tepelná aktivácia | 0:02–0:05 |
| 19.3 | Od Arrhenia k rovnici ZA | 0:05–0:09 |
| 19.4 | Správanie BCC a FCC | 0:09–0:12 |
| 19.5 | Citlivosť na teplotu a rýchlosť deformácie | 0:12–0:15 |
| 19.6 | Konštanty a varianty modelu | 0:15–0:18 |
| 19.7 | Kalibrácia konštánt | 0:18–0:21 |
| 19.8 | Kde sa ZA používa | 0:21–0:24 |
| 19.9 | Obmedzenia a praktické tipy | 0:24–0:27 |
| 19.10 | Zhrnutie ZA a otázky | 0:27–0:30 |

---

## Snímka 19.1 — Pôvod a motivácia  `[ZA+0:00–0:02]`

Táto krátka podprezentácia ide hlbšie do jedného modelu, modelu Zerilli–Armstrong, ktorý som vám pred chvíľou ukázal na jednej snímke. Pôjdeme dole, snímku po snímke, a potom sa vrátime hore k hlavnej línii prednášky.

Model publikovali v roku 1987 Frank Zerilli a Ronald Armstrong, ktorí pracovali pre US Naval Surface Warfare Center. Ich zákazníkmi boli ľudia, ktorí simulovali náraz, prienik pancierom a výbuchové zaťaženie – veľmi vysoké rýchlosti deformácie, široký rozsah teplôt. Model Johnson–Cook sa objavil o štyri roky skôr a bol štandardom. Johnson–Cook je však fit: tri nezávislé zátvorky, rovnaký tvar pre každý kov.

Zerilli a Armstrong si všimli niečo, čo experimenty ukazovali už dlho: železo a meď reagujú inak. V železe závisí od teploty a rýchlosti deformácie silno samotná medza klzu. V medi sa medza klzu takmer nemení – mení sa spevnenie. Namiesto fitovania preto rovnicu odvodili z toho, ako sa pohybujú dislokácie, a tvar nechali zvoliť kryštálovú mriežku.

Tabuľka zhŕňa rozdiel. Zapamätajte si dve kľúčové slová: väzba teploty a rýchlosti deformácie a tvar závislý od mriežky.


## Snímka 19.2 — Fyzikálny základ: tepelná aktivácia  `[ZA+0:02–0:05]`

Tu je fyzika. Pohybujúca sa dislokácia naráža na dva druhy prekážok. Prekážky s dlhým dosahom – napäťové polia iných dislokácií, hranice zŕn – sú široké; tepelné kmitanie atómov nepomôže ich prekonať. Dávajú atermickú časť, sigma G.

Prekážky s krátkym dosahom sú úzke vrcholy: v kovoch BCC Peierlsove kopce samotnej mriežky, v kovoch FCC lesné dislokácie, ktoré musí pohybujúca sa dislokácia pretnúť. Tu tepelné kmitanie pomáha. Pôsobiace napätie zdvihne dislokáciu časť cesty a tepelná fluktuácia urobí zvyšok.

Frekvencia úspešných preskokov sa riadi Arrheniovým zákonom. Z neho vyplývajú dva známe javy. Ak teplota stúpne, tepelné fluktuácie sú silnejšie, takže treba menšie napätie. Ak stúpne rýchlosť deformácie, dislokácia má menej času čakať na šťastnú fluktuáciu, takže treba väčšie napätie. A veľkosť zrna pridáva Hallov–Petchov člen.

Celkový pretvárny odpor je teda atermická časť plus tepelná časť plus Hallov–Petchov člen. Celý model ZA je o tom, ako správne zapísať tepelnú časť.


## Snímka 19.3 — Od Arrhenia k rovnici ZA  `[ZA+0:05–0:09]`

Teraz matematika v štyroch krokoch. Prvý krok: z Arrheniovho zákona Zerilli a Armstrong odvodili, že tepelné napätie klesá s teplotou exponenciálne, s exponentom beta, ktorý sám závisí od logaritmu rýchlosti deformácie. Amplitúda obsahuje Taylorov faktor M, aktivačnú energiu pri absolútnej nule, Burgersov vektor b a aktivačnú plochu A – plochu, ktorú dislokácia opíše počas jednej aktivácie.

Druhý krok, kovy BCC. Prekážkou je samotná mriežka – Peierlsova bariéra – a jej veľkosť sa s deformáciou nemení. A je teda konštantné a tepelný člen nezávisí od deformácie. Deformačné spevnenie sa objaví ako samostatný atermický mocninový člen C5 krát deformácia na n. To je tvar pre BCC.

Tretí krok, kovy FCC. Prekážkami sú lesné dislokácie. Ich hustota rastie s deformáciou lineárne, takže vzdialenosť medzi nimi – aj aktivačná plocha – klesá s odmocninou deformácie. Dosaďte A úmerné deformácii na mínus jednu polovicu do prvého kroku a dostanete tvar pre FCC: odmocnina deformácie násobená exponenciálou. Deformácia a teplota sú teraz zviazané v jednom člene.

Štvrtý krok: C0 zhŕňa atermické napätie a Hallov–Petchov člen pre veľkosť zrna. Vpravo je význam a jednotka každej konštanty. Zapamätajte si posledný riadok: teplota v kelvinoch, rýchlosť deformácie za sekundu.

> **Otázka pre študentov:** Prečo tvar pre FCC násobí ε^½ exponenciálou, kým tvar pre BCC ich sčítava?


## Snímka 19.4 — Správanie BCC a FCC  `[ZA+0:09–0:12]`

Tu je rozdiel viditeľný. Oba grafy sú vypočítané z konštánt z roku 1987 pri rýchlosti deformácie tisíc za sekundu, pre 77, 296 a 600 kelvinov.

Vľavo železo Armco, BCC. Tri krivky sú rovnobežné: teplota posunie celú krivku nahor alebo nadol o rovnakú hodnotu, pretože pôsobí na medzu klzu. Pri teplote kvapalného dusíka má železo viac ako dvojnásobnú medzu klzu oproti izbovej teplote.

Vpravo meď OFHC, FCC. Všetky krivky začínajú pri takmer rovnakej medzi klzu a potom sa rozbiehajú: pri nízkej teplote sa meď spevňuje rýchlejšie. Teplota pôsobí na sklon spevnenia, nie na medzu klzu.

Praktické dôsledky: feritické ocele sú pri nízkych teplotách krehké a silno citlivé na rýchlosť; austenitické ocele, meď a hliník nie. Hexagonálne kovy ako titán a horčík vykazujú obe vlastnosti, preto sa pre ne neskôr navrhol kombinovaný tvar s oboma exponenciálnymi členmi.

> **Otázka pre študentov:** Feritická a austenitická oceľ sa skúšajú nárazom pri −40 °C. Ktorej sa medza klzu zmení viac?


## Snímka 19.5 — Citlivosť na teplotu a rýchlosť deformácie  `[ZA+0:12–0:15]`

Dva pohľady na citlivosti. Vľavo železo pri deformácii 20 percent: sivá plocha je atermická – deformačné spevnenie a veľkosť zrna – a s teplotou sa nemení. Červená plocha je tepelná časť; pri izbovej teplote a vysokej rýchlosti tvorí asi dve tretiny celku a nad 800 kelvinmi takmer zmizne.

Vpravo vplyv rýchlosti deformácie pri deformácii 20 percent. Od desať na mínus tretiu po desať na štvrtú za sekundu získa železo pri izbovej teplote asi 350 megapascalov, meď len asi 100.

Derivácia dole vysvetľuje tento obraz: citlivosť na rýchlosť je C4 krát T krát tepelné napätie. Pri veľmi nízkej teplote je T malé; pri vysokej teplote je malé tepelné napätie; niekde medzi je citlivosť na rýchlosť najväčšia. Johnson–Cook so svojím konštantným C to ukázať nedokáže – a práve preto ZA opisuje kovy BCC pri vysokých rýchlostiach lepšie.


## Snímka 19.6 — Konštanty a varianty modelu  `[ZA+0:15–0:18]`

Tu sú skutočné konštanty. Pre meď OFHC uvádza pôvodný článok C2 rovné 890 megapascalov, C3 rovné 0,0028 a C4 rovné 1,15 krát desať na mínus štvrtú. C0 je asi 65 megapascalov, zložené z atermických 46,5 plus Hallovho–Petchovho člena pre veľkosť zrna 73 mikrometrov. Pre železo Armco je C1 rovné 1033, C3 asi 0,007, C4 asi 4 krát desať na mínus štvrtú a atermické spevnenie 266 krát deformácia na 0,29. Tantal, používaný na výbuchom formované projektily, má podobnú sadu pre BCC.

DEFORM ponúka tvar pre BCC priamo v rozbaľovacom zozname pretvárneho odporu – presne výraz, ktorý tu vidíte.

Vpravo je modifikovaný model ZA podľa Samantaraya, Mandala a Bhaduriho z roku 2009. Bol vyvinutý pre deformáciu za tepla a nafitovaný na tlakové údaje z Gleeble. Viaže deformáciu do teplotného člena a teplotu do rýchlostného člena. Údaje ocelí za tepla fituje dobre – korelácia okolo 0,995 pre titánom modifikovanú austenitickú nehrdzavejúcu oceľ – ale všimnite si, že stratil dislokačnú interpretáciu; je to poloempirický fit so štruktúrou podobnou ZA.

Model je dostupný v DEFORMe, v LS-DYNA, v explicitných programoch Ansys a cez používateľské podprogramy v Abaqus.


## Snímka 19.7 — Kalibrácia konštánt  `[ZA+0:18–0:21]`

Ako získate konštanty? Najprv matica skúšok: kvázistatické skúšky a skúšky na Hopkinsonovej tyči pri niekoľkých teplotách – od kvapalného dusíka po približne polovicu teploty tavenia.

Po druhé atermická časť: exponent deformačného spevnenia a C5 pochádzajú z prírastkov spevnenia v grafe log–log; C0 z veľkosti zrna alebo z plató pri vysokej teplote, kde tepelná časť zmizla.

Po tretie – kľúčový trik – zlogaritmujte, čo zostane. Logaritmus tepelného napätia je lineárny v teplote, s úsekom ln C1 a sklonom, ktorý závisí od rýchlosti deformácie. Graf ukazuje tieto priamky pre tri rýchlosti deformácie so syntetickými skúšobnými bodmi rozptýlenými okolo nich.

Po štvrté vyneste sklony voči logaritmu rýchlosti deformácie: úsek dá C3, sklon C4. Napokon fit overte mierou chyby a ideálne simuláciou nezávislej skúšky. Varovanie: pri rýchlostiach Hopkinsonovej tyče sa vzorka adiabaticky ohrieva, takže nameraná krivka nie je izotermická – pred fitovaním to korigujte.


## Snímka 19.8 — Kde sa ZA používa  `[ZA+0:21–0:24]`

Kde sa model používa? Prvý riadok je to, ako bol overený: Taylorova nárazová skúška. Valček sa vystrelí na tuhú kovadlinu rýchlosťou 100 až 300 metrov za sekundu; skráti sa a vytvorí hríbovitý tvar. Jedna skúška pokryje celý rozsah deformácií, rýchlostí deformácie a teplôt, takže porovnanie konečného tvaru so simuláciou MKP overí model naraz. Zerilli a Armstrong to presne takto urobili pre meď a železo.

Potom obranné aplikácie – balistické penetrátory a výbuchom formované projektily zo železa, tantalu alebo volfrámu, všetko kovy BCC so silným vplyvom rýchlosti.

Pre náš odbor sú najdôležitejšie vysokorýchlostné obrábanie, kde štúdie porovnávali ZA a Johnsona–Cooka pri tvorbe triesky v oceliach, a vysokorýchlostné tvárnenie – elektromagnetické tvárnenie, tvárnenie výbuchom, kovanie feritických materiálov na bucharoch. Tiež pechovanie za studena a simulácia nárazu, kde záleží na rozdiele medzi BCC a FCC.

Napokon kovanie a valcovanie za tepla, ale len cez modifikovaný ZA, použitý ako poloempirický fit tlakových údajov za tepla.


## Snímka 19.9 — Obmedzenia a praktické tipy  `[ZA+0:24–0:27]`

Žiadny model nie je univerzálny. ZA je fyzikálne podložený len pod približne polovicou teploty tavenia: chýba dynamické zotavenie, rekryštalizácia aj fázová premena. V tvare pre BCC je deformačné spevnenie atermické, takže pri vysokej teplote spevnenie nadhodnocuje. A nad približne desaťtisíc za sekundu preberá úlohu iný mechanizmus – viskózny odpor pohybu dislokácií.

Nezávislé porovnanie Banerjeeho pre meď ukázalo, že ZA je veľmi dobrý pre Taylorove skúšky pri izbovej teplote – najjednoduchšia presná možnosť – ale nadhodnocuje teplotnú závislosť pri vysokých rýchlostiach a dáva väčšie chyby blízko 1200 kelvinov.

Pre DEFORM: v zozname pretvárneho odporu zvoľte položku ZA a zadajte konštanty. Publikované konštanty predpokladajú teplotu v kelvinoch a napätie v megapascaloch – pred zadaním skontrolujte sústavu jednotiek vašej úlohy. Počítajte so zviazaným tepelným výpočtom, pretože adiabatický ohrev je pri vysokých rýchlostiach veľkou časťou fyziky. Vykreslite krivky v okne Material a porovnajte ich so skúšobnými údajmi. A pre tvárnenie za tepla nad približne 0,6 teploty tavenia použite namiesto toho tabuľkové údaje alebo sinh-Arrhenius.


## Snímka 19.10 — Zhrnutie ZA a otázky  `[ZA+0:27–0:30]`

Na uzavretie hĺbkového pohľadu päť bodov. Model je odvodený z tepelne aktivovaného pohybu dislokácií. Jeho exponenciálny člen viaže teplotu a rýchlosť deformácie. Tvar určuje mriežka: BCC – citlivá je medza klzu; FCC – citlivé je spevnenie; HCP – oboje. Je to správna voľba pre vysoké rýchlosti deformácie pod približne polovicou teploty tavenia: náraz, obrábanie, vysokorýchlostné tvárnenie. Pre tvárnenie za tepla existuje modifikovaná, poloempirická verzia a DEFORM má zabudovaný tvar pre BCC.

Štyri otázky na kontrolu – budem ich odkrývať jednu po druhej. Potom sa vrátime hore do hlavnej prednášky a pokračujeme modelmi pre tvárnenie za tepla.

> 🗒️ *Klik – zobrazí sa otázka 1; po odpovediach stlačte „odpoveď“.*

**Otázka jedna:** Čo je aktivačná plocha a ako sa líši medzi kovmi BCC a FCC?

> ✅ **Očakávané:** Plocha, ktorú dislokácia opíše pri jednom tepelne aktivovanom preskoku. BCC: prekážkou je Peierlsova bariéra mriežky → konštantná. FCC: prekážkami sú lesné dislokácie → A ∝ ε̄^−½, s deformáciou sa zmenšuje.

> 🗒️ *Klik – zobrazí sa otázka 2; po odpovediach stlačte „odpoveď“.*

**Otázka dva:** Ktorá konštanta viaže teplotu a rýchlosť deformácie?

> ✅ **Očakávané:** C₄ – v člene e^−C₃T + C₄T ln ε̇.

> 🗒️ *Klik – zobrazí sa otázka 3; po odpovediach stlačte „odpoveď“.*

**Otázka tri:** Prečo je Zerilli–Armstrong lepší ako Johnson–Cook pre železo pri tisíc za sekundu a mínus 50 stupňoch?

> ✅ **Očakávané:** Železo je BCC: jeho medza klzu závisí silno a súčasne od T aj ε̇ (Peierlsov mechanizmus). ZA ich viaže cez C₄·T; J–C má konštantné C a nezávislé zátvorky a pod referenčnou teplotou je T* < 0.

> 🗒️ *Klik – zobrazí sa otázka 4; po odpovediach stlačte „odpoveď“.*

**Otázka štyri:** Prečo by ste nemali použiť pôvodný model Zerilli–Armstrong pre kovanie pri 1150 stupňoch?

> ✅ **Očakávané:** Pri 1150 °C je oceľ pri ≈ 0,8 T_m: rozhoduje difúziou riadené tečenie, dynamické zotavenie a rekryštalizácia a austenit – nič z toho v ZA nie je a atermické spevnenie je nadhodnotené. Použite tabuľku, zákon sinh alebo modifikovaný ZA.

---

## Zdroje

- Zerilli, F. J.; Armstrong, R. W.: Dislocation-mechanics-based constitutive relations for material dynamics calculations. *J. Appl. Phys.* 61 (1987) 1816–1825. doi:10.1063/1.338024
- Banerjee, B.: An evaluation of plastic flow stress models for the simulation of high-temperature and high-strain-rate deformation of metals. arXiv:cond-mat/0512466 (2005) — konštanty ZA pre meď OFHC, porovnanie Taylorovou skúškou s J–C, MTS, PTW
- Samantaray, D.; Mandal, S.; Bhaduri, A. K.: A comparative study on Johnson Cook, modified Zerilli–Armstrong and Arrhenius-type constitutive models … modified 9Cr–1Mo steel. *Comput. Mater. Sci.* 47 (2009) 568–576
- Improved modified ZA model for Ti55531 — postup fitovania a presnosť MZA (PMC11006685, 2024)
- Experimental results and constitutive modelling for tungsten and tantalum at high strain rates and very high temperatures, arXiv:1105.5514 — sady konštánt ZA pre Ta a W
- Halle, T.; Meyer, L. W.: Influence of different material models on the result of numerical high speed cutting simulations. 1st Int. Conf. High Speed Forming, Dortmund 2004 — J–C verzus ZA pri ortogonálnom rezaní
- Ansys Explicit Dynamics help: Zerilli–Armstrong strength model; LS-DYNA Keyword Manual: *MAT_MODIFIED_ZERILLI_ARMSTRONG
- SFTC: manuál DEFORM V14, kap. 10 Material Data — zoznam modelov pretvárneho odporu
