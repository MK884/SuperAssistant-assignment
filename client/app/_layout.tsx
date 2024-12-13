import { colors } from "@/constants";
import { Stack } from "expo-router";
import { Platform } from "react-native";

export default function RootLayout() {
  const backgroundColor =
    Platform.OS === "web" ? "transparent" : colors.neutral(0.05);

  return (
    <Stack
      screenOptions={{
        headerShadowVisible: false,
        headerTitleAlign: "center",
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          title: "All Forms",
          headerStyle: {
            backgroundColor,
          },
        }}
      />
      <Stack.Screen name="(tabs)" options={{ title: "Form" }} />
    </Stack>
  );
}
