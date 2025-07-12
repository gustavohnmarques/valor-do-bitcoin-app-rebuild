import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import CryptoScreen from '../screens/Crypto/CryptoScreen';
import AlertStack from './AlertStack';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: '#6200ee',
        }}
      >
        <Tab.Screen
          name="Crypto"
          component={CryptoScreen}
          options={{
            tabBarIcon: ({ color, size }) => <FontAwesome6 name="bitcoin" size={size} color={color} />,
          }}
        />
        <Tab.Screen
          name="Alert"
          component={AlertStack}
          options={{
            tabBarIcon: ({ color, size }) => <FontAwesome6 name="bell" size={size} color={color} />,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default BottomTabs;
