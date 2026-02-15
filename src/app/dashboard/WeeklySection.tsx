import styles from "./WeeklySection.module.scss";

export default function WeeklySection() {
    return (
        <section className={styles.section}> 
            <h2>Weekly Progress</h2>
            <div className={styles.progressBar}>
                <p className={styles.progressValue}>1450</p>
                <p className={styles.progressValue}>Callories Consumed of 1800 kcal</p>
            </div>
            <div className={styles.aiInsights}>
                <p className={styles.aiInsightsTitle}>AI Insights</p>
                <p className={styles.aiInsightsText}>
                    Based on your progress, we recommend you to eat more protein and less carbs.
                </p>
            </div>
        </section>
    );
}