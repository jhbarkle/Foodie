import { getIngredientsFromSessionStorage } from './utils';

describe('Utils Test', () => {
  it('should return items added to localStorage', () => {
    // Clear Local Storage
    localStorage.clear();

    // Add items to localstorage
    const ingredients = ['chicken', 'milk', 'onions'];
    localStorage.setItem('ingredientList', JSON.stringify(ingredients));

    expect(getIngredientsFromSessionStorage()).toStrictEqual([
      'chicken',
      'milk',
      'onions'
    ]);
  });
});
