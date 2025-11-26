import styles from "./LandingPage.module.css";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaGlobe } from "react-icons/fa";
import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <>
      <Hero />
      <Features />
      <Team />
      <GetStarted />
    </>
  );
}

export default LandingPage;

function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroText}>
        <h1>
          Learn Better.
          <br /> Plan Smarter.
        </h1>
        <p>
          Transform your learning goals into a smart personalized weekly <br />{" "}
          plan - automatically generated from your availability.
        </p>
        <div className={styles.buttons}>
          <Link to="/auth/register" className={styles.getStartedButton}>
            Get Started
          </Link>
          <button className={styles.learnMoreButton}>Learn more</button>
        </div>
      </div>
      <div className={styles.heroImage}>
        <img src="src\assets\hero-image.png" alt="Hero Image" />
      </div>
    </section>
  );
}

function Features() {
  return (
    <section id="features" className={styles.features}>
      <h2>Product Features</h2>
      <p>
        Smart scheduling, structured modules, and real-time progress
        tracking—all working together to keep your learning consistent and
        effortless.
      </p>
      <div className={styles.featureList}>
        <div className={styles.featureItem}>
          <img
            src="src/assets/personalized-learning.jpg"
            alt="Personalized Plans"
          />
          <h3>Personalized Plans</h3>
          <p>Create study plans tailored to your schedule and goals.</p>
        </div>
        <div className={styles.featureItem}>
          <img src="src/assets/progress-tracking.jpg" alt="Progress Tracking" />
          <h3>Progress Tracking</h3>
          <p>Monitor your learning progress with detailed analytics.</p>
        </div>
        <div className={styles.featureItem}>
          <img src="src/assets/resource-library.jpg" alt="Resource Library" />
          <h3>Resource Library</h3>
          <p>Access a vast library of learning materials and resources.</p>
        </div>
      </div>
    </section>
  );
}

function Team() {
  return (
    <section id="about-us" className={styles.team}>
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

function GetStarted() {
  return (
    <section id="contact" className={styles.getStarted}>
      <h2>Get Started!</h2>
      <p>
        Ready to build your learning habit? <br />
        Let's turn your goals into a clear, achievable plan.
      </p>
      <button>Get Started</button>
    </section>
  );
}
