import styles from "./login.module.scss";
import Link from "next/link";

export default function Login() {
  return (
    <section className={styles.section}>
      <div className={styles.card}>
        <h1 className={styles.title}>Welcome to SmartCal</h1>
        <p className={styles.subtitle}>Your calorie tracker</p>

        <form className={styles.form}>
          <div className={styles.inputGroup}>
            <label htmlFor="email">Email</label>
            <input id="email" name="email" type="email" placeholder="Email" />
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="password">Password</label>
            <input id="password" name="password" type="password" />
          </div>

          <button className={styles.button} type="submit">
            Log In
          </button>

          <p className={styles.switchText}>
            Don't have an account?{" "}
            <Link href="/register" className={styles.link}>
              Sign Up
            </Link>
          </p>
        </form>
      </div>
    </section>
  );
}
