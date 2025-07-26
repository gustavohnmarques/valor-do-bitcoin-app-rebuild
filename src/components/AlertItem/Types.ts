import { Alert } from "../../types/Alert.types";

export interface AlertItemProps extends Alert {
    handleEditAlert: () => void;
    handleDeleteAlert: (id: string) => void;
    handleChangeStatus: (id: string, active: boolean) => void;
}