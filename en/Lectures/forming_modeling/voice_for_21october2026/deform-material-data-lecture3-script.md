# Material Data in DEFORM

*Lecture 3 · Modelling and Simulation of Processes I – Forming (MSPO2_6I) · Ing. Martin Necpal, PhD.*

Speaker script — 120 minutes, 43 slides, no break. Time stamps are hours:minutes from the start of the lecture. The same text is in the speaker notes of the HTML deck (press **S**).

| Block | Time | Slides |
|---|---|---|
| Block 1 · Why material data matters | 0:00–0:10 | 1–3 |
| Block 2 · The DEFORM material window | 0:10–0:20 | 4–7 |
| Block 3 · Elastic data | 0:20–0:30 | 8–11 |
| Block 4 · Flow stress | 0:30–1:00 | 12–22 |
| Block 5 · Yield criteria and hardening | 1:00–1:20 | 23–29 |
| Block 6 · Creep | 1:20–1:30 | 30–32 |
| Block 7 · Thermal data | 1:30–1:45 | 33–37 |
| Block 8 · Beyond mechanics | 1:45–1:55 | 38–41 |
| Block 9 · Wrap-up | 1:55–2:00 | 42–43 |

---

## Block 1 · Why material data matters

### Slide 1 — Title  `[0:00–0:02]`

Good morning. Last week we compared the forming packages and spent half an hour on DEFORM. Today we open one window in the DEFORM pre-processor – the Material window – and stay there for two hours.

That sounds narrow, but almost every number the simulation gives back – press force, temperature, die fill, grain size, cracks – is computed from what you type into that window. By the end of today you should be able to look at a material in DEFORM and say which data it needs for your process, where those data come from, and when you cannot trust them.


### Slide 2 — Agenda  `[0:02–0:04]`

Here is the plan. The order follows the tabs of the Material window and Chapter 10 of the DEFORM manual. The biggest block, half an hour, is flow stress, because for bulk forming it decides most of the answer. Then yield criteria and hardening – important for sheet metal and springback – creep, thermal data and the 'beyond mechanics' data used for microstructure and heat treatment.

There is no break, so I will put a short question to you every few slides – please answer, it keeps us both awake.


### Slide 3 — Garbage in, garbage out  `[0:04–0:10]`

Let me start with a small numerical experiment. We upset a cylinder 20 millimetres in diameter and 30 high down to 15. Same geometry, same friction coefficient. The only difference is the flow curve. Curve A is a typical library curve for a C45 steel in cold condition; curve B is what you might measure on your own annealed bar of the same nominal grade.

The forces at the end of the stroke are about 540 and 427 kilonewtons – a difference of roughly 27 percent.

> 🗒️ *Click – the mesh-versus-material point appears.*

If you refine the mesh you change the force by a few percent. If you choose the wrong flow curve you change it by tens of percent – and you might order the wrong press.

This is the meaning of 'garbage in, garbage out'. The solver is very good at solving the equations; it has no idea whether the material you gave it is the material on the shop floor. That is your job, and it is the job of today's lecture.

Look at the box at the bottom: force and energy, temperature, die fill, damage, springback, microstructure – every one of these outputs depends on a different part of the material data. We will meet all of them.

> **Ask the class:** What would you change first if the simulated force is 30 % lower than the press measured – mesh, friction or material?


## Block 2 · The DEFORM material window

### Slide 4 — Material window layout  `[0:10–0:13]`

This is the window. On the left the material list: every material used in the project, and every object – the billet, a die – refers to one of them by number. Top right the switch between Regular and Mixture; under it the Phase buttons that become active for mixtures.

Across the middle you see the tabs. Plastic holds the flow stress, yield function and hardening. Elastic – Young's modulus, Poisson's ratio and thermal expansion. Thermal – conductivity, heat capacity, emissivity and density. Then Diffusion, Dislocation, Hardness, Electro-magnetic, Advanced and Texture, which we will touch in block 8.

Two practical details. Each value can be a constant or a function of temperature; the pencil icon opens the table. And at the bottom right there is the Unit conversion button – remember it, we need it in three minutes.


### Slide 5 — Material library  `[0:13–0:15]`

Most of you will start with the library. Load from library gives you a list by material class, then by grade. The important point: the material is copied into your project. If you edit it, you edit your copy, not the library.

When you have measured your own data, use Save in library so the next project starts from your data, not from the generic ones. Export and Import move a material as a file – between colleagues, between the university and a company, or between DEFORM versions.

And the warning box: library grades are measured over a certain range of temperature and strain rate, and that range is usually written in the name. If you take a cold-forming curve into a hot forging simulation at 1100 degrees, DEFORM will not complain – it will extrapolate, and the result will be wrong. We come back to extrapolation in block 4.


