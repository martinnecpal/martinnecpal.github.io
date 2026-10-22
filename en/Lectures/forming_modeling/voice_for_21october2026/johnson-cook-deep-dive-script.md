# Johnson–Cook model — deep dive

*Sub-presentation to Lecture 3 “Material Data in DEFORM” · vertical slides 18.1–18.9 under slide 18 (press ↓ in the deck)*

Speaker script — about 29 minutes, 9 slides. Time stamps are hours:minutes from the start of the deep dive. The deep dive is optional: in the 120-minute lecture skip it, or use it in a seminar or a separate session. The same text is in the speaker notes of each vertical slide (press **S**).

| # | Slide | Time |
|---|---|---|
| 18.1 | Origin of the model | 0:00–0:03 |
| 18.2 | The three brackets | 0:03–0:07 |
| 18.3 | Published constants | 0:07–0:10 |
| 18.4 | Calibration step by step | 0:10–0:14 |
| 18.5 | Adiabatic heating and coupling | 0:14–0:17 |
| 18.6 | Limitations and modified forms | 0:17–0:20 |
| 18.7 | Johnson–Cook fracture model | 0:20–0:23 |
| 18.8 | Where Johnson–Cook is used | 0:23–0:26 |
| 18.9 | Tips, summary and questions | 0:26–0:29 |

---

## Slide 18.1 — Origin of the model  `[JC+0:00–0:03]`

The Johnson–Cook model was published in 1983 by Gordon Johnson and William Cook of Honeywell, at the International Symposium on Ballistics in The Hague. Their aim was practical: a model simple enough to run in explicit impact codes – their own EPIC code – and with constants that can be obtained from a few standard tests.

They used torsion tests over a range of strain rates, static tension, and Hopkinson-bar tension tests at elevated temperatures. They then validated the model on Taylor cylinder impact tests with strains above two – tests that were not used in the fitting. Two years later they published the companion fracture model.

On the right: the equation and the five constants. A, B and n come from quasi-static tests; C from high-rate tests; m from tests at elevated temperature. Plus three reference values: the reference strain rate, often one per second; the reference temperature; and the melting temperature.


## Slide 18.2 — The three brackets  `[JC+0:03–0:07]`

Let us look at each bracket on its own. The first is simply Ludwik's hardening law – the flow curve at the reference strain rate and temperature.

The second, left chart, is the rate factor. It is linear in the logarithm of strain rate: with C of 0.0134, four decades of strain rate give twelve percent more stress. Two practical details. Below the reference rate the factor is less than one, so choose the reference as your lowest test rate, or let the code clip it. And because C is constant, the model cannot show the steep upturn of flow stress that many metals show above about a thousand to ten thousand per second.

The third, right chart, is thermal softening: one minus the homologous temperature to the power m. With m below one the material softens early; with m above one it keeps its strength longer. At the melting point the stress is zero. Below the reference temperature T star becomes negative, and a non-integer power of a negative number is undefined – most codes simply set T star to zero there.


## Slide 18.3 — Published constants  `[JC+0:07–0:10]`

Here are constants from the original 1983 paper, plus the AISI 1045 set we used on the main slide. Note the ranges: A from 90 megapascals for annealed copper to almost 800 for hardened 4340 steel; C between 0.006 and 0.06 – so the rate effect is moderate; and m around one, meaning roughly linear softening with temperature.

Two warnings. Each set belongs to one material condition – a heat treatment, a hardness – and to the range of the tests it was fitted to. And published sets for the same grade scatter a lot; for AISI 1045 alone you will find several quite different sets in the literature. So before you use any set, plot the flow curves at your strain rate and temperature and compare them with whatever data you have.


## Slide 18.4 — Calibration step by step  `[JC+0:10–0:14]`

The calibration follows the brackets, which is the big advantage of the model. Step one: A is the yield stress in a quasi-static test at room temperature. Step two: subtract A, take logarithms, and the slope of the log–log plot gives n and the intercept B.

Step three, the chart: at a fixed strain, divide the stress at each strain rate by the stress at the reference rate and plot it against the logarithm of strain rate. The slope is C. With synthetic quasi-static and Hopkinson-bar points the regression returns 0.0137.

