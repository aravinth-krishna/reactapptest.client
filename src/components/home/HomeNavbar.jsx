import styles from "./HomeNavbar.module.css";

function HomeNavbar() {
  return (
    <nav className={styles.homeNavbar}>
      <h1 className={styles.logo}>Learnit</h1>
      <ul className={styles.center}>
        <li>
          <a href="#about">About us</a>
        </li>
        <li>
          <a href="#learn-more">Learn more</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <ul className={styles.right}>
        <li className={styles.signinButton}>Sign in</li>
        <li className={styles.signupButton}>Sign up</li>
      </ul>
    </nav>
  );
}

export default HomeNavbar;
