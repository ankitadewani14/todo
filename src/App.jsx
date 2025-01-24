import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Sidebar from './components/Sidebar';
import TaskList from './components/TaskList';
import TaskInput from './components/TaskInput';
import LoginForm from './components/LoginForm';
import Logout from './components/LogoutButton';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const Home = () => {
  const { isAuthenticated } = useSelector((state) => state.auth); // Get auth state

  return (
    <Router>
      <div className="d-flex">
        <Sidebar />
        <div className="flex-grow-1 p-3">
          <Routes>
            {/* If not authenticated, show login form */}
            {!isAuthenticated ? (
              <Route path="/" element={<LoginForm />} />
            ) : (
              <>
                {/* If authenticated, show TaskInput and TaskList */}
                <Route
                  path="/"
                  element={
                    <>
                      <TaskInput /> {/* Input field for adding tasks */}
                      <TaskList filter="all" /> {/* Display all tasks below */}
                    </>
                  }
                />
                <Route path="/tasks" element={<TaskList filter="all" />} />
                <Route path="/today" element={<TaskList filter="today" />} />
                <Route path="/important" element={<TaskList filter="important" />} />
                <Route path="/planned" element={<TaskList filter="planned" />} />
                <Route path="/assigned" element={<TaskList filter="assigned" />} />
              </>
            )}
            {isAuthenticated && <Route path="/logout" element={<Logout />} />}
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default Home;
