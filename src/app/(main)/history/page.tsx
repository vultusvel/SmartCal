import styles from "./mealDetails.module.scss";

export default function History() {
  return (
    <section className={styles.section}>
      <div className={styles.card}>
        <h1 className={styles.title}>Meal Details</h1>

        <div className={styles.mealHeader}>
          <p className={styles.mealName}>Chicken Pasta</p>
          <span className={styles.calories}>620 kcal</span>
        </div>

        <div className={styles.ingredients}>
          <p>Pasta — 250 kcal</p>
          <p>Chicken — 220 kcal</p>
          <p>Sauce — 150 kcal</p>
        </div>
      </div>

      <div className={styles.aiCard}>
        <h3>AI Suggestions</h3>
        <p>Try using tomato based sauce for fewer calories.</p>
      </div>

      <div className={styles.comments}>
        <h3>Comments</h3>

        <div className={styles.commentItem}>
          <p>Looks delicious!</p>
        </div>

        <div className={styles.commentForm}>
          <input type="text" placeholder="Add a comment" />
          <button>Send</button>
        </div>
      </div>
    </section>
  );
}
