import moment from "moment";
moment.locale("ru");

function WeekHeader({ currentWeek }) {
  const today = moment().format("YYYY-MM-DD");

  return (
    <tr>
      <th>Привычка</th>
      {currentWeek.map((date) => (
        <th key={date} className={date === today ? "today" : ""}>
          <div className="date-cell">
            <span className="day-name">{moment(date).format("dd")}</span>
            <span className="day-number">{moment(date).format("DD")}</span>
          </div>
        </th>
      ))}
    </tr>
  );
}

export default WeekHeader;
