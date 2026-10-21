# Model Johnson–Cook — hĺbkový pohľad

*Podprezentácia k prednáške 3 „Materiálové údaje v programe DEFORM“ · zvislé snímky 18.1–18.9 pod snímkou 18 (v prezentácii stlačte ↓)*

Hovorený text — asi 29 minút, 9 snímok. Časové údaje sú hodiny:minúty od začiatku hĺbkového pohľadu. Hĺbkový pohľad je nepovinný: v 120-minútovej prednáške ho preskočte alebo ho použite na cvičení či na samostatnom stretnutí. Rovnaký text je v poznámkach prednášajúceho pri každej zvislej snímke (stlačte **S**).

| # | Snímka | Čas |
|---|---|---|
| 18.1 | Pôvod modelu | 0:00–0:03 |
| 18.2 | Tri zátvorky | 0:03–0:07 |
| 18.3 | Publikované konštanty | 0:07–0:10 |
| 18.4 | Kalibrácia krok za krokom | 0:10–0:14 |
| 18.5 | Adiabatický ohrev a väzba | 0:14–0:17 |
| 18.6 | Obmedzenia a modifikované tvary | 0:17–0:20 |
| 18.7 | Model porušenia Johnson–Cook | 0:20–0:23 |
| 18.8 | Kde sa Johnson–Cook používa | 0:23–0:26 |
| 18.9 | Tipy, zhrnutie a otázky | 0:26–0:29 |

---

## Snímka 18.1 — Pôvod modelu  `[JC+0:00–0:03]`

Model Johnson–Cook publikovali v roku 1983 Gordon Johnson a William Cook z firmy Honeywell na Medzinárodnom sympóziu o balistike v Haagu. Ich cieľ bol praktický: model dostatočne jednoduchý na to, aby bežal v explicitných programoch pre náraz – v ich vlastnom programe EPIC – a s konštantami, ktoré sa dajú získať z niekoľkých štandardných skúšok.

Použili skúšky krutom v rozsahu rýchlostí deformácie, statický ťah a ťahové skúšky na Hopkinsonovej tyči pri zvýšených teplotách. Model potom overili Taylorovými nárazovými skúškami valčekov s deformáciami nad dva – skúškami, ktoré sa pri fitovaní nepoužili. O dva roky neskôr publikovali doplnkový model porušenia.

Vpravo: rovnica a päť konštánt. A, B a n pochádzajú z kvázistatických skúšok; C zo skúšok pri vysokej rýchlosti; m zo skúšok pri zvýšenej teplote. K tomu tri referenčné hodnoty: referenčná rýchlosť deformácie, často jedna za sekundu; referenčná teplota; a teplota tavenia.


## Snímka 18.2 — Tri zátvorky  `[JC+0:03–0:07]`

Pozrime sa na každú zátvorku zvlášť. Prvá je jednoducho Ludwikov zákon spevnenia – krivka spevnenia pri referenčnej rýchlosti deformácie a teplote.

Druhá, ľavý graf, je rýchlostný faktor. Je lineárny v logaritme rýchlosti deformácie: pri C rovnom 0,0134 dajú štyri rády rýchlosti deformácie o dvanásť percent vyššie napätie. Dva praktické detaily. Pod referenčnou rýchlosťou je faktor menší ako jedna, preto zvoľte ako referenciu svoju najnižšiu skúšobnú rýchlosť alebo nechajte program hodnotu orezať. A keďže je C konštantné, model nedokáže ukázať prudký nárast pretvárneho odporu, ktorý mnohé kovy vykazujú nad približne tisíc až desaťtisíc za sekundu.

Tretia, pravý graf, je tepelné zmäkčenie: jedna mínus homologická teplota na m. Pri m menšom ako jedna materiál mäkne skoro; pri m väčšom ako jedna si pevnosť udrží dlhšie. Pri teplote tavenia je napätie nulové. Pod referenčnou teplotou je T s hviezdičkou záporné a neceločíselná mocnina záporného čísla nie je definovaná – väčšina programov tam T s hviezdičkou jednoducho nastaví na nulu.


## Snímka 18.3 — Publikované konštanty  `[JC+0:07–0:10]`

