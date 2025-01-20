import React, { useState } from 'react';
import CategoryFilter from './CategoryFilter'; // ✅ Correct path
import TaskList from './TaskList'; // ✅ Correct path
import NewTaskForm from './NewTaskForm'; // ✅ Correct path
import { CATEGORIES, TASKS } from '../data'; // Import initial data

function App() {
  const [tasks, setTasks] = useState(TASKS);
  const [selectedCategory, setSelectedCategory] = useState('All');

  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  const addTask = (newTask) => {
    setTasks([...tasks, { ...newTask, id: tasks.length + 1 }]);
  };

  const filteredTasks =
    selectedCategory === 'All'
      ? tasks
      : tasks.filter((task) => task.category === selectedCategory);

  return (
    <div className="app">
      <h1>Task List</h1>
      <CategoryFilter
        categories={CATEGORIES}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <TaskList tasks={filteredTasks} deleteTask={deleteTask} />
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={addTask} />
    </div>
  );
}

export default App;
