import styles from "./TodaySection.module.scss";
import Link from "next/link";

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
                <div className={styles.mealInfo}>
                    <p className={styles.mealsTitle}>Today's Meals</p>
                    <Link href="/history" className={styles.mealsMore}>
                        More:
                        <svg className={styles.arrowIcon}
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            aria-hidden
                        >
                            <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                    </Link>
                </div>
                <div className={styles.mealsList}>
                    <div className={styles.mealItem}>
                        <p className={styles.mealName}>Chicken Salad 350 kkcal</p>
                        <p className={styles.mealName}>Oatmeal with Almonds 450 kkcal</p>
                    </div>
                    <Link href="/addMeal" className={styles.addMealButton}>Add New Meal</Link>
                </div>
            </div>
        </section>
    );
}