Tu sú konštanty z pôvodného článku z roku 1983 a k nim sada pre AISI 1045, ktorú sme použili na hlavnej snímke. Všimnite si rozsahy: A od 90 megapascalov pre žíhanú meď po takmer 800 pre zakalenú oceľ 4340; C medzi 0,006 a 0,06 – vplyv rýchlosti je teda mierny; a m okolo jednej, čo znamená zhruba lineárne zmäkčovanie s teplotou.

Dve varovania. Každá sada patrí jednému stavu materiálu – tepelnému spracovaniu, tvrdosti – a rozsahu skúšok, na ktoré bola nafitovaná. A publikované sady pre tú istú značku sa veľmi líšia; len pre AISI 1045 nájdete v literatúre niekoľko dosť odlišných sád. Preto pred použitím akejkoľvek sady vykreslite krivky spevnenia pri vašej rýchlosti deformácie a teplote a porovnajte ich s údajmi, ktoré máte.


## Snímka 18.4 — Kalibrácia krok za krokom  `[JC+0:10–0:14]`

Kalibrácia postupuje po zátvorkách, a to je veľká výhoda modelu. Prvý krok: A je medza klzu v kvázistatickej skúške pri izbovej teplote. Druhý krok: odpočítajte A, zlogaritmujte a sklon grafu log–log dá n a úsek B.

Tretí krok, graf: pri konštantnej deformácii vydeľte napätie pri každej rýchlosti deformácie napätím pri referenčnej rýchlosti a vyneste ho voči logaritmu rýchlosti deformácie. Sklon je C. So syntetickými kvázistatickými bodmi a bodmi z Hopkinsonovej tyče dá regresia 0,0137.

Štvrtý krok: skúšky pri zvýšenej teplote; logaritmus jednej mínus pomer napätí voči logaritmu T s hviezdičkou dá m.

Piaty krok, kontrola: vzorky na Hopkinsonovej tyči sa adiabaticky ohrievajú, preto tieto krivky najprv korigujte; potom model overte na skúške, ktorú ste na fitovanie nepoužili. Alternatívou je globálny fit všetkých piatich konštánt metódou najmenších štvorcov alebo inverzná MKP – menšia celková chyba, ale stratíte prehľadnosť.


## Snímka 18.5 — Adiabatický ohrev a väzba  `[JC+0:14–0:17]`

Johnson–Cook ukáže svoj skutočný charakter, až keď je zviazaný s teplotou. Pri rýchlej deformácii sa asi deväťdesiat percent plastickej práce premení na teplo – Taylorov–Quinneyho súčiniteľ – a nad približne desať až sto za sekundu teplo nestihne odtiecť. Deformácia je adiabatická.

Graf: AISI 1045 pri desaťtisíc za sekundu. Sivá krivka je izotermická pri 20 stupňoch. Červená zahŕňa nárast teploty z plastickej práce – asi 258 kelvinov pri deformácii jedna – a tepelná zátvorka krivku stiahne nadol. Spevnenie a zmäkčenie súperia; kde vyhrá zmäkčenie, deformácia sa lokalizuje do adiabatických šmykových pásov. To je presne mechanizmus článkovitej triesky pri obrábaní zakalených ocelí a titánu.

Dva dôsledky pre prax: simulácie obrábania a nárazu počítajte ako zviazané termomechanické analýzy s hustotou, mernou tepelnou kapacitou a tepelnou vodivosťou; a nikdy nefitujte Johnsona–Cooka na krivky z Hopkinsonovej tyče, akoby boli izotermické.


## Snímka 18.6 — Obmedzenia a modifikované tvary  `[JC+0:17–0:20]`

Slabiny pochádzajú z tej istej štruktúry, ktorá robí model jednoduchým. Keďže sa zátvorky násobia, citlivosť na rýchlosť je rovnaká pri každej teplote a spevnenie je rovnaké pri každej rýchlosti a teplote. Konštantné C nedokáže zachytiť prudký nárast pretvárneho odporu nad približne desaťtisíc za sekundu. Presnosť klesá pri vysokých teplotách, chýba zotavenie a rekryštalizácia a spevnenie je neohraničené. Pre kovy BCC so silne teplotne závislou medzou klzu je často lepší Zerilli–Armstrong.

