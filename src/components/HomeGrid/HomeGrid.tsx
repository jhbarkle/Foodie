import { useEffect, useState } from 'react';
import FridgeGridSection from '../FridgeGridSection/FridgeGridSection';
import RecipeImageSection from '../RecipeSection/RecipeImageSection/RecipeImageSection';
import RecipeInfoSection from '../RecipeSection/RecipeInfoSection/RecipeInfoSection';
import { recipes } from '../RecipeSection/Recipes';
import TipGridSection from '../TipGridSection/TipGridSection';
import WelcomeGridSection from '../WelcomeGridSection/WelcomeGridSection';
import styles from './HomeGrid.module.scss';

const HomeGrid = () => {
  const [displayedRecipeIndex, setDisplayedRecipedIndex] = useState(0);
  const [displayedRecipe, setDisplayedRecipe] = useState(recipes[0]);

  useEffect(() => {
    setDisplayedRecipe(recipes[displayedRecipeIndex]);
  }, [displayedRecipeIndex]);

  const getNextRecipe = (direction: number) => {
    console.log('Expected Index Value: ', displayedRecipeIndex + direction);
    if (displayedRecipeIndex + direction >= recipes.length) {
      setDisplayedRecipedIndex(0);
    } else if (displayedRecipeIndex + direction < 0) {
      setDisplayedRecipedIndex(recipes.length - 1);
    } else {
      setDisplayedRecipedIndex(displayedRecipeIndex + direction);
    }
  };

  return (
    <>
      <div className={styles.grid_container_top}>
        <section className={styles.grid_item} id={styles.one}>
          <WelcomeGridSection />
        </section>
        <section className={styles.grid_item} id={styles.two}>
          <FridgeGridSection />
        </section>
      </div>
      <div className={styles.grid_container_bottom}>
        <section className={styles.grid_item} id={styles.three}>
          <TipGridSection />
        </section>
        <section className={styles.grid_item} id={styles.four}>
          <RecipeInfoSection recipe={displayedRecipe} />
        </section>
        <section className={styles.grid_item} id={styles.five}>
          <RecipeImageSection
            image={displayedRecipe.image}
            getNextRecipe={getNextRecipe}
          />
        </section>
      </div>
    </>
  );
};

export default HomeGrid;
