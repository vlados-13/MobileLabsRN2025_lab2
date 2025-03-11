import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { SvgXml } from "react-native-svg";
import HomeScreen from "./screens/Home";
import ProfileScreen from "./screens/Profile";
import ComunityScreen from "./screens/Community";
import ChatScreen from "./screens/Chat";
import SafetyScreen from "./screens/Safety";
import {
  chatIcon,
  community,
  home,
  rustIcon,
  safetyIcon,
} from "./components/icons";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: {
            backgroundColor: "#171a21",
            borderTopWidth: 0,
          },
          tabBarActiveTintColor: "#FFFFFF",
          tabBarShowLabel: false,
          headerShown: false,
        }}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarIcon: ({ color }) => (
              <SvgXml xml={home} fill={color} width={25} height={25} />
            ),
          }}
        />

        <Tab.Screen
          name="Community"
          component={ComunityScreen}
          options={{
            tabBarIcon: ({ color }) => (
              <SvgXml xml={community} fill={color} width={25} height={25} />
            ),
          }}
        />

        <Tab.Screen
          name="Chat"
          component={ChatScreen}
          options={{
            tabBarIcon: ({ color }) => (
              <SvgXml xml={chatIcon} fill={color} width={25} height={25} />
            ),
          }}
        />

        <Tab.Screen
          name="Safety"
          component={SafetyScreen}
          options={{
            tabBarIcon: ({ color }) => (
              <SvgXml xml={safetyIcon} fill={color} width={25} height={25} />
            ),
          }}
        />

        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            tabBarIcon: ({ color }) => (
              <SvgXml xml={rustIcon} fill={color} width={25} height={25} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
