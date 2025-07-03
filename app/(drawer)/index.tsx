import Calculator from "@/components/Calculator";
import { ThemeContext } from "@/context/ThemeContext";
import { Colors } from "@/utils/Colors";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useContext } from "react";
import { Switch } from "react-native-gesture-handler";

export default function Index() {
  const { currentTheme, toggleTheme } = useContext(ThemeContext);

  return (
    <>
      <StatusBar style={currentTheme === "dark" ? "light" : "dark"} />
      <Stack.Screen
        options={{
          title: "Calculator",
          headerStyle: {
            backgroundColor:
              currentTheme === "dark" ? Colors.dark : Colors.light,
          },
          headerTitleStyle: {
            color: currentTheme === "dark" ? Colors.white : Colors.black,
          },
          headerRight: () => (
            <Switch
              value={currentTheme === "dark"}
              onValueChange={() =>
                toggleTheme(currentTheme === "dark" ? "light" : "dark")
              }
            />
          ),
        }}
      />
      <Calculator />
    </>
  );
}
