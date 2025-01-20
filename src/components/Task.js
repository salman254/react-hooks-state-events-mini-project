import React from "react";

function Task({ task, deleteTask }) {
  if (!task) return null; // Prevents undefined task errors

  return (
    <div className="task">
      <span>{task.text}</span>
      <span className="category">{task.category}</span>
      <button className="delete" onClick={() => deleteTask(task.id)}>X</button>
    </div>
  );
}

export default Task;
