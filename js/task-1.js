const allCategory = document.querySelector('#categories');
const categoryItems = allCategory.querySelectorAll('li.item');

console.log('Number of categories:', categoryItems.length);           //кількість категорій

categoryItems.forEach(categoryItem => {
  const categoryTitle = categoryItem.querySelector('h2').textContent; //заголовок елементу категорії h2
  const categoryElements = categoryItem.querySelectorAll('ul > li');  //всі елементи <li> у категорії h2

  console.log(`Category: ${categoryTitle}`);
  console.log(`Number of elements: ${categoryElements.length}`);
});
