// create obj student 
// name 
// age 
// modules
// learn 
// info
// this
'use strict';

// let user = {
//     name: 'Bob',
//     age: 16,
//     modules: 0,
//     learn: function(theme) {
//         this.modules +=1;
//         return `${this.name} learned ${theme}`;
//     },
//     getFullInfo() {
//         const arrow = () => {
//             console.log('this in obj func',this); // user
//         }
//         arrow();
//         console.log('getFullThis', this); // user parent conext
//         // return `${this.name}, ${this.age} ${this.modules}`
//     },
// }
// console.log(user.learn('Loops'));
// console.log(user.modules);
// user.getFullInfo();
// user.outsideFunction()

// function showThis() {
//     console.log(' showThis function',this);
// }

// showThis();

// const showArrowThis = () => {
//     console.log('arrow this',this);
// }

// showArrowThis();

//при виконані ф-ї в this записується обєкт з яким визвана ф-я
// те що зліва від крапки
// для того щоб звернутися до поля всередині обєкта використовуємо this.назва поля
// this. in this
// правила визначення
// значення this визначається в момент визова, запуска ф-ї

// call apply bind

// const hotel = {
//     name: 'Resort Hotel',
//     price: 2500,
// };
// const hotel2 = {
//     name: '4 Seasons Hotel',
//     price: 500,
// };
// const hotel3 = {
//     name: '7 days Hotel',
//     price: 700,
// };

// function showName(city, time) {
//     alert(`Welcome to ${city} you live in ${this.name} ${time}`);
// }
// showName.apply(hotel3, arr);
// let arr = ['Odesa', '19:00'];
// showName.call(hotel,'Lviv', '17:00');
// showName.call(hotel2, 'Kharkiv');

// const boundShowName = showName.bind(hotel);
// boundShowName();

// showPrice.call(hotel, 'american');
// showPrice.call(hotel3, 'ukrainian');
// showPrice.apply(hotel2, ['american']);

//
// function showName(name, city) {
//     // console.log(`${name} welcomen to ${city} hotel name ${this.name}`);
//     console.log(this);
// }
// // showName.call(hotel3, 'Tony', 'Kyiv',5,'dsfsdf');
//
// // call
// // showName.call(hotel);
// // showName.call(hotel2);
// // showName.call(hotel3);
// // add arguments
//
// // apply
// // showName.apply(hotel,['Tony', 'Maroccccco']);
// // showName.apply(hotel2,['Tony', 'Magadan']);
// // showName.apply(hotel3,['Tony', 'Paris','Zhmerynka']);
//
// // call - coma
// // apply - Array
//
// // bind

// studentds obj and constrctor

// const mick = {
//     name: 'Mick',
//     modules: 3,
//     learn(theme) {
//         this.modules += 1;
//         return `Student ${this.name} passed ${theme}`;
//     }
// };
// // console.log(mick.modules);
// // console.log(mick.learn('Objects'));
// // console.log(mick.modules);
// // // // //
// const jane = {
//     name: 'Jane',
//     modules: 5,
//     learn(theme) {
//         this.modules += 1;
//         return `Student ${this.name} passed ${theme}`;
//     }
// };
// console.log(jane.modules);
// console.log(jane.learn('array'));
// console.log(jane.modules);
// console.log(jane);
// let student  = {};
// student.name = 'Mick'

// console.log(student);

// function Student(name, age, adres, classRoom) {
//     // this = {}
//     this.name = name;
//     this.age = age;
//     this.adres = adres;
//     this.classRoom = classRoom;
//     this.lessons = ['Math', 'History',
//         'English', 'Chemestry', 'Sport'
//     ];
//     this.learn = function () {
//         this.classRoom +=1;
//     }
//     this.grades= [];
//     this.graded = function(num) {
//         this.grades.push(num);
//     }
//     this.totalSum = function() {
//         let total = 0;
//         for (let num of this.grades) {
//             total += num;
//         }
//         return Math.round(total / this.grades.length);
//     }
//     // return {name: name, age: age, adres: adres, classRoom: classRoom}
// }

// let student1 = new Student('Bob', 12, 'Lviv', 7);
// console.log(student1);
// console.log(student1.classRoom);
// student1.graded(12);
// student1.graded(5);
// student1.graded(2);
// console.log(student1.grades);
// console.log(student1.totalSum());
// constructor - для створення багатьох однотипних обєктів з різними параметрами
// local var
// function Person(name, age) {
//     const forName = 'My name is';
//     const forAge = 'My age is';
//     this.name = name;
//     this.age = age;
//     this.showName = function() {
//         console.log(`${forName} ${this.name}`);
//     };
//     this.showAge = function() {
//         console.log(`${forAge} ${this.age}`);
//     }
// }
// //
//  const jane = new Person('Jane',25);
// console.log(jane);
// console.log(jane.name);
// console.log(jane.forName);

// jane.showName();
// jane.showAge();

// params and destr
// function User({age, name, isActive = false, isPremium = false, likesCount = 0}) {
//     this.age = age;
//     this.name = name;
//     this.isActive = isActive;
//     this.isPremium = isPremium;
//     this.likesCount = likesCount;
//
//     this.showLikes = function () {
//         return this.likesCount;
//     }
// }
// //
// const jane = new User({age: 25,name: 'Jane', isPremium: true});
// // change order
// const mick = new User({
//     name: 'Mick',
//     age: 30,
//     likesCount: 150,
//     isActive: false,
//     isPremium: true
// });
// console.log(mick);

// params dest and def params

// function User({
//                   age = 18,
//                   name = 'no name',
//                   isActive = true,
//                   isPremium = false,
//                   likesCount = 0
//               }) {
//     this.age = age;
//     this.name = name;
//     this.isActive = isActive;
//     this.isPremium = isPremium;
//     this.likesCount = likesCount;
//
//     this.showLikes = function () {
//         return this.likesCount;
//     }
// }
//
// const jane = new User({
//     age: 25,
//     name: 'Jane',
//     isActive: true,
//     isPremium: true,
//     likesCount: 500
// });
// // change order
// const mick = new User({
//     name: 'Mick',
//     age: 30,
//     likesCount: 150,
//     isActive: false,
// });
// console.log(mick);


// console.log(account);
// acount.spend(1000);
// acount.deposit(50000);
// console.log('new balance', account);
// function add (a, b) {
//     return a + b;
// }

// account.id = 'ID000-1';
// console.log(account.id);
// account.id = 'ID000-3';
// console.log(account.id);

// Object.defineProperty(account,'id', {
//    value: 'ID000-1',
//     writable: true,
//     enumerable: true,
// });
// console.log(account);
// console.log(account.id);
// account.id = 'ID000-3';
// console.log(account.id);