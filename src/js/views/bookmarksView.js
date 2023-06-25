import previewView from './preview.js';
import View from './view.js';

class bookmarkView extends View {
  _parent = document.querySelector('.bookmarks__list');
  _errorMessage = 'No bookmarks yet. Find a nice recipe and bookmark it ;)';
  _message = '';

  _generateMarkup() {
   return this._recipe
      .map(bookmark => {
        return previewView.render(bookmark, false);
      })
      .join('');
    
  }

  addHandler(handle) {
    window.addEventListener('load', handle);
  }
} 
export default new bookmarkView();