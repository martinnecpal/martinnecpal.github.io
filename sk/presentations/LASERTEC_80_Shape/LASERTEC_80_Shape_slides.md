# LASERTEC 80 Shape — Slide Descriptions
*Extracted from thesis collection — MTF STU Trnava*

---

## Slide 1 — Title Slide

**LASERTEC 80 Shape**
5-Axis Precision Laser Machining System
DMG MORI

*Centre of Excellence for 5-Axis Machining (CE5AM)*
*Faculty of Materials Science and Technology, STU Trnava*

---

## Slide 2 — Overview

**What is the LASERTEC 80 Shape?**

- 5-axis precision CNC laser machining system by **DMG MORI** (formerly SAUER)
- Available at the **Centre of Excellence for 5-Axis Machining (CE5AM)** at MTF STU Trnava
- Purpose-built for:
  - Laser structuring and engraving of injection molds
  - Laser micro-machining and ablation
  - Surface texturing (tribological, functional)
  - Chip-breaker manufacturing on cutting inserts
- Two laser machines at MTF STU Trnava: **LASERTEC 80 Shape** + Laser TruDisk 4002 (TRUMPF)

---

## Slide 3 — Laser Source

**Fiber Nd:YAG Laser**

| Parameter | Value |
|-----------|-------|
| Laser type | Fiber (Ytterbium) Nd:YAG |
| Wavelength | 1064 nm |
| Average laser power | 50 W (nominal) / 100 W (max) |
| Optional upgrade | up to 200 W |
| Operation mode | **Pulsed only** |
| Pulse frequency range | 20 – 100 kHz |
| Beam diameter at focus | ~1 µm |
| Minimum track width | down to 40 µm |

- The same fiber laser type is used in the LASERTEC 210 Shape (larger format)
- Pulsed regime enables precise material removal without excessive thermal load

---

## Slide 4 — Axes & Working Space

**5-Axis Configuration**

| Axis | Travel / Range |
|------|---------------|
| X-axis | 800 mm |
| Y-axis | 500 mm |
| Z-axis (focus) | 700 mm |
| B-axis (swivel) | −110° to +150° |
| C-axis (rotation) | 360° |

**Table dimensions:**

| Configuration | Table size | Max load |
|---------------|-----------|----------|
| 3-axis | 900 × 600 mm | 200 kg |
| 5-axis | Ø 200 / 400 mm | 14 / 40 kg |

- Scanner beam deflection range: ±60 mm (system of lenses and mirrors)
- Workpiece clamping via **EROWA clamps** on the rotary/tilting table

---

## Slide 5 — Motion Dynamics

**High-Dynamic Linear Drive System**

| Parameter | Value |
|-----------|-------|
| Rapid traverse X / Y | 120 / 120 m/min |
| Rapid traverse Z | 30 m/min |
| Acceleration (X / Y) | **> 1.2 g** |
| Scanning speed range | 100 – 4 000 mm/s |

- Linear drives in X and Y axes — no mechanical backlash
- 4th and 5th axis: **water-cooled torque discs**
- Qualifies as a **highly dynamic** laser machining center
- Enables 5-axis laser structuring of large forming tools and narrow molds with exhaust channels

---

## Slide 6 — Construction & Key Components

**Machine Construction**

1. **Machining enclosure** — sealed workspace with special protective doors (laser safety Class 1)
2. **Scanner head** — system of lenses and mirrors, deflects laser beam dynamically in the focal plane
3. **Rotary-tilt table** — EROWA clamping, B + C axes
4. **Machine control unit** — drives all axis movements
5. **Standalone control PC** — manages scanner and laser source
6. **CCD camera** — 50× magnification, adjustable in X/Y for workpiece observation
7. **3D measuring probe** — for fast workpiece alignment and material removal measurement
8. **Extraction unit** — 1050 × 1200 × 2000 mm
9. **Cooling unit** — water cooling for torque discs and laser; 1110 × 800 × 1450 mm

---

## Slide 7 — Control & Software

**Control Architecture**

| Component | System |
|-----------|--------|
| CNC control | **Siemens 840D** powerline / solutionline |
| Laser process control | **LaserSoft 3D** (separate dedicated controller) |
| Programming software | **LpsWin** (coordinate definition, bitmap import) |

**Software workflow:**
1. Design texture / geometry in CAD
2. Generate bitmap or toolpath
3. Import into **LpsWin** → define coordinate system and machining parameters
4. Software calculates laser beam paths layer by layer
5. NC program exported → loaded into **LASERTEC 80 Shape**
6. Test run (warm-up + dry run) → production run

- Contour-parallel laser shaping: focus shifts dynamically along Z according to 3D surface geometry
- Slicing thickness: typically 0.002 mm per layer

---

## Slide 8 — Technical Specifications Summary

