/**
 * Presentations Page JavaScript
 * Handles loading and displaying presentations from JSON data
 * Features: Dynamic loading, image tooltips, presentation popups
 */

/**
 * Loads presentations from JSON file and renders them to the page
 * Sorts presentations by date (newest first) and creates interactive elements
 */
async function loadPresentations() {
    try {
        const response = await fetch('/sk/presentations.json');
        const presentations = await response.json();
        
        // Sort presentations by date (newest first)
        presentations.sort((a, b) => new Date(b.date) - new Date(a.date));
        
        const container = document.getElementById('presentations-container');
        container.innerHTML = '';
        
        if (presentations.length === 0) {
            container.innerHTML = '<p>Žiadne prezentácie nie sú k dispozícii.</p>';
            return;
        }
        
        // Filter out help documentation and render presentations
        presentations.filter(presentation => !presentation._help).forEach(presentation => {
            const presentationDiv = createPresentationElement(presentation);
            container.appendChild(presentationDiv);
        });
        
    } catch (error) {
        console.error('Chyba pri načítaní prezentácií:', error);
        document.getElementById('presentations-container').innerHTML = 
            '<p>Chyba pri načítaní prezentácií. Skúste to prosím neskôr.</p>';
    }
}

/**
 * Creates a DOM element for a single presentation
 * @param {Object} presentation - Presentation data object
 * @returns {HTMLElement} - Presentation div element
 */
function createPresentationElement(presentation) {
    const presentationDiv = document.createElement('div');
    presentationDiv.className = 'presentation-item presentation-card';
    
    const imageHtml = createImageHtml(presentation);
    const titleHtml = createTitleHtml(presentation);
    const buttonHtml = createButtonHtml(presentation);
    const notesHtml = createNotesHtml(presentation);
    const tagsHtml = createTagsHtml(presentation);
    
    presentationDiv.innerHTML = `
        ${imageHtml}
        <div class="presentation-content">
            ${titleHtml}
            <p class="presentation-meta"><strong>Dátum:</strong> ${new Date(presentation.date).toLocaleDateString('sk-SK')}</p>
            <p class="presentation-meta"><strong>Miesto:</strong> ${presentation.location}</p>
            <p class="presentation-description">${presentation.description}</p>
            ${notesHtml}
            <div class="presentation-tags">
                ${tagsHtml}
            </div>
            ${buttonHtml}
        </div>
        <div class="presentation-clearfix"></div>
    `;
    
    return presentationDiv;
}

/**
 * Creates HTML for presentation image or placeholder
 * @param {Object} presentation - Presentation data object
 * @returns {string} - Image HTML string
 */
function createImageHtml(presentation) {
    if (presentation.photo) {
        return `<img src="${presentation.photo}" alt="${presentation.name}" 
                     class="presentation-image"
                     onmouseover="showFullImage('${presentation.photo}', '${presentation.name}', event)" 
                     onmouseout="hideFullImage()">`;
    } else {
        return `<div class="presentation-placeholder">Bez obrázka</div>`;
    }
}

/**
 * Creates HTML for presentation title (with optional conference link)
 * @param {Object} presentation - Presentation data object  
 * @returns {string} - Title HTML string
 */
function createTitleHtml(presentation) {
    if (presentation.conferenceUrl) {
        return `<h3 class="presentation-title">
                    <a href="${presentation.conferenceUrl}" target="_blank">${presentation.name}</a>
                </h3>`;
    } else {
        return `<h3 class="presentation-title">${presentation.name}</h3>`;
    }
}

/**
 * Creates HTML for presentation button (if presentationUrl exists)
 * @param {Object} presentation - Presentation data object
 * @returns {string} - Button HTML string or empty string
 */
function createButtonHtml(presentation) {
    if (presentation.presentationUrl) {
        return `<a href="#" onclick="openPresentation('${presentation.presentationUrl}', '${presentation.name}'); return false;" 
                   class="presentation-button">
                    Otvoriť prezentáciu
                </a>`;
    }
    return '';
}

/**
 * Creates HTML for presentation notes section (if notes exist)
 * @param {Object} presentation - Presentation data object
 * @returns {string} - Notes HTML string or empty string
 */
function createNotesHtml(presentation) {
    if (presentation.notes) {
        return `<div class="presentation-notes">
                    <strong>Poznámky:</strong> ${presentation.notes}
                </div>`;
    }
    return '';
}

/**
 * Creates HTML for presentation tags
 * @param {Object} presentation - Presentation data object
 * @returns {string} - Tags HTML string
 */
function createTagsHtml(presentation) {
    return presentation.tags.map(tag => 
        `<span class="presentation-tag">${tag}</span>`
    ).join('');
}

/**
 * Opens presentation in a new popup window
 * @param {string} url - URL of the presentation to open
 * @param {string} name - Name for the window title
 */
function openPresentation(url, name) {
    window.open(url, 'PresentationWindow', 
        `width=1200,height=800,top=100,left=100,noopener,noreferrer,titlebar=yes,title=${encodeURIComponent(name)}`);
}

// Image tooltip functionality
let fullImageTooltip = null;

/**
 * Shows full-size image tooltip on hover
 * @param {string} imageSrc - Source URL of the image
 * @param {string} altText - Alt text for the image
 * @param {Event} event - Mouse event for positioning
 */
function showFullImage(imageSrc, altText, event) {
    hideFullImage(); // Remove any existing tooltip
    
    fullImageTooltip = document.createElement('div');
    fullImageTooltip.id = 'full-image-tooltip';
    
    const img = document.createElement('img');
    img.src = imageSrc;
    img.alt = altText;
    
    fullImageTooltip.appendChild(img);
    document.body.appendChild(fullImageTooltip);
    
    updateTooltipPosition(event);
    
    // Add mousemove listener to follow cursor
    document.addEventListener('mousemove', updateTooltipPosition);
}

/**
 * Hides the full-size image tooltip
 */
function hideFullImage() {
    if (fullImageTooltip) {
        fullImageTooltip.remove();
        fullImageTooltip = null;
        document.removeEventListener('mousemove', updateTooltipPosition);
    }
}

/**
 * Updates tooltip position relative to mouse cursor
 * @param {Event} event - Mouse event with cursor position
 */
function updateTooltipPosition(event) {
    if (!fullImageTooltip) return;
    
    const tooltip = fullImageTooltip;
    const mouseX = event.clientX;
    const mouseY = event.clientY;
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    
    // Get tooltip dimensions
    const tooltipRect = tooltip.getBoundingClientRect();
    const tooltipWidth = tooltipRect.width;
    const tooltipHeight = tooltipRect.height;
    
    // Position tooltip to the right and below cursor by default
    let x = mouseX + 15;
    let y = mouseY + 15;
    
    // Adjust if tooltip would go outside viewport
    if (x + tooltipWidth > windowWidth) {
        x = mouseX - tooltipWidth - 15;
    }
    if (y + tooltipHeight > windowHeight) {
        y = mouseY - tooltipHeight - 15;
    }
    
    // Ensure tooltip doesn't go outside viewport
    x = Math.max(5, Math.min(x, windowWidth - tooltipWidth - 5));
    y = Math.max(5, Math.min(y, windowHeight - tooltipHeight - 5));
    
    tooltip.style.left = x + 'px';
    tooltip.style.top = y + 'px';
}

// Initialize presentations when DOM is ready
document.addEventListener('DOMContentLoaded', loadPresentations);