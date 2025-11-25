import styles from "./Features.module.css";

function Features() {
  return (
    <section className={styles.features}>
      <h2>Product Features</h2>
      <p>
        Smart scheduling, structured modules, and real-time progress
        tracking—all working together to keep your learning consistent and
        effortless.
      </p>
      <div className={styles.featureList}>
        <div className={styles.featureItem}>
          <img src="src/assets/hero-image.png" alt="Personalized Plans" />
          <h3>Personalized Plans</h3>
          <p>Create study plans tailored to your schedule and goals.</p>
        </div>
        <div className={styles.featureItem}>
          <img src="src/assets/hero-image.png" alt="Progress Tracking" />
          <h3>Progress Tracking</h3>
          <p>Monitor your learning progress with detailed analytics.</p>
        </div>
        <div className={styles.featureItem}>
          <img src="src/assets/hero-image.png" alt="Resource Library" />
          <h3>Resource Library</h3>
          <p>Access a vast library of learning materials and resources.</p>
        </div>
      </div>
    </section>
  );
}

export default Features;
