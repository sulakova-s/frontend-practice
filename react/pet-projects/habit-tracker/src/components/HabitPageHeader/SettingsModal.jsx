function SettingsModal({
  showSettings,
  deleteAllHabits,
  showStats,
  setshowStats,
}) {
  return (
    <>
      {showSettings && (
        <div>
          <button onClick={deleteAllHabits} className="help-button">
            🗑️ Сбросить все привычки
          </button>
          <button
            onClick={() => setshowStats(!showStats)}
            className="help-button"
          >
            📊 Показать статистику
          </button>
        </div>
      )}
    </>
  );
}

export default SettingsModal;
