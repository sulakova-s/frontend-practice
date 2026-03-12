import { useState, useEffect } from "react";

import HabitPageHeader from "./HabitPageHeader/HabitPageHeader";
import HabitProgressTable from "./HabitProgressTable/HabitProgressTable";

function HabitDashboard() {
  const [habits, setHabits] = useState(() => {
    const saved = localStorage.getItem("habits");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("habits", JSON.stringify(habits));
  }, [habits]);

  return (
    <>
      <HabitPageHeader habits={habits} setHabits={setHabits} />
      <HabitProgressTable habits={habits} setHabits={setHabits} />
    </>
  );
}

export default HabitDashboard;
