import styles from "./Signin.module.css";
import { Link } from "react-router-dom";

function Signin() {
  return (
    <div className={styles.signin}>
      <h1>Log In</h1>
      <p>Enter your credentials to access your account.</p>
      <form>
        <label htmlFor="email">Email</label>
        <input type="email" placeholder="john.doe@example.com" required />

        <label htmlFor="password">Password</label>
        <input type="password" placeholder="********" required />

        <button type="submit">Login</button>

        <div className={styles.extra}>
          <Link to="/auth/forgot-password">Forgot Password?</Link>
          <span>
            Don't have an account? <Link to="/auth/register">Sign Up</Link>
          </span>
        </div>
      </form>
    </div>
  );
}

export default Signin;
