// Synchronous code - все відбувається по черзі
// function multiply(a, b) {
//     return a * b;
// }

// function square(n) {
//     return multiply(n, n)
// }

// function printSquare(n) {
//     let result;
//     setTimeout(function () {
//         result = square(n);
//     }, 1000)
//     console.log(result);
// }
// printSquare(4);
// console.log("Hello.");

// function printSquare(n) {
//     let result = square(n);
//     console.log(result);
// }





// Asynchronous code


// setTimeout(function() {
//     console.log("Goodbye!");
// }, 2000);

// console.log("Hello again!");


// setTimeout и setInterval.

// setTimeout(callback, delay);

// setInterval(callback, delay);


// function sayHello() {
//     console.log("Hello!");
// }

// setTimeout(sayHello, 2000);

// setInterval(sayHello, 1000);

// clearInterval(id);
// clearTimeout(id);


// let first = setTimeout(sayHello, 2000);
// console.log('first',first);
// let second = setInterval(sayHello, 1000);
// console.log('second',second);
// // clearTimeout(first);
// // clearInterval(second);

// let btnStop = document.querySelector('.js-timer-stop');

// btnStop.addEventListener('click',function(){
//     clearInterval(second)
// })

// Затримка в 4 мс зменьшення частоти в неактивній вкладці


// Date
//
// let date = new Date();
// console.log(date);
// console.log(date.getDate());
// console.log(date.getMonth());
// console.log(date.getDay());
// console.log(date.getFullYear());
// console.log(date.getHours());
// console.log(date.getMinutes());
// console.log(date.getSeconds());
// console.log(date.getMilliseconds());
// console.log(date.getTime());
// console.log(Date.now());
// date.getTime();
// Date.now();
// let date = new Date("4, 2017, April");
// // console.log(date.getTime());
// console.log(date.getMonth(1491253200000));




// console.log(date.getTime()/1000/60/60/24/365);

// console.log(`${date.getFullYear()}/${date.getMonth()+1}`);


// let date = new Date("4, 2017, April");
// console.log(date);
// let days =['Неділя','Понеділок','Вівторок','Середа','Четвер','Пятниця','Субота'];
// // console.log(date.getDay());
// let day = prompt('day');
// let month = prompt('month');
// let year = prompt('year');
// let result = new Date(`${day}, ${year}, ${month}`);
// console.log(days[result.getDay()]);
// new Date(year, month, date, hours, minutes, seconds, ms);

// let dat = new Date(2000, 5, 8, 12, 0, 0, 0);
//
// console.log(dat);
//
// let date = Date.now();
// console.log(date);

// //
// console.log(date/1000/3600/24/365);

// let date = new Date();
// console.log("Date: " + date);
// console.log("getDate(): " + date.getDate());
// console.log("getDay(): " + date.getDay());
// console.log("getMonth(): " + date.getMonth());
// console.log("getFullYear(): " + date.getFullYear());
// console.log("getHours(): " + date.getHours());
// console.log("getMinutes(): " + date.getMinutes());
// console.log("getSeconds(): " + date.getSeconds());
// console.log("getMilliseconds(): " + date.getMilliseconds());
// console.log("getTime(): " + date.getTime());
// let birth = prompt('enter year of birth');
// let today = new Date();
// console.log(today.getFullYear() - birth);


// let date = new Date();
// let result = 'Date: ';
// result += date.getFullYear() + '/'; // год
// result += date.getMonth() + '/'; // месяц, начиная с 0
// result += date.getDate() + '. Day of the week: '; // день недели, начиная с 1
// result += date.getDay() + '.'; // день , начиная с 0
//
// result += ' Time: ' + date.getHours() + ':'; // часы
// result +=  date.getMinutes() + ':'; // минуты
// result +=  date.getSeconds() + ':'; // секунды
// result +=  date.getMilliseconds() + ''; // милисекунды
//
// console.log(result);

// let secondDate = new Date ();
// secondDate.setFullYear(2017, 6, 14);
// secondDate.setHours(5, 40, 0, 0);
// console.log(
//     `Set: дате 2017, 6, 14, 5, 40 соответствует ${secondDate.getTime()}`
// );
// console.log(
//     `Set: дате 2017, 6, 14, 5, 40 соответствует ${secondDate.getFullYear()}`
// );

// let date = new Date();
// //
// // формат вывода
// const options = {
//     weekday: 'long',
//     year    : 'numeric',
//     month   : 'short',
//     day     : 'numeric',
//     hour    :'2-digit',
//     minute  :'2-digit'
// };
// //
// // Україна
// let localeUa = date.toLocaleString('UA-ua', options);
// console.log(localeUa); // понеділок, 19 бер. 2018 р., 17:42
//
// let localeUs = date.toLocaleString("en-US", options);
// console.log(localeUs); // Monday, Mar 19, 2018, 5:43 PM


let deadline = new Date(2019, 0, 1, 0, 0, 0);

function timer() {
    let today = new Date();
    let delta = deadline - today;
    let seconds = Math.floor(delta / 1000 % 60);
    let minutes = Math.floor(delta / 1000 / 60 % 60);
    let hours = Math.floor(delta / 1000 / 60 / 60 % 24);
    let days = Math.floor (delta / 1000 / 60 / 60 / 24);
    console.log(days,hours, minutes, seconds);
}
timer();

// const clockface = document.querySelector(".js-clockface");
// const startBtn = document.querySelector(".js-timer-start");
// const stopBtn = document.querySelector(".js-timer-stop");

// startBtn.addEventListener('click', startTimer);

// const timer = {
//  startTime: null,
//  deltaTime: null,
//  id: null
// };


// function startTimer () {

//  if (timer.startTime === null) {
//    timer.startTime = Date.now()
//  } else {
//    // timer.deltaTime = currentTime - timer.startTime;
//  }
//  setInterval(refresh, 100);
// }

// function refresh () {
//  let currentTime = Date.now();
//  timer.deltaTime = currentTime - timer.startTime;
//  updateClockface (clockface, timer.deltaTime )

// }


// function getFormattedTime(time) {
// let minutesResult = Math.floor(time / 1000 / 60 % 60);
// let minutes = minutesResult < 10 ? `0${minutesResult}` : minutesResult;
// let secondsResult = Math.floor(time / 1000 % 60);
// let seconds = secondsResult < 10 ? `0${secondsResult}` : secondsResult;
// let mlSeconds = Math.floor(time / 100 % 10);
//  return `${minutes}:${seconds}.${mlSeconds}`;
// }

// function updateClockface(elem, time) {
//     // Используйте функцию getFormattedTime из задания #1
//     elem.textContent = getFormattedTime(time);
//    }