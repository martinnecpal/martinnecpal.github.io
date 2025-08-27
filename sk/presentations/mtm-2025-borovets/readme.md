# HTML Presentation System

A simple, interactive presentation system with synchronized audio and pointer animations.

## File Structure

```
presentation/
├── index.html          # Main HTML file
├── styles.css          # All styling
├── config.js           # Configuration and slide data
├── pointer.js          # Pointer animation system
├── presentation.js     # Main presentation controller
├── README.md           # This documentation
├── slide1.png          # Slide images
├── slide2.png
├── slide3.png
├── slide4.png
├── audio1.wav          # Audio files
├── audio2.wav
├── audio3.wav
└── audio4.wav
```

## Features

- **Slide Navigation**: Previous/Next buttons, slide indicators, and keyboard shortcuts
- **Audio Synchronization**: Each slide has its own audio track that plays automatically
- **Pointer Animations**: Timed visual pointers (circles, rectangles, lines, arrows) that appear during audio playback
- **Responsive Design**: Works on desktop and mobile devices
- **Keyboard Controls**: 
  - Arrow keys for navigation
  - Spacebar to replay audio
  - Home/End to jump to first/last slide

## Configuration

### Adding Slides and Audio

Edit `config.js` to add your slides and audio files:

```javascript
const SLIDES = ["slide1.png", "slide2.png", "slide3.png", "slide4.png"];
const AUDIOS = ["audio1.wav", "audio2.wav", "audio3.wav", "audio4.wav"];
```

### Creating Pointer Animations

Add animations to the `SLIDE_TIMELINES` object in `config.js`:

```javascript
const SLIDE_TIMELINES = {
    0: [ // Slide 0
        { type: "circle", x: 0.3, y: 0.4, r: 0.1, start: 0.5, end: 2 },
        { type: "rect", x: 0.6, y: 0.3, w: 0.2, h: 0.15, start: 1, end: 3 }
    ],
    1: [ // Slide 1
        { type: "line", x1: 0.2, y1: 0.2, x2: 0.8, y2: 0.7, start: 1, end: 2 }
    ]
};
```

#### Animation Types

1. **Circle**: `{ type: "circle", x, y, r, start, end, fill? }`
2. **Rectangle**: `{ type: "rect", x, y, w, h, start, end, fill? }`
3. **Line**: `{ type: "line", x1, y1, x2, y2, start, end }`
4. **Arrow**: `{ type: "arrow", x1, y1, x2, y2, start, end }`

#### Coordinates

- All coordinates are relative (0-1 range)
- `x`, `y`: Position relative to slide dimensions
- `r`: Radius relative to smallest slide dimension
- `w`, `h`: Width/height relative to slide dimensions
- `start`, `end`: Time in seconds when animation appears

## Customization

### Styling

Modify `styles.css` to change:
- Colors and themes
- Button styles
- Slide container size
- Animation appearance

### Animation Settings

Update `ANIMATION_CONFIG` in `config.js`:
```javascript
const ANIMATION_CONFIG = {
    strokeColor: "red",
    lineWidth: 3,
    fillOpacity: 0.2
};
```

## Browser Compatibility

- Modern browsers with HTML5 audio/video support
- Canvas API support required for animations
- ES6+ features used (classes, arrow functions)

## Usage

1. Place all files in the same directory
2. Add your slide images and audio files
3. Update `config.js` with your content
4. Open `index.html` in a web browser
5. Click "Start Presentation" to begin

## Development

The code is modular and organized:

- **index.html**: Basic structure and includes
- **styles.css**: All visual styling
- **config.js**: Data configuration
- **presentation.js**: Core presentation logic
- **pointer.js**: Animation system

Each file has a specific responsibility, making it easy to modify individual features without affecting others.