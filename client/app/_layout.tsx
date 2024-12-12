import { colors } from "@/constants";
import { Stack } from "expo-router";

export default function RootLayout() {
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
            backgroundColor: colors.neutral(0.05),
          },
        }}
      />
      <Stack.Screen name="(tabs)" options={{ title: "Form" }} />
    </Stack>
  );
}
