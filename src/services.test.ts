import { createIngredientQuery } from './services';

describe('Services Test', () => {
  it('Returns expected string when there is more than one ingredients added', () => {
    // Clear Local Storage
    localStorage.clear();

    // Add items to localstorage
    const ingredients = ['chicken', 'milk', 'onions'];
    localStorage.setItem('ingredientList', JSON.stringify(ingredients));

    expect(createIngredientQuery()).toBe('chicken%2C%20milk%2C%20onions');
  });

  it('Returns expected string when there is only one ingredient added ', () => {
    // Clear Local Storage
    localStorage.clear();

    // Add items to localstorage
    const ingredients = ['chicken'];
    localStorage.setItem('ingredientList', JSON.stringify(ingredients));

    expect(createIngredientQuery()).toBe('chicken');
  });
});
