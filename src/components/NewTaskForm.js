import React, { useState } from "react";

function NewTaskForm({ onTaskFormSubmit, categories }) {
  const [formData, setFormData] = useState({ text: "", category: categories[0] });

  function handleChange(event) {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (!formData.text.trim()) return; // Prevent empty submissions
    onTaskFormSubmit(formData);
    setFormData({ text: "", category: categories[0] });
  }

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label htmlFor="taskDetails">Details</label>
      <input
        type="text"
        id="taskDetails"
        name="text"
        value={formData.text}
        onChange={handleChange}
      />

      <label htmlFor="taskCategory">Category</label>
      <select id="taskCategory" name="category" value={formData.category} onChange={handleChange}>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>

      <button type="submit">Add task</button>
    </form>
  );
}

export default NewTaskForm;
