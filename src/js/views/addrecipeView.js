import View from './view';
import icons from 'url:../../img/icons.svg';

class addRecipeView extends View {
  _parent = document.querySelector('.upload');
  _overlay = document.querySelector(`.overlay`);
  _htmlElement = document.querySelector(`.add-recipe-window`);
  _addButton = document.querySelector(`.nav__btn--add-recipe`);
  _closeButton = document.querySelector(`.btn--close-modal`);
  _message = 'Recipe added successfully'

  constructor() {
    super();
    this._addHandlerShowWindow()._addHandlerHideWindow();
  }

  _toggleClass() {
    this._htmlElement.classList.toggle('hidden');
    this._overlay.classList.toggle('hidden');
  }

  _addHandlerShowWindow() {
    this._addButton.addEventListener('click', x => {
      this._toggleClass();
    });

    return this;
  }

  addHandlerSaveButton(handler) {
    this._parent.addEventListener('submit', e => {
      e.preventDefault();
      const DataArr = [...new FormData(e.target)];
      const Data = Object.fromEntries(DataArr);
      handler(Data);
    });
  }

  _addHandlerHideWindow() {
    [this._overlay, this._closeButton].forEach(el => {
      el.addEventListener('click', x => {
        this._toggleClass();
      });
    });
    return this;
  }
}

export default new addRecipeView();
