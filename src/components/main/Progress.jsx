import styles from "./Progress.module.css";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  BarChart,
  Bar,
} from "recharts";
import { useState } from "react";

// Dummy weekly study data
const weeklyData = [
  { day: "Mon", scheduled: 2, completed: 2 },
  { day: "Tue", scheduled: 3, completed: 2.5 },
  { day: "Wed", scheduled: 2, completed: 1 },
  { day: "Thu", scheduled: 2.5, completed: 2 },
  { day: "Fri", scheduled: 2, completed: 2 },
  { day: "Sat", scheduled: 4, completed: 3.5 },
  { day: "Sun", scheduled: 1, completed: 0.5 },
];

const courses = [
  { name: "React Basics", progress: 65 },
  { name: "DSA Foundations", progress: 40 },
  { name: "Machine Learning Intro", progress: 20 },
  { name: "DBMS Essentials", progress: 80 },
];

const heatmap = Array.from({ length: 60 }, () => Math.floor(Math.random() * 4));

function Progress() {
  const [currentStreak] = useState(12);
  const [longestStreak] = useState(21);

  const totalScheduled = weeklyData.reduce((a, b) => a + b.scheduled, 0);
  const totalCompleted = weeklyData.reduce((a, b) => a + b.completed, 0);
  const completionRate = Math.round((totalCompleted / totalScheduled) * 100);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Progress Overview</h1>

      {/* METRICS ROW */}
      <div className={styles.metricsRow}>
        <div className={styles.metric}>
          <span>🔥 Current Streak</span>
          <strong>{currentStreak} days</strong>
        </div>

        <div className={styles.metric}>
          <span>🏆 Longest Streak</span>
          <strong>{longestStreak} days</strong>
        </div>

        <div className={styles.metric}>
          <span>📅 Scheduled Hours</span>
          <strong>{totalScheduled} hrs</strong>
        </div>

        <div className={styles.metric}>
          <span>⏳ Completed Hours</span>
          <strong>{totalCompleted} hrs</strong>
        </div>

        <div className={styles.metric}>
          <span>📊 Completion Rate</span>
          <strong>{completionRate}%</strong>
        </div>

        <div className={styles.metric}>
          <span>⚡ Efficiency</span>
          <strong>{Math.min(100, Math.round(completionRate * 1.1))}%</strong>
        </div>
      </div>

      {/* OVERALL PROGRESS */}
      <div className={styles.section}>
        <h2>Overall Progress</h2>
        <div className={styles.progressBarOuter}>
          <div
            className={styles.progressBarInner}
            style={{ width: "58%" }}
          ></div>
        </div>
        <p className={styles.progressLabel}>58% Completed</p>
      </div>

      {/* CHARTS SIDE BY SIDE */}
      <div className={styles.chartsRow}>
        {/* Bar Chart */}
        <div className={styles.chartBox}>
          <h2>Scheduled vs Completed</h2>
          <ResponsiveContainer width="100%" height={240}>
            <BarChart data={weeklyData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="day" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="scheduled" fill="#007bff" />
              <Bar dataKey="completed" fill="#00b894" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Line Chart */}
        <div className={styles.chartBox}>
          <h2>Weekly Trend</h2>
          <ResponsiveContainer width="100%" height={240}>
            <LineChart data={weeklyData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="day" />
              <YAxis />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="completed"
                stroke="#00b894"
                strokeWidth={2}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* HEATMAP */}
      <div className={styles.section}>
        <h2>Study Activity Heatmap</h2>
        <div className={styles.heatmap}>
          {heatmap.map((val, i) => (
            <div
              key={i}
              className={styles.heatBox}
              style={{
                background:
                  val === 0
                    ? "#e5e5e5"
                    : val === 1
                    ? "#b6e0ff"
                    : val === 2
                    ? "#64c0f0"
                    : "#008dd0",
              }}
            ></div>
          ))}
        </div>
      </div>

      {/* COURSE PROGRESS */}
      <div className={styles.section}>
        <h2>Course Progress</h2>
        <div className={styles.courseGrid}>
          {courses.map((c, i) => (
            <div className={styles.courseCard} key={i}>
              <span className={styles.courseName}>{c.name}</span>
              <div className={styles.courseProgressBarOuter}>
                <div
                  className={styles.courseProgressBarInner}
                  style={{ width: `${c.progress}%` }}
                ></div>
              </div>
              <span className={styles.coursePercent}>{c.progress}%</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Progress;
