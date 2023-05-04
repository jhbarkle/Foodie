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
  console.log('Query: ', query);

  let recipesReturned: SearchedRecipe[] = [];

  const requestURL = `${baseURL}?type=public&q=${query}&app_id=${edamamAppID}&app_key=${edamamAppKeys}&imageSize=REGULAR`;
  await fetch(requestURL)
    .then(async (response) => {
      const data = await response.json();
      console.log('Data', data);
      const recipes: SearchedRecipe[] = [
        ...data.hits.map((hit: any) => {
          const shim: SearchedRecipe = {
            label: hit.recipe.label,
            image: hit.recipe.image,
            yield: hit.recipe.yield,
            cuisineType: hit.recipe.cuisineType,
            mealType: hit.recipe.mealType,
            totalTime: hit.recipe.totalTime,
            url: hit.recipe.url
          };
          return shim;
        })
      ];

      recipesReturned = recipes;
    })
    .catch((error) => {
      console.log('Error', error);
    });
  return recipesReturned;
};
