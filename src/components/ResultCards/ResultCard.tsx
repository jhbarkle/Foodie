import { Link } from 'react-router-dom';
import { SearchedRecipe } from '../../models/searchedRecipe';
import styles from './ResultCard.module.scss';

interface ResultCardProps {
  recipe: SearchedRecipe;
}

const ResultCard: React.FC<ResultCardProps> = ({ recipe }) => {
  const truncateRecipeName = (name: string) => {
    return name.length > 40 ? name.slice(0, 40) + '...' : name;
  };

  const capitalizeFirstLetter = (name: string) => {
    return name.charAt(0).toUpperCase() + name.slice(1);
  };

  return (
    <>
      <div className={styles.result_card}>
        <div className={styles.recipe_info_container}>
          <img className={styles.recipe_image} src={recipe.image} alt="" />
          <h2 className={styles.recipe_title}>
            {truncateRecipeName(recipe.label)}
          </h2>
          <span className={styles.cuisine_type_container}>
            <img src="../../../public/cuisine.png" alt="cuisine" />
            <p className={styles.cuisine_type_text}>
              Cuisine Type: {capitalizeFirstLetter(recipe.cuisineType[0])}
            </p>
          </span>
          <span className={styles.yield_container}>
            <img src="/measuring-cup.png" alt="measuring cup" />
            <p className={styles.likes_text}>Yield: {recipe.yield}</p>
          </span>
          <span className={styles.cook_time_container}>
            <img src="/clock.png" alt="clock" />
            <p className={styles.missing_ing_text}>
              Cook Time: {recipe.totalTime} mins
            </p>
          </span>
        </div>
        <Link className={styles.link_styles} to={recipe.url} target="_blank">
          <span className={styles.button_container}>
            <button className={styles.view_recipe_button}>View</button>
          </span>
        </Link>
      </div>
    </>
  );
};

export default ResultCard;
