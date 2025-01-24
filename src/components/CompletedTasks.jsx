import React from "react";
import { useSelector } from "react-redux";

const CompletedTasks = () => {
  const tasks = useSelector((state) => state.tasks);
  const completedTasks = tasks.filter((task) => task.completed);

  return (
    <div>
      <h2>Completed Tasks</h2>
      {completedTasks.length === 0 ? (
        <p>No completed tasks!</p>
      ) : (
        completedTasks.map((task) => (
          <div key={task.id} className="task-card">
            <h5>{task.name}</h5>
            <p>{task.important ? "Important" : "Regular"}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default CompletedTasks;
