import { ThemeContext } from "@/context/ThemeContext";
import { Colors } from "@/utils/Colors";
import React, { useContext } from "react";
import {
  GestureResponderEvent,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";

type ButtonProps = {
  title: string;
  type: "top" | "right" | "number";
  onPress: Function;
};

export default function Button({ title, type, onPress }: ButtonProps) {
  const { currentTheme } = useContext(ThemeContext);

  return (
    <TouchableOpacity
      style={[
        styles.button,
        {
          backgroundColor:
            currentTheme === "dark"
              ? type === "top"
                ? Colors.btnLight
                : type === "right"
                ? Colors.btnRight
                : Colors.btnDark
              : type === "top"
              ? Colors.btnDark
              : type === "right"
              ? Colors.btnRight
              : Colors.btnLight,
        },
      ]}
      onPress={onPress as (event: GestureResponderEvent) => void}
    >
      <Text
        style={{
          fontSize: 34,
          color:
            currentTheme === "dark"
              ? type === "top"
                ? Colors.black
                : Colors.white
              : type === "number"
              ? Colors.black
              : Colors.white,
        }}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    height: 70,
    width: 70,
    borderRadius: 10,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.btnDark,
  },
});
