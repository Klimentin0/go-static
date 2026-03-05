"use strict";
const el = document.querySelector("h1");
el.textContent = "testing...";
function changeColor(button, color) {
    button.style.backgroundColor = color;
}
const button = document.getElementById("testButtonId");
button.onclick = () => changeColor(button, 'blue');
console.log("Updated!");
function greet(person, date) {
    console.log(`Hello ${person}, today is ${date.toDateString()}!`);
}
greet("Maddison", new Date());
