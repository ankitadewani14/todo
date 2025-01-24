import React from "react";
import { useSelector } from "react-redux";

const Favourites = () => {
  const tasks = useSelector((state) => state.tasks);
  const favourites = tasks.filter((task) => task.favourite);

  return (
    <div>
      <h2>Favourites</h2>
      <ul>
        {favourites.map((task) => (
          <li key={task.id}>
            <span>{task.text}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Favourites;