Step four: tests at elevated temperature; the logarithm of one minus the stress ratio against the logarithm of T star gives m.

Step five, the check: Hopkinson-bar specimens heat up adiabatically, so correct those curves first; then validate on a test you did not use for fitting. The alternative is a global least-squares fit of all five constants, or inverse FEM – smaller overall error, but you lose the transparency.


## Slide 18.5 — Adiabatic heating and coupling  `[JC+0:14–0:17]`

Johnson–Cook only shows its real character when it is coupled with temperature. In fast deformation about ninety percent of the plastic work becomes heat – the Taylor–Quinney coefficient – and above roughly ten to a hundred per second there is no time for the heat to flow away. The deformation is adiabatic.

The chart: AISI 1045 at ten thousand per second. The grey curve is isothermal at 20 degrees. The red curve includes the temperature rise from plastic work – about 258 kelvin at a strain of one – and the thermal bracket pulls the curve down. Hardening and softening compete; where softening wins, deformation localises into adiabatic shear bands. That is exactly the mechanism of segmented chips in machining of hardened steels and titanium.

Two consequences for practice: run machining and impact simulations as coupled thermo-mechanical analyses with density, specific heat and conductivity; and never fit Johnson–Cook to Hopkinson-bar curves as if they were isothermal.


## Slide 18.6 — Limitations and modified forms  `[JC+0:17–0:20]`

The weaknesses come from the same structure that makes the model simple. Because the brackets are multiplied, the rate sensitivity is the same at every temperature, and the hardening is the same at every rate and temperature. The constant C cannot reproduce the steep rise of flow stress above about ten thousand per second. Accuracy falls at high temperatures, there is no recovery or recrystallisation, and hardening is unbounded. For BCC metals with a strongly temperature-dependent yield stress, Zerilli–Armstrong is often better.

Hence the many modified versions. DEFORM's own form adds a power-law rate term and a more flexible thermal bracket. Lin and co-workers in 2010 proposed a version with a quadratic hardening term and an exponential temperature term whose slope depends on strain rate – that introduces the missing coupling. Others add a quadratic term in the logarithm of strain rate to capture the high-rate upturn. Each modification adds constants; the original form remains the default in most codes.


## Slide 18.7 — Johnson–Cook fracture model  `[JC+0:20–0:23]`

Johnson and Cook added a fracture model in 1985 with the same structure. The strain to fracture depends on stress triaxiality – mean stress over effective stress – times a rate bracket and a temperature bracket. Damage accumulates as the sum of strain increments divided by the current failure strain; when it reaches one, the element fails and is usually deleted.

The chart, for 4340 steel with the 1985 constants: the failure strain falls steeply as triaxiality rises – from pure shear at zero, through uniaxial tension at one third, to notched bars with high triaxiality. Higher temperature raises the failure strain.

The constants come from notched round bars of different notch radii, torsion tests, Hopkinson-bar and hot tests. The model is used for chip separation in machining, blanking and ballistic perforation. Compare it with the normalised Cockcroft–Latham criterion from the main lecture: Cockcroft–Latham has one constant; Johnson–Cook has five, but captures rate and temperature.


## Slide 18.8 — Where Johnson–Cook is used  `[JC+0:23–0:26]`

Where is Johnson–Cook used? First and foremost in machining – it is the default flow-stress model in most cutting simulations, including DEFORM-3D Machining. The sketch shows why: in the primary shear zone strains reach one to five at strain rates up to a million per second, and at the tool–chip interface the temperature rises to 800 or 1000 degrees. Combined with the Johnson–Cook damage model it reproduces chip segmentation.

Then its original field: impact, ballistics and Taylor tests, where it is robust and cheap in explicit codes. Crash simulation of car body structures, high-speed forming – electromagnetic, explosive and hammer forging – and blanking and punching.

And one line where it is not recommended: hot forging above about 0.6 of the melting point. There the sinh law or measured tables are the right tools – recrystallisation is outside Johnson–Cook's world.


