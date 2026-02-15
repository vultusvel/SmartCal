import styles from "./register.module.scss";
import Link from "next/link";

export default function Register() {
  return (
    <section className={styles.section}>
      <div className={styles.card}>
        <h1 className={styles.title}>Create your SmartCal account</h1>
        <p className={styles.subtitle}>Start tracking your calories today</p>

        <form className={styles.form}>
          <div className={styles.inputGroup}>
            <label htmlFor="name">Name</label>
            <input id="name" name="name" type="text" placeholder="Your name" />
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="email">Email</label>
            <input id="email" name="email" type="email" placeholder="Email" />
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="password">Password</label>
            <input id="password" name="password" type="password" placeholder="Password" />
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input id="confirmPassword" name="confirmPassword" type="password" placeholder="Confirm password" />
          </div>

          <button className={styles.button} type="submit">
            Sign Up
          </button>

          <p className={styles.switchText}>
            Already have an account?{" "}
            <Link href="/login" className={styles.link}>
              Log In
            </Link>
          </p>
        </form>
      </div>
    </section>
  );
}
