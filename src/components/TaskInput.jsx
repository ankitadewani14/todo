import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../features/tasksSlice";

const TaskInput = () => {
  const [taskText, setTaskText] = useState(""); // Task input state
  const [priority, setPriority] = useState("Low"); // Task priority state
  const [category, setCategory] = useState("Indoor"); // Task category (Indoor/Outdoor)
  const [location, setLocation] = useState(""); // Location state (for outdoor tasks)
  const dispatch = useDispatch();

  const handleAddTask = () => {
    if (taskText.trim()) {
      const newTask = {
        id: Date.now(), // Unique task ID
        name: taskText, // Task name is now stored as 'name'
        completed: false,
        important: false,
        planned: false,
        priority: priority, // Priority from state
        category: category, // Category from state
        location: category === "Outdoor" ? location : "", // Location for outdoor tasks only
      };
      dispatch(addTask(newTask)); // Dispatch to add task to store
      setTaskText(""); // Clear the input after adding task
      setLocation(""); // Clear location input
    }
  };

  return (
    <div className="mb-3">
      <input
        type="text"
        className="form-control"
        placeholder="Enter a new task"
        value={taskText}
        onChange={(e) => setTaskText(e.target.value)} // Update state as user types
      />
      
      <div className="mt-2">
        <select
          className="form-select"
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
        >
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>
      </div>

      <div className="mt-2">
        <select
          className="form-select"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="Indoor">Indoor</option>
          <option value="Outdoor">Outdoor</option>
        </select>
      </div>

      {category === "Outdoor" && (
        <div className="mt-2">
          <input
            type="text"
            className="form-control"
            placeholder="Enter location (for outdoor tasks)"
            value={location}
            onChange={(e) => setLocation(e.target.value)} // Update location state
          />
        </div>
      )}

      <button className="btn btn-primary mt-3" onClick={handleAddTask}>
        Add Task
      </button>
    </div>
  );
};

export default TaskInput;
