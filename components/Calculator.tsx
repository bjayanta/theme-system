import { ThemeContext } from "@/context/ThemeContext";
import { Colors } from "@/utils/Colors";
import React, { useContext, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Button from "./Button";

export default function Calculator() {
  const { currentTheme } = useContext(ThemeContext);

  const [firstValue, setFirstValue] = useState("");
  const [displayValue, setDisplayValue] = useState("0");
  const [operator, setOperator] = useState("");

  const handleNumberInput = (num: string) => {
    if (displayValue === "0" || displayValue === "00") {
      setDisplayValue(num);
    } else {
      setDisplayValue(displayValue + num);
    }
  };

  const handleOperatorInput = (operator: string) => {
    setOperator(operator);
    setFirstValue(displayValue);
    setDisplayValue("0");
  };

  const handleCalculation = () => {
    const num1 = parseFloat(firstValue);
    const num2 = parseFloat(displayValue);

    if (operator === "+") {
      setDisplayValue((num1 + num2).toString());
    } else if (operator === "-") {
      setDisplayValue((num1 - num2).toString());
    } else if (operator === "*") {
      setDisplayValue((num1 * num2).toString());
    } else if (operator === "/") {
      setDisplayValue((num1 / num2).toString());
    } else if (operator === "%") {
      setDisplayValue(((num1 * num2) / 100).toString());
    } else {
      setDisplayValue(displayValue);
    }

    setOperator("");
    setFirstValue("");
  };

  const handleClear = () => {
    setDisplayValue("0");
    setFirstValue("");
    setOperator("");
  };

  const handleDelete = () => {
    if (displayValue.length === 1) {
      setDisplayValue("0");
      return;
    }
    setDisplayValue(displayValue.slice(0, -1));
  };

  return (
    <View style={styles.container}>
      <View
        style={[
          styles.display,
          {
            backgroundColor:
              currentTheme === "dark" ? Colors.dark : Colors.gray,
          },
        ]}
      >
        <Text
          style={{
            fontSize: 30,
            fontWeight: "300",
            color: currentTheme === "dark" ? Colors.white : Colors.black,
          }}
        >
          {firstValue + operator}
        </Text>
        <Text
          style={{
            fontSize: 70,
            fontWeight: "300",
            color: currentTheme === "dark" ? Colors.white : Colors.black,
          }}
        >
          {displayValue}
        </Text>
      </View>

      <View
        style={[
          styles.keypad,
          {
            backgroundColor:
              currentTheme === "dark" ? Colors.dark : Colors.gray,
          },
        ]}
      >
        <Button title="C" type="top" onPress={handleClear} />
        <Button title="&#x232B;" type="top" onPress={handleDelete} />
        <Button title="%" type="top" onPress={() => handleOperatorInput("%")} />
        <Button
          title="&divide;"
          type="right"
          onPress={() => handleOperatorInput("/")}
        />
        <Button
          title="7"
          type="number"
          onPress={() => handleNumberInput("7")}
        />
        <Button
          title="8"
          type="number"
          onPress={() => handleNumberInput("8")}
        />
        <Button
          title="9"
          type="number"
          onPress={() => handleNumberInput("9")}
        />
        <Button
          title="&times;"
          type="right"
          onPress={() => handleOperatorInput("*")}
        />
        <Button
          title="4"
          type="number"
          onPress={() => handleNumberInput("4")}
        />
        <Button
          title="5"
          type="number"
          onPress={() => handleNumberInput("5")}
        />
        <Button
          title="6"
          type="number"
          onPress={() => handleNumberInput("6")}
        />
        <Button
          title="-"
          type="right"
          onPress={() => handleOperatorInput("-")}
        />
        <Button
          title="1"
          type="number"
          onPress={() => handleNumberInput("1")}
        />
        <Button
          title="2"
          type="number"
          onPress={() => handleNumberInput("2")}
        />
        <Button
          title="3"
          type="number"
          onPress={() => handleNumberInput("3")}
        />
        <Button
          title="+"
          type="right"
          onPress={() => handleOperatorInput("+")}
        />
        <Button
          title="0"
          type="number"
          onPress={() => handleNumberInput("0")}
        />
        <Button
          title="00"
          type="number"
          onPress={() => handleNumberInput("00")}
        />
        <Button
          title="."
          type="number"
          onPress={() => handleNumberInput(".")}
        />
        <Button title="=" type="right" onPress={handleCalculation} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  display: {
    flex: 1,
    // backgroundColor: Colors.gray,
    paddingVertical: 20,
    paddingHorizontal: 40,
    alignItems: "flex-end",
    justifyContent: "flex-end",
  },
  keypad: {
    flex: 2,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: 20,
    padding: 20,
    // backgroundColor: Colors.light,
  },
});
