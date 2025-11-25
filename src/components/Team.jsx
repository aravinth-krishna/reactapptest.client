import styles from "./Team.module.css";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaGlobe } from "react-icons/fa";

function Team() {
  return (
    <section className={styles.team}>
      <h2>Our Team</h2>
      <p>Meet our talented team of developers</p>
      <div className={styles.teamList}>
        <div className={styles.teamItem}>
          <img src="src/assets/hero-image.png" alt="Personalized Plans" />
          <h3>Aravinth Krishna R</h3>
          <h4>Full Stack Developer</h4>
          <Socials />
        </div>
        <div className={styles.teamItem}>
          <img src="src/assets/hero-image.png" alt="Progress Tracking" />
          <h3>Selvavignesh G R</h3>
          <h4>Full Stack Developer</h4>
          <Socials />
        </div>
        <div className={styles.teamItem}>
          <img src="src/assets/hero-image.png" alt="Resource Library" />
          <h3>Karolina A</h3>
          <h4>Full Stack Developer</h4>
          <Socials />
        </div>
        <div className={styles.teamItem}>
          <img src="src/assets/hero-image.png" alt="Resource Library" />
          <h3>Loga Priya S</h3>
          <h4>Full Stack Developer</h4>
          <Socials />
        </div>
      </div>
    </section>
  );
}

function Socials() {
  return (
    <div className={styles.socials}>
      <FaGithub />
      <FaLinkedin />
      <FaGlobe />
    </div>
  );
}

export default Team;
