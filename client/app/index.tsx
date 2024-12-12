import { colors, wp } from "@/constants";
import AntDesign from "@expo/vector-icons/AntDesign";
import EvilIcons from "@expo/vector-icons/EvilIcons";
import { useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, TextInput, TouchableOpacity, View } from "react-native";

const index = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      {/* search bar */}
      <View style={styles.searchBox}>
        <View style={styles.searchBar}>
          <EvilIcons name="search" size={24} color="black" />
          <TextInput
            placeholder="Search for forms..."
            style={styles.searchInput}
          />
        </View>
      </View>

      <TouchableOpacity
        style={styles.btn}
        onPress={() => router.push("/(tabs)/questions")}
      >
        <AntDesign name="plus" size={24} color="white" />
      </TouchableOpacity>
    </View>
  );
};

export default index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  searchBox: {
    width: wp(100),
    padding: 12,
  },
  searchBar: {
    backgroundColor: "#ffffff",
    display: "flex",
    flexDirection: "row",
    paddingLeft: 12,
    alignItems: "baseline",
    borderRadius: 6,
    columnGap: 5,
  },
  searchInput: {
    flex: 1,
    color: colors.neutral(0.6),
  },
  btn: {
    width: wp(18),
    aspectRatio: 1,
    position: "absolute",
    bottom: 50,
    right: 30,
    backgroundColor: colors.primary,
    borderRadius: wp(18) / 2,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});
