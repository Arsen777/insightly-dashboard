import { useContext, useMemo, type FC } from "react";
import { MoodContext } from "../context/MoodContext";

import styles from "../styles/App.module.css";

const DailyInsightsSummary: FC = () => {
  const { moodData } = useContext(MoodContext) || {};

  const tasksCompleted = useMemo(() => Math.floor(Math.random() * 10), []);
  const moodScore = useMemo(() => {
    if (!moodData || moodData.length === 0) return 0;

    const scoreMap = { Happy: 3, Neutral: 2, Sad: 1 };
    const totalScore = moodData.reduce(
      (acc, entry) => acc + scoreMap[entry.mood],
      0
    );

    return (totalScore / moodData.length).toFixed(1);
  }, [moodData]);

  return (
    <div className={styles.card}>
      <h2 className={styles.cardTitle}>Daily Insights</h2>
      <p className={styles.cardTitle}>Tasks Completed: {tasksCompleted}</p>
      <p className={styles.cardTitle}>Mood Score: {moodScore}</p>
    </div>
  );
};

export default DailyInsightsSummary;
