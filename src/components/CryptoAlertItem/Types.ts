import { Alert, CryptoAlert } from "../../types/Alert.types";

export interface CryptoAlertItemProps {
    cryptoAlert: CryptoAlert;
    handleEditAlert: (alert: Alert) => void;
    handleDeleteAlert: (alertId: string) => void;    
    handleChangeStatus: (alertId: string, active: boolean) => void;
}