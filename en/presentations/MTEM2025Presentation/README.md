# Orthogonal Cutting Process Presentation

## File Structure

```
presentation/
├── index.html              # Main HTML (modular version, needs server)
├── index-combined.html     # Combined version (open directly in browser)
├── styles.css              # All CSS styling
├── script.js               # Navigation logic
├── slides.js               # Dynamic slide loader
├── slides/                 # Individual slide files
│   ├── slide1.html
│   ├── slide2.html
│   └── ...slide13.html
├── build.js                # Build script to create combined version
├── serve.py                # Development server
├── MTF_logo.png           # Logo image
├── JC_model.png           # Johnson-Cook model image
└── README.md              # This file
```

---

## Understanding the Two Versions

### **index.html** (Modular Version)
- **Structure:** Slides are in **separate files** (`slides/slide1.html`, `slide2.html`, etc.)
- **How it works:** Uses JavaScript (`slides.js`) to **load** slide files dynamically via AJAX/fetch
- **Requires:** A web server (like `python3 serve.py`) to work
- **Why?** Browsers block loading local files for security reasons (CORS policy)
- **Best for:** Development and editing individual slides

**File dependencies:**
```
index.html
├── styles.css
├── slides.js (loads slide files)
├── script.js (navigation)
└── slides/
    ├── slide1.html
    ├── slide2.html
    └── ... (loaded dynamically)
```

### **index-combined.html** (All-in-One Version)
- **Structure:** All 13 slides are **embedded directly** in one HTML file
- **How it works:** No dynamic loading needed - everything is already there
- **Requires:** Nothing! Opens directly in any browser
- **Best for:** Presenting, sharing, and deploying (like GitHub Pages)

**File dependencies:**
```
index-combined.html
├── styles.css
└── script.js (navigation only)
```

---

## Usage

### Option 1: Combined Version (Easiest - Recommended for Presenting)
Open `index-combined.html` directly in your browser - no server needed!

```bash
# Just double-click the file or:
xdg-open index-combined.html   # Linux
open index-combined.html        # macOS
start index-combined.html       # Windows
```

### Option 2: Modular Version (For Development)
Run a local web server to use the modular version:

**Using Python:**
```bash
python3 serve.py
```
Then open http://localhost:8000/index.html

**Or using Node.js:**
```bash
npx http-server
```
Then open http://localhost:8080/index.html

---

## Editing Slides

1. Edit individual slide files in the `slides/` directory
2. Rebuild the combined version:
   ```bash
   node build.js
   ```
3. The combined version (`index-combined.html`) is updated automatically

---

## Deploying to GitHub Pages

### Step 1: Copy Files to Your GitHub Pages Repository

```bash
# Navigate to your GitHub Pages repository
cd /path/to/your/username.github.io

# Create a directory for the presentation
mkdir -p presentations/cutting-process

# Copy required files (rename index-combined.html to index.html!)
cp "path/to/presentation/index-combined.html" presentations/cutting-process/index.html
cp "path/to/presentation/styles.css" presentations/cutting-process/
cp "path/to/presentation/script.js" presentations/cutting-process/
cp "path/to/presentation/MTF_logo.png" presentations/cutting-process/
cp "path/to/presentation/JC_model.png" presentations/cutting-process/
```

**Important:** Rename `index-combined.html` to `index.html` for GitHub Pages!

### Step 2: Commit and Push

```bash
git add presentations/cutting-process/
git commit -m "Add orthogonal cutting presentation"
git push origin main
```

### Step 3: Access Your Presentation

Your presentation will be available at:
```
https://username.github.io/presentations/cutting-process/
```

### Step 4: Link from Your Main Page

Add a link in your main `index.html`:

```html
<a href="presentations/cutting-process/">
  Orthogonal Cutting Process Investigation
</a>
```

---

## Navigation

- **Arrow Keys**: ← Previous slide | → Next slide
- **Buttons**: Click "Previous" or "Next" buttons
- **Slide Counter**: Shows current slide / total slides

---

## Benefits of This Structure

- ✓ **Modular:** Edit each slide separately in `slides/` directory
- ✓ **Maintainable:** Changes to one slide don't affect others
- ✓ **Reusable:** Shared styles and scripts across all slides
- ✓ **Portable:** Combined version works offline without a server
- ✓ **Deploy-ready:** Easy to publish on GitHub Pages or any web host

---

## Quick Reference

| Task | Command/Action |
|------|----------------|
| **Edit a slide** | Edit `slides/slideX.html` |
| **Rebuild combined version** | `node build.js` |
| **Test locally (modular)** | `python3 serve.py` → http://localhost:8000/index.html |
| **Present (offline)** | Open `index-combined.html` in browser |
| **Deploy to GitHub Pages** | Copy `index-combined.html` as `index.html` + assets |

---

## Troubleshooting

### Navigation not working?
1. Make sure you're using `index-combined.html` (or served `index.html` via a web server)
2. Check browser console (F12) for errors
3. Verify `script.js` and `styles.css` are in the same directory

### Slides not loading in index.html?
- You need a web server! Run `python3 serve.py` or use `index-combined.html` instead

### Images not showing?
- Ensure `MTF_logo.png` and `JC_model.png` are in the same directory as the HTML file
