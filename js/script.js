// class Admin {
//   #name;
//   #password;

//   constructor(name, password) {
//     this.#name = name;
//     this.#password = password;
//     this.reversePassword = this.#password.split('').reverse().join('');
//   }

//   get name() {
//     return this.#name;
//   }

//   //* Розшифровуємо пароль
//   get password() {
//     return this.reversePassword;
//   }

//   //* Зашифровуємо пароль
//   set password(newPassword) {
//     this.#password = newPassword.split('').reverse().join('');
//   }

//   checkPassword(newPassword) {
//     if (this.reversePassword === newPassword) {
//       console.log('Check is valid');
//     } else {
//       console.log('You are a stranger');
//     }
//   }

//   changePassword(oldPassword, newPassword) {
//     if (this.reversePassword === oldPassword) {
//       this.#password = newPassword.split('').reverse().join('');
//     } else {
//       console.log('Your old password is wrong!');
//     }
//   }
// }

// const mango = new Admin('Mango', 'sdvsjdnvskld');
// console.log(mango);
// console.log(mango.name);

// console.log(mango.password);
// console.log(mango.checkPassword('sdvsjdnvskld'));

//!

// const container = document.querySelector('.body');

// console.log(container);

//??

let scores = [56, 78, 988, -67, -444, 65, 84, -34];

//вывесты выграшни значення бильше 0
// scores.forEach(score => {
//     if (score > 0) alert(score)
// })

//======
//вид выграшных значень видняты 20%
// scores.forEach(element, index, arrRef) => {
// if (element > 0) {
//     arrRef[index] *= 0.8;
// }
// }

//======
// сформуваты новый масыв у долларах
// const courseDollar = 38;
// const scoresInDollarList = scores.map(element => element / courseDollar)

//=====
//сумму всих елементив
// const totalScore = scores.reduce((prevSum, element) => prevSum + element);

//=====
//сумму тильки выграшных значень
// const positiveSum = scores.reduce((prevSum, element) =>
//   element > 0 ? prevSum + element : prevSum,
// );

//=====
//список тильки выграшных результатив
// const positiveScore = scores.filter(element => element > 0);

//=====
const positiveScore = scores.filter(element => element > 0);
