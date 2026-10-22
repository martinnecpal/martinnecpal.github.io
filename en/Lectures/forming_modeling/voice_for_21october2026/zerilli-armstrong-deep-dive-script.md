# Zerilli–Armstrong model — deep dive

*Sub-presentation to Lecture 3 “Material Data in DEFORM” · vertical slides 19.1–19.10 under slide 19 (press ↓ in the deck)*

Speaker script — about 30 minutes, 10 slides. Time stamps are hours:minutes from the start of the deep dive. The deep dive is optional: in the 120-minute lecture skip it, or use it in a seminar or a separate session. The same text is in the speaker notes of each vertical slide (press **S**).

| # | Slide | Time |
|---|---|---|
| 19.1 | Origin and motivation | 0:00–0:02 |
| 19.2 | Physical basis: thermal activation | 0:02–0:05 |
| 19.3 | From Arrhenius to the ZA equation | 0:05–0:09 |
| 19.4 | BCC vs FCC behaviour | 0:09–0:12 |
| 19.5 | Temperature and strain-rate sensitivity | 0:12–0:15 |
| 19.6 | Constants and model variants | 0:15–0:18 |
| 19.7 | Calibrating the constants | 0:18–0:21 |
| 19.8 | Where ZA is used | 0:21–0:24 |
| 19.9 | Limits and practical tips | 0:24–0:27 |
| 19.10 | ZA summary and questions | 0:27–0:30 |

---

## Slide 19.1 — Origin and motivation  `[ZA+0:00–0:02]`

This short sub-presentation goes deeper into one model, the Zerilli–Armstrong model, which I showed you on one slide a moment ago. We go down, slide by slide, and then come back up to the main line of the lecture.

The model was published in 1987 by Frank Zerilli and Ronald Armstrong, who worked for the US Naval Surface Warfare Center. Their customers were people simulating impact, armour penetration and explosive loading – very high strain rates, a wide range of temperatures. The Johnson–Cook model had appeared four years earlier and was the standard. But Johnson–Cook is a fit: three independent brackets, the same shape for every metal.

Zerilli and Armstrong noticed something experiments had shown for a long time: iron and copper react differently. In iron the yield stress itself depends strongly on temperature and strain rate. In copper the yield stress hardly changes – it is the hardening that changes. So instead of fitting, they derived the equation from how dislocations move, and let the crystal lattice choose the form.

The table summarises the difference. Keep in mind the two key words: coupling of temperature and strain rate, and lattice-dependent form.


## Slide 19.2 — Physical basis: thermal activation  `[ZA+0:02–0:05]`

Here is the physics. A moving dislocation meets two kinds of obstacles. Long-range obstacles – the stress fields of other dislocations, grain boundaries – are wide; thermal vibration of atoms cannot help to pass them. They give the athermal part, sigma G.

Short-range obstacles are narrow peaks: in BCC metals the Peierls hills of the lattice itself, in FCC metals the forest dislocations that a moving dislocation must cut through. Here thermal vibration helps. The applied stress lifts the dislocation part of the way, a thermal fluctuation does the rest.

The rate of successful jumps follows an Arrhenius law. From it come the two familiar effects. If the temperature rises, thermal fluctuations are stronger, so less stress is needed. If the strain rate rises, the dislocation has less time to wait for a lucky fluctuation, so more stress is needed. And the grain size adds the Hall–Petch term.

So the total flow stress is athermal plus thermal plus Hall–Petch. The whole ZA model is about writing the thermal part correctly.


## Slide 19.3 — From Arrhenius to the ZA equation  `[ZA+0:05–0:09]`

Now the mathematics, in four steps. Step one: from the Arrhenius law Zerilli and Armstrong derived that the thermal stress decays exponentially with temperature, with an exponent beta that itself depends on the logarithm of strain rate. The amplitude contains the Taylor factor M, the activation energy at absolute zero, the Burgers vector b and the activation area A – the area a dislocation sweeps during one activation event.

Step two, BCC metals. The obstacle is the lattice itself – the Peierls barrier – and its size does not change with strain. So A is constant, and the thermal term does not depend on strain. Strain hardening appears as a separate, athermal power-law term C5 times strain to the n. This is the BCC form.

Step three, FCC metals. The obstacles are forest dislocations. Their density grows linearly with strain, so the spacing – and the activation area – falls with the square root of strain. Put A proportional to strain to the minus one half into step one, and you get the FCC form: square root of strain multiplied by the exponential. Strain and temperature are now coupled in one term.

Step four: C0 collects the athermal stress and the Hall–Petch grain-size term. On the right, the meaning and unit of each constant. Remember the last line: temperature in kelvin, strain rate in per second.

> **Ask the class:** Why does the FCC form multiply ε^½ by the exponential, while the BCC form adds them?


