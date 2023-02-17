// Напиши скрипт, який під час втрати фокусу на інпуті (подія blur), перевіряє його вміст щодо правильної кількості введених символів.

// Яка кількість символів повинна бути в інпуті, зазначається в його атрибуті data-length.
// Якщо введена правильна кількість символів, то border інпуту стає зеленим, якщо неправильна кількість - червоним.
// Для додавання стилів використовуй CSS-класи valid і invalid, які ми вже додали у вихідні файли завдання.



const inputValidEl = document.querySelector('#validation-input');


const inputLength = inputValidEl.getAttribute('data-length');
console.log(inputLength);



inputValidEl.addEventListener('blur', onInputBlur);


function onInputBlur (event) {
    if(inputValidEl.value.length == inputLength) {
        inputValidEl.classList.remove('validation-input');
        inputValidEl.classList.add('valid');

    } else {
        inputValidEl.classList.add('invalid')
    };
};

