// const HOTEL_NAME = 'Resort Hotel';
// const STARS = 5;
// const STATUS = 'LUX';
// const ROOM_NUMBERS = 100;

// let hotel = ['Resort Hotel',5, 'LUX', 100];

// // create
// const hotel = {};

// const RESORT = {
//     name: "Resort Hotel",
//     stars: 5,
//     capacity: 100,
//     status: 'Lux',
//   };

// const coffee = {
//     name: 'Late',
//     price: 3,
//     size: 'Medium',
//     sort: 'Arabica',
//     isMilk: true,
//     calories: 135,
//     coffeine: true,
//     sirop: ['caramel', 'chocolate', 'cherry'],
// };

// let user = {
//     id: 7851485214521452,
//     private: {
//         login: 'user256',
//         email: 'user@.com',
//         tel: '15-98-78-96-45',
//         'credit-card': 789654565214562,
//         password: '78fefd4521df411',
//     },
//     public: {
//         name: 'Bob',
//         age: 52,
//         gender: 'female',
//         surname: 'Dou',
//         photos: ['https//sdfksdjfskj', 'https//sdfksdjfskj', 'https//sdfksdjfskj', 'https//sdfksdjfskj'],
//         subscribers: 560,
//         likes: 1500,
//     },
// };

// get
// console.log(user.id);
// console.log(user.private.login);
// console.log(user.private);
// console.log(user.id);
// console.log(user['id']);
// console.log(user.private.tel);
// console.log(user['private']['tel']);
// console.log(user.private);
// console.log(user['private'], user['public']);
// console.log(user.public);
// console.log(user['public']);

// function showPrivateValue(obj, prop1) {
//     return obj[prop1];
//     //user['id']
// }
// // //
// showPrivateValue(user, 'id');
// console.log(user['private']);

// const hotel = {
//     name: "Resort Hotel",
//     stars: 5,
//     capacity: 100,
//     status: 'Lux',
//   };

// hotel.manager = 'Chack Noris';
// hotel.stars = 6;
// hotel['status'] = 'super lux';
// console.log(hotel);

// console.log([1, 2, 3]);
// console.log( hotel.name ); // Resort Hotel
// console.log( hotel["name"] ); // Resort Hotel
// hotel.name = "Coastline Resort";
// console.log(hotel);
// hotel.addres = 'Kyiv';
// console.log( hotel.name ); // Coastline Resort
// console.log( hotel["name"] ); // Coastline Resort

// hotel["name"] = "Stardust Hotel";
// console.log( hotel.name ); // Stardust Hotel
// console.log( hotel["name"] ); // Stardust Hotel

// add new ]
// console.log(hotel.name);
// hotel.address = "1, Beach ave.";
// hotel["manager"] = "Chuck Norris";
// hotel.tel = {};
// hotel.tel.MTC = '157-98-78-96';
// hotel.tel.Life = '862485-4154',
// console.log(hotel);
// let users = [
//     {name: '1'},
//     {name: '2'},
//     {name: '3'}
// ];
// let ages = [25, 56, 35];
// let i = 0;
// for (let obj of users) {
//     obj.age = ages[i];
//     i += 1;
// }
//
// console.log(users);

// let name = "Resort Hotel";
// let stars = 5;

// const hotel = {
//     name: name,
//     stars: stars,
// };
//
// console.log(hotel);
// const hotel = {
//     name,
//     stars,  // stars : stars
// };
// console.log(hotel);
//
// let manager = 'Chack';
// hotel.manager = manager;
// console.log(hotel);
// console.log(hotel.manager);

// delete 

// const hotel = {
//     name: "Resort Hotel",
//     stars: 5,
//     capacity: 100,
//   };
//   delete hotel.capacity;
//   hotel.freeRooms = 25;
//   let userChoise = prompt('Enter numbers amount');
//   hotel.freeRooms = hotel.freeRooms - userChoise; 
// // //
//   delete hotel.stars;
//   delete hotel['capacity'];
//   hotel.stars = 4;
// console.log( hotel );
// own property
// const hotel = {
//     name : "Resort Hotel",
//     stars: 5,
//     swimingpool: {
//       volume: '50m',
//       temp: '25C',
//     }
//   };
// let hasStars = hotel.hasOwnProperty('swimingpool');
// let hasPool = 'swimingpool' in hotel;
// let hasCort = 'cort'  in hotel;
// // //
// console.log(hasCort); // false
// console.log(hasStars); // true
// console.log(hasPool); // true
// // hotel.pool = true;
// console.log(hotel);


// methods

// const hotel = {
//   name: "Resort Hotel",
//   stars: 5,
//   capacity: 100,

//   // getName: function () {
//   //   return hotel.name;
//   // },

//   getName() {
//     return hotel.name;
//   },

//   // getStars: () => hotel.stars,

