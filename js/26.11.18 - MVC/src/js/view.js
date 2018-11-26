import EventEmitter from './event-emitter';

export default class View extends EventEmitter {
  constructor() {
    super();

    this.form = document.querySelector('.form');
    this.input = this.form.querySelector('.input');
    this.notesGrid = document.querySelector('.notes-grid');

    this.form.addEventListener('submit', this.handleAdd.bind(this));
  }

  handleAdd(evt) {
    evt.preventDefault();

    const { value } = this.input;

    if (value === '') return;

    this.emit('add', value);
  }

  createNote(note) {
    const item = document.createElement('div');
    item.dataset.id = note.id;
    item.classList.add('item');

    const text = document.createElement('p');
    text.textContent = note.text;
    text.classList.add('text');

    const actions = document.createElement('div');
    actions.classList.add('actions');

    const buttonRemove = document.createElement('button');
    buttonRemove.textContent = 'Удалить';
    buttonRemove.dataset.action = 'remove';
    buttonRemove.classList.add('button');


    actions.append(buttonRemove);

    item.append(text, actions);

    this.appendEventListners(item);

    return item;
  }

  addNote(note) {
    const item = this.createNote(note);

    this.form.reset();

    this.notesGrid.appendChild(item);
  }

  appendEventListners(item) {
    const removeBtn = item.querySelector('[data-action="remove"]');
    removeBtn.addEventListener('click', this.handleRemove.bind(this));
  }

  handleRemove({ target }) {
    const parent = target.closest('.item');

    this.emit('remove', parent.dataset.id);
  }

  removeNote(id) {
    const item = this.notesGrid.querySelector(`[data-id="${id}"]`);
    this.notesGrid.removeChild(item);
  }
}
