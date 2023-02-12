// Напиши скрипт, який для кожного елемента масиву ingredients:

// 1. Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement().
// 2. Додасть назву інгредієнта як його текстовий вміст.
// 3. Додасть елементу клас item.
// 4. Після чого, вставить усі <li> за одну операцію у список ul#ingredients.

const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const allIngredients = ingredients.map(ingredient => {
  const newIngredient = document.createElement('li');
  newIngredient.textContent = ingredient;
  newIngredient.classList.add('item');

 return newIngredient
})
console.log(allIngredients);

const ingredientList = document.querySelector('#ingredients');
ingredientList.append(...allIngredients);


// 1 перебираємо масив .map
// 2. створюємо li
// 3. добавляємо textContent
// 4. додаємо клас
// 5. шукаємо в html привязку
// 6. spread добавляємо li











// Створи сонстанту з посиланням на #ingredients, туди потім потрібно буде робіти append створений лішок.
// Потрібно зробити окремо пустий масив, потім перебирати масив інгредієнтів через forEach, наприклад, 
// в якому створюєш “li”, додаєш клас, textContent. І кожен такий інгредієнт пушиш в той пустий масив. 
// Після цього робиш append цього масив через spread у змінну, 
// яку створити треба було на початку - document.querySelector('#ingredients');
