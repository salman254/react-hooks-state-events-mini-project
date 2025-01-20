import React from "react";
import Task from "./Task";

function TaskList({ tasks, deleteTask }) {
  return (
    <div className="tasks">
      {tasks.map((task, index) => (
        <Task key={task.id || index} task={task} deleteTask={deleteTask} />
      ))}
    </div>
  );
}

export default TaskList;
