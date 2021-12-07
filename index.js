const viewer = document.getElementById("view-image")

function viewImage(e) {
    console.log(e.alt);
    const src = e.src;
    viewer.style.backgroundImage = "url(" + src + ")";
    viewer.innerText = e.alt
}

function removeImage(e) {
    viewer.style.background = "purple";
    viewer.innerText = "Hover the image to show here";
}