/**
 * Slovak Presentations Loader
 * Initializes the presentation loader for Slovak language pages
 */

// Initialize presentations loader for Slovak
const loader = new PresentationsLoader('sk', '/sk/presentations.json');

// Load presentations when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    loader.loadPresentations();
});
