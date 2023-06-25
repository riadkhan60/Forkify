import icons from 'url:../../img/icons.svg';

class searchView {
  #parentEl = document.querySelector('.search');

  getQuery() { 
    return this.#parentEl.querySelector('.search__field').value;
  }
  _clearInput() {
    this.#parentEl.querySelector('.search__field').value = '';
  }
  
  addHandlerSearch(handler) {
    this.#parentEl.addEventListener('submit', (e) => {
      e.preventDefault();
      handler();
      this._clearInput();
    })
  }
}

export default new searchView();

