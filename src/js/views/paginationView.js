import View from './view.js';
import icons from 'url:../../img/icons.svg';

class paginationView extends View {
  _parent = document.querySelector('.pagination');

  _generateMarkup() {
    const data = this._recipe;
    const currentPage = data.page;
    const TotalPages = Math.ceil(data.result.length / data.resultPerPage);
    if (currentPage === 1 && currentPage < TotalPages) {
      return `<button data-goto="${currentPage + 1}"
      } class="btn--inline pagination__btn--next">
            <span>Page ${currentPage + 1}</span>
            <svg class="search__icon">
              <use href="${icons}#icon-arrow-right"></use>
            </svg>
          </button>`;
    }

    if (currentPage > 1 && currentPage < TotalPages) {
      return `<button data-goto="${
        currentPage - 1
      }" class="btn--inline pagination__btn--prev">
            <svg class="search__icon">
              <use href="${icons}#icon-arrow-left"></use>
            </svg>
            <span>Page ${currentPage - 1}</span>
          </button>
           <button data-goto="${
             currentPage + 1
           }" class="btn--inline pagination__btn--next">
            <span>Page ${currentPage + 1}</span>
            <svg class="search__icon">
              <use href="${icons}#icon-arrow-right"></use>
            </svg>
          </button>`;
    }

    if (currentPage === TotalPages) {
      return `<button data-goto="${
        currentPage - 1
      }" class="btn--inline pagination__btn--prev">
            <svg class="search__icon">
              <use href="${icons}#icon-arrow-left"></use>
            </svg>
            <span>Page ${currentPage - 1}</span>
          </button>`;
    }

    return '';
  }

  addClickhandler(handle) {
    this._parent.addEventListener('click', e => {
      const btn = e.target.closest('.btn--inline');
      if(!btn) return;
      const gotopage = +btn.dataset.goto
      handle(gotopage)
    });
  }
}

export default new paginationView();
