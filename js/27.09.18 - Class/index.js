// Клас - ескіз(шаблон) обєкта з яким маємо працювати (машина) Атрибути класа це колеса, двигун і тд
// Методи - завестися, відкрити двері, збільшити швидкість
// Обєкт - екземпляр класа який створили з шаблона
// Інтерфейс - набір методів доступних для вмкористання іншими класами (приборна панель автомобіля, кнопки на автоматі з видачі вкусняшок)
// Абстракція - виділеня головних характеристик обєкту і відкидання незначних не вдаючисть в роздуми як методи працюють зсередини. (map, filter, sort)
// Інкапсуляція - приховання всіх внутрішніх процесів від користувача
// Наслідування - створення нового класу на базі існуюучого
// Поліморфізм - використання обєктів з однаковим інтерфейсом без інфи про внутрішню структуру.

// let animal = {
//     canEat: true,
//     canSleep: true,
//     canWalk: true,
//     canJump() {
//         return 'I can jump';
//     }
// };
// let dog = {
//     canBark: true,
//     canSwim: true,
// };
// // console.log(animal);
// console.log(dog);
// console.log(dog.__proto__);

// let arr = [1,5,6];
// console.log(arr);
//
// let dog = Object.create(animal);
// dog.canSwim = true;
// dog.canBark = true;
// console.log('dog',dog);
// console.log('bark',dog.canBark);
// console.log('sleep',dog.canSleep);
// // console.log(dog.hasOwnProperty('canEat'));
// console.log(dog.canJump());
// let dog = Object.create(null);
// dog.age = 25;
// console.log(dog);
// dog.canBark = true;
// dog.canSwim = true;


// let buldog = {
//     canSluna: true,
//     canJump: false,
// };

// console.log('animal',animal);
// console.log('dog',dog);
// console.log('dog proto',dog.__proto__);
// console.log(dog.canBark);
// console.log(dog.canEat);
// console.log(buldog);


// new Object()
// [[Prototype]] це запис __proto__ в специфікації ECMAScript

// Object.create
// const animal = {
//     eat: true,
//     walk: true,
// };
// const cat = Object.create(animal);
// console.log(cat);
// cat.jump = true;
// console.log(cat);
// const persCat = Object.create(cat);
// persCat.name = 'Homa';
// console.log('pers',persCat);
// console.log(persCat.walk);
// console.log(cat.jump);
// console.log(cat.walk);
// console.log(cat.eat);

// without prototype
// const people = Object.create(null);
// console.log(people);

// prototype

// let person = {
//     name: 'Max',
//     age: 35,
// };
// console.log(person);
//
// // new Object()
// // Object.prototype= {
// //
// // };
// Object.prototype.greet = function () {
//     console.log(`Hello i am from main obj ${this.name}`);
// };
// let person2 = {
//     name: 'Ann',
//     age: 35,
// };
// person2.greet();
// console.log(person);
//
// let max = Object.create(person);
// console.log(max.name);
// max.greet();
// console.log(max);
//
// let anna = Object.create(person);
// anna.name = "Anna";
// console.log(Object.getPrototypeOf(anna));
// console.log(Object.getPrototypeOf(person));
// Object.prototype.showName = function () {
//     console.log(`I am ${this.name}`);
// };
// max.showName();
// anna.showName();

// function Human(name) {
//     this.name = name;
// }
// //
// console.log(Human.prototype);
// Human.prototype.hello = function () {
//     console.log(`Hello my friends is ${this.friends}`);
// };
// Human.prototype.friends = ['Jony', 'Jamshud', 'Ravsah'];
// // //
// let man = new Human('Max');
// let anna = new Human('Anna');
// let mick = new Human('Mick');
// // mick.friends.pop();
// console.log(anna);
// console.log(man.friends);
// // console.log(anna.hello());
// console.log(anna.friends);
// anna.friends.pop();
// console.log(man.friends);
// // console.log(Human.prototype);
// console.log({})
// man.hello();
// man.name = 'Max';

