function openImagePopup(imageUrl) {
    var popup = window.open("", "_blank", "width=1000,height=800,resizable=yes,scrollbars=yes");

    popup.document.write(`
        <html>
        <head>
            <title>Image Preview</title>
            <style>
                body { margin: 0; text-align: center; background: black; }
                img { max-width: 100%; max-height: 100vh; cursor: zoom-in; }
            </style>
        </head>
        <body>
            <img id="zoomImg" src="${imageUrl}" onclick="toggleZoom()">
            <script>
                function toggleZoom() {
                    var img = document.getElementById("zoomImg");
                    if (img.style.maxWidth === "100%") {
                        img.style.maxWidth = "none";
                        img.style.maxHeight = "none";
                        img.style.cursor = "zoom-out";
                    } else {
                        img.style.maxWidth = "100%";
                        img.style.maxHeight = "100vh";
                        img.style.cursor = "zoom-in";
                    }
                }
            <\/script>
        </body>
        </html>
    `);
}

function showPreview(event, imageUrl) {
    var preview = document.getElementById("imagePreview");
    var img = document.getElementById("previewImg");

    img.src = imageUrl;
    preview.style.display = "block";

    var viewportWidth = window.innerWidth;
    var previewWidth = preview.offsetWidth;

    var posX = event.pageX + 40;
    if (posX + previewWidth > viewportWidth) {
        posX = event.pageX - previewWidth - 20;
    }

    preview.style.left = posX + "px"; 
    preview.style.top = (event.pageY - 100) + "px";
}

function hidePreview() {
    var preview = document.getElementById("imagePreview");
    preview.style.display = "none";
}