Preto vzniklo veľa modifikovaných verzií. Vlastný tvar v DEFORMe pridáva mocninový rýchlostný člen a pružnejšiu teplotnú zátvorku. Lin a spolupracovníci v roku 2010 navrhli verziu s kvadratickým členom spevnenia a exponenciálnym teplotným členom, ktorého sklon závisí od rýchlosti deformácie – tým sa zavedie chýbajúca väzba. Iní pridávajú kvadratický člen v logaritme rýchlosti deformácie, aby zachytili nárast pri vysokých rýchlostiach. Každá modifikácia pridáva konštanty; pôvodný tvar zostáva vo väčšine programov predvolený.


## Snímka 18.7 — Model porušenia Johnson–Cook  `[JC+0:20–0:23]`

Johnson a Cook pridali v roku 1985 model porušenia s rovnakou štruktúrou. Deformácia pri porušení závisí od triaxiality napätia – stredné napätie lomeno efektívne napätie – krát rýchlostná zátvorka a teplotná zátvorka. Poškodenie sa akumuluje ako súčet prírastkov deformácie delených aktuálnou deformáciou pri porušení; keď dosiahne jednotku, prvok zlyhá a zvyčajne sa odstráni.

Graf pre oceľ 4340 s konštantami z roku 1985: deformácia pri porušení prudko klesá s rastúcou triaxialitou – od čistého šmyku pri nule cez jednoosový ťah pri jednej tretine po vrubované tyče s vysokou triaxialitou. Vyššia teplota deformáciu pri porušení zvyšuje.

Konštanty pochádzajú z vrubovaných tyčí s rôznymi polomermi vrubu, zo skúšok krutom, z Hopkinsonovej tyče a zo skúšok za tepla. Model sa používa na oddeľovanie triesky pri obrábaní, pri strihaní a pri balistickej perforácii. Porovnajte ho s normalizovaným kritériom Cockcrofta–Lathama z hlavnej prednášky: Cockcroft–Latham má jednu konštantu; Johnson–Cook päť, ale zachytí rýchlosť a teplotu.


## Snímka 18.8 — Kde sa Johnson–Cook používa  `[JC+0:23–0:26]`

Kde sa Johnson–Cook používa? Predovšetkým pri obrábaní – je to predvolený model pretvárneho odporu vo väčšine simulácií rezania, vrátane DEFORM-3D Machining. Náčrt ukazuje prečo: v primárnej šmykovej zóne dosahujú deformácie jedna až päť pri rýchlostiach deformácie až milión za sekundu a na rozhraní nástroja a triesky stúpne teplota na 800 až 1000 stupňov. V kombinácii s modelom porušenia Johnson–Cook reprodukuje článkovanie triesky.

Potom jeho pôvodná oblasť: náraz, balistika a Taylorove skúšky, kde je v explicitných programoch robustný a lacný. Simulácia nárazu karosárskych konštrukcií, vysokorýchlostné tvárnenie – elektromagnetické, výbuchom a kovanie na bucharoch – a strihanie a dierovanie.

A jeden riadok, kde sa neodporúča: kovanie za tepla nad približne 0,6 teploty tavenia. Tam sú správnymi nástrojmi zákon sinh alebo namerané tabuľky – rekryštalizácia je mimo sveta Johnsona–Cooka.


## Snímka 18.9 — Tipy, zhrnutie a otázky  `[JC+0:26–0:29]`

Niekoľko praktických tipov pre DEFORM. V zozname pretvárneho odporu zvoľte položku Johnson–Cook; pri D a E rovných jednej a alfa rovnom nule sa rozšírený tvar DEFORMu zredukuje na pôvodný. Referenčnú teplotu a teplotu tavenia zadajte v jednotkách vašej úlohy a referenčnú rýchlosť deformácie z publikovanej sady. Počítajte so zviazaným prestupom tepla a krivky si pred výpočtom vykreslite.

Zhrnutie: tri nezávislé zátvorky – spevnenie, rýchlosť, zmäkčenie; päť konštánt z kvázistatických skúšok, z Hopkinsonovej tyče a zo skúšok za tepla; silný v kombinácii s adiabatickým ohrevom – šmykové pásy, triesky, náraz; slabý tam, kde sa teplota a rýchlosť deformácie vzájomne ovplyvňujú – tvárnenie za tepla a veľmi vysoké rýchlosti.

