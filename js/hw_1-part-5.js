//------------------------------------------------------------------------------------////------------------------------------------------------------------------------------//
//------------------------------------------------------------------------------------////------------------------------------------------------------------------------------//
//--------------------------------------------------------------------------------//задача 1//--------------------------------------------------------------------------------//
// Write code under this line
// const Account = function (login, email) {
//   this.login = login;
//   this.email = email;
// };
// Account.prototype.getInfo = function () {
//   console.log(typeof Account.prototype.getInfo);
//   return `login : ${this.login}, email: ${this.email}`;
//   //return message
// };
// // 'function'

// const mango = new Account('Mangozedog', 'mango@dog.woof');
// console.log(mango.getInfo());
// // 'login : Mangozedog, email: mango@dog.woof'

// const poly = new Account('Poly', 'poly@mail.com');
// console.log(poly.getInfo());
// // 'login : Poly, email: poly@mail.com'

//------------------------------------------------------------------------------------////------------------------------------------------------------------------------------//
//------------------------------------------------------------------------------------////------------------------------------------------------------------------------------//
//--------------------------------------------------------------------------------//задача 2//--------------------------------------------------------------------------------//
// Write code under this line
// const User = function (name, age, followers) {
//     this.name = name
//     this.age = age
//     this.followers = followers
// }

// User.prototype.getInfo = function () {
//     return `User ${this.name} is ${this.age} years old and has ${this.followers} followers`
// }

// console.log(typeof User);
// // 'function'

// const mango = new User('Mango', 2, 20);
// console.log(mango.getInfo());
// // 'User Mango is 2 years old and has 20 followers'

// // console.log(typeof mango.getInfo);
// // 'function'

// // const poly = new User( 'Poly', 3, 17);
// // console.log(poly.getInfo());
// // 'User Poly is 3 years old and has 17 followers'

//------------------------------------------------------------------------------------////------------------------------------------------------------------------------------//
//------------------------------------------------------------------------------------////------------------------------------------------------------------------------------//
//--------------------------------------------------------------------------------//задача 3//--------------------------------------------------------------------------------//

// Write code under this line
class Storage {
  constructor(items) {
    this.items = items;
  }
  getItems() {
    return this.items;
  }
  addItem(item) {
    return this.items.push(item);
  }
  removeItem(item) {
    console.log(item);
    const { items } = this;
    // console.log(items);
    for (let i = 0; i < items.length; i += 1) {
      const item = items[i];

      //   console.log(item);
      //   if (items.includes(item)) {
      //     items.splice(i, 1);
      //   }
      if (item === items[i]) {
        items.splice(i, 1);
      }
    }
  }

  // console.log(items);
  // console.log(this.items);
}

console.log(typeof Storage);
// 'function'

const goods = ['Нанитоиды', 'Пролонгер', 'Железные жупи', 'Антигравитатор'];

const storage = new Storage(goods);

console.log(storage.getItems());
/* [
  'Нанитоиды',
  'Пролонгер',
  'Железные жупи',
  'Антигравитатор'
] */

storage.addItem('Дроид');
console.log(storage.getItems());
/* [
  'Нанитоиды',
  'Пролонгер',
  'Железные жупи',
  'Антигравитатор',
  'Дроид'
] */

storage.removeItem('Пролонгер');
console.log(storage.getItems());
/* [
  'Нанитоиды',
  'Железные жупи',
  'Антигравитатор',
  'Дроид'
] */
