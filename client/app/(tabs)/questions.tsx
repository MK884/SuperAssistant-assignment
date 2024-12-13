import { ScrollView, StyleSheet, TouchableOpacity, View } from "react-native";
import React from "react";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { colors } from "@/constants";
import { CustomeTextInput } from "@/ui";
import { Card } from "@/components";

const questions = () => {
  return (
    <View style={styles.container}>
      <ScrollView
        // style={styles.scrollView}
        contentContainerStyle={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: 14,
          paddingBottom: 100,

          gap: 14,
        }}
      >
        <View style={styles.formHeader}>
          <View style={styles.formHead}>
            <CustomeTextInput
              placeholder="form title"
              extraStyles={{
                fontSize: 32,
              }}
            />
            <CustomeTextInput placeholder="Description (Optional)" />
          </View>
        </View>

        <Card />
        <Card type="CHECK_BOX" />
        <Card type="GRID" />
      </ScrollView>

      {/* bottom tab bar */}
      <View style={styles.bottomTab}>
        <View style={styles.tabs}>
          <TouchableOpacity style={styles.tabItem}>
            <MaterialCommunityIcons
              name="page-layout-header"
              size={28}
              color="black"
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.tabItem}>
            <MaterialIcons name="text-fields" size={28} color="black" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.tabItem}>
            <FontAwesome5 name="image" size={28} color="black" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.tabItem}>
            <FontAwesome name="check-square-o" size={28} color="black" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.tabItem}>
            <MaterialCommunityIcons
              name="view-grid-plus-outline"
              size={28}
              color="black"
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default questions;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.secondry,
    position: "relative",
  },
  bottomTab: {
    position: "absolute",
    bottom: 0,
    width: "100%",
  },
  tabs: {
    padding: 10,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#ffffff",
  },
  tabItem: {
    padding: 10,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  formHeader: {
    backgroundColor: "#ffffff",
    padding: 10,
    borderRadius: 10,
    width: "100%",
    borderTopColor: colors.primary,
    borderTopWidth: 6,
    maxWidth: 770, //for web browsers
  },
  formHead: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    paddingHorizontal: 12,
    gap: 10,
    paddingVertical: 22,
  },
});
