import React, { useState, useEffect } from "react";
import { FaHeart, FaTrashAlt, FaCalendarPlus, FaCheck, FaExclamation, FaCircle } from "react-icons/fa";
import { fetchWeather } from "../utils/weatherApi"; // Make sure this path is correct
import Weather from "./Weather"; // Ensure the Weather component exists and is imported

const Task = ({ task, onToggleComplete, onDelete, onToggleImportant, onMoveToPlanned, onUpdatePriority }) => {
  const [weather, setWeather] = useState(null); // State to store weather data

  // Handle priority change
  const handlePriorityChange = (priority) => {
    onUpdatePriority(task.id, priority); // Update the priority using the function passed down as a prop
  };

  // Get priority icon based on task priority
  const getPriorityIcon = (priority) => {
    if (priority === "High") return <FaExclamation color="red" />;
    if (priority === "Medium") return <FaCircle color="orange" />;
    return <FaCircle color="green" />;
  };

  // Fetch weather for task location (if it has a location specified)
  useEffect(() => {
    const getWeatherData = async () => {
      if (task.location) {
        try {
          const weatherData = await fetchWeather(task.location); // Call the fetchWeather function
          setWeather(weatherData); // Set the weather data once fetched
        } catch (error) {
          console.error("Failed to fetch weather:", error); // Handle any errors from the API
        }
      }
    };

    if (task.location) { // Ensure location exists before fetching
      getWeatherData();
    }
  }, [task.location]); // Re-run when task location changes

  return (
    <div className="col-md-4 mb-3">
      <div className="card" style={{ borderRadius: '10px', boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)', padding: '20px' }}>
        <div className="card-body">
          <h5 className="card-title" style={{ fontSize: '18px', fontWeight: 'bold' }}>
            {task.name}
          </h5>
          <p className="card-text" style={{ color: task.completed ? 'green' : 'red' }}>
            {task.completed ? "Completed" : "Pending"}
          </p>

          {/* Priority Dropdown with Icon and Text */}
          <div className="d-flex justify-content-between mb-3">
            <div className="dropdown">
              <button
                className="btn btn-outline-secondary dropdown-toggle"
                type="button"
                id="priorityDropdown"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                {getPriorityIcon(task.priority)} {task.priority}
              </button>
              <ul className="dropdown-menu" aria-labelledby="priorityDropdown">
                <li>
                  <button className="dropdown-item" onClick={() => handlePriorityChange("High")}>
                    <FaExclamation color="red" /> High
                  </button>
                </li>
                <li>
                  <button className="dropdown-item" onClick={() => handlePriorityChange("Medium")}>
                    <FaCircle color="orange" /> Medium
                  </button>
                </li>
                <li>
                  <button className="dropdown-item" onClick={() => handlePriorityChange("Low")}>
                    <FaCircle color="green" /> Low
                  </button>
                </li>
              </ul>
            </div>
          </div>

          <div className="d-flex justify-content-between">
            {/* Toggle Important Button */}
            <button
              className={`btn ${task.important ? "btn-danger" : "btn-outline-secondary"}`}
              onClick={() => onToggleImportant(task.id)}
              style={{ borderRadius: '50%' }}
            >
              <FaHeart />
            </button>

            {/* Complete Button with Icon */}
            <button
              className="btn btn-outline-success"
              onClick={() => onToggleComplete(task.id)}
              style={{ borderRadius: '50%' }}
            >
              {task.completed ? <FaCheck /> : "Complete"}
            </button>

            {/* Delete Button */}
            <button
              className="btn btn-outline-danger"
              onClick={() => onDelete(task.id)}
              style={{ borderRadius: '50%' }}
            >
              <FaTrashAlt />
            </button>

            {/* Move to Planned Button */}
            <button
              className="btn btn-outline-info"
              onClick={() => onMoveToPlanned(task.id)}
              style={{ borderRadius: '50%' }}
              disabled={task.planned} // Disable if already planned
            >
              <FaCalendarPlus />
            </button>
          </div>

          {/* Display Weather for Outdoor Tasks */}
          {task.category === "Outdoor" && task.location && weather && (
  <Weather location={task.location} weather={weather} />
)}

        </div>
      </div>
    </div>
  );
};

export default Task;
