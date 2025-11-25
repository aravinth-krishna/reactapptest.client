import styles from "./Signup.module.css";

function Signup() {
  return (
    <div className={styles.signup}>
      <h1>Create Your Account</h1>
      <p>
        Join Learnit to optimize your study routines and track your progress.
      </p>
      <form action="">
        <label htmlFor="fullName">Full Name</label>
        <input type="text" placeholder="John Doe" required />
        <label htmlFor="email">Email</label>
        <input type="email" placeholder="john.doe@example.com" required />
        <label htmlFor="password">Password</label>
        <input type="password" placeholder="........" required />
        <label htmlFor="password">Confirm Password</label>
        <input type="password" placeholder="........" required />
        <button>Create Account</button>
      </form>
    </div>
  );
}

export default Signup;
