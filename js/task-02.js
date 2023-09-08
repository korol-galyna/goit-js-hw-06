const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const newList = document.getElementById(`ingredients`);

ingredients.forEach (element => {

  const newEl = document.createElement(`li`);
  newEl.innerHTML = element;
  newEl.classList.add(`item`);
  
  newList.insertAdjacentElement(`afterbegin`, newEl);
  // newList.appendChild(newEl);
})

console.log(newList);
