// 1.Порахує і виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.

const allCategories = document.querySelectorAll('.item');
console.log(`Number of categories: ${allCategories.length}`);

// 2. Для кожного элемента li.item у списку ul#categories, знайде і виведе в консоль текст заголовку елемента (тегу <h2>) 
// і кількість елементів в категорії (усіх <li>, вкладених в нього).

allCategories.forEach(category => {
    console.log(`Category: ${category.firstElementChild.textContent}`);
    console.log(`Elements: ${category.lastElementChild.children.length}`);
})