Päť otázok na kontrolu a potom späť hore do hlavnej prednášky, alebo rovno ďalej na Zerilliho–Armstronga – ktorý, ako uvidíte, vznikol práve na to, aby doplnil chýbajúcu väzbu.

> 🗒️ *Klik – zobrazí sa otázka 1; po odpovediach stlačte „odpoveď“.*

**Otázka jedna:** Ktorá skúška dá C a ktorá m?

> ✅ **Očakávané:** C: skúšky pri niekoľkých rýchlostiach deformácie (kvázistatické + SHPB) pri referenčnej teplote – sklon σ/σ_ref voči ln ε̇*. m: skúšky pri zvýšených teplotách pri referenčnej rýchlosti – z ln(1 − σ/σ_ref) voči ln T*.

> 🗒️ *Klik – zobrazí sa otázka 2; po odpovediach stlačte „odpoveď“.*

**Otázka dva:** Čo robí rýchlostná zátvorka pod referenčnou rýchlosťou deformácie a ako sa tomu vyhnete?

> ✅ **Očakávané:** ln ε̇* < 0, takže rýchlostný faktor klesne pod 1 (a pri veľmi nízkych rýchlostiach je záporný) – napätie je podhodnotené. Zvoľte ε̇₀ = najnižšia skúšobná rýchlosť alebo orežte ε̇* ≥ 1.

> 🗒️ *Klik – zobrazí sa otázka 3; po odpovediach stlačte „odpoveď“.*

**Otázka tri:** Prečo treba krivky z Hopkinsonovej tyče pred fitovaním korigovať?

> ✅ **Očakávané:** Pri vysokých rýchlostiach sa ≈ 90 % plastickej práce premení na teplo, ktoré nestihne odtiecť: vzorka sa adiabaticky ohreje až o stovky K, takže krivka nie je izotermická. Bez korekcie by tepelné zmäkčenie skončilo v n, C a m.

> 🗒️ *Klik – zobrazí sa otázka 4; po odpovediach stlačte „odpoveď“.*

**Otázka štyri:** Pomenujte dva fyzikálne javy, ktoré Johnson–Cook nedokáže opísať.

> ✅ **Očakávané:** Ľubovoľné dva z: väzba T a ε̇ (citlivosť na rýchlosť je rovnaká pri každej T); prudký nárast napätia nad ≈ 10⁴ s⁻¹; zotavenie a rekryštalizácia; nasýtenie spevnenia.

> 🗒️ *Klik – zobrazí sa otázka 5; po odpovediach stlačte „odpoveď“.*

**Otázka päť:** Ako mení triaxialita napätia deformáciu pri porušení podľa Johnsona–Cooka?

> ✅ **Očakávané:** Deformácia pri porušení klesá s rastúcou triaxialitou (ε_f ∝ D₁ + D₂·e^D₃η, D₃ < 0): vysoká v šmyku (η = 0), nižšia v jednoosovom ťahu (η = ⅓), najnižšia vo vrubovaných tyčiach.

---

## Zdroje

- Johnson, G. R.; Cook, W. H.: A constitutive model and data for metals subjected to large strains, high strain rates and high temperatures. *Proc. 7th Int. Symp. on Ballistics*, The Hague 1983, 541–547 — tabuľka konštánt, overenie Taylorovou skúškou
- Johnson, G. R.; Cook, W. H.: Fracture characteristics of three metals subjected to various strains, strain rates, temperatures and pressures. *Eng. Fract. Mech.* 21 (1985) 31–48
- Jaspers, S. P. F. C.; Dautzenberg, J. H.: Material behaviour in conditions similar to metal cutting: flow stress in the primary shear zone. *J. Mater. Process. Technol.* 122 (2002) 322–330 — konštanty pre AISI 1045
- Lin, Y. C.; Chen, X. M.; Liu, G.: A modified Johnson–Cook model for tensile behaviors of typical high-strength alloy steel. *Mater. Sci. Eng. A* 527 (2010) 6980–6986
- On the accuracy of the Johnson–Cook constitutive model for metals. *Chin. J. High Press. Phys.* (2019), doi:10.11858/gywlxb.20190721
- Sandia SIERRA/LAME manual: Johnson–Cook failure model (akumulácia poškodenia, definícia triaxiality)
- SFTC: manuál DEFORM V14, kap. 10 Material Data — rozšírený tvar J–C
