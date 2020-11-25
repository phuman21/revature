var imageLink = "anivia.jpg";

function loadImage(){
    /*
        1. Get the img element
        2. Set img's src to imageLink
    
    */

    //let element = document.getElementById("image");
    let element = document.querySelector("#image");
    element.setAttribute("src", imageLink);
}


function create(event) {
    loadImage();
    let html = document.createElement("html");
    let element = document.createElement("p");
    element.innerHTML = "Hi, im a paragraph";

    html.appendChild(element);

    console.log(event);
}

function htmlClick() {
    console.log("<html> clicked!");
}

function bodyClick() {
    console.log("<body> clicked!");
}
function buttonClick() {
    console.log("<button> clicked!");
}

let button = document.querySelector("#button");
button.addEventListener("mousedown", buttonClick);