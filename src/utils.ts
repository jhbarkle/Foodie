export const exampleTest = () => {
  return 'Hello World!';
};

export const getIngredientsFromSessionStorage = (): string[] => {
  let ingredients: string | undefined = '';
  if (typeof window !== 'undefined') {
    ingredients = localStorage.getItem('ingredientList') ?? '';
  }

  return ingredients ? JSON.parse(ingredients) : [];
};
