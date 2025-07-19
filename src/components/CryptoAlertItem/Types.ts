import { CryptoAlert } from "../../types/Alert.types";

export interface CryptoAlertItemProps {
    cryptoAlert: CryptoAlert;
    handleEditAlert: (alert: CryptoAlert) => void;
    handleDeleteAlert: (alertId: string) => void;    
}