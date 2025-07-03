import { ThemeContext } from "@/context/ThemeContext";
import { Colors } from "@/utils/Colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import React, { useContext } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

type SettingsButtonProps = {
  title: string;
  icon: React.ComponentProps<typeof MaterialCommunityIcons>["name"];
  onPress: () => void;
  isActive: boolean;
};

export default function SettingsButton({
  title,
  icon,
  onPress,
  isActive,
}: SettingsButtonProps) {
  const { currentTheme } = useContext(ThemeContext);

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.settingsButton,
        {
          backgroundColor:
            currentTheme === "dark" ? Colors.btnDark : Colors.white,
        },
      ]}
    >
      <View style={styles.titleWrapper}>
        <MaterialCommunityIcons
          name={icon}
          size={20}
          color={currentTheme === "dark" ? Colors.white : Colors.black}
        />
        <Text
          style={[
            styles.title,
            { color: currentTheme === "dark" ? Colors.white : Colors.black },
          ]}
        >
          {title}
        </Text>
      </View>
      <MaterialCommunityIcons
        name={isActive ? "check-circle" : "checkbox-blank-circle-outline"}
        size={20}
        color={
          isActive
            ? Colors.btnRight
            : currentTheme === "dark"
            ? Colors.white
            : Colors.black
        }
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  settingsButton: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: Colors.white,
    padding: 20,
    borderRadius: 10,
    marginBottom: 15,
  },
  titleWrapper: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  title: {
    fontSize: 14,
    fontWeight: "500",
  },
});
