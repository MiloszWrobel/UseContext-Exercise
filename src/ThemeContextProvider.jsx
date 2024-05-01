import { createContext, useContext, useState } from "react";
const ThemeContext = createContext();

export function UseThemeContext() {
  return useContext(ThemeContext);
}

export default function ThemeContextProvider({ children }) {
  const [theme, setTheme] = useState("light");

  function switchTheme() {
    setTheme(theme === "dark" ? "light" : "dark");
  }
  const contextValue = { theme: theme, switchTheme: switchTheme };
  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
}
