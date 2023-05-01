import styles from './WelcomeGridSection.module.scss';

const WelcomeGridSection = () => {
  return (
    <span className={styles.welcome_container}>
      <h3 className={styles.welcome_header_title}>
        Discover new recipes with ingredients you have on hand.
      </h3>
      <p className={styles.welcome_header_description}>
        Start by adding ingredients to your fridge.
      </p>
    </span>
  );
};

export default WelcomeGridSection;
