import styles from "./Hero.module.css";

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
          <button className={styles.getStartedButton}>Get Started</button>
          <button className={styles.learnMoreButton}>Learn more</button>
        </div>
      </div>
      <div className={styles.heroImage}>
        <img src="src\assets\hero-image.png" alt="Hero Image" />
      </div>
    </section>
  );
}
export default Hero;
