// Напиши скрипт, який під час набору тексту в інпуті input#name-input (подія input), 
// підставляє його поточне значення в span#name-output.
//  Якщо інпут порожній, у спані повинен відображатися рядок "Anonymous".


const inputEl = document.querySelector("#name-input");
const userNameEl = document.querySelector("#name-output");

if (inputEl.value === "") {
  userNameEl.textContent = inputEl.attributes.placeholder.value;
} else {
  userNameEl.textContent = inputEl.value; 
};
console.log(inputEl);


const inputText = (text) => 

  (text.currentTarget.value === '') ?
  userNameEl.textContent = 'Anonymous':
  userNameEl.textContent = text.currentTarget.value;
  console.log(inputEl.value);


inputEl.addEventListener("input", inputText );

