import { Tabs } from 'expo-router';
import React from 'react';

import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { MaterialIcons } from '@expo/vector-icons';
import { useTheme } from '@react-navigation/native';
import { StyleSheet, View } from 'react-native';

export default function TabLayout() {
  const { colors } = useTheme()
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: 'white',  // Active color for the left icon
        tabBarInactiveTintColor: '#49454F', // Inactive color for the right icon
        headerShown: true,
        tabBarStyle: {
          elevation: 0, // Remove shadow on Android
          borderTopWidth: 0, // Remove the top border on the tab bar
          shadowOpacity: 0, // Remove shadow on iOS
        },
        headerStyle: {
          backgroundColor: 'transparent', 
          elevation: 0,
          shadowOpacity: 0, 
          borderBottomWidth: 0,
        },
        headerTintColor: 'black',
        tabBarShowLabel: false,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ color, focused }) => (
            <View
              style={[
                styles.iconContainer,
                focused && styles.activeIconBackground, // Apply background when focused
              ]}>
              <TabBarIcon name={focused ? 'home' : 'home-outline'} size={26} color={color} />
            </View>
          ),
          headerTitle: 'Home',
          headerRight: () => (
            <MaterialIcons name="search" size={24} color="black" style={{ marginRight: 10 }} />
          ),
        }}
      />
      <Tabs.Screen
        name="journal"
        options={{
          tabBarIcon: ({ color, focused }) => (
            <View
              style={[
                styles.iconContainer,
                focused && styles.activeIconBackground, // Apply background when focused
              ]}>
              <MaterialIcons name={'event-note'} size={26} color={color} />
            </View>
          ),
          headerTitle: 'Journal',
          headerRight: () => (
            <MaterialIcons name="search" size={24} color="black" style={{ marginRight: 10 }} />
          ),
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 70,
    height: 35,
    borderRadius: 20
  },
  activeIconBackground: {
    backgroundColor: '#4650FA',
  }
})
