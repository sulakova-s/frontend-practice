import { useState } from "react";
import moment from "moment";

import WeekHeader from "./WeekHeader.jsx";
import HabitRow from "./HabitRow.jsx";
import HabitModal from "./HabitModal.jsx";

import { getCurrentWeek } from "../../utils/getCurrentWeek.js";

moment.locale("ru");

function CreateTable({ habits, setHabits }) {
  const currentWeek = getCurrentWeek();
  const [selectedHabit, setSelectedHabit] = useState(null);

  function handleToggleDay(habitId, date) {
    const updatedHabits = habits.map((habit) => {
      if (habit.id !== habitId) return habit;

      if (moment(date).isAfter(moment(), "day")) return habit;

      const existingRecord = habit.history.find(
        (record) => record.date === date,
      );

      if (!existingRecord) {
        return {
          ...habit,
          history: [...habit.history, { date, completed: true }],
        };
      }

      let newCompleted;
      if (existingRecord.completed === true) {
        newCompleted = "half";
      } else if (existingRecord.completed === "half") {
        newCompleted = false;
      } else {
        newCompleted = true;
      }

      return {
        ...habit,
        history: habit.history.map((record) =>
          record.date === date
            ? { ...record, completed: newCompleted }
            : record,
        ),
      };
    });

    setHabits(updatedHabits);
  }

  function handleEdit(habitId) {
    const selectedHabit = habits.find((habit) => habit.id === habitId);
    const newName = prompt("New name", selectedHabit.name);

    if (newName && newName.trim()) {
      const updatedHabits = habits.map((habit) => {
        if (habit.id === habitId) {
          return { ...habit, name: newName.trim() };
        }
        return habit;
      });

      setHabits(updatedHabits);
    }
  }

  function handleDelete(habitId) {
    if (window.confirm("Точно удалить эту привычку?")) {
      const updatedHabits = habits.filter((habit) => habit.id !== habitId);

      setHabits(updatedHabits);
    }
  }

  return (
    <>
      <div className="week-navigation">
        <button onClick={() => alert("Предыдущая неделя (скоро будет!)")}>
          ←
        </button>
        <h3>
          {moment().startOf("isoWeek").format("DD.MM").toString()}
          <span className="week-separator"> — </span>
          {moment().endOf("isoWeek").format("DD.MM").toString()}
        </h3>
        <button onClick={() => alert("Следующая неделя (скоро будет!)")}>
          →
        </button>
      </div>
      <table>
        <thead>
          <WeekHeader currentWeek={currentWeek} />
        </thead>
        <tbody>
          {habits.map((habit) => (
            <HabitRow
              key={habit.id}
              habit={habit}
              weekDays={currentWeek}
              onToggleDay={handleToggleDay}
              onEdit={handleEdit}
              onDelete={handleDelete}
              onHabitClick={() => setSelectedHabit(habit)}
            />
          ))}
        </tbody>
      </table>

      {selectedHabit && (
        <HabitModal
          habit={selectedHabit}
          onClose={() => setSelectedHabit(null)}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      )}
    </>
  );
}

export default CreateTable;