//задача -1
// const name = '«Генератор защитного поля»';
// let price = 1000;
// const firstMessage = `Выбран «Генератор защитного поля», цена за штуку 1000 кредитов`;
// price = 2000;
// const secondMessage = `Выбран «Генератор защитного поля», цена за штуку 2000 кредитов`;
// console.log(firstMessage);
// // 'Выбран «Генератор защитного поля», цена за штуку 1000 кредитов'

// console.log(secondMessage);
// // 'Выбран «Генератор защитного поля», цена за штуку 2000 кредитов'

// задача - 2
// const invoice = 100;
// const stock = 100;

// // Write code under this line
// const message =
//   invoice > stock
//     ? alert('На складе недостаточно товаров!')
//     : alert('Заказ оформлен, с вами свяжется менеджер');

// console.log(message);

// задача - 3

// const userPassword = 'jqueryismyjam';

// const ADMIN_PASSWORD = 'jqueryismyjam';

// const CANCELED_BY_USER = 'Отменено пользователем!';
// const ACCESS_IS_ALLOWED = 'Добро пожаловать!';
// const ACCESS_DENIED = 'Доступ запрещен, неверный пароль!';
// let message;

// // Write code under this line

// if (userPassword === 'jqueryismyjam') {
//   message = ACCESS_IS_ALLOWED;
// } else if (userPassword === null) {
//   message = CANCELED_BY_USER;
// } else if (userPassword !== 'jqueryismyjam' || null) {
//   message = ACCESS_DENIED;
// }
// console.log(message);

// задача - 4 (v-1)
// const orderPieces = null;

// const credits = 23580;
// const pricePerDroid = 3000;
// const CANCELED_BY_USER = 'Отменено пользователем!';
// const ACCESS_DENIED = 'Недостаточно средств на счету!';

// let totalPrice = orderPieces * pricePerDroid; // Write code in this line
// let balanceCredit = credits - totalPrice; // Write code in this line
// let message;

// // Write code under this line
// message = `Вы купили ${orderPieces} дроидов, на счету осталось ${balanceCredit} кредитов`;

// if (orderPieces < 8) {
//   console.log(message);
// } else if (orderPieces === 1) {
//   console.log(message);
// } else if (orderPieces === 2) {
//   console.log(message);
// } else if (orderPieces === 3) {
//   console.log(message);
// } else if (orderPieces === 4) {
//   console.log(message);
// } else if (orderPieces === 5) {
//   console.log(message);
// } else if (orderPieces === 6) {
//   console.log(message);
// } else if (orderPieces === 7) {
//   console.log(message);
// } else if (orderPieces === null) {
//   message = CANCELED_BY_USER;
// } else {
//   message = ACCESS_DENIED;
// }
// console.log(message);

// задача - 4 (v-2)
// const orderPieces = null;

// const credits = 23580;
// const pricePerDroid = 3000;
// const CANCELED_BY_USER = 'Отменено пользователем!';
// const ACCESS_DENIED = 'Недостаточно средств на счету!';

// let totalPrice = orderPieces * pricePerDroid; // Write code in this line
// let balanceCredit = credits - totalPrice; // Write code in this line
// let message;

// // Write code under this line
// if (orderPieces < 8) {
//   message = `Вы купили ${orderPieces} дроидов, на счету осталось ${balanceCredit} кредитов`;
// } else if (orderPieces === null) {
//   message = CANCELED_BY_USER;
// } else {
//   message = ACCESS_DENIED;
// }

// console.log(message);

// задача - 4 (v-3)

// const orderPieces = 7;

// const credits = 23580;
// const pricePerDroid = 3000;
// const CANCELED_BY_USER = 'Отменено пользователем!';
// const ACCESS_DENIED = 'Недостаточно средств на счету!';

// let totalPrice = orderPieces * pricePerDroid;
// let balanceCredit = credits - totalPrice;
// let message;

// if (orderPieces === null) {
//   message = CANCELED_BY_USER;
// }
// else if (totalPrice > credits) {
//   message = ACCESS_DENIED;
// }
// else {
//   message = `Вы купили ${orderPieces} дроидов, на счету осталось ${balanceCredit} кредитов`;
// }

// console.log(message);

// задача - 5 v-1

const countryName = null;

const CANCELED_BY_USER = 'Отменено пользователем!';
const NO_DELIVERY = 'В выбранную страну доставка недоступна.';
const CHINA = 'Китай';
const AUSTRALIA = 'Австралия';
const INDIA = 'Индия';
const JAMAICA = 'Ямайка';
let message;
let price = 0;
let country;

if (countryName === null) {
  message = CANCELED_BY_USER;
} else {
  country = countryName[0].toUpperCase() + countryName.slice(1).toLowerCase();
  switch (country) {
    case INDIA:
      price = 80;
      break;
    case CHINA:
      price = 100;
      break;
    case JAMAICA:
      price = 120;
      break;
    case AUSTRALIA:
      price = 170;
      break;
    default:
      message = NO_DELIVERY;
  }
}
if (price > 0) {
  message = `Доставка в ${country} будет стоить ${price} кредитов`;
}
console.log(message);

// задача - 5 v-2

// const countryName = "АвсТраЛия"

// const CANCELED_BY_USER = 'Отменено пользователем!';
// const NO_DELIVERY = 'В выбранную страну доставка недоступна.';
// const CHINA = 'Китай';
// const AUSTRALIA = 'Австралия';
// const INDIA = 'Индия';
// const JAMAICA = 'Ямайка';
// let message;
// let price = 0;
// let country;

// if (countryName === null) {
//   message = CANCELED_BY_USER;
//   console.log(message);
// } else {
//   country = countryName[0].toUpperCase() + countryName.slice(1).toLowerCase();
//   switch (country) {
//     case INDIA:
//       price = 80;
//       break;
//           case CHINA:
//       price = 100;
//       break;
//           case JAMAICA:
//       price = 120;
//       break;
//           case AUSTRALIA:
//       price = 170;
//       break;
//     default: message = NO_DELIVERY;
//     console.log(message);
//   }
// }
// if (price > 0) { message = `Доставка в ${country} будет стоить ${price} кредитов`;
// console.log(message);
// }
// message = `Доставка в ${country} будет стоить ${price} кредитов`;
// console.log(message);
