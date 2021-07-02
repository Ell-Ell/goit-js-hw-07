const CountIncr = document.querySelector("[data-action='increment']");
const CountDecr = document.querySelector("[data-action='decrement']");
const total = document.querySelector('#value');

let counterValue = 0;
const increment = () => {
  counterValue += 1;
  total.textContent = counterValue;
};

const decrement = () => {
  counterValue -= 1;
  total.textContent = counterValue;
};
CountIncr.addEventListener('click', increment);
CountDecr.addEventListener('click', decrement);

// const refs = {
//   decrement: document.querySelector('.decrement'),
//   increment: document.querySelector('.increment'),
//   span: document.querySelector('.counter-value'),
// };
// function onDecrement() {
//   refs.span.textContent = +refs.span.textContent - 1;
// }

// function onIncrement() {
//   refs.span.textContent = +refs.span.textContent + 1;
// }

// refs.decrement.addEventListener('click', onDecrement);
// refs.increment.addEventListener('click', onIncrement);
