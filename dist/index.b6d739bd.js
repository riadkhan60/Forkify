let Fraction;

function e(e, r, t, n) { Object.defineProperty(e, r, { get: t, set: n, enumerable: !0, configurable: !0 }) } function r(e) { return e && e.__esModule ? e.default : e } var t, n = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : {}, i = {}, a = {}, s = n.parcelRequire52af; null == s && ((s = function (e) { if (e in i) return i[e].exports; if (e in a) { var r = a[e]; delete a[e]; var t = { id: e, exports: {} }; return i[e] = t, r.call(t.exports, t, t.exports), t.exports } var n = Error("Cannot find module '" + e + "'"); throw n.code = "MODULE_NOT_FOUND", n }).register = function (e, r) { a[e] = r }, n.parcelRequire52af = s), s.register("27Lyk", function (r, t) { "use strict"; e(r.exports, "register", () => n, e => n = e), e(r.exports, "resolve", () => i, e => i = e); var n, i, a = {}; n = function (e) { for (var r = Object.keys(e), t = 0; t < r.length; t++)a[r[t]] = e[r[t]] }, i = function (e) { var r = a[e]; if (null == r) throw Error("Could not resolve bundle with id " + e); return r } }), s("27Lyk").register(JSON.parse('{"f9fpV":"index.b6d739bd.js","eyyUD":"icons.c14567a0.svg"}')); const o = "1bdc67cd-3617-47aa-b693-0419c185dd0f", c = "https://forkify-api.herokuapp.com/api/v2/recipes/"; async function l(e, r) { try { let t = r ? fetch(e, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(r) }) : fetch(e), n = await Promise.race([t, new Promise(function (e, r) { setTimeout(function () { r(Error("Request took too long! Timeout after 10 second")) }, 1e4) })]), i = await n.json(); if (!n.ok) throw Error(`${i.status} ${i.message} ${n.status}`); return i } catch (e) { throw e } } const d = { recipe: {}, Search: { query: "", result: [], resultPerPage: 10, page: 1 }, bookmarks: [] }; function u(e) { let { recipe: r } = e.data; return { cookingTime: r.cooking_time, id: r.id, imgUrl: r.image_url, title: r.title, publisher: r.publisher, servings: r.servings, sourceUrl: r.source_url, ingredients: r.ingredients, ...r.key && { key: r.key } } } async function p(e) { try { let r = await l(`${c}${e}?key=${o}`); d.recipe = u(r), console.log(d.recipe), d.bookmarks.some(r => r.id === e) ? d.recipe.bookmarked = !0 : d.recipe.bookmarked = !1 } catch (e) { throw e } } async function h(e) { try { d.Search.query = e; let r = await l(`${c}?search=${e}&key=${o}`), { recipes: t } = r.data; d.Search.result = t.map(e => ({ id: e.id, imgUrl: e.image_url, title: e.title, publisher: e.publisher, ...e.key && { key: e.key } })), console.log(t) } catch (e) { throw e } } function g(e = d.Search.page) { d.Search.page = e; let r = (e - 1) * d.Search.resultPerPage, t = e * d.Search.resultPerPage; return d.Search.result.slice(r, t) } const m = function () { localStorage.setItem("bookmark", JSON.stringify(d.bookmarks)) }; function _(e) { d.bookmarks.push(e), e.id === d.recipe.id && (d.recipe.bookmarked = !0), m() } async function f(e) { try { let r = Object.entries(e).filter(e => e[0].startsWith("ingredient") && "" !== e[1]).map(e => { let r = e[1].split(",").map(e => e.trim()); if (console.log(r), 3 !== r.length) throw Error("Invalid ingredient formated"); let [t, n, i] = r; return { quantity: t ? +t : "", unit: n, description: i } }), t = { title: e.title, source_url: e.sourceUrl, image_url: e.image, publisher: e.publisher, cooking_time: +e.cookingTime, servings: +e.servings, ingredients: r }, n = await l(`${c}?key=${o}`, t); d.recipe = u(n), console.log(d.recipe), _(d.recipe) } catch (e) { throw e } } !function () { let e = localStorage.getItem("bookmark"); e && (d.bookmarks = JSON.parse(e)) }(); var v = {}; v = new URL(s("27Lyk").resolve("eyyUD"), import.meta.url).toString(); class y{
  _recipe; render(e, r = !0) { if (!e || Array.isArray(e) && 0 === e.length) return this.renderError(); this._recipe = e; let t = this._generateMarkup(); if (!r) return t; this._clean(), this._parent.insertAdjacentHTML("afterbegin", t) } update(e) { this._recipe = e; let r = this._generateMarkup(), t = document.createRange().createContextualFragment(r), n = Array.from(t.querySelectorAll("*")), i = Array.from(this._parent.querySelectorAll("*")); n.forEach((e, r) => { let t = i[r]; e.isEqualNode(t) || "" === e.firstChild?.nodeValue.trim() || (t.textContent = e.textContent), e.isEqualNode(t) || Array.from(e.attributes).forEach(e => { t.setAttribute(e.name, e.value) }) }) } renderMessage(e = this._message) {
    let t =`<div class="recipe">
        <div class="message">
          <div>
            <svg>
              <use href="${r(v)}#icon-smile"></use>
            </svg>
          </div>
          <p>${e}</p>
        </div>`;this._clean(),this._parent.insertAdjacentHTML("afterbegin",t)}renderSpinner(){let e=`
        <div class="spinner">
          <svg>
            <use href="${r(v)}#icon-loader"></use>
          </svg>
        </div>`;this._clean(),this._parent.insertAdjacentHTML("afterbegin",e)}_clean(){this._parent.innerHTML=""}renderError(e=this._errorMessage){let t=`
    <div class="error">
    <div>
    <svg>
            <use href="${r(v)}#icon-alert-triangle"></use>
            </svg>
        </div>
        <p>${e}</p>
      </div>
      `;this._clean(),this._parent.insertAdjacentHTML("afterbegin",t)}}(Fraction=function(e,r){if(void 0!==e&&r)"number"==typeof e&&"number"==typeof r?(this.numerator=e,this.denominator=r):"string"==typeof e&&"string"==typeof r&&(this.numerator=parseInt(e),this.denominator=parseInt(r));else if(void 0===r){if("number"==typeof(num=e))this.numerator=num,this.denominator=1;else if("string"==typeof num){var t,n,i=num.split(" ");if(i[0]&&(t=i[0]),i[1]&&(n=i[1]),t%1==0&&n&&n.match("/"))return new Fraction(t).add(new Fraction(n));if(!t||n)return;if("string"==typeof t&&t.match("/")){var a=t.split("/");this.numerator=a[0],this.denominator=a[1]}else{if("string"==typeof t&&t.match("."))return new Fraction(parseFloat(t));this.numerator=parseInt(t),this.denominator=1}}}this.normalize()}).prototype.clone=function(){return new Fraction(this.numerator,this.denominator)},Fraction.prototype.toString=function(){if("NaN"===this.denominator)return"NaN";var e=this.numerator/this.denominator>0?Math.floor(this.numerator/this.denominator):Math.ceil(this.numerator/this.denominator),r=this.numerator%this.denominator,t=this.denominator,n=[];return 0!=e&&n.push(e),0!=r&&n.push((0===e?r:Math.abs(r))+"/"+t),n.length>0?n.join(" "):0},Fraction.prototype.rescale=function(e){return this.numerator*=e,this.denominator*=e,this},Fraction.prototype.add=function(e){var r=this.clone();return e=e instanceof Fraction?e.clone():new Fraction(e),td=r.denominator,r.rescale(e.denominator),e.rescale(td),r.numerator+=e.numerator,r.normalize()},Fraction.prototype.subtract=function(e){var r=this.clone();return e=e instanceof Fraction?e.clone():new Fraction(e),td=r.denominator,r.rescale(e.denominator),e.rescale(td),r.numerator-=e.numerator,r.normalize()},Fraction.prototype.multiply=function(e){var r=this.clone();if(e instanceof Fraction)r.numerator*=e.numerator,r.denominator*=e.denominator;else{if("number"!=typeof e)return r.multiply(new Fraction(e));r.numerator*=e}return r.normalize()},Fraction.prototype.divide=function(e){var r=this.clone();if(e instanceof Fraction)r.numerator*=e.denominator,r.denominator*=e.numerator;else{if("number"!=typeof e)return r.divide(new Fraction(e));r.denominator*=e}return r.normalize()},Fraction.prototype.equals=function(e){e instanceof Fraction||(e=new Fraction(e));var r=this.clone().normalize(),e=e.clone().normalize();return r.numerator===e.numerator&&r.denominator===e.denominator},Fraction.prototype.normalize=function(){var e=function(e){return"number"==typeof e&&(e>0&&e%1>0&&e%1<1||e<0&&e%-1<0&&e%-1>-1)},r=function(e,r){if(!r)return Math.round(e);var t=Math.pow(10,r);return Math.round(e*t)/t};return function(){if(e(this.denominator)){var t=r(this.denominator,9),n=Math.pow(10,t.toString().split(".")[1].length);this.denominator=Math.round(this.denominator*n),this.numerator*=n}if(e(this.numerator)){var t=r(this.numerator,9),n=Math.pow(10,t.toString().split(".")[1].length);this.numerator=Math.round(this.numerator*n),this.denominator*=n}var i=Fraction.gcf(this.numerator,this.denominator);return this.numerator/=i,this.denominator/=i,(this.numerator<0&&this.denominator<0||this.numerator>0&&this.denominator<0)&&(this.numerator*=-1,this.denominator*=-1),this}}(),Fraction.gcf=function(e,r){var t=[],n=Fraction.primeFactors(e),i=Fraction.primeFactors(r);return(n.forEach(function(e){var r=i.indexOf(e);r>=0&&(t.push(e),i.splice(r,1))}),0===t.length)?1:function(){var e,r=t[0];for(e=1;e<t.length;e++)r*=t[e];return r}()},Fraction.primeFactors=function(e){for(var r=Math.abs(e),t=[],n=2;n*n<=r;)r%n==0?(t.push(n),r/=n):n++;return 1!=r&&t.push(r),t},t=Fraction;class b extends y{_parent=document.querySelector(".recipe");_errorMessage=`We couldn't find any recipe please try again with another ID 🙁`;_message="Start by searching for a recipe or an ingredient. Have fun!";addHandlerRender(e){["hashchange","load"].forEach(r=>{window.addEventListener(r,e)})}addHandlerServings(e){this._parent.addEventListener("click",r=>{let t=r.target.closest(".btn--tiny");if(!t)return;let n=+t.dataset.updateTo;n<1||e(n)})}addHandlerBookmark(e){this._parent.addEventListener("click",r=>{let t=r.target.closest(".btn--bookmark");t&&e()})}_generateMarkup(){return`
    <figure class="recipe__fig">
          <img src="${this._recipe.imgUrl}" alt="${this._recipe.title}" class="recipe__img" />
          <h1 class="recipe__title">
            <span>${this._recipe.title}</span>
          </h1>
        </figure>

        <div class="recipe__details">
          <div class="recipe__info">
            <svg class="recipe__info-icon">
              <use href="${r(v)}#icon-clock"></use>
            </svg>
            <span class="recipe__info-data recipe__info-data--minutes">${this._recipe.cookingTime}</span>
            <span class="recipe__info-text">minutes</span>
          </div>
          <div class="recipe__info">
            <svg class="recipe__info-icon">
              <use href="${r(v)}#icon-users"></use>
            </svg>
            <span class="recipe__info-data recipe__info-data--people">${this._recipe.servings}</span>
            <span class="recipe__info-text">servings</span>

            <div class="recipe__info-buttons">
              <button class="btn--tiny btn--update-servings" data-update-to="${this._recipe.servings-1}">
                <svg>
                  <use href="${r(v)}#icon-minus-circle"></use>
                </svg>
              </button>
              <button class="btn--tiny btn--update-servings" data-update-to="${this._recipe.servings+1}">
                <svg>
                  <use href="${r(v)}#icon-plus-circle"></use>
                </svg>
              </button>
            </div>
          </div>

          <div class="recipe__user-generated ${this._recipe.key?"":"hidden"}">
            <svg>
              <use href="${r(v)}#icon-user"></use>
            </svg>
          </div>
          <button class="btn--round btn--bookmark">
            <svg class="">
              <use href="${r(v)}#icon-bookmark${!0===this._recipe.bookmarked?"-fill":""}"></use>
            </svg>
          </button>
        </div>

        <div class="recipe__ingredients">
          <h2 class="heading--2">Recipe ingredients</h2>
          <ul class="recipe__ingredient-list">
            ${this._recipe.ingredients.map(this._generateMarkupIngridents).join("")}
          </ul>
        </div>

        <div class="recipe__directions">
          <h2 class="heading--2">How to cook it</h2>
          <p class="recipe__directions-text">
            This recipe was carefully designed and tested by
            <span class="recipe__publisher">${this._recipe.publisher}</span>. Please check out
            directions at their website.
          </p>
          <a
            class="btn--small recipe__btn"
            href="${this._recipe.sourceUrl}"
            target="_blank"
          >
            <span>Directions</span>
            <svg class="search__icon">
              <use href="${r(v)}#icon-arrow-right"></use>
            </svg>
          </a>
        </div>`}_generateMarkupIngridents(e){return`
              <li class="recipe__ingredient">
              <svg class="recipe__icon">
                <use href="${r(v)}#icon-check"></use>
              </svg>
              <div class="recipe__quantity">${e.quantity?new t(e.quantity):""}</div>
              <div class="recipe__description">
                <span class="recipe__unit">${e.unit}</span>
                ${e.description}
              </div>
            </li>
              `}}var k=new b;class w{#e=document.querySelector(".search");getQuery(){return this.#e.querySelector(".search__field").value}_clearInput(){this.#e.querySelector(".search__field").value=""}addHandlerSearch(e){this.#e.addEventListener("submit",r=>{r.preventDefault(),e(),this._clearInput()})}}var $=new w,S=new class extends y{_parent="";_generateMarkup(){let e=window.location.hash.slice(1);return`<li class="preview">
    <a class="preview__link ${e==this._recipe.id?"preview__link--active":""}" href="#${this._recipe.id}">
      <figure class="preview__fig">
        <img src="${this._recipe.imgUrl}" alt="Test" />
      </figure>
      <div class="preview__data">
        <h4 class="preview__title">${this._recipe.title}</h4>
        <p class="preview__publisher">${this._recipe.publisher}</p>
         <div class="preview__user-generated ${this._recipe.key?"":"hidden"}">
            <svg>
              <use href="${r(v)}#icon-user"></use>
            </svg>
          </div>
      </div>
    </a>
  </li>`}};class F extends y{_parent=document.querySelector(".results");_generateMarkup(){let e=this._recipe.map(e=>S.render(e,!1)).join("");return e}}var E=new F;class M extends y{_parent=document.querySelector(".pagination");_generateMarkup(){let e=this._recipe,t=e.page,n=Math.ceil(e.result.length/e.resultPerPage);return 1===t&&t<n?`<button data-goto="${t+1}"
      } class="btn--inline pagination__btn--next">
            <span>Page ${t+1}</span>
            <svg class="search__icon">
              <use href="${r(v)}#icon-arrow-right"></use>
            </svg>
          </button>`:t>1&&t<n?`<button data-goto="${t-1}" class="btn--inline pagination__btn--prev">
            <svg class="search__icon">
              <use href="${r(v)}#icon-arrow-left"></use>
            </svg>
            <span>Page ${t-1}</span>
          </button>
           <button data-goto="${t+1}" class="btn--inline pagination__btn--next">
            <span>Page ${t+1}</span>
            <svg class="search__icon">
              <use href="${r(v)}#icon-arrow-right"></use>
            </svg>
          </button>`:t===n?`<button data-goto="${t-1}" class="btn--inline pagination__btn--prev">
            <svg class="search__icon">
              <use href="${r(v)}#icon-arrow-left"></use>
            </svg>
            <span>Page ${t-1}</span>
          </button>`:""}addClickhandler(e){this._parent.addEventListener("click",r=>{let t=r.target.closest(".btn--inline");if(!t)return;let n=+t.dataset.goto;e(n)})}}var q=new M;class H extends y{_parent=document.querySelector(".bookmarks__list");_errorMessage="No bookmarks yet. Find a nice recipe and bookmark it ;)";_message="";_generateMarkup(){return this._recipe.map(e=>S.render(e,!1)).join("")}addHandler(e){window.addEventListener("load",e)}}var x=new H;class L extends y{_parent=document.querySelector(".upload");_overlay=document.querySelector(".overlay");_htmlElement=document.querySelector(".add-recipe-window");_addButton=document.querySelector(".nav__btn--add-recipe");_closeButton=document.querySelector(".btn--close-modal");_message="Recipe added successfully";constructor(){super(),this._addHandlerShowWindow()._addHandlerHideWindow()}_toggleClass(){this._htmlElement.classList.toggle("hidden"),this._overlay.classList.toggle("hidden")}_addHandlerShowWindow(){return this._addButton.addEventListener("click",e=>{this._toggleClass()}),this}addHandlerSaveButton(e){this._parent.addEventListener("submit",r=>{r.preventDefault();let t=[...new FormData(r.target)],n=Object.fromEntries(t);e(n)})}_addHandlerHideWindow(){return[this._overlay,this._closeButton].forEach(e=>{e.addEventListener("click",e=>{this._toggleClass()})}),this}}var T=new L;async function P(){try{let e=window.location.hash.slice(1);if(k.renderMessage(),!e)return;k.renderSpinner(),E.update(g()),x.update(d.bookmarks),await p(e);let r=d.recipe;k.render(r)}catch(e){console.log(e),k.renderError(e)}}async function j(){try{let e=$.getQuery();if(!e)return;if(E.renderSpinner(),await h(e),0===d.Search.result.length)throw Error(`We couldn't find any recipes with this qurey! try again with another query 🙁`);E.render(g(1)),q.render(d.Search)}catch(e){E.renderError(`We couldn't find any recipes with this qurey! try again with another query 🙁`),console.error(e)}}async function A(e){try{T.renderSpinner(),await f(e),k.render(d.recipe),T.renderMessage(),window.history.pushState(null,"",`#${d.recipe.id}`),x.render(d.bookmarks),setTimeout(e=>{T._toggleClass()},500)}catch(e){T.renderError(e.message),console.log(e)}}x.addHandler(function(){x.render(d.bookmarks)}),k.addHandlerRender(P),$.addHandlerSearch(j),q.addClickhandler(function(e){E.render(g(e)),q.render(d.Search)}),k.addHandlerServings(function(e){d.recipe.ingredients.forEach(r=>{r.quantity=r.quantity*e/d.recipe.servings}),d.recipe.servings=e;let r=d.recipe;k.update(r)}),k.addHandlerBookmark(function(){d.recipe.bookmarked?function(e){let r=d.bookmarks.findIndex(r=>r.id===e);d.bookmarks.splice(r,1),e===d.recipe.id&&(d.recipe.bookmarked=!1),m()}(d.recipe.id):_(d.recipe),k.update(d.recipe),x.render(d.bookmarks)}),T.addHandlerSaveButton(A);
//# sourceMappingURL=index.b6d739bd.js.map
