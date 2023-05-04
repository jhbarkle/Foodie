import { useEffect, useState } from 'react';
import styles from './FridgeGridSection.module.scss';
import IngredientCard from '../IngredientCard/IngredientCard';
import { Link } from 'react-router-dom';
import { getIngredientsFromSessionStorage } from '../../utils';

const FridgeGridSection = () => {
  const [searchIngredient, setSearchIngredient] = useState('');
  const [ingredientList, setIngredientList] = useState(
    getIngredientsFromSessionStorage()
  );
  const [isError, setIsError] = useState({ isError: false, message: '' });

  const isIngredientListEmpty = ingredientList.length === 0;

  const updateList = (event: any) => {
    if (
      event.key === 'Enter' &&
      !ingredientList.includes(event.target.value) &&
      event.target.value.length > 0
    ) {
      const inputIngredientString = event.target.value;
      setIngredientList([...ingredientList, inputIngredientString.trim()]);
      event.target.value = '';
    }
  };

  const removeItem = (name: string) => {
    setIngredientList(
      ingredientList.filter((ingredient) => ingredient !== name)
    );
  };

  useEffect(() => {
    localStorage.setItem('ingredientList', JSON.stringify(ingredientList));
    console.log(
      'From Local Storage: ',
      JSON.parse(localStorage.getItem('ingredientList') ?? '')
    );
  }, [ingredientList]);

  useEffect(() => {
    if (ingredientList.includes(searchIngredient)) {
      setIsError({
        isError: true,
        message: 'Ingredient is already in the list.'
      });
    } else {
      setIsError({ isError: false, message: '' });
    }
  }, [searchIngredient]);

  const onInputChange = (event: any) => {
    setSearchIngredient(event.target.value);
  };

  return (
    <span className={styles.fridge_container}>
      <input
        className={styles.ingredients_input}
        type="text"
        placeholder="add ingredients here"
        name="search"
        onChange={(e) => onInputChange(e)}
        onKeyDown={(e) => updateList(e)}
      />
      <section className={styles.fridge_ingredients_container}>
        <section className={styles.fridge_data_section}>
          <span className={styles.fridge_data_text}>
            <img src="../../../public/fridge.png" alt="fridge" />
            <h2>Fridge |</h2>
            <p>Total: {ingredientList.length}</p>
          </span>
          <Link className={styles.fridge_data_section_button} to="/results">
            <button disabled={isIngredientListEmpty}>Search</button>
          </Link>
        </section>
        <section
          className={
            isError.isError ? styles.error_container : styles.hide_error_section
          }
        >
          <p className={styles.error_text}>{isError.message}</p>
        </section>
        <section className={styles.added_ingredients_section}>
          <ul className={styles.ingredient_list}>
            {ingredientList.map((ingredient) => {
              return (
                <IngredientCard
                  key={ingredient}
                  name={ingredient}
                  removeItem={removeItem}
                />
              );
            })}
          </ul>
        </section>
      </section>
    </span>
  );
};

export default FridgeGridSection;
