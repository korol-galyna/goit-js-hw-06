const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

ingredients.forEach(element => {
  
  let newItemEl = document.createElement('li');
  newItemEl.textContent = element;
  newItemEl.classList.add('item');

  const elementId = document.getElementById('ingredients');
  elementId.append(newItemEl);

  console.log(element);
}
  
  );

