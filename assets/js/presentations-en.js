/**
 * English Presentations Loader
 * Initializes the presentation loader for English language pages
 */

// Initialize presentations loader for English
const loader = new PresentationsLoader('en', '/en/presentations.json');

// Load presentations when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    loader.loadPresentations();
});
