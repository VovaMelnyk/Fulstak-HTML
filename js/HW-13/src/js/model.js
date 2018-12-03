
export default class Model {
  constructor() {
    this.cards = [];
  }

  addCard(value){
    const obj = {
      name: value,
      id: Date.now(),
    }
    let dataFromStorage = JSON.parse(localStorage.getItem('urlList')) || [];
    let result = [obj, ...dataFromStorage];
    localStorage.setItem('urlList', JSON.stringify(result));
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(result);
      }, 200);
    })
  }


  removeCard(id) {
    let dataFromStorage = JSON.parse(localStorage.getItem('urlList'));
    let updateResult = dataFromStorage.filter(el => el.id !== Number(id));
    localStorage.setItem('urlList', JSON.stringify(updateResult));
  }
}