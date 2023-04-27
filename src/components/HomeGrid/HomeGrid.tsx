import TipGridSection from '../TipGridSection/TipGridSection';
import WelcomeGridSection from '../WelcomeGridSection/WelcomeGridSection';
import styles from './HomeGrid.module.scss';

const HomeGrid = () => {
  return (
    <>
      <div className={styles.grid_container_top}>
        <section className={styles.grid_item} id={styles.one}>
          <WelcomeGridSection />
        </section>
        <section className={styles.grid_item} id={styles.two}>
          Fridge
        </section>
      </div>
      <div className={styles.grid_container_bottom}>
        <section className={styles.grid_item} id={styles.three}>
          <TipGridSection />
        </section>
        <section className={styles.grid_item} id={styles.four}>
          Recipe
        </section>
        <section className={styles.grid_item} id={styles.five}>
          Recipe Image
        </section>
      </div>
    </>
  );
};

export default HomeGrid;
