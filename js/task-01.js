const categoriesItem = document.querySelectorAll('.item');
console.log('В списке', categoriesItem.length, 'категории.');

for (let elem of categoriesItem) {
  console.log('Категория:', elem.firstElementChild.textContent);
  console.log('Количество элементов:', elem.lastElementChild.children.length);
}
