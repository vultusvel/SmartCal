import styles from "./TodaySection.module.scss";

export default function TodaySection() {
    return (
        <section className={styles.section}>

            <h2>Hello user!</h2>

            <div className={styles.progress}>
                <p className={styles.progressTitle}>Today's progress</p>
                <div className={styles.progressBar}>
                    <p className={styles.progressValue}>1450</p>
                    <p className={styles.progressValue}>Callories Consumed of 1800 kcal</p>
                </div>

                <div className={styles.progressChart}>
                    <p className={styles.progressValue}>85 g Protein</p>
                    <p className={styles.progressValue}>60 g Carbs</p>
                    <p className={styles.progressValue}>45 g Fat</p>
                </div>
            </div>

            <div className={styles.meals}>
                <p className={styles.mealsTitle}>Today's Meals</p>
                <div className={styles.mealsList}>
                    <div className={styles.mealItem}>
                        <p className={styles.mealName}>Chicken Salad 350 kkcal</p>
                        <p className={styles.mealName}>Oatmeal with Almonds 450 kkcal</p>
                    </div>
                    <button className={styles.addMealButton}>Add New Meal</button>
                </div>
            </div>
        </section>
    );
}