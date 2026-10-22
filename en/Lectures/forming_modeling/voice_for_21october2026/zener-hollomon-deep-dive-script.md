# Zener–Hollomon parameter and the sinh-Arrhenius law — deep dive

*Sub-presentation to Lecture 3 “Material Data in DEFORM” · vertical slides 20.1–20.10 under slide 20 (press ↓ in the deck)*

Speaker script — about 32 minutes, 10 slides. Time stamps are hours:minutes from the start of the deep dive. The deep dive is optional: in the 120-minute lecture skip it, or use it in a seminar or a separate session. The same text is in the speaker notes of each vertical slide (press **S**).

| # | Slide | Time |
|---|---|---|
| 20.1 | Origin and idea of Z | 0:00–0:03 |
| 20.2 | Physical basis and activation energy | 0:03–0:06 |
| 20.3 | Power, exponential and sinh laws | 0:06–0:09 |
| 20.4 | Mathematics of the sinh law | 0:09–0:12 |
| 20.5 | Calibrating α, n, Q and A | 0:12–0:16 |
| 20.6 | Strain compensation and DRX flow curves | 0:16–0:19 |
| 20.7 | Z controls microstructure | 0:19–0:22 |
| 20.8 | Related laws and DEFORM input | 0:22–0:25 |
| 20.9 | Where Z and the sinh law are used | 0:25–0:28 |
| 20.10 | Limits, summary and questions | 0:28–0:32 |

---

## Slide 20.1 — Origin and idea of Z  `[ZH+0:00–0:03]`

This deep dive is about the most widely used idea in hot forming: the Zener–Hollomon parameter, and the hyperbolic-sine law built on it.

In 1944 Clarence Zener and John Hollomon published a study on the effect of strain rate on the plastic flow of steel. Their key observation: raising the strain rate has the same effect on the flow stress as lowering the temperature. So both can be combined into one variable – the temperature-compensated strain rate Z: strain rate times exp of Q over RT. Z has the unit of a strain rate, and the temperature must be absolute.

Look at the numbers for a carbon–manganese steel. At 1000 degrees and one per second, Z is about 6.3 times ten to the twelfth. At 900 degrees and ten per second it is more than a hundred times higher – 7.8 times ten to the fourteenth; at 1200 degrees and 0.01 per second about ten thousand times lower.

The chart shows lines of constant Z in the temperature–strain-rate plane. Every point on one line gives the same flow stress and a similar recrystallised grain size. That is very practical: a slow laboratory test at a higher temperature can represent a fast industrial press at a lower temperature.


## Slide 20.2 — Physical basis and activation energy  `[ZH+0:03–0:06]`

Why should hot deformation follow an Arrhenius law at all? Above about half the melting temperature, dislocations no longer just glide. They climb and cross-slip around obstacles, and climb needs vacancies to diffuse. Diffusion is a thermally activated process with its own Arrhenius term, so the strain rate inherits it. In that sense hot working is high-temperature creep, only a million times faster.

At the same time dislocations multiply – hardening – and are removed by dynamic recovery and dynamic recrystallisation – softening. When the two balance, we reach a steady-state stress, and the steady-state stress is a function of Z alone.

The table gives typical apparent activation energies. For pure aluminium it is close to the activation energy of self-diffusion, about 142 kilojoules per mole. Alloying, solutes and particles raise the apparent value: 260 to 320 for carbon and low-alloy steels, 400 to 460 for austenitic stainless steels. Titanium alloy Ti-6Al-4V shows about 246 in the beta field but more than 600 in the two-phase field, because the phase balance changes with temperature. A very high apparent Q is a warning that the microstructure itself is changing.


## Slide 20.3 — Power, exponential and sinh laws  `[ZH+0:06–0:09]`

Historically, two laws were used. At low stresses – creep conditions – Z is proportional to stress to a power n prime. At high stresses – fast hot working – Z grows exponentially with stress. Each works in its own range and fails in the other; the transition is known in creep literature as power-law breakdown.

Garofalo in 1963, and then Sellars and Tegart in 1966 for hot working, proposed the hyperbolic sine. For small arguments sinh x is about x, so the law becomes a power law. For large arguments sinh x is about e to the x over two, so it becomes exponential. The chart shows this with one set of constants: the red sinh curve follows the blue power law at low stress and the orange exponential at high stress, and switches over in the grey band.

The constants: n between about 3 and 6, alpha – the stress multiplier – around 0.01 per megapascal for steels and larger for aluminium alloys. Alpha is usually taken as beta divided by n prime, which already tells you how it is measured.


## Slide 20.4 — Mathematics of the sinh law  `[ZH+0:09–0:12]`

The mathematics in three lines. First, the inversion: arsinh written with a logarithm gives the flow stress directly as a function of Z. This is the formula FEM codes evaluate at every integration point.

