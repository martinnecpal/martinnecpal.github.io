# Mocninový zákon a zákony spevnenia — hĺbkový pohľad

*Podprezentácia k prednáške 3 „Materiálové údaje v programe DEFORM“ · zvislé snímky 17.1–17.8 pod snímkou 17 (v prezentácii stlačte ↓)*

Hovorený text — asi 25 minút, 8 snímok. Časové údaje sú hodiny:minúty od začiatku hĺbkového pohľadu. Hĺbkový pohľad je nepovinný: v 120-minútovej prednáške ho preskočte alebo ho použite na cvičení či na samostatnom stretnutí. Rovnaký text je v poznámkach prednášajúceho pri každej zvislej snímke (stlačte **S**).

| # | Snímka | Čas |
|---|---|---|
| 17.1 | Rodina zákonov spevnenia | 0:00–0:03 |
| 17.2 | Význam n: Considèrovo kritérium | 0:03–0:06 |
| 17.3 | Určenie K a n | 0:06–0:09 |
| 17.4 | Exponent citlivosti na rýchlosť m | 0:09–0:12 |
| 17.5 | Pasca extrapolácie | 0:12–0:16 |
| 17.6 | Teplotná závislosť | 0:16–0:19 |
| 17.7 | Kde sa mocninový zákon používa | 0:19–0:22 |
| 17.8 | Obmedzenia, zhrnutie a otázky | 0:22–0:25 |

---

## Snímka 17.1 — Rodina zákonov spevnenia  `[PL+0:00–0:03]`

Mocninový zákon je najjednoduchší model pretvárneho odporu v DEFORMe, preto sa oplatí vedieť, odkiaľ pochádza a akých má príbuzných. Táto krátka podprezentácia sa venuje rodine zákonov spevnenia, významu n a m, ich meraniu a jednej veľkej pasci – extrapolácii.

Ludwik v roku 1909 navrhol počiatočnú medzu klzu plus mocninu deformácie. Hollomon v roku 1945 počiatočnú medzu klzu vynechal – známe K krát epsilon na n, z ktorého pochádza n-hodnota plechov. Swift v roku 1952 pridal počiatočnú deformáciu epsilon nula, takže napätie pri nulovej deformácii nie je nulové. Voce v roku 1948 išiel inou cestou: exponenciálnym priblížením k napätiu nasýtenia.

Prvé tri rastú bez obmedzenia; Voce sa nasýti. Tento rozdiel bude veľmi dôležitý na piatej snímke.

Mocninový zákon v DEFORMe je Ludwikov tvar s pridaným rýchlostným členom: c krát deformácia na n krát rýchlosť deformácie na m, plus y. Pamätajte, že všetky tieto zákony sú empirické fity tvaru krivky – žiadny z nich nie je odvodený z teórie dislokácií.


## Snímka 17.2 — Význam n: Considèrovo kritérium  `[PL+0:03–0:06]`

Čo vlastne n znamená? Zderivujte Hollomonov zákon: rýchlosť spevnenia je n krát napätie lomeno deformácia. Exponent n teda hovorí, ako silno sa materiál spevňuje v pomere k aktuálnemu napätiu.

Teraz skúška ťahom. Sila je napätie krát aktuálny prierez. Keď sa vzorka predlžuje, prierez klesá a napätie rastie. Sila dosiahne maximum – a začne sa tvoriť krčok – keď rýchlosť spevnenia klesne na hodnotu samotného napätia. To je Considèrovo kritérium. Dosaďte Hollomonov zákon a dostanete krásny výsledok: rovnomerná skutočná deformácia sa rovná n.

Graf to ukazuje: červená krivka skutočného napätia a modrá krivka rýchlosti spevnenia sa pretínajú presne pri deformácii 0,24, kde má sivá inžinierska krivka – sila lomeno pôvodný prierez – svoje maximum.

