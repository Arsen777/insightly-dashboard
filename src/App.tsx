import type { FC } from 'react';

import MoodTracker from "./components/MoodTracker";
import MoodAnalysis from "./components/MoodAnalysis";
import { MoodProvider } from "./context/MoodContext";
import MoodTrendsChart from "./components/MoodTrendsChart";
import DailyInsightsSummary from "./components/DailyInsightsSummary";

import './styles/global.css';
import styles from "./styles/App.module.css";

const App: FC = () => (
  <MoodProvider>
    <div className={styles.container}>
      <h1 className={styles.header}>Welcome to Insightly Dashboard</h1>

      <DailyInsightsSummary />
      <MoodTracker />
      <MoodAnalysis />
      <MoodTrendsChart />
    </div>
  </MoodProvider>
);

export default App;