Second, differentiate with respect to the logarithm of strain rate and you get the strain-rate sensitivity m: tanh of alpha sigma divided by n alpha sigma. At low stress it tends to one over n – the creep value, around 0.2. At high stress it falls towards zero. The chart shows this for three values of n.

Third, the temperature sensitivity follows from the same derivative multiplied by Q over R T squared. For our steel at 1000 degrees and one per second, alpha sigma is 1.32, m about 0.15, and cooling by only ten kelvin raises the flow stress by about three percent. That is why die chilling of the surface matters so much in hot forging.

> **Ask the class:** If m = 0.15, how much does the flow stress rise when the strain rate increases tenfold?


## Slide 20.5 — Calibrating α, n, Q and A  `[ZH+0:12–0:16]`

How are the four constants found? Start with hot compression tests, typically on a Gleeble: four to six temperatures and four strain rates. From each curve take the peak stress, or the steady-state stress.

Step two: plot the logarithm of strain rate against the logarithm of stress – the slope gives n prime – and against stress itself – the slope gives beta. Alpha is beta over n prime.

Step three: take the logarithm of the sinh law. Plotting ln sinh of alpha sigma against ln strain rate gives straight, parallel lines, one per temperature – the chart. The slope is one over n.

Step four: the vertical spacing of those lines comes from temperature. Plot ln sinh against one over T at constant strain rate; the slope times n times R is the activation energy Q. Step five: the intercept gives A.

Under the boxes, a published example for 30CrMoA steel: alpha 0.011, n 4.4, Q 262 kilojoules per mole, with a correlation of 0.98. This is the standard recipe – you will find it in hundreds of papers.


## Slide 20.6 — Strain compensation and DRX flow curves  `[ZH+0:16–0:19]`

The sinh law gives one number – a peak or steady-state stress. FEM needs the whole curve. Two approaches are common.

The first is purely mathematical: the strain-compensated Arrhenius model. You repeat the calibration at many strains – say every 0.05 from 0.05 to 0.8 – and fit each constant, alpha, n, Q and ln A, with a polynomial in strain. Lin and co-workers popularised this in 2008 for 42CrMo steel, and it typically fits with three to six percent error. The price: twenty to thirty coefficients with no physical meaning, and nonsense outside the fitted range of strain.

The second approach uses physics: the chart shows the typical shape. The curve rises to a peak, dynamic recrystallisation starts at the critical strain, about 0.8 of the peak strain, and the stress falls to a steady state. The higher Z, the higher the peak and the later it comes. These curves are illustrative, but the trends are exactly what DEFORM's microstructure models use.


## Slide 20.7 — Z controls microstructure  `[ZH+0:19–0:22]`

Z is not only about stress. It controls the microstructure. The dynamically recrystallised grain size follows a power law in Z with a small negative exponent, typically 0.1 to 0.3. High temperature and slow forming – low Z – give coarse grains; low temperature and fast forming – high Z – give fine grains. That is why the last forging step is often done colder and faster. These equations are the ones in DEFORM's grain data, which we meet again in block 8.

Z also underlies processing maps. In Prasad's dynamic materials model the strain-rate sensitivity m – which we just derived from the sinh law – is turned into an efficiency of power dissipation, two m over m plus one. Regions with high efficiency, around 30 to 55 percent, usually correspond to dynamic recrystallisation – a safe window. Where the instability parameter becomes negative, the material tends to form shear bands or cracks. Process engineers use these maps to choose forging temperature and speed.


## Slide 20.8 — Related laws and DEFORM input  `[ZH+0:22–0:25]`

Two relatives you will meet in other software. Norton–Hoff is a viscoplastic power law – stress proportional to strain rate to the m, with a consistency K that depends on temperature and strain. It is the basis of FORGE. Hensel–Spittel is a long empirical product of temperature, strain and strain-rate terms – up to nine exponents – used in the libraries of FORGE, QForm and Simufact. It has no Z, but it is fitted to the same hot compression data.

In DEFORM the flow-stress list contains the sinh law and the power law exactly as you see on the right, with the activation energy written as delta H and the temperature absolute. Check which units DEFORM expects for delta H and R in your unit system before typing published values.

A practical alternative many engineers prefer: evaluate the law in a spreadsheet or Python, and enter the result as a table of flow stress versus strain, strain rate and temperature. You can see the numbers, add strain hardening at small strains, and plot the curves in the material window before running.


## Slide 20.9 — Where Z and the sinh law are used  `[ZH+0:25–0:28]`

Where is all this used? Practically everywhere above half the melting point. In hot closed-die forging the sinh law gives the flow stress for die fill and press load, and Z feeds the grain-size prediction. In hot rolling it gives the mean flow stress of each pass, and Z decides how much the material recrystallises between passes.

