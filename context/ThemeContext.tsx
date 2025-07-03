import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect, useState } from "react";
import { useColorScheme } from "react-native";

export type ThemeContextType = {
  isSystemTheme: boolean; // Indicates if the system theme is being used
  currentTheme: string; // Current theme, e.g., "light", "dark", "system"
  toggleTheme: (newTheme: string) => void; // Function to toggle between themes
  useSystemTheme: () => void;
};

export const ThemeContext = React.createContext<ThemeContextType>({
  isSystemTheme: false,
  currentTheme: "light",
  toggleTheme: () => {},
  useSystemTheme: () => {},
});

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const colorScheme = useColorScheme();
  const [theme, setTheme] = useState<string>("light");
  const [isSystemTheme, setIsSystemTheme] = useState<boolean>(false);

  useEffect(() => {
    const loadTheme = async () => {
      try {
        const savedThemeObj = await AsyncStorage.getItem("theme");
        const savedThemeObjData = JSON.parse(savedThemeObj!);

        if (savedThemeObjData) {
          setTheme(savedThemeObjData.mode);
          setIsSystemTheme(savedThemeObjData.system);
        }
      } catch (error) {
        console.error("Failed to load theme: ", error);
      }
    };
    loadTheme();
  }, []);

  useEffect(() => {
    if (colorScheme && isSystemTheme) {
      const themeObj = {
        mode: colorScheme === "dark" ? "dark" : "light",
        system: true,
      };

      setTheme(colorScheme === "dark" ? "dark" : "light");

      AsyncStorage.setItem("theme", JSON.stringify(themeObj)).catch((error) =>
        console.error("Failed to save theme: ", error)
      );

      setIsSystemTheme(true);
    }
  }, [colorScheme, isSystemTheme]);

  const toggleTheme = (newTheme: string) => {
    const themeObj = {
      mode: newTheme,
      system: false,
    };

    setTheme(newTheme);

    // Save the new theme to AsyncStorage
    AsyncStorage.setItem("theme", JSON.stringify(themeObj)).catch((error) =>
      console.error("Failed to save theme: ", error)
    );

    setIsSystemTheme(false);
  };

  const useSystemTheme = () => {
    const themeObj = {
      mode: colorScheme === "dark" ? "dark" : "light",
      system: true,
    };

    setTheme(colorScheme === "dark" ? "dark" : "light");

    // Save the system theme to AsyncStorage
    AsyncStorage.setItem("theme", JSON.stringify(themeObj)).catch((error) =>
      console.error("Failed to save system theme: ", error)
    );

    setIsSystemTheme(true);
  };

  return (
    <ThemeContext.Provider
      value={{
        currentTheme: theme,
        toggleTheme,
        useSystemTheme,
        isSystemTheme: isSystemTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
