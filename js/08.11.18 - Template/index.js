// const source = document.querySelector('#address-template').innerHTML.trim();
// // console.log(source);
// const temp = Handlebars.compile(source);
// // console.log(temp);
// const context = {
//     "city": "London",
//     "street": "Baker Street",
//     "number": "221B"
// };
// // //
// const markup = temp(context);
// console.log(markup);
// const container = document.querySelector('.content-placeholder');
// container.innerHTML = markup;

//

// const data = {
//     people: [
//         {firstName: 'Homer', lastName: 'Simpson'},
//         {firstName: 'Peter', lastName: 'Griffin'},
//         {firstName: 'Eric', lastName: 'Cartman'},
//         {firstName: 'Kenny', lastName: 'McCormick'},
//         {firstName: 'Bart', lastName: 'Simpson'}
//     ]
// };
// const source = document.querySelector('#example-template').innerHTML.trim();

// const templateFunc = Handlebars.compile(source);

// const markup = templateFunc(data);

// const container = document.querySelector('.content-placeholder');

// container.innerHTML = markup;



// // //
// const template = Handlebars.compile(source);
// const person = template(data);
// console.log(person);
// const container = document.querySelector('.content-placeholder');
// container.innerHTML = person;

// const menuData = {
//     title: 'Eat it createElement, templates rule!',
//     items: ['Handlebars', 'LoDash', 'Pug', 'EJS']
// };
// let source = document.querySelector('#menu').innerHTML.trim();

// let tmp = Handlebars.compile(source);

// let mark = tmp(menuData);

// let root = document.querySelector('#menu-container');

// root.innerHTML = mark;

// const data = {
//     animals: [
//         {
//             name: "cow",
//             noise: "moooo"
//         },
//         {
//             name: "cat",
//             noise: "meow"
//         },
//         {
//             name: "fish",
//             noise: ""
//         },
//         {
//             name: "farmer",
//             noise: "Get off my property!"
//         }
//     ]
// };

// let source = document.querySelector('#built-in-helpers-template').innerHTML.trim();

// let tmp = Handlebars.compile(source);

// let mark = tmp(data);

// let container = document.querySelector('.content-placeholder');

// container.innerHTML = mark;
// Порядок дій
// 1) Створюємо шаблон в ШТМЛ фалі в середині тега script
// 2) Задаємо тегу скрипт рандомний тип щоб його не прочитав браузер
// 3) Витягуємо розмітку з шаблона через innerHTML.trim()
// 4) Запускаємо метод Handlebars.compile(шаблон з пунката №3)
// 5) Запускаємо функцію з пункта №4 з данними що приходять з сервера
// 6) Вибираємо в розмітці контейнер куди хочемо вставити шаблон
// 7) Вставляємо шаблон в контейнер через innerHTML
// const source = document.querySelector('#built-in-helpers-template').innerHTML.trim();
// const template = Handlebars.compile(source);
// const result = template(data);
// const container = document.querySelector('.content-placeholder');
// container.innerHTML = result;


const gallery = {
    title: 'Gallery',
    items: [
        {img: 'https://placeimg.com/300/150/animals', text: 'animals'},
        {img: 'https://placeimg.com/300/150/arch', text: 'architecture'},
        {img: 'https://placeimg.com/300/150/nature', text: 'nature'},
        {img: 'https://placeimg.com/300/150/people', text: 'people'},
        {img: 'https://placeimg.com/300/150/tech', text: 'tech'},
        {img: 'https://placeimg.com/300/150/any', text: 'random'}
    ]
};

const source = document.querySelector('#gallery').innerHTML.trim();
const tmp = Handlebars.compile(source);
const mark = tmp(gallery);
const root = document.querySelector('.gallery');
root.innerHTML = mark;

// const container = document.querySelector('.gallery-content');
// const source = document.querySelector('#gallery-item').innerHTML.trim();
// const template = Handlebars.compile(source);
//
// const markup = galleryItems.reduce((acc, item) => acc + template(item), '');
// console.log(markup);
// container.innerHTML = markup;







// 412e51e107155c7ffabd155a02371cbd
//
// fetch('https://www.googleapis.com/youtube/v3/search?q=park')
//     .then(function (data) {
//         return data.json();
//     })
//     .then(function (data) {
//         console.log(data);
//     });

// 'http://ws.audioscrobbler.com/2.0/?method=album.search&album=meteora&api_key=412e51e107155c7ffabd155a02371cbd&format=json'

