const allCategory = document.querySelector('#categories');
const categoryItems = allCategory.querySelectorAll('li.item');

console.log('Number of categories:', categoryItems.length);           //quantity of categories

categoryItems.forEach(categoryItem => {
  const categoryTitle = categoryItem.querySelector('h2').textContent; //the title of the h2 category element
  const categoryElements = categoryItem.querySelectorAll('ul > li');  //all <li> elements in the h2 category

  console.log(`Category: ${categoryTitle}`);
  console.log(`Elements: ${categoryElements.length}`);
});