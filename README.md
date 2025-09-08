# Personal Website with Interactive Presentation System

A multilingual Jekyll-based personal website featuring an advanced interactive presentation system with synchronized audio and timed animations.

## 🌟 Key Features

### Multilingual Support
- **Automatic Language Detection**: IP-based geo-location routing
- **Parallel Structure**: Independent `/en/` and `/sk/` versions
- **Shared Resources**: Common layouts, includes, and styling
- **Clean URLs**: Language-prefixed navigation (`/en/`, `/sk/`)

### Interactive Presentation System
- **HTML5 Canvas Animations**: Timed pointer animations (circles, rectangles, arrows, lines)
- **Audio Synchronization**: Synchronized audio playback with presentation slides
- **Responsive Design**: Adaptive coordinate system for different screen sizes
- **Rich Controls**: Keyboard navigation, slide indicators, and interactive buttons
- **Flexible Configuration**: JSON-based presentation configuration system

### Modern Web Architecture
- **Jekyll Static Site**: Fast, secure, and SEO-friendly
- **GitHub Pages Ready**: Optimized for GitHub Pages deployment
- **Responsive Layout**: Mobile-first design with flexbox layouts
- **Performance Optimized**: Efficient loading and caching strategies

## 📁 Project Structure

```
├── index.html                     # Main geo-location redirect page
├── _config.yml                    # Jekyll configuration
├── _layouts/                      # Shared page layouts
├── _includes/                     # Reusable components
├── _sass/                         # Sass stylesheets
├── assets/                        # Static assets and presentation engine
│   ├── css/
│   │   ├── presentations.css      # Presentation listing styles
│   │   └── presentation-engine/   # Core presentation system styles
│   ├── js/
│   │   ├── presentations.js       # Presentation listing functionality
│   │   └── presentation-engine/   # Interactive presentation engine
│   ├── templates/                 # Presentation templates
│   └── images/                    # Static images
├── en/                           # English version
│   ├── _config.yml               # English site configuration
│   ├── index.md                  # English homepage
│   └── presentations/            # English presentations
├── sk/                           # Slovak version
│   ├── _config.yml               # Slovak site configuration  
│   ├── index.md                  # Slovak homepage
│   ├── presentation.md           # Presentations listing page
│   ├── presentations.json        # Presentation metadata
│   └── presentations/            # Individual presentations
│       ├── PRESENTATION_STRUCTURE.md
│       ├── PRESENTATION_SYSTEM_DOCS.md
│       └── [presentation-id]/    # Individual presentation directories
├── my_utils/                     # Development utilities (gitignored)
└── CLAUDE.md                     # Claude Code documentation (gitignored)
```

## 🚀 Getting Started

### Prerequisites
- **Ruby** 3.0+ with Bundler
- **Node.js** 16+ (for utilities)
- **Git** for version control

### Development Setup

1. **Clone Repository**
   ```bash
   git clone [repository-url]
   cd testpage
   ```

2. **Install Dependencies**
   ```bash
   # Jekyll dependencies
   bundle install
   
   # Node.js utilities
   npm install
   ```

3. **Start Development Server**
   ```bash
   # Main site (geo-location redirect)
   bundle exec jekyll serve
   
   # Slovak version directly
   cd sk && bundle exec jekyll serve
   
   # English version directly  
   cd en && bundle exec jekyll serve
   ```

4. **Access Local Site**
   - Main site: `http://localhost:4000`
   - Slovak version: `http://localhost:4000/sk/`
   - English version: `http://localhost:4000/en/`

### Build for Production
```bash
# Build entire site
bundle exec jekyll build

# Build specific language version
cd sk && bundle exec jekyll build
cd en && bundle exec jekyll build
```

## 🎯 Presentation System

### Current Presentation Structure

**Existing Presentations:**
- `mtm-2025-borovets/` - Mathematical Modeling Conference (Borovets, Bulgaria 2025-04-27)
- `albania/` - Albania Conference Presentation (placeholder directory)

