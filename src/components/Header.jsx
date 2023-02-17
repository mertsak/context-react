import { Link, NavLink } from "react-router-dom";
import ThemeButton from "./ThemeButton";
import React, { useContext, useState } from "react";
import ThemeContext from "../context/ThemeContext";
import Hamburger from "hamburger-react";

const Header = () => {
  const { isDarkMode } = useContext(ThemeContext);
  const [isOpen, setOpen] = useState(false);
  console.log(isOpen);

  return (
    <div
      className={
        isDarkMode === true ? "header-container dark" : "header-container light"
      }
    >
      <header className={isOpen === true ? "active" : ""}>
        <div className="logo-container">
          <Link to={`/`} className="logo">
            ValoViki
          </Link>
          <Hamburger size={25} toggled={isOpen} toggle={setOpen} />
        </div>

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
    </div>
  );
};

export default Header;
