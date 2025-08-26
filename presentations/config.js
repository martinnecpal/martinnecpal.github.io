// Configuration file for the presentation

// Slide and audio files
const SLIDES = ["slide1.png", "slide2.png", "slide3.png", "slide4.png"];
const AUDIOS = ["audio1.wav", "audio2.wav", "audio3.wav", "audio4.wav"];

// Timeline per slide - defines when and where pointer animations appear
const SLIDE_TIMELINES = {
    0: [ // Slide 0
        { type: "circle", x: 0.3, y: 0.4, r: 0.1, start: 0.5, end: 2 },
        { type: "rect", x: 0.6, y: 0.3, w: 0.2, h: 0.15, start: 1, end: 3 }
    ],
    1: [ // Slide 1
        { type: "line", x1: 0.2, y1: 0.2, x2: 0.8, y2: 0.7, start: 1, end: 2 }
    ],
    2: [ // Slide 2 - add your animations here
        // Example: { type: "circle", x: 0.5, y: 0.5, r: 0.05, start: 0, end: 1 }
    ],
    3: [ // Slide 3 - add your animations here
        // Example: { type: "rect", x: 0.1, y: 0.1, w: 0.3, h: 0.2, start: 2, end: 4 }
    ]
};

// Animation settings
const ANIMATION_CONFIG = {
    strokeColor: "red",
    lineWidth: 3,
    fillOpacity: 0.2
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { SLIDES, AUDIOS, SLIDE_TIMELINES, ANIMATION_CONFIG };
}