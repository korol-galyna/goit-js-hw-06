const allCategories = document.querySelectorAll(`li.item`);
console.log("Number of categories:", allCategories.length);


allCategories.forEach (category => {
    const firstEl = category.firstElementChild;
    console.log("Category:", firstEl.textContent);
    const secondEl = category.lastElementChild.querySelectorAll(`li`);
    console.log("Elements:", secondEl.length);
})





