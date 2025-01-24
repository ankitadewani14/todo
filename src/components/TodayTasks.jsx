import React from "react";
import { useSelector } from "react-redux";

const TodayTasks = () => {
  const tasks = useSelector((state) => state.tasks);

  const today = new Date().toISOString().slice(0, 10);
  const todayTasks = tasks.filter((task) => task.date.startsWith(today));

  return (
    <div>
      <h2>Today's Tasks</h2>
      {todayTasks.length === 0 ? (
        <p>No tasks for today!</p>
      ) : (
        todayTasks.map((task) => (
          <div key={task.id} className="task-card">
            <h5>{task.name}</h5>
            <p>{task.completed ? "Completed" : "Pending"}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default TodayTasks;
