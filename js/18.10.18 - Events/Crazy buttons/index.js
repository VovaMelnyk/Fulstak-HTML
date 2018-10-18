// // // select all btn
// let crazyButtons = document.querySelectorAll('.btn');

// // create function
// function moveButton(event) {
//     // find button first way (event.target)
//     // const crazyButton = event.target;
//     // find button second way (this)

//     // random position left // window.innerWidth - window width, crazyButton.clientWidth - button width
//     const leftPos = Math.floor(Math.random()*(window.innerWidth-this.clientWidth));
//     // random position top // window.innerHeight - window height, crazyButton.clientHeight - button height
//     const topPos = Math.floor(Math.random()*(window.innerHeight-this.clientHeight));
//     // add new coordinats
//     this.style.top = `${topPos}px`;
//     this.style.left = `${leftPos}px`;
//     //check new coordinats
//     console.log(leftPos, topPos);

// }
// // add event listeneer
// crazyButtons.forEach(button => button.addEventListener('mouseenter', moveButton));

// let btns = document.querySelectorAll('.btn');
// // let container = document.querySelector('.container');
// console.log(btns);

// function moveBtn() {
//     let btnH = this.clientHeight;
//     let btnW = this.clientWidth;
//     let randomLeft = Math.floor(Math.random() * (window.innerWidth - btnW));
//     let randomTop = Math.floor(Math.random() * (window.innerHeight - btnH));
//     this.style.top = `${randomTop}px`;
//     this.style.left = `${randomLeft}px`;
// }

// btns.forEach(el => el.addEventListener('mouseenter', moveBtn));

// let listItems = document.querySelectorAll('.list__item');
// let list = document.querySelector('.list');
// let listArr = Array.from(listItems);
// // console.log(listArr);

// function liClick(e) {
//     console.log(listArr.indexOf(e.target)+ 1);
//     listArr.forEach(el => el.classList.contains('change') ? el.classList.remove('change') : null);
//     e.target.classList.add('change');
// }

// list.addEventListener('click', liClick);

// let btn = document.querySelector('#btn');
// function show() {
//     list.classList.toggle('hide');
// }
// btn.addEventListener('click', show);


let windowWidth = window.innerWidth;
let windowHeight = window.innerHeight;
let btn = document.querySelector('.win');
let btnWidth = btn.clientWidth;
let btnHeight = btn.clientHeight;
console.log(btnWidth, btnHeight);
console.log(windowWidth, windowHeight);


let btns = document.querySelectorAll('.btn');

function moveBtn() {
    this.style.top = Math.floor(Math.random() * (windowHeight - btnHeight)) + 'px';
    this.style.left = Math.floor(Math.random() * (windowWidth - btnWidth)) + 'px';
}

btns.forEach(el => el.addEventListener('mouseenter', moveBtn));


