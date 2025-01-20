import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import Task from "../components/Task";

test("displays the task text", () => {
  const task = { id: 1, text: "text!", category: "category!" };
  render(<Task task={task} deleteTask={() => {}} />);
  expect(screen.queryByText("text!")).toBeInTheDocument();
});

test("displays the task category", () => {
  const task = { id: 1, text: "text!", category: "category!" };
  render(<Task task={task} deleteTask={() => {}} />);
  expect(screen.queryByText("category!")).toBeInTheDocument();
});

test("is removed from the list when the delete button is clicked", () => {
  const task = { id: 1, text: "Buy rice", category: "Food" };
  const deleteTaskMock = jest.fn(); // Mock function to track deletions

  render(<Task task={task} deleteTask={deleteTaskMock} />);

  const deleteButton = screen.getByText("X"); // Finds the delete button
  fireEvent.click(deleteButton);

  expect(deleteTaskMock).toHaveBeenCalledWith(1); // Ensure the function was called correctly
});
