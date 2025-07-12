
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AlertScreen from '../screens/Alert/AlertScreen';
import CreateAlertScreen from '../screens/Alert/CreateAlert/CreateAlertScreen';

export type AlertStackParamList = {
  Alert: undefined;
  CreateAlert: undefined;
};

const Stack = createNativeStackNavigator<AlertStackParamList>();

const AlertStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Alert" component={AlertScreen} options={{ title: 'Alerts' }} />
      <Stack.Screen name="CreateAlert" component={CreateAlertScreen} options={{ title: 'Create Alert' }} />
    </Stack.Navigator>
  );
};

export default AlertStack;
