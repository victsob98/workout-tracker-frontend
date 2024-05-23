import { TabBarIcon } from "@atoms/TabBarIcon/TabBarIcon";
import { useClientOnlyValue } from "@hooks/useClientOnlyValue";
import { NavigationHeader } from "@organisms/NavigationHeader";
import { theme } from "@theme/Theme";
import { Tabs } from "expo-router";
import React from "react";
import { IconButton } from "react-native-paper";

import { tabNavigationOptions } from "./TabNavigation.types";

export const TabNavigation = () => {
  return (
    <Tabs
      screenOptions={{
        ...tabNavigationOptions,
        headerShown: useClientOnlyValue(false, true),
      }}
      sceneContainerStyle={{ backgroundColor: "black" }}
    >
      <Tabs.Screen
        name="workoutPlans/index"
        options={{
          title: "Workout plans",
          tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
          header: (props) => (
            <NavigationHeader
              title={props.options.title}
              leftComponent={<IconButton icon={"chevron-left"} size={35} iconColor={theme.colors.secondary} />}
              rightComponent={<IconButton icon={"plus-circle"} size={35} iconColor={theme.colors.primary} />}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="exercises"
        options={{
          title: "Exercises",
          tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
          header: (props) => (
            <NavigationHeader
              title={props.options.title}
              leftComponent={<IconButton icon={"chevron-left"} size={35} iconColor={theme.colors.secondary} />}
              rightComponent={<IconButton icon={"plus-circle"} size={35} iconColor={theme.colors.primary} />}
            />
          ),
        }}
      />
    </Tabs>
  );
};
