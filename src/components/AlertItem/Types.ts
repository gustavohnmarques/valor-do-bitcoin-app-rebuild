import { Alert } from "../../types/Alert.types";

export interface AlertItemProps extends Alert {
    handleEditAlert: () => void;
    handleDeleteAlert: () => void;
}