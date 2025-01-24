import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Task from "./Task";
import { toggleComplete, deleteTask, toggleImportant, moveToPlanned, setPriority } from "../features/tasksSlice"; // Ensure setPriority is available in your tasksSlice

const TaskList = ({ filter }) => {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  const handleToggleComplete = (id) => dispatch(toggleComplete(id));
  const handleDeleteTask = (id) => dispatch(deleteTask(id));
  const handleToggleImportant = (id) => dispatch(toggleImportant(id));
  const handleMoveToPlanned = (id) => dispatch(moveToPlanned(id));

  // Define handlesetPriority function
  const handlesetPriority = (id, priority) => {
    dispatch(setPriority({ id, priority })); // Assuming setPriority is an action in your tasksSlice
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === "today") return task.completed;
    if (filter === "important") return task.important;
    if (filter === "planned") return task.planned && !task.completed;
    return true;
  });

  return (
    <div>
      <h1>{filter.charAt(0).toUpperCase() + filter.slice(1)} Tasks</h1>
      {filteredTasks.length === 0 ? (
        <p>No tasks to show</p>
      ) : (
        <div className="row">
          {filteredTasks.map((task) => (
            <Task
              key={task.id}
              task={task}
              onToggleComplete={handleToggleComplete}
              onDelete={handleDeleteTask}
              onToggleImportant={handleToggleImportant}
              onMoveToPlanned={handleMoveToPlanned}
              onsetPriority={handlesetPriority} // Pass down the function
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default TaskList;
