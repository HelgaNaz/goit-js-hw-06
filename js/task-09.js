function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const changeColorButton = document.querySelector(".change-color");
const colorOutput = document.querySelector(".color");
const body = document.querySelector("body")

changeColorButton.addEventListener("click", () => {
  let x = getRandomHexColor();
  body.style.backgroundColor = x;
  colorOutput.textContent = x;
  console.log(x);
});