## Slide 19.4 — BCC vs FCC behaviour  `[ZA+0:09–0:12]`

Here the difference becomes visible. Both charts are computed from the 1987 constants at a strain rate of one thousand per second, for 77, 296 and 600 kelvin.

Left, Armco iron, BCC. The three curves are parallel: temperature shifts the whole curve up or down by the same amount, because it acts on the yield stress. At liquid-nitrogen temperature iron is more than twice as strong at yield as at room temperature.

Right, OFHC copper, FCC. All curves start at nearly the same yield stress and then fan out: at low temperature copper hardens faster. Temperature acts on the hardening slope, not on the yield point.

Practical consequences: ferritic steels become brittle at low temperatures and are strongly rate-sensitive; austenitic steels, copper and aluminium are not. Hexagonal metals like titanium and magnesium show both features, so for them a combined form with both exponential terms was proposed later.

> **Ask the class:** A ferritic and an austenitic steel are crash-tested at −40 °C. Which one changes its yield stress more?


## Slide 19.5 — Temperature and strain-rate sensitivity  `[ZA+0:12–0:15]`

Two views of the sensitivities. Left, iron at 20 percent strain: the grey area is athermal – strain hardening and grain size – and it does not change with temperature. The red area is the thermal part; at room temperature and high rate it is about two-thirds of the total, and it almost disappears above 800 kelvin.

Right, the strain-rate effect at 20 percent strain. From 10 to the minus 3 to 10 to the 4 per second, iron gains about 350 megapascals at room temperature, copper only about 100.

The derivative at the bottom explains the pattern: rate sensitivity is C4 times T times the thermal stress. At very low temperature T is small; at high temperature the thermal stress is small; in between, the rate sensitivity is largest. Johnson–Cook, with its constant C, cannot show this – which is exactly why ZA describes BCC metals better at high rates.


## Slide 19.6 — Constants and model variants  `[ZA+0:15–0:18]`

Here are real constants. For OFHC copper the original paper gives C2 of 890 megapascals, C3 of 0.0028 and C4 of 1.15 times ten to the minus four. C0 is about 65 megapascals, made of an athermal 46.5 plus the Hall–Petch term for a grain size of 73 micrometres. For Armco iron C1 is 1033, C3 about 0.007, C4 about 4 times ten to the minus four, and athermal hardening 266 times strain to the 0.29. Tantalum, used for explosively formed projectiles, has a similar BCC set.

DEFORM offers the BCC form directly in the flow-stress dropdown – exactly the expression you see here.

On the right, the modified ZA model by Samantaray, Mandal and Bhaduri from 2009. It was developed for hot deformation, fitted to Gleeble compression data. It couples strain into the temperature term and temperature into the rate term. It fits hot-working data of steels well – correlation around 0.995 for a titanium-modified austenitic stainless steel – but note that it has lost the dislocation interpretation; it is a semi-empirical fit with a ZA-like structure.

The model is available in DEFORM, LS-DYNA, Ansys explicit codes and via user subroutines in Abaqus.


## Slide 19.7 — Calibrating the constants  `[ZA+0:18–0:21]`

How do you get the constants? First the test matrix: quasi-static tests and Hopkinson-bar tests at several temperatures – from liquid nitrogen up to about half the melting point.

Second, the athermal part: the strain-hardening exponent and C5 come from the hardening increments on a log–log plot; C0 from grain size or from the plateau at high temperature, where the thermal part has gone.

Third – the key trick – take the logarithm of what remains. The logarithm of the thermal stress is linear in temperature, with the intercept ln C1 and a slope that depends on strain rate. The chart shows these straight lines for three strain rates, with synthetic test points scattered around them.

Fourth, plot the slopes against the logarithm of strain rate: the intercept gives C3, the slope C4. Finally check the fit with an error measure and, ideally, by simulating an independent test. A warning: at Hopkinson-bar rates the specimen heats up adiabatically, so the measured curve is not isothermal – correct for that before fitting.


## Slide 19.8 — Where ZA is used  `[ZA+0:21–0:24]`

Where is the model used? The first line is how it was validated: the Taylor impact test. A cylinder is fired at a rigid anvil at 100 to 300 metres per second; it shortens and forms a mushroom. One test covers a whole range of strains, strain rates and temperatures, so comparing the final shape with an FEM simulation checks the model at once. Zerilli and Armstrong did exactly this for copper and iron.

Then defence applications – ballistic penetrators and explosively formed projectiles made of iron, tantalum or tungsten, all BCC metals with a strong rate effect.

For our field, the most relevant are high-speed machining, where studies have compared ZA and Johnson–Cook for chip formation in steels, and high-speed forming – electromagnetic forming, explosive forming, hammer forging of ferritic materials. Also cold heading and crash simulation, where the BCC-versus-FCC difference matters.

