/* eslint-disable react/prop-types */
import styles from './IngredientCard.module.scss';

interface IngredientCardProps {
  name: string;
}

const IngredientCard: React.FC<IngredientCardProps> = ({ name }) => {
  return (
    <li>
      <section className={styles.card_container}>
        <span className={styles.ingr_name_text_container}>
          <p>{name}</p>
        </span>

        <span className={styles.ingr_delete_button_container}>
          <button className={styles.delete_button}></button>
        </span>
      </section>
    </li>
  );
};

export default IngredientCard;