Exponent n je teda mierou toho, ako dlho materiál rozkladá deformáciu, kým sa lokalizuje. Austenitická nehrdzavejúca oceľ s n okolo 0,45 sa veľmi natiahne a silno sa spevní; za studena tvárnená alebo vysokopevná oceľ s n rovným 0,1 vytvorí krčok skoro. A máte zadarmo kontrolu: n, ktoré nafitujete, by malo byť blízko rovnomerného predĺženia zo skúšky ťahom.

> **Otázka pre študentov:** Skúška ťahom ukazuje rovnomerné predĺženie 22 % (inžinierske). Aké n očakávate?


## Snímka 17.3 — Určenie K a n  `[PL+0:06–0:09]`

Ako získate K a n? Zlogaritmujte Hollomonov zákon: ln sigma sa rovná ln K plus n krát ln epsilon – priamka v grafe log–log.

Postup: skúšku ťahom prepočítajte na skutočné napätie a skutočnú plastickú deformáciu – odpočítajte elastickú časť. Použite len rovnomernú oblasť, od približne dvoch percent deformácie po maximum sily; norma ISO 10275 to štandardizuje ako n-hodnotu plechu. Preložte priamku: sklon je n, napätie pri deformácii jedna je K. V grafe syntetické body s n = 0,24 vrátia n = 0,237.

Pre tvar DEFORMu s členom y najprv zafixujte y ako medzu klzu a potom fitujte logaritmus sigma mínus y.

A dôležitý praktický bod: skúška ťahom končí krčkom, pri deformácii okolo 20 až 30 percent. Kovanie za studena dosahuje deformácie dva alebo tri. Pre objemové tvárnenie potrebujete tlakové skúšky do deformácie asi jedna, korigované na trenie. Ak graf log–log nie je priamka, materiál sa jednoducho neriadi mocninovým zákonom – použite Voceov zákon alebo tabuľku.


## Snímka 17.4 — Exponent citlivosti na rýchlosť m  `[PL+0:09–0:12]`

Druhý exponent je m, citlivosť na rýchlosť deformácie: sklon logaritmu napätia voči logaritmu rýchlosti deformácie. Najjednoduchšie sa meria skokovou skúškou: deformujete pri jednej rýchlosti, náhle ju zvýšite desaťkrát a odčítate skok napätia. Graf to ukazuje pre oceľ za studena s m rovným 0,012 – asi trojpercentný nárast napätia pri desaťnásobnej zmene rýchlosti.

Tabuľka uvádza typické hodnoty. Kovy za studena majú m blízko nuly – preto sa pri kovaní za studena rýchlostný člen často vynecháva. Pri tvárnení za poloohrevu m stúpa na niekoľko percent, za tepla na 0,1 až 0,2 a superplastické zliatiny dosahujú 0,5 – desaťkrát rýchlejšia deformácia potom potrebuje trojnásobné napätie.

Fyzikálne kladné m stabilizuje tečenie: kde sa začína tvoriť krčok, lokálna rýchlosť deformácie stúpne, potrebné napätie stúpne a krčok sa spomalí. To je tajomstvo superplastických predĺžení o niekoľko sto percent.

Jedno varovanie pre ocele medzi približne 150 a 350 stupňami: dynamické deformačné starnutie robí m záporným a tečenie prerušovaným – klasická oblasť modrej krehkosti. Tvárneniu ocele za poloohrevu v tejto oblasti sa vyhnite.


## Snímka 17.5 — Pasca extrapolácie  `[PL+0:12–0:16]`

Toto je najdôležitejšia snímka podprezentácie. Vygeneroval som body skúšky ťahom medzi 2 a 20 percentami deformácie a metódou najmenších štvorcov som na ne nafitoval všetky štyri zákony. V nameranom rozsahu – modrý pás – ich nerozlíšite; chyby sú pod jedným percentom.

Teraz extrapolujte do deformácie dva, čo je pri pechovaní za studena bežné. Voce dá asi 667 megapascalov, Hollomon 714, Swift 1184 a Ludwik 1401. To je dvojnásobný rozdiel medzi najnižšou a najvyššou hodnotou – z tých istých údajov.

