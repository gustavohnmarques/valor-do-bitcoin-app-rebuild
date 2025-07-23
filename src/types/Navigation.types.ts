import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export type AlertScreenNavigationProp = NativeStackNavigationProp<AlertStackParamList, 'Alert'>;
export type CreateAlertScreenNavigationProp = NativeStackNavigationProp<AlertStackParamList, 'CreateAlert'>;

export type AlertStackParamList = {
  Alert: undefined;
  CreateAlert: undefined;
};
