// Configuration file for the presentation

// Slide and audio files
const SLIDES = ["slide_001.jpg", "slide_002.jpg", "slide_003.jpg", "slide_004.jpg", "slide_005.jpg", "slide_006.jpg",
     "slide_007.jpg", "slide_008.jpg", "slide_009.jpg", "slide_010.jpg", "slide_011.jpg"];
const AUDIOS = ["slide_1.wav", "slide_2.wav", "slide_3.wav", "slide_4.wav", "slide_5.wav", "slide_6.wav",
     "slide_7.wav", "slide_8.wav", "slide_9.wav", "slide_10.wav", "slide_11.wav"];

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