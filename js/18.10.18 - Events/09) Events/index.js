// click
// submit
// focus
// keydown
// keyup
// keypress
// input
// onCange
// scroll
// DOMContentLoaded
// onbeforeunload


// element.addEventListener('event',function)




// add and remove listeners

// const one = document.querySelector('#one');
// function hello () {
//     console.log(event);
// }
// one.addEventListener('click', hello);
// window.addEventListener('keypress', hello);
// // const many = document.querySelector('#many');

// function first() {
//     alert(`I am action from first button`);
// }
// function second() {
//     alert(`I am action from second button`);

// }
// function hello() {
//     alert(`I am action from second button and hello function`);

// }

// function main () {
//     first();
//     hello();
//     second();
// }
// one.addEventListener('click', main);
// one.addEventListener('click', second);
// one.addEventListener('click', hello);


// let send = document.querySelector('button');
// send.addEventListener('click', showList);
// window.addEventListener('keypress', showListEnter);

// function colectData() {
//     let name = document.querySelector('#name');
//     let lastName = document.querySelector('#lastName');
//     let radioResult = [...document.querySelectorAll('[type="radio"]')].map(el => el.checked).some(el => el === true);
//     let male = document.querySelector('#Male');
//     let female = document.querySelector('#Female');
//     let result = {
//         name: name.value,
//         lastName: lastName.value,
//     }
//     if (radioResult) {
//         result.gender = male.checked ? male.id : female.id;
//         name.value = '';
//         lastName.value = '';
//         male.checked ? male.checked = false : female.checked = false;
//         return result;
//     } else {
//         alert('chose gender');
//         return;
//     }
// }

// function createLayout(obj) {
//     let list = document.createElement('ul');
//     for (let key in obj) {
//         let li = document.createElement('li');
//         li.textContent = obj[key];
//         list.append(li);
//     }
//     document.querySelector('form').after(list);
// }

// function showList() {
//     event.preventDefault();
//     let userData = colectData();
//     createLayout(userData);
// }

// function showListEnter() {
//     if (event.key === 'Enter') {
//         showList();
//     }
// }


//
// //
// // one.addEventListener('click', first);
// //
//


//
// many.addEventListener('click', first);
// many.addEventListener('click', second);
// many.addEventListener('click', hello);

// many.addEventListener('click', function () {
//     first();
//     second();
//     hello();
// });
//
// one.addEventListener('click', first);
// many.addEventListener('click', second);
// many.addEventListener('click', hello);
//
// function withRemoveListener() {
//     alert(`I am action from first button and i remove after end`);
//     one.removeEventListener('click', withRemoveListener);
//
// }
// //
// one.addEventListener('click', withRemoveListener);
// function clickCount() {
//     let clickNumber = 0;
//     let limit = 3;
//     let fake = clickNumber;
//     function increment() {
//         fake += 1;
//         if (fake > limit) {
//             alert('Не балуйся, йди на роботу');
//         }
//         console.log(clickNumber);
//     }
//
//     return increment;
// }
//
// let counter = clickCount();
// console.log(counter);
//
// let firstButton = document.querySelector('#one');
//
// firstButton.addEventListener('click', counter);

// this
// 'use strict';
// function classAdd() {
//     this.classList.toggle('bigBtn');
// }
//
// // showThis();
//
// let one = document.querySelector('#one');
//
// one.addEventListener('click', classAdd);

//
// one.addEventListener('click', showThis.bind(window));

// event

// function showEvent(e) {
//     console.log(e);
//     // console.log(event.target);
//     // console.log(event.currentTarget);
//     // console.log(this);
// }
//
// let one = document.querySelector('#one');
// one.addEventListener('click', showEvent);
//
// window.addEventListener('keypress', showEvent);

// function add(a) {
//     console.log(a + 5);
// }
// one.addEventListener('click', () => add(25));
// bubbling and event.stopPropagation(), event.stopImmediatePropagation().

// const boss = document.querySelector('.boss');
// const zam = document.querySelector('.zam');
// const manger = document.querySelector('.manager');
// const worker = document.querySelector('.worker');

// //
// function fromWorker(event) {
//     alert(`Hello i am active when bubbling up to worker`);
//     // console.log('worker target', event.target);
//     // console.log('worker currentTarget', event.currentTarget);
//     event.stopPropagation();

// }

// function fromManger() {
//     alert(`Hello i am active when bubbling up to manger`);
// // event.stopPropagation();

// }

// function fromZam() {
//     alert(`Hello i am active when bubbling up to zam`);
//     console.log('boss target', event.target);
//     console.log('boss currentTarget', event.currentTarget);
// }

// function fromBoss() {
//     alert(`Hello i am active when bubbling up to boss`);
//     // console.log('boss target', event.target);
//     // console.log('boss currentTarget', event.currentTarget);
//     // console.log(event);
// }
// function showLi() {
//     console.log(event.target);
//     event.stopPropagation();
//     console.log(event);
//     event.target.style.color = 'red';
//     event.target.style.fontSize = '32px';
// }
// let ul = document.querySelector('.list');
// ul.addEventListener('click', showLi);


// boss.addEventListener('click', fromBoss);

// zam.addEventListener('click', fromZam);
// manger.addEventListener('click', fromManger);
// worker.addEventListener('click', fromWorker);

// function resizeFont(e) {
//     console.log('this',this);
//     console.log('target',e.target);
//     e.target.classList.toggle('bigText');
// }
// bad practice
// let listItem = document.querySelectorAll('.item');
// listItem.forEach(el => el.addEventListener('click', resizeFont));
// console.log(listItem);

