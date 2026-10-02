# Martin Necpal — Personal Website

Bilingual (English / Slovak) personal website built with Jekyll and hosted on GitHub Pages.

**Live site:** https://www.martinnecpal.aiplaces.org/
(`https://martinnecpal.github.io/` redirects there)

It contains an About page, contacts, teaching information with lecture slides, and a list of conference talks with interactive presentations.

## Hosting

| Part | Where |
|---|---|
| Source and build | GitHub repo `martinnecpal/martinnecpal.github.io`, built by GitHub Pages on every push to `main` |
| Domain | `aiplaces.org`, DNS managed in Cloudflare |
| DNS record | `CNAME www.martinnecpal` → `martinnecpal.github.io`, **DNS only (grey cloud)** |
| HTTPS | Let's Encrypt certificate issued by GitHub Pages, "Enforce HTTPS" enabled |
| Analytics | Cloudflare Web Analytics |

Notes:
- The Cloudflare record must stay **DNS only**. Cloudflare's free certificate covers only `*.aiplaces.org`, not the two-level `www.martinnecpal.aiplaces.org`.
- The `CNAME` file in the repo root holds the custom domain. GitHub may rewrite it when the domain is changed in Settings → Pages, so run `git pull` afterwards.
- `aiplaces.org` is a verified domain in the GitHub account settings. Keep the `_github-pages-challenge-martinnecpal` TXT record in Cloudflare.

## Project structure

```
├── index.html               # Root page: IP geo-location redirect to /sk/ or /en/
├── 404.html
├── CNAME                    # Custom domain for GitHub Pages
├── _config.yml              # Jekyll configuration (url, plugins, per-language defaults)
├── _data/navigation.yml     # Menu items for each language
├── _layouts/                # default.html (main layout), page.html, post.html
├── _includes/               # header, sidebar, language switcher, social menu, analytics
├── assets/
│   ├── css/style.css        # Main stylesheet
│   ├── css/presentations.css
│   └── js/                  # Talks listing (presentations-core/-en/-sk.js), image preview
├── en/ and sk/              # Parallel language versions
│   ├── index.md, about.md, contact.md, teaching.md, presentation.md
│   ├── presentations.json   # Data for the Talks / Prezentácie page
│   ├── presentations/       # Interactive presentations (see below)
│   └── Lectures/forming_modeling/   # Lecture slides for the forming simulation course
└── print_to_pdf.js          # Puppeteer script for exporting a presentation to PDF
```

## Pages and content

### Talks listing
`en/presentation.md` and `sk/presentation.md` render cards from `presentations.json`. The shared logic is in `assets/js/presentations-core.js`; `presentations-en.js` / `presentations-sk.js` load the right JSON file. Field reference: [PRESENTATION_LISTING_ARCHITECTURE.md](PRESENTATION_LISTING_ARCHITECTURE.md).

### Interactive presentations (`en/presentations/`, `sk/presentations/`)

| Directory | Type |
|---|---|
| `mtm-2025-borovets/` | Slide images + canvas pointer animations synchronised with audio (`config.js`, `presentation.js`, `pointer.js`) |
| `MTEM2025Presentation/` | Modular HTML slides in `slides/`, merged by `node build.js` into `index-combined.html` (the version that is deployed) |
| `LASERTEC_80_Shape/` | Single-file Reveal.js 5 deck with per-slide narration in `speech/speechN.wav` |
| `laser_research_gm/` | Single-file Reveal.js 5 deck with per-slide narration in `speech/slide_NN.wav`; notes in `SESSION_NOTES.md` |

The two laser presentations are opened from the About page (`index.md`) in a pop-up window.

### Lectures (`*/Lectures/forming_modeling/`)
- `index.md` lists the lectures in a table. Add a new row for each lecture.
- Each lecture is a standalone Reveal.js HTML file (for example `30september2026.html`), with abbreviation tooltips, videos in `videos/` and voice narration in `voice_for_<date>/`.

Standalone HTML files (presentations, lectures) don't use the Jekyll layout. That means they don't include the analytics script unless it is added to them directly.

## Local development

Requirements: Ruby with Bundler, and Node.js (only for `print_to_pdf.js` and `build.js`).

```bash
bundle install
bundle exec jekyll serve     # http://localhost:4000
bundle exec jekyll build     # output in _site/
```

If the Ruby version on the system changes (for example after an OS upgrade) and `bundle` fails with `env: 'ruby3.x': No such file or directory`, reinstall the tools: `gem install bundler jekyll && bundle install`.

## Deployment

```bash
git push github main
```

GitHub Pages builds and publishes the site automatically, usually within a minute or two.