### Slide 6 — Regular vs Mixture  `[0:15–0:17]`

The Regular and Mixture switch decides how many sets of data you need. For forming and machining one phase is enough: the material is a Regular material with one flow curve, one conductivity and so on.

For heat treatment the material changes during the simulation – austenite becomes ferrite, pearlite, bainite or martensite. Then you define a Mixture: each phase has its own properties and DEFORM averages them with the volume fractions, as in the simple mixture rule. On top of that the Transformation button holds the inter-phase data: the kinetics, the latent heat released, the volume change, and transformation plasticity.

The picture shows why this matters: a carburised and quenched gear with the martensite fraction. Without a mixture, you cannot get that picture, nor the distortion and residual stress that come from it.


### Slide 7 — Units trap  `[0:17–0:20]`

Now the trap. The screenshot two slides ago shows copper C10100 with a Young's modulus of 16 679. Sixteen thousand megapascals for copper? That would be seven times too soft. The number is in ksi – the material was saved in English units. 16 679 ksi is 115 gigapascals, which is correct for copper. The same for thermal expansion per degree Fahrenheit, and the reference temperature of 68 Fahrenheit, which is 20 Celsius.

DEFORM sets the unit system for the whole problem. If you bring an English-unit material into an SI problem, convert it with the Unit conversion button – do not retype numbers by hand. Note the SI units DEFORM uses: stress in megapascals, density in tonnes per cubic millimetre – 7.7 times ten to the minus nine for steel – and heat capacity per volume in newtons per square millimetre per degree.

The right table answers the question 'which tabs do I really need?' An isothermal forging needs only the Plastic tab. As soon as temperature changes, Thermal data are needed. Elastic data only when elastic strains matter – springback, residual stress, die stress. Heat treatment needs everything.

> **Ask the class:** Copper with E = 16 679 MPa – what is wrong, and how do you check it in ten seconds?


## Block 3 · Elastic data

### Slide 8 — When elastic data are needed  `[0:20–0:22]`

Elastic data are often left at library defaults, so let us be clear about when they matter. For a rigid-plastic billet – the standard object type for forging – DEFORM neglects elastic strain. Young's modulus is simply not used. The plastic strains are hundreds of percent, the elastic ones a fraction of a percent.

Elastic data become essential in three cases. First, elastic dies: the die stress picture here, die inserts and shrink rings. Second, elasto-plastic workpieces where we care about what happens at unloading – springback in sheet forming, residual stresses. Third, heat treatment, where the total strain is the sum of elastic, plastic, thermal and transformation parts, and distortion comes from their interplay.


### Slide 9 — E and ν  `[0:22–0:25]`

Hooke's law, Poisson's ratio and the shear modulus – you know these from strength of materials. In DEFORM you enter E and nu; the shear and bulk moduli follow.

Look at the bar chart on a logarithmic scale. Forming metals sit in a narrow band between about 45 and 210 gigapascals; carbide die inserts are three times stiffer than steel, which is exactly why they are used where the die must not deflect.

One consequence you will see in the sheet metal lecture: springback scales with stress divided by modulus. Aluminium has a third of the modulus of steel, so for the same stress it springs back about three times more. That is why aluminium car panels are a springback problem.


### Slide 10 — E(T) and α(T)  `[0:25–0:28]`

Both elastic properties depend on temperature. The left chart is the Eurocode reduction factor for the modulus of carbon steel: at 600 degrees only about a third of the room-temperature value remains, and close to forging temperature almost nothing. If you simulate quenching from 850 degrees with a constant modulus of 210 gigapascals, you will badly overestimate the stresses at the start of cooling.

On the right, thermal expansion of several steels as stored in DEFORM. Notice the field 'Reference temperature' in the Elastic tab. DEFORM uses a secant coefficient: the thermal strain is alpha times the difference from the reference temperature. If you copy instantaneous values from a handbook, they are not the same thing – check which one your source gives.

And for heat treatment: austenite expands more than ferrite, so in a mixture each phase needs its own alpha – the volume change at transformation is a separate input in the Transformation dialog.


### Slide 11 — Hyperelastic materials  `[0:28–0:30]`

The last elastic topic is hyperelasticity – materials like rubber that stretch several hundred percent and still recover. Linear elasticity fails here: look at the chart. Up to a few percent the two curves agree; at larger stretches the neo-Hookean curve departs from the straight line, and in compression it stiffens strongly.

