import { createContext, useState } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setDarkMode] = useState(false);

  return (
    <>
      <ThemeContext.Provider value={{ isDarkMode, setDarkMode }}>
        {children}
      </ThemeContext.Provider>
    </>
  );
};

export default ThemeContext;
