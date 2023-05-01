import styles from './RecipeInfoSection.module.scss';

const RecipeInfoSection = () => {
  return (
    <div className={styles.info_container}>
      <button className={styles.full_recipe_button}>View Full Recipe</button>
      <div className={styles.info_section}>
        <h2 className={styles.recipe_title}>Roasted Pineapple Pizza</h2>
        <section className={styles.likes_section}>
          <img src="../../../public/heart.png" alt="heart" />
          <p>15 Likes</p>
        </section>
        <section className={styles.recipe_description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </section>
      </div>
    </div>
  );
};

export default RecipeInfoSection;
