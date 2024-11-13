export type MoodLevel = "Happy" | "Neutral" | "Sad";

export interface MoodEntry {
  date: string;
  mood: MoodLevel;
}

export interface MoodContextType {
  moodData: MoodEntry[];
  addMood: (mood: MoodLevel) => void;
}
