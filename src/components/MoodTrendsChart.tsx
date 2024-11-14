import { useContext, type FC } from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip } from "recharts";
import { MoodContext } from "../context/MoodContext";

const MoodTrendsChart: FC = () => {
  const { moodData } = useContext(MoodContext) || {};

  const data = moodData?.map((entry) => ({
    date: entry.date.split("T")[0],
    score: entry.mood === "Happy" ? 3 : entry.mood === "Neutral" ? 2 : 1,
  }));

  return (
    <LineChart width={300} height={200} data={data}>
      <XAxis dataKey="date" />
      <YAxis />
      <Tooltip />
      <Line type="monotone" dataKey="score" stroke="#8884d8" />
    </LineChart>
  );
};

export default MoodTrendsChart;
