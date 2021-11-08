
const decrementButton = document.querySelector('[data-action="decrement"]');
const incrementButton = document.querySelector('[data-action="increment"]');
let count = document.querySelector("#value");
let counterValue = 0;

incrementButton.addEventListener("click", () => {
  counterValue ++;
  count.innerHTML = counterValue;
});

decrementButton.addEventListener("click", () => {
 counterValue --;
  count.innerHTML = counterValue;
});