### Creating New Presentations

The presentation system uses a simple directory-per-presentation structure:

1. **Create Presentation Directory**
   ```bash
   mkdir sk/presentations/[presentation-id]
   cd sk/presentations/[presentation-id]
   ```

2. **Required Files Structure**
   ```
   [presentation-id]/
   ├── index.html          # Main presentation HTML
   ├── config.js           # JavaScript configuration
   ├── presentation.js     # Core presentation logic
   ├── pointer.js          # Animation system
   ├── styles.css          # Custom styles
   ├── readme.md           # Documentation
   ├── slide_000.jpg       # Slide images (numbered)
   ├── slide_001.jpg
   ├── ...
   ├── audio1.wav          # Audio files (optional)
   ├── audio2.wav
   └── ...
   ```

3. **Configure Presentation**
   
   **config.js** - Main configuration:
   ```javascript
   const SLIDES = ["slide_000.jpg", "slide_001.jpg", "slide_002.jpg"];
   const AUDIOS = ["audio1.wav", "audio2.wav", "audio3.wav"];
   
   const SLIDE_TIMELINES = {
       0: [ // Slide 0
           { type: "circle", x: 0.3, y: 0.4, r: 0.1, start: 0.5, end: 2 },
           { type: "rect", x: 0.6, y: 0.3, w: 0.2, h: 0.15, start: 1, end: 3 }
       ],
       1: [ // Slide 1
           { type: "line", x1: 0.2, y1: 0.2, x2: 0.8, y2: 0.7, start: 1, end: 2 }
       ]
   };
   
   const ANIMATION_CONFIG = {
       strokeColor: "red",
       lineWidth: 3,
       fillOpacity: 0.2
   };
   ```

4. **Add Content**
   - Place slide images as `slide_000.jpg`, `slide_001.jpg`, etc.
   - Add audio files as `audio1.wav`, `audio2.wav`, etc. (optional)
   - Customize appearance in `styles.css`
   - Add timeline animations in `config.js`

5. **Update Listing**
   Add entry to `/sk/presentations.json`:
   ```json
   {
     "id": "presentation-id",
     "name": "Presentation Title", 
     "date": "2025-04-27",
     "presentationUrl": "/sk/presentations/presentation-id/",
     "photo": "/sk/presentations/presentation-id/slide_000.jpg"
   }
   ```

### Animation System

**Supported Animation Types:**
- **Circle**: `{ type: "circle", x: 0.5, y: 0.5, r: 0.1, start: 1.0, end: 3.0 }`
- **Rectangle**: `{ type: "rect", x: 0.3, y: 0.3, w: 0.2, h: 0.15, start: 0.5, end: 2.5 }`
- **Line**: `{ type: "line", x1: 0.1, y1: 0.1, x2: 0.9, y2: 0.9, start: 2.0, end: 4.0 }`

**Coordinate System:**
- All coordinates use relative values (0-1 scale)
- Automatically scales across different screen sizes
- Timing values in seconds, synchronized with audio playback

**Example Implementation:**
Based on `mtm-2025-borovets` presentation structure with 14 slides and 3 audio files.

## 🛠 Development Commands

### Jekyll Development
```bash
# Start development server
bundle exec jekyll serve

# Build for production
bundle exec jekyll build

# Install dependencies
bundle install
```

### Node.js Tools
```bash
# Install Node dependencies
npm install

# Generate PDF from presentations (if configured)
node print_to_pdf.js
```

### Custom Utilities
Located in `my_utils/` directory (gitignored):
- PowerPoint to web format conversion scripts
- Image optimization tools
- Presentation validation scripts

## 📚 Documentation

### Core Documentation
- **[CLAUDE.md](CLAUDE.md)** - Claude Code integration guide
- **[Assets README](assets/README.md)** - Asset organization guide
- **Individual presentation README** - Each presentation has its own `readme.md`

### Current Architecture