## Slide 18.9 — Tips, summary and questions  `[JC+0:26–0:29]`

Some practical tips for DEFORM. Choose the Johnson–Cook entry in the flow-stress list; with D and E equal to one and alpha equal to zero, DEFORM's extended form reduces to the original. Enter the reference and melting temperatures in the unit of your problem and the reference strain rate of the published set. Run coupled with heat transfer, and plot the curves before running.

Summary: three independent brackets – hardening, rate, softening; five constants from quasi-static, Hopkinson-bar and hot tests; strong when combined with adiabatic heating – shear bands, chips, impact; weak where temperature and strain rate interact – hot forming and very high rates.

Five questions to check yourselves, then back up to the main lecture or straight on to Zerilli–Armstrong – which, as you will see, was created precisely to fix the missing coupling.

> 🗒️ *Click – question 1 appears; wait for answers, then press “answer”.*

**Question one:** Which test gives C, and which gives m?

> ✅ **Expected:** C: tests at several strain rates (quasi-static + SHPB) at the reference temperature – slope of σ/σ_ref vs ln ε̇*. m: tests at elevated temperatures at the reference rate – from ln(1 − σ/σ_ref) vs ln T*.

> 🗒️ *Click – question 2 appears; wait for answers, then press “answer”.*

**Question two:** What does the rate bracket do below the reference strain rate, and how do you avoid it?

> ✅ **Expected:** ln ε̇* < 0, so the rate factor drops below 1 (and turns negative at very low rates) – the stress is underestimated. Choose ε̇₀ = the lowest test rate, or clip ε̇* ≥ 1.

> 🗒️ *Click – question 3 appears; wait for answers, then press “answer”.*

**Question three:** Why must Hopkinson-bar curves be corrected before fitting?

> ✅ **Expected:** At high rates ≈ 90 % of the plastic work becomes heat with no time to escape: the specimen heats adiabatically by up to hundreds of K, so the curve is not isothermal. Uncorrected, thermal softening would end up in n, C and m.

> 🗒️ *Click – question 4 appears; wait for answers, then press “answer”.*

**Question four:** Name two physical effects Johnson–Cook cannot describe.

> ✅ **Expected:** Any two of: coupling of T and ε̇ (rate sensitivity is the same at every T); the steep stress upturn above ≈ 10⁴ s⁻¹; recovery and recrystallisation; saturation of hardening.

> 🗒️ *Click – question 5 appears; wait for answers, then press “answer”.*

**Question five:** How does stress triaxiality change the Johnson–Cook failure strain?

> ✅ **Expected:** Failure strain falls as triaxiality rises (ε_f ∝ D₁ + D₂·e^D₃η, D₃ < 0): high in shear (η = 0), lower in uniaxial tension (η = ⅓), lowest in notched bars.

---

## Sources

- Johnson, G. R.; Cook, W. H.: A constitutive model and data for metals subjected to large strains, high strain rates and high temperatures. *Proc. 7th Int. Symp. on Ballistics*, The Hague 1983, 541–547 — constants table, Taylor-test validation
- Johnson, G. R.; Cook, W. H.: Fracture characteristics of three metals subjected to various strains, strain rates, temperatures and pressures. *Eng. Fract. Mech.* 21 (1985) 31–48
- Jaspers, S. P. F. C.; Dautzenberg, J. H.: Material behaviour in conditions similar to metal cutting: flow stress in the primary shear zone. *J. Mater. Process. Technol.* 122 (2002) 322–330 — AISI 1045 constants
- Lin, Y. C.; Chen, X. M.; Liu, G.: A modified Johnson–Cook model for tensile behaviors of typical high-strength alloy steel. *Mater. Sci. Eng. A* 527 (2010) 6980–6986
- On the accuracy of the Johnson–Cook constitutive model for metals. *Chin. J. High Press. Phys.* (2019), doi:10.11858/gywlxb.20190721
- Sandia SIERRA/LAME manual: Johnson–Cook failure model (damage accumulation, triaxiality definition)
- SFTC: DEFORM V14 manual, Ch. 10 Material Data — extended J–C form
