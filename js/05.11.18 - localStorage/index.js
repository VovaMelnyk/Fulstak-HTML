// document.cookie - create cookie
//document.cookie = "userName=chuck norris";
//alert( document.cookie );
// function createCookie(key, value, expDate) {
//     let expiration = new Date(expDate).toUTCString();
//     let cookie = `${escape(key)}=${escape(value)};expires=${expiration};`;
//
//     document.cookie = cookie;
//     console.log(cookie);
//     console.log(`Creating new cookie with
//     key: ${key}
//     value: ${value}
//     expiration: ${expiration}`
//     );
// }
//
// createCookie("sport", "football", Date.UTC(2018, 8, 4));
// createCookie("theme", "dark", Date.UTC(2018, 10, 7));

// function readCookie(name) {
//     let key = name + "=";
//     let cookie = document.cookie.split(';');
//     for (let i = 0; i < cookie.length; i += 1) {
//         let c = cookie[i];
//
//         while (c.charAt(0) === ' ') {
//             c = c.substring(1, c.length);
//         }
//
//         if (c.indexOf(key) === 0) {
//             return c.substring(key.length, c.length);
//         }
//     }
//     return null;
// }
// console.log( readCookie("userName") );

// function deleteCookie(name) {
//     createCookie(name, "", -1);
// }

// localStorage
// let arr = [1, 5, 6, 8, 10];
// let arr2 = [8];
// localStorage.setItem('array',JSON.stringify(arr));
// let result = JSON.parse(localStorage.getItem('array'));
// console.log(result);
// localStorage.setItem('arr2', JSON.stringify(arr2));
// localStorage.clear();
// localStorage.removeItem('array');
// let obj = {
//     a: 'asdasd',
//     b: 5,
// }
// localStorage.setItem('save', JSON.stringify(arr));
// localStorage.setItem('save2', JSON.stringify(obj));
// // localStorage.removeItem('save');
// let newArr = [...arr,20,30,40]
// localStorage.setItem('save', JSON.stringify(newArr))
// local storage
// let text = document.querySelector('[type="text"]');
// let form = document.querySelector('form');
// let ul = document.querySelector('ul');


// function readValue() {
//     event.preventDefault();
//     let value = text.value;
//     let obj = {
//         id: Date.now(),
//         content: value,
//     }
//     createLi(obj);
//     saveToStorage(obj);
//     text.value = '';
// }

// function createLi(task) {
//     let li = document.createElement('li');
//     li.textContent = task.content;
//     li.setAttribute('data-id', task.id);
//     ul.append(li);
// }

// function saveToStorage(obj) {
//     let result = JSON.parse(localStorage.getItem('task'));
//     result.push(obj);
//     localStorage.setItem('task', JSON.stringify(result));
// }

// function paintFromStorage() {
//     let result = JSON.parse(localStorage.getItem('task'));
//     if (result) {
//         for (let el of result) {
//             createLi(el);
//         }
//     } else {
//         localStorage.setItem('task', JSON.stringify([]));
//     }
// }

// function deleteLi () {
//     let id = event.target.dataset.id;
//     event.target.remove();
//     console.log(id);
//     let result = JSON.parse(localStorage.getItem('task'));
//     let arrForSave = result.filter(el => el.id !== Number(id));
//     localStorage.setItem('task', JSON.stringify(arrForSave));
// }


// window.addEventListener('DOMContentLoaded', paintFromStorage);
// form.addEventListener('submit', readValue);
// ul.addEventListener('click', deleteLi);
// localStorage.setItem('theme','light');
// const settings = {
//     theme: 'dark',
//     isAuthenticated: true,
//     options:[1, 2, 3],
// };
//
// console.log(settings);
// let data = JSON.stringify(settings);
// console.log(data);
// localStorage.setItem( "settings", data);
//
// let result = localStorage.getItem("theme");
// console.log(result);
// const settingsFromLS = localStorage.getItem("settings");
// console.log(JSON.parse(settingsFromLS));;
// console.log(settingsFromLS);
//
// localStorage.removeItem('theme');
//
// localStorage.clear();

// Es6

// Template literals
// let w1 = 'Homer';
// let w2 = 'Simpson';
// console.log(w1 + ' ' + w2);
// console.log(`${w1} ${w2}`);

// Destructuring Objects

// const personalInformation = {
//     firstName: 'Homer',
//     lastName: 'Simpson',
//     city: 'Springfield',
//     state: 'Texas',
//     zipCode: 73301
// };

// console.log(`${personalInformation.firstName} ${personalInformation.lastName} live in ${personalInformation.city} state ${personalInformation.state}`);

// const {firstName, lastName, state, city} = personalInformation

// console.log(`${firstName} ${lastName} live in ${state} state ${city}`);

// console.log(`${firstName} ${lastName}`);
//
// const {firstName: fn, lastName: ln} = personalInformation;
//
// console.log(`${fn} ${ln}`);

// Destructuring Arrays
// let filip = ['Filip', 'J', 'Fry']
// let [firstName, middleName, lastName] = filip;
// let [firstName, , lastName] = filip;


// console.log(lastName);

// Object literal
// function addressMaker(city, country) {
//     const newAdress = {newCity: city, newCountry: country};

