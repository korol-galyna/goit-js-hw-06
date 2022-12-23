
/*Порахує і виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.*/

const firstTask = document.querySelectorAll('li.item').length;

console.log('Number of categories:', firstTask);

/*Для кожного элемента li.item у списку ul#categories, знайде і 
виведе в консоль текст заголовку елемента (тегу <h2>) і 
кількість елементів в категорії (усіх <li>, вкладених в нього).*/

const secondTask = document.querySelectorAll('h2');

console.log('Category:', secondTask.textContent);