import styles from './RecipeImageSection.module.scss';

/* eslint-disable react/prop-types */
interface RecipeImageProps {
  image: string;
}

const RecipeImageSection: React.FC<RecipeImageProps> = ({ image }) => {
  return (
    <div
      className={styles.recipe_container}
      style={{ backgroundImage: `url(${image})` }}
    >
      <span className={styles.buttons_container}>
        <h5>browse recipes</h5>
        <button className={styles.left_button}></button>
        <button className={styles.right_button}></button>
      </span>
    </div>
  );
};

export default RecipeImageSection;
