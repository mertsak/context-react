import ThemeContext from "../context/ThemeContext";
import React, { useContext } from "react";
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";

const ThemeButton = () => {
  const { isDarkMode, setDarkMode } = useContext(ThemeContext);

  const handleClick = () => {
    setDarkMode(!isDarkMode);
  };

  console.log(isDarkMode);

  return (
    <>
      <button
        className={isDarkMode === true ? "theme-btn dark" : "theme-btn light"}
        onClick={() => handleClick()}
        type="button"
      >
        {isDarkMode ? <BsFillSunFill /> : <BsFillMoonFill />}
      </button>
    </>
  );
};

export default ThemeButton;
