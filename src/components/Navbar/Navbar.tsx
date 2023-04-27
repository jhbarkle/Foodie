import styles from './Navbar.module.scss';

const Navbar = () => {
  return (
    <>
      <header>
        <nav className={styles.primary_nav}>
          <a className={styles.logo_text} href="/">
            Foodie
          </a>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
