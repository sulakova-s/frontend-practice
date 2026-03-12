import moment from "moment";

export function getCurrentWeek() {
  const currentWeek = [];
  const monday = moment().startOf("isoWeek");

  for (let i = 0; i < 7; i++) {
    const day = monday.clone().add(i, "days");
    currentWeek.push(day.format("YYYY-MM-DD"));
  }

  return currentWeek;
}
