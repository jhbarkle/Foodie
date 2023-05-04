/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import { Recipe } from '../Recipes';
import styles from './RecipeInfoSection.module.scss';

interface RecipeInfoSectionProps {
  recipe: Recipe;
}

const RecipeInfoSection: React.FC<RecipeInfoSectionProps> = ({ recipe }) => {
  return (
    <div className={styles.featured_recipe_container}>
      <h4 className={styles.featured_recipes_title}>Featured Recipes</h4>
      <div className={styles.info_container}>
        <h2 className={styles.recipe_title}>{recipe.name}</h2>
        <section className={styles.prep_time_section}>
          <img src="/clock.png" alt="clock" />
          <p>Prep Time: {recipe.prepTime} </p>
        </section>
        <section className={styles.recipe_description}>
          {recipe.description}
        </section>
      </div>
      <Link className={styles.full_recipe_button} to="/results">
        <button>View Full Recipe</button>
      </Link>
    </div>
  );
};

export default RecipeInfoSection;
