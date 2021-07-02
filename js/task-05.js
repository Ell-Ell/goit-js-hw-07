
const inputRef: document.querySelector('#name-input');
const outputRef: document.querySelector('#name-output');



function onInputChange(event) {
    return inputRef.value.lenght >= 1
        ? (outputRef.textContent = event.currentTarget.value)
        : (outputRef.textContent = 'незнакомец' )
};
inputRef.addEventListener('input', onInputChange);