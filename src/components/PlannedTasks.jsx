import React from "react";
import TaskList from "./TaskList"; // Import TaskList component

const PlannedTasks = () => {
  return (
    <div>
      <h2>Planned Tasks</h2>
      <TaskList filter="planned" /> {/* Pass "planned" filter to TaskList */}
    </div>
  );
};

export default PlannedTasks;