Instead of E and nu, a hyperelastic model uses a strain-energy function. Neo-Hookean has one constant, Mooney–Rivlin two. In forming you meet them in rubber-pad forming of aircraft sheet parts, in flexible dies, and when seals are part of an assembly. One rule: fit the constants from at least two deformation modes, because a fit to tension alone can be unstable in compression.

That closes the elastic block. Now the heart of the lecture – flow stress.


## Block 4 · Flow stress

### Slide 12 — Flow stress definition  `[0:30–0:33]`

Flow stress is the true stress needed to keep the material flowing plastically at a given strain, strain rate and temperature. This equation – sigma bar as a function of epsilon bar, epsilon bar dot and T – is the one line you should remember from today.

Left: engineering and true curves. Tensile machines give force and elongation, which are engineering values. FEM needs true stress and logarithmic strain; the conversion formulas are here, and they are valid only until necking starts.

In the middle: loading beyond the yield point leaves permanent strain. A rigid-plastic code like DEFORM uses only the plastic part of the curve – so the flow curve in DEFORM starts at the initial yield stress at zero plastic strain.


### Slide 13 — Effect of T and strain rate  `[0:33–0:35]`

Two curves from the course textbook: at fixed strain rate, raising the temperature lowers the curve; at fixed temperature, raising the strain rate raises it. How strong each effect is depends on the homologous temperature – temperature divided by the melting point in kelvin.

Cold forming, below about 0.3 of the melting point: strain hardening dominates and the rate sensitivity m is close to zero. Hot forming, above about half the melting point: hardening is balanced by recovery and dynamic recrystallisation, the curve flattens and the rate sensitivity rises to 0.1–0.2. Superplastic alloys go beyond 0.3.

Do not forget that temperature itself changes during forming: about 90 percent of the plastic work becomes heat. In fast cold forging the billet can heat up by a hundred degrees or more, so even a 'cold' simulation needs thermal data.

> **Ask the class:** Steel at 1100 °C, T_m ≈ 1500 °C: cold, warm or hot forming? And aluminium at 20 °C?


### Slide 14 — Testing for flow curves  `[0:35–0:39]`

Where do these curves come from? Four tests. The tensile test is the standard, but necking limits it to strains of 0.2 or 0.3 – useless on its own for forging, where strains reach 2 or 3.

Compression – upsetting a cylinder – reaches strains around one. Its weakness is friction: the specimen barrels, the stress is no longer uniaxial and the measured force must be corrected, often by inverse FEM in DEFORM itself.

The Gleeble – the photo – is a thermomechanical simulator. It heats the specimen by direct resistance and compresses it at controlled temperature and strain rate; this is how most hot flow curves in libraries are measured. There is a short Gleeble video linked under the picture if you want to see it.

For strain rates of thousands per second – machining, impact – we use the split Hopkinson pressure bar, the sketch on the right: a striker hits a bar, the wave passes through a small specimen, and strain gauges give stress and strain rate.

The table says what each test is good for. Torsion I add for completeness: it reaches enormous strains and is used for hot rolling and recrystallisation studies.


### Slide 15 — Tabular data and interpolation  `[0:39–0:42]`

The most common form of flow stress in DEFORM is a table: a set of curves, each for one temperature and one strain rate, each sampled at several strains. On the left you see the DEFORM graph and the table behind it.

Between the table points the program has to interpolate. Strain rate in forging spans five or six decades, so it matters how. On the right I took four points of that table – strain rates 1, 10, 100 and 1000 – and asked for the value at 50 per second. Linear interpolation gives about 1012 megapascals, logarithmic about 1028. The difference here is modest, but it grows when the table is coarse. Flow stress is roughly linear in the logarithm of strain rate, so logarithmic interpolation is the physically sensible choice.

A good table has five to eight temperatures and four to six strain rates covering the process. That last condition is the subject of the next slide.


### Slide 16 — Extrapolation warning  `[0:42–0:45]`

What happens outside the table? The program has to guess, either by holding the last value or by extending the last slope. Left chart: the material follows Johnson–Cook, but the table only goes to 10 per second. Used in a machining simulation at ten thousand per second, the clamped table underestimates the flow stress by about 8.2 percent – and that is at room temperature, with a mild rate effect.

The right chart is a map you should keep in your head. Horizontal axis: strain rate on a log scale. Vertical: homologous temperature. Dashed boxes are where tests can reach; solid boxes are where processes run. Hot forging overlaps well with Gleeble compression. Machining sits at strain rates only the Hopkinson bar approaches. Service creep is at strain rates a million times slower than any forming test.

So the practical rule: after the first run, open the post-processor, check the maximum strain, strain rate and temperature, and compare them with the table. DEFORM will not warn you.