Aluminium extrusion is the classic application: the sinh model of Sheppard and Wright has been the standard for decades, used to predict exit temperature and the maximum extrusion speed before surface cracking.

For isothermal forging of titanium and nickel alloys the strain rates are low, close to the creep regime, and the strain-rate sensitivity from the sinh law matters. And for process design, the equal-Z idea lets us transfer laboratory results to the press, and processing maps help choose a safe window.

The pictures show two typical DEFORM applications: a hot disc forging sequence and ring rolling, where temperature and strain rate – and so Z – change continuously along the roll gap.


## Slide 20.10 — Limits, summary and questions  `[ZH+0:28–0:32]`

Finally, the limits. The sinh law describes a steady-state or peak stress; for the full curve you need strain compensation or a recrystallisation model. The constants are valid only in the tested window, and a phase change – ferrite to austenite, alpha to beta in titanium – changes the activation energy, so do not fit across it. It is not a model for cold or warm forming. And at high strain rates the test specimen heats up, so correct the data before fitting.

Summary in four points: Z combines temperature and strain rate in one parameter, with absolute temperature. Its physics is thermally activated, diffusion-controlled flow. The sinh law joins the power and exponential laws, and inverts to a closed-form flow stress. And Z also sets the recrystallised grain size and the safe processing windows.

Five questions to finish. For the first one, take out your calculators: about 1.3 times ten to the twelfth. Then we go back up to the main lecture.

> 🗒️ *Click – question 1 appears; wait for answers, then press “answer”.*

**Question one:** Compute Z for 1100 degrees, 5 per second and an activation energy of 300 kilojoules per mole.

> ✅ **Expected:** T = 1373 K, Q/RT = 300 000 / (8.314 · 1373) ≈ 26.3 → Z = 5 · e^26.3 ≈ 1.3·10¹² s⁻¹.

> 🗒️ *Click – question 2 appears; wait for answers, then press “answer”.*

**Question two:** Why does the sinh law work at low and at high stresses?

> ✅ **Expected:** sinh x ≈ x for small x → power law (creep range); sinh x ≈ eˣ/2 for large x → exponential law (power-law breakdown). One formula covers both.

> 🗒️ *Click – question 3 appears; wait for answers, then press “answer”.*

**Question three:** Which plot gives n, and which gives Q?

> ✅ **Expected:** n: ln ε̇ vs ln sinh(ασ) at constant T (slope = n). Q: ln sinh(ασ) vs 1/T at constant ε̇ – Q = R · n · slope.

> 🗒️ *Click – question 4 appears; wait for answers, then press “answer”.*

**Question four:** A forging should get a finer grain. Do you raise or lower Z – and how in practice?

> ✅ **Expected:** Raise Z: lower temperature and / or higher strain rate – a colder, faster last blow. d_DRX ∝ Z^−(0.1…0.3).

> 🗒️ *Click – question 5 appears; wait for answers, then press “answer”.*

**Question five:** Why is a strain-compensated model risky beyond a strain of 0.8?

> ✅ **Expected:** α, n, Q and ln A are polynomials fitted only up to ε = 0.8; outside that range polynomials diverge and give nonsense, while forging strains (flash, corners) easily exceed it.

---

## Sources

- Zener, C.; Hollomon, J. H.: Effect of strain rate upon plastic flow of steel. *J. Appl. Phys.* 15 (1944) 22–32
- Garofalo, F.: An empirical relation defining the stress dependence of minimum creep rate in metals. *Trans. AIME* 227 (1963) 351
- Sellars, C. M.; McG. Tegart, W. J.: La relation entre la résistance et la structure dans la déformation à chaud. *Mém. Sci. Rev. Métall.* 63 (1966) 731
- Zhang et al.: Constitutive model of 30CrMoA steel (strain-compensated Arrhenius). *Metals* 10 (2020) 1214 — calibration procedure, α = 0.011 MPa⁻¹, n = 4.40, Q = 262 kJ/mol
- Lin, Y. C.; Chen, M. S.; Zhong, J.: Constitutive modeling for elevated temperature flow behavior of 42CrMo steel. *Comput. Mater. Sci.* 42 (2008) 470 — strain compensation
- Hot deformation characteristics of Ti-6Al-4V (CityU Scholars) — Q ≈ 246 kJ/mol (β), ≈ 621 kJ/mol (α+β)
- Prasad, Y. V. R. K. et al.: processing maps / dynamic materials model; DRX in aluminium (IAS repository) — η = 2m/(m+1)
- Sheppard, T.; Wright, D. S.: Determination of flow stress, parts 1–2. *Metals Technology* 6 (1979) — sinh law in Al extrusion
- SFTC: DEFORM V14 manual, Ch. 10 Material Data — flow-stress model list
