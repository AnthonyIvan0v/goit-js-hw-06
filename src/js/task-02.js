const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listRef = document.querySelector('#ingredients')

const createElement = ingredients.map( elem => {
  const elemLi = document.createElement('li')
  elemLi.textContent = elem;
  elemLi.classList.add('item');
  return elemLi
  
});

listRef.append(...createElement);



// for (const elem of ingredients) {
//   const newTag = document.createElement('li');
//   newTag.textContent = elem;
//   newTag.classList.add('item');
//   ingridientsListRef.appendChild(newTag);
// }