// function s() {
//     const search = document.querySelector('input').value;
//     console.log(search);
//     let request = gapi.client.youtube.search.list({
//         part: "snippet",
//         type: "video",
//         q: search,
//         maxResults: 3,
//         // order: "viewCount",
//         publishedAfter: "2015-01-01T00:00:00Z"
//     });
//
//     request.execute(function(response) {
//         let results = response.result;
//         document.querySelector('.container').innerHTML = results.items.reduce((acc, el) => acc + `<iframe class="video w100" width="640" height="360" src="//www.youtube.com/embed/${el.id.videoId}" frameborder="0"
//         allowfullscreen></iframe>
// `, '');
//         console.log(results);
//     });
// }
// document.querySelector('.btn').addEventListener('click',s);
//
// //
// function init() {
//     gapi.client.setApiKey("AIzaSyAGwWGzULP4Q9plH7a9ATpZW_8o2ZgJOH8");
//     gapi.client.load("youtube", "v3", function() {
//     });
// }
// <iframe class="video w100" width="640" height="360" src="//www.youtube.com/embed/u9Mv98Gr5pY" frameborder="0"
// allowfullscreen></iframe>
`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&q=Bullet For My Valentine Letting You Go&type=video&key=AIzaSyAGwWGzULP4Q9plH7a9ATpZW_8o2ZgJOH8`;

// let data = {
//     phones: [
//         {
//             id: "1",
//             categoryId: "1",
//             name: "Apple iPhone 5c",
//             description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ultricies lorem odio, at laoreet tellus sodales in. Nullam maximus eros ut tortor ultricies rutrum. Aliquam euismod lacus non est egesta",
//             price: 823,
//             image: "uploads/iphone5c-selection-hero-2013.png",
//             cpu: "1.3GHz Apple A6",
//             camera: "8mp (3264x2448)",
//             size: "124.4mm x 59.2mm x 8.97mm (4.9 x 2.33 x 0.35)",
//             weight: "132 grams (4.7 ounces) with battery",
//             display: "4.0 326 pixel density",
//             battery: "1480 mAh",
//             memory: "16GB, 32GB and RAM 1 GB"
//         },
//         {
//             id: "2",
//             categoryId: "1",
//             name: "Apple iPhone 6",
//             description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ultricies lorem odio, at laoreet tellus sodales in. Nullam maximus eros ut tortor ultricies rutrum. Aliquam euismod lacus non est egesta",
//             price: 953,
//             image: "uploads/51u6y9Rm8QL._SY300_.jpg",
//             cpu: "1.3GHz Apple A6",
//             camera: "8mp (3264x2448)",
//             size: "124.4mm x 59.2mm x 8.97mm (4.9 x 2.33 x 0.35)",
//             weight: "132 grams (4.7 ounces) with battery",
//             display: "4.0 326 pixel density",
//             battery: "1480 mAh",
//             memory: "16GB, 32GB and RAM 1 GB"
//         },
//         {
//             id: "3",
//             categoryId: "4",
//             name: "Lenovo A6000",
//             description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ultricies lorem odio, at laoreet tellus sodales in. Nullam maximus eros ut tortor ultricies rutrum. Aliquam euismod lacus non est egesta",
//             price: 764,
//             image: "uploads/_35%20(1).JPG",
//             cpu: "1.3GHz Apple A6",
//             camera: "8mp (3264x2448)",
//             size: "124.4mm x 59.2mm x 8.97mm (4.9 x 2.33 x 0.35)",
//             weight: "132 grams (4.7 ounces) with battery",
//             display: "4.0 326 pixel density",
//             battery: "1480 mAh",
//             memory: "16GB, 32GB and RAM 1 GB"
//         },
//         {
//             id: "4",
//             categoryId: "5",
//             name: "Nokia Lumia 1520",
//             description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ultricies lorem odio, at laoreet tellus sodales in. Nullam maximus eros ut tortor ultricies rutrum. Aliquam euismod lacus non est egesta",
//             price: 674,
//             image: "uploads/Lumia1520-Front-Back-png.png",
//             cpu: "1.3GHz Apple A6",
//             camera: "8mp (3264x2448)",
//             size: "124.4mm x 59.2mm x 8.97mm (4.9 x 2.33 x 0.35)",
//             weight: "132 grams (4.7 ounces) with battery",
//             display: "4.0 326 pixel density",
//             battery: "1480 mAh",
//             memory: "16GB, 32GB and RAM 1 GB"
//         },
//         {
//             id: "5",
//             categoryId: "3",
//             name: "HTC One",
//             description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ultricies lorem odio, at laoreet tellus sodales in. Nullam maximus eros ut tortor ultricies rutrum. Aliquam euismod lacus non est egesta",
//             price: 674,
//             image: "uploads/htc-one-m7-802w-dual-sim-silver.jpg",
//             cpu: "1.3GHz Apple A6",
//             camera: "8mp (3264x2448)",
//             size: "124.4mm x 59.2mm x 8.97mm (4.9 x 2.33 x 0.35)",
//             weight: "132 grams (4.7 ounces) with battery",
//             display: "4.0 326 pixel density",
//             battery: "1480 mAh",
//             memory: "16GB, 32GB and RAM 1 GB"
//         },
//         {
//             id: "6",
//             categoryId: "2",
//             name: "Samsung Galaxy S6",
//             description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ultricies lorem odio, at laoreet tellus sodales in. Nullam maximus eros ut tortor ultricies rutrum. Aliquam euismod lacus non est egesta",
//             price: 674,
//             image: "uploads/Agnes_Case_for_Samsung_Galaxy_S6_(1)__92643_thumb.jpg",
//             cpu: "1.3GHz Apple A6",
//             camera: "8mp (3264x2448)",
//             size: "124.4mm x 59.2mm x 8.97mm (4.9 x 2.33 x 0.35)",
//             weight: "132 grams (4.7 ounces) with battery",
//             display: "4.0 326 pixel density",
//             battery: "1480 mAh",
//             memory: "16GB, 32GB and RAM 1 GB"
//         }
//     ]
// };


