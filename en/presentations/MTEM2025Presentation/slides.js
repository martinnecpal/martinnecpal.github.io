// Slide loader using XMLHttpRequest (works without a server in some cases)
const slideFiles = [
    'slides/slide1.html',
    'slides/slide2.html',
    'slides/slide3.html',
    'slides/slide4.html',
    'slides/slide5.html',
    'slides/slide6.html',
    'slides/slide7.html',
    'slides/slide8.html',
    'slides/slide9.html',
    'slides/slide10.html',
    'slides/slide11.html',
    'slides/slide12.html',
    'slides/slide13.html'
];

let loadedCount = 0;
const presentation = document.getElementById('presentation');

function loadSlide(index) {
    if (index >= slideFiles.length) {
        // All slides loaded, initialize
        if (typeof initPresentation === 'function') {
            initPresentation();
        }
        return;
    }

    const xhr = new XMLHttpRequest();
    xhr.open('GET', slideFiles[index], true);
    xhr.onload = function() {
        if (xhr.status === 200) {
            presentation.innerHTML += xhr.responseText;
            loadedCount++;
            loadSlide(index + 1);
        } else {
            console.error(`Error loading ${slideFiles[index]}: ${xhr.status}`);
            loadSlide(index + 1);
        }
    };
    xhr.onerror = function() {
        console.error(`Network error loading ${slideFiles[index]}`);
        loadSlide(index + 1);
    };
    xhr.send();
}

// Start loading slides when DOM is ready
window.addEventListener('DOMContentLoaded', function() {
    loadSlide(0);
});
