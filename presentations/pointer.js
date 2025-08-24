// pointer.js

// Define highlight events per slide/audio
// Each entry corresponds to the index of the slide/audio
window.highlightEvents = [
    [ // events for slide/audio 0
        { time: 1, action: () => showPointer(100, 50) },
        { time: 2, action: () => highlightSomething() }
    ],
    [ // events for slide/audio 1
        { time: 1.5, action: () => showPointer(200, 120) }
    ],
    // ... add more for each slide
];

// Show pointer at specified x,y (relative to the slide container)
function showPointer(x, y) {
    const pointer = document.getElementById("pointer");
    pointer.style.left = x + "px";
    pointer.style.top = y + "px";
    pointer.style.display = "block";
}

function hidePointer() {
    document.getElementById("pointer").style.display = "none";
}

function highlightSomething() {
    // Example highlight: change image border
    document.getElementById("slide").style.border = "5px solid yellow";
}

// Attach timeupdate listener for audio to trigger pointer events
document.addEventListener("DOMContentLoaded", () => {
    const audioEl = document.getElementById("audio");
    audioEl.addEventListener("timeupdate", () => {
        const idx = window.currentSlideIndex || 0; // global variable for current slide index
        const events = window.highlightEvents[idx];
        if (events) {
            events.forEach(evt => {
                if (!evt.done && audioEl.currentTime >= evt.time) {
                    evt.action();
                    evt.done = true; // trigger once
                }
            });
        }
    });
});

// Reset highlight states when needed (call from main script when slide changes)
window.resetHighlightEvents = function(index) {
    hidePointer();
    if (window.highlightEvents[index]) {
        window.highlightEvents[index].forEach(evt => evt.done = false);
    }
};