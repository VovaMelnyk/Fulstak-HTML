// IIFE
// let x = 5;

// ;(function () {
//     let x = 10;
//     let y = 20;

//     console.log(x);
//     console.log(y);

//     function add (a, b) {
//         return a + b
//     }

//     console.log(add(5,10));
// })();

// console.log(x);
// console.log(y);

// Anonymous closure

// const globalVar = 'I am a global variable!';

// (function () {
//     // Переменные и методы внутри будут приватными
//     const grades = [80, 45, 75, 64, 53, 82];

//     const average = () => {
//         const total = grades.reduce((acc, grade) => acc + grade, 0);

//         return `Аverage grade is ${Math.round(total / grades.length)}.`;
//     };

//     console.log(average());
//     console.log(globalVar);
// })();


// console.log(average());


// Global import

// const globalVar = {};

// (function (gv) {
//     // Приватная функция, доступная только внутри замыкания
//     const privateFn = () => console.log("Shhhh, this is private!");

//     const movieFetch =() => {
//          return fetch(url)
//         .then(response => response.json())
//         .then(data => data.sort())
//     }

//     // Откроем методы через интерфейс globalVariable,
//     // закрыв имплементацию внутри замыкания
//     gv.books = () => {
//         privateFn();
//         console.log("Hello, I am a global variable");
//     };

//     gv.music = ['sdfsd','sfsdfsdf0', 'sfsdfsdf'],

//     gv.movies = () => {
//         movieFetch()
//     }
// })(globalVar);
// console.log('global',globalVar);
// console.log(globalVar.music);
// // Shhhh, this is private!
// // Hello, I am a global variable

// privateFn();


// Object interface

// const GRADES_MODULE = (function () {
//     // Это будет приватная переменная внутри замыкания
//     const grades = [80, 45, 75, 64, 53, 82];

//     return {
//         average() {
//             const total = grades.reduce((acc, grade) => acc + grade, 0);

//             return `Average grade is ${Math.round(total / grades.length)}.`;
//         },

//         failing() {
//             const failingGrades = grades.filter(item => item < 70);
//             return 'You failed ' + failingGrades.length + ' times.';
//         }
//     }
// })();
// console.log(GRADES_MODULE);
// console.log(GRADES_MODULE.average());
// console.log(GRADES_MODULE.failing());


// Revealing module pattern

// const calcGrades = (function () {
//     // Переменные и методы внутри будут приватными
//     const grades = [80, 45, 75, 64, 53, 82];

//     const calcAverage = () => {
//         const total = grades.reduce((acc, grade) => acc + grade, 0);

//         return `Average grade is ${Math.round(total / grades.length)}.`;
//     };

//     const failingGrades = ()=> {
//         const failingGrades = grades.filter(item => item < 70);

//         return 'You failed ' + failingGrades.length + ' times.';
//     }

//     // явно укажем что мы хотим открыть и под какими именами
//     return {
//         average: calcAverage,
//     };
// })();

// console.log(calcGrades);

// console.log(calcGrades.average());
// console.log(calcGrades.failing());








