import React, { useState } from "react";

export type ThemeContextType = {
  currentTheme: string; // Current theme, e.g., "light", "dark", "system"
  toggleTheme: (newTheme: string) => void; // Function to toggle between themes
};

export const ThemeContext = React.createContext<ThemeContextType>({
  currentTheme: "light",
  toggleTheme: () => {},
});

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<string>("light");

  const toggleTheme = (newTheme: string) => {
    setTheme(newTheme);
  };

  return (
    <ThemeContext.Provider value={{ currentTheme: theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
