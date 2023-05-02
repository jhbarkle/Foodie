export interface Recipe {
  name: string;
  description: string;
  prepTime: string;
  cookTime: string;
  image: string;
}

export const recipes: Recipe[] = [
  {
    name: 'Sweet Potato Soup',
    description:
      'A healthy dose of cumin plus a good amount of onion and leek keeps things interesting with this Sweet Potato Soup! If leeks are a bit pricey, use more onion instead.',
    prepTime: '10 mins',
    cookTime: '30 mins',
    image: '../../../public/Recipes/Sweet-Potato-Soup.png'
  },
  {
    name: 'Raspberry Jam Oat Bars',
    description:
      'These are deliciously buttery crumble bars that are perfect for any occasion. You’ll love the combination of the sweet fruity jam filling sandwiched between the oatmeal cookie base and the crumbly golden topping.',
    prepTime: '10 mins',
    cookTime: '30 mins',
    image: '../../../public/Recipes/Raspberries-jam-oat-bars_1.png'
  },
  {
    name: 'Chocolate Custard Cake',
    description:
      'Whether you consider this a giant chocolate tart or chocolate custard cake, we will agree it’s one of the most delicious desserts you will ever make. A cross between a chocolate mousse cake and a chocolate Flan Patissier, it’s deeply chocolatey, ultra creamy, yet not overly rich, and shockingly straightforward to make. The perfect finale for any occasion!',
    prepTime: '30 mins',
    cookTime: '1 hr',
    image: '../../../public/Recipes/Chocolate-custard-cake_6.png'
  }
];
