import {
  StyleSheet,
  StyleSheetProperties,
  TextInput,
  TextInputProps,
  TextStyle,
} from "react-native";
import React from "react";
import { colors } from "@/constants";

interface ITextInput extends Partial<TextInputProps> {
  extraStyles?: TextStyle;
}

const CustomeTextInput = ({ extraStyles = {}, ...rest }: ITextInput) => {
  const [isFocused, setIsFocused] = React.useState<boolean>(false);

  // const backgroundColor = isFocused ? colors.secondry : "transparent";
  const borderBottomWidth = isFocused ? 2 : 1;
  const borderBottomColor = isFocused ? "black" : colors.neutral(0.1);

  return (
    <TextInput
      style={[
        styles.textInput,
        {
          // backgroundColor,
          borderBottomColor,
          borderBottomWidth,
          ...extraStyles,
        },
      ]}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      {...rest}
    />
  );
};

export default CustomeTextInput;

const styles = StyleSheet.create({
  textInput: {
    width: "100%",
    fontSize: 16,
    paddingLeft: 4,
    paddingVertical: 8,
    outlineColor: "transparent",
  },
});
