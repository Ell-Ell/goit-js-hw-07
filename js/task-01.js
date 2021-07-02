const categoriesItem = document.querySelectorAll('.item');
console.log(`В списке ${categoriesItem.length} категории.`);

const category = [...categoriesItem].forEach(el => {
  console.log('Категория:', el.firstElementChild.textContent);
  console.log('Количество элементов:', el.lastElementChild.children.length);
});
