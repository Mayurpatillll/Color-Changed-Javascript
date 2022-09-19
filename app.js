const color = document.querySelector("#canvas");
const click = document.querySelector("#button")

click.addEventListener("click", myFunction);

function myFunction() {
    color.style.backgroundColor = "black";
    color.innerText = "Background Color Changed to Black";
}