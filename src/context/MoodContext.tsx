import type { FC } from "react";
import { createContext, useState, type ReactNode } from "react"

import type { MoodEntry, MoodLevel, MoodContextType } from "../types/mood";

export const MoodContext = createContext<MoodContextType | undefined>(
  undefined
);

export const MoodProvider: FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [moodData, setMoodData] = useState<MoodEntry[]>([]);

  const addMood = (mood: MoodLevel) => {
    const newEntry: MoodEntry = { date: new Date().toISOString(), mood };
    setMoodData((prev) => [...prev.slice(-6), newEntry]); // Keep only last 7 entries
  };

  return (
    <MoodContext.Provider value={{ moodData, addMood }}>
      {children}
    </MoodContext.Provider>
  );
};