> **Ask the class:** Your table ends at ε = 1.0; the simulation reaches ε = 3 in the flash. What does DEFORM use there, and does it matter?


### Slide 17 — Power law  `[0:45–0:47]`

Now the equations. The first one in DEFORM's list is the power law: c times strain to the n, times strain rate to the m, plus y. Without the rate term and offset it is Hollomon's law; Swift adds a pre-strain epsilon zero.

The exponent n is the strain-hardening exponent. In a tensile test it equals the uniform strain at necking – that is a nice check of your fit. Look at the chart: with n of 0.35 the curve keeps rising; with 0.1 it is almost flat after the first few percent. Stainless steel has n around 0.45, which is why it work-hardens so much in deep drawing.

One practical point. Pure Hollomon gives zero stress at zero strain – an infinitely soft material at the start. DEFORM solves that with the y term, or you use Swift. In DEFORM c, n, m and y can each be a function of temperature, which is enough for simple warm forming.


### Slide 18 — Johnson–Cook  `[0:47–0:50]`

Johnson–Cook is the standard model for machining and impact. It is a product of three brackets: hardening, rate and thermal softening. Each bracket has its own constants and they do not interact – which makes fitting easy, and is also its weakness.

The constants here are for AISI 1045, published by Jaspers and Dautzenberg from Hopkinson bar tests, and the chart is computed from them. Going from 1 to ten thousand per second raises the curve by about 12 percent; heating to 700 degrees removes roughly half the strength.

DEFORM's version in the dropdown list has two extra parameters – a power on the strain rate and a more flexible temperature bracket. The model is excellent for machining, where strain rates are extreme and temperatures moderate. It is poor near the melting point and in hot forging, where recrystallisation couples temperature and strain rate – which the separate brackets cannot represent.


### Slide 19 — Zerilli–Armstrong  `[0:50–0:52]`

Zerilli and Armstrong derived their model from dislocation mechanics. The key physical insight is the difference between crystal lattices. In body-centred cubic metals – ferritic steels – temperature and strain rate act mainly on the yield stress, because dislocations must overcome the lattice resistance. In face-centred cubic metals – copper, aluminium, nickel – they act on the hardening term.

The chart uses the original 1987 constants. Between liquid-nitrogen temperature and room temperature iron loses about half of its strength, copper only about a third – and copper's initial yield stress hardly changes at all. That is the well-known low-temperature brittleness of ferritic steels versus the toughness of copper and austenitic steels.

DEFORM offers the BCC form in its list. Use ZA rather than Johnson–Cook when you need a physically based temperature–rate coupling, for example for high-rate forming over a wide temperature range.


### Slide 20 — Hot forming: Norton–Hoff and sinh-Arrhenius  `[0:52–0:55]`

For hot forming the standard approach combines temperature and strain rate into one parameter – the Zener–Hollomon parameter Z, strain rate times exp of Q over RT. Q is the activation energy for hot deformation: about 300 to 320 kilojoules per mole for carbon–manganese steels, half that for aluminium.

The hyperbolic-sine law of Sellars and Tegart relates Z to the flow stress. It behaves like a power law at low stresses and like an exponential at high stresses, which fits hot-working data over many decades. Invert it, and you have stress as a function of Z – the chart. At 1000 degrees and one per second the steady-state stress is about 110 megapascals; going to 900 degrees and ten per second nearly doubles it.

Norton–Hoff is the viscoplastic power law used in several European codes – stress proportional to strain rate to the m. In DEFORM's dropdown you find both the sinh form and the power-exponential form with the activation energy written as delta H.


### Slide 21 — Beyond equations  `[0:55–0:57]`

The dropdown list on the left shows that DEFORM offers more than the classical equations. Let me go through the table.

A dislocation-density model computes flow stress from the dislocation density, which itself evolves with strain, strain rate and temperature – useful when the material history matters, for example between hits in multi-step hot forging.

Texture and crystal plasticity models start from grain orientations; they matter for titanium, magnesium and sheet earing.

Since version 13 there is a deep-neural-network predictor that estimates a flow curve from chemical composition – very handy in early design when you have no test data, but treat it as an estimate.

And if nothing fits, you can write your own subroutine and compile it into the solver. Finally, the Material Suite, a separate SFTC tool, fits flow stress from compression tests and computes TTT diagrams and JMAK constants.


### Slide 22 — Choosing a flow stress model  `[0:57–1:00]`