//   changeCapacity(value) {
//     hotel.capacity += value;
//   },
//   createAddres(value) {
//     hotel.address = value
//   }
// };

// console.log(hotel.getName());
// hotel.changeCapacity(200)
// console.log(hotel);
// hotel.createAddres('Bali');
// console.log(hotel);


// hotel.changeCapacity(200);
// hotel.capacity = 500;
// console.log ( hotel.capacity ); // 200
// hotel.createKey('Kyiv');
// console.log(hotel);
// hotel.createKey('Lviv');
// hotel.street = 'sflksdflsd';

// let a = 5;
// let b = a;
// a = 10;
// console.log(a);
// console.log(b);
// let obj1 = {
//     name: "chack",
// };
// let obj2 = obj1;
// let obj3 = obj2;
// let obj4 = obj1;
// obj2.lastname = 'Noris';
// console.log(obj1);
// console.log(obj2);

// let arr = [1,2,3];
// console.log(arr);

// let a = 5;
// console.log(a);
// let b = a;
// console.log(b);
// a = 10;
// console.log(a, b);
//
// let obj1 = {
//     name: "chack",
// };
// // console.log(obj1);
// let obj2 = obj1;
// console.log(obj2);
// obj1.name = 'Norris';
// console.log('1',obj1);
// console.log('2',obj2);
// console.log(obj1 === obj2);

// for in

// const hotel = {
//     name : "Resort Hotel",
//     stars: 5,
//     capacity: 100,
//   };

  // for (let key in hotel) { 
  //   console.log(`${key}`);
  // }

  // for (let key in hotel) { 
  //   console.log(`${hotel[key]}`);
  // }

  // for (let key in hotel) { 
  //   console.log(`${key}: ${hotel[key]}`);
  // }

//   function objLength(obj) {
//     let count = 0;
//     for (let key in obj) {
//       if(obj.hasOwnProperty(key)) {
//         console.log(`${key}: ${hotel[key]}`);
//         count +=1;
//       }
//     }
//     return count;
//   }
// console.log(objLength(hotel));

  // for (let key in hotel) { 
  //   if (hotel.hasOwnProperty(key)) {
  //     console.log(`${key}: ${hotel[key]}`);
  //   }
  // }


//
//   // Перебор ключей key объекта hotel
//   for (let key in hotel) {
//     // console.log('Key: ', key);
//     //   console.log(hotel[key])
//       console.log(`Key = ${key}, value = ${hotel[key]}`)
//   }

// for (const key in hotel) {
//     console.log(hotel[key]);
//   }

// const hotel = {
//     name : "Resort Hotel",
//     stars: 5,
//     capacity: 100,
// };
// // console.log(hotel);
// for (const key in hotel) {
//     let hasKey = hotel.hasOwnProperty(key);
//     if (hasKey) {
//       console.log('Value: ', hotel[key]);
//     }
//   }
// // console.log(hotel);

const hotel = {
    name : "Resort Hotel",
    stars: 5,
    capacity: 100,
  };
//
  // const keys = Object.keys(hotel);
  // const values = Object.values(hotel);
  // const entries = Object.entries(hotel);
  // console.log(keys);
  // console.log(values);
  // console.log(entries);

// // assign
//
// const first = {name: 'Tony'};
// const last = {lastName: 'Stark'};
// //
// Object.assign(first, last);
// // const copy = Object.assign({}, first, last);
// console.log(person);
// // //
// console.log(first);
// console.log(last);
// console.log(copy);
// // console.log(person === first);

// const a = Object.assign({foo: 0}, {bar: 1}, {baz: 2});
// console.log(a);
//
// const a = Object.assign({foo: 0}, {foo: 1}, {foo: 2});
// console.log(a);

// const obj = {person: 'Thor Odinson'};
// const clone = Object.assign({}, obj);
// clone.wearpon = 'hammer';
// console.log(clone);
// console.log(obj);

// const defaultSettings = {
//     name: "Mango",
//     age: 2,
//     status: "happy",
//     isActive: false,
//     isAdmin: false,
//   };
//
// const updatedSettings = {
//   age: 3,
//   status: "cheerful",
//   isActive: true,
// };
//
// Object.assign(defaultSettings, updatedSettings);
//
//   console.log(defaultSettings);
// ...
// const a = {x: 1, y: 2};
// const b = {x: 0, z: 3};
// //
// const c = Object.assign({}, a, b);
// console.log(c); // {x: 0, y: 2, z: 3}
// const c = {
//     ...b,
//     ...a,
//     // a, b
//     // x: 0,
//     // y: 2,
//     // z: 3,
//     //b, a
//     // x: 1,
//     // z: 3,
//     //y: 2
// };
// console.log(c);
//
//
// let state = {
//   a: 5,
//   b: 6,
//   c: 7,
// };
//
// let d = {};
// let newState = {
//     ...state,
//     c:8,
// };

