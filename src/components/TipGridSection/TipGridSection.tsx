import styles from './TipGridSection.module.scss';

const TipGridSection = () => {
  return (
    <span className={styles.section_container}>
      <h3>Food Tip of the Day</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur.
      </p>
    </span>
  );
};

export default TipGridSection;
