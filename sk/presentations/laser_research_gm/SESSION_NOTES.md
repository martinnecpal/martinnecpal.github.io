# Session Notes — Laser Micromachining Presentation
**Date:** 2026-05-28  
**Session:** Reading 7 diploma theses → categorisation → full presentation build

---

## What was done in this session

1. Scanned all 7 PDF theses in `thesis/` directory
2. Extracted text from practical/results sections of each thesis
3. Categorised the 7 works into 3 research groups
4. Created a 19-slide Reveal.js presentation (gradient-modern template)
5. Extracted images from all 7 PDFs into `images/t1–t7/`
6. Wrote detailed presenter speech scripts for all 19 slides (in `speech/`)
7. Wrote narration.json with TTS-ready text
8. Cleaned up: removed MTF template version, made this directory self-contained

---

## The 7 Theses — Quick Reference

| File | Year | Topic | Category |
|---|---|---|---|
| `zaverecna_prace.pdf` | 2014 | Chip breaker on carbide insert — laser | C |
| `zaverecna_prace-1.pdf` | 2014 | Laser micromachining of titanium GRADE 2 | A |
| `zaverecna_prace-2.pdf` | 2017 | Laser texturing of injection molds (English) | C |
| `zaverecna_prace-3.pdf` | 2018 | Laser micromachining of sintered carbide WC-Co | A |
| `zaverecna_prace-4.pdf` | 2013 | Laser structured surfaces — tribology (steel 11373) | B |
| `zaverecna_prace-5.pdf` | 2014 | Laser structured surfaces — tribology (tool steel 1.2311) | B |
| `zaverecna_prace-6.pdf` | 2015 | Laser surface texturing — tribology + lubricants (90MnCrV8) | B |

All theses: Institute of Production Technologies, MTF STU Trnava  
Common machine: **DMG MORI LASERTEC 80 Shape** — CE5AM Centre, MTF STU Trnava

---

## Three Research Categories

### A — Laser Parameter Optimisation
Find the best combination of: pulse frequency · power · scan speed · track spacing  
Output metric: surface roughness Ra (+ ablation rate for sintered carbide)  
Method: Taguchi L9 (titanium) and half-factorial 3³/27 experiments (sintered carbide)

**Key findings:**
- Track spacing is consistently the most influential factor (>40–51% of Ra variance)
- Scan speed is the least influential (<14%)
- Cross-hatching produces isotropic surfaces — preferred over hatching
- Best Ra titanium: 1.17 µm (hatching) / 1.55 µm isotropic (cross-hatching)
- Results are always machine-specific — cannot transfer between machines

### B — Surface Tribology (Ring Test)
Create microstructures by laser → measure friction coefficient change with Ring test  
EU 40 hydraulic press (0–200 kN) · MTF STU Trnava forming laboratory

**Key findings — by study:**
- Steel 11373 (2013): Wide grooves → f=0.128 (−32%); narrow groove ridges → friction ↑; hemispheres ≈ reference
- Tool steel 1.2311 (2014): Large structures (500 µm) → f=0.315 (+22%) — material flowed into cavities; suited for grip applications, not lubrication
- Tool steel 90MnCrV8 (2015): Texture IV + Variocut C462 → f=0.158 (−46%); high-viscosity lubricant negates texture effect

**Universal lesson:** Structure scale and lubricant viscosity must be matched. Too large = mechanical interlocking ↑ friction. Too shallow = no effect. Optimal: depth/diameter ratio 0.1–0.2, texture density 30–40%, low-viscosity lubricant.

### C — Applied Manufacturing
Use laser to produce a functional part; evaluate dimensional quality and process limitations.

**Chip breaker (2014):**
- Workflow: Inventor CAD → LpsWin CAM → LASERTEC 80 Shape → ATOS GOM 3D scan
- Optimal: 60 kHz · 2000 mm/s · ~29 W · 10 µm spacing · 1 µm/layer
- Max deviation: 0.09 mm · Machining time: 25–30 min/side
- Verdict: suitable for R&D prototyping; too slow for serial production

**Injection mold texturing (2017):**
- Workflow: PowerSHAPE CAD → GenBmp → GIMP → LpsWin → LASERTEC 80 Shape → Babyplast injection moulding (HDPE)
- 3 rounds: textures redesigned from 0.4 mm to 4 mm after first failure
- 5-axis texturing of complex cavity: feasible but quality degraded at cavity centre
- Critical finding: texture depth > 1 mm needed for reliable HDPE transfer
- Best texture: hexagonal (deepest, clearest transfer)

---

## Presentation Structure

19 slides — gradient-modern template (purple/indigo gradient)

| Slides | Content |
|---|---|
| 1–2 | Title + three-category overview |
| 3–7 | Category A: titanium (design, factors, results) + sintered carbide (design, surface photos) |
| 8–14 | Category B: Ring test method + 3 tribological studies (setup + results each) |
| 15–18 | Category C: chip breaker (workflow + scan results) + mold texturing (workflow + 3 rounds) |
| 19 | Summary table of all 7 theses + cross-cutting themes |

---

## Files in This Directory

```
laser_research_gm/
  index.html          — 19-slide Reveal.js presentation (gradient-modern)
  narration.json      — TTS-ready narration text for all 19 slides
  SESSION_NOTES.md    — this file
  images/
    t1/  — chip breaker thesis (zaverecna_prace.pdf)
    t2/  — titanium thesis (zaverecna_prace-1.pdf)
    t3/  — mold texturing thesis (zaverecna_prace-2.pdf)
    t4/  — sintered carbide thesis (zaverecna_prace-3.pdf)
    t5/  — steel 11373 tribology (zaverecna_prace-4.pdf)
    t6/  — tool steel 1.2311 tribology (zaverecna_prace-5.pdf)
    t7/  — tool steel 90MnCrV8 tribology (zaverecna_prace-6.pdf)
  speech/
    slide_01.txt … slide_19.txt — detailed presenter speech scripts
```

---

## CSS Customisations Applied (beyond template defaults)

- `.img-caption { font-size: 0.92em }` — doubled from 0.46em
- `.slide-source { font-size: 0.8em }` — doubled from 0.4em
- Added: `.cat-bar`, `.cat-cards`, `.cat-card`, `.fig-row`, `.img-caption`, table styles
- Nav bar: dark slate background matching gradient-modern palette
