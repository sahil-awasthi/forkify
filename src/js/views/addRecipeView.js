import View from './View.js';

class AddRecipeView extends View {
  _parentElement = document.querySelector('.upload');
  _message = 'Recipe was successfully uploaded :)';

  _window = document.querySelector('.add-recipe-window');
  _overlay = document.querySelector('.overlay');
  _btnOpen = document.querySelector('.nav__btn--add-recipe');
  _btnClose = document.querySelector('.btn--close-modal');

  _btnAddIngredient = document.querySelector('.upload__add__btn');

  constructor() {
    super();
    this._addHandlerShowWindow();
    this._addHandlerHideWindow();
  }

  render(count, render = true) {
    const markup = this._generateMarkup(count);

    if (!render) return markup;

    this._btnAddIngredient.insertAdjacentHTML('beforebegin', markup);
  }

  toggleWindow() {
    this._overlay.classList.toggle('hidden');
    this._window.classList.toggle('hidden');
  }

  _addHandlerShowWindow() {
    this._btnOpen.addEventListener('click', this.toggleWindow.bind(this));
  }

  _addHandlerHideWindow() {
    this._btnClose.addEventListener('click', this.toggleWindow.bind(this));
    this._overlay.addEventListener('click', this.toggleWindow.bind(this));
  }

  addHandlerAddIngredient(handler) {
    this._btnAddIngredient.addEventListener('click', function (e) {
      e.preventDefault();
      handler();
    });
  }

  addHandlerUpload(handler) {
    this._parentElement.addEventListener('submit', function (e) {
      e.preventDefault();
      const dataArr = [...new FormData(this)];
      const data = Object.fromEntries(dataArr);

      console.log(data, '🚴🏻🚴🏻');
      handler(data);
    });
  }

  _generateMarkup(count) {
    return `
        <div class="upload__column">
          <label name="ingredient-${count}">Ingredient ${count}</label>
          <input
            type="text"
            name="quantity-ingredient-${count}"
            placeholder="Quantity (eg: 2)"
          />
          <input
            type="text"
            name="unit-ingredient-${count}"
            placeholder="Unit (eg: tablespoon)"
          />
          <input
            type="text"
            name="description-ingredient-${count}"
            placeholder="Description (eg: himalayan salt)"
          />
        </div>`;
  }
}

export default new AddRecipeView();
