import React from "react";
import { useSelector } from "react-redux";
import LoginForm from "./LoginForm";
import TaskList from "./TaskList";
import Sidebar from "./Sidebar";
import LogoutButton from "./LogoutButton";

const Home = () => {
  const { isAuthenticated } = useSelector((state) => state.auth);

  return (
    <div className="d-flex">
      <Sidebar />
      <div className="flex-grow-1 p-3">
        {!isAuthenticated ? (
          <LoginForm />
        ) : (
          <>
            <TaskList />
            <LogoutButton />
          </>
        )}
      </div>
    </div>
  );
};

export default Home;
