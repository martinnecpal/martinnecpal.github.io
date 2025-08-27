// Main presentation controller
class PresentationController {
    constructor() {
        this.currentIndex = 0;
        this.isStarted = false;
        
        this.slideEl = document.getElementById("slide");
        this.audioEl = document.getElementById("audio");
        this.slideBar = document.getElementById("slideBar");
        this.autoPlayToggle = document.getElementById("autoPlayToggle");
        this.slideContainer = document.getElementById("slideContainer");
        
        this.buttons = {
            start: document.getElementById("startBtn"),
            prev: document.getElementById("prevBtn"),
            next: document.getElementById("nextBtn"),
            play: document.getElementById("playBtn")
        };
        
        this.init();
    }

    init() {
        this.createSlideIndicators();
        this.attachEventListeners();
        this.updateButtonVisibility();
    }

    createSlideIndicators() {
        SLIDES.forEach((_, index) => {
            const dot = document.createElement("div");
            dot.classList.add("slide-indicator");
            dot.addEventListener("click", () => this.goToSlide(index));
            this.autoPlayToggle.addEventListener("change", (e) => this.onAutoPlayToggle(e));
            this.slideBar.appendChild(dot);
        });
    }

    attachEventListeners() {
        this.buttons.start.addEventListener("click", () => this.startPresentation());
        this.buttons.prev.addEventListener("click", () => this.previousSlide());
        this.buttons.next.addEventListener("click", () => this.nextSlide());
        this.buttons.play.addEventListener("click", () => this.playCurrentAudio());

        // Keyboard navigation
        document.addEventListener("keydown", (e) => this.handleKeyPress(e));
        
        // Audio ended event
        this.audioEl.addEventListener("ended", () => this.onAudioEnded());
    }

    handleKeyPress(event) {
        if (!this.isStarted) return;

        switch (event.key) {
            case "ArrowLeft":
                event.preventDefault();
                this.previousSlide();
                break;
            case "ArrowRight":
                event.preventDefault();
                this.nextSlide();
                break;
            case " ": // Spacebar
                event.preventDefault();
                this.playCurrentAudio();
                break;
            case "Home":
                event.preventDefault();
                this.goToSlide(0);
                break;
            case "End":
                event.preventDefault();
                this.goToSlide(SLIDES.length - 1);
                break;
        }
    }

    startPresentation() {
        this.isStarted = true;
        this.currentIndex = 0;

        // Show slide container
        this.slideContainer.classList.add('presentation-started');
        
        this.updateSlide();
        this.updateButtonVisibility();
        
        // Focus on the presentation for keyboard navigation
        document.body.focus();
    }

    onAutoPlayToggle(event) {
        // If auto-play is disabled and audio is currently playing, let it finish
        // The onAudioEnded method will respect the new setting
        console.log("Auto-play:", event.target.checked ? "enabled" : "disabled");
    }

    previousSlide() {
        if (this.currentIndex > 0) {
            this.currentIndex--;
            this.updateSlide();
        }
    }

    nextSlide() {
        if (this.currentIndex < SLIDES.length - 1) {
            this.currentIndex++;
            this.updateSlide();
        }
    }

    goToSlide(index) {
        if (index >= 0 && index < SLIDES.length) {
            this.currentIndex = index;
            if (this.isStarted) {
                this.updateSlide();
            } else {
                this.startPresentation();
            }
        }
    }

    playCurrentAudio() {
        this.audioEl.currentTime = 0;
        this.audioEl.play().catch(error => {
            console.warn("Audio playback failed:", error);
        });
    }

    onAudioEnded() {
        // Auto-advance to next slide if auto-play is enabled and not on the last slide
        if (this.autoPlayToggle.checked && this.currentIndex < SLIDES.length - 1) {
        setTimeout(() => this.nextSlide(), 1000);
    }
    }

    updateSlide() {
        // Store current index globally for pointer system
        window.currentSlideIndex = this.currentIndex;

        // Update slide image
        this.slideEl.src = SLIDES[this.currentIndex];
        
        // Update audio source
        this.audioEl.src = AUDIOS[this.currentIndex];
        
        // Play audio automatically
        this.audioEl.play().catch(() => {
            console.log("Audio autoplay blocked - user can click play button");
        });

        // Reset pointer animations
        if (typeof window.resetHighlightEvents === "function") {
            window.resetHighlightEvents(this.currentIndex);
        }

        // Update UI
        this.updateSlideIndicators();
        this.updateButtonVisibility();
    }

    updateSlideIndicators() {
        const dots = this.slideBar.querySelectorAll(".slide-indicator");
        dots.forEach((dot, index) => {
            dot.classList.toggle("active", index === this.currentIndex);
        });
    }

    updateButtonVisibility() {
        if (!this.isStarted) {
            this.buttons.start.style.display = "inline-block";
            this.buttons.prev.style.display = "none";
            this.buttons.next.style.display = "none";
            this.buttons.play.style.display = "none";
        } else {
            this.buttons.start.style.display = "none";
            this.buttons.play.style.display = "inline-block";
            
            // Show/hide navigation buttons based on current position
            this.buttons.prev.style.display = this.currentIndex > 0 ? "inline-block" : "none";
            this.buttons.next.style.display = this.currentIndex < SLIDES.length - 1 ? "inline-block" : "none";
        }
    }

    // Public API methods
    getCurrentSlide() {
        return this.currentIndex;
    }

    getTotalSlides() {
        return SLIDES.length;
    }

    isPlaying() {
        return !this.audioEl.paused;
    }
}

// Initialize presentation when DOM is ready
let presentation;
document.addEventListener('DOMContentLoaded', () => {
    presentation = new PresentationController();
    
    // Expose presentation globally for debugging/external access
    window.presentation = presentation;
});