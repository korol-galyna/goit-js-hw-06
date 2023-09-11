const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const newList = document.getElementById(`ingredients`);

const liElements = [];

ingredients.forEach (ingredient => {

  const newEl = document.createElement(`li`);
  newEl.textContent = ingredient;
  newEl.classList.add(`item`);
  liElements.push(newEl);
})

newList.append(...liElements);
console.log(newList);
