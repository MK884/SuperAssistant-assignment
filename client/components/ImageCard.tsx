import {
  Image,
  Platform,
  StyleSheet,
  Text,
  ToastAndroid,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import * as ImagePicker from "expo-image-picker";
import { colors, hp } from "@/constants";
import { Feather, FontAwesome5 } from "@expo/vector-icons";
import { CustomeTextInput } from "@/ui";
import CardSlug from "./CardSlug";

const ImageCard = () => {
  const [image, setImage] = React.useState<string | null>(null);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images"],
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    } else {
      if (Platform.OS === "android")
        ToastAndroid.show("User cancelled Image Selection", ToastAndroid.SHORT);
    }
  };
  return (
    <View style={styles.container}>
      <CardSlug
        title="image"
        icon={
          <FontAwesome5 name="image" size={18} color={colors.neutral(0.4)} />
        }
      />
      <CustomeTextInput
        placeholder="Image Title"
        extraStyles={{
          fontWeight: "semibold",
        }}
      />
      <TouchableOpacity style={styles.imageBox} onPress={pickImage}>
        {image ? (
          <Image source={{ uri: image }} style={[styles.image]} />
        ) : (
          <Text>Tap to add image</Text>
        )}
      </TouchableOpacity>
      {/* footer */}
      <View style={styles.footer}>
        <TouchableOpacity onPress={pickImage}>
          <Text
            style={{
              color: "blue",
              fontSize: 18,
              fontWeight: "600",
            }}
          >
            Change
          </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Feather name="trash-2" size={24} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ImageCard;

const styles = StyleSheet.create({
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
  imageBox: {
    width: "100%",
    height: hp(30),
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    overflow: "hidden",
    backgroundColor: colors.neutral(0.1),
  },
  image: {
    height: "100%",
    width: "100%",
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