//console.log(man);

// Human.prototype.sayHi = function () {
//     console.log(`Hello`);
// };
// man.sayHi();
// console.log(man.name);
// Human.prototype.name = 'Anna';
// console.log(man.name);

// passed arguments
// function Parents(name, gender) {
//     this.name = name;
//     this.gender = gender;
// }
//
// console.log(Parents.prototype);
//
// const child = new Parents('Jane', 'female');
// console.log(child);
// Parents.prototype.showChildInfo = function () {
//     console.log(`name: ${this.name}, gender: ${this.gender}`);
// };
// console.log(child);


// constructor - силка на ф-ю конструктор

//
// const Hero = function (name, level) {
//     // this = {}
//     // Hero.prototype = {}
//     this.name = name;
//     this.level = level;
// };
// Hero.prototype.greet = function () {
//     console.log(`Hello, I'm ${this.name}`);
// };

// const alister = new Hero('Alister', 1);
// console.log(alister);
// alister.greet();
// // Alister.greet();
//
// //   /*
// //     Warrior class, extends Hero
// //   */
// const Warrior = function (name, level, weapon) {
//     // this = {}
//     // Warrior.prototype = {}
//     Hero.call(this, name, level);
//     this.weapon = weapon;
//     // {name, level, weapon,}

// };
// //
// Warrior.prototype = Object.create(Hero.prototype);
// Warrior.prototype.constructor = Warrior;
// //
// Warrior.prototype.attack = function () {
//     console.log(`${this.name} attacks with an ${this.weapon}.`);
// };

// let geralt = new Warrior('Geralt', 1, 'sword');
// console.log(geralt);
// //
// const Swordman = function (name, level, weapon, ability) {
//     Warrior.call(this, name, level, weapon);
//     this.ability = ability;
// };
//
// Swordman.prototype = Object.create(Warrior.prototype);
// Swordman.prototype.constructor = Swordman;
// Swordman.prototype.rush = function () {
//     console.log(`Attack aaaaaaaaaaahhhhhhhhhhhh!!!!!!!`);
// };
// Swordman.prototype.fatal = function () {
//     console.log(`You are dead`);
// };
// let archibald = new Swordman('Archi', 5, 'sword', '100 gram');
//
// // archibald.rush();
// console.log(archibald);
// console.log(Swordman.prototype);


// Apples
// Class and // extends

// const Video = function (size, duration, title, format, hd, author) {
//   this.size = size;
//   this.duration = duration;
//   this.title = title;
//   this.format = format;
//   this.hd = hd;
//   this.author = author;
// }

// Video.prototype.getFullInfo = function () {
//   return `${this.author} ${this.title} ${this.duration}`;
// }

// Video.prototype.archive = function (num) {
//   this.size = parseFloat(this.size) / num + 'gb';
// }

// Video.prototype.changeAuthor = function (newAuthor) {
//   this.author = newAuthor;
// }

// Video.prototype.changeTitle = function (newTitle) {
//   this.title = newTitle;
// }

// const Stream = function(size, duration, title, format, hd, author, status) {
//   Video.call(this, size, duration, title, format, hd, author);
//   this.status = status;
// }

// Stream.prototype = Object.create(Video.prototype);
// Stream.prototype.constructor = Stream;

// Stream.prototype.changeStatus = function() {
//   this.status = !this.status;
// }



// console.log(video);

// class Video {
//   constructor(size, duration, title, format, hd, author) {
//     this.size = size;
//     this.duration = duration;
//     this.title = title;
//     this.format = format;
//     this.hd = hd;
//     this.author = author;
//   }

//   getFullInfo() {
//     return `${this.author} ${this.title} ${this.duration}`;
//   }

//   archive(num) {
//     this.size = parseFloat(this.size) / num + 'gb';
//   }

