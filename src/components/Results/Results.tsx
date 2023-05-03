import { Link } from 'react-router-dom';
import styles from './Results.module.scss';

const Results = () => {
  return (
    <>
      <section className={styles.result_container}>
        <Link className={styles.back_link} to="/">
          <button className={styles.back_button}>
            <img src="../../../public/left-arrow.png" alt="back" />
          </button>
        </Link>
      </section>
      <section className={styles.result_card_container}>
        <div className={styles.result_card}>
          <img src="../../../public/bowl-salad.jpg" alt="" />
          <h2>Salad Bowl</h2>
          <p>
            a;lsdjfawiop;ehfal;ksdjflaksdhjfiashfjklasdhjfjkashfjkashkldjfhajkshfjklasdh
          </p>
          <span>
            <img src="../../../public/clock.png" alt="" />
            <p className={styles.likes_text}>25 Likes</p>
          </span>
          <span>
            <img src="../../../public/clock.png" alt="" />
            <p className={styles.missing_ing_text}></p>
          </span>
          <span>
            <button>View</button>
          </span>
        </div>
      </section>
    </>
  );
};

export default Results;
