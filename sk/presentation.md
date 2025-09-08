---
layout: page
title: "Moje prednášky a prezentácie"
lang: "sk"
#permalink: /presentation/
---

<div id="presentations-container">
    <p>Načítavam prezentácie...</p>
</div>

<script>
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
        
        presentations.forEach(presentation => {
            const presentationDiv = document.createElement('div');
            presentationDiv.className = 'presentation-item';
            presentationDiv.style.cssText = `
                border: 1px solid #ddd;
                border-radius: 8px;
                padding: 20px;
                margin: 20px 0;
                background: #f9f9f9;
                box-shadow: 0 2px 4px rgba(0,0,0,0.1);
            `;
            
            const imageHtml = presentation.photo ? 
                `<img src="${presentation.photo}" alt="${presentation.name}" 
                      style="width: 200px; height: 150px; object-fit: cover; border-radius: 4px; float: left; margin-right: 20px; cursor: pointer;" 
                      onmouseover="showFullImage('${presentation.photo}', '${presentation.name}', event)" 
                      onmouseout="hideFullImage()">` : 
                `<div style="width: 200px; height: 150px; background: #e0e0e0; border-radius: 4px; float: left; margin-right: 20px; display: flex; align-items: center; justify-content: center; color: #666;">Bez obrázka</div>`;
            
            presentationDiv.innerHTML = `
                ${imageHtml}
                <div style="overflow: hidden;">
                    <h3 style="margin: 0 0 10px 0; color: #333;">${presentation.name}</h3>
                    <p style="margin: 5px 0; color: #666;"><strong>Dátum:</strong> ${new Date(presentation.date).toLocaleDateString('sk-SK')}</p>
                    <p style="margin: 5px 0; color: #666;"><strong>Miesto:</strong> ${presentation.location}</p>
                    <p style="margin: 10px 0; color: #555;">${presentation.description}</p>
                    <div style="margin: 10px 0;">
                        ${presentation.tags.map(tag => `<span style="background: #e1f5fe; padding: 3px 8px; border-radius: 12px; font-size: 12px; margin-right: 5px; color: #0277bd;">${tag}</span>`).join('')}
                    </div>
                    <a href="#" onclick="openPresentation('${presentation.presentationUrl}', '${presentation.name}'); return false;" 
                       style="display: inline-block; background: #1976d2; color: white; padding: 10px 20px; text-decoration: none; border-radius: 4px; margin-top: 10px;">
                        Otvoriť prezentáciu
                    </a>
                </div>
                <div style="clear: both;"></div>
            `;
            
            container.appendChild(presentationDiv);
        });
        
    } catch (error) {
        console.error('Chyba pri načítaní prezentácií:', error);
        document.getElementById('presentations-container').innerHTML = 
            '<p>Chyba pri načítaní prezentácií. Skúste to prosím neskôr.</p>';
    }
}

function openPresentation(url, name) {
    window.open(url, 'PresentationWindow', `width=1200,height=800,top=100,left=100,noopener,noreferrer,titlebar=yes,title=${encodeURIComponent(name)}`);
}

let fullImageTooltip = null;

function showFullImage(imageSrc, altText, event) {
    hideFullImage();
    
    fullImageTooltip = document.createElement('div');
    fullImageTooltip.id = 'full-image-tooltip';
    fullImageTooltip.style.cssText = `
        position: fixed;
        z-index: 1000;
        background: white;
        border: 2px solid #333;
        border-radius: 8px;
        box-shadow: 0 4px 20px rgba(0,0,0,0.3);
        padding: 5px;
        pointer-events: none;
        max-width: 90vw;
        max-height: 90vh;
    `;
    
    const img = document.createElement('img');
    img.src = imageSrc;
    img.alt = altText;
    img.style.cssText = `
        max-width: 100%;
        max-height: 100%;
        display: block;
        border-radius: 4px;
    `;
    
    fullImageTooltip.appendChild(img);
    document.body.appendChild(fullImageTooltip);
    
    updateTooltipPosition(event);
    
    document.addEventListener('mousemove', updateTooltipPosition);
}

function hideFullImage() {
    if (fullImageTooltip) {
        fullImageTooltip.remove();
        fullImageTooltip = null;
        document.removeEventListener('mousemove', updateTooltipPosition);
    }
}

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

// Load presentations when page loads
document.addEventListener('DOMContentLoaded', loadPresentations);
</script>

<style>
.presentation-item {
    transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.presentation-item:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0,0,0,0.15);
}
</style>