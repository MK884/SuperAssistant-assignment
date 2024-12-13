import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { colors } from "@/constants";

const GridBox = () => {
  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Text
          style={{
            textAlign: "left",
          }}
        >
          My row 1
        </Text>
      </View>
      {/* <View style={{ flex: 1 }}> */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator
        style={{ flex: 1 }}
        contentContainerStyle={{
          gap: 10,
          width: "100%",
          padding: 4,
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        <RadioButton />
        <RadioButton />
        <RadioButton />
        <RadioButton />
        <RadioButton />
        <RadioButton />
        <RadioButton />
        <RadioButton />
        <RadioButton />
        <RadioButton />
        <RadioButton />
        <RadioButton />
        <RadioButton />
        <RadioButton />
        <RadioButton />
        <RadioButton />
        <RadioButton />
      </ScrollView>
      {/* </View> */}
    </View>
  );
};

export default GridBox;

const RadioButton = () => {
  const [isChecked, setIsChecked] = React.useState<boolean>(false);

  const borderColor = isChecked ? colors.primary : colors.neutral(0.2);

  return (
    <View
      style={{
        alignItems: "center",
        maxWidth: 60,
        // width: "100%",
        minWidth: 60,
        flex: 1,
      }}
    >
      <TouchableOpacity
        style={[styles.radioBtn, { borderColor }]}
        onPress={() => setIsChecked((prev) => !prev)}
      >
        {isChecked && <View style={[styles.radio]} />}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 2,
    backgroundColor: colors.secondry,
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 5,
  },
  title: {
    width: "35%",
  },
  radios: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  radioBtn: {
    height: 20,
    aspectRatio: 1,
    borderRadius: 10,
    borderWidth: 3,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  radio: {
    backgroundColor: colors.primary,
    height: 10,
    aspectRatio: 1,
    borderRadius: 5,
  },
});
