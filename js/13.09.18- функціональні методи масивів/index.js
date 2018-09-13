
// =========================================================
// template
// let numbers = [10, 2, 4];
// let result = arr.method(function(num, index, arr) {
// num arr[index - 1]
// code
// code
// code
// })

// map
// let money = [500, 800, 100, 400, 1000];
// let result = money.map(function (element) {
//   return element * 0.7;
// });
// let result = money.map(element => {
//   return element * 0.7;
// });
// let result = money.map(el => el *0.7);
// console.log(numbers);
// console.log(result);

// const inventors = [{
//     first: 'Albert',
//     last: 'Einstein',
//     year: 1879,
//     passed: 1955
//   },
//   {
//     first: 'Isaac',
//     last: 'Newton',
//     year: 1643,
//     passed: 1727
//   },
//   {
//     first: 'Galileo',
//     last: 'Galilei',
//     year: 1564,
//     passed: 1642
//   },
//   {
//     first: 'Marie',
//     last: 'Curie',
//     year: 1867,
//     passed: 1934
//   },
//   {
//     first: 'Johannes',
//     last: 'Kepler',
//     year: 1571,
//     passed: 1630
//   },
//   {
//     first: 'Nicolaus',
//     last: 'Copernicus',
//     year: 1473,
//     passed: 1543
//   },
//   {
//     first: 'Max',
//     last: 'Planck',
//     year: 1858,
//     passed: 1947
//   },
//   {
//     first: 'Katherine',
//     last: 'Blodgett',
//     year: 1898,
//     passed: 1979
//   },
//   {
//     first: 'Ada',
//     last: 'Lovelace',
//     year: 1815,
//     passed: 1852
//   },
//   {
//     first: 'Sarah E.',
//     last: 'Goode',
//     year: 1855,
//     passed: 1905
//   },
//   {
//     first: 'Lise',
//     last: 'Meitner',
//     year: 1878,
//     passed: 1968
//   },
//   {
//     first: 'Hanna',
//     last: 'Hammarström',
//     year: 1829,
//     passed: 1909
//   }
// ];



// let lastNames = inventors.map(function(obj, index) {
//   return {
//     name: obj.first,
//     lastName: obj.last
//   }
// })
// let lastNames = inventors.map(obj => ({name: obj.first, lastName: obj.last}));
// console.log(lastNames);


// filter


// const numbers = [250, 1, 10, 3, 25, 5, 60, 7, 12, 9];

// let filterArr = numbers.filter(function (el) {
//   if (el >= 10) {
//     return el
//   }
// })
// let filterArr = numbers.filter(function (el) {
//   return el >= 10;
// })
// let filterArr = numbers.filter(el => el >= 10);
// console.log(filterArr);

// let filterNumbers = numbers.filter(el => el > 10)

// console.log(filterNumbers);

// let filterArr = inventors.filter(function(el) {
//   if(el.year < 1600 && el.year >= 1500) {
//     return el;
//   }
// })

// let filterArr = inventors.filter(el => el.year < 1600 && el.year >= 1500)

// console.log(filterArr);

// let filterArr = inventors
//   .filter(el => Math.ceil(el.year / 100) === 19)
//   .map(el => el.first);
// // let arr = filterArr.map(el => el.first);


// console.log(filterArr);



// find

// const numbers = [0, 1, 10, 3, 25, 5, 60, 7, 12, 9];

// let findNumber = numbers.find(function(el) {
//   if (el > 5) {
//     return el;
//   }
// })

// let findNumber = numbers.find(el => el > 5);

// console.log(findNumber);

// let findUser = inventors.find(function(el) {
//   if (el.year === 1473) {
//     return el
//   }
// })

// let findUser = inventors.find(el => el.year === 1473);
// console.log(findUser);
//
// // reduce
// const numbers = [250, 1, 10, 3, 25, 5, 60, 7, 12, 9];
// // let result = numbers.reduce(function (acc, el) {
// //   return acc + el;
// // },0)

// let result = numbers.reduce((acc, el) => acc + el, 0);

// console.log(result);

// const hoursWorkedPerWeek = [
//     {day: 'M',number: 9},
//     {day: 'T',number: 10},
//     {day: 'W',number: 11},
//     {day: 'T',number: 5},
//     {day: 'F',number: 12}
//     ];
// // let sum = 0;
// // for (let el of hoursWorkedPerWeek) {
// //     sum +=el
// // }
// // console.log(sum);
//
//     let result = hoursWorkedPerWeek.reduce(function (acc, el) {
//     return acc + el.number;
// },0);
// let arrResult = hoursWorkedPerWeek.reduce((acc, el) => acc + el.number, 0);
// console.log(result);

// let superArr = [[1, 5, 10, 11], [12, 15, 16, 17], [25, 65, 47, 89]];
// let flatArr = superArr
//     .reduce((acc, arr) => acc.concat(arr),[])
//     .sort((a, b) => a - b)
//     .filter(el => el > 16);
// console.log(flatArr);
//
// let flatArr = superArr.reduce((acum, element)=> acum.concat(element), [] );
//
// console.log(flatArr);
// let emptyArr = [];
// console.log(emptyArr.concat(superArr[0], superArr[1], superArr[2]));
//
// // every

// const temperature = [25, 15, -10, 28, 5]; //[true, true, true, true, true]

// let result = temperature.every(function(el) {
//   if(el > 0) {
//     return true;
//   }
// })

// let result = temperature.every(el => el > 0);

// const temperature = [-25, -15, 10, -28, 5];

// let result = temperature.some(function(el){
//   if (el > 0) {
//     return true
//   }
// })

// let result = temperature.some(el => el > 0);

// console.log(result);

// let result = money.every(function(el){
//   return el > 0
// })

// let result = money.every(el => el > 0);

// console.log(result);

//
// // some
//
// const money = [-100, -500, 300, -250];

// // let result = money.some(function(el) {
// //   return el > 0;
// // })

// let result = money.some(el => el > 0);

// console.log(result);

//
// // sort -1 before and 1 after

// const numbers = [250, 1, 10, 3, 25, 5, 60, 7, 12, 9];
// const words = ['a', 'q', 'b', 's', 'z'];

// // numbers.sort(function (a, b) {
// //   return b - a
// // });

// // console.log(numbers);

// // words.sort().reverse();
// words.sort(function(a, b) {
//   return a < b
// })
// console.log(words);
