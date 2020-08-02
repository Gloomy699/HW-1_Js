//--------------------------------------------------------------------------------------//

// function findLongestWord(string = '') {
//     // Write code under this line
//     const wordSplit = string.split(' ');

//     let longestWord = '';

//     for (let i = 0; i < string.length; i += 1)
//         if (wordSplit.length > longestWord {
//             longestWord = wordSplit.length;
//         }

//     return longestWord;
// }
//--------------------------------------------------------------------------------------//

// function findLongestWord(string = '') {
//   let longestWord = '';
//   string.split(' ');

//   for (longestWord.length of string.split('')) {
//     if (string > longestWord.length) {
//       longestWord.length = string;
//     }
//   }

//   return longestWord;
// }
//--------------------------------------------------------------------------------------//

// function findLongestWord(string = '') {
//   string.split(' ');
//   let LongestWord = '';
//   for (const words of string.split(' ')) {
//     if (words > LongestWord) {
//       LongestWord = words;
//     }
//   }

//   return LongestWord;
// }

// function findLongestWord(string = ' ') {
//   const wordSplit = string.split(' ');
//   let longestWord = '';

//   console.log(wordSplit);

//   for (let i = 0; i < wordSplit.length; i += 1)
//     if (wordSplit[i].length > longestWord.length) {
//       longestWord = wordSplit[i];
//     }

//   return longestWord;
// }

// console.log(findLongestWord('The quick brown fox jumped over the lazy dog'));
// //'jumped'

// console.log(findLongestWord('Google do a roll'));
// //'Google'

// console.log(findLongestWord('May the force be with you'));
// //'force'

//------------------------------------------------------------------------------------////------------------------------------------------------------------------------------//
//------------------------------------------------------------------------------------////------------------------------------------------------------------------------------//
//--------------------------------------------------------------------------------//задача 4//--------------------------------------------------------------------------------//

// function formatString(string, maxLength = 40) {
//   // Write code under this line
//   const points = ['...'];

//   for (let i = 0; i < string.length; i += 1);
//   if (string.length > maxLength) {
//     string = string.slice(0, maxLength).concat(points);
//   }

//   return string;
// }

// console.log(formatString('Curabitur ligula sapien, tincidunt non.'));
// // 'Curabitur ligula sapien, tincidunt non.'

// console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));
// // 'Vestibulum facilisis, purus nec pulvinar...'

// console.log(
//   formatString('Vestibulum facilisis, purus nec pulvinar iaculis.', 30),
// );
// // 'Vestibulum facilisis, purus ne...'

//------------------------------------------------------------------------------------////------------------------------------------------------------------------------------//
//------------------------------------------------------------------------------------////------------------------------------------------------------------------------------//
//--------------------------------------------------------------------------------//задача 5//--------------------------------------------------------------------------------//
// function checkForSpam(str) {
//     // Write code under this line

//     return str.toLowerCase().includes('spam') || str.toLowerCase().includes('sale') ? true : false;

// }

// console.log(checkForSpam('Latest technology news')); // false

// console.log(checkForSpam('JavaScript weekly newsletter')); // false

// console.log(checkForSpam('Get best sale offers now!')); // true

// console.log(checkForSpam('[SPAM] How to earn fast money?')); // true

//------------------------------------------------------------------------------------////------------------------------------------------------------------------------------//
//------------------------------------------------------------------------------------////------------------------------------------------------------------------------------//
//--------------------------------------------------------------------------------//задача 6//--------------------------------------------------------------------------------//
// function mapArray(array) {
//   const numbers = new Array(array.length);
//   for(let i = 0; i < array.length; i += 1) {
//     // Write code under this line
//    numbers[i] = array[i] * 10
//   }
//   return numbers;
// }

// console.log(mapArray([-2, 0, 2]));
// // [-20, 0, 20]

// console.log(mapArray([-2.5, 0, 2.5]));
// // [-25, 0, 25]

//------------------------------------------------------------------------------------////------------------------------------------------------------------------------------//
//------------------------------------------------------------------------------------////------------------------------------------------------------------------------------//
//--------------------------------------------------------------------------------//задача 7//--------------------------------------------------------------------------------//
// function filterArray(array) {
//   'use strict';
//   const numbers = [];
//   for (let i = 0; i < array.length; i += 1) {
//     // Write code under this line
//     if (Number.isFinite(array[i])) {
//       numbers.push(array[i]);
//     }
//   }
//   return numbers;
// }

// // console.log(filterArray([-2, 0, 2]));
// // // [-2, 0, 2]

// console.log(filterArray([-2, 0, 2]));
// // [-2, 0, 2]

// console.log(filterArray([1, NaN, Infinity]));
// // [1]

// console.log(filterArray([0, -0, 100, '100']));
// // [0, 0, 100]

// console.log(filterArray([undefined, false, null, [], 1]));
// // [1]

// console.log(filterArray([{}, () => {}, 2]));
// // [2]

//------------------------------------------------------------------------------------////------------------------------------------------------------------------------------//
//------------------------------------------------------------------------------------////------------------------------------------------------------------------------------//
//--------------------------------------------------------------------------------//задача 8//--------------------------------------------------------------------------------//

// function reduceArray(array) {
//   'use strict';
//   let total = 0;
//   // Write code under this line
//   for (let i = 0; i < array.length; i += 1)
//     if (array[i] <= 0 || array[i] >= 0) {
//       total += array[i];
//     }

//   return total;
// }

//------------------------------------------------------------------------------------////------------------------------------------------------------------------------------//

// function reduceArray(array) {
//   'use strict';
//   let total = 0;
//   // Write code under this line
//   for (let i = 0; i < array.length; i += 1)
//     if (Number.isFinite(array[i])) {
//       total += array[i];
//     }

//   return total;
// }

// console.log(reduceArray([1, 2, 3]));
// // 6

// console.log(reduceArray([-2, 0, 2]));
// // 0

// console.log(reduceArray([1, 2, 2.5]));
// // 5.5

//------------------------------------------------------------------------------------////------------------------------------------------------------------------------------//
//------------------------------------------------------------------------------------////------------------------------------------------------------------------------------//
//--------------------------------------------------------------------------------//задача 9//--------------------------------------------------------------------------------//
// function isLoginValid(login, min = 4, max = 16) {
//   // 'use strict';
//   // Write code under this line
//   return login.length >= min && login.length <= max;
// }

// function isLoginUnique(allLogins, login) {
//   'use strict';
//   // Write code under this line
//   return !allLogins.includes(login);
// }

// function addLogin(allLogins, login) {
//   'use strict';
//   const SUCCESS = 'Логин успешно добавлен!';
//   const REFUSAL = 'Такой логин уже используется!';
//   const ERROR = 'Ошибка! Логин должен быть размером от 4 до 16 символов';
//   let message;
//   // Write code under this line
//   if (isLoginValid(login) !== true) {
//     message = ERROR;
//     return message;
//   } else if (isLoginUnique(allLogins, login) !== true) {
//     message = REFUSAL;
//     return message;
//   } else {
//     allLogins.push(login);
//     return SUCCESS;
//   }
// }

// const logins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];

// console.log(addLogin(logins, 'Ajax'));
// // 'Логин успешно добавлен!'

// console.log(addLogin(logins, 'robotGoogles'));
// // 'Такой логин уже используется!'

// console.log(addLogin(logins, 'Zod'));
// // 'Ошибка! Логин должен быть от 4 до 16 символов'

// console.log(addLogin(logins, 'jqueryisextremelyfast'));
// // 'Ошибка! Логин должен быть от 4 до 16 символов'
