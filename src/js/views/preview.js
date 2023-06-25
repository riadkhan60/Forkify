import View from './view.js';
import icons from 'url:../../img/icons.svg';

 class previewView extends View {
  _parent = ''
  _generateMarkup() {
    const id = window.location.hash.slice(1);
    return `<li class="preview">
    <a class="preview__link ${
      id == this._recipe.id ? 'preview__link--active' : ''
    }" href="#${this._recipe.id}">
      <figure class="preview__fig">
        <img src="${this._recipe.imgUrl}" alt="Test" />
      </figure>
      <div class="preview__data">
        <h4 class="preview__title">${this._recipe.title}</h4>
        <p class="preview__publisher">${this._recipe.publisher}</p>
         <div class="preview__user-generated ${
           this._recipe.key ? '' : 'hidden'
         }">
            <svg>
              <use href="${icons}#icon-user"></use>
            </svg>
          </div>
      </div>
    </a>
  </li>`;
  }
}

 
export default new previewView()