// console.log(newState);

// dest

// const hotel = {
//     name : "Resort Hotel",
//     stars: 5,
//     capacity: 100,
//   };
// let name = hotel.name;
// let stars = hotel.stars;
// let capacity = hotel.capacity;

// const { name, stars, status ,capacity } = hotel;
// console.log(name);
//   // Объявим переменные и присвоим им значения из объекта


// const hotel = {
//     name: "Resort Hotel",
//     stars: 5,
//     capacity: 100,
// };
// //
// const {name = "hotel", stars = 3, status = "empty"} = hotel;
//
// console.log(name);
// console.log(stars);
// console.log(status);

// dest in func

// let dog = {
//     name: 'Mango',
//     age: 5,
//     isHappy: true,
// };

// function showObjVal(obj) {
//     console.log(obj.name);
//     console.log(obj.age);
//     console.log(obj.isHappy);
// }

// function showObjVal({name, age, isHappy}) {
//     // console.log(name);
//     // console.log(age);
//     // console.log(isHappy);
//     return `dog name is ${name} age is ${age} happy ${isHappy}`;
// }
//
// console.log(showObjVal(dog));


// // let {name, stars, status} = hotel;
//
// // dest arr
// let strNum = ['one', 'two', 'three'];
// let [a, b, c, d] = strNum;
// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);

// let numb = [5, 10, 20];

// function showArrVal(arr) {
//     console.log(arr[0]);
//     console.log(arr[1]);
//     console.log(arr[2]);
// }

// function showArrVal([a, b, c]) {
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }
// //
// //
// showArrVal(numb);


// spread and rest
//...
// // add the elements of an existing array into a new array
// let certsToAdd = ['Algorithms', 'Front End'];
// let certifications = ['Web Design', ...certsToAdd,'Data Visualization', 'APIs', 'Information Security'];
// console.log(certifications);

// // pass elements of an array as arguments to a function
// function addThreeNumbers(x, y, z) {
//     console.log(x + y + z)
// }
//
// variant #1
// let salary = [100, 200, 500, 800];
// addThreeNumbers(salary[0],salary[1],salary[2]);
// variant #2
// let salary = [100, 200, 500, 800];
// let [a, b, c] = salary;
// addThreeNumbers(a, b, c)
// variant #3
// let salary = [100, 200, 500, 800];
// console.log(addThreeNumbers(...salary));
// console.log(addThreeNumbers(100, 200, 500, 800));

// // copy arrays
// let arr = [1, 2, 3];
// let arr2 = arr;

// let arr = [1, 2, 3];
// let arr2 = [...arr]; // like arr.slice()
// arr2.push(4);
// console.log(arr);
// console.log(arr2);
//
//
// // concatenate arrays
// let arr1 = [0, 1, 2];
// let arr2 = [3, 4, 5];
// // let arr3 = arr1.concat(arr2);
// arr1 = ["BootCamp",...arr2,...arr1];
// // console.log(arr3);
// console.log(arr1);
//
//
// REST: condense multiple elements into an array
// function multiply(multiplier,...theArgs) {
//     console.log('multiplier', multiplier);
//     console.log('theArgs', theArgs);
// }
//
//  multiply(2, 1, 2, 3, 8, 9);


/*
  Напишите код, который, для объекта user, последовательно:
 - добавляет поле mood со значением 'happy'
 - заменяет значение hobby на 'javascript'
 - удаляет свойство premium
 - выводит содержимое объекта user
    циклом в формате ключ: значение
*/

// const user = {
//     name: "Mango",
//     age: 20,
//     hobby: "html",
//     premium: true
// };

/*
  Создайте функцию isObjectEmpty(obj), которая получает
  единственный аргумент obj - объект, и проверяет
  пуст ли он (есть ли в нем свойства).

  Возвращает true если объект пустой, false если не пустой.
*/

// Вызовы функции для проверки
// console.log(
//     isObjectEmpty({})
// ); // true
//
// console.log(
//     isObjectEmpty({a: 1})
// ); // false


// let isObjectEmpty = obj => Object.keys(obj).length === 0;

// function isEmpty(obj) {
//     for (let key in obj) {
//         return false;
//     }
//     return true;
// }

/*
  Напишите функцию countOwnProps(obj),
  считающую кол-во сообственных свойств в объекте.
  Функция возвращает количество свойств.
*/

// // Вызовы функции для проверки
// console.log(
//     countOwnProps({})
// ); // 0
//
// console.log(
//     countOwnProps({a: 1, b: 3, c: 'hello'})
// ); // 3

/*
  Напишите функцию countTotalSalary(salaries),
  считающую общую сумму запрплаты работников.

  Каждое поле объекта передаваемого в функцию,
  имеет вид "имя":"зарплата"

  Функция возвращает общую сумму зарплаты.
*/

