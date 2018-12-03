import Event from './event-emitter';
import checkForValidUrlSyntax from './validateInput';
export default class View extends Event {
  constructor() {
    super();
    this.form = document.querySelector(".bookmarks__form");
    // this.addButton = document.querySelector(".bookmark-add__button");
    // this.container = document.querySelector(".bookmarks__container");
    this.input = document.querySelector(".bookmark__input");
    this.urlListWrap = document.querySelector(".bookmarks__list");
    this.dataFromStorage = JSON.parse(localStorage.getItem('urlList')) || [];
    this.form.addEventListener('submit', this.formSubmit.bind(this));
    window.addEventListener('DOMContentLoaded',this.domReady.bind(this));
  }

  domReady() {
    // console.log(this.dataFromStorage);
    this.emit('loaded', this.dataFromStorage)
  }

  formSubmit(e) {
    e.preventDefault();
    let value;
    if (checkForValidUrlSyntax(this.input.value)) {
      value = this.input.value;
    } else {
      return
    }
    if (value === '') {
      return
    }
    this.emit('create', value);
  }

  createMarkup(list) {
    this.urlListWrap.innerHTML = "";
    const source = document.querySelector("#bookmark__template").innerHTML.trim();
    const template = Handlebars.compile(source);
    const markup = list.reduce((acc, bookmark) => acc + template(bookmark), "");
    this.urlListWrap.insertAdjacentHTML("beforeend", markup);
    this.urlListWrap.addEventListener('click', this.launchEmitRemove.bind(this))
  }

  launchEmitRemove(e) {
    if (e.target.textContent === 'Delete') {
      const button = e.target;
      const card = button.parentNode;
      this.emit('delete', card.id);
    }
  }

  removeCard(id) {
      const card = document.querySelector(id);
      card.remove();
  }



}