//   changeAuthor(newAuthor) {
//     this.author = newAuthor;
//   }

//   changeTitle(newTitle) {
//     this.title = newTitle;
//   }
// }

// class Stream extends Video{
//   constructor(size, duration, title, format, hd, author, status) {
//     super(size, duration, title, format, hd, author);
//     this.status = status;
//   }

//   static showStaticMethod() {
//     console.log('I am staitc method');
//   }


//   changeStatus() {
//     this.status = !this.status;
//   }

// }

// let stream = new Stream ('2 gb', '02:56:13', 'Last of us play', 'MP-4', true, 'Naugty Dog', false);

// stream.changeStatus();
// Stream.showStaticMethod();
// console.log(stream);

// let video = new Video('1.5 gb', '01:30:25', 'Genderfield V', 'MP-4', true, 'Dice');

// video.archive(2);
// video.changeAuthor('BioWare');
// video.changeTitle('Anthem');
// console.log(video.getFullInfo());


// class Human {
//     constructor(name, age){
//         this.name = name;
//         this.age = age;
//     }
//
//     walk(){
//         console.log(`I can walk`);
//     }
//
//     sllep() {
//         console.log(`I can sleep`);
//     }
//
//     eat() {
//         console.log(`I can eat`);
//     }
// }
//

// man.walk();
// inh
// class Animal {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
//
//     move() {
//         console.log(`I, ${this.name}, am moving!`);
//     }
// }

// let dog = new Animal('bobik');
// dog.move();
//
// class Dog extends Animal {
//     constructor(name, age, breed) {
//         // вызвать конструктор Animal с аргументом name
//         super(name, age);
//         this.breed = breed;
//     }
//
//     bark() {
//         console.log('woof!');
//     }
//
//     moveAndMakeSound() {
//         super.move();
//         this.bark();
//     }
// }
// //
// const dog = new Dog('Mango',25, 'buldog');
// console.log(dog.moveAndMakeSound());
// dog.move();
// dog.bark();
// dog.moveAndMakeSound();
// console.log(dog.name);

// //

// class Client {
//     constructor(name, days, room) {
//         this.name = name;
//         this.days = days;
//         this.room = room;
//     }
//
//     getInfo() {
//         console.log(`Client ${this.name} Will stay for ${this.days} days in room number ${this.room}`);
//     }
// }
//
// const ajax = new Client('Ajax',10,100);
// //
// ajax.getInfo();
// console.log(ajax);
// console.log(ajax.name);


// class Client {
//     constructor(name, days, room) {
//         const START = 2;
//         this.name = name;
//         this.days = days + START;
//         this.room = room;
//     }
//
//     getInfo() {
//         console.log(`Client ${this.name} Will stay for ${this.days} days in room number ${this.room}`);
//     }
// }
// //
// const ajax = new Client('Ajax',10,100);
// // //
// // ajax.getInfo();
// // console.log(ajax);
// // console.log(ajax.name);
// console.log(ajax.days);
// console.log(ajax.START);
// // console.log(ajax.start);


// static methods
// class Animal {
// // constructor - аналог ф-ї конструктора що має бути присутнім в класі обовязково (створює власні властивоств екзмпляра)
//     constructor(name, age) {
//         console.log(`${name} is animal and was created`);
//         this.name = name;
//         this.age = age;
//     }
//
//     static indentificator() {
//         console.log(`Hello i am static method`);
//     }
//
//     // static SIZE_SMALL = 'SIZE_SMALL';
//
//     eat() {
//         console.log(`${this.name} is eating`);
//     }
//
//     sleep() {
//         console.log(`${this.name} is sleeping`);
//     }
//
//     wakeUp() {
//         console.log(`${this.name} is waking up`);
//     }
//
//     logAge() {
//         return `${this.name} is ${this.age} years old`;
//
//     }
// }


