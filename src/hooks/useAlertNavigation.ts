import { useNavigation } from "@react-navigation/native";
import { AlertScreenNavigationProp, CreateAlertScreenNavigationProp } from "../types/Navigation.types";


export const useAlertNavigation = () => {
    return useNavigation<AlertScreenNavigationProp>();
};

export const useCreateAlertNavigation = () => {
    return useNavigation<CreateAlertScreenNavigationProp>();
};