import styles from './FridgeGridSection.module.scss';

const FridgeGridSection = () => {
  return (
    <span className={styles.fridge_container}>
      <input
        className={styles.ingredients_input}
        type="text"
        placeholder="add ingredients here"
      />
      <section className={styles.fridge_ingredients_container}>
        <section className={styles.fridge_data_section}>
          <span className={styles.fridge_data_text}>
            <h2>Fridge</h2>
            <p>Total: 6</p>
          </span>
          <button>Search</button>
        </section>
        <section className={styles.fridge_added_ingredients}>asdf</section>
      </section>
    </span>
  );
};

export default FridgeGridSection;