**Full Technical Data (DMG MORI)**

| Parameter | Value |
|-----------|-------|
| Laser source type | Fiber (Nd:YAG/Ytterbium) |
| Laser power | 100 / 200 W |
| Focal length options | 100 / 160 / 255 mm |
| Pulse frequency | 20 – 100 kHz |
| Scanning speed | 100 – 4 000 mm/s |
| Beam diameter | ~1 µm |
| Track width | down to 40 µm |
| Input power | max. 72 kVA |
| Operating voltage | 400 V / 50 Hz |
| Machine dimensions | 3335 × 2058 × 2290 mm |
| Machine footprint (incl. units) | 4500 × 6000 × 2300 mm |
| Total weight | **7 000 kg** |
| Control system | Siemens 840D powerline/solutionline |

---

## Slide 9 — Applications

**Fields of Use**

| Application | Description |
|-------------|-------------|
| Injection mold texturing | Engraving fine surface structures on mold cavities |
| Chip-breaker manufacturing | Laser micro-machining of cutting inserts (sintered carbide) |
| Surface texturing | Functional tribological textures (dimples, grooves, hatching) |
| Forming tool structuring | 5-axis laser structuring of large pressing tools |
| Narrow mold machining | 5-axis engraving of narrow molds with exhaust channels |
| Coating ablation | Selective removal of PVD/CVD coatings (track width ≥ 40 µm) |

**Material compatibility:** sintered carbide (WC-Co), titanium alloys, tool steels, coated surfaces

---

## Slide 10 — Comparison: LASERTEC 80 vs. 210 Shape

| Parameter | LASERTEC 80 Shape | LASERTEC 210 Shape |
|-----------|------------------|--------------------|
| X-axis [mm] | 800 | 1800 |
| Y-axis [mm] | 500 | 2100 |
| Z-axis [mm] | 700 | 1250 |
| Table (5-axis) [mm] | Ø 200 / 400 | Ø 1850 |
| Max load (5-axis) [kg] | 14 / 40 | 8 000 / 10 000 |
| Rapid traverse X/Y [m/min] | 120 / 120 | 60 / 40 |
| Laser power [W] | 100 / 200 | 100 / 200 |
| Total weight [kg] | 7 000 | 42 000 |
| Machine dimensions [mm] | 3335 × 2058 × 2290 | 6145 × 7308 × 5343 |
| Input power [kVA] | max. 72 | max. 103 |

→ LASERTEC 80: **compact, high-speed** — for precision parts and molds up to medium size  
→ LASERTEC 210: **large-format** — for automotive-scale tools and dies

---

## Slide 11 — Process Chain for Laser Texturing

**End-to-End Workflow on LASERTEC 80 Shape**

```
[CAD / Texture Design]
        ↓
[Bitmap / Vector Generation]
        ↓
[LpsWin — coordinate system, slicing, path calculation]
        ↓
[NC Program Generation]
        ↓
[Machine Warm-Up + Test Run]       ← non-functional surface, reduced power
        ↓
[Production Run — LASERTEC 80 Shape]
        ↓
[3D Scan / Surface Measurement]    ← ATOS scanner, CCD camera, roughness meter
```

- Green steps: replaceable by third-party software
- Red steps: require native machine software (LaserSoft 3D / LpsWin)

---

## Slide 12 — Typical Process Parameters (from experiments)

**Representative Parameter Ranges Used at MTF STU Trnava**

| Parameter | Range used |
|-----------|-----------|
| Laser power | 10 – 100 W (10–100 % of max) |
| Pulse frequency | 20 – 100 kHz |
| Scanning speed | 200 – 4 000 mm/s |
| Focal distance | 100 mm (typical for micro-machining) |
| Marking field size | 13 × 13 mm (micro) |
| Laser spot diameter | 0.025 – 0.1 mm |
| Layer removal depth | ~1 µm per pass |
| Material removal depth | up to 40 µm per texture feature |
| Pulse duration | 10 ms – 120 ns (depending on mode) |

*Sources: experimental studies on sintered carbide, titanium alloys, and tool steel at CE5AM MTF STU Trnava*

---

## Slide 13 — Safety & Installation Requirements

**Installation Environment**

- Laser safety class requiring **sealed enclosure** with interlocked protective doors
- Fume extraction unit: 1050 × 1200 × 2000 mm (mandatory — removes ablation particles and gases)
- Water cooling circuit: required for torque disc motors and laser source
- Electrical supply: **400 V / 50 Hz**, max 72 kVA
- Floor footprint (all units): 4500 × 6000 × 2300 mm
- Total machine weight: 7 000 kg — requires reinforced floor

---

*All data extracted from student theses referencing DMG MORI documentation (2013–2017).*
*Primary source: DMG MORI LASERTEC 80 Shape technical datasheet.*
