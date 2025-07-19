import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import CryptoScreen from '../screens/Crypto/CryptoScreen';
import AlertStack from './AlertStack';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import useScreenPercentage from '../hooks/useScreenPercentage';

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  const screenPercentage = useScreenPercentage();
  
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: 'rgba(255, 255, 255, 1)',         
          tabBarInactiveTintColor: 'rgba(255, 255, 255, 0.8)',         
          tabBarStyle: {
            height: screenPercentage.height(7).toNumber(),
            backgroundColor: '#242c35',
            borderTopWidth: 1,
            borderColor: 'rgba(255, 255, 255, 0.2)',      
          },
          tabBarLabelStyle: {
            fontSize: screenPercentage.fontSize(1.4).toNumber(),
            fontFamily: 'Comfortaa-Bold',
            fontWeight: '600',
            marginTop: 2,
          },
          tabBarIconStyle: {
            marginBottom: 2,
          },
        }}
      >
        <Tab.Screen
          name="Crypto"
          component={CryptoScreen}
          options={{
            tabBarLabel: 'Criptos',
            tabBarIcon: ({ color }) => (
              <FontAwesome6 
                name="bitcoin" 
                size={screenPercentage.fontSize(2.2).toNumber()} 
                color={color} 
              />
            ),
          }}
        />
        <Tab.Screen
          name="Alert"
          component={AlertStack}
          options={{
            tabBarLabel: 'Alertas',
            tabBarIcon: ({ color }) => (
              <FontAwesome6 
                name="bell" 
                size={screenPercentage.fontSize(2.2).toNumber()} 
                color={color} 
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default BottomTabs;