// class Dog extends Animal {
//     constructor(name, age,breed) {
//         super(name, age);
//         this.breed = breed;
//     }
//     logAgeFromDog() {
//     return `${super.logAge()} i am from dog`;
// }

// eat() {
//     console.log(`I am changed eat method`);
// }

// }
// Animal.eat();
// Animal.sleep();
// let dog = new Animal();
// dog.sleep();
// Animal.indentificator();
// console.log(Animal.SIZE_SMALL);
// dog.indentificator();
// Animal.indentificator();
// const bobby = new Animal('Bobby', 5);
// bobby.indentificator();
// console.log(bobby);
// // bobby.eat();
// // bobby.sleep();
// // bobby.wakeUp();
// console.log(bobby.logAge());
// let dog = new Dog('Chapy', 5, 'buldog');
// console.log(dog);
// dog.eat();
// Dog.indentificator();
// console.log(dog.logAgeFromDog());

// class Tank {
//     constructor(x, y) {
//         this.x = x;
//         this.y = y;
//         this.ammunition = 5;
//     }
//
//     moveTo(x, y) {
//         this.x = x;
//         this.y = y;
//     }
//
//     fireTo(x, y) {
//         this._canFire() ? this.ammunition-- : alert('Поповніть рахунок, відправте СМС на номер 339985');
//     }
//
//     _canFire() {
//         return this.ammunition > 0;
//     }
// }
// //
// let tank1 = new Tank(10,20);
// console.log(tank1.canFire());
// console.log(tank1.ammunition);
// tank1.fireTo(30,30);
// console.log(tank1.ammunition);
// tank1.fireTo(40,40);
// console.log(tank1.ammunition);
// tank1.fireTo(10,10);
// console.log(tank1.ammunition);
// tank1.moveTo(50,50);
// // console.log(tank1.x, tank1.y);
// tank1.fireTo(60,60);
// // console.log(tank1.ammunition);
// // console.log(tank1.canFire());


// 1) Створити клас Танк
// 2) Клас буде мати методи які будуть приймати координати по осі х та у:
// 2.1) moveTo, fireTo
// 3) додати класу властивість ammunition
// 4) При пострілу зменьшувати кількість снарядів
// 5) Створити метод що дасть можливість відразу іхати і стріляти moveAndFire прийматиме moveX, moveY, fireX, fireY
// 6) Створити метод перевірки кількості снарядів canFire()
// 7) Приватний метод _canFire

// get i set


// class User {
//   constructor(name, surname) {
//     // this.name = name;
//     // this.surname = surname;
//     // private
//     this._name = name;
//     this._surname = surname;
//   }
//   //   getFullName() {
//   //     return `${this.name} ${this.surname}.`
//   // }

//   // static methodSTATIC() {
//   //     console.log(`HELLO`);
//   // }

//   // getFullName() {
//   //   return `${this.name} ${this.surname}.`
//   // }

//   //
//   // // getter
//   //
//   // get name() {
//   //   return this._name;
//   // }

//   // get surname() {
//   //   return this._surname;
//   // }
//   //
//   //
//   // //
//   // // get surname() {
//   // //     return this._surname;
//   // // }
//   // // // setter
//   // //

//   // get age() {
//   //   return this._age;
//   // }

//   // set age(age) {
//   //   this._age = age;
//   // }



//   //
//   // set setName(name) {
//   //     this._name = name;
//   // }

//   // //
//   // get age() {
//   //     return this._age;
//   // }
// }

// let user = new User('Jon', 'Dou');
// console.log(user.getFullName());
// user.age = 25
// console.log(user);

// console.log(user.name);
// user.name = 'Ivan';
// console.log(user.name);
// User.methodSTATIC();

// console.log(user.getFullName());
//
// console.log(user.getFullName());
// console.log(user.name);
// // get and set
// console.log(user.name);
// user.name = 'Mick';
// console.log(user.name);
// // console.log(user.surname);
// // user.name = 'mick';
// console.log(user.getterName);
// user.setName = 'newName';
// console.log(user.getterName);

