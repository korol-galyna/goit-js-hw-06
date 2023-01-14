
const categories = document.querySelectorAll('li.item');

const firstTask = categories.length;
console.log('Number of categories:', firstTask);

categories.forEach(category => { 
const categoryChildren = [...category.children];
categoryChildren.forEach(element =>
{
    if (element.tagName === 'H2') { console.log(`Category: ${element.textContent}`); }
    else if (element.tagName === 'UL') { console.log(`Elements: ${element.children.length}`); }
    else {console.log(' '); }
  });
});
 


 