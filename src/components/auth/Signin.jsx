import styles from "./Signin.module.css";

function Signin() {
  return (
    <div className={styles.signin}>
      <h1>Log In</h1>
      <p>Enter your credentials to sign in.</p>
      <form action="">
        <label htmlFor="email">Email</label>
        <input type="email" placeholder="john.doe@example.com" required />
        <label htmlFor="password">Password</label>
        <input type="password" placeholder="........" required />
        <button>Login</button>
        <a href="#">Forgot Password?</a>
      </form>
    </div>
  );
}

export default Signin;