// user.age = 25;
// console.log(user.age);


// 1)Створити клас Worker що буде мати властивості name, surname, rate, days
// 2) Додати метод getSalary(),
// 3) Створити 2 робітника і знайти їх зарплати
// 4) Модифікувати клас так щою всі 4 властивості з пункта №1 були приватними і написати для їх читання гетери
// 5) Для властивостей rate, days додати методи сетери

// 1) Створити клас User шо буде мати поля name, surname
// 2) Додати метод getFullName() що виводить на екран імя і прізвище
// 3) Створити клас Student шо буде наслідуватися від User
// 4) Властивості  name, surname буде наслідувати від User і буде мати власну властивість yearIn (рік вступу)
// 5) Для студента додати метод getCourse() що показує курс на якому навчається зараз студент (від поточного року відняти рік вступу)
// 6) Додати студенту метод getFullInfo() який бере інформацію з батьківського метода getFullName() і свого getCourse() і виводить її на екран


/*
  Создать класс Account с полями login,
  email и friendsCount.

  Для класса Account, создать метод getAccountInfo(),
  который выводит в консоль значения всех полей.

  Создать несколько экземпляров с разными
  значениями свойств, вывести их в консоль.
*/


// class Account {
//     constructor(login, email, friendsCount) {
//         this.login = login;
//         this.email = email;
//         this.friendsCount = friendsCount;
//     }
//
//     getAccountInfo() {
//         return `My login is ${this.login} my mail is ${this.email} and i have ${this.friendsCount}`;
//     }
// }

// let arrAccounts = [];
// function getFormValue(event) {
//     event.preventDefault();
//     let login = document.querySelector(`[name='your-login']`).value;
//     let email = document.querySelector(`[name='E-mail']`).value;
//     let count = document.querySelector(`[name='countfriend']`).value;
//     // console.log(name);
//     // console.log(email);
//     // console.log(count);
//     let account = new Account(login, email, count);
//     let result = arrAccounts.some(element => element.login === account.login || element.email === account.email
//     );
//
//     console.log(result);
//     if(!result){
//         arrAccounts.push(account);
//     }
//     console.log(arrAccounts);
// }
//
// document.querySelector('.submit').addEventListener('click', getFormValue);

// логін
// імя
// країну
// місто
// дату народження
// Опис про себе
// силка на аватар
// var x = 1;
// function test() {
//     console.log(x);
//     var x = 2;
// }
// test();

// var a = {}, b = {index: 1}, c = {index: 2};
// a[b] = 1;
// a[c] = 2;
// console.log(a[b]);

// console.log(1);
// setTimeout(function () {
//     console.log(2)
// },1000)
// setTimeout(function () {
//     console.log(3)
// },0)
// console.log(4);
//
// function Dog(name) {
//     // {} this
//     // Dog.prototype = {}
//     this.name = name;
// }
//
// Dog.sayHello = function () {
//     console.log(`Hello`);
// };
//
// var dog = new Dog('Bruno');

// dog.sayHello();


// console.log(Dog.sayHello);
// 'use strict';
// let a = {
//     name: 'frodo',
//     sayName(){
//         console.log('a',this.name);
//     }
// }
//
// var f = a.sayName;
// f();

// new Promise((resolve,reject) => {
//    reject();
// })
// .then(
//     ()=>{
//         console.log('s1');},
//     ()=>{
//         console.log('E1');}
// ).then(
//     ()=>{
//         console.log('s2');},
//     ()=>{
//         console.log('E2');}
// );

// 'use strict';
//  var x = y = 3;
// console.log(y);

// let sent = 'The quick lazzy dog';
// let resylt = sent.split(' ').reverse().join(' ');
// console.log(resylt);

// function add(a) {
//     let add2 = function (b) {
//         return a + b;
//     }
//     return add2
// }
//
// add(3)(4);

