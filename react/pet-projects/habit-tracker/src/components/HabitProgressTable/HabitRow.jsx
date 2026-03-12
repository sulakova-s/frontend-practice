import moment from "moment";
import WeekHeader from "./WeekHeader.jsx";

moment.locale("ru");

function HabitRow({ habit, weekDays, onToggleDay, onHabitClick }) {
  const statusClasses = {
    true: "completed",
    half: "half",
    false: "",
    undefined: "",
  };

  return (
    <tr>
      <td onClick={onHabitClick}>{habit.name}</td>
      {weekDays.map((day, index) => {
        const dayRecord = habit.history.find((record) => record.date === day);
        return (
          <td
            key={index}
            onClick={() => onToggleDay(habit.id, day)}
            style={{ cursor: "pointer" }}
            className={statusClasses[dayRecord?.completed]}
          >
            {}
          </td>
        );
      })}
    </tr>
  );
}

export default HabitRow;
