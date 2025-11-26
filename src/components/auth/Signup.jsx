import styles from "./Signup.module.css";
import { Link } from "react-router-dom";

function Signup() {
  return (
    <div className={styles.signup}>
      <h1>Create Your Account</h1>
      <p>
        Join Learnit to optimize your study routines and track your progress.
      </p>
      <form>
        <label htmlFor="fullName">Full Name</label>
        <input type="text" placeholder="John Doe" required />

        <label htmlFor="email">Email</label>
        <input type="email" placeholder="john.doe@example.com" required />

        <label htmlFor="password">Password</label>
        <input type="password" placeholder="********" required />

        <label htmlFor="confirmPassword">Confirm Password</label>
        <input type="password" placeholder="********" required />

        <button type="submit">Create Account</button>

        <div className={styles.extra}>
          <span>
            Already have an account? <Link to="/auth/login">Sign In</Link>
          </span>
        </div>
      </form>
    </div>
  );
}

export default Signup;
