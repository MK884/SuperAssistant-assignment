import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { colors } from "@/constants";

const CardSlug = ({
  title,
  icon,
}: {
  title: string;
  icon?: React.ReactNode;
}) => {
  return (
    <View style={styles.slug}>
      {icon}
      <Text style={styles.slugTitle}>{title}</Text>
    </View>
  );
};
export default CardSlug;

const styles = StyleSheet.create({
  slug: {
    flex: 1,
    paddingHorizontal: 12,
    paddingVertical: 6,
    backgroundColor: colors.neutral(0.1),
    borderRadius: 8,
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    flexDirection: "row",
    gap: 10,
  },
  slugTitle: {
    fontWeight: "semibold",
    fontSize: 16,
    textTransform: "capitalize",
    color: colors.neutral(0.4),
  },
});
