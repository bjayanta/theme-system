import SettingsButton from "@/components/SettingsButton";
import { ThemeContext } from "@/context/ThemeContext";
import { Colors } from "@/utils/Colors";
import { Stack } from "expo-router";
import React, { useContext } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Switch } from "react-native-gesture-handler";

export default function Settings() {
  const { currentTheme, toggleTheme } = useContext(ThemeContext);

  return (
    <>
      <Stack.Screen
        options={{
          title: "Settings",
          headerStyle: {
            backgroundColor:
              currentTheme === "dark" ? Colors.dark : Colors.light,
          },
          headerTitleStyle: {
            color: currentTheme === "dark" ? Colors.white : Colors.black,
          },
        }}
      />
      <View
        style={[
          styles.container,
          {
            backgroundColor:
              currentTheme === "dark" ? Colors.dark : Colors.gray,
          },
        ]}
      >
        <Text
          style={[
            styles.title,
            { color: currentTheme === "dark" ? Colors.white : Colors.black },
          ]}
        >
          Settings
        </Text>

        <TouchableOpacity
          onPress={() => alert("Settings pressed")}
          style={[
            styles.button,
            {
              backgroundColor:
                currentTheme === "dark" ? Colors.btnDark : Colors.white,
            },
          ]}
        >
          <Text
            style={{
              color: currentTheme === "dark" ? Colors.white : Colors.black,
            }}
          >
            Dark Mode
          </Text>
          <Switch
            value={currentTheme === "dark"}
            onValueChange={() =>
              toggleTheme(currentTheme === "dark" ? "light" : "dark")
            }
          />
        </TouchableOpacity>

        <Text
          style={[
            styles.title,
            { color: currentTheme === "dark" ? Colors.white : Colors.black },
          ]}
        >
          Theme Settings
        </Text>
        <SettingsButton
          title="Light"
          icon="lightbulb-on"
          onPress={() => toggleTheme("light")}
          isActive={currentTheme === "light"}
        />
        <SettingsButton
          title="Dark"
          icon="weather-night"
          onPress={() => toggleTheme("dark")}
          isActive={currentTheme === "dark"}
        />
        <SettingsButton
          title="System"
          icon="theme-light-dark"
          onPress={() => toggleTheme("system")}
          isActive={false}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    // backgroundColor: Colors.gray,
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
    marginVertical: 10,
  },
  button: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    // backgroundColor: Colors.white,
    padding: 20,
    borderRadius: 10,
    marginBottom: 10,
  },
});
