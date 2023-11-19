const buttonSetRadius = document.getElementById("button-set-radius");
const buttonSetColor = document.getElementById("button-set-color");
const buttonSetRotation = document.getElementById("button-set-rotation");
const buttonAlex = document.getElementById("button-alex");
const square = document.getElementById("square");
const text2 = document.getElementById("text1");

/**
def example(name, age):
    print(name, age)
*/

/**
 * deprecated
 */
// function setStyleColor() {
//     square.style.backgroundColor = "blue";
// }

let angle = 0;

function changeColor() {
    square.classList.toggle("square-blue");
}

function changeRotation() {
    square.classList.toggle("square-rotated");
}

function changeBorderRadius() {
    square.classList.toggle("square-bordered");
}

function hideSqure() {
    square.classList.add("square-hidden");
}

function showSquare() {
    square.classList.remove("square-hidden");
}

function rainbowSquare() {
    square.classList.toggle("square-rainbow");
}

function setAngle() {
    angle = angle + 5;
    square.style.setProperty('--degree', angle + 'deg');
    square.classList.toggle("square-rotated");
    if (angle >= 105) {
        text1.classList.toggle("text1-hidden");
    }
}

function resetAngle() {
    angle = 0;
}

buttonSetColor.addEventListener("click", changeColor);

buttonSetRotation.addEventListener("click", changeRotation);

buttonSetRadius.addEventListener("click", changeBorderRadius);

buttonAlex.addEventListener("click", rainbowSquare);
buttonAlex.addEventListener("click", setAngle);
buttonAlex.addEventListener("mouseleave", resetAngle);

square.addEventListener("mouseenter", hideSqure);
square.addEventListener("mouseleave", showSquare);