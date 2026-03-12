import moment from "moment";
import CreateTable from "./CreateTable";

import "./HabitProgressTable.css";

moment.locale("ru");

function HabitProgressTable({ habits, setHabits }) {
  return <CreateTable habits={habits} setHabits={setHabits} />;
}

export default HabitProgressTable;
