// DOM - дерево обєктів доступне через зміну в JS, елементи які малює браузер по розмітці
// кожен тег це окремий елемент DOM
// CSSOM
// Показати структкру через додаток в хромі


// навігація по DOM

// const html = document.documentElement;
// console.log(html);
// const body = document.body;
// console.log(body);
// console.log(body.childNodes);
// console.log(body.children);
// console.log(body.firstChild);
// console.log(body.firstElementChild);
// console.log(body.lastChild);
// console.log(body.lastElementChild);
// const div = body.children[0];
// console.log(div);
// console.log(div.children);
// console.log(div.lastElementChild);
// console.log(div.lastChild);
// const text = document.querySelector('.text');
// text.style.fontSize = '50px';
// console.log(text.style);
// console.log(p.previousElementSibling);
// console.log(p.previousSibling);
// console.log(p.nextElementSibling);
// console.log(p.nextSibling);
// console.log(p.parentNode);
// const userName = document.querySelector('.name');
// const btn = document.querySelector('#send');
// btn.addEventListener('click', function (evt) {
//     evt.preventDefault();
//     console.log(userName.value);
//     userName.value = '';
// });
// console.log();



// let ul = document.querySelector('.list');
// console.log(ul);
// console.log(ul.children);
// console.log(ul.parentElement);
// console.log(ul.nextElementSibling);
// console.log(ul.previousElementSibling);

// querySelector and before
// let title = document.querySelector('#title');
// let li = document.querySelectorAll('.item');
// console.log(li);
// const title = document.querySelector(`.text::after`);
// console.log(title);
// console.log(document.querySelector('.text'));
// console.log(document.querySelector('.item'));
// const textList = document.querySelectorAll('.text');
// console.log(Array.from(textList));
//
// console.log(document.getElementsByClassName('text'));
// console.log(document.getElementsByTagName('li'));
// console.log(document.getElementById('title'));

//  matches

// const p = document.querySelector('p');
// console.log(p);
// console.log(p.matches('.text'));
// console.log(p.matches('.title'));

// innerHTML i textContent

// const div = document.querySelector('div');
// console.log(div.innerHTML);
// console.log(div.textContent);
// div.innerHTML += `<h1>Inner HTML</h1>`;
// div.textContent += `<h1>Inner HTML</h1>`;

// let li = document.querySelector('.item');
// console.log(li.dataset.info);
// console.log(li.id);

// classList

// let text = document.querySelector('.par');
// console.log(text);
// // console.log(text.classList.length);
// // console.log(text.classList.contains('title'));
// // text.classList.add('big');
// // text.classList.remove('par');
// // text.classList.toggle('par');
// // text.classList.toggle('big');

// attr
// const lnk = document.querySelector('.link');
// console.log(lnk);
// console.log(lnk.hasAttribute('href'));
// console.log(lnk.getAttribute('href'));
// console.log(lnk.href);
// lnk.setAttribute('title', 'super link');
// lnk.setAttribute('id', 'idFromJs');
// a.setAttribute('id', 'link-one');
// console.log(link);
// console.log(link.attributes);
// lnk.removeAttribute('title');
// console.log(link.attributes);
// console.log(link.href);
// console.log(link.title);
// console.log(link.title = 'test');

// data dataset

// 
// dataset.animconst dataCustom = document.querySelector('[data-animal]');
// console.log(dataCustom);


// create
let mainTitle = document.createElement('h1');
mainTitle.classList.add('main-title');
// console.log(mainTitle);
mainTitle.textContent = 'I am Title created from JS';
console.log(mainTitle);

let container = document.querySelector('div');
// container.append(mainTitle);
// container.prepend(mainTitle);
// container.before(mainTitle);
// container.after(mainTitle);
// let list = document.querySelector('.list');
// list.after(mainTitle);
// list.replaceWith(mainTitle);
// container.remove();

// let mainTitle = `<h1 class="main-title">I am Title created from JS</h1>`;
// let container = document.querySelector('div');
// let text = `<p>Par TEXT</p>`;
// container.innerHTML = mainTitle;
// container.innerHTML += text;


// add on page

// select parent
// const title = document.createElement('h1');
// title.textContent = 'Title created from JS';
// title.classList.add('red');
// const container = document.querySelector('div');
// // container.appendChild(title);
// const article = document.querySelector('article');
// const firstTitle = document.querySelector('#title');
// container.insertBefore(title, firstTitle);

// container.append(title);
// container.prepend(title);
// const article = document.querySelector('article');
// // article.after(title);
// // const list = document.querySelector('.list');
// article.before(title);
// article.replaceWith(title);
//
// let img = document.createElement('img');
// img.classList.add('picture');
// img.setAttribute('src', 'https://massolutions.biz/wp-content/uploads/2014/12/e5a06942fa42823c88be5f3a834e063d-fantastic-art-bat-family.jpg');
// img.setAttribute('alt', 'image');
// let article = document.querySelector('.article');
// article.before(img);
// console.log(img.style);
// img.style.width = '200px';
// img.style.height = '150px';
// // remove
// document.querySelector('.list').remove();
// h1.remove();
// let root = document.querySelector('.container');
// DocumentFragment
// // const frag = document.createDocumentFragment();
// // for (let i = 0; i < 100; i++) {
// //     let box = document.createElement('div');
// //     box.classList.add('box');
// //     frag.append(box);
// // }
// // root.append(frag);
// let str = '';
// for (let i = 0; i< 100; i++) {
//     str += '<div class="box"></div>'
// }
// root.innerHTML = str;