Finally, hot forging and rolling, but only through the modified ZA, used as a semi-empirical fit of hot compression data.


## Slide 19.9 — Limits and practical tips  `[ZA+0:24–0:27]`

No model is universal. ZA is physically based only below roughly half the melting temperature: there is no dynamic recovery, no recrystallisation, no phase change. In the BCC form the strain hardening is athermal, so at high temperature it over-predicts hardening. And above about ten thousand per second a different mechanism – viscous dislocation drag – takes over.

An independent comparison by Banerjee for copper found ZA very good for room-temperature Taylor tests – the simplest accurate option – but it over-estimates the temperature dependence at high rates and gives larger errors near 1200 kelvin.

For DEFORM: choose the ZA entry in the flow-stress list and enter the constants. Published constants assume temperature in kelvin and stress in megapascals – check your problem's unit system before you type them in. Run a coupled thermal simulation, because adiabatic heating is a large part of the physics at high rates. Plot the curves in the material window and compare them with the test data. And for hot forming above about 0.6 of the melting point, use tabular data or sinh-Arrhenius instead.


## Slide 19.10 — ZA summary and questions  `[ZA+0:27–0:30]`

To close the deep dive, five points. The model is derived from thermally activated dislocation motion. Its exponential term couples temperature and strain rate. The lattice decides the form: BCC – the yield stress is sensitive; FCC – the hardening is sensitive; HCP – both. It is the right choice for high strain rates below about half the melting point: impact, machining, high-speed forming. For hot forming there is the modified, semi-empirical version, and DEFORM has the BCC form built in.

Four questions to check yourselves – I will reveal them one by one. Then we go back up to the main lecture and continue with the hot forming models.

> 🗒️ *Click – question 1 appears; wait for answers, then press “answer”.*

**Question one:** What is the activation area, and how does it differ between BCC and FCC metals?

> ✅ **Expected:** The area a dislocation sweeps in one thermally activated jump. BCC: the obstacle is the Peierls barrier of the lattice → constant. FCC: the obstacles are forest dislocations → A ∝ ε̄^−½, it shrinks with strain.

> 🗒️ *Click – question 2 appears; wait for answers, then press “answer”.*

**Question two:** Which constant couples temperature and strain rate?

> ✅ **Expected:** C₄ – in the term e^−C₃T + C₄T ln ε̇.

> 🗒️ *Click – question 3 appears; wait for answers, then press “answer”.*

**Question three:** Why is Zerilli–Armstrong better than Johnson–Cook for iron at a thousand per second and minus 50 degrees?

> ✅ **Expected:** Iron is BCC: its yield stress depends strongly and jointly on T and ε̇ (Peierls mechanism). ZA couples them through C₄·T; J–C has a constant C and independent brackets, and T* < 0 below the reference temperature.

> 🗒️ *Click – question 4 appears; wait for answers, then press “answer”.*

**Question four:** Why should you not use the original Zerilli–Armstrong model for forging at 1150 degrees?

> ✅ **Expected:** At 1150 °C steel is at ≈ 0.8 T_m: diffusion-controlled flow, dynamic recovery and recrystallisation and austenite govern – none of these is in ZA, and the athermal hardening is over-predicted. Use a table, the sinh law or the modified ZA.

---

## Sources

- Zerilli, F. J.; Armstrong, R. W.: Dislocation-mechanics-based constitutive relations for material dynamics calculations. *J. Appl. Phys.* 61 (1987) 1816–1825. doi:10.1063/1.338024
- Banerjee, B.: An evaluation of plastic flow stress models for the simulation of high-temperature and high-strain-rate deformation of metals. arXiv:cond-mat/0512466 (2005) — ZA constants for OFHC Cu, Taylor-test comparison with J–C, MTS, PTW
- Samantaray, D.; Mandal, S.; Bhaduri, A. K.: A comparative study on Johnson Cook, modified Zerilli–Armstrong and Arrhenius-type constitutive models … modified 9Cr–1Mo steel. *Comput. Mater. Sci.* 47 (2009) 568–576
- Improved modified ZA model for Ti55531 — fitting procedure and accuracy of MZA (PMC11006685, 2024)
- Experimental results and constitutive modelling for tungsten and tantalum at high strain rates and very high temperatures, arXiv:1105.5514 — ZA constant sets for Ta and W
- Halle, T.; Meyer, L. W.: Influence of different material models on the result of numerical high speed cutting simulations. 1st Int. Conf. High Speed Forming, Dortmund 2004 — J–C vs ZA in orthogonal cutting
- Ansys Explicit Dynamics help: Zerilli–Armstrong strength model; LS-DYNA Keyword Manual: *MAT_MODIFIED_ZERILLI_ARMSTRONG
- SFTC: DEFORM V14 manual, Ch. 10 Material Data — flow-stress model list