To close the flow-stress block, a decision guide. Start with the process. Cold forming – power law, because hardening dominates. Warm and hot forging – a measured table, or a sinh-Arrhenius model if you have to extrapolate in temperature. Machining – Johnson–Cook or Zerilli–Armstrong. Long holding at temperature – a creep model, which is our block 6. Sheet forming with springback – anisotropic yield and kinematic hardening, which is block 5.

And under everything the red line: whatever model you pick, compare the range of strain, strain rate and temperature it was fitted to with the range your process reaches. That is half an hour of material in one sentence.

> **Ask the class:** Hot forging of a crankshaft at 1200 °C — which model, and which test would you order?


## Block 5 · Yield criteria and hardening

### Slide 23 — Stress tensor to effective stress  `[1:00–1:03]`

A flow curve comes from a uniaxial test, but in a forging every point has a full three-dimensional stress state – nine components, six independent. How do we compare them? We condense the tensor into one number, the effective stress, and say the material yields when the effective stress reaches the flow stress.

First we remove the hydrostatic part, the mean stress, because pressure alone does not make dense metals yield. What remains is the deviatoric stress. The von Mises effective stress is the square root of three halves of its double contraction – or, in principal stresses, the familiar formula with the three differences.

How exactly the effective stress is computed is set by the yield function in the Plastic tab. That is the next three slides.


### Slide 24 — von Mises and Tresca  `[1:03–1:06]`

The two classical isotropic criteria. Tresca says yielding starts when the maximum shear stress reaches a critical value – the hexagon. Von Mises uses the effective stress from the previous slide – the ellipse.

They agree in uniaxial tension and in equibiaxial tension, and differ most in pure shear, by about 15 percent. Experiments on most metals lie closer to von Mises, and because the ellipse is smooth it is much easier for a finite element solver. That is why von Mises is the default in DEFORM and in almost every forming code.

On the right, the DEFORM dropdown for the yield function: von Mises, the Hill quadratic forms, and further options. Bulk forming of isotropic billets – stay with von Mises. Sheets with rolling texture – the next slide.


### Slide 25 — Hill 48  `[1:06–1:09]`

Rolled sheets are not isotropic: rolling creates a texture, and the sheet behaves differently along the rolling direction, across it and through the thickness. Hill proposed in 1948 the simplest extension of von Mises for such orthotropic materials – a quadratic function with six constants, F, G, H for the normal stress differences and L, M, N for shear.

If you set F, G and H equal and L, M, N three times larger, you get von Mises back – a good check of the input.

In DEFORM you can type the six constants directly – this dialog – or let DEFORM compute them from R-values. The relations are at the bottom: three R-values measured at 0, 45 and 90 degrees define the ratios.


### Slide 26 — R-values, Lankford, Barlat  `[1:09–1:12]`

The R-value, or Lankford coefficient, is measured in a tensile test of sheet: the ratio of width strain to thickness strain. R greater than one means the sheet resists thinning – good for deep drawing. Deep-drawing steels like DC04 have average R values of about 1.6 to 1.9.

The variation of R with direction, delta r, produces ears on drawn cups – the sketch in the middle: four ears at 0 and 90 degrees when delta r is positive.

On the right, the Hill yield locus for R of 1.8 and 0.6 compared with von Mises. High R stretches the locus along the biaxial direction – the sheet is stronger in equibiaxial stretching. Aluminium alloys, with R below one, show behaviour Hill 48 cannot describe well; Barlat's 1991 non-quadratic criterion with exponent 8 for FCC metals was designed for that.


### Slide 27 — Isotropic hardening  `[1:12–1:14]`

Hardening describes how the yield surface changes as plastic strain accumulates. On the left you see the effect: after deformation the material needs a higher stress to deform further.

In isotropic hardening the yield surface keeps its centre and grows uniformly – the left circle. The radius is simply the flow stress at the current plastic strain. That is exactly what the flow curve describes, so isotropic hardening needs no extra data. It is the DEFORM default and it is exact as long as loading goes in one direction – which is true for most forging.


### Slide 28 — Kinematic hardening and Bauschinger  `[1:14–1:17]`

Kinematic hardening is the other extreme: the yield surface keeps its size but moves, the centre shifted by the back stress alpha. Why would that matter? Look at the chart. We pull the material to 5 percent strain, then reverse. With isotropic hardening it yields again in compression only at the same magnitude it reached in tension. With kinematic hardening the elastic range stays two times sigma zero wide, so it yields in compression much earlier. That early reverse yielding is the Bauschinger effect, and real metals show it.

In sheet forming the metal bends and unbends over die radii and drawbeads – exactly a load reversal. Ignore the Bauschinger effect and springback predictions are off. The simplest laws are Prager and Ziegler; Armstrong–Frederick adds saturation. In practice a mixed rule – part isotropic, part kinematic – is selected in the hardening rule dropdown.

