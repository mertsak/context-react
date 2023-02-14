import { Link, NavLink } from "react-router-dom";
import ThemeButton from "./ThemeButton";
import React, { useContext } from "react";
import ThemeContext from "../context/ThemeContext";

const Header = () => {
  const { isDarkMode } = useContext(ThemeContext);
  return (
    <header className={isDarkMode === true ? "dark" : "light"}>
      <Link to={`/`} className="logo">
        ValoViki
      </Link>

      <div className="nav-container">
        <ul className="nav-list">
          <li className="nav-item">
            <NavLink to={`/`}>Home</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to={`/agents`}>Agents</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to={`/maps`}>Maps</NavLink>
          </li>
          <li className="nav-item">
            <Link to={`/weapons`}>Weapons</Link>
          </li>
          <li className="nav-item">
            <ThemeButton />
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
