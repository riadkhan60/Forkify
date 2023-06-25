import { MyApiKey, ApiLocation, SearchApi, RES_PER_PAGE } from './config.js';
import { AJAX } from './helper.js';
export const state = {
  recipe: {},
  Search: {
    query: '',
    result: [],
    resultPerPage: RES_PER_PAGE,
    page: 1,
  },

  bookmarks: [],
};

/**
 * 
 * @param {Object | Object[]} resData Data object containing the data about recipe
 * @returns Object of the data about the recipe
 * 
 */
function createRecipeObject(resData) {
  let { recipe } = resData.data;
  return {
    cookingTime: recipe.cooking_time,
    id: recipe.id,
    imgUrl: recipe.image_url,
    title: recipe.title,
    publisher: recipe.publisher,
    servings: recipe.servings,
    sourceUrl: recipe.source_url,
    ingredients: recipe.ingredients,
    ...(recipe.key && { key: recipe.key }),
  };
}

export async function getRecipe(Id) {
  try {
    const resData = await AJAX(`${ApiLocation}${Id}?key=${MyApiKey}`);
    state.recipe = createRecipeObject(resData);
    console.log(state.recipe);
    if (state.bookmarks.some(x => x.id === Id)) {
      state.recipe.bookmarked = true;
    } else state.recipe.bookmarked = false;
  } catch (err) {
    throw err;
  }
}

export async function loadSearchRecipe(query) {
  try {
    state.Search.query = query;
    const resData = await AJAX(
      `${ApiLocation}?search=${query}&key=${MyApiKey}`
    );

    const { recipes } = resData.data;
    state.Search.result = recipes.map(rec => {
      return {
        id: rec.id,
        imgUrl: rec.image_url,
        title: rec.title,
        publisher: rec.publisher,
        ...(rec.key && { key: rec.key }),
      };
    });

    console.log(recipes);
  } catch (err) {
    throw err;
  }
}

export function getSearchResultsPage(page = state.Search.page) {
  state.Search.page = page;
  const Start = (page - 1) * state.Search.resultPerPage;
  const End = page * state.Search.resultPerPage;
  return state.Search.result.slice(Start, End);
}

export function updateServing(newQuantity) {
  state.recipe.ingredients.forEach(ing => {
    ing.quantity = (ing.quantity * newQuantity) / state.recipe.servings;
  });

  state.recipe.servings = newQuantity;
}

const presistBookmark = function () {
  localStorage.setItem('bookmark', JSON.stringify(state.bookmarks));
};

export function addBookmark(recipe) {
  state.bookmarks.push(recipe);
  if (recipe.id === state.recipe.id) state.recipe.bookmarked = true;
  presistBookmark();
}

export function deleteBookmark(id) {
  const index = state.bookmarks.findIndex(recipe => {
    return recipe.id === id;
  });
  state.bookmarks.splice(index, 1);
  if (id === state.recipe.id) state.recipe.bookmarked = false;

  presistBookmark();
}

function inits() {
  const storage = localStorage.getItem('bookmark');
  if (!storage) return;
  state.bookmarks = JSON.parse(storage);
}

inits();

export async function uploadRecipe(recipeData) {
  try {
    const ingredients = Object.entries(recipeData)
      .filter(entry => entry[0].startsWith('ingredient') && entry[1] !== '')
      .map(ing => {
        const ingArr = ing[1].split(',').map(el => el.trim());
        console.log(ingArr);
        if (ingArr.length !== 3) throw new Error('Invalid ingredient formated');
        const [quantity, unit, description] = ingArr;
        return { quantity: quantity ? +quantity : '', unit, description };
      });
    const recipe = {
      title: recipeData.title,
      source_url: recipeData.sourceUrl,
      image_url: recipeData.image,
      publisher: recipeData.publisher,
      cooking_time: +recipeData.cookingTime,
      servings: +recipeData.servings,
      ingredients: ingredients,
    };
    const data = await AJAX(`${ApiLocation}?key=${MyApiKey}`, recipe);
    state.recipe = createRecipeObject(data);

    console.log(state.recipe);

    addBookmark(state.recipe);
  } catch (err) {
    throw err;
  }
}