> **Ask the class:** Which hardening rule for a closed-die forging, and which for a U-channel with springback?


### Slide 29 — Yoshida–Uemori and springback  `[1:17–1:20]`

Advanced high-strength steels are the toughest springback case, and the model most used for them is Yoshida–Uemori. It uses two surfaces: a small yield surface moving inside a larger bounding surface. That captures details plain kinematic hardening misses – the smooth transient after reversal, permanent softening and hardening stagnation.

Another effect matters as much: the unloading modulus of steel drops by 10 to 20 percent after plastic straining. The formula here describes that degradation, and many springback studies show it is as important as the hardening model.

Use the box as your springback checklist: elasto-plastic object, degraded modulus, kinematic or Yoshida–Uemori hardening, anisotropic yield and enough elements through the thickness. Yoshida–Uemori needs about seven constants from cyclic tests – not something you find in a generic library.


## Block 6 · Creep

### Slide 30 — Creep basics  `[1:20–1:24]`

Creep is slow plastic flow at constant stress. It becomes important above roughly 0.4 of the melting temperature – for steel that is from about 450 degrees, for aluminium near room temperature for long times, for lead even at room temperature.

The creep curve has three stages: primary creep, where the rate decreases as the material hardens; secondary or steady-state creep at a minimum rate, where hardening and recovery balance; and tertiary creep, where voids and necking accelerate it to rupture. Higher stress – the red curve – shortens everything.

In DEFORM creep is an additional strain-rate term next to elastic, plastic and thermal strain, switched on in the Plastic tab for elasto-plastic objects – the dialog on the right.


### Slide 31 — Creep models in DEFORM  `[1:24–1:27]`

The DEFORM creep options. The most common is Norton's power law: creep rate proportional to stress to the n. It describes steady-state creep and is used for stress relaxation. Bailey–Norton adds time to a power below one, which also captures primary creep.

Perzyna is a viscoplastic overstress model: creep rate depends on how far the stress exceeds the yield stress. Soderberg and the exponential law cover low and high stress ranges, and the tabular option takes measured data directly.

A note on the Norton exponent: three to eight means dislocation creep; about one means diffusion creep, typical of fine-grained or superplastic materials. And creep data extrapolate even worse than flow stress – fit them to the stress and temperature range you simulate.


### Slide 32 — Creep in forming practice  `[1:27–1:30]`

Where do you meet creep in forming? First, stress relaxation. A shrink-fit ring around a hot die insert is assembled with a certain preload; at working temperature the preload drops by creep. The chart shows Norton relaxation: the stress falls fast at first and then slowly – after tens of hours a large part of the preload is gone.

Second, isothermal and hot-die forging of titanium and nickel alloys at very low strain rates, and superplastic forming – there the forming process itself is creep-like.

Third, stress-relief annealing and hot sizing, where we want creep to remove residual stress. The photo shows the classic dead-weight creep frame – a test that runs for thousands of hours.

That is creep. Now thermal data – fifteen minutes.


## Block 7 · Thermal data

### Slide 33 — Thermal tab  `[1:30–1:33]`

The Thermal tab has four lines: conductivity, heat capacity – or specific heat, there is a switch – emissivity and density. They enter the heat equation on the slide: heat stored equals heat conducted plus heat generated by plastic work, by phase transformation and by induction.

Note the beta times sigma times epsilon-dot term: that is the plastic work converted to heat, with beta around 0.9 – the coupling between mechanics and temperature.

The units again: conductivity in newtons per second per degree, which is the same as watts per metre-kelvin, so you can copy handbook values directly. Heat capacity is per volume, in newtons per square millimetre per degree. That one confuses people – two slides from now.


### Slide 34 — Thermal conductivity k(T)  `[1:33–1:36]`

Conductivity decides how fast heat moves inside the part. The chart: carbon steel starts around 54 watts per metre-kelvin and falls to about 27 at 800 degrees; austenitic stainless starts at 15 and rises. Using a room-temperature constant for a hot forging is therefore a factor-of-two error.

The table shows the range: copper conducts 50 times better than titanium. Titanium and nickel alloys conduct heat poorly, so the surface touching a cold die chills while the core stays hot – and in fast deformation the heat stays in shear bands. That is why titanium forgings are so sensitive to die temperature and why titanium is hard to machine.


### Slide 35 — Heat capacity vs specific heat  `[1:36–1:39]`

Here is the confusing one. DEFORM's default is heat capacity – energy per volume per degree – not specific heat per mass. For steel: 7850 kilograms per cubic metre times 440 joules per kilogram-kelvin gives about 3.45 megajoules per cubic metre per kelvin, which in DEFORM units is 3.45 newtons per square millimetre per degree. If you type 440 there, your billet will practically never heat up.

