import styles from './RecipeImageSection.module.scss';

interface RecipeImageProps {
  image: string;
  getNextRecipe: (direction: number) => void;
}

const RecipeImageSection: React.FC<RecipeImageProps> = ({
  image,
  getNextRecipe
}) => {
  return (
    <div
      className={styles.recipe_container}
      style={{ backgroundImage: `url(${image})` }}
    >
      <span className={styles.buttons_container}>
        <button
          onClick={() => {
            console.log('Left Button Clicked');
            getNextRecipe(-1);
          }}
          className={styles.left_button}
        ></button>
        <button
          onClick={() => {
            console.log('Right Button Clicked');
            getNextRecipe(1);
          }}
          className={styles.right_button}
        ></button>
      </span>
    </div>
  );
};

export default RecipeImageSection;
