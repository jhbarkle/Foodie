import { useState } from 'react';
import styles from './FridgeGridSection.module.scss';
import IngredientCard from '../IngredientCard/IngredientCard';

const FridgeGridSection = () => {
  const [ingredientList] = useState([
    'Chicken',
    'Soy Sauce',
    'Sauce',
    'Chives',
    'Onion',
    'Cheese',
    'Beef',
    'Soy Sauce',
    'Sauce',
    'Chives'
  ]);

  return (
    <span className={styles.fridge_container}>
      <input
        className={styles.ingredients_input}
        type="text"
        placeholder="add ingredients here"
      />
      <section className={styles.fridge_ingredients_container}>
        <section className={styles.fridge_data_section}>
          <span className={styles.fridge_data_text}>
            <img src="../../../public/fridge.png" alt="fridge" />
            <h2>Fridge</h2>
            <p>Total: 6</p>
          </span>
          <button>Search</button>
        </section>
        <section className={styles.added_ingredients_section}>
          <ul className={styles.ingredient_list}>
            {ingredientList.map((ingredient) => {
              return <IngredientCard key={ingredient} name={ingredient} />;
            })}
          </ul>
        </section>
      </section>
    </span>
  );
};

export default FridgeGridSection;
