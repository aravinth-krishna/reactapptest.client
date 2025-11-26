import styles from "./HomeFooter.module.css";

function HomeFooter() {
  return (
    <footer className={styles.homeFooter}>
      <h1>Learnit</h1>
      <span>© 2025 Learnit. All rights reserved.</span>
      <div>Socials</div>
    </footer>
  );
}

export default HomeFooter;
