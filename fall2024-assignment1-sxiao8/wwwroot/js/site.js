// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

function addSoup() {
    //console.log('button click function reached');
    const img = document.createElement("img");
    img.src = "../soupcan.jpeg";
    img.height = 308.5;
    img.width = 296.9;
    img.alt = "soup can";
    img.style = "border-radius: 0; height: 308.5px;";
    //console.log(img.height, img.width);

    img.style.position = 'absolute';
    img.style.top = document.body.clientHeight * Math.random() + 'px';
    img.style.left = document.body.clientWidth * Math.random() + 'px';

    document.body.appendChild(img);
}