const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const list = document.querySelector("#ingredients");
let x = []

for (let i = 0; i < ingredients.length; i++) {
  let li = document.createElement("li");
  li.className = "item";
  li.textContent = ingredients[i];
  x.push(li)
}
console.log(x)
list.append(...x)

// Вариант 2
// const markup = ingredients
//   .map((ingredient) => `<li class="item">${ingredient}</li>`)
//   .join("");

// console.log(markup);
// list.innerHTML = markup;