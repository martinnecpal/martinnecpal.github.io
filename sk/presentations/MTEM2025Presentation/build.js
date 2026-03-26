#!/usr/bin/env node

// Build script to combine all slides into a single index.html file
const fs = require('fs');
const path = require('path');

const slidesDir = path.join(__dirname, 'slides');
const templatePath = path.join(__dirname, 'index.html');
const outputPath = path.join(__dirname, 'index-combined.html');

// Read the template
let template = fs.readFileSync(templatePath, 'utf8');

// Read all slide files
const slideFiles = [];
for (let i = 1; i <= 13; i++) {
    const slidePath = path.join(slidesDir, `slide${i}.html`);
    if (fs.existsSync(slidePath)) {
        const slideContent = fs.readFileSync(slidePath, 'utf8');
        slideFiles.push(slideContent);
    }
}

// Combine all slides
const allSlidesHTML = slideFiles.join('\n');

// Replace the placeholder in template
template = template.replace(
    '<div class="presentation" id="presentation">\n        <!-- Slides will be loaded dynamically from separate files -->\n    </div>',
    `<div class="presentation" id="presentation">\n${allSlidesHTML}\n    </div>`
);

// Remove the slides.js script reference since we don't need dynamic loading
template = template.replace('<script src="slides.js"></script>\n    ', '');

// Write the combined file
fs.writeFileSync(outputPath, template, 'utf8');

console.log(`✓ Built combined presentation: ${outputPath}`);
console.log('  You can now open index-combined.html directly in a browser!');
