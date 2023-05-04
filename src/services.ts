import { SearchedRecipe } from './models/searchedRecipe';
import { getIngredientsFromSessionStorage } from './utils';

// API data
const edamamAppID = '8d81d4cb';
const edamamAppKeys = 'dd41a582d3b8e032fe14c2d4f94d9b81';
const baseURL = 'https://api.edamam.com/api/recipes/v2';

// Formats added ingredients into the expected query
export const createIngredientQuery = (): string => {
  const ingredientsFromLocalStorage = getIngredientsFromSessionStorage();
  let ingQuery = '';
  // If only one ingredient
  if (ingredientsFromLocalStorage.length === 1) {
    return ingredientsFromLocalStorage[0];
  } else {
    // Multiple Ingredients
    ingredientsFromLocalStorage.forEach((ing, index) => {
      ingQuery += ing;
      if (index != ingredientsFromLocalStorage.length - 1) {
        ingQuery += '%2C%20';
      }
    });
  }

  return ingQuery;
};

export const getRecipes = async (): Promise<SearchedRecipe[]> => {
  const query = createIngredientQuery();
  const requestURL = `${baseURL}?type=public&q=${query}&app_id=${edamamAppID}&app_key=${edamamAppKeys}&imageSize=REGULAR`;
  fetch(requestURL).then(async (response) => {
    const data = await response.json();
    const recipes: SearchedRecipe[] = [
      ...data.map((recipe: any) => {
        const shim: SearchedRecipe = {
          label: recipe.label,
          image: recipe.image,
          yield: recipe.yield,
          cuisineType: recipe.cuisineType,
          mealType: recipe.mealType,
          totalTime: recipe.totalTime,
          url: recipe.url
        };

        return shim;
      })
    ];

    return recipes;
  });

  return [];
};
