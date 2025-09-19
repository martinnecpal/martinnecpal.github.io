// Pointer animation system
class PointerSystem {
    constructor() {
        this.canvas = document.getElementById("pointerCanvas");
        this.ctx = this.canvas.getContext("2d");
        this.audio = document.getElementById("audio");
        this.slideImg = document.getElementById("slide");
        this.animationId = null;
        
        this.init();
    }

    init() {
        // Initial canvas resize
        this.resizeCanvas();
        
        // Event listeners
        window.addEventListener("resize", () => this.resizeCanvas());
        this.slideImg.addEventListener("load", () => this.resizeCanvas());
        this.audio.addEventListener("play", () => this.startAnimation());
        this.audio.addEventListener("pause", () => this.stopAnimation());
        this.audio.addEventListener("ended", () => this.stopAnimation());
    }

    resizeCanvas() {
        this.canvas.width = this.slideImg.clientWidth;
        this.canvas.height = this.slideImg.clientHeight;
    }

    startAnimation() {
        this.stopAnimation(); // Clear any existing animation
        this.animate();
    }

    stopAnimation() {
        if (this.animationId) {
            cancelAnimationFrame(this.animationId);
            this.animationId = null;
        }
    }

    animate() {
        this.render();
        this.animationId = requestAnimationFrame(() => this.animate());
    }

    render() {
        this.resizeCanvas();
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        const currentSlide = window.currentSlideIndex || 0;
        const shapes = SLIDE_TIMELINES[currentSlide] || [];
        const currentTime = this.audio.currentTime;

        shapes.forEach(shape => {
            if (currentTime >= shape.start && currentTime <= shape.end) {
                const progress = Math.min(1, (currentTime - shape.start) / (shape.end - shape.start));
                this.drawShape(shape, progress);
            }
        });
    }

    drawShape(shape, progress) {
        this.ctx.strokeStyle = ANIMATION_CONFIG.strokeColor;
        this.ctx.lineWidth = ANIMATION_CONFIG.lineWidth;

        switch (shape.type) {
            case "circle":
                this.drawCircle(shape, progress);
                break;
            case "rect":
                this.drawRect(shape, progress);
                break;
            case "line":
                this.drawLine(shape, progress);
                break;
            case "arrow":
                this.drawArrow(shape, progress);
                break;
            default:
                console.warn(`Unknown shape type: ${shape.type}`);
        }
    }

    drawCircle(shape, progress) {
        const cx = shape.x * this.canvas.width;
        const cy = shape.y * this.canvas.height;
        const r = shape.r * Math.min(this.canvas.width, this.canvas.height) * progress;
        
        this.ctx.beginPath();
        this.ctx.arc(cx, cy, r, 0, 2 * Math.PI);
        this.ctx.stroke();
        
        if (shape.fill) {
            this.ctx.fillStyle = `rgba(255, 0, 0, ${ANIMATION_CONFIG.fillOpacity})`;
            this.ctx.fill();
        }
    }

    drawRect(shape, progress) {
        const x = shape.x * this.canvas.width;
        const y = shape.y * this.canvas.height;
        const w = shape.w * this.canvas.width * progress;
        const h = shape.h * this.canvas.height * progress;
        
        this.ctx.strokeRect(x, y, w, h);
        
        if (shape.fill) {
            this.ctx.fillStyle = `rgba(255, 0, 0, ${ANIMATION_CONFIG.fillOpacity})`;
            this.ctx.fillRect(x, y, w, h);
        }
    }

    drawLine(shape, progress) {
        const x1 = shape.x1 * this.canvas.width;
        const y1 = shape.y1 * this.canvas.height;
        const x2 = shape.x2 * this.canvas.width;
        const y2 = shape.y2 * this.canvas.height;

        this.ctx.beginPath();
        this.ctx.moveTo(x1, y1);
        this.ctx.lineTo(x1 + (x2 - x1) * progress, y1 + (y2 - y1) * progress);
        this.ctx.stroke();
    }

    drawArrow(shape, progress) {
        const x1 = shape.x1 * this.canvas.width;
        const y1 = shape.y1 * this.canvas.height;
        const x2 = shape.x2 * this.canvas.width;
        const y2 = shape.y2 * this.canvas.height;
        
        const currentX = x1 + (x2 - x1) * progress;
        const currentY = y1 + (y2 - y1) * progress;
        
        // Draw line
        this.ctx.beginPath();
        this.ctx.moveTo(x1, y1);
        this.ctx.lineTo(currentX, currentY);
        this.ctx.stroke();
        
        // Draw arrowhead if line is complete enough
        if (progress > 0.3) {
            const angle = Math.atan2(y2 - y1, x2 - x1);
            const headLength = 20;
            
            this.ctx.beginPath();
            this.ctx.moveTo(currentX, currentY);
            this.ctx.lineTo(
                currentX - headLength * Math.cos(angle - Math.PI / 6),
                currentY - headLength * Math.sin(angle - Math.PI / 6)
            );
            this.ctx.moveTo(currentX, currentY);
            this.ctx.lineTo(
                currentX - headLength * Math.cos(angle + Math.PI / 6),
                currentY - headLength * Math.sin(angle + Math.PI / 6)
            );
            this.ctx.stroke();
        }
    }

    reset() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.stopAnimation();
    }
}

// Initialize pointer system when DOM is ready
let pointerSystem;
document.addEventListener('DOMContentLoaded', () => {
    pointerSystem = new PointerSystem();
    
    // Expose reset function globally for presentation.js
    window.resetHighlightEvents = (slideIndex) => {
        if (pointerSystem) {
            pointerSystem.reset();
        }
    };
});