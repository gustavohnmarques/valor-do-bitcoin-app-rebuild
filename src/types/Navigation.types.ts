import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Alert } from "./Alert.types";

export type AlertScreenNavigationProp = NativeStackNavigationProp<AlertStackParamList, 'Alert'>;
export type CreateAlertScreenNavigationProp = NativeStackNavigationProp<AlertStackParamList, 'CreateAlert'>;

export type AlertStackParamList = {
  Alert: undefined;
  CreateAlert: {
    alert: Alert;
  } | undefined;
};
