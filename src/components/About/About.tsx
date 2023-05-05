import styles from './About.module.scss';

const About = () => {
  return (
    <>
      <section className={styles.wrapper}>
        <h1>Attribution</h1>
        <section className={styles.icons_container}>
          <h3>Icons Used</h3>
          <a href="https://www.flaticon.com/" target="_blank" rel="noreferrer">
            Flaticon.com
          </a>
        </section>
        <section className={styles.featured_recipe_container}>
          <h3>Featured Recipe Data Source</h3>
          <a
            href="https://www.recipetineats.com/"
            target="_blank"
            rel="noreferrer"
          >
            Recipetineats.com
          </a>
        </section>
      </section>
    </>
  );
};

export default About;
