import { useContext, useState, type FC } from "react";

import { MoodContext } from "../context/MoodContext";
import type { MoodLevel } from "../types/mood";

import styles from "../styles/App.module.css";

const MoodTracker: FC = () => {
  const { addMood } = useContext(MoodContext) || {};
  const [selectedMood, setSelectedMood] = useState<MoodLevel>("Happy");

  const handleMoodSubmit = () => {
    if (addMood) {
      addMood(selectedMood);
    }
  };

  return (
    <div className={styles.moodTracker}>
      <h2>Log Mood</h2>
      <select onChange={(e) => setSelectedMood(e.target.value as MoodLevel)}>
        <option value="Happy">Happy</option>
        <option value="Neutral">Neutral</option>
        <option value="Sad">Sad</option>
      </select>
      <button
        type="button"
        onClick={handleMoodSubmit}
        className={styles.button}
      >
        Save Mood
      </button>
    </div>
  );
};

export default MoodTracker;