//     console.log(newAdress);
// }

// addressMaker('Kyiv', 'Ukraine');

// function addressMaker(city, country) {
//     const newAdress = {city, country};

//     console.log(newAdress);
// }

// addressMaker('Kyiv', 'Ukraine');


// function addressMaker({city = 'none', state= 'abc'}) {
//     const newAddress = {
//         city,
//         state,
//         country: 'United States'
//     };

//     console.log(newAddress);

// }
// //
// addressMaker({ state: 'Texas',city: 'Austin'});
//
// function addressMaker(address) {
//     const {city, state} = address;
//
//     const newAddress = {
//         city,
//         state,
//         country: 'United States'
//     };
//     console.log(`${newAddress.city}, ${newAddress.state}, ${newAddress.country}`)
// }
//
// addressMaker({city: 'Austin', state: 'Texas'});

// for of

// let incomes = [62000, 67000, 75000];
// let total = 0;

// for (const income of incomes) {
//     console.log(income);
//     total += income;
// }

// console.log(total);

// let incomes = [62000, 67000, 75000];
//
// for (let income of incomes) {
//     income += 5000;
// }
//
// console.log(incomes);


// Spread Operator

// let example1 = [1,2,3,4,5,6];
// let example2 = [7,...example1];
// // example2.push(true);

// console.log(example2);
// console.log(example1);


// let example1 = {
//     firstName: 'Dylan'
// };

// let example2 = {
//     ...example1
// };

// example2.age = 25;
// console.log(example2);
// console.log(example1);


// Rest Operator

// function add(nums) {

//     console.log(nums);
// }

// add(4, 5, 7, 8, 12)

// function add(nums) {

//     console.log(arguments);
// }

// add(4, 5, 7, 8, 12)

// function add(...nums) {

//     console.log(nums);
// }

// add(4, 5, 7, 8, 12)

// Arrow functions

// function add(...nums) {
//     let total = nums.reduce(function (x, y) {
//         return x+y;
//     });
//
//     console.log(total);
// }
//
// add(4, 5, 7, 8, 12);
//
// function add(...nums) {
//     let total = nums.reduce((x, y) => x + y);
//
//     console.log(total);
// }
//
// add(4, 5, 7, 8, 12)

// Default parametrs

// function add(numArray = []) {
//     let total = 0;
//     numArray.forEach((element) => {
//         total += element;
//     });
//
//     console.log(total);
// }
//
// add();

// import export
// import { data } from './test.js';
//
// let updatedData = data;
//
// updatedData.push(5);
// console.log(updatedData);


// padStart padEnd

// let example = 'Dylan';

// console.log(example.padEnd(10, 'a'));
// console.log(example.padStart(10, 'a'));

// classes

// class Animal {
//     constructor(type, legs){
//         this.type = type;
//         this.legs = legs;
//     }
//
//     makeNoise(sound = 'Loud Noise') {
//         console.log(sound);
//     }
//
//     static return10(){
//         return 10;
//     }
//
//     get metaData () {
//         return `Type: ${this.type}, Legs: ${this.legs}`;
//     }
// }

// let cat = new Animal('Cat', 4);
// console.log(cat);
// cat.makeNoise();
// cat.makeNoise('Meow');
// console.log(cat.return10());
// console.log(Animal.return10());
// console.log(cat.metaData);

// class Cat extends Animal {
//     constructor(type, legs, tail){
//         super(type, legs);
//         this.tail = tail;
//     }
//
//     makeNoise(sound = "meow") {
//         console.log(sound);
//     }
// }

// Async await

// const apiUrl = 'https://fcctop100.herokuapp.com/api/fccusers/top/alltime';

// function getTop100Campers() {
//     fetch(apiUrl)
//         .then((r) => r.json())
//         .then((json) => {
//             console.log(json[0])
//         }).catch((error) =>{
//         console.log('failed');
//     });
// }

// async function getTop100Campers() {
//     const response = await fetch(apiUrl);
//     const json = await response.json();

//     console.log(json[0]);
// }
// getTop100Campers();
// async function printFileData(path, options) {
//     const response = await util.promisify(fs.readFile)(path, options);
//     const data = await console.log(`Data from file : ${response}`);
//
// }

// getTop100Campers();
// async function printFileData(path, options) {
//     try {
//         const response = await util.promisify(fs.readFile)(path, options);
//         const data = await console.log(`Data from file : ${response}`);
//     } catch (e) {
//         console.log(`error`);
//     }

// }



// function resolveAfter3Seconds() {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             resolve('resolved');
//         }, 3000);
//     });
// }
//
// resolveAfter3Seconds().then((data) => {
//     console.log(data);
// });
//
// async function getAsyncData() {
//     const result = await resolveAfter3Seconds();
//     console.log(result);
// }
//
// getAsyncData();

// Sets

// const exampleSet = new Set([1,1,1,1,2,2,2,2]);
// //
// console.log(exampleSet);
// exampleSet.add(5);
// console.log(exampleSet);
// exampleSet.delete(5);
// console.log(exampleSet);
// console.log(exampleSet.has(5));
// // exampleSet.clear();
// console.log(exampleSet);