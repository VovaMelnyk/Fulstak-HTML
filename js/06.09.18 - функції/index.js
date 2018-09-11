// create

// function addTwoNumbers() {
//     let sum = 5 + 6;
//     return sum;
// }
// console.log(addTwoNumbers());


// const addThreeNumbers = function () {
//     let sum = 5 + 6 + 7;
//     return sum;
// }
// const addThreeNumbers = function (a, b, c) {
//     let sum = a + b + c;
//     return sum;
// }
// console.log(addThreeNumbers(10, 20, 30));
// console.log(addThreeNumbers(-5, 25, 468));
// console.log(addThreeNumbers());
// let result = addThreeNumbers();
// console.log('result' ,result);


// function showText() {
//     console.log('inside text');
// }
//
// showText();

// call

// function add() {
//     console.log(5 + 6);
// }
// sum();
// function sum(num1, num2) {
//     console.log(num1 + num2);
// }
// let calc = function (num1, num2) {
//     console.log('inside text');
// };
// calc();
// sum(10,12);
// sum(50,100);
// sum(200,-30);
// sum('s','b');


// calc(); // move top


// return
//
// function showText() {
//     let str = 'I am function';
//    return str;
// }
// //
// console.log(showText());
// function calculator(a, b) {
//     let sum = a + b; // 15
//     let mult = a * b; // 50
//     let minus = a - b; // 5
//     let div = a / b; // 2
//     let result = sum + mult + minus + div; // 72
//     return ['сума ' + sum, mult, minus, div, result];
// }
//
// let functionResult = calculator(10, 5);
// console.log(functionResult);

// 1) Написати ф-ю яка приймає рік
// 2) Виводить нам через алерт століття.

// function showCentury (year) {
//     // let century = Math.ceil(year/100);
//     // return century;
//     return Math.ceil(year/100);
// }
// let userYear = +prompt('Enter year');
// console.log(showCentury(userYear));


// 1) Запитуємо в користувача роки до тих пір поки він не натисне Cancel
// 2) Всі роки які вводить користувач записується в масив years
//  3) Коли зупинився цикл потрібно перебрати масив years
// і вивести в консоль запис 
// 1952 рік - 20 століття
// 1440 рік - 15 століття
// 3,1 ) Для перетворення використати нашу ф-ю showCentury.

// function showCentury(year) {
//     let result = Math.ceil(year / 100);
//     return `${year} рік - ${result} століття`;
// }

// function convertCentury() {
//     let arr = [];
//     do {
//         let userInput = prompt('Введіть будь-який номер');
//         if (userInput === null || isNaN(userInput)) {
//             break;
//         }
//         arr.push(+userInput);
//     } while (true);

//     for (let i of arr) {
//         console.log(showCentury(i));
//     }

// }
// convertCentury();

// 1) Написати ф-ю showYear що приймає рік і перевіряє чи він є високосний
// 2) Функція повертає true якщо рік високосний і false якщо ні

// console.log(showYear(2016)); // true
// console.log(showYear(2018)); // false
// console.log(showYear(2000)); // true

// function showYear(year) {
//     // if (year % 4 === 0) {
//     //     return true
//     // } else {
//     //     return false
//     // }
//     return year % 4 === 0;
// }


// arguments
// function add() {
//     console.log(arguments);
//     let arr = Array.from(arguments);
//     console.log(arr);
//     let sum = 0;
//     for (let number of arr) {
//         sum = sum + number;
//     }
//     return sum;
// }
// console.log(add());
// console.log(add(5, 2));
// console.log(add(54, 12, 36, 87, 96));

// function minus(a, b) {
//     return a - b;
// }

// console.log(minus(6, 5));
// console.log(minus(5, 6));

// let a = 30;
// let b = 40;

// function addNumbers() {
//     // let a = 5;
//     // let b = 6;
//     // console.log(a);
//     // console.log(b);
//     function number2() {
//         // let a = 10;
//         // let b = 20;
//         // console.log(a);
//         // console.log(b);
//         return innerFunction();
//         function innerFunction() {
//             let a = 100;
//             let b = 200;
//             return a + b;
//         }
//     }
//     return number2();
// }
// console.log(addNumbers());
// console.log(56);


// Clousure
// 
// let password = 'xh38sk';

// function secretPassword() {
//     let password = 'xh38sk';
//     function guessPassword(guess) {
//         if (guess === password) {
//             return true;
//         } else {
//             return false;
//         }
//     }
//     return guessPassword;
// }

// let passwordGame = secretPassword();
// // console.log( passwordGame );

// let result = passwordGame('qwerty');
// let tryTwo = passwordGame('xh38sk');

// let count = 0; //1 //2 //3

// function counter () {
//     let count = 0; 
//     function increment() {
//         count  = count + 1;
//         console.log(count);
//     }
//     return increment;
// }
// let user = counter();
// user();
// user();
// user();

// let user2 = counter();
// console.log(user2);





// let user1 = counter(); // 1 count 0+++++++
// let user2 = counter(); // 2 count 0++++

// user1();
// user1();
// user1();


// user2();
// user2();
// user2();

// let tryOne = passwordGame('heyisthisit?');
// let tryTwo = passwordGame('xh38sk');
// console.log(tryOne);
// console.log(tryTwo);
// cb

//  function printString(func) {
//     let str = func();
//     let sum = 5 + 6;
//     return str + sum;
// };
//
// //
// function hello() {
//     return 'Hello World';
// }
//
// function n300() {
//     return 100 + 200;
// }
//
// console.log(printString(n300));
