import React from "react";
import { useSelector } from "react-redux";

const ImportantTasks = () => {
  const tasks = useSelector((state) => state.tasks);
  const importantTasks = tasks.filter((task) => task.important);

  return (
    <div>
      <h2>Important Tasks</h2>
      {importantTasks.length === 0 ? (
        <p>No important tasks!</p>
      ) : (
        importantTasks.map((task) => (
          <div key={task.id} className="task-card">
            <h5>{task.name}</h5>
            <p>{task.completed ? "Completed" : "Pending"}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default ImportantTasks;