// inner.HTML

// const div = document.querySelector('div');
// div.textContent = 'Hello World';
// console.log(div);
// div.innerHTML = '<h1>Hello World!</h1>';
// div.innerHTML += '<p>Hello World!</p>';

// insertAdjacentHTML


// const ul = document.querySelector('ul');
// // const p = document.querySelector('.text');
// const text = '<li>Hello World!</li>';
// // ul.insertAdjacentHTML('beforebegin', text); // перед
// // ul.insertAdjacentHTML('afterend', text); // після
// ul.insertAdjacentHTML('afterbegin', text); // всередині спочатку
// // ul.insertAdjacentHTML('beforeend', text); // всередині вкінці

// insertAdjacentElement
// insertAdjacentText

// clone

// const article = document.querySelector('.article');
// const cloneArticle = article.cloneNode(false);
// console.log(cloneArticle);

// let container = document.querySelector('div');
// let frag = document.createDocumentFragment();
// for (let i = 1; i <= 100; i++) {
//     let box = document.createElement('div');
//     box.classList.add('box');
//     frag.append(box);
// }
// container.append(frag);


// BOM
//

// console.log(history);
// console.log(location);
// console.log(navigator);
// const onSuccess = position => {
//     console.log(position);
//     const { latitude, longitude } = position.coords;
//
//     console.log(`Широта: ${latitude}, Долгота: ${longitude}`);
// };

// const onError = error =>
// console.error('Ошибка при определении положения: ', error);

// navigator.geolocation.getCurrentPosition(onSuccess, onError);

// function initMap() {
//     const mapElement = document.querySelector('.js-google-map');
//     const mapCenter = { lat: 50.4501, lng: 30.5234 };
//     const mapOptions = {
//         center: mapCenter,
//         zoom: 20
//     }
//
//     const map = new google.maps.Map(mapElement, mapOptions);
//
//     const marker = new google.maps.Marker({
//         position: mapCenter,
//         map: map,
//     });
// }

// https://www.youtube.com/playlist?list=PLgGbWId6zgaXFR4SW_3qJ55cxmEqRNIzx
// let jumbotron = document.querySelector('.jumbotron');
// let titleContainer = createNode('div', ['row', 'title-container'], null, null, jumbotron, 'append');
// let h1 = createNode('h1', ['text-center'], null, ' TRIBUTE PAGE', titleContainer, 'append');
//
// let img = createNode('img', ['img', 'test'], {
//     alt: 'title',
//     src: 'https//www.dfdfd',
//     title: 'adfdffs',
//     id: 'dfsdfsdf'
// });


// create
// const titleContainer = document.createElement('div');
// const h1 = document.createElement('h1');
// const deadpoolSpan = document.createElement('span');
// const deadpoolP = document.createElement('p');
// const deadpoolSpan2 = document.createElement('span');
// const imgContainer = document.createElement('div');
// const mainImg = document.createElement('img');
//
//
// // add class
// titleContainer.classList.add('row', 'title-container');
// h1.classList.add('text-center');
// deadpoolSpan.classList.add('red-text');
// deadpoolP.classList.add('text-center');
// deadpoolSpan2.classList.add('red-text');
// imgContainer.classList.add('row');
// mainImg.classList.add('img-responsive','inside-shadow');
//
//
// // add attr
// imgContainer.setAttribute('id','main-image-container');
// mainImg.setAttribute('src', 'http://s3.foxfilm.com/foxmovies/production/films/103/images/gallery/deadpool1-gallery-image.jpg');
// mainImg.setAttribute('alt', 'picture');


// add text
// h1.textContent = ' TRIBUTE PAGE';
// deadpoolSpan.textContent = 'DEADPOOL';
// deadpoolP.textContent = 'WITH GREAT POWER COMES GREAT ';
// deadpoolSpan2.textContent = 'IRRESPONSIBILITY';

// clone

// paste
// jumbotron.append(titleContainer);
// titleContainer.append(h1);
// h1.prepend(deadpoolSpan);
// titleContainer.append(deadpoolP);
// deadpoolP.append(deadpoolSpan2);
// jumbotron.append(imgContainer);
// imgContainer.append(mainImg);

// function createNode(tag, classArr, attrObj, text, container, mode) {
//     let el = document.createElement(tag);
//     if (classArr !== null) {
//         for (let className of classArr) {
//             el.classList.add(className);
//         }
//     }
//
//     for (let key in attrObj) {
//         let hasKey = attrObj.hasOwnProperty(`${key}`);
//         if (hasKey) {
//             el.setAttribute(`${key}`, attrObj[`${key}`])
//         }
//     }
//
//     el.textContent = text;
//
//     container[mode](el);
//
//     return el
// }