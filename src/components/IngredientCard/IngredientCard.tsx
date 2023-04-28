/* eslint-disable react/prop-types */
import styles from './IngredientCard.module.scss';

interface IngredientCardProps {
  name: string;
}

const IngredientCard: React.FC<IngredientCardProps> = ({ name }) => {
  return (
    <li>
      <section className={styles.card_container}>
        <p>{name}</p>
        <button className={styles.delete_button}></button>
      </section>
    </li>
  );
};

export default IngredientCard;
