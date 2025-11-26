import styles from "./Navbar.module.css";
import { CgProfile } from "react-icons/cg";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>Learnit</div>

      <ul className={styles.navLinks}>
        <li>
          <Link to="/app/course">Courses</Link>
        </li>
        <li>
          <Link to="/app/schedule">Schedule</Link>
        </li>
        <li>
          <Link to="/app/progress">Progress</Link>
        </li>
        <li>
          <Link to="/app/profile">Profile</Link>
        </li>
      </ul>

      <button className={styles.profileButton}>
        <CgProfile size={26} />
      </button>
    </nav>
  );
}

export default Navbar;
