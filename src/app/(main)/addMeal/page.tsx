import styles from "./addMeal.module.scss";

export default function AddMeal() {
  return (
    <section className={styles.section}>
      <div className={styles.card}>
        <h1 className={styles.title}>Add New Meal</h1>

        <form className={styles.form}>
          <div className={styles.inputGroup}>
            <label>Meal Name</label>
            <input type="text" placeholder="Chicken Pasta" />
          </div>

          <div className={styles.macroGrid}>
            <div>
              <label>Calories</label>
              <input type="number" placeholder="500" />
            </div>
            <div>
              <label>Protein (g)</label>
              <input type="number" placeholder="40" />
            </div>
            <div>
              <label>Carbs (g)</label>
              <input type="number" placeholder="60" />
            </div>
            <div>
              <label>Fat (g)</label>
              <input type="number" placeholder="20" />
            </div>
          </div>

          <div className={styles.aiSection}>
            <label>Or describe your meal (AI will calculate)</label>
            <textarea placeholder="I ate grilled chicken with rice and salad..." />
          </div>

          <button className={styles.button} type="submit">
            Add Meal
          </button>
        </form>
      </div>
    </section>
  );
}
