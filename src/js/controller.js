import * as mode from './mode.js';
import RecipeView from './views/recipeView.js';
import searchView from './views/searchView.js';
import resultView from './views/resultView.js';
import paginationView from './views/paginationView.js';
import recipeView from './views/recipeView.js';
import bookmarksView from './views/bookmarksView.js';
import addrecipeView from './views/addrecipeView.js';

async function controlRecipe() {
  try {
    const Id = window.location.hash.slice(1);
    RecipeView.renderMessage();
    if (!Id) return;

    RecipeView.renderSpinner();

    resultView.update(mode.getSearchResultsPage());

    bookmarksView.update(mode.state.bookmarks);

    await mode.getRecipe(Id);

    const recipe = mode.state.recipe;
    // render the recipe
    RecipeView.render(recipe);
  } catch (err) {
    console.log(err);
    RecipeView.renderError(err);
  }
}

async function controlsearchRecipes() {
  try {
    const query = searchView.getQuery();
    if (!query) return;
    resultView.renderSpinner();
    await mode.loadSearchRecipe(query);

    if (mode.state.Search.result.length === 0)
      throw new Error(
        `We couldn't find any recipes with this qurey! try again with another query 🙁`
      );

    resultView.render(mode.getSearchResultsPage(1));
    paginationView.render(mode.state.Search);
  } catch (err) {
    resultView.renderError(
      `We couldn't find any recipes with this qurey! try again with another query 🙁`
    );
    console.error(err);
  }
}

function controlPagination(gotoPage) {
  resultView.render(mode.getSearchResultsPage(gotoPage));
  paginationView.render(mode.state.Search);
}

function controlServings(newServings) {
  mode.updateServing(newServings);
  const recipe = mode.state.recipe;
  // render the recipe
  RecipeView.update(recipe);
}

function controlBookmarked() {
  if (!mode.state.recipe.bookmarked) mode.addBookmark(mode.state.recipe);
  else mode.deleteBookmark(mode.state.recipe.id);

  recipeView.update(mode.state.recipe);
  bookmarksView.render(mode.state.bookmarks);
}

function controlBookmarkes() {
  bookmarksView.render(mode.state.bookmarks);
}

async function controlAddrecipe(data) {
  try {

    addrecipeView.renderSpinner();

    await mode.uploadRecipe(data);

    recipeView.render(mode.state.recipe);
    
    addrecipeView.renderMessage();

    window.history.pushState(null, '', `#${mode.state.recipe.id}`)

    bookmarksView.render(mode.state.bookmarks);

    setTimeout(x => {
     addrecipeView._toggleClass();
    }, 500);
    // bookmarksView.update(mode.state.bookmarks);
  } catch (error) {
    addrecipeView.renderError(error.message);
    console.log(error);
  }
}

function init() {
  bookmarksView.addHandler(controlBookmarkes);
  recipeView.addHandlerRender(controlRecipe);
  searchView.addHandlerSearch(controlsearchRecipes);
  paginationView.addClickhandler(controlPagination);
  recipeView.addHandlerServings(controlServings);
  recipeView.addHandlerBookmark(controlBookmarked);
  addrecipeView.addHandlerSaveButton(controlAddrecipe);
}

init();
