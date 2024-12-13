import {
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import CheckBox from "expo-checkbox";
import { colors } from "@/constants";
import CustomeTextInput from "./CustomeTextInput";
import Entypo from "@expo/vector-icons/Entypo";

export interface ICheckBox {
  isLive?: boolean;
  onChangeText?: (text: string) => void;
  onValueChange?: (value: boolean) => void;
  placeholder?: string;
  onCancel?: () => void;
  defualtText?: string;
  isChecked?: boolean;
}

const CheckBoxInput = ({
  isLive = false,
  onCancel = () => {},
  onChangeText = () => {},
  onValueChange = () => {},
  isChecked = false,
  placeholder = "Option",
  defualtText = "",
}: ICheckBox) => {
  const [isCheck, setIscheck] = React.useState(isChecked);
  const [text, setText] = React.useState<string>(defualtText);

  return (
    <Pressable
      style={styles.checkBox}
      onPress={() => {
        if (isLive) setIscheck((prev) => !prev);
      }}
    >
      <CheckBox
        disabled={false}
        value={isCheck}
        onValueChange={(newValue) => {
          setIscheck(newValue);
          onValueChange(newValue);
        }}
        color={isCheck ? colors.primary : undefined}
      />
      {isLive ? (
        <Text style={{ fontSize: 16 }}>Option</Text>
      ) : (
        <>
          <CustomeTextInput
            placeholder={placeholder}
            extraStyles={{
              flex: 1,
            }}
            value={text}
            onChangeText={(text) => {
              setText(text);
              onChangeText(text);
            }}
          />
          <TouchableOpacity onPress={onCancel}>
            <Entypo name="cross" size={24} color="black" />
          </TouchableOpacity>
        </>
      )}
    </Pressable>
  );
};

export default CheckBoxInput;

const styles = StyleSheet.create({
  checkBox: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    gap: 10,
  },
});