**Presentation Components (per presentation directory):**
- **HTML Template** (`index.html`) - Presentation structure and UI
- **Core Controller** (`presentation.js`) - Main presentation logic and navigation
- **Animation Engine** (`pointer.js`) - Canvas-based pointer animations
- **Configuration** (`config.js`) - Slides, audio, and animation timeline
- **Styling** (`styles.css`) - Presentation-specific visual styling

**Shared Resources:**
- **Presentation Listing** (`assets/js/presentations.js`) - Dynamic presentation loading
- **Listing Styles** (`assets/css/presentations.css`) - Presentation cards and grid layout

## 🎨 Customization

### Per-Presentation Styling
Each presentation can be customized by modifying its `styles.css` file:
- Layout and positioning
- Button and control styling  
- Slide container appearance
- Animation colors and effects

### Global Presentation System
Shared styling for the presentation listing page:
- `assets/css/presentations.css` - Presentation cards and grid layout
- `assets/js/presentations.js` - Dynamic loading and interaction

### Navigation and Controls
Standard keyboard shortcuts (implemented in each presentation):
- `←` / `→` : Previous/Next slide
- `Space` : Play/Pause audio
- `Home` / `End` : First/Last slide

## 🚀 Deployment

### GitHub Pages
The site is configured for GitHub Pages deployment:

1. Push changes to main branch
2. GitHub automatically builds and deploys
3. Site available at your GitHub Pages URL

### Manual Deployment
```bash
# Build site
bundle exec jekyll build

# Deploy _site directory to your hosting provider
rsync -av _site/ user@server:/path/to/webroot/
```

## 🔧 Configuration

### Main Configuration
- **`_config.yml`** - Jekyll site configuration
- **`en/_config.yml`** - English site settings
- **`sk/_config.yml`** - Slovak site settings

### Presentation Configuration  
- **`presentations.json`** - Presentation listing metadata
- **Individual `config.json`** - Per-presentation settings
- **Individual `metadata.json`** - Conference and academic metadata

## 📱 Mobile Support

The presentation system is fully responsive:
- **Touch Navigation**: Swipe gestures for slide navigation
- **Adaptive Layout**: Optimized for mobile screens
- **Performance**: Optimized loading for mobile connections
- **Accessibility**: Mobile screen reader support

## 🤝 Contributing

### Code Style
- **JavaScript**: ES6+, modular architecture, JSDoc documentation
- **CSS**: BEM methodology, mobile-first responsive design
- **HTML**: Semantic markup, accessibility attributes
- **Jekyll**: Liquid templating, YAML front matter

### Development Workflow
1. Create feature branch
2. Make changes with tests
3. Update documentation
4. Submit pull request
5. Review and merge

## 📄 License

This project structure and presentation system can be adapted for personal and educational use. Please respect any content-specific licensing for presentations and media files.

## 🆘 Support

For technical questions about the presentation system:
1. Check the [documentation](sk/presentations/PRESENTATION_SYSTEM_DOCS.md)
2. Review [troubleshooting guide](sk/presentations/PRESENTATION_SYSTEM_DOCS.md#troubleshooting)
3. Examine example presentations in `sk/presentations/`

## 🔮 Future Enhancements

### Planned Features
- **Presentation Analytics**: Track viewing statistics
- **Interactive Elements**: Clickable hotspots and overlays
- **Multi-language Audio**: Audio tracks in multiple languages
- **Live Streaming**: Real-time presentation broadcasting
- **Presentation Builder**: Web-based presentation creation tool
- **Export Features**: PDF and video export capabilities

### Technical Improvements
- **Performance**: Advanced caching and lazy loading
- **Accessibility**: Enhanced screen reader support
- **Mobile**: Native app-like presentation experience
- **Analytics**: Detailed user interaction tracking
- **Security**: Enhanced content protection options

---

This personal website showcases a sophisticated presentation system that combines modern web technologies with rich interactive features. The modular architecture ensures maintainability while providing powerful tools for creating engaging academic and conference presentations.