import { ThemeContext } from "@/context/ThemeContext";
import { Colors } from "@/utils/Colors";
import { Drawer } from "expo-router/drawer";
import { useContext } from "react";

export default function DrawerLayout() {
  const { currentTheme } = useContext(ThemeContext);

  return (
    <Drawer
      screenOptions={{
        headerTintColor: currentTheme === "dark" ? Colors.white : Colors.black,
        // headerStyle: {
        //   backgroundColor: "yellow",
        // },
        // drawerStyle: {
        //   backgroundColor: "lightgray",
        // },
        // drawerActiveTintColor: "blue",
        // drawerInactiveTintColor: "black",
        // drawerActiveBackgroundColor: "lightblue",
        // drawerInactiveBackgroundColor: "white",
      }}
    />
  );
}
