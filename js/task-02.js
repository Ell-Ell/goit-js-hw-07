const ingredients = ['Картошка', 'Грибы', 'Чеснок', 'Помидоры', 'Зелень', 'Приправы'];

const NewIngrediantslist = document.querySelector('#ingredients');

const newList = elem => {
  const listEl = document.createElement('li');
  listEl.textContent = elem;
  return listEl;
};

const ingredientsList = ingredients.map(ingredient => newList(ingredient));
NewIngrediantslist.append(...ingredientsList);

// function newList(ingredients) {
//   ingredients.forEach(element => {
//     const newEl = document.createElement('li');
//     newEl.textContent = element;
//     list.appendChild(newEl);
//   });
// }
// newList(ingredients);
