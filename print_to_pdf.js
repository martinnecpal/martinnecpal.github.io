const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

(async () => {
    // Get all open files from VS Code workspace
    const workspace = process.env.PWD || process.cwd();
    const files = fs.readdirSync(workspace)
        .filter(file => file.endsWith('.html') || file.endsWith('.md') || file.endsWith('.txt'));

    if (files.length === 0) {
        console.log('No printable files found.');
        return;
    }

    // Launch browser
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    // Convert each file to PDF
    for (const file of files) {
        const filePath = 'file://' + path.join(workspace, file);
        await page.goto(filePath, { waitUntil: 'networkidle2' });

        const pdfPath = path.join(workspace, file.replace(/\.[^/.]+$/, ".pdf"));
        await page.pdf({ path: pdfPath, format: 'A4' });

        console.log(`Printed ${file} to PDF.`);
    }

    await browser.close();
})();