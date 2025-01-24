import React, { useState } from "react";
import Sidebar from "./Sidebar";
import PlannedTasks from "./PlannedTasks";

const TaskApp = () => {
  const [selectedCategory, setSelectedCategory] = useState("Today");

  const renderCategory = () => {
    switch (selectedCategory) {
      case "planned":
        return <PlannedTasks />;
      // Handle other categories like "Today", "Important", etc.
      default:
        return <p>Select a category!</p>;
    }
  };

  return (
    <div className="task-app d-flex">
      <Sidebar
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />
      <div className="tasks-content">{renderCategory()}</div>
    </div>
  );
};

export default TaskApp;
