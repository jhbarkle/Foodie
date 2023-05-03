import styles from './ResultCard.module.scss';

export interface SearchedRecipe {
  name: string;
  description: string;
  image: string;
  likes: string;
  missedIngredients: [string];
  link: string;
}

interface ResultCardProps {
  recipe?: SearchedRecipe;
}

const ResultCard: React.FC<ResultCardProps> = () => {
  return (
    <>
      <div className={styles.result_card}>
        <div className={styles.recipe_info_container}>
          <img
            className={styles.recipe_image}
            src="../../../public/bowl-salad.jpg"
            alt=""
          />
          <h2 className={styles.recipe_title}>Salad Bowl</h2>
          <p className={styles.recipe_description}>
            a;lsdjfawiop;ehfal;ksdjflaksdhjfiashfjklasdhjfjkashfjkashkldjfhajkshfjklasdh
          </p>
          <span className={styles.likes_container}>
            <img src="../../../public/heart.png" alt="" />
            <p className={styles.likes_text}>251 Likes</p>
          </span>
          <span className={styles.missing_ing_container}>
            <img src="../../../public/food.png" alt="" />
            <p className={styles.missing_ing_text}>55 Missing Ingredients</p>
          </span>
        </div>

        <span className={styles.button_container}>
          <button className={styles.view_recipe_button}>View</button>
        </span>
      </div>
    </>
  );
};

export default ResultCard;
