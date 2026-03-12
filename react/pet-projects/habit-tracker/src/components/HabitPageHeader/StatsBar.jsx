import moment from "moment";

import { getCurrentWeek } from "../../utils/getCurrentWeek.js";

function StatsBar({ habits }) {
  let totalScore = 0; // сумма всех очков (1 за полную, 0.5 за половинку)
  let totalPossible = 0; // максимально возможное количество очков
  let bestHabit = "";
  let worstHabit = "";

  const habitStats = [];
  const now = moment().endOf("day");
  const weekDays = getCurrentWeek();

  habits.forEach((habit) => {
    let habitScore = 0;
    let habitPossible = 0;

    weekDays.forEach((day) => {
      if (moment(day).isSameOrBefore(now)) {
        habitPossible++;
        totalPossible++;

        const record = habit.history.find((r) => r.date === day);

        if (record?.completed === true) {
          habitScore += 1;
          totalScore += 1;
        } else if (record?.completed === "half") {
          habitScore += 0.5;
          totalScore += 0.5;
        }
        // false или undefined = 0 очков
      }
    });

    const percentage =
      habitPossible > 0 ? (habitScore / habitPossible) * 100 : 0;

    habitStats.push({
      name: habit.name,
      score: habitScore,
      possible: habitPossible,
      percentage: percentage,
    });
  });

  // Поиск лучшей и худшей привычки
  if (habitStats.length > 0) {
    const maxPercentage = Math.max(...habitStats.map((h) => h.percentage));
    const minPercentage = Math.min(...habitStats.map((h) => h.percentage));

    const bestHabits = habitStats.filter((h) => h.percentage === maxPercentage);
    const worstHabits = habitStats.filter(
      (h) => h.percentage === minPercentage,
    );

    if (maxPercentage === 0) {
      bestHabit = "-";
      worstHabit = habitStats.map((h) => h.name).join(", ") + " (0%)";
    } else if (maxPercentage === minPercentage) {
      bestHabit =
        habitStats.map((h) => h.name).join(", ") +
        ` (${maxPercentage.toFixed(1)}%)`;
      worstHabit = "-";
    } else {
      bestHabit =
        bestHabits.length === 1
          ? `${bestHabits[0].name} (${maxPercentage.toFixed(1)}%)`
          : bestHabits.map((h) => h.name).join(", ") +
            ` (${maxPercentage.toFixed(1)}%)`;

      worstHabit =
        worstHabits.length === 1
          ? `${worstHabits[0].name} (${minPercentage.toFixed(1)}%)`
          : worstHabits.map((h) => h.name).join(", ") +
            ` (${minPercentage.toFixed(1)}%)`;
    }
  }

  const overallPercentage =
    totalPossible > 0 ? Math.round((totalScore / totalPossible) * 100) : 0;

  return (
    <>
      <h3>Данные за неделю</h3>
      <p>Общий процент выполнения: {overallPercentage}%</p>
      <p>Лучшая привычка: {bestHabit}</p>
      <p>Худшая привычка: {worstHabit}</p>
    </>
  );
}

export default StatsBar;