// const temp = document.querySelector('#card').innerHTML.trim();
// const hand = Handlebars.compile(temp);
// const cards = phones.reduce((acc, el)=> acc + hand(el),'');
// const container = document.querySelector('.container');
// container.innerHTML = cards;
//
// const btns = document.querySelectorAll('.module-card-button');
// const btnArr = Array.from(btns);
// btnArr.forEach(function (el) {
//     return el.addEventListener('click',addClass);
// })
// function addClass(ev) {
//     ev.target.previousElementSibling.querySelector('.hide').classList.toggle('show')
// }


// console.log(laptops);
//   Add CommentCollapse 


// let sizeArr = [...new Set(laptops.map(el => el.size === 13 || el.size === 15 || el.size === 17 ? el.size : null))];
//
// let colorArr = [...new Set(laptops.map(el => el.color === 'white' || el.color === 'black' || el.color === 'gray' ? el.color : null))];
//
// let releaseDateArr = [...new Set(laptops.map(el => el.releaseDate === 2015 || el.releaseDate === 2016 || el.releaseDate === 2017 ? el.releaseDate : null))];
//
// filter.size = sizeArr;
// filter.color = colorArr;
// filter.releaseDate = releaseDateArr;
// console.log(filter)


// const size = document.querySelector('#size').innerHTML.trim();
// const color = document.querySelector('#color').innerHTML.trim();
//
// const template = Handlebars.compile(size);
// const colorTemp = Handlebars.compile(color);
//
// const markup = filter.size.reduce((acc, el) => acc + template(el), '');
//
// // console.log(markup);
// const sizeBox = document.querySelector('.size-box');
// sizeBox.innerHTML = markup;
//
// const markup2 = filter.color.reduce((acc, el) => acc + colorTemp(el), '');
// const colorBox = document.querySelector('.color-box');
// colorBox.innerHTML = markup2;
// let test = {
//     size: [],
//     color: [],
//     releaseDate: [],
// };
// let btn = document.querySelector('[type="submit"]');
// btn.addEventListener('click', function () {
//     event.preventDefault();
//     let select = document.querySelectorAll('[type="checkbox"]');
//     // console.log(select);
//     select = Array.from(select).filter(item => item.checked ? item : null).map(item => {
//         return test[item.name].push(item.value)
//     });
//     console.log(test);
//     for (let key in test) {
//         if (test[key].length > 0) {
//             rs = rs.filter(function (item, i) {
//                 return test[key][0] === item[key]+'';
//             })
//         }
//
//     }
//     console.log('rs',rs);
//     console.log('lap',laptops);
//
// });
// // console.log(test);
