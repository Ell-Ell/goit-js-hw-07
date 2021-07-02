const input = document.querySelector('#font-size-control');
const span = document.querySelector('#text');

input.oninput = function () {
  span.style.fontSize = input.value + 'px';
};