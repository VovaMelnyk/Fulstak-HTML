
export default class Controler {
  constructor(model, view) {
    this.model = model;
    this.view = view;

    view.on('create', this.createCards.bind(this));
    view.on('delete', this.deleteCard.bind(this));
    view.on('loaded', this.loadedData.bind(this));

  }

  createCards(value) {
    this.model.addCard(value).then(data=> this.view.createMarkup(data));
  }

  loadedData(arr) {
    this.view.createMarkup(arr);
  }

  deleteCard(id) {
    this.model.removeCard(id);
    this.view.removeCard(id);
  }
}