export interface Recipe {
  name: string;
  description: string;
  prepTime: string;
  image: string;
  link: string;
}

export const recipes: Recipe[] = [
  {
    name: 'Sweet Potato Soup',
    description:
      'A healthy dose of cumin plus a good amount of onion and leek keeps things interesting with this Sweet Potato Soup! If leeks are a bit pricey, use more onion instead.',
    prepTime: '10 mins',
    image: '/FeaturedRecipes/Sweet-Potato-Soup.png',
    link: 'https://www.recipetineats.com/sweet-potato-soup/'
  },
  {
    name: 'Raspberry Jam Oat Bars',
    description:
      'These are deliciously buttery crumble bars that are perfect for any occasion. You’ll love the combination of the sweet fruity jam filling sandwiched between the oatmeal cookie base and the crumbly golden topping.',
    prepTime: '10 mins',
    image: '/FeaturedRecipes/Raspberries-jam-oat-bars_1.png',
    link: 'https://www.recipetineats.com/easiest-ever-raspberry-jam-bars/'
  },
  {
    name: 'Chocolate Custard Cake',
    description:
      'Whether you consider this a giant chocolate tart or chocolate custard cake, we will agree it’s one of the most delicious desserts you will ever make. A cross between a chocolate mousse cake and a chocolate Flan Patissier, it’s deeply chocolatey, ultra creamy, yet not overly rich, and shockingly straightforward to make. The perfect finale for any occasion!',
    prepTime: '30 mins',
    image: '/FeaturedRecipes/Chocolate-custard-cake_6.png',
    link: 'https://www.recipetineats.com/chocolate-custard-cake/'
  },
  {
    name: 'Mini Pavlovas',
    description:
      'Mini Pavlovas are the individual version of traditional Pavlova. A delicate crisp meringue shell with fluffy marshmallow-y insides, they’re adorable, easier to make, and a lot less messy to serve! BONUS: you get the whole thing to yourself. ',
    prepTime: '25 mins',
    image: '/FeaturedRecipes/Mini-Pavs-final_9.png',
    link: 'https://www.recipetineats.com/mini-pavlovas/'
  },
  {
    name: 'Hazelnut Olive Oil Cake',
    description:
      'This is a gloriously rustic olive oil cake that’s both dairy-free and gluten-free, making it ideal for any gathering since just about everyone can enjoy it! I really love that hazelnut is the front-and-centre flavour, with the olive oil whispering quietly in the background.',
    prepTime: '15 mins',
    image: '/FeaturedRecipes/Olive-oil-hazelnut-cake_7.png',
    link: 'https://www.recipetineats.com/charlottes-hazelnut-olive-oil-cake/'
  },
  {
    name: 'Red Vietnamese Fried Rice',
    description:
      'This is the fried rice version of traditional Vietnamese red rice, a plain tomato rice made by steaming in a pot. I added ham, peas and egg to turn it into a quick and easy meal. Frying up the tomato rice with garlic adds extra flavour which is on point!',
    prepTime: '8 mins',
    image: '/FeaturedRecipes/Red-Vietnamese-Fried-Rice_3.png',
    link: 'https://www.recipetineats.com/red-vietnamese-fried-rice/'
  },
  {
    name: 'Special Burger Sauce',
    description:
      'A great homemade burger sauce is an easy win to shift a big juicy burger from yum territory to holy-crapola-this-is-amazing land! Besides, when a burger sauce recipe is this easy and so much better.',
    prepTime: '5 mins',
    image: '/FeaturedRecipes/Special-Burger-Sauce_1.png',
    link: 'https://www.recipetineats.com/special-burger-sauce/'
  },
  {
    name: 'Tomato Salad',
    description:
      'The secret to my best tomato salad lies not in using costly nor an extensive list of ingredients, but in how it’s constructed. Rather than shaking up a dressing, thick wedges of tomato are sprinkled with minced garlic, shallots and salt, drizzled with olive oil and vinegar then gently tossed before finishing with a sprinkle of basil.',
    prepTime: '10 mins',
    image: '/FeaturedRecipes/The-Best-Tomato-Salad_0.png',
    link: 'https://www.recipetineats.com/my-favourite-tomato-salad/'
  }
];