// const func = function (height = 0, color = 'red') {
//     let height = height;
//     let color = color;
// }


// document.querySelector('.btn').addEventListener('ckick', function (event) {
//     event.currentTarget.sendData(event)
// })

// let result = arr.reduce((acc, el) => acc + el, 0);

// function f(a, b, c) {
//     return
// }
//
// function revert(cb) {
//     cb(...arg);
//
//     return !cb();
// }
//
// var nf = revert()


// var x = 1;
//
// function test() {
//     var x;
//     console.log(x);
//     x = 2;
//     // var x = 2;
// }
//
// test();


// var a = {}, b= {index: 1}, c={index: 2};
//
// a[b]= 1;
// a[c] = 2;
// console.log(a[b]);

// let arr = [1,3,5];
// arr.c = 'hello';
// console.log(arr);


// let a = {
//     name: 'rr',
//     age: 5,
// }
//
// console.log(a);
//
// [[Protorype]] !== prototype
// const a = 1;
// function add() {
//     return a =  5 + 6;
// }
//
// add();
// console.log(a);
//
// for (let i = 0; i < 5; i++) {
//     console.log(i);
//     for (let k = 1; k < 6; k++) {
//         console.log(k);
//     }
// }
//
// let enemy = [
//     {left: 25, top: 100},
//     {left: 125, top: 100},
//     {left: 225, top: 100},
//     {left: 325, top: 100},
//     {left: 425, top: 100},
//     {left: 525, top: 100},
//     {left: 625, top: 100},
//     {left: 725, top: 100},
//     {left: 825, top: 100},
//     {left: 925, top: 100},
//     {left: 25, top: 175},
//     {left: 125, top: 175},
//     {left: 225, top: 175},
//     {left: 325, top: 175},
//     {left: 425, top: 175},
//     {left: 525, top: 175},
//     {left: 625, top: 175},
//     {left: 725, top: 175},
//     {left: 825, top: 175},
//     {left: 925, top: 175},
// ];


// class Hamburger {
//     constructor(size, stuffing) {
//         this.size = size;
//         this.stuffing = stuffing;
//         this.topping = [];
//     }

//     addTopping(topping) {
//         !this.topping.includes(topping) ? this.topping.push(topping) : null;
//     }

//     removeTopping(topping) {
//        this.topping =  this.topping.includes(topping) ? this.topping.filter(el => el !== topping) : null;
//     }


// }

// Hamburger.SIZE_SMALL = 'SIZE_SMALL';
// Hamburger.SIZE_LARGE = 'SIZE_LARGE';
// Hamburger.STUFFING_CHEESE = 'STUFFING_CHEESE';
// Hamburger.STUFFING_SALAD = 'STUFFING_SALAD';
// Hamburger.STUFFING_MEAT = 'STUFFING_MEAT';
// Hamburger.TOPPING_SPICE = 'TOPPING_SPICE';
// Hamburger.TOPPING_SAUCE = 'TOPPING_SAUCE';
// Hamburger.SIZES = {
//     [Hamburger.SIZE_SMALL]: {
//         price: 30,
//         calories: 50,
//     },
//     [Hamburger.SIZE_LARGE]: {
//         price: 50,
//         calories: 100,
//     },
// };

// Hamburger.STUFFINGS = {
//     [Hamburger.STUFFING_CHEESE]: {
//         price: 15,
//         calories: 20,
//     },
//     [Hamburger.STUFFING_SALAD]: {
//         price: 20,
//         calories: 5,
//     },
//     [Hamburger.STUFFING_MEAT]: {
//         price: 35,
//         calories: 15,
//     },
// };
// Hamburger.TOPPINGS = {
//     [Hamburger.TOPPING_SPICE]: {
//         price: 10,
//         calories: 0,
//     },
//     [Hamburger.TOPPING_SAUCE]: {
//         price: 15,
//         calories: 5,
//     },
// };