Sila lisu a napätia v zápustke sú úmerné pretvárnemu odporu, takže samotná voľba zákona zmení predpovedanú silu zhruba o plus mínus tridsaťpäť percent. Ktorý je správny? To vám žiadne údaje zo skúšky ťahom nepovedia. Fyzikálne sa nasýtenie podľa Voceho hodí pre hliník a meď; ocele s malým zotavením sa spevňujú ďalej skôr podľa mocninového zákona.

Z toho pravidlo: fitujte na údaje, ktoré pokrývajú rozsah deformácií procesu. Pre kovanie za studena to znamená tlakové alebo krútiace skúšky do deformácie jedna či dva. Fity iba zo skúšky ťahom sú v poriadku pre tvárnenie plechov, nie pre objemové tvárnenie.

> **Otázka pre študentov:** Ktorému zo štyroch zákonov by ste verili pri pechovaní hliníkového nitu za studena — a prečo?


## Snímka 17.6 — Teplotná závislosť  `[PL+0:16–0:19]`

Konštantné c a n opisujú len jednu teplotu. DEFORM umožňuje, aby každá konštanta – c, n, m aj y – bola tabuľkou v závislosti od teploty, čím sa mocninový zákon rozšíri na tvárnenie za poloohrevu.

Trendy sú vždy rovnaké: s rastúcou teplotou materiál mäkne, takže c klesá; zotavenie obmedzuje spevnenie, takže n klesá; a citlivosť na rýchlosť deformácie m rastie. Tabuľka to ilustruje pre strednouhlíkovú oceľ – čísla ukazujú trend, nie údaje pre konkrétnu značku. Všimnite si riadok pri 200 stupňoch: dynamické deformačné starnutie, m blízko nuly alebo záporné – tejto oblasti sa vyhnite.

Dve praktické poznámky. DEFORM medzi teplotnými bodmi interpoluje lineárne, takže dajte dosť bodov tam, kde sa vlastnosti rýchlo menia. A pri rýchlom kovaní za studena sa polotovar plastickou prácou ohreje o sto až tristo stupňov. Aj „studená“ simulácia by preto mala byť zviazaná s prestupom tepla a používať c ako funkciu teploty. Nad približne 0,6 teploty tavenia prejdite na zákon sinh alebo na tabuľku.


## Snímka 17.7 — Kde sa mocninový zákon používa  `[PL+0:19–0:22]`

Kde je mocninový zákon správna voľba? Všade, kde dominuje deformačné spevnenie a vplyvy teploty a rýchlosti sú malé: kovanie za studena, pechovanie za studena a pretláčanie za studena – pokiaľ máte údaje do veľkých deformácií. Ťahanie drôtov a tyčí, kde sa deformácia hromadí v mnohých ťahoch. Lisovanie a hlboké ťahanie plechov, kde je Swift alebo Hollomon spolu s r-hodnotou štandardným opisom. Ohýbanie a profilovanie valcovaním. A s teplotnými tabuľkami kovanie za poloohrevu.

Pre plechy má n ešte jeden veľmi praktický význam. Empirický Keelerov–Brazierov vzťah pre nízkouhlíkové ocele spája najnižší bod diagramu medzných pretvorení – medzu pri rovinnej deformácii – s n a hrúbkou plechu. Graf to ukazuje: plech s n rovným 0,2 a hrúbkou jeden milimeter znesie pri rovinnej deformácii asi 35 percent hlavnej deformácie; s n rovným 0,1 len polovicu. Preto lisovne požadujú n-hodnotu na každom atteste zvitku.


## Snímka 17.8 — Obmedzenia, zhrnutie a otázky  `[PL+0:22–0:25]`

Na záver obmedzenia. Mocninový zákon je empirický, takže ho nemožno bezpečne extrapolovať v deformácii, rýchlosti deformácie ani teplote. Spevnenie je neohraničené a čistý Hollomon začína pri nulovom napätí – v MKP vždy použite člen y alebo Swiftovu počiatočnú deformáciu. Rýchlosť a teplota vstupujú len cez m a teplotné tabuľky, takže to nie je model pre tvárnenie za tepla ani pre náraz. A nehovorí nič o Bauschingerovom efekte ani o anizotropii – tie pochádzajú z podmienky plasticity a pravidla spevnenia, o ktorých hovoríme v bloku 5.

