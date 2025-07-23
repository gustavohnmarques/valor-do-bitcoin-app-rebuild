
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AlertScreen from '../screens/Alert/AlertScreen';
import CreateAlertScreen from '../screens/CreateAlert/CreateAlertScreen';
import { AlertStackParamList } from '../types/Navigation.types';

const Stack = createNativeStackNavigator<AlertStackParamList>();

const AlertStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="Alert" 
        component={AlertScreen} 
        options={{ headerShown: false }} 
      />
      <Stack.Screen
        name="CreateAlert"
        component={CreateAlertScreen}
        options={{ headerShown: false }} 
      />
    </Stack.Navigator>
  );
};

export default AlertStack;
