import { useContext, useMemo, type FC } from "react";

import { MoodContext } from "../context/MoodContext";

import styles from "../styles/App.module.css";

const MoodAnalysis: FC = () => {
  const { moodData } = useContext(MoodContext) || {};

  const analysisMessage = useMemo(() => {
    if (!moodData || moodData.length < 2)
      return "Not enough data for analysis.";

    const moodTrend = moodData.map((entry) => entry.mood);
    const scoreMap = { Happy: 3, Neutral: 2, Sad: 1 };
    const scores = moodTrend.map((mood) => scoreMap[mood]);
    const trend = scores[scores.length - 1] - scores[0];

    if (trend > 0)
      return "Your mood has been improving over the past few days!";
    if (trend < 0)
      return "It seems like you’ve been feeling a bit down. Hang in there!";
    return "Your mood has been varying lately. Try finding balance!";
  }, [moodData]);

  return <p className={styles.moodAnalysis}>{analysisMessage}</p>;
};

export default MoodAnalysis;