// let burger = new Hamburger(Hamburger.SIZE_SMALL, Hamburger.STUFFING_CHEESE);
// burger.addTopping(Hamburger.STUFFING_CHEESE);
// burger.removeTopping(Hamburger.STUFFING_CHEESE);
// console.log(burger);
// // console.log(burger);
// let books = [];
// let order = [];
// Part 1
// Створити конструктор Book який створює обєкти такого типу {title: title, author:author, pages: pages, price: price, curentPage: 0};
// Помістити в прототип метод  buy(arr) який приймає аргументом масив order додає ціну книжки в нього.
// Помістити в прототип метод read(num) який приймає аргументом кількість сторінок що прочитано і змінює значення поля curentPage;
// Створити 3 обєкта книжки викликати для них методи buy() та read(num); 
// Порахувати загальну вартість замовлення з масива order.
// Вивести в консоль змінене значення поля curentPage після запуску методів read(num); 
// Всі куплені книги додати в масив books.
//  Part 2
// Створити ф-ю констпуктор E-Book який наслідує всі властивості консруктора Book і додає до обєкта книги додаткове поле fileSize де вказується розмір книги в кілобайтах.
// Додати в прототип E-Book метод download() який при виклику виводить в консоль напис 'Book {title} has been dowloaded, app was downloaded {fileSize} kb';
// Створити 2 книги конструктором E-Book і викликати для них метод buy(arr) щоб додати їх до масиву books.
// Викликати для них метод download()
// Part 3 
// Створити корструктор PapperBook який наслідує всі властивості консруктора Book і додає до обєкта книги додаткове поле cover.
// Додати в прототип PapperBook метод burn(arr) який приймає аргументом масив books з частини №1 при виклику виводить в консоль напис 'Book {title} has been burned' і видаляє з масива books ту книгу для якої викликаємо цей метод.

// Створити 3 книги конструктором PapperBook і викликати для них метод buy(arr) щоб додати їх до масиву order.
// Викликати для першої і другої книги методи burn(arr), щоб видатити їх з масива books



// class Car {
//   constructor(maxSpeed) {
//     this.maxSpeed = maxSpeed;
//     this.speed = 0;
//     this.running = false;
//     this.distanse = 0;
//   }

//   static getSpecs(car) {
//     console.log(car.running, car.speed, car.distanse);
//   }

// }

// let auto = new Car(100);

// Car.getSpecs(auto);


// const TANK = {
//   name: 'Tiger',
//   speed: 50,
//   hp: 100,
//   armor: 100,
//   amunition: 10,
//   x: 10,
//   y: 20,

//   fire() {
//     this.canFire() ? this.amunition -= 1 : prompt('Enter card number');
//   },

//   move(a, b) {
//     this.x = a;
//     this.y = b;
//   },

//   repair(size) {
//     if (this.canRepair()) {
//       if (this.hp + size > 100) {
//         this.hp = 100;
//       } else {
//         this.hp += size;
//       }
//     } else {
//       alert('you are have full hp')
//     }
//   },

//   canFire() {
//     return this.amunition > 0;
//   },

//   canRepair() {
//     return this.hp < 100;
//   },
// }

// TANK.move(50, 50)
// TANK.fire();
// TANK.fire();
// TANK.hp = 78;
// TANK.move(55, 60);
// TANK.repair(50);
// console.log(TANK);

// function Tank(x, y, name, hp, armor, amunition, speed) {
//   // this = {}
//   // Tank.prototype = {constructor: Tank}
//   this.x = x;
//   this.y = y;
//   this.name = name;
//   this.hp = hp;
//   this.armor = armor;
//   this.amunition = amunition;
//   this.speed = speed;
// }

// Tank.prototype.fire = function () {
//   this.canFire() ? this.amunition -= 1 : prompt('Enter card number');
// };
// Tank.prototype.move = function (a, b) {
//   this.x = a;
//   this.y = b;
// };

