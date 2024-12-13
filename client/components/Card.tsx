import { CheckBoxInput, CustomeTextInput, GridBox } from "@/ui";
import { ICheckBox } from "@/ui/CheckBoxInput";
import Feather from "@expo/vector-icons/Feather";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

type CardType = "TEXT" | "CHECK_BOX" | "IMAGE" | "GRID";
function options(type: CardType) {
  switch (type) {
    case "TEXT": {
      return <CustomeTextInput placeholder="short answer..." />;
    }
    case "CHECK_BOX": {
      return <CheckBoxOptions />;
    }
    case "GRID": {
      return <GridBox />;
    }
  }
}

const Card = ({ type = "TEXT" }: { type?: CardType }) => {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.questions}>
          <CustomeTextInput
            placeholder="Question"
            extraStyles={{
              fontSize: 18,
            }}
          />
        </View>
        <View style={styles.answers}>{options(type)}</View>

        {/* footer */}
        <View style={styles.footer}>
          <TouchableOpacity>
            <Feather name="trash-2" size={24} color="black" />
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

export default Card;

interface IChoice {
  isChecked: boolean;
  value: string;
}

const CheckBoxOptions = () => {
  const [choices, setChoices] = React.useState<Array<IChoice>>([]);

  React.useEffect(() => {
    const defaultChoice: IChoice = {
      isChecked: false,
      value: "Option 1",
    };

    setChoices([defaultChoice]);
  }, []);

  const addChoice = () => {
    const defaultChoice: IChoice = {
      isChecked: false,
      value: "",
    };
    setChoices((prevChoices) => [...prevChoices, defaultChoice]);
  };

  const setChoiceText = (value: string, index: number) => {
    if (index < 0 || index >= choices.length) return;
    const newChoices = choices.map((choice, idx) =>
      idx === index ? { ...choice, value } : choice
    );
    setChoices(newChoices);
  };

  const removeChoice = (index: number) => {
    if (index < 0 || index >= choices.length) return;
    const newChoices = choices.filter((_, idx) => idx !== index);
    setChoices(newChoices);
  };

  const changeStatus = (value: boolean, index: number) => {
    if (index < 0 || index >= choices.length) return;
    const newChoices = choices.map((choice, idx) =>
      idx === index ? { ...choice, isChecked: value } : choice
    );
    setChoices(newChoices);
  };

  return (
    <View style={styles.checksBox}>
      <View style={styles.checks}>
        {choices.map((choice, index) => (
          <CheckBoxInput
            key={index}
            isLive={false}
            onChangeText={(text) => setChoiceText(text, index)}
            onCancel={() => removeChoice(index)}
            onValueChange={(value) => changeStatus(value, index)}
            placeholder={`Option ${index + 1}`}
            defualtText={choice.value}
            isChecked={choice.isChecked}
          />
        ))}
      </View>
      <TouchableOpacity onPress={addChoice}>
        <Text style={{ color: "blue", fontSize: 18, fontWeight: "600" }}>
          Add choice
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  checksBox: {
    width: "100%",
    display: "flex",
    gap: 10,
  },
  checks: {},
  container: {
    backgroundColor: "#ffffff",
    padding: 10,
    borderRadius: 10,
    width: "100%",
    maxWidth: 770,
    display: "flex",
    flexDirection: "column",
    gap: 20,
    overflow: "hidden",
  },
  questions: {},
  answers: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    gap: 20,
  },
  footer: {
    flex: 1,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    gap: 20,
  },
});
