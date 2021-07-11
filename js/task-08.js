let render = document.querySelector('[data-action="render"]');
let destroy = document.querySelector('[data-action="destroy"]');
let boxes = document.querySelector('#boxes');
let control = document.querySelector('#controls input');
let amount = '';

function getAmount() {
  let amount = control.value;
  console.log(amount);
  createBoxes(amount);
}

function createBoxes(amount) {
  let basicSize = 30;
  let fragment = document.createDocumentFragment();
  for (let i = 0; i < amount; i++) {
    let size = basicSize + i * 10;
    let div = document.createElement('div');
    div.style.cssText = `width: ${size}px; height: ${size}px; background-color: rgba( ${random()} , ${random()} , ${random()} )`;
    fragment.appendChild(div);
  }
  boxes.appendChild(fragment);
}
function destroyBoxes() {
  boxes.innerHTML = '';
}
function random() {
  return Math.random() * 256;
}
function plusAmount() {
  getAmount();
}
render.addEventListener('click', getAmount);
destroy.addEventListener('click', destroyBoxes);

// function createRandom() {
//   return `rgb(${(Math.random() * 255) << 0}, ${(Math.random() * 255) << 0}, ${
//     (Math.random() * 255) << 0
//   })`;
// }
// const refs = {
//   input: document.querySelector('input'),
//   renderBtn: document.querySelector('[data-action="render"]'),
//   destroyBtn: document.querySelector('[data-action="destroy"]'),
//   boxes: document.querySelector('#boxes'),
// };

// refs.renderBtn.addEventListener('click', onRender);
// refs.destroyBtn.addEventListener('click', onDestroy);

// function createRandom() {
//   return `rgb(${(Math.random() * 255) << 0}, ${(Math.random() * 255) << 0}, ${
//     (Math.random() * 255) << 0
//   })`;
// }
// let size = 30;

// function onRender(e) {
//   const { value } = refs.input;
//   const wrapper = [];
//   for (let i = 0; i < +value; i += 1) {
//     const div = document.createElement('div');
//     div.style.width = `${size}px`;
//     div.style.height = `${size}px`;
//     div.style.backgroundColor = createRandom();
//     size += 10;
//     wrapper.push(div);
//   }
//   //   refs.boxes.innerHTML = '';
//   refs.boxes.append(...wrapper);
// }

// function onDestroy() {
//   size = 30;
//   refs.input.value = '';
//   refs.boxes.innerHTML = '';
// }
