import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="d-flex flex-column flex-shrink-0 p-3 bg-dark text-white" style={{ height: "100vh" }}>
      <NavLink
        to="/"
        className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-light text-decoration-none"
      >
        <span className="fs-4">DO IT</span>
      </NavLink>
      <hr className="bg-white" />
      <ul className="nav nav-pills flex-column mb-auto">
        <li className="nav-item">
          <NavLink
            to="/"
            className={({ isActive }) => `nav-link ${isActive ? "active" : "link-light"}`}
          >
            All Tasks
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/today"
            className={({ isActive }) => `nav-link ${isActive ? "active" : "link-light"}`}
          >
            Today
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/important"
            className={({ isActive }) => `nav-link ${isActive ? "active" : "link-light"}`}
          >
            Important
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/assigned"
            className={({ isActive }) => `nav-link ${isActive ? "active" : "link-light"}`}
          >
            Assigned to Me
          </NavLink>
        </li>
      </ul>
      <hr className="bg-white" />
      <div className="dropdown">
        <a
          href="#"
          className="d-flex align-items-center link-light text-decoration-none dropdown-toggle"
          id="dropdownUser2"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <img
            src="https://github.com/mdo.png"
            alt=""
            width="32"
            height="32"
            className="rounded-circle me-2"
          />
          <strong>Hey, abc</strong>
        </a>
        <ul className="dropdown-menu text-small shadow" aria-labelledby="dropdownUser2">
          <li>
            <a className="dropdown-item" href="#">
              New project...
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