The alternative is the Specific heat option; then DEFORM multiplies by density itself – which is the reason density is in the Thermal tab.

The chart is the Eurocode specific heat of carbon steel. Notice the peak at about 735 degrees – the alpha to gamma transformation absorbs latent heat. In a Regular material this peak represents the latent heat. In a Mixture the latent heat is entered in the transformation data – so you must not have it twice.

> **Ask the class:** A student enters c_p = 460 into the heat-capacity field of an SI problem. What happens to the billet temperature?


### Slide 36 — Emissivity and density  `[1:39–1:42]`

Emissivity controls radiation from free surfaces. Radiation goes with the fourth power of absolute temperature, so for a billet at 1200 degrees it dominates the heat loss during transfer from the furnace to the press. Oxidised steel has an emissivity of 0.7 to 0.9 – the 0.7 you saw in the screenshot. Polished aluminium is below 0.1 – which is why aluminium billets cool slowly by radiation.

The picture is open-die cogging of a large ingot: the process takes hours, and most of the temperature loss happens by radiation between the passes. Here emissivity is a first-order input.

Density has three roles: mass and inertia for hammers and screw presses, the specific-heat option, and density as a function of temperature, which produces volume change in heat treatment.


### Slide 37 — Interface HTC and Inverse HTC  `[1:42–1:45]`

The last thermal item is not in the Material window, but it belongs here: heat transfer between die and workpiece. The heat flux is h times the temperature difference, and h depends on contact pressure, time, lubricant and scale. It is set in the Inter-object dialog. DEFORM's default for forming contact is about 11 kilowatts per square metre-kelvin, and 0.02 for convection at free surfaces.

Where do better values come from? The three pictures are SFTC's Inverse HTC module: you run a test with thermocouples in the die or the part, then DEFORM changes h until the simulated temperature curves match the measured ones, and returns the fitted h.

Keep this idea of inverse analysis – it is the same trick used to correct friction in compression tests for flow stress. Simulation is not only a user of material data; it is also a tool to measure them.


## Block 8 · Beyond mechanics

### Slide 38 — Grain size and JMAK  `[1:45–1:48]`

Block 8 – data that go beyond mechanics. First, microstructure. During and after hot deformation the material recrystallises, and the recrystallised fraction follows the JMAK or Avrami equation – the S-shaped curves. The time to 50 percent recrystallisation depends on the initial grain size, strain, strain rate and temperature through an Arrhenius term: at 1100 degrees it is a fraction of a second, at 900 degrees tens of seconds.

Similar equations give the grain size after dynamic recrystallisation and grain growth during holding. In DEFORM these constants are entered under the Grain button in the Phase area.

The result is the picture on the right: grain size in a forged turbine disc. For aerospace discs the customer specifies grain size, not only shape – so this is a design quantity.


### Slide 39 — Phase transformation and hardness  `[1:48–1:50]`

For heat treatment, each phase change needs kinetics. Diffusional transformations – ferrite, pearlite, bainite – follow Avrami equations whose constants come from the TTT diagram, extended to continuous cooling by the additivity rule. Martensite is athermal and follows Koistinen–Marburger: the fraction depends only on how far below the Ms temperature you are.

Hardness is then a mixture of phase hardnesses, each depending on composition and cooling rate – this is the Hardness tab. TTT data come from dilatometer tests or are computed from composition, for example in SFTC's Material Suite or JMatPro.

The pictures: residual hoop stress after quenching a disc – the result of transformation volume change and thermal contraction – and a cold-headed nut, where the hardness distribution comes from strain hardening alone.


### Slide 40 — Diffusion and electro-magnetic data  `[1:50–1:52]`

Two more tabs. Diffusion is used for carburising and nitriding: Fick's second law with a temperature-dependent diffusion coefficient. For carbon in austenite, D zero is about 2.3 times ten to the minus five square metres per second and the activation energy about 148 kilojoules per mole. The carbon content then changes the Ms temperature, the hardness and the TTT curves – so diffusion couples to the phase data.

The Electro-magnetic tab holds electrical resistivity and magnetic permeability for induction heating. The key physics is the skin depth. Below the Curie point steel is ferromagnetic and the current flows in a thin skin; above about 770 degrees the permeability drops to one, the skin depth grows roughly tenfold and the heating zone moves inward. Without temperature-dependent permeability you cannot predict the hardened contour on this gear.


### Slide 41 — Fracture: Cockcroft–Latham  `[1:52–1:55]`

