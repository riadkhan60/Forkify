import icons from 'url:../../img/icons.svg';

export default class View {
  _recipe;

  render(recipe, render = true) {
    if (!recipe || (Array.isArray(recipe) && recipe.length === 0)) return this.renderError();
    this._recipe = recipe;

    const markup = this._generateMarkup();
    if (!render) return markup;

    this._clean();
    this._parent.insertAdjacentHTML('afterbegin', markup);
  }

  update(recipe) {
    this._recipe = recipe;
    const markup = this._generateMarkup();

    const newDom = document.createRange().createContextualFragment(markup);
    const newElement = Array.from(newDom.querySelectorAll('*'));
    const currentElement = Array.from(this._parent.querySelectorAll('*'));

    newElement.forEach((newEl, i) => {
      const currentEl = currentElement[i];
      if (
        !newEl.isEqualNode(currentEl) &&
        newEl.firstChild?.nodeValue.trim() !== ''
      ) {
        currentEl.textContent = newEl.textContent;
      }

      if (!newEl.isEqualNode(currentEl)) {
        Array.from(newEl.attributes).forEach(attr => {
          currentEl.setAttribute(attr.name, attr.value);
        });
      }
    });
  }

  renderMessage(message = this._message) {
    const markup = `<div class="recipe">
        <div class="message">
          <div>
            <svg>
              <use href="${icons}#icon-smile"></use>
            </svg>
          </div>
          <p>${message}</p>
        </div>`;

    this._clean();
    this._parent.insertAdjacentHTML('afterbegin', markup);
  }

  renderSpinner() {
    const markup = `
        <div class="spinner">
          <svg>
            <use href="${icons}#icon-loader"></use>
          </svg>
        </div>`;
    this._clean();
    this._parent.insertAdjacentHTML('afterbegin', markup);
  }

  _clean() {
    this._parent.innerHTML = '';
  }

  renderError(errorMessages = this._errorMessage) {
    const markUp = `
    <div class="error">
    <div>
    <svg>
            <use href="${icons}#icon-alert-triangle"></use>
            </svg>
        </div>
        <p>${errorMessages}</p>
      </div>
      `;
    this._clean();
    this._parent.insertAdjacentHTML('afterbegin', markUp);
  }
}
