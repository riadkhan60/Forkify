import View from "./view.js";
import previewView from './preview.js';
import icons from 'url:../../img/icons.svg';

class resultView extends View {
  _parent = document.querySelector('.results');

  _generateMarkup() {
    const markup = this._recipe
      .map(recipe => {
        return previewView.render(recipe, false);
      })
      .join('');

    return markup;
  }
}

export default new resultView(); 