import styles from "./Navbar.module.css";
import { CgProfile } from "react-icons/cg";

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>Learnit</div>
      <ul className={styles.navLinks}>
        <li>
          <a href="/course">Courses</a>
        </li>
        <li>
          <a href="/schedule">Schedule</a>
        </li>
        <li>
          <a href="/progress">Progress</a>
        </li>
        <li>
          <a href="/profile">Profile</a>
        </li>
      </ul>
      <div className={styles.profileIcon}>
        <CgProfile />
      </div>
    </nav>
  );
}

export default Navbar;
