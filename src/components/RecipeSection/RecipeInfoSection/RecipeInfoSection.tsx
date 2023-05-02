/* eslint-disable react/prop-types */
import { Recipe } from '../Recipes';
import styles from './RecipeInfoSection.module.scss';

interface RecipeInfoSectionProps {
  recipe: Recipe;
}

const RecipeInfoSection: React.FC<RecipeInfoSectionProps> = ({ recipe }) => {
  return (
    <div className={styles.info_container}>
      <h4 className={styles.featured_recipes_title}>Featured Recipes</h4>
      <div className={styles.info_section}>
        <h2 className={styles.recipe_title}>{recipe.name}</h2>
        <section className={styles.likes_section}>
          <img src="/clock.png" alt="clock" />
          <p>Prep Time: {recipe.prepTime} </p>
        </section>
        <section className={styles.recipe_description}>
          {recipe.description}
        </section>
      </div>
      <button className={styles.full_recipe_button}>View Full Recipe</button>
    </div>
  );
};

export default RecipeInfoSection;
