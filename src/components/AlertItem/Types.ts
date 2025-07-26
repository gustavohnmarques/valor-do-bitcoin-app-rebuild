import { Alert, CryptoAlert } from "../../types/Alert.types";
import { Crypto } from "../../types/Crypto.types";

export interface AlertItemProps extends Alert {
    handleEditAlert: (alert: Alert) => void;
    handleDeleteAlert: (id: string) => void;
    handleChangeStatus: (id: string, active: boolean) => void;
}