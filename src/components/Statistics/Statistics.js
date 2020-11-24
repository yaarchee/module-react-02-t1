import React from "react";
import styles from "./Statistics.module.css";

export default function Statistic({ statistics, total, positivePercentage }) {
  return (
    <ul>
      {statistics.map((stat) => (
        <li className={styles.statisticItem}>{stat.join(" ")}</li>
      ))}
      <li className={styles.statisticItem}>Total: {total}</li>
      <li className={styles.statisticItem}>
        Positive FeedBack: {positivePercentage}%
      </li>
    </ul>
  );
}