Zhrnutie v štyroch bodoch je vľavo. Potom päť otázok – k tretej: stonásobné zvýšenie rýchlosti pri m rovnom 0,15 zvýši napätie asi dvojnásobne. Späť hore do hlavnej prednášky, alebo rovno ďalej na Johnsona–Cooka.

> 🗒️ *Klik – zobrazí sa otázka 1; po odpovediach stlačte „odpoveď“.*

**Otázka jedna:** Odvoďte z Considèrovho kritéria, že rovnomerná deformácia sa rovná n.

> ✅ **Očakávané:** F = σ·A; pri maximálnej sile dF = 0 → dσ/dε = σ. Pre σ = Kεⁿ: nKεⁿ⁻¹ = Kεⁿ → ε_u = n.

> 🗒️ *Klik – zobrazí sa otázka 2; po odpovediach stlačte „odpoveď“.*

**Otázka dva:** Prečo Hollomonov zákon potrebuje v MKP člen y alebo Swiftovu počiatočnú deformáciu?

> ✅ **Očakávané:** Hollomon dáva σ(0) = 0 (a nekonečný počiatočný sklon), takže nedeformovaný materiál by tiekol pri nulovom napätí. Člen y alebo Swiftovo ε₀ dáva konečnú počiatočnú medzu klzu.

> 🗒️ *Klik – zobrazí sa otázka 3; po odpovediach stlačte „odpoveď“.*

**Otázka tri:** Pri m rovnom 0,15 – ako sa zmení pretvárny odpor, ak rýchlosť deformácie vzrastie stokrát?

> ✅ **Očakávané:** σ₂/σ₁ = 100^0,15 ≈ 2,0 – pretvárny odpor sa zhruba zdvojnásobí.

> 🗒️ *Klik – zobrazí sa otázka 4; po odpovediach stlačte „odpoveď“.*

**Otázka štyri:** Váš fit použil údaje zo skúšky ťahom do deformácie 0,2. Môžete ho použiť pre pechovanie za studena do deformácie 2,5?

> ✅ **Očakávané:** Nie. Je to extrapolácia viac ako desaťnásobne; zákony nafitované na tie isté údaje z ťahu sa pri ε = 2 líšia dvojnásobne. Použite tlakové alebo krútiace skúšky do ε ≈ 1–2.

> 🗒️ *Klik – zobrazí sa otázka 5; po odpovediach stlačte „odpoveď“.*

**Otázka päť:** Ktorý zákon sa nasýti a pre aké materiály je to realistické?

> ✅ **Očakávané:** Voceov. Realistické pre materiály so silným dynamickým zotavením – hliník a meď – a pri zvýšenej teplote; ocele s malým zotavením sa spevňujú ďalej podľa mocninového zákona.

---

## Zdroje

- Ludwik, P.: *Elemente der technologischen Mechanik.* Springer, Berlin 1909
- Hollomon, J. H.: Tensile deformation. *Trans. AIME* 162 (1945) 268–290
- Swift, H. W.: Plastic instability under plane stress. *J. Mech. Phys. Solids* 1 (1952) 1–18
- Voce, E.: The relationship between stress and strain for homogeneous deformation. *J. Inst. Met.* 74 (1948) 537
- Considère, A.: Mémoire sur l'emploi du fer et de l'acier dans les constructions. *Ann. Ponts Chaussées* 9 (1885)
- ISO 10275: Metallic materials — Sheet and strip — Determination of tensile strain hardening exponent (n-value)
- Keeler, S. P.; Brazier, W. G.: Relationship between laboratory material characterization and press-shop formability. Microalloying 75 (1977) — vzťah pre FLD₀
- Graf extrapolácie: syntetické údaje vygenerované a nafitované pre túto prednášku (metóda najmenších štvorcov, scipy)
- SFTC: manuál DEFORM V14, kap. 10 Material Data — mocninový pretvárny odpor
