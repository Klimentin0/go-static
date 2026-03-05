const el = document.querySelector("h1")!;
el.textContent = "testing...";

type ButtonColor = 'red' | 'blue';
function changeColor(button: HTMLButtonElement, color: ButtonColor) {
  button.style.backgroundColor = color;
}
const button = document.getElementById("testButtonId") as HTMLButtonElement;
button.onclick = () => changeColor(button, 'blue');



console.log("Updated!");
function greet(person: string, date: Date) {
  console.log(`Hello ${person}, today is ${date.toDateString()}!`);
}
 
greet("Maddison", new Date());
