# Power law and hardening laws — deep dive

*Sub-presentation to Lecture 3 “Material Data in DEFORM” · vertical slides 17.1–17.8 under slide 17 (press ↓ in the deck)*

Speaker script — about 25 minutes, 8 slides. Time stamps are hours:minutes from the start of the deep dive. The deep dive is optional: in the 120-minute lecture skip it, or use it in a seminar or a separate session. The same text is in the speaker notes of each vertical slide (press **S**).

| # | Slide | Time |
|---|---|---|
| 17.1 | The family of hardening laws | 0:00–0:03 |
| 17.2 | Meaning of n: Considère criterion | 0:03–0:06 |
| 17.3 | Measuring K and n | 0:06–0:09 |
| 17.4 | Strain-rate exponent m | 0:09–0:12 |
| 17.5 | The extrapolation trap | 0:12–0:16 |
| 17.6 | Temperature dependence | 0:16–0:19 |
| 17.7 | Where the power law is used | 0:19–0:22 |
| 17.8 | Limits, summary and questions | 0:22–0:25 |

---

## Slide 17.1 — The family of hardening laws  `[PL+0:00–0:03]`

The power law is the simplest flow-stress model in DEFORM, so it is worth knowing where it comes from and what its relatives are. This short sub-presentation covers the family of hardening laws, the meaning of n and m, how to measure them, and the one big trap – extrapolation.

Ludwik proposed in 1909 an initial yield stress plus a power of strain. Hollomon in 1945 dropped the initial yield stress – the famous K epsilon to the n, which gives the n-value of sheet metal. Swift in 1952 added a pre-strain epsilon zero, so the stress at zero strain is not zero. Voce in 1948 took a different route: an exponential approach to a saturation stress.

The first three grow without limit; Voce saturates. That difference will matter a lot on slide five.

DEFORM's power law is Ludwik's form with an added strain-rate term: c times strain to the n times strain rate to the m, plus y. Remember that all of these are empirical fits to the shape of the curve – none of them is derived from dislocation theory.


## Slide 17.2 — Meaning of n: Considère criterion  `[PL+0:03–0:06]`

What does n actually mean? Differentiate Hollomon's law: the hardening rate is n times stress over strain. So n tells how strongly the material hardens relative to its current stress.

Now the tensile test. The force is stress times the current area. As the specimen stretches, the area falls and the stress rises. The force reaches its maximum – and necking starts – when the hardening rate drops to the stress itself. That is Considère's criterion. Insert Hollomon's law and you get a beautiful result: the uniform true strain equals n.

The chart shows it: the red true-stress curve and the blue hardening-rate curve cross exactly at strain 0.24, where the grey engineering curve – force over original area – has its maximum.

So n is a measure of how long the material spreads deformation before it localises. Austenitic stainless steel with n around 0.45 stretches a lot and hardens strongly; a cold-worked or high-strength steel with n of 0.1 necks early. And it gives you a free check: the n you fit should be close to the uniform elongation of the tensile test.

> **Ask the class:** A tensile test shows uniform elongation of 22 % (engineering). What n do you expect?


## Slide 17.3 — Measuring K and n  `[PL+0:06–0:09]`

How do you get K and n? Take the logarithm of Hollomon's law: ln sigma equals ln K plus n ln epsilon – a straight line on a log–log plot.

The procedure: convert the tensile test to true stress and true plastic strain – subtract the elastic part. Use only the uniform range, from about two percent strain to the maximum force; ISO 10275 standardises this as the n-value of sheet. Fit a straight line: the slope is n, the stress at strain one is K. On the chart, synthetic points with n = 0.24 give back n = 0.237.

For DEFORM's form with the y term, first fix y as the yield stress, then fit the logarithm of sigma minus y.

And the important practical point: a tensile test ends at necking, around 20 to 30 percent strain. Cold forging reaches strains of two or three. For bulk forming you need compression tests to a strain of about one, corrected for friction. If the log–log plot is not straight, the material simply does not follow a power law – use Voce or a table.


## Slide 17.4 — Strain-rate exponent m  `[PL+0:09–0:12]`

The second exponent is m, the strain-rate sensitivity: the slope of log stress against log strain rate. The simplest way to measure it is a jump test: deform at one rate, suddenly increase it ten times, and read the step in stress. The chart shows it for a cold steel with m of 0.012 – about three percent stress increase for a tenfold rate change.

The table gives typical values. Cold metals have m close to zero – that is why the strain-rate term is often dropped in cold forging. In warm forming m rises to several percent, hot forming 0.1 to 0.2, and superplastic alloys reach 0.5 – a tenfold faster deformation then needs three times the stress.

Physically, positive m stabilises the flow: where a neck starts, the local strain rate rises, the stress needed rises, and the neck is slowed down. That is the secret of superplastic elongations of several hundred percent.

One warning for steels between about 150 and 350 degrees: dynamic strain ageing makes m negative and the flow serrated – the classical blue brittleness range. Avoid warm forming of steel there.


## Slide 17.5 — The extrapolation trap  `[PL+0:12–0:16]`

This is the most important slide of the sub-presentation. I generated tensile-test points between 2 and 20 percent strain and fitted all four laws to them by least squares. In the measured range – the blue band – you cannot tell them apart; the errors are below one percent.

Now extrapolate to a strain of two, which is normal in cold heading. Voce gives about 667 megapascals, Hollomon 714, Swift 1184 and Ludwik 1401. That is a factor of two between the lowest and the highest – from the same data.

Press force and die stresses scale with the flow stress, so the choice of the law alone changes the predicted load by roughly plus or minus thirty-five percent. Which one is right? None of the tensile data can tell you. Physically, Voce's saturation suits aluminium and copper; steels with little recovery keep hardening more like a power law.

