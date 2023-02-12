// Напиши скрипт для створення галереї зображень на підставі масиву даних. HTML містить список ul.gallery.

// <ul class="gallery"></ul>

// Використовуй масив об'єктів images для створення елементів <img>, вкладених в <li>. 
// Для створення розмітки використовуй шаблонні рядки і метод insertAdjacentHTML().

// Усі елементи галереї повинні додаватися в DOM за одну операцію додавання.
// Додай мінімальне оформлення галереї флексбоксами або грідами через CSS класи.

const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];


// у Репети схоже рішення

// const makeTransactionTableRowMarkup = transaction => {  // Markup - цей термін використовують, щоб зазначити що для розмітки строк
//   const {id, amount, date, business, name1, type, account} = transaction;
//   return `
//   <tr>
//       <td>${id}</td>
//       <td>${amount}</td>
//       <td>${date}</td>
//       <td>${business}</td>
//       <td>${name1}</td>
//       <td>${type}</td>
//       <td>${account}</td>
//   </tr>
//    `;
// };

// // console.log(transactionHistory);
// // console.log(makeTransactionTableRowMarkup(transactionHistory[2]));
// const tableEl = document.querySelector('.js-transaction-table');
// const makeTransactionTableRows = transactionHistory
// .map(makeTransactionTableRowMarkup)
// .join('');
// tableEl.insertAdjacentHTML('beforeend', makeTransactionTableRows );
// console.log(makeTransactionTableRows);



// моє

const galleryList = document.querySelector('.gallery');
