import "./HabitModal.css";

function HabitModal({ habit, onClose, onEdit, onDelete }) {
  if (!habit) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h2>{habit.name}</h2>
        <div className="modal-buttons">
          <button
            className="modal-button edit"
            onClick={() => {
              onEdit(habit.id);
              onClose();
            }}
          >
            ✏️ Изменить
          </button>
          <button
            className="modal-button delete"
            onClick={() => {
              onDelete(habit.id);
              onClose();
            }}
          >
            🗑️ Удалить
          </button>
        </div>
      </div>
    </div>
  );
}

export default HabitModal;