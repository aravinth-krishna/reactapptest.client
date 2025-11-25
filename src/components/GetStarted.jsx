import styles from "./GetStarted.module.css";

function GetStarted() {
  return (
    <section className={styles.getStarted}>
      <h2>Get Started!</h2>
      <p>
        Ready to build your learning habit? <br />
        Let's turn your goals into a clear, achievable plan.
      </p>
      <button>Get Started</button>
    </section>
  );
}

export default GetStarted;