// good

// let list = document.querySelector('.list');
// list.addEventListener('click', resizeFont);

// const send = document.querySelector('.send');
// send.addEventListener('click', function (e) {
//     e.preventDefault();
//     let msg = document.querySelector('.msg').value;
//     let title = document.querySelector('.title').value;
//     let info = {
//         title,
//         msg,
//     };
//     let str = `<div class="post">
// <h2>${info.title}</h2>
// <p>${info.msg}</p>
// </div>`;
//     document.querySelector('#root').innerHTML += str;
//     document.querySelector('.msg').value = '';
//     document.querySelector('.title').value = '';
// });

// let list = document.querySelector('.list');
// function showTarget () {
//     let liArr = [...document.querySelectorAll('.item')];
//     console.log(liArr.indexOf(event.target) + 1);
// }

// list.addEventListener('click', showTarget);
// event.preventDefault()

// event delegation

// function delegation(event) {
//     // alert(`Hello i am delegation function`);
//     console.log('target',event.target);
//     console.log('CURRENT TARGET',event.currentTarget);
// }
// //
// //
// boss.addEventListener('click', delegation);


// DOMContentLoaded
// document.addEventListener("DOMContentLoaded", callback);
// onload

// window.onload = function () {
//     alert(`All resourses loaded`)
// };

// onunload

// window.onunload = function () {
//     return `onunload alert`;
// };

// onbeforeunload

// window.onbeforeunload = function () {
//     return `Are you want exit ?`;
// };


// mousedown
// mouseup
// click
// mouseover вспливають
// mouseout вспливають
// mousemove
// contextmenu
// dblclick
// mouseenter  не вспливають
// mouseleave  не вспливають

// keyup
// keydown
// keypress

// change
// input
// focus
// scroll
// pageXOffset кількість прокрутки в рх
// pageYOffset кількість прокрутки в рх

// getBoundingClientRect()
// Ширина и высота элемента включая рамки (border)
// offsetWidth
// offsetHeight
// Размеры видимой внутренней части элемента
// clientWidth
// clientHeight


// let list = document.querySelector('ul');
//
// function kurkustrumbe(event) {
//     let a = event.target;
//     console.log(Array.from(list.children).indexOf(a));
// }
//
// list.addEventListener('click', kurkustrumbe);


// const section = document.querySelector('#root');
// const h1 = document.querySelector('#h1');
// const p = document.querySelector('#p');
// const ul = document.querySelector('#ul');
// const img = document.querySelector('#img');
//
// function createTitle() {
//     const title = document.createElement('h1');
//     title.textContent = 'Интерфейсы, основанные на Event';
//     section.append(title);
// }
//
// function createP() {
//     const text = document.createElement('p');
//     text.textContent = 'Ниже приведён список интерфейсов, основанных на главном интерфейсе Event, а также указаны ссылки на них в документации MDN API. Заметьте, что имена всех интерфейсов оканчиваются на "Event".';
//     section.append(text);
// }
//
// function createUL() {
//     const list = document.createElement('ul');
//     for (let i = 0; i < 3; i++) {
//         let item = document.createElement('li');
//         item.textContent = `Item ${i}`;
//         list.append(item);
//     }
//     section.append(list);
// }
//
// function createImg() {
//     const pic = document.createElement('img');
//     pic.setAttribute('src', 'http://www.sabreakingnews.co.za/wp-content/uploads/2017/06/Bee-bearding.jpg');
//     section.append(pic);
// }
//
// function createHtml(tag,text,container,atr,atrValue ) {
//     const el = document.createElement(tag);
//     el.textContent = text;
//     el.setAttribute(atr, atrValue);
//     container.append(el);
// }
//
// h1.addEventListener('click', () => createHtml('h1','Интерфейсы, основанные на Event', section,null, null));
// p.addEventListener('click', () => createHtml('p','Ниже приведён список интерфейсов, основанных на главном интерфейсе Event, а также указаны ссылки на них в документации MDN API. Заметьте, что имена всех интерфейсов оканчиваются на "Event".', section, null, null));
// ul.addEventListener('click', createUL);
// img.addEventListener('click', createImg);

// const list = document.querySelector('ul');
// const items = Array.from(document.querySelectorAll('li'));
//
// function select(e) {
//     // console.log(items.indexOf(e.target) + 1);
//     console.log(items);
// }

// list.addEventListener('click', select);


// let form = document.querySelector('.form');
// let totalPrice = document.querySelector('.total');
// let amount = document.querySelector('.amount');
//
// function total() {
//     let price = document.querySelector('#price');
//     let quantity = document.querySelector('#quantity');
//     let result = price.value * quantity.value;
//     totalPrice.textContent = `${result.toFixed(2)} грн`;
//     amount.textContent = quantity.value;
// }
// form.addEventListener('input',total);
// window.addEventListener('DOMContentLoaded', function () {
//     total()
// });

// const name = document.querySelector('#name');
// const lastName = document.querySelector('#lastName');

// function readValue (event) {
//     event.preventDefault()
//     let nameValue = name.value;
//     let lastNameValue = lastName.value;
//     console.log({
//         nameValue,
//         lastNameValue,
//     });
//     document.querySelector('#name').value = '';
// }

// let btn = document.querySelector('form');

// btn.addEventListener('submit',readValue);


// function hello () {
//     console.log('hello');
// }

// window.addEventListener('DOMContentLoaded', hello);