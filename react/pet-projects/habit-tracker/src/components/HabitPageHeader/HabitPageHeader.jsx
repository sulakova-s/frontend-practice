import { useState } from "react";

import StatsBar from "./StatsBar";
import SettingsModal from "./SettingsModal";

import { createNewHabit } from "../../utils/createNewHabit.js";
import "./HabitPageHeader.css";

function HabitPageHeader({ habits, setHabits }) {
  const [inputText, setInputText] = useState("");
  const [showSettings, setShowSettings] = useState(false);
  const [showStats, setshowStats] = useState(false);

  function saveInputText(event) {
    setInputText(event.target.value);
  }

  function AddHabit() {
    if (!inputText.trim()) {
      alert("Введите название привычки!");
    } else {
      setHabits([...habits, createNewHabit(inputText)]);
      setInputText("");
    }
  }

  function DeleteAllHabits() {
    if (habits.length > 0 && window.confirm("Точно удалить все привычки?")) {
      setHabits([]);
    }
  }

  function addMessageOnEnter(event) {
    if (event.key === "Enter") {
      AddHabit();
    } else if (event.key === "Escape") {
      setInputText("");
    }
  }

  return (
    <div>
      <h1>Мой трекер привычек</h1>

      <div className="header">
        <input
          placeholder="Добавить новую привычку.."
          size="45"
          className="habbit-input"
          onKeyDown={addMessageOnEnter}
          value={inputText}
          onChange={saveInputText}
        />

        <button onClick={() => AddHabit()} className="add-button">
          Добавить
        </button>
        <button
          onClick={() => setShowSettings(!showSettings)}
          className="add-button"
        >
          ⚙️
        </button>
      </div>

      <SettingsModal
        showSettings={showSettings}
        deleteAllHabits={DeleteAllHabits}
        showStats={showStats}
        setshowStats={setshowStats}
      />

      {showStats && <StatsBar habits={habits} />}
    </div>
  );
}

export default HabitPageHeader;