Hence the rule: fit to data that cover the strain range of the process. For cold forging that means compression or torsion tests to strains of one or two. Tensile-only fits are fine for sheet forming, not for bulk forming.

> **Ask the class:** Which of the four laws would you trust for cold heading of an aluminium rivet — and why?


## Slide 17.6 — Temperature dependence  `[PL+0:16–0:19]`

A constant c and n describe only one temperature. DEFORM allows each constant – c, n, m and y – to be a table versus temperature, which stretches the power law into warm forming.

The trends are always the same: with rising temperature the material becomes softer, so c falls; recovery limits hardening, so n falls; and the strain-rate sensitivity m rises. The table illustrates this for a medium-carbon steel – the numbers show the trend, not data for a specific grade. Note the row at 200 degrees: dynamic strain ageing, m close to zero or negative – avoid that range.

Two practical remarks. DEFORM interpolates linearly between the temperature points, so put enough points where properties change quickly. And in fast cold forging the billet heats by one to three hundred degrees from plastic work. So even a 'cold' simulation should be coupled with heat transfer and use c as a function of temperature. Above about 0.6 of the melting point, switch to the sinh law or a table.


## Slide 17.7 — Where the power law is used  `[PL+0:19–0:22]`

Where is the power law the right choice? Wherever strain hardening dominates and temperature and rate effects are small: cold forging, cold heading and cold extrusion – as long as you have data to large strains. Wire and bar drawing, where strain accumulates over many passes. Sheet stamping and deep drawing, where Swift or Hollomon together with the r-value is the standard description. Bending and roll forming. And with temperature tables, warm forging.

For sheet metal n has another very practical meaning. The empirical Keeler–Brazier relation for low-carbon steels links the lowest point of the forming limit diagram – the plane-strain limit – to n and the sheet thickness. The chart shows it: a sheet with n of 0.2 and one millimetre thickness can take about 35 percent major strain in plane strain; with n of 0.1 only half of that. That is why press shops ask for the n-value on every coil certificate.


## Slide 17.8 — Limits, summary and questions  `[PL+0:22–0:25]`

To finish: the limits. The power law is empirical, so it cannot be extrapolated safely in strain, strain rate or temperature. Hardening is unbounded, and pure Hollomon starts at zero stress – in FEM always use the y term or Swift's pre-strain. Rate and temperature enter only through m and temperature tables, so it is not a model for hot forming or impact. And it says nothing about the Bauschinger effect or anisotropy – those come from the yield function and the hardening rule, which we discuss in block 5.

The summary in four points is on the left. Then five questions – for the third one: a hundredfold rate increase with m of 0.15 raises the stress by a factor of about two. Back up to the main lecture, or straight on to Johnson–Cook.

> 🗒️ *Click – question 1 appears; wait for answers, then press “answer”.*

**Question one:** Derive that the uniform strain equals n from the Considère criterion.

> ✅ **Expected:** F = σ·A; at maximum force dF = 0 → dσ/dε = σ. With σ = Kεⁿ: nKεⁿ⁻¹ = Kεⁿ → ε_u = n.

> 🗒️ *Click – question 2 appears; wait for answers, then press “answer”.*

**Question two:** Why does Hollomon's law need a y term or Swift's pre-strain in FEM?

> ✅ **Expected:** Hollomon gives σ(0) = 0 (and an infinite initial slope), so undeformed material would flow at zero stress. The y term or Swift's ε₀ gives a finite initial yield stress.

> 🗒️ *Click – question 3 appears; wait for answers, then press “answer”.*

**Question three:** With m of 0.15, how much does the flow stress change if the strain rate rises a hundred times?

> ✅ **Expected:** σ₂/σ₁ = 100^0.15 ≈ 2.0 – the flow stress roughly doubles.

> 🗒️ *Click – question 4 appears; wait for answers, then press “answer”.*

**Question four:** Your fit used tensile data up to a strain of 0.2. Can you use it for cold heading to a strain of 2.5?

> ✅ **Expected:** No. That is extrapolation by more than ten times; laws fitted to the same tensile data differ by a factor of two at ε = 2. Use compression or torsion tests to ε ≈ 1–2.

> 🗒️ *Click – question 5 appears; wait for answers, then press “answer”.*

**Question five:** Which law saturates, and for which materials is that realistic?

> ✅ **Expected:** Voce saturates. Realistic for materials with strong dynamic recovery – aluminium and copper – and at elevated temperature; steels with little recovery keep hardening like a power law.

---

## Sources

- Ludwik, P.: *Elemente der technologischen Mechanik.* Springer, Berlin 1909
- Hollomon, J. H.: Tensile deformation. *Trans. AIME* 162 (1945) 268–290
- Swift, H. W.: Plastic instability under plane stress. *J. Mech. Phys. Solids* 1 (1952) 1–18
- Voce, E.: The relationship between stress and strain for homogeneous deformation. *J. Inst. Met.* 74 (1948) 537
- Considère, A.: Mémoire sur l'emploi du fer et de l'acier dans les constructions. *Ann. Ponts Chaussées* 9 (1885)
- ISO 10275: Metallic materials — Sheet and strip — Determination of tensile strain hardening exponent (n-value)
- Keeler, S. P.; Brazier, W. G.: Relationship between laboratory material characterization and press-shop formability. Microalloying 75 (1977) — FLD₀ relation
- Extrapolation chart: synthetic data generated and fitted for this lecture (least squares, scipy)
- SFTC: DEFORM V14 manual, Ch. 10 Material Data — power-law flow stress
