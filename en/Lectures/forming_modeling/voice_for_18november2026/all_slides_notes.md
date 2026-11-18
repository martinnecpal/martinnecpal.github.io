# Cold Drawing of Seamless Tubes: Theory, Simulation and Validation

**Spoken text — Lecture 4** · Modelling and Simulation of Processes II – Forming (MSPO2_6I) · MTF STU Trnava

Presentation: 18november2026.html (78 main slides + 7 sub-slides in deep dives) · Duration: 152 minutes (deep dives extra, not counted)

> [!TIP]
> **How to use this text**
>
> - Each block corresponds to one slide: [number · title · time].
> - Lines starting with 🗒️ are instructions for the lecturer and are not read aloud.
> - Assumed speaking pace: about 110–120 words per minute. Times are computed from the text length, but every content slide gets at least 2 minutes for board work and discussion; review questions get extra time for student answers.
> - The deep dives (slides 26.1–26.4 and 64.1–64.3) are optional; their times `SM+…` and `DO+…` are not counted in the lecture duration.

## Slide overview

| # | Slide | Time |
|--:|---|---|
| | **[INTRODUCTION](#introduction-000--014)** | **0:00 – 0:14** |
| 1 | [Title slide](#slide-1--title-slide) | 0:00–0:02 |
| 2 | [Why tube drawing?](#slide-2--why-tube-drawing) | 0:02–0:04 |
| 3 | [What tubes are drawn from, and in what sizes](#slide-3--what-tubes-are-drawn-from-and-in-what-sizes) | 0:04–0:06 |
| 4 | [First hot: billet and rolling](#slide-4--first-hot-billet-and-rolling) | 0:06–0:08 |
| 5 | [Then cold: the precision tube route](#slide-5--then-cold-the-precision-tube-route) | 0:08–0:10 |
| 6 | [Where today's lecture fits](#slide-6--where-todays-lecture-fits) | 0:10–0:12 |
| 7 | [Today's agenda](#slide-7--todays-agenda) | 0:12–0:14 |
| | **[PART I — FUNDAMENTALS OF THE DRAWING PROCESS](#part-i--fundamentals-of-the-drawing-process-014--040)** | **0:14 – 0:40** |
| 8 | [Part I — Fundamentals of the drawing process](#slide-8--part-i--fundamentals-of-the-drawing-process) | 0:14 |
| 9 | [The principle of drawing](#slide-9--the-principle-of-drawing) | 0:14–0:16 |
| 10 | [Wire, bar and tube – what they share and how they differ](#slide-10--wire-bar-and-tube--what-they-share-and-how-they-differ) | 0:16–0:18 |
| 11 | [Die geometry](#slide-11--die-geometry) | 0:18–0:20 |
| 12 | [Four methods of tube drawing](#slide-12--four-methods-of-tube-drawing) | 0:20–0:22 |
| 13 | [Comparison of drawing methods](#slide-13--comparison-of-drawing-methods) | 0:22–0:24 |
| 14 | [Plugs and their position](#slide-14--plugs-and-their-position) | 0:24–0:26 |
| 15 | [Pointing – no point, no drawing](#slide-15--pointing--no-point-no-drawing) | 0:26–0:28 |
| 16 | [Reduction, strain and elongation coefficient](#slide-16--reduction-strain-and-elongation-coefficient) | 0:28–0:30 |
| 17 | [Stress and strain state in the die](#slide-17--stress-and-strain-state-in-the-die) | 0:30–0:32 |
| 18 | [Key process parameters](#slide-18--key-process-parameters) | 0:32–0:34 |
| 19 | [What affects the accuracy of a drawn tube](#slide-19--what-affects-the-accuracy-of-a-drawn-tube) | 0:34–0:36 |
| 20 | [Cold work hardening: one draw, a big change](#slide-20--cold-work-hardening-one-draw-a-big-change) | 0:36–0:38 |
| 21 | [What the model must capture](#slide-21--what-the-model-must-capture) | 0:38–0:40 |
| | **[PART II — ANALYTICAL METHODS OF DRAWING](#part-ii--analytical-methods-of-drawing-040--100)** | **0:40 – 1:00** |
| 22 | [Part II — Analytical methods of drawing](#slide-22--part-ii--analytical-methods-of-drawing) | 0:40 |
| 23 | [Why analytics first – and notation](#slide-23--why-analytics-first--and-notation) | 0:40–0:42 |
| 24 | [Ideal deformation – the lower bound](#slide-24--ideal-deformation--the-lower-bound) | 0:42–0:44 |
| 25 | [The slab method](#slide-25--the-slab-method) | 0:44–0:46 |
| 26 | [Fixed-plug drawing – three zones](#slide-26--fixed-plug-drawing--three-zones) | 0:46–0:48 |
| 26.1 | [Zone I – diameter reduction](#slide-261--zone-i--diameter-reduction) | SM+0:00–0:01 |
| 26.2 | [Zone II – reduction of diameter and wall](#slide-262--zone-ii--reduction-of-diameter-and-wall) | SM+0:01–0:02 |
| 26.3 | [Zone III – bearing and drawing force](#slide-263--zone-iii--bearing-and-drawing-force) | SM+0:02–0:03 |
| 26.4 | [Summary and questions](#slide-264--summary-and-questions) | SM+0:03–0:04 |
| 27 | [Redundant work and a Siebel-type formula](#slide-27--redundant-work-and-a-siebel-type-formula) | 0:48–0:50 |
| 28 | [Optimum die angle](#slide-28--optimum-die-angle) | 0:50–0:52 |
| 29 | [Maximum reduction per pass](#slide-29--maximum-reduction-per-pass) | 0:52–0:54 |
| 30 | [Worked example: bar Ø10 mm, r = 20 %](#slide-30--worked-example-bar-ø10-mm-r--20-) | 0:54–0:56 |
| 31 | [Analytics versus measurement for a tube](#slide-31--analytics-versus-measurement-for-a-tube) | 0:56–0:58 |
| 32 | [What analytics can – and cannot – do](#slide-32--what-analytics-can--and-cannot--do) | 0:58–1:00 |
| | **[PART III — NUMERICAL SIMULATION AND MODEL SETUP](#part-iii--numerical-simulation-and-model-setup-100--132)** | **1:00 – 1:32** |
| 33 | [Part III — Numerical simulation and setting up a drawing model](#slide-33--part-iii--numerical-simulation-and-setting-up-a-drawing-model) | 1:00 |
| 34 | [A model = four independent choices](#slide-34--a-model--four-independent-choices) | 1:00–1:02 |
| 35 | [Typical combinations in software](#slide-35--typical-combinations-in-software) | 1:02–1:04 |
| 36 | [Basic tube drawing model – inputs](#slide-36--basic-tube-drawing-model--inputs) | 1:04–1:06 |
| 37 | [Material models in our studies](#slide-37--material-models-in-our-studies) | 1:06–1:08 |
| 38 | [Friction – the most sensitive input](#slide-38--friction--the-most-sensitive-input) | 1:08–1:10 |
| 39 | [Implicit analysis](#slide-39--implicit-analysis) | 1:10–1:12 |
| 40 | [Explicit analysis](#slide-40--explicit-analysis) | 1:12–1:14 |
| 41 | [Implicit or explicit?](#slide-41--implicit-or-explicit) | 1:14–1:16 |
| 42 | [Lagrangian description – the mesh moves with the material](#slide-42--lagrangian-description--the-mesh-moves-with-the-material) | 1:16–1:18 |
| 43 | [ALE and the Eulerian description](#slide-43--ale-and-the-eulerian-description) | 1:18–1:20 |
| 44 | [Rigid-plastic versus elastic-plastic formulation](#slide-44--rigid-plastic-versus-elastic-plastic-formulation) | 1:20–1:22 |
| 45 | [2D axisymmetric or 3D?](#slide-45--2d-axisymmetric-or-3d) | 1:22–1:24 |
| 46 | [How we set up the models in DEFORM](#slide-46--how-we-set-up-the-models-in-deform) | 1:24–1:26 |
| 47 | [What to expect from which simulation](#slide-47--what-to-expect-from-which-simulation) | 1:26–1:28 |
| 48 | [Typical numerical problems and remedies](#slide-48--typical-numerical-problems-and-remedies) | 1:28–1:30 |
| 49 | [How to choose a model](#slide-49--how-to-choose-a-model) | 1:30–1:32 |
| | **[PART IV — CASE STUDIES FROM OUR OWN RESEARCH](#part-iv--case-studies-from-our-own-research-132--208)** | **1:32 – 2:08** |
| 50 | [Part IV — Case studies from our own research](#slide-50--part-iv--case-studies-from-our-own-research) | 1:32 |
| 51 | [Map of the studies: one line of research](#slide-51--map-of-the-studies-one-line-of-research) | 1:32–1:34 |
| 52 | [Two draws without annealing: E235 and E355](#slide-52--two-draws-without-annealing-e235-and-e355) | 1:34–1:36 |
| 53 | [Strain from the microstructure](#slide-53--strain-from-the-microstructure) | 1:36–1:38 |
| 54 | [Strain through the wall and hardening](#slide-54--strain-through-the-wall-and-hardening) | 1:38–1:40 |
| 55 | [Voronoi tessellation as “virtual grains”](#slide-55--voronoi-tessellation-as-virtual-grains) | 1:40–1:42 |
| 56 | [How to measure friction: drawing on a tensile testing machine](#slide-56--how-to-measure-friction-drawing-on-a-tensile-testing-machine) | 1:42–1:44 |
| 57 | [Inverse analysis: the force is linear in friction](#slide-57--inverse-analysis-the-force-is-linear-in-friction) | 1:44–1:46 |
| 58 | [With calibrated friction: the effect of the die angle](#slide-58--with-calibrated-friction-the-effect-of-the-die-angle) | 1:46–1:48 |
| 59 | [Friction × die angle → force (DEFORM 3D)](#slide-59--friction--die-angle--force-deform-3d) | 1:48–1:50 |
| 60 | [Drawing speed hardly changes the force](#slide-60--drawing-speed-hardly-changes-the-force) | 1:50–1:52 |
| 61 | [Tube sinking: the wall thickens](#slide-61--tube-sinking-the-wall-thickens) | 1:52–1:54 |
| 62 | [Experiment versus FEM: Ø16 → Ø12 mm](#slide-62--experiment-versus-fem-ø16--ø12-mm) | 1:54–1:56 |
| 63 | [Angle and friction versus tube dimensions](#slide-63--angle-and-friction-versus-tube-dimensions) | 1:56–1:58 |
| 64 | [Designed experiment in simulation](#slide-64--designed-experiment-in-simulation) | 1:58–2:00 |
| 64.1 | [How to design an experiment in FEM](#slide-641--how-to-design-an-experiment-in-fem) | DO+0:00–0:01 |
| 64.2 | [ANOVA results](#slide-642--anova-results) | DO+0:01–0:02 |
| 64.3 | [Summary and questions](#slide-643--summary-and-questions) | DO+0:02–0:03 |
| 65 | [Internally ribbed tubes: the plug groove angle](#slide-65--internally-ribbed-tubes-the-plug-groove-angle) | 2:00–2:02 |
| 66 | [Is a 2D model enough for the force with a ribbed plug?](#slide-66--is-a-2d-model-enough-for-the-force-with-a-ribbed-plug) | 2:02–2:04 |
| 67 | [Stresses in the wall of an internally ribbed tube](#slide-67--stresses-in-the-wall-of-an-internally-ribbed-tube) | 2:04–2:06 |
| 68 | [What the studies taught us](#slide-68--what-the-studies-taught-us) | 2:06–2:08 |
| | **[PART V — OPTIMISATION AND VALIDATION](#part-v--optimisation-and-validation-208--220)** | **2:08 – 2:20** |
| 69 | [Part V — Optimisation and validation](#slide-69--part-v--optimisation-and-validation) | 2:08 |
| 70 | [The verification ladder of a drawing model](#slide-70--the-verification-ladder-of-a-drawing-model) | 2:08–2:10 |
| 71 | [Calibration is not validation](#slide-71--calibration-is-not-validation) | 2:10–2:12 |
| 72 | [Model versus reality – summary of our comparisons](#slide-72--model-versus-reality--summary-of-our-comparisons) | 2:12–2:14 |
| 73 | [Which die angle is optimal? It depends on the conditions](#slide-73--which-die-angle-is-optimal-it-depends-on-the-conditions) | 2:14–2:16 |
| 74 | [Process optimisation workflow by simulation](#slide-74--process-optimisation-workflow-by-simulation) | 2:16–2:18 |
| 75 | [Uncertainties and limitations – be critical](#slide-75--uncertainties-and-limitations--be-critical) | 2:18–2:20 |
| | **[SUMMARY AND QUESTIONS](#summary-and-questions-220--232)** | **2:20 – 2:32** |
| 76 | [Summary](#slide-76--summary) | 2:20–2:22 |
| 77 | [Review questions](#slide-77--review-questions) | 2:22–2:32 |
| 78 | [Sources and further reading](#slide-78--sources-and-further-reading) | (during questions) |

---

## INTRODUCTION 0:00 – 0:14

### Slide 1 · Title slide

⏱️ `0:00–0:02`

Good morning, and welcome to the fourth lecture of the course Modelling and Simulation of Processes, Forming.

Last time we dealt with material data in the DEFORM software, that is, how to enter the flow stress, how to describe it with a power law or with the Johnson–Cook model, and where to get the constants. Today we will apply all of that to one specific process: the cold drawing of seamless tubes.

Today's lecture is longer than usual and has five parts. First, we will look at what tube drawing is from the technological point of view. Then we will see analytical methods that can estimate the drawing force. In the third part we will go through how a numerical model is set up, meaning implicit and explicit analysis, the Lagrangian and the ALE description, the material, friction and the mesh. In the fourth, main part you will see case studies from our own research at the faculty. And finally we will sum up how to optimise the model and, above all, how to verify it.

The picture on the right comes from DEFORM. It shows tube sinking from a diameter of sixteen to a diameter of twelve millimetres, and the colours show the effective strain. By the end of the lecture you will be able not only to run simulations like this one, but above all to assess them critically.

A short note on the controls, in case you go through the presentation on your own. The instructions are in the box at the bottom of this slide. The left and right arrows move between slides, and the space bar starts or pauses the commentary. And if the text is too small or too large for you, there are A minus and A plus buttons in the top right corner, or you can use the minus and plus keys. The text size changes on all slides, and the zero key restores the original size.

### Slide 2 · Why tube drawing?

⏱️ `0:02–0:04`

Why tube drawing in particular? Precision seamless tubes are all around us. They are in hydraulic cylinders, in cars, for example as parts of shock absorbers or injection systems, in boilers and in heat exchangers.

Hot rolling can produce a tube of roughly the right shape. But accurate dimensions, a good surface and higher strength only come with cold forming, that is, with drawing. A special group are internally ribbed tubes. The ribs on the inner surface increase the area and therefore the heat transfer, which is why they are used in power engineering.

> 🗒️ *Click – the next point appears.*

The problem is that finding the right tools and parameters by trial and error directly in production is expensive. Every new die or plug costs money, and every trial stops the line. That is why finite element simulation is so useful here.

> 🗒️ *Click – the next point appears.*

Everything you will see in the fourth part today was done in cooperation with the Železiarne Podbrezová steelworks and within projects of the Slovak Research and Development Agency. The picture on the right shows a real tube with a diameter of eighteen millimetres before drawing, and after one draw to a diameter of twelve millimetres. Notice the transition at the point, where you can see how the diameter gradually decreases.

### Slide 3 · What tubes are drawn from, and in what sizes

⏱️ `0:04–0:06`

Let us look at the materials tubes are drawn from. The largest group are carbon and low-alloy steels. These include, for example, the steels E two thirty-five and E three fifty-five according to the standard for precision tubes, or older Slovak designations such as eleven three fifty-three. They are used for hydraulic cylinders, in mechanical engineering, for pressure piping and in boilers.

The second group are stainless steels, for example one point four three zero one, which you will find in the chemical and food industries. Tubes of copper and its alloys are also drawn, cold, in a range of diameters from two to one hundred and sixty millimetres and with wall thicknesses from fifteen hundredths of a millimetre to ten millimetres. And finally aluminium and its alloys, for example sixty sixty or seventy seventy-five.

All of our studies that you will see today use the ferritic-pearlitic steels E two thirty-five, E three fifty-five and the steel SPT three sixty. They have good cold formability, so they are suitable for several draws in a row. Remember them, because they will appear in the material models in the third part.

### Slide 4 · First hot: billet and rolling

⏱️ `0:06–0:08`

Before a tube reaches the draw bench, it has to be made hot. The picture shows the route at Železiarne Podbrezová. It starts with a continuously cast billet, which is heated in a rotary hearth furnace, pierced on a press, elongated on a mandrel and then passed through a push bench. After reheating in a walking-beam furnace comes the stretch-reducing mill, which sets the final diameter.

In another route, cross-roll piercing, the so-called Mannesmann effect is used. Two inclined rolls squeeze the rotating billet from the sides, and this creates a tensile stress in the core of the billet, which tears the material open and forms a cavity. The plug then only smooths and sizes the cavity.

The result is a hot-rolled tube, for example with a diameter of seventy millimetres and a wall of six point three, or with a diameter of twenty-eight and a wall of four millimetres. These are exactly the sizes you will see in the studies.

> 🗒️ *Click – the next point appears.*

What matters is that a hot tube is not perfect. It has eccentricity, meaning the wall is not equally thick everywhere, and the inner surface may carry a slight polygon from rolling. These defects carry over into drawing and limit the accuracy of the final product.

### Slide 5 · Then cold: the precision tube route

⏱️ `0:08–0:10`

Now the cold route, again following practice at Podbrezová. The input is a hot-rolled tube. First a point is made, that is, a narrowed end that passes through the die and can be gripped. Then comes the chemical treatment. The tube is pickled to remove scale, phosphated, and a lubricant is applied. The phosphate layer holds the lubricant on the surface, and without it the steel would stick to the die.

The fourth step is the cold drawing itself, which is our topic today. It is followed by intermediate or final annealing in a protective atmosphere. Annealing is needed because after one or two draws the material is so hardened that another draw would break it. At the end come straightening, cutting, inspection, preservation and dispatch.

Notice that steps two to five may be repeated several times until the required size is reached. For the simulation this means we must know whether the model starts with annealed material or with material hardened by the previous draw.

### Slide 6 · Where today's lecture fits

⏱️ `0:10–0:12`

Where are we in the course? In the first lecture we talked about what forming modelling is and why we do it. In the second we went through analytical methods and an overview of software. In the third we dealt with material data in DEFORM.

At the end of the last lecture I promised you preprocessing, that is, the mesh, boundary conditions and friction. Today we will do that on one whole process, from the technology all the way to verifying the result. This is how you will meet it in practice: nobody will tell you "set up the mesh", but rather "find out why our tube cracks on the third draw".

My goal is that by the end you can build a drawing model yourselves, verify it, and critically assess its results, even when they come from a published paper.

### Slide 7 · Today's agenda

⏱️ `0:12–0:14`

The agenda is on the slide. We are almost through the introduction. Part one covers the fundamentals of drawing: drawing methods, the die and the plug, strain and process parameters. Part two covers analytical methods: ideal work, the slab method, the optimum die angle and the drawing limit. In part three we go through numerical simulation and model setup.

The main block is part four, case studies from our own papers. You will see how we measured friction, how the die angle and the speed affect the process, how the wall thickness changes, how a designed experiment can be used in simulation, and how internally ribbed tubes are simulated. Part five is the synthesis: optimisation and validation. At the end there will be review questions. The lecture is long, so we will take a break halfway through.

---

## PART I — FUNDAMENTALS OF THE DRAWING PROCESS 0:14 – 0:40

### Slide 8 · Part I — Fundamentals of the drawing process

⏱️ `0:14`

We start with the first part, the fundamentals of the drawing process.

### Slide 9 · The principle of drawing

⏱️ `0:14–0:16`

Drawing is cold forming, exceptionally hot forming, in which a wire, a bar or a tube is pulled through a stationary die. The cross-section decreases and the length increases, because the volume stays the same.

Look at the scheme on the right. The force F acts at the exit as tension. But the shaping itself happens by compression: in contact with the die a normal pressure p develops, and with it a friction stress, mu times p. So the material is deformed by compression, but the required force is carried in tension by the already deformed part behind the die. This leads to the main limit of drawing, which we will come back to: the drawn, already deformed fibre must not start to yield or break.

The goals of drawing are accurate dimensions, a good surface and higher strength, which the material gains through work hardening.

> 🗒️ *Click – the next point appears.*

A tube is a hollow workpiece. Compared with wire, two more quantities must therefore be controlled: the wall thickness and the inner surface. That is why an inner tool, the plug, is often used.

### Slide 10 · Wire, bar and tube – what they share and how they differ

⏱️ `0:16–0:18`

The table compares three kinds of products. Wire is drawn from rolled wire rod in coils on multi-pass drawing machines with capstans. It passes through many dies in a row, at high speeds and with a small reduction in each die.

Bars are drawn on draw benches, with fewer passes and at larger diameters. Tubes are drawn from a hollow shell on chain or hydraulic draw benches. With them the wall thickness and the inner diameter must also be controlled, which is why they are often drawn on a plug.

The physics, however, is the same in all three cases. The tensile stress at the die exit must stay below the yield stress of the drawn material. If it exceeded it, the material behind the die would start to stretch and would eventually break. This one condition will run through the whole of today's lecture.

### Slide 11 · Die geometry

⏱️ `0:18–0:20`

A die has four parts. The entry cone guides the lubricant into the die. The reduction cone, with the angle two alpha, is where the deformation itself takes place. The bearing, also called the land, is a short cylindrical section, for example four millimetres long, which sets the final diameter and compensates for elastic springback. The exit cone protects the product so that it is not scratched on the way out.

The picture on the right is a drawing of a die with a diameter of twenty-five millimetres, which we used for a twenty-eight by four tube. Let me point out one thing that will confuse you when reading the literature. The book gives the full cone angle, two alpha. Papers mostly give the half angle, alpha. Whenever you read "an angle of twelve degrees", always check whether it is the full angle or the half angle.

> 🗒️ *Click – the next point appears.*

Dies for drawing steel tubes are most often made of cemented carbide, in grades such as G ten to G sixty, or of tool steel.

### Slide 12 · Four methods of tube drawing

⏱️ `0:20–0:22`

Tubes are drawn in four basic ways. Picture a shows tube sinking, that is, drawing without a plug. The tube passes only through the die, with nothing inside. The diameter decreases and the wall thickness sets itself. It is used mainly as the last operation for small diameters.

Picture b shows drawing on a fixed plug. The plug is mounted on a plug rod and stays in the die. The tube is reduced between the die on the outside and the plug on the inside, so both the diameter and the wall thickness decrease. The plug can be cylindrical or shaped.

Picture c shows a floating plug. It is not held at all; it is kept in place by the balance of friction and pressure forces. The advantage is that the tube length is not limited by a rod, so very long tubes can be drawn and coiled.

Picture d shows mandrel drawing. A long bar travels through the die together with the tube. After drawing, the tube must be pulled off the bar, so it is first reeled to increase its diameter by a few tenths of a millimetre.

### Slide 13 · Comparison of drawing methods

⏱️ `0:22–0:24`

The table compares advantages and limitations. Sinking is the simplest, but the inner surface and the inner diameter are not controlled. The wall thickness increases slightly. That is an important finding, and we will come back to it in the studies.

A fixed plug gives accurate dimensions and an excellent inner surface, but the tube length is limited by the rod length, the force is higher, and the reduction per pass is usually up to thirty percent. A floating plug allows long tubes, higher speeds and a reduction of up to about forty-five percent, but it is sensitive to tool geometry and lubrication. Mandrel drawing suits very thin walls below one millimetre.

Look at the box at the bottom, because it is important for the simulation. On a fixed plug, friction holds the tube back, so it acts against the drawing direction and increases the force. On a bar that moves with the tube, friction pulls the tube forward and reduces the force. If you set up the plug motion wrongly in the model, you get the opposite direction of friction and a completely different result.

### Slide 14 · Plugs and their position

⏱️ `0:24–0:26`

Let us take a closer look at plugs. A fixed plug is either cylindrical or shaped, and it is mounted on a plug rod. In practice a cemented-carbide ring screwed onto a steel body is often used. In the left picture the ring is marked one and the body two. A worn ring is replaced and the body stays.

The second picture shows the position of the plug in the die. The plug position relative to the die bearing determines where the wall starts to thin, and therefore also the distribution of forces. In the simulation this is one of the geometric parameters that you must enter exactly as in reality. Moreover, the plug often wears more than the die.

> 🗒️ *Click – the next point appears.*

If the plug has grooves on its surface, that is, if it is ribbed or profiled, ribs are formed on the inner surface of the tube. This is how internally ribbed tubes are made, and we will look at them in three studies in the fourth part.

### Slide 15 · Pointing – no point, no drawing

⏱️ `0:26–0:28`

For a tube to be drawn, its end must be narrowed. This is called pointing. The point must pass through the die and the draw bench must be able to grip it.

The point is made either hot by rotary swaging, where the jaws move in a straight line and the tube rotates. In our experiment we pointed at eight hundred and fifty to nine hundred degrees Celsius to a diameter of eleven millimetres, that is, smaller than the twelve millimetre die. The second option is cold pressing, which suits thin walls. In the pictures you can see the pressing of a point and the resulting point.

> 🗒️ *Click – the next point appears.*

This gives a practical rule for the simulation. The point and the end of the tube that has not yet been drawn are not evaluated. We read the results, that is, the dimensions, the wall thickness and the force, only from the middle part of the tube, where the process is steady.

### Slide 16 · Reduction, strain and elongation coefficient

⏱️ `0:28–0:30`

Now three basic quantities that we will use throughout the lecture. First the definitions you see at the top.

The reduction R is the relative decrease of the tube cross-section area by drawing, expressed as a percentage of the original cross-section S zero. It tells us by how many percent of the cross-section we reduced the tube in one draw.

The strain phi, more precisely the logarithmic strain, is the natural logarithm of the ratio of the cross-section before and after the draw. Its big advantage is that the strains of successive draws can simply be added. That does not work for the reduction.

The elongation coefficient lambda tells us how many times the tube gets longer by drawing. Because the volume stays constant, it equals the ratio of the cross-sections, S zero divided by S r. In drawing it is therefore always greater than one.

Let us look at the formulas. The tube cross-section is pi over four times the difference of the squares of the outer and inner diameters. It can also be written as pi times the mean diameter times the wall thickness, that is, pi times D minus s, times s. From the cross-sections we then calculate the reduction, the strain and the elongation coefficient. Notice that the strain is the logarithm of the elongation coefficient.

The third line is the law of constant volume. The sum of the strains in length, in mean diameter and in wall thickness is zero. So if the diameter and the wall decrease, the length must increase.

> 🗒️ *Click – the example appears.*

An example from the first study. A tube of seventy by six point three is drawn to fifty-five by four point seven five. The original cross-section is about one thousand two hundred and sixty square millimetres, the new one about seven hundred and fifty. The reduction is forty and a half percent, the elongation coefficient about one point six eight, and the strain zero point five two. So the tube gets longer by two thirds. Try recalculating it at home; it will also be in the review questions.

### Slide 17 · Stress and strain state in the die

⏱️ `0:30–0:32`

What is the stress state in the die? In the longitudinal direction there is a tensile stress, sigma one; in the radial and hoop directions there are compressive stresses, sigma two and sigma three. The problem is axisymmetric, so sigma two and sigma three are approximately equal.

The relationship between strains and stresses is described by the Lévy–Mises equations. The differences of strains are proportional to the differences of stresses, and the constant of proportionality is three halves times the ratio of the strain intensity to the stress intensity. In the picture on the right you see the die, the fixed plug and three zones in which the stress state changes. We will come back to these zones in the analytical part.

The most important one is the second formula. The stress sigma one equals the drawing force divided by the final cross-section. And this stress must be lower than the yield stress of the tube, which has already been hardened by drawing.

> 🗒️ *Click – the next point appears.*

If sigma one exceeds the yield stress behind the die, the tube starts to stretch, thin, and eventually breaks. At the same time you lose dimensional accuracy, because the tube also deforms outside the die.

### Slide 18 · Key process parameters

⏱️ `0:32–0:34`

The table sums up the key parameters. The die angle: at a small angle the contact is long and much energy is lost to friction; at a large angle the material needlessly changes its flow direction and the pressure on the tool increases. In between there is an optimum, which we will even calculate in the analytical part.

The reduction sets the force and the hardening, and it is limited by the strength of the drawn material. Friction and lubrication affect the force, wear, the surface and heat. In the simulation we enter friction as the Coulomb coefficient mu or as the friction factor m.

The drawing speed affects the lubricant film and heating. In slow tube drawing, however, it has almost no effect on the force; we will see that in the studies. The bearing length sets the accuracy of the diameter, but if it is too long, it increases friction. The plug geometry sets the inner diameter and the wall thickness. The material enters through its hardening curve and its strain-rate sensitivity, but also through the eccentricity of the input tube.

Notice that each of these parameters is also an input to the finite element model.

### Slide 19 · What affects the accuracy of a drawn tube

⏱️ `0:34–0:36`

What affects the accuracy of the final tube? First of all, the input tube. Its eccentricity and inner polygon mean that the material is not strained uniformly around the circumference.

The second factor is temperature. Deformation heat and friction heat warm the tube. With a thermal camera we measured one hundred and thirty to one hundred and eighty degrees Celsius at the die exit. That is not negligible, and yet most simulations, including ours, neglect temperature.

The third factor is the tools, that is, their dimensions, manufacturing accuracy and wear. The fourth is the deformation of the tube behind the die, if the stress from the drawing force exceeds the yield stress of the hardened tube.

> 🗒️ *Click – the next point appears.*

There is an interesting effect in sinking. The final outer diameter is slightly smaller than the die diameter. The tube narrows a little more behind the die. The picture on the right shows a tube being measured on a ZEISS coordinate measuring machine. This is how we measured the dimensions that we later compared with the simulation.

### Slide 20 · Cold work hardening: one draw, a big change

⏱️ `0:36–0:38`

How much does the material harden in drawing? The table shows the results of tensile tests of E two thirty-five steel with a one millimetre wall, before and after one draw.

In a draw from a diameter of fourteen to twelve, that is, with a reduction of about thirteen and a half percent, the yield stress rises from two hundred and eighty-five to four hundred and fifteen megapascals. In a draw from eighteen to twelve, with a reduction of over thirty-two percent, the yield stress rises from two hundred and eighty-five all the way to four hundred and sixty-nine megapascals, and the tensile strength from three hundred and ninety-nine to five hundred and sixty-eight.

The biggest change, however, is in the elongation. It drops from about thirty percent to eight. So the elongation drops to a third after a single draw. That is why annealing is needed after a few draws.

> 🗒️ *Click – the next point appears.*

For the simulation this means that the hardening curve decides both the force and the drawing limit. If you enter a material without hardening, the model will show you the wrong force and the wrong risk of breakage.

### Slide 21 · What the model must capture

⏱️ `0:38–0:40`

To close the first part, let us sum up what we want from the model. We want the drawing force and stress, so that we can size the draw bench and assess the risk of breakage. We want the dimensions, that is, the outer and inner diameter, the wall thickness and the roundness. We want the strain and the hardening in the wall. We want the residual stresses that arise from non-uniform deformation. And we want the loads on and the wear of the die and the plug.

The scheme on the right shows the logic of today's whole lecture. The inputs are the geometry, the hardening curve, friction and speed. From them the finite element model computes the force, the stress and strain fields, and the dimensions. And these outputs must be verified, first with an analytical estimate and then with an experiment.

That is why we now move on to analytical methods. Not because they are more accurate, but because without them you have nothing to compare the simulation with.

---

## PART II — ANALYTICAL METHODS OF DRAWING 0:40 – 1:00

### Slide 22 · Part II — Analytical methods of drawing

⏱️ `0:40`

Part two: analytical methods of drawing.

### Slide 23 · Why analytics first – and notation

⏱️ `0:40–0:42`

Why bother with analytics at all when we have simulation? For three reasons. Analytics gives a quick estimate of force and power, which you need, for example, when choosing a draw bench. It shows trends, that is, how the force depends on the reduction, friction and the die angle. And it gives a reference value to compare the simulation with.

> 🗒️ *Click – the next point appears.*

This is where a rule comes from that I ask you to remember: do not trust a simulation until you have compared it with at least a simple estimate. If the program gives you a force ten times larger than a hand calculation, the error is almost certainly in the model.

The table shows the notation. A zero and A one are the cross-sections before and after the draw; in the book they are written S zero and S r. The reduction r is the relative loss of cross-section. Epsilon is the logarithmic strain, the same as phi from the first part. Sigma f is the mean flow stress. Alpha is the die half-angle and mu the friction coefficient. Sigma d is the drawing stress, the force is sigma d times A one, and the power is the force times the speed.

### Slide 24 · Ideal deformation – the lower bound

⏱️ `0:42–0:44`

The simplest estimate comes from an energy balance. The work of the external force equals the work of homogeneous plastic deformation. We get the relation: the drawing stress equals the flow stress times the logarithm of the area ratio, so sigma d equals sigma f times epsilon.

This relation contains neither friction nor redundant work, that is, the work the material spends on needless changes of flow direction. It is therefore a lower bound of the drawing stress.

In the example on the right, the material has a flow stress of five hundred megapascals and the reduction is twenty percent. The strain is the logarithm of one over zero point eight, which is zero point two two three. The drawing stress comes out at one hundred and twelve megapascals.

> 🗒️ *Click – the next point appears.*

The real stress is always higher, typically one and a half to two and a half times the ideal value. By exactly how much, the slab method will tell us.

### Slide 25 · The slab method

⏱️ `0:44–0:46`

The slab method is a classic method of forming theory. In the reduction cone we cut out a thin element, write the force equilibrium for it in the drawing direction, include friction on the die wall, and integrate from the entry to the exit. The picture on the right shows such an element: the stress sigma on one side, sigma plus d sigma on the other, the normal pressure sigma n and the friction f times sigma n.

The assumptions are: constant flow stress, Coulomb friction and homogeneous deformation, meaning plane sections remain plane. The result for wire and bar is on the slide. It contains the parameter B, which equals mu times the cotangent of alpha. For our example, at an angle of six degrees and a friction of zero point one, B is about zero point nine five, and the drawing stress comes out at one hundred and ninety-six megapascals, almost twice the ideal value.

> 🗒️ *Click – the next point appears.*

The same principle holds for tubes. The parameter B then also contains friction on the plug, and the wall thickness appears instead of the area ratio.

> 🗒️ *Click – the next point appears.*

Note that redundant work is not in this relation. It is added as a separate correction, which we will get to in a moment.

### Slide 26 · Fixed-plug drawing – three zones

⏱️ `0:46–0:48`

When a tube is drawn on a fixed plug, the deformation region is divided into three zones. In zone one only the diameter decreases; the tube does not yet touch the plug and the wall thickness stays constant. In zone two the tube touches the plug and both the diameter and the wall thickness decrease. In zone three, the bearing, the tube is sized, and friction acts on the die and on the plug at the same time.

The drawing force then equals the stress at the end of zone three times the final cross-section. In each zone the slab method is used with different boundary conditions, and the output of one zone is the input to the next.

> 🗒️ *If there is time: the down arrow opens four sub-slides with the derivation. Otherwise continue to the right.*

The full derivation is in the book on seamless tube production, in chapter three point two. If you want to see the formulas for each zone, you will find them in the deep dive below this slide. We will move on.

### Slide 26.1 · Zone I – diameter reduction

⏱️ `SM+0:00–0:01`

In zone one only the diameter decreases. The derivation is the same as for wire, only the radius of the wall mid-line appears instead of the wire radius. r s is the mid-line radius in a given section, and r s zero at the entry.

The parameter A is one plus f times the cotangent of alpha, divided by one minus f times the tangent of alpha. The stress in zone one is A over A minus one, times the flow stress, times one minus the radius ratio raised to the power A minus one.

The boundary condition at the entry is that the stress is zero, because nothing pulls the tube from behind. We say there is no back tension. If we substitute the radius at the end of zone one, that is, where the tube touches the plug, we get the stress sigma I o. That is the input to zone two.

Notice that if friction were zero, A would equal one and the formula would turn into the ideal work. That way you can always check that you copied the formula correctly.

### Slide 26.2 · Zone II – reduction of diameter and wall

⏱️ `SM+0:01–0:02`

In zone two the wall is thinned between the die and the plug. The parameter B has the same first term as A, but a second term is added. It contains the ratio of the inner diameter to the sum of the inner diameter and both wall thicknesses, times f times the cotangent of alpha. This term represents friction on the plug.

That is why B is always larger than A, and the stress in zone two grows faster than in zone one. This is the main reason why fixed-plug drawing needs a larger force than sinking for the same change of diameter.

The formula for the stress at the end of zone two has two parts. The first part says that the stress from the end of zone one is carried forward, as if it were back tension. The second part is the contribution of zone two itself. In the derivation the outer diameter is replaced by the mean diameter, so that the integral can be evaluated in closed form.

### Slide 26.3 · Zone III – bearing and drawing force

⏱️ `SM+0:02–0:03`

Zone three is the bearing. The tube is no longer reduced here, but friction acts on both surfaces, on the die and on the plug. The stress therefore grows exponentially with the length x, according to the expression e to the power of two f x over s r.

At the end of the bearing, that is, at x equal to the length l, we get the stress sigma III c. The drawing force is then sigma III c times the final cross-section, which is pi times the difference of the outer diameter and the wall, times the wall.

The exponential term shows why too long a bearing does harm. A longer bearing and higher friction increase the force very quickly, especially with a thin wall.

For a practical estimate, the book also gives a simplified formula. The force equals the mean flow stress times the final cross-section times the strain, divided by the efficiency eta F. The efficiency is zero point four to zero point six for a small strain of about zero point one five, and zero point seven to zero point eight for a strain of about zero point five.

### Slide 26.4 · Summary and questions

⏱️ `SM+0:03–0:04`

Let us sum up the deep dive. In plug drawing the stress accumulates zone by zone, and the output of one zone is the input to the next. Friction on the plug in zones two and three makes plug drawing more demanding than sinking. And the method gives the mean force, not the stress distribution in the wall.

> 🗒️ *Click – question 1 appears; after the answers press "answer".*

**Question one:** Why is the parameter B in zone two larger than the parameter A in zone one?

> ✅ **Expected:** B also contains the plug friction term d_r/(d_r+s_0+s_r)·f·cot α; in zone II the wall is thinned between the die and the plug.

> 🗒️ *Click – question 2 appears.*

**Question two:** What is the boundary condition at the entry to zone one?

> ✅ **Expected:** σ_I = 0 at the entry (no back tension); the stress at the end of zone I is the input to zone II.

> 🗒️ *Click – question 3 appears.*

**Question three:** How does the stress in the bearing zone change with its length?

> ✅ **Expected:** Exponentially, as e^(2f·l/s_r) – a longer bearing and higher friction increase the drawing force.

> 🗒️ *Click – question 4 appears.*

**Question four:** What does this method not give you?

> ✅ **Expected:** The distribution of stresses and strains in the wall, residual stresses, the change of wall thickness in sinking – for that you need FEM.

Press the up arrow to return to the main lecture, or the right arrow to continue.

### Slide 27 · Redundant work and a Siebel-type formula

⏱️ `0:48–0:50`

Now redundant work. At the entry to the cone and at its exit, the material suddenly changes its direction of flow. This creates shear, which does not change the final shape but consumes energy. So the material deforms more than the change of shape alone would require. This excess work grows with the die angle.

A simple way to include it is the Siebel-type formula on the slide. The drawing stress is the flow stress times the sum of three terms. The first term, epsilon, is the ideal work. The second term, epsilon times mu times the cotangent of alpha, is friction. The third term, two thirds of alpha in radians, is the redundant work. Another option is to multiply the stress by a redundant-work factor, which for wire is one to about one point two.

Look at the example on the right, still the same bar. The ideal value is one hundred and twelve megapascals, the slab method gives one hundred and ninety-six, and the Siebel-type formula two hundred and fifty-three megapascals. So the real stress is about two point three times the ideal one. We can neglect neither friction nor redundant work.

### Slide 28 · Optimum die angle

⏱️ `0:50–0:52`

I calculated the chart on the right from the Siebel-type formula for our example. The grey dashed line is the ideal work, which does not depend on the angle. The thin red line is friction. At small angles the contact is long and friction is huge; it falls as the angle grows. The dotted line is the redundant work, which grows linearly with the angle. The thick line is the sum.

The sum has a minimum, and that is the optimum die angle. For small angles it can be expressed by a simple formula: the sine of the optimum angle equals the square root of one point five times mu times epsilon. For a friction of zero point one and a strain of zero point two two three, the optimum angle comes out at about ten and a half degrees. The optimum angle grows with both friction and reduction.

> 🗒️ *Click – the next point appears.*

And now the most important thing. The minimum is flat. Angles from eight to fourteen degrees give almost the same stress, between two hundred and thirty-three and two hundred and thirty-eight megapascals. In contrast, an angle of three degrees is forty-seven percent worse. Remember this, because in the studies you will see different authors give different optimum angles, and the flat minimum explains exactly that.

### Slide 29 · Maximum reduction per pass

⏱️ `0:52–0:54`

How much can we reduce in one pass? The condition is that the drawing stress must be lower than the flow stress of the material behind the die. For ideal deformation without hardening we find that the maximum strain is one. Then the area ratio is e, and the maximum reduction is one minus one over e, about sixty-three percent.

If the material hardens according to a power law with exponent n, the maximum reduction is one minus e to the power of minus one plus n. The table on the right shows that hardening helps. With an exponent of zero point four four, which is what the mild steel in our studies has, the ideal drawing limit is seventy-six percent. This is because the drawn part behind the die is already hardened, and therefore stronger than the material in the deformation zone.

> 🗒️ *Click – the next point appears.*

But once we include friction, redundant work and a safety margin, the practical values are much lower: for wire, twenty to thirty percent per pass.

> 🗒️ *Click – the next point appears.*

For tubes, the figures given are up to about thirty percent on a fixed plug, up to about forty-five percent on a floating plug, and around fifty percent overall, depending on the drawing method.

### Slide 30 · Worked example: bar Ø10 mm, r = 20 %

⏱️ `0:54–0:56`

Let us go through a full example. A steel bar with a diameter of ten millimetres is drawn with a reduction of twenty percent. The original cross-section is seventy-eight point five four square millimetres, the new one sixty-two point eight three, and the new diameter eight point nine four millimetres. The strain is zero point two two three, the flow stress five hundred megapascals, the half-angle six degrees, the friction zero point one, and the exit speed one metre per second.

The table on the right compares the models. The ideal value is one hundred and twelve megapascals, the slab method gives one hundred and ninety-six, and the Siebel-type formula at six degrees gives two hundred and fifty-three. At three degrees it would be as much as three hundred and forty-two, at ten degrees two hundred and thirty-three, and at fifteen degrees two hundred and forty.

> 🗒️ *Click – the next point appears.*

The force is the stress times the exit cross-section, about fifteen point nine kilonewtons. The power is the force times the speed, so fifteen point nine kilowatts.

> 🗒️ *Click – the next point appears.*

And the check: a stress of two hundred and fifty-three megapascals is lower than the flow stress of five hundred megapascals, so the bar is drawn and does not break. The margin is about twofold. Try recalculating one row of the table at home.

### Slide 31 · Analytics versus measurement for a tube

⏱️ `0:56–0:58`

Now two examples with tubes. On the left is a thirty by three tube, drawn on a plug to twenty-seven by two and a half. The reduction is twenty-four point four percent and the strain zero point two eight. With a flow stress of three hundred megapascals, the ideal work gives a force of about sixteen kilonewtons. The simplified formula from the book, with an efficiency of zero point five, gives about thirty-two kilonewtons, twice as much.

On the right is a case where we also have a measurement. Sinking of a sixteen by two tube to a diameter of twelve, E two thirty-five steel. The strain is zero point three one five, and the mean flow stress, as the average of the yield stress before and after drawing, is about three hundred and sixty-seven megapascals.

> 🗒️ *Click – the next point appears.*

The ideal work gives seven point six kilonewtons. The simplified formula gives twelve and a half to fifteen kilonewtons. The Siebel-type formula, if we assume an angle of twelve degrees and a friction of zero point zero eight, gives thirteen point eight kilonewtons.

> 🗒️ *Click – the next point appears.*

But the measured force was twenty-one and a half to twenty-two kilonewtons, and the DEFORM simulation gave twenty and a half. So simple analytics underestimates the sinking force by about thirty-five percent. It misses the wall bending at the die entry, the wall thickening and the real lubrication. Analytics is good for the order of magnitude, not for design. I assumed the die angle for this estimate, so take it as an illustration.

### Slide 32 · What analytics can – and cannot – do

⏱️ `0:58–1:00`

Let us sum up what analytics can do. It gives the mean drawing force and stress. It shows the trends with reduction, friction and angle. It gives the drawing limit and the optimum angle. And it is fast; you need no software.

What can analytics not do? It does not give the local distribution of strains, stresses and temperature. It does not give residual stresses. It does not give the pressure distribution on the tool or its wear. It does not capture eccentricity, ovality or the distribution of wall thickness around the circumference. And it does not predict defects such as cracks or surface defects.

So analytics serves for the first design and for a plausibility check. We need the finite element method when local fields, dimensions, tools and defects matter. And that brings us to the third part.

---

## PART III — NUMERICAL SIMULATION AND MODEL SETUP 1:00 – 1:32

### Slide 33 · Part III — Numerical simulation and setting up a drawing model

⏱️ `1:00`

Part three: numerical simulation and setting up a tube drawing model.

### Slide 34 · A model = four independent choices

⏱️ `1:00–1:02`

Every finite element model is a combination of four choices, and these choices are independent of each other. The first is time integration, implicit or explicit. It answers the question of how the equation of motion is solved in one step. The second is the mesh description: Lagrangian, ALE or Eulerian. It answers whether the mesh moves with the material. The third is the material formulation, rigid-plastic or elastic-plastic. It tells us whether we also compute elastic strains. The fourth is the model dimension, two-dimensional axisymmetric or three-dimensional.

These terms are often confused. An explicit computation does not automatically mean a three-dimensional one, and a Lagrangian description does not automatically mean an implicit computation. Whenever you read a paper or a manual, always clarify all four choices separately.

### Slide 35 · Typical combinations in software

⏱️ `1:02–1:04`

Which combinations will you meet in practice? DEFORM, both two- and three-dimensional, computes implicitly, with an updated Lagrangian description and automatic remeshing. The material can be rigid-plastic, that is, flow-type, or elastic-plastic. For steady-state processes such as rolling or extrusion, DEFORM also has an ALE solver.

Abaqus Standard is implicit, Lagrangian and elastic-plastic. Abaqus Explicit is explicit, with a Lagrangian or an adaptive ALE mesh. LS-DYNA can do both. In one study from an LS-DYNA conference, floating-plug drawing was computed implicitly and in two dimensions. And the Brazilian authors Neves and colleagues computed fixed-plug drawing elastic-plastically in MSC Superform and compared it with an upper-bound solution.

All of our studies that you will see in the fourth part are in DEFORM, so they are implicit and Lagrangian.

### Slide 36 · Basic tube drawing model – inputs

⏱️ `1:04–1:06`

Whatever method you choose, a drawing model always needs the same inputs. The geometry: the tube with its diameter, wall and length, the die with its angle and bearing, and the plug. The tube must be long enough for the process to reach a steady state. The tools, which are either rigid or elastic. Rigid tools are enough if we are interested in force and strain.

The material, that is, the flow stress curve as a function of strain, strain rate and temperature, and for an elastic-plastic model also the elastic modulus and Poisson's ratio. Friction, separately for the die and for the plug. That is the most sensitive input, and it must be calibrated by measuring the force. The boundary conditions, that is, the drawing speed and how the plug is held. The mesh, that is, the element size and the number of elements through the wall. Heat, which is often neglected in slow drawing. And for several draws, the transfer of the state from the first draw to the second.

One rule holds for all methods: the quality of the hardening curve and of friction decides the quality of the result more than the choice of solver.

### Slide 37 · Material models in our studies

⏱️ `1:06–1:08`

Here we come back to the last lecture. In our studies we used a power law: the flow stress equals c times the strain to the power n, times the strain rate to the power m, plus y. The parameter y is the initial yield stress, c and n describe the hardening, and m the strain-rate sensitivity.

The table gives the parameters for three steels. E two thirty-five has y of two hundred and thirty-five and a half megapascals, c of one hundred and seventy-eight, and n of zero point six one. E three fifty-five has a higher yield stress and stronger hardening. The steel SPT three sixty has an exponent m of zero. Strain-rate sensitivity cannot be determined from a tensile test, so we treated the material as rate-independent. In the studies of ribbed tubes we used a mild steel after Holmquist and Johnson: five hundred and thirteen times the strain to the power zero point four four, plus three hundred and twenty-five megapascals.

The chart on the right shows all four curves. Notice how big the difference is between E two thirty-five and the others. In all cases the material was plastic, with isotropic hardening, the von Mises yield criterion, and no temperature effect.

### Slide 38 · Friction – the most sensitive input

⏱️ `1:08–1:10`

In simulation, friction is entered with two basic models. The Coulomb model says that the friction stress is mu times the normal pressure. The shear model says that the friction stress is m times the shear yield stress, that is, m times the flow stress divided by the square root of three. The Coulomb model suits lower pressures, the shear model the high pressures typical of bulk forming. DEFORM often uses the shear model for cold forming.

In the literature you will find friction values of zero point zero two to zero point zero three for drawing. But for a specific lubricant and tool, these are unreliable.

> 🗒️ *Click – the next point appears.*

We used a factor of zero point zero eight as a general value, and a value of about zero point zero five three to zero point zero five four for a carbide die, which we determined inversely from a measurement.

> 🗒️ *Click – the next point appears.*

How sensitive is it? In a floating-plug study in LS-DYNA, raising the die friction from zero point zero five to zero point one increased the force by about twenty percent. The procedure on the right, that is, measure the force, simulate for several friction values and find the match, we will show in detail in the study from twenty eighteen.

### Slide 39 · Implicit analysis

⏱️ `1:10–1:12`

An implicit analysis solves a system of equations in every step, usually with the Newton–Raphson method. It is unconditionally stable, so the step can be large; it is limited only by whether the iterations converge. It looks for equilibrium, so it is naturally quasi-static.

How do we set up a drawing model? We use a quasi-static step, controlled by displacement. Drawing is a slow, almost steady process, and we do not need inertia. The force is then a result, not an input. Every body must be secured against rigid-body motion, because inertia does not stabilise it. So we hold the fixed plug. We define the die–tube and plug–tube contacts with friction and use small steps at the start. We choose the step so that a node does not move more than a fraction of the smallest element.

The advantages are efficiency for slow processes, smooth results, and direct computation of unloading and residual stresses. The disadvantages are expensive steps, convergence problems when contact changes, and the need to stabilise a floating plug. In an LS-DYNA study, the static solution gave a similar force to the dynamic one, but in twenty-two minutes instead of one hundred and four.

### Slide 40 · Explicit analysis

⏱️ `1:12–1:14`

An explicit analysis computes the new state directly from the current one, without solving a system of equations, so one step is cheap. But it is only conditionally stable. The time step must be shorter than the time a sound wave needs to cross the smallest element. The wave speed is the square root of the elastic modulus divided by the density. An explicit computation always solves dynamic equilibrium, so the loading rate matters.

Let us make an estimate. The speed of sound in steel is about five thousand metres per second, and an element is a quarter of a millimetre. The stable step comes out at five times ten to the minus eight seconds. Drawing fifty millimetres at nine metres per minute takes a third of a second. That is about seven million steps.

> 🗒️ *Click – the next point appears.*

That is why in an explicit computation the process is artificially sped up, or the element mass is increased, which is called mass scaling. Both adjustments increase the stable step.

> 🗒️ *Click – the next point appears.*

But you must check that you have not spoiled the quasi-static character. In Abaqus you watch the ratio of kinetic energy to internal energy, which should be below five to ten percent. The advantages of explicit computation are robust contact, cheap steps and natural motion of a floating plug. The disadvantages are a small step, noisy results and sensitivity to small elements.

### Slide 41 · Implicit or explicit?

⏱️ `1:14–1:16`

The table sums up the comparison. An implicit computation has a large, expensive step; an explicit one a small, cheap step. Implicit is unconditionally stable, explicit only conditionally. With contact, an implicit computation may stop converging, while an explicit one is robust. The force from an implicit computation is smooth; from an explicit one it oscillates and must be averaged. Residual stresses come directly from an implicit computation, and from an explicit one only after transferring the result to an implicit solver.

For drawing, implicit computation is used in DEFORM and Abaqus Standard, explicit in Abaqus Explicit and LS-DYNA.

In industrial practice they are often combined. The forming itself is computed explicitly, because that is robust. The result is then transferred to an implicit solver, which computes springback and residual stresses. This is called a hybrid workflow.

### Slide 42 · Lagrangian description – the mesh moves with the material

⏱️ `1:16–1:18`

In the Lagrangian description the mesh nodes are attached to material points and the mesh deforms together with the material. DEFORM uses an updated Lagrangian description, and the unknowns are the nodal velocities. The advantage is that free surfaces, contact and the history of every point, that is, how much it has been strained and how it has hardened, are tracked naturally.

In a two-dimensional model we use a structured mesh of quadrilaterals, in our studies four to eight elements through the wall. At moderate strains we did not need remeshing. The process has three phases: start-up, when the point enters the die; the steady state; and run-out at the end of the tube. We read the force in the steady part.

The picture on the right is from the first study. You see a two-dimensional axisymmetric model of two draws and a mesh that deforms with the material. The colours show the longitudinal strain.

> 🗒️ *Click – the next point appears.*

With several draws, the final mesh and the state after the first draw are used as the start of the second draw. That way the hardening is also carried over, if there is no annealing between the draws.

### Slide 43 · ALE and the Eulerian description

⏱️ `1:18–1:20`

In the ALE description, that is, the arbitrary Lagrangian–Eulerian description, the mesh can move independently of the material, but it keeps its topology. The elements are therefore less distorted. In the Eulerian description the mesh is fixed in space and the material flows through it. Abaqus offers the CEL method for this, which couples the Eulerian and Lagrangian descriptions.

In drawing, the idea of a steady state is interesting. Once the process has settled, the geometry in the die no longer changes. So it is enough to model a short section around the die and the plug, with material inflow and outflow. The advantages are less mesh distortion, a small domain, a short computation and smooth fields. The disadvantages are more demanding boundary conditions, and the fact that you see neither start-up nor run-out. Moreover, the material history is transported with an error, and not every solver supports it.

> 🗒️ *Click – the next point appears.*

To be honest: we did not find a published ALE setup for tube drawing in the sources. Most studies, including ours, use the Lagrangian description. If you want to use ALE, start from the documentation of the specific software.

### Slide 44 · Rigid-plastic versus elastic-plastic formulation

⏱️ `1:20–1:22`

The rigid-plastic, or flow, formulation neglects elastic strains. The unknowns are velocities, and incompressibility is enforced by a penalty term. This is the classic approach of Kobayashi, Oh and Altan, and the basis of the DEFORM solver. It suits force, strain and wall thickness. It does not suit residual stresses and elastic effects.

The elastic-plastic formulation computes both elastic and plastic strains. It is needed for residual stresses and springback, but it is more expensive and converges less well.

The equation at the bottom is the functional from our papers. The first term is the work of plastic deformation. The second term, with the constant K, is the penalty on volume change: a large K forces the volumetric strain rate towards zero, so the material is incompressible. The third term is the work of external forces on the surface. Discretisation gives non-linear equations, which are solved with the Newton–Raphson method.

On the tools: rigid ones are enough for force and strain. If you are interested in the stress in the die or its wear, you must model the die as an elastic body, possibly with a shrink-fitted ring.

### Slide 45 · 2D axisymmetric or 3D?

⏱️ `1:22–1:24`

A two-dimensional axisymmetric model is valid when the tube, the die and the plug are coaxial and the loading is symmetric. It gives the force, strain and wall thickness, and it is cheap, so it suits parametric studies. We need a three-dimensional model for eccentricity, ovality, profiled cross-sections and non-symmetric loading. It also gives eccentricity, ovality and a full picture of residual stresses, but it is expensive. In our study the three-dimensional model had a time step of ten to the minus five seconds, the two-dimensional one ten to the minus four, an order of magnitude larger.

> 🗒️ *Click – the next point appears.*

For the ribbed plug we used a quarter three-dimensional model with mirror symmetry. The picture on the right shows how the mesh is refined in the rib region: from seven tenths of a millimetre to seven hundredths. Without such refinement the rib would not fit into the mesh at all.

### Slide 46 · How we set up the models in DEFORM

⏱️ `1:24–1:26`

Here is an overview of the specific settings from our papers. The numbers in the header are the source numbers from the map of studies. The two-dimensional models were Lagrangian and axisymmetric, with four to eight quadrilaterals through the wall and no remeshing. The three-dimensional models had a tetrahedral mesh with one hundred and sixty thousand to five hundred and ninety-two thousand elements, and remeshing every fifty steps.

The tools were always rigid. The speed was mostly nine metres per minute. In the designed experiment it was sixty millimetres per minute, and in the parametric studies from one to eight hundred millimetres per second. Friction was of the shear type, either zero point zero eight, or zero point zero five four from measurement.

The boundary condition row is interesting. In the two-dimensional models the tube point was pulled, as in reality. For the internally ribbed tube we turned it around: the tools moved and the tube end was clamped. Physically it is the same thing, just in a different coordinate system, but the computation converged better. And we always evaluated only the steady middle part of the tube.

### Slide 47 · What to expect from which simulation

⏱️ `1:26–1:28`

This table tells you what you can expect from which type of simulation. All of them give the drawing force; with an explicit computation it must be filtered. All of them also give strain and wall thickness. Residual stresses come directly only from an elastic-plastic implicit computation; an explicit one gives them after transfer to an implicit solver.

You get the stress in the tool only with an elastic die; with a rigid one you only have the surface pressure. A steady-state ALE computation gives neither start-up nor run-out. The position of a floating plug is handled naturally by an explicit computation, by an implicit one only with difficulty. And defects such as cracks need a damage criterion.

As an illustration, an example from the literature: in a study of drawing thin-walled copper–tin alloy tubes, increasing the full die angle from six to thirty-eight degrees increased plug wear by more than eighty percent, but die wear by only about five percent. You would not find that out without a simulation with a wear model.

### Slide 48 · Typical numerical problems and remedies

⏱️ `1:28–1:30`

What problems will you meet? I will mention the most common ones. The mesh gets distorted at the die entry or near the plug tip, where the strain is largest. A finer mesh, remeshing or ALE will help.

The implicit computation does not converge. The cause is changes in contact, or a body that can move freely. A smaller step, better initial contact and correct constraints will help. The plug passes through the die, which happens with a floating plug when plug friction is high.

The tube loses volume. This is a typical consequence of remeshing and a coarse mesh. Check the volume before and after drawing; it should be preserved. And the most common problem: the force does not match the measurement. The cause is almost always wrong friction or a wrong hardening curve, not the solver.

Finally, if the result depends on the mesh size, you have too few elements through the wall. Then you need a mesh sensitivity study, that is, refine the mesh until the result stops changing.

### Slide 49 · How to choose a model

⏱️ `1:30–1:32`

To close the third part, a decision table. If you are interested in force and strain in a parametric study of angle, reduction and friction, a two-dimensional axisymmetric implicit Lagrangian model with rigid tools is enough. If you need residual stresses, you must compute elastic-plastically, and for an eccentric tube in three dimensions. For tool stress and wear you need an elastic die and a wear model. For a floating plug and start-up, explicit computation suits. For a long steady process with a very fine mesh in the die, ALE. And for a profiled plug with ribs, a three-dimensional model with symmetry and local mesh refinement.

And always, without exception, compare the result with an analytical estimate and with the measured force. That is exactly what the case studies do, and we will look at them now.

> 🗒️ *A good place for a break.*

---

## PART IV — CASE STUDIES FROM OUR OWN RESEARCH 1:32 – 2:08

### Slide 50 · Part IV — Case studies from our own research

⏱️ `1:32`

Part four: case studies from our own research.

### Slide 51 · Map of the studies: one line of research

⏱️ `1:32–1:34`

The studies you will see were carried out between twenty seventeen and twenty twenty-three at our institute, within APVV and VEGA projects and in cooperation with Železiarne Podbrezová. They are not isolated papers but one line of research, in which each study tackles a problem that arose in the previous one.

We started with two draws on a fixed plug and the question of whether the computed strain matches reality. For that we used stereology, that is, measurement from the microstructure, and later we added Voronoi grains. Then we ran into the problem of friction, so we measured it by inverse analysis. With calibrated friction we examined the effect of angle, friction and speed on the force. In sinking we focused on the wall thickness and the dimensions, and on how to use a designed experiment and analysis of variance. And finally we moved on to internally ribbed tubes, where we dealt with plug geometry, forces and stresses.

Notice the last column, validation. For each study, ask yourself: how did we verify the model?

### Slide 52 · Two draws without annealing: E235 and E355

⏱️ `1:34–1:36`

The first study. A hot-rolled tube from Podbrezová, with a diameter of seventy millimetres and a wall of six point three, was drawn on a fixed plug in two draws without intermediate annealing. The first draw, to fifty-five by four point seven five, had a reduction of forty and a half percent; the second draw, to fifty by three point seven five, a reduction of twenty-seven percent. In total that is about fifty-seven percent. We tested two steels, E two thirty-five and E three fifty-five.

The model was in DEFORM 2D, Lagrangian, with a speed of nine metres per minute and a friction factor of zero point zero eight. In the first draw there were eight elements through the wall, in the second six, without remeshing. What matters is that the second draw started from the state after the first draw. So both the strain and the hardening were carried over into the second draw.

> 🗒️ *Click – the next point appears.*

And the question we asked ourselves: is the computed strain correct? How do we check it, when we cannot measure the strain in a tube wall with a strain gauge?

### Slide 53 · Strain from the microstructure

⏱️ `1:36–1:38`

The answer is stereology. From the tube wall we prepared metallographic sections near the inner, middle and outer surface, marked I, M and O in the picture. During forming, the grains elongate and their boundaries become oriented in the direction of flow. Using oriented test lines according to the Saltykov method, the degree of orientation of the grain boundaries is determined, and from it the local strain. The lower picture shows the microstructure before drawing and after two draws. The difference is clear at first glance.

The table compares the longitudinal strain, phi three. After the first draw, stereology gave zero point five two zero and the simulation zero point five three seven. After the second draw, stereology gave zero point eight three nine and the simulation zero point eight seven four.

I calculated the last column from the tube dimensions, as the logarithm of the area ratio. It comes out at exactly zero point five two zero and zero point eight three nine.

> 🗒️ *Click – the next point appears.*

So the simulation overestimates the strain by three to four percent, while stereology agrees with the simple calculation from the dimensions. We have three independent numbers for the same quantity, and that is exactly what we want in validation.

### Slide 54 · Strain through the wall and hardening

⏱️ `1:38–1:40`

What else did the study show? The hoop strain, phi one, is about minus zero point two four near the outer surface and about minus zero point two two near the inner surface. So the inner surface deforms slightly less. In the first draw, with a large reduction, a locally positive radial strain appeared in the deformation zone; in the second draw it was only negative.

The most interesting finding is that the difference in strain between the steels E two thirty-five and E three fifty-five is almost zero. In plug drawing the strain is determined above all by the geometry, that is, by the die and the plug, and not by the material. The material decides the force, but not where the metal moves.

> 🗒️ *Click – the next point appears.*

The chart on the right shows the mechanical properties of E two thirty-five steel. After two draws it had a tensile strength of seven hundred and forty-seven megapascals and a hardness of one hundred and seventy-seven Vickers. E three fifty-five steel had eight hundred and ninety-three megapascals and two hundred and eleven Vickers.

> 🗒️ *Click – the next point appears.*

The conclusion of the study: to compute strain in cold drawing, rigid tools and a plastic power-law material are enough.

### Slide 55 · Voronoi tessellation as “virtual grains”

⏱️ `1:40–1:42`

The second study built on the stereology. The question was: can the degree of grain orientation be predicted directly in the simulation? A twenty-eight by four tube was drawn on an eighteen millimetre plug to a diameter of twenty-five, so the wall dropped to three and a half millimetres. The die half-angle was twelve degrees and the bearing four millimetres. The reduction was twenty-one point six percent, and the analytical relative elongation zero point two seven six.

In MATLAB we generated a Voronoi tessellation. It is a division of the plane into cells around random points, and it looks like the grains in a microstructure. We inserted the tessellation into DEFORM 2D as a FLOWNET pattern. FLOWNET deforms together with the material and even survives remeshing, so it works like a virtually etched grid. The upper picture on the right shows the tessellation in the tube wall between the plug and the die.

> 🗒️ *Click – the next point appears.*

The degree of orientation is then measured on the “virtual grains”, just as on a real metallographic section. The lower picture shows the values before and after drawing. The strain comes out at about zero point two four to zero point two seven. It is a tool for linking the macroscopic model with the microstructure. One remark: the paper gives a die diameter of twenty-four millimetres, but the stated cross-section corresponds to a diameter of twenty-five. Typos occur even in published papers, so always recalculate the numbers.

### Slide 56 · How to measure friction: drawing on a tensile testing machine

⏱️ `1:42–1:44`

The third study deals with friction, the most sensitive input of the model. How do we measure it? We modified a tensile testing machine. The die replaced the lower crosshead, and the jaws on the upper crosshead held the tube point. The machine thus recorded the drawing force as a function of the stroke. The picture on the left shows the scheme.

The tube was twenty-eight by four, SPT three sixty steel, and it was sunk to a diameter of twenty-five. We had four cemented-carbide dies with half-angles of six, eight, ten and twelve degrees, a two millimetre bearing, and a lubricant based on vegetable oil.

The chart shows the measured forces. The force first rises as the point enters the die, and then it settles. The mean of the steady part goes into the calculation. At six degrees it was thirty-eight kilonewtons, at eight forty point three, at ten forty-two, and at twelve forty-three point nine kilonewtons. Notice that in the experiment the force grew with the angle. We will come back to that.

### Slide 57 · Inverse analysis: the force is linear in friction

⏱️ `1:44–1:46`

Now the inverse analysis. For the eight degree die we ran a series of simulations with different friction and recorded the steady force. The chart on the left shows that the force depends linearly on friction.

Linear regression gave us the relation: friction equals the force minus thirty thousand six hundred and twenty newtons, divided by one hundred and eighty-three thousand eight hundred. When we substitute the measured force of forty thousand three hundred and forty-nine newtons, we get a friction of about zero point zero five three. The paper gives a value of zero point zero five two six. Later studies that build on this paper used zero point zero five four two one.

> 🗒️ *Click – the next point appears.*

Important: this value holds only for this die, this lubricant and this material. It is not a universal constant that you can transfer to another model.

> 🗒️ *Click – the next point appears.*

And one more remark on critical reading. The text of the paper says the simulations were done for a friction of zero point two to zero point six. But the chart shows a range of zero point zero two to zero point zero six, and the regression matches the chart. So the result lies inside the range and it is not an extrapolation. Always compare the text with the chart.

### Slide 58 · With calibrated friction: the effect of the die angle

⏱️ `1:46–1:48`

With the calibrated friction we then simulated angles from two to fourteen degrees. At two degrees the force comes out at sixty-seven kilonewtons, because the contact is very long and friction is huge. At six, eight and ten degrees it is forty point four, forty point three and thirty-nine point one kilonewtons, a flat minimum. At twelve and fourteen degrees the force rises again, because redundant work increases.

> 🗒️ *Click – the next point appears.*

Notice that this is exactly the shape of the curve from the Siebel estimate in the second part. So analytics and simulation say the same thing.

> 🗒️ *Click – the next point appears.*

But be careful. The paper gives eight degrees as the optimum, although the minimum in the chart is at ten. Since the minimum is flat, both conclusions are essentially correct. More interesting is that the experiment between six and twelve degrees showed the force rising with the angle, while the simulation has a flat minimum there. One explanation is that friction is not the same for all dies, because each die has a slightly different surface. It is an open question for validation, and a good example of why friction calibrated at one angle need not hold at another.

### Slide 59 · Friction × die angle → force (DEFORM 3D)

⏱️ `1:48–1:50`

The fourth study examined the interaction of friction and angle in a three-dimensional model. A twenty-eight by four tube was sunk to a diameter of twenty-five, E two thirty-five steel, one hundred and sixty thousand elements, a speed of two hundred millimetres per second. Friction varied from zero point zero six to zero point one two, and the half-angle from six to twelve degrees.

The chart shows that the force grows with friction at all angles. It grows most steeply at six degrees, from forty-nine to sixty-five kilonewtons. The lowest force is at ten degrees, from forty-six to fifty-three kilonewtons. This matches the analytics: the parameter B is mu times the cotangent of alpha, so at a small angle friction carries more weight.

> 🗒️ *Click – the next point appears.*

The study recommends an angle of ten degrees and a friction of zero point zero six to zero point zero eight. The paper does contain a contradictory sentence about twelve degrees, but the chart clearly shows ten.

### Slide 60 · Drawing speed hardly changes the force

⏱️ `1:50–1:52`

The table from the book shows the maximum force for two friction values, two angles and six speeds from one hundred to eight hundred millimetres per second. At a friction of zero point zero eight and a full angle of twenty degrees, an eightfold increase in speed raises the force from fifty point eight to fifty-one point one kilonewtons, only six tenths of a percent. By contrast, raising friction from zero point zero eight to zero point one two increases the force by seven to eleven percent. So friction is far more important than speed.

> 🗒️ *Click – the next point appears.*

But be critical. The model had no temperature, and the material's rate sensitivity was small. In reality, speed acts through heating and through the thickness of the lubricant film, and the model had neither. So the model could not have shown a large effect of speed. A simulation only answers the questions you put into it.

### Slide 61 · Tube sinking: the wall thickens

⏱️ `1:52–1:54`

The fifth group of results comes from the book and concerns sinking to a diameter of twelve millimetres. Tubes with a one millimetre wall and diameters of fourteen, sixteen and eighteen were drawn in one pass on the EU forty machine. The die had an entry radius of thirty-five millimetres, the lubricant was Molykote, the speed sixty millimetres per minute, and we measured the dimensions with a coordinate measuring machine using five hundred points per circle.

The table shows that the wall always thickened. At a reduction of about thirteen percent by about two percent, at a reduction of twenty-four to thirty-three percent by four and a half to five percent. Why? In sinking, the tube circumference is compressed and the material has nowhere to go except into length and thickness. So part of the hoop compression shows up as wall thickening.

> 🗒️ *Click – the next point appears.*

In another set of tubes with walls of one and two millimetres, the DEFORM 3D simulation gave a thickening of four to ten hundredths of a millimetre and the experiment four to fourteen hundredths, so the same order and the same trend. The picture on the right shows how the wall thickness is evaluated in DEFORM with a histogram over the steady part of the tube.

> 🗒️ *Click – the next point appears.*

The accuracy of the comparison is limited by the scatter of the input wall thickness. If the input tube has a wall that scatters by several hundredths of a millimetre, you cannot expect a simulation with an ideal tube to hit the result more precisely.

### Slide 62 · Experiment versus FEM: Ø16 → Ø12 mm

⏱️ `1:54–1:56`

Here is a direct comparison of experiment and simulation for a draw from sixteen to twelve millimetres with a two millimetre wall. The experiment was on the hydraulic EU forty machine at one millimetre per second. The simulation had two hundred and twenty thousand elements and a friction factor of zero point zero eight.

The measured force was twenty-one and a half to twenty-two kilonewtons; the simulation gave about twenty and a half. The strain in the experiment was zero point two nine to zero point three two, in the simulation zero point three to zero point four. The drawing stress was three hundred and twenty-eight to three hundred and thirty megapascals in the experiment, and two hundred and eighty to three hundred and fifty in the simulation. The chart on the right shows the force history from the simulation: start-up, and then a steady state around twenty kilonewtons.

> 🗒️ *Click – the next point appears.*

The simulation comes out about five percent lower. The explanation is simple: the tubes were lubricated by hand with mineral oil, so friction was not constant. Do you remember the analytical estimate from the second part? That was thirty-five percent lower. So the simulation is much closer to reality.

### Slide 63 · Angle and friction versus tube dimensions

⏱️ `1:56–1:58`

Another study from the book examined how angle and friction affect the tube dimensions, not the force. A twenty-eight by four tube was drawn to a diameter of twenty-five. There were sixteen simulations, that is, four friction values times four full die angles from twelve to twenty-four degrees. The resulting meshes were exported as STL and evaluated in GOM Inspect, just as a scan of a real part is evaluated.

Friction had no significant effect on the dimensions, roundness or coaxiality. The angle did. A larger angle gives a smaller outer and inner diameter. With a twenty-five millimetre die, the outer diameter dropped from twenty-four point six five at twelve degrees to twenty-four point two six at twenty-four degrees. No effect on roundness and coaxiality was demonstrated; the differences were within three hundredths of a millimetre.

> 🗒️ *Click – the next point appears.*

This creates a trade-off. A larger angle can save force, but it increases the deviation of the final diameter from the die diameter. So optimisation is never about one quantity only.

### Slide 64 · Designed experiment in simulation

⏱️ `1:58–2:00`

The sixth study shows how simulation can be combined with statistics. For sinking we used a full factorial two to the third design, that is, three factors at two levels, with five replicates. That makes forty simulations. The factors were the input tube diameter, sixteen or eighteen; the wall thickness, one or two; and the die diameter, twelve or fourteen millimetres. The responses were the final outer diameter and the wall thickness. We processed the results with regression and analysis of variance in Minitab.

> 🗒️ *Click – the next point appears.*

The final outer diameter is determined mainly by the die diameter, then by the input tube diameter and their interaction. The wall thickness does not affect it significantly. The main effects plot on the right shows this: the line for the die is steep, the others are almost horizontal.

> 🗒️ *Click – the next point appears.*

For the wall thickness, all factors are significant, most of all the input wall thickness and the input tube diameter.

> 🗒️ *If there is time: the down arrow opens three sub-slides on the design and ANOVA. Otherwise continue to the right.*

### Slide 64.1 · How to design an experiment in FEM

⏱️ `DO+0:00–0:01`

How do you design an experiment in simulation? In the paper we used eight steps after Montgomery. First you define the problem, that is, whether it is screening, optimisation or validation. Then you choose the response and how to measure it; in a simulation that is the postprocessor. The third step is the factors and levels. The fourth is the type of design, the number of replicates and the run order. With two levels, be aware that the design does not capture curvature. The fifth step is the computation itself; DEFORM has a DOE module for that. The sixth is the measurement system, that is, what the postprocessor can evaluate. The seventh is the statistical software, and the eighth is interpretation in the context of the problem.

The table on the right shows the design matrix. In the first four runs the die has a diameter of twelve, and the tube diameter and wall alternate. In runs five to eight it is the same with a fourteen millimetre die.

The model was two-dimensional and Lagrangian, with a half-angle of eight degrees, a four millimetre bearing, a friction of zero point zero eight, four elements through the wall and a speed of sixty millimetres per minute.

### Slide 64.2 · ANOVA results

⏱️ `DO+0:01–0:02`

The tables show the results of the analysis of variance. The F value tells us how large an effect is compared with the noise. The p value tells us the probability that such an effect arose by chance. If p is less than zero point zero five, we consider the effect significant.

For the final outer diameter, the die diameter has the highest F, forty-six point eight. It is followed by the tube diameter with thirty-one and the interaction of tube and die diameter with twenty-seven. The wall thickness has a p of zero point zero nine, so it is not significant.

For the final wall thickness, all factors and interactions are significant. The highest F belongs to the input wall thickness, three hundred and twenty-five, and the tube diameter, three hundred and fifteen.

The residuals, that is, the differences between the model and the data, were normally distributed with no outliers. There was a slight trend in the run order, so the paper recommends more replicates. One more observation: the final diameter comes out smaller than the die, about eleven and a half millimetres for a twelve millimetre die, and the wall thickens, exactly as in the experiment.

### Slide 64.3 · Summary and questions

⏱️ `DO+0:02–0:03`

Let us sum up. A designed experiment combined with simulation is a cheap way to select the important parameters. But a real experiment is still needed for validation. And one subtle remark: a simulation is deterministic. The same input gives the same result. So the scatter between replicates does not come from chance, as in a real experiment, but from numerics, for example from the mesh or the step size.

> 🗒️ *Click – question 1 appears; after the answers press "answer".*

**Question one:** How many simulations does a two to the third design with five replicates have?

> ✅ **Expected:** 2³ = 8 combinations × 5 replicates = 40 simulations.

> 🗒️ *Click – question 2 appears.*

**Question two:** Which factor affects the final outer diameter most?

> ✅ **Expected:** The die diameter C (F = 46.8), then the input tube diameter A and the A×C interaction.

> 🗒️ *Click – question 3 appears.*

**Question three:** What does a significant interaction of tube diameter and die diameter mean?

> ✅ **Expected:** The effect of the tube diameter on the result depends on the die diameter – the effects cannot be added independently.

> 🗒️ *Click – question 4 appears.*

**Question four:** Why does a designed experiment in simulation not replace a real experiment?

> ✅ **Expected:** The model contains assumptions (friction, material, rigid tools); the statistics assess the model, not reality – validation is needed.

Press the up arrow to return to the main lecture, or the right arrow to continue.

### Slide 65 · Internally ribbed tubes: the plug groove angle

⏱️ `2:00–2:02`

The seventh study concerns internally ribbed tubes. Such tubes are used in high-pressure heat exchangers, evaporators and condensers, because the ribs increase the inner surface. They are made by performing the last draw on a ribbed plug. The main quality criterion is how well the material fills the plug grooves and forms the ribs.

The model was in DEFORM 3D, with a tetrahedral mesh, remeshing every fifty steps, a friction of zero point zero five four two one, and a reduction of twelve and a half percent. We varied the side-wall angle of the groove on the plug, delta, from minus fifteen to plus fifteen degrees. We assessed quality by the size of the gap between the tube and the plug. The smaller the gap, the better the rib is filled.

The table shows that at positive angles the gap is twenty-one to twenty-two hundredths of a millimetre, at negative angles eighteen to fifteen hundredths.

> 🗒️ *Click – the next point appears.*

So a negative groove angle fills the ribs better, and the best was an angle of minus fifteen degrees. What matters is that we did not have to make six different plugs to find this out. This is a typical example of optimising tool geometry by simulation.

### Slide 66 · Is a 2D model enough for the force with a ribbed plug?

⏱️ `2:02–2:04`

The eighth study asked whether a cheap two-dimensional model would be enough to estimate the force with a ribbed plug. A ribbed plug is not axisymmetric, so it cannot be modelled exactly in two dimensions. We therefore made two two-dimensional models with a smooth plug. One had a diameter of seventeen millimetres, the diameter of the groove bottoms, and the other eighteen, the diameter of the tops.

The table shows the result. The model with the seventeen millimetre plug gave a reduction of twelve and a half percent and a die force of thirty-nine and a half kilonewtons. The three-dimensional model with the ribbed plug gave a reduction of seventeen percent and a force of forty-four point nine kilonewtons. The model with the eighteen millimetre plug gave a reduction of twenty-one point six percent and a force of forty-seven kilonewtons.

So the two two-dimensional models bound the three-dimensional result from below and above. The chart on the right shows this in the force history too.

> 🗒️ *Click – the next point appears.*

So for a rough force estimate, two cheap two-dimensional computations are enough. But for rib filling and the stresses in the ribs we need a three-dimensional model. This bounding trick can be used for other problems as well.

### Slide 67 · Stresses in the wall of an internally ribbed tube

⏱️ `2:04–2:06`

The ninth study looked inside the wall of an internally ribbed tube. The die force settled at around forty-five kilonewtons. The plug force in the steady state was about one and a half kilonewtons, but at the start it was higher, because the material first fills the plug profile. This peak must be taken into account when sizing the plug rod.

The picture on the right shows the effective stress in a cross-section and the stresses through the wall. The longitudinal stress is compressive near the inner surface and tensile near the outer surface. The maximum normal stress is concentrated near the outer surface.

> 🗒️ *Click – the next point appears.*

This gives a rule for designing the tool and the process. We want as much compression as possible near the inner surface, so that the ribs fill reliably. At the same time, the tensile stress near the outer surface must stay below the strength of the material, otherwise cracks form. The longitudinal stress is the main limit of drawing, exactly as we said in the first part.

> 🗒️ *Click – the next point appears.*

The computation took about forty minutes. The tools moved and the tube end was clamped for better convergence. This is the kind of result that analytics will never give you.

### Slide 68 · What the studies taught us

⏱️ `2:06–2:08`

Let us sum up what the studies taught us in eight points. Friction must be measured, not taken from the literature. The force grows linearly with friction, and hardly at all with speed. The die angle has a flat optimum that depends on friction. The strain is set by the geometry, not by the steel.

In sinking the wall thickens by two to five percent, and the final diameter is smaller than the die diameter. A two-dimensional model is enough for force and strain; we need a three-dimensional one for profiles and stresses. Plug geometry can be optimised virtually. And every model needs independent verification.

That last point brings us to the fifth part.

---

## PART V — OPTIMISATION AND VALIDATION 2:08 – 2:20

### Slide 69 · Part V — Optimisation and validation

⏱️ `2:08`

Part five: optimisation and validation.

### Slide 70 · The verification ladder of a drawing model

⏱️ `2:08–2:10`

We can picture validation as a ladder. On the lowest rung is the analytical estimate. It gives the order of the force and the trends with angle, friction and reduction, and it is almost free. The second rung is the measured force, for example from a tensile testing machine or from a load cell on the draw bench. The third rung is the dimensions, that is, the outer and inner diameter and the wall thickness, measured with a coordinate measuring machine or a scan in GOM Inspect. The fourth rung is the local strain from stereology, that is, from grain orientation. And the top rung is properties and stresses: hardness, strength and residual stresses.

Each higher rung is more expensive and more laborious, but it tells us more about the model. We used all of these levels in our studies.

But we used the second rung, the measured force, to calibrate friction.

> 🗒️ *Click – the next point appears.*

And that is why rungs three to five are real, independent validation for us. You will see on the next slide why this matters so much.

### Slide 71 · Calibration is not validation

⏱️ `2:10–2:12`

In my view, this is the most important methodological slide of today's lecture. Calibration means that we set an unknown parameter, for example friction, so that the model matches the measurement. Validation means that we compare the model with a different quantity or a different case that we did not use for calibration. Only then can we use the model to predict new parameters.

Specifically: if we calibrated friction from the force at an angle of eight degrees, we must verify the model on the force at other angles, on the dimensions or on the strain.

> 🗒️ *Click – the next point appears.*

Imagine we calibrated friction at each angle separately. The model would then always fit, and it would prove nothing. The agreement would be forced. Incidentally, we saw exactly this in the third study: the experiment showed the force rising with the angle, which the model with a single friction value did not capture. That is valuable information, not an error to be hidden.

> 🗒️ *Click – the next point appears.*

A practical tip: split your data. Use one part for calibration and keep the other part for validation, just as is done in machine learning.

### Slide 72 · Model versus reality – summary of our comparisons

⏱️ `2:12–2:14`

The table sums up all the comparisons from our studies. Longitudinal strain after the first draw: stereology zero point five two zero, simulation zero point five three seven, so plus three percent. After the second draw, plus four percent. The force for the draw from sixteen to twelve: the simulation is five to seven percent below the measurement. The drawing stress is within the range of the experiment. The wall thickening has the same order and the same trend. The three-dimensional force with the ribbed plug lies inside the two-dimensional bounds. And for comparison, the analytical estimate for the same draw, where the force is minus thirty-five percent.

The general conclusion is in the box at the bottom. Integral quantities, such as the force or the mean strain, match within plus or minus five percent. Local quantities, such as the wall thickness, match rather in trend. They are sensitive to the scatter of the input tube and to the mesh. So when you present simulation results to someone, also tell them how accurately you verified them.

### Slide 73 · Which die angle is optimal? It depends on the conditions

⏱️ `2:14–2:16`

Now optimisation, using an example that has accompanied us through the whole lecture: which die angle is optimal? The table collects the answers. The analytical Siebel estimate gives ten and a half degrees. The study from twenty eighteen gives eight degrees, although the chart has its minimum at ten. The study from twenty nineteen gives ten degrees. The book recommends a full angle of twenty-four degrees, that is, a half angle of twelve. And the classic author Počta, in nineteen sixty-three, gives a full angle of twenty-four to twenty-eight degrees.

Is that a contradiction? No. All the values lie in a band of half angles from about eight to fourteen degrees. And that is exactly the flat minimum we saw in the chart in the second part. Different friction, different reduction and a different bearing shift the minimum by a few degrees, but within this band the force changes only a little.

> 🗒️ *Click – the next point appears.*

So the final choice is also decided by something other than the force: tool life, dimensional accuracy, because a larger angle gives a smaller diameter, and the stability of lubrication.

### Slide 74 · Process optimisation workflow by simulation

⏱️ `2:16–2:18`

How should you proceed with optimisation? First define the goal and the constraints. For example, a minimum force, a final diameter within tolerance, and the condition that the drawing stress stays below the yield stress. Then you need a calibrated and validated base model. Without it, the whole optimisation is just a game with numbers. The third step is a designed experiment for factor screening and an analysis of variance, as in the sixth study. The fourth step is a finer design around the optimum found, the so-called response surface. And the last step is a verification simulation and a trial draw in the plant.

The table on the right sums up the levers you have. You get a lower force with an angle in the band of eight to twelve degrees and better lubrication. You get an accurate diameter through the die diameter, with a correction for the fact that the tube comes out smaller, and with a smaller angle. The wall thickness is set by the input wall, the plug and the reduction. Rib filling improves with a negative plug groove angle and high pressure near the inner surface. And you prevent breakage with a reduction at which the drawing stress stays below the yield stress.

### Slide 75 · Uncertainties and limitations – be critical

⏱️ `2:18–2:20`

To close the fifth part, I want to be critical of our own studies too, because that is what I will expect from you. In the follow-up papers friction is once zero point zero five two six and once zero point zero five four two one, although it is the same test. Temperature was neglected, although the tube leaves the die at one hundred and thirty to one hundred and eighty degrees. The tools were rigid, so we saw neither die springback nor die wear. And the input tube in the model was ideal, without eccentricity and without a polygon.

There were also typos in the papers: a die diameter of twenty-four instead of twenty-five millimetres, contradictory sentences about ten and twelve degrees, and E two thirty-five steel described as stainless. Lubrication in the experiment was done by hand, so friction was not constant. And the designed experiment had only four elements through the wall, without a mesh sensitivity study.

> 🗒️ *Click – the next point appears.*

None of this means the results are wrong. It means that a simulation is exactly as good as its inputs and its verification. So read published papers carefully too, including mine.

---

## SUMMARY AND QUESTIONS 2:20 – 2:32

### Slide 76 · Summary

⏱️ `2:20–2:22`

Let us sum up the whole lecture in five sentences. In the fundamentals we saw four methods of tube drawing and the main limit: the tensile stress must stay below the yield stress of the hardened tube. In analytics we saw that the ideal work is smaller than the slab method result, which is smaller than the Siebel-type result, and that the angle optimum is flat. In numerical simulation we said that a model is a combination of four independent choices, and that friction and the hardening curve decide the result most. The studies showed how to measure friction, that speed hardly changes the force, that the wall thickens in sinking, that two-dimensional models bound the three-dimensional one, and that a negative groove angle fills the ribs better. And in validation the rule is: calibrate on one quantity and verify on others.

Next time we will look at preprocessing directly in DEFORM, that is, how the mesh, boundary conditions and friction are set up in practice.

### Slide 77 · Review questions

⏱️ `2:22–2:32`

Let us check what has stayed in your heads. I will show the questions one by one; try to answer before I continue.

> 🗒️ *Click – question 1 appears. Reveal each question with the arrow and wait for answers; the "answer" button shows the answer text.*

**Question one:** A tube with a diameter of seventy millimetres and a wall of six point three is drawn to a diameter of fifty-five and a wall of four point seven five. Calculate the reduction and the strain.

> ✅ **Expected:** S₀ = π·63.7·6.3 = 1260.9 mm², S = π·50.25·4.75 = 749.9 mm²; R = 40.5 %, φ = ln(1260.9/749.9) = 0.52.

> 🗒️ *Click – question 2 appears.*

**Question two:** Why is there an optimum die angle?

> ✅ **Expected:** Friction work falls with the angle, redundant work rises; their sum with the ideal work has a flat minimum (≈ 8–14°).

> 🗒️ *Click – question 3 appears.*

**Question three:** What is the condition for the drawing limit, and what is its ideal value without hardening?

> ✅ **Expected:** The drawing stress must be lower than the flow stress of the material behind the die; ideally r_max = 1 − 1/e ≈ 63 %.

> 🗒️ *Click – question 4 appears.*

**Question four:** How does the wall thickness change in sinking and in fixed-plug drawing?

> ✅ **Expected:** In sinking the wall thickens slightly (≈ 2–5 %); on a fixed plug it thins, because the plug sets the inner diameter.

> 🗒️ *Click – question 5 appears.*

**Question five:** Why does an explicit simulation of slow drawing need speed-up or mass scaling, and how do you check that the result is quasi-static?

> ✅ **Expected:** A stable step of ≈ 5·10⁻⁸ s would give millions of steps; the check is the ratio of kinetic to internal energy below 5–10 %.

> 🗒️ *Click – question 6 appears.*

**Question six:** How is the friction coefficient found by inverse analysis?

> ✅ **Expected:** Measure the steady force, simulate several friction values, and from the linear dependence F(μ) find μ for the measured force (≈ 0.053).

> 🗒️ *Click – question 7 appears.*

**Question seven:** Why can a model not be validated with the same force that was used to calibrate friction?

> ✅ **Expected:** The agreement is forced by the calibration; validation needs an independent quantity – dimensions, strain, force under other conditions.

> 🗒️ *Click – question 8 appears.*

**Question eight:** When is a two-dimensional axisymmetric model enough, and when is a three-dimensional one needed?

> ✅ **Expected:** 2D for a coaxial, symmetric problem (force, strain, wall); 3D for eccentricity, ovality, profiled plugs and for stresses in ribs.

Thank you. We have a few minutes left. Do you have any questions of your own?

### Slide 78 · Sources and further reading

⏱️ `(during questions)`

> 🗒️ *Leave this slide on the screen during the questions.*

If you want to read about the topic in more detail, start with the monograph by Bílik, Necpal and Sobota on the production of seamless tubes, from twenty twenty-three. It covers all drawing methods, the derivation of the force on a fixed plug, and the sinking experiments. For simulation in general, I recommend our textbook by Necpal and Sobota on modelling and simulation of forming processes. Both books are in Slovak. Then come the individual papers that the case studies were taken from. Four of them, in the IOP and MATEC proceedings, are freely available. And if you are interested in the theory of the rigid-plastic finite element method, the classic is the book by Kobayashi, Oh and Altan.

---

*End of text*