Last topic: fracture. DEFORM offers many ductile damage criteria; the most used is normalised Cockcroft–Latham. Damage is the integral of the maximum principal stress over effective stress along the strain path, counting only tensile stress. When D reaches the critical value C, a crack is expected.

In upsetting – the sketch – the bulging surface has tensile hoop stress, so damage grows there first; that is where cold-heading cracks appear. In cross-wedge rolling, on the right, the centre of the bar is loaded in alternating tension and can open – the Mannesmann effect.

The important point for material data: C is not universal. You calibrate it by simulating a test – upsetting, tension, notched bars – to the strain at which the real specimen cracked. Its value depends on the steel cleanliness and temperature. A C value from a different heat of material is only a rough guide.

> **Ask the class:** Why does damage grow at the equator of an upset cylinder but not at its centre?


## Block 9 · Wrap-up

### Slide 42 — Checklist per process  `[1:55–1:58]`

Here is the summary of the whole lecture in one table – keep it for the seminars. Find your process in the left column and read across which data you need. The bold entries are the ones students most often forget: the thermal set for hot forging, the anisotropy and kinematic hardening for springback, and the transformation data for heat treatment.

And the four checks at the bottom, for every simulation: units, validity range, temperature dependence, and one validation against a measurement – the press force or a thermocouple. If all four pass, you can start to trust the colourful pictures.


### Slide 43 — Quiz and sources  `[1:58–2:00]`

Eight questions to finish – they are all on the slide; shout the answers. These are the types of questions you will see in the written exam.

On the right are the main sources: the DEFORM manual, our textbook, and the original papers of the models we used. All the charts in this lecture were computed from the equations on the slides with the constants given there, so you can reproduce them. Next week: preprocessing – mesh, boundary conditions and friction. Thank you.

> 🗒️ *All questions are visible at once; after the answers press “answer” next to each question.*

**Question one:** Write the general flow-stress function and name its three variables.

> ✅ **Expected:** σ̄ = f(ε̄, ε̇̄, T): effective plastic strain, effective strain rate and temperature.

**Question two:** Why can a rigid-plastic forging simulation run without Young's modulus and Poisson's ratio?

> ✅ **Expected:** In bulk forming the plastic strains (hundreds of %) dwarf the elastic ones (fractions of a %), so the rigid-plastic formulation neglects elasticity. E and ν are needed only for elastic dies, springback / residual stresses and heat treatment.

**Question three:** Which flow-stress model would you use for machining, which for hot forging – and why?

> ✅ **Expected:** Machining: Johnson–Cook (or Zerilli–Armstrong) – very high strain rates and adiabatic heating. Hot forging: a measured table σ(ε, ε̇, T) or the sinh-Arrhenius law – thermally activated flow where T and ε̇ interact.

**Question four:** What happens if the process exceeds the strain-rate range of a table?

> ✅ **Expected:** DEFORM extrapolates without a warning – it holds the last value or extends the last slope – so the flow stress there is a guess (e.g. a table to 10 s⁻¹ used at 10⁴ s⁻¹ is ≈ 8 % too low). Compare max ε, ε̇, T from the post-processor with the table range.

**Question five:** How do R-values enter the Hill 48 criterion? And what does delta r predict?

> ✅ **Expected:** R-values at 0°, 45° and 90° set the ratios of Hill's constants (H/G = r₀, H/F = r₀/r₉₀, …). Δr = (r₀ − 2r₄₅ + r₉₀)/2 predicts earing of drawn cups: Δr > 0 → ears at 0° and 90°, Δr < 0 → ears at 45°.

**Question six:** Isotropic versus kinematic hardening: what happens to the yield surface?

> ✅ **Expected:** Isotropic: the yield surface grows uniformly around a fixed centre (radius = current flow stress). Kinematic: it keeps its size and moves by the back stress α → early reverse yielding (Bauschinger effect), important for springback.

**Question seven:** Heat capacity versus specific heat – what does DEFORM expect in SI units?

> ✅ **Expected:** Heat capacity is per volume (ρ·c_p), specific heat per mass. DEFORM's default field expects heat capacity: steel ≈ 7850 kg/m³ × 440 J/(kg·K) ≈ 3.45 N/(mm²·°C) = 3.45 MJ/(m³·K). Typing 460 there makes the billet practically never heat up.

**Question eight:** How is the Cockcroft–Latham constant C obtained?

> ✅ **Expected:** By calibration: simulate a test (upsetting, tension, notched bar) to the strain at which the real specimen cracked; the damage D at the crack site at that moment is C. It depends on the heat of material, cleanliness and temperature.

