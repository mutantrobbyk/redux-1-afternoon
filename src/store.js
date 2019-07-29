import { createStore } from "redux";

const initialState = {
  recipeName: "",
  recipeCategory: "",
  firstName: "",
  lastName: "",
  ingredients: [],
  instructions: [],
  recipes: []
};

export const UPDATE_RECIPE = "UPDATE_RECIPE";
export const UPDATE_CATEGORY = "UPDATE_CATEGORY";
export const FIRST_NAME = "FIRST_NAME";
export const LAST_NAME = "LAST_NAME";
export const INGREDIENTS = "INGREDIENTS";
export const INSTRUCTIONS = "INSTRUCTIONS";
export const RECIPES = "RECIPES";

function reducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case UPDATE_RECIPE:
      return { ...state, recipeName: payload };
    case UPDATE_CATEGORY:
      return { ...state, recipeCategory: payload };
    case FIRST_NAME:
      return { ...state, firstName: payload };
    case LAST_NAME:
      return { ...state, lastName: payload };
    case INGREDIENTS:
      const newIngredients = [...state.ingredients, payload];
      return { ...state, ingredients: newIngredients };
    case INSTRUCTIONS:
      const newInstructions = [...state.instructions, payload];
      return { ...state, instructions: newInstructions };
    case RECIPES:
      const {
        recipeName,
        recipeCategory,
        firstName,
        lastName,
        ingredients,
        instructions
      } = state;
      const recipe = {
        recipeName,
        recipeCategory,
        firstName,
        lastName,
        ingredients,
        instructions
      };
      const newRecipes = [...state.recipes, recipe];
      return { ...state, recipes: newRecipes };
    default:
      return state;
  }
}

export default createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
