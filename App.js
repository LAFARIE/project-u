import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Button } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import HomeScreen from './SIIT/HomeScreen';
import DetailsScreen from './SIIT/DetailsScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'Details') {
              iconName = focused ? 'list' : 'list-outline';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen 
    name="Details" 
    component={DetailsScreen} 
    options={{ 
      headerRight: () => (
        <Button
          onPress={() => alert('This is a button!')}
          title="Profile"
          color="#000"
        />
      ),
    }}
  />
      </Tab.Navigator>
    </NavigationContainer>
  );
}