// Вызовы функции для проверки
// 330

// function countTotalSalary(salary) {
//     let sum = Object.values(salary);
//     if (sum.length !== 0) {
//         let result = sum.reduce(function (current, next) {
//             return current + next
//         });
//         return result;
//     }
//     else {
//         return 0;
//     }
// }

// let countTotalSalary = salary => Object.values(salary).length !== 0 ? Object.values(salary).reduce((current, next) => current + next) :
//     0;
// console.log(
//     countTotalSalary({})
// ); // 0
//
// console.log(
//     countTotalSalary({
//         mango: 100,
//         poly: 150,
//         alfred: 80
//     })
// );

// const users = [
//     {name: 'Poly', age: 7, mood: 'happy'},
//     {name: 'Mango', age: 4, mood: 'blissful'},
//     {name: 'Ajax', age: 3, mood: 'tired'}
// ];

// function getAllPropValues(prop) {
//     let result = [];
//     if (prop in users[0]) {
//         for (let i = 0; i < users.length; i++) {
//             result.push(users[i][prop]);
//         }
//         return result;
//     } return result;
// };

// function getAllPropValues(prop) {
//     let result = [];
//     if (prop in users[0]) {
//         return users.map(function (obj) {
//             return obj[prop];
//         })
//     } return result;
// };

// function getAllPropValues(prop) {
//     let result = [];
//     if (prop in users[0]) {
//         return users.map(obj => obj[prop])
//     } return result;
// };

// function getAllPropValues(prop) {
//     return prop in users[0] ? users.map(obj => obj[prop]) : []
// };

// let getAllPropValues = prop => prop in users[0] ? users.map(obj => obj[prop]) : [];

// Вызовы функции для проверки
// console.log(
//     getAllPropValues('name')
// ); // ['Poly', 'Mango', 'Ajax']

// console.log(
//     getAllPropValues('mood')
// ); // ['happy', 'blissful', 'tired']

// console.log(
//     getAllPropValues('active')
// ); // []

/*
    1. Используя метод map, пройдите по массиву guests,
    и составьте новый массив, заменив значение
    поля isActive на противоположное.

    2. Напишите функцию setGuestState(guests, period), где
    guests - массив гостей, period - кол-во дней после
    которого считается что гость не активен.

    Если значение поля inactiveDays болше чем period,
    поставить для isActive значение false (если там еще не false)

    Если же значение inactiveDays меньше чем period,
    поставить для isActive значение true (если там еще не true)
*/

// const guests = [
//     {name: 'Mango', inactiveDays: 15, isActive: true},
//     {name: 'Poly', inactiveDays: 8, isActive: false},
//     {name: 'Ajax', inactiveDays: 32, isActive: false},
//     {name: 'Chelsey', inactiveDays: 85, isActive: true}
// ];
//
// let newArr = guests.map(function (item) {
//     return item.isActive === true ? item.isActive = false : item.isActive = true;
// })
//
// let setGuestState = (guests, period) => {
//     guests.map((element) =>
//         element.inactiveDays > period && element.inactiveDays !== false ?
//             element.isActive = false
//             :
//             element.isActive = true
//     )
//     return guests;
// }

// function setGuestState(p, 10)
// {
//
// }

// // Вызовы функции для проверки
// console.log(setGuestState(guests, 10)); // Объекты Mango, Ajax, Chelsey получит isActive false, а Poly наоборот true
// console.log(guests);
// console.log(setGuestState(guests, 20)); // Объекты Ajax, Chelsey получит isActive false, а Mango и Poly наоборот true
//
// console.log(setGuestState(guests, 50)); // Объект Chelsey получит isActive false, а Mango, Poly и Ajax наоборот true
//

/*
  Напиште скрипт который определит и выведет в консоль
  имя сотрудника который выполнил больше всех задач.

  Сотрудники и кол-во выполненых задач содержатся
  как свойства объекта в формате "имя":"кол-во задач"
*/

// const tasksCompleted = {
//     ann: 29,
//     david: 35,
//     helen: 1,
//     lorence: 99
// };
// let max = 0;
// let name = '';
// for (let key in tasksCompleted) {
//     if(tasksCompleted[key] > max) {
//         name = key;
//         max = tasksCompleted[key];
//     }
// }
// console.log(name)
//
// let values = Object.values(tasksCompleted);
// let users = Object.keys(tasksCompleted);
// // console.log(values);
// console.log(users);
// // console.log(Math.max(...values));
// // Math.max([29, 35, 1, 99]) // Math.max(values)
// // let maxTask = Math.max(29, 35, 1, 99); // Math.max(...values)
// let maxTask = Math.max(...values);
// let winnerIndex = values.indexOf(maxTask);
// let winner = users[winnerIndex];
// console.log(winner);