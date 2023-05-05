import styles from './Navbar.module.scss';

const Navbar = () => {
  return (
    <>
      <header>
        <nav className={styles.primary_nav}>
          <img src="../../../public/fridge.png" alt="fridge" />
          <a className={styles.logo_text} href="/">
            Foodie
          </a>
          <a id={styles.about_link} href="/about">
            About
          </a>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
