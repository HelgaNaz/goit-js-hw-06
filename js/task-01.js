const numberOfCategories = document.querySelectorAll("#categories li.item");
console.log("Number of Categories:", numberOfCategories.length);

const categoriesTitle = [];
numberOfCategories.forEach((el) => {
    categoriesTitle.push("Category:", el.querySelector("h2").textContent,
        "Element:", el.querySelectorAll("ul>li").length)
});

console.log(...categoriesTitle);