// Tank.prototype.repair = function (size) {
//   if (this.canRepair()) {
//     if (this.hp + size > 100) {
//       this.hp = 100;
//     } else {
//       this.hp += size;
//     }
//   } else {
//     alert('you are have full hp')
//   }
// };

// Tank.prototype.canFire = function () {
//   return this.amunition > 0;
// };

// Tank.prototype.canRepair = function () {
//   return this.hp < 100;
// };

// function Stels(x, y, name, hp, armor, amunition, speed, kamyflaj) {
//   Tank.call(this, x, y, name, hp, armor, amunition, speed);
//   this.kamyflaj = kamyflaj;
// }
// Stels.prototype = Object.create(Tank.prototype);

// Stels.prototype.inviseActivator = function () {
//   console.log('Invis on');
// }

// class Tank {
//   constructor(x, y, name, hp, armor, amunition, speed) {
//     this.x = x;
//     this.y = y;
//     this.name = name;
//     this.hp = hp;
//     this.armor = armor;
//     this.amunition = amunition;
//     this.speed = speed;
//   }

//   fire() {
//     this.canFire() ? this.amunition -= 1 : prompt('Enter card number');
//   }

//   move(a, b) {
//     this.x = a;
//     this.y = b;
//   }

//   repair(size) {
//     if (this.canRepair()) {
//       if (this.hp + size > 100) {
//         this.hp = 100;
//       } else {
//         this.hp += size;
//       }
//     } else {
//       alert('you are have full hp')
//     }
//   }

//   canFire() {
//     return this.amunition > 0;
//   }

//   canRepair() {
//     return this.hp < 100;
//   }
// }

// class Stels extends Tank {
//   constructor(x, y, name, hp, armor, amunition, speed, kamuflaj) {
//     super(x, y, name, hp, armor, amunition, speed);
//     this.kamuflaj = kamuflaj;
//   }
//   inviseActivator() {
//     console.log('Invis on');
//   }
// }

// let snake = new Stels(50, 50, 'Snake', 120, 100, 10, 60, true);
// let tiger = new Tank(10, 10, 'Tiger', 100, 100, 10, 50);
// let panzar = new Tank(20, 20, 'Panzar', 150, 50, 8, 80);
// let leopard = new Tank(30, 48, 'Leopard', 120, 30, 10, 100);

// console.log(snake);
// console.log(tiger);
// console.log(panzar);
// console.log(leopard);

// let animal = {
//   canSleep: true,
//   canEat: true,
//   canBreathe: true,
// }

// let dog = {
//   canBark: true,
//   canJump: true,
//   canBite: true,
// }

// let doberman = {
//   canFind: true,
//   canRun: true
// }

// console.log(doberman);
// console.log(doberman.canSleep);

// let dog = Object.create(animal);
// dog.canBark = true;
// dog.canJump = true;
// dog.canBite = true;
// console.log(dog);
// console.log(dog.canJump);
// console.log(dog.canSleep);
// console.log(dog.hasOwnProperty('canEat'));
// console.log(Object.prototype);
// console.log([1,2,3]); // new Array



class User {
  constructor(name, gender, city) {
    this._name = name;
    this.gender = gender;
    this.city = city;
  }


  static showPI () {
    return Math.PI;
  }

  get name() {
    return this._name;
  }

  set age(age) {
    this._age = age;
  }

  get age() {
    return this._age;
  }

  getFullInfo() {
    return `My name is ${this.name} i am ${this.gender}`;
  }

  showCity(){
    return `I live in ${this.city}`;
  }
}

let Ivan = new User('Ivan', 'male', 'Kiev');
console.log(Ivan.name);
Ivan.name = 'Bob';
console.log(Ivan.name);
Ivan.age = 25;
console.log(Ivan);
console.log(User.showPI());
console.log(User.a);