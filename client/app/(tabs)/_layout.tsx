import {
  MaterialTopTabNavigationEventMap,
  MaterialTopTabNavigationOptions,
  createMaterialTopTabNavigator,
} from "@react-navigation/material-top-tabs";
import { withLayoutContext } from "expo-router";
import { ParamListBase, TabNavigationState } from "@react-navigation/native";
import { colors } from "@/constants";

const { Navigator } = createMaterialTopTabNavigator();

export const MaterialTopTabs = withLayoutContext<
  MaterialTopTabNavigationOptions,
  typeof Navigator,
  TabNavigationState<ParamListBase>,
  MaterialTopTabNavigationEventMap
>(Navigator);

export default function TabLayout() {
  return (
    <MaterialTopTabs
      screenOptions={{
        tabBarIndicatorStyle: {
          backgroundColor: colors.primary,
        },
        tabBarLabelStyle: {
          textTransform: "uppercase",
        },
      }}
    >
      <MaterialTopTabs.Screen
        name="questions"
        options={{ title: "questions" }}
      />
      <MaterialTopTabs.Screen name="preview" options={{ title: "preview" }} />
      <MaterialTopTabs.Screen
        name="responses"
        options={{ title: "responses" }}
      />
    </MaterialTopTabs>
  );
}
