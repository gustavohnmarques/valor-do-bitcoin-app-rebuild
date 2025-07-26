
import { useIsFocused } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { AlertService } from "../../services/AlertService";
import { CryptoAlert } from "../../types/Alert.types";
import storage from "../../storage/storage";

const AlertScreen = () => {

    const isFocused = useIsFocused();
    const [isLoading, setIsLoading] = useState(true);
    const [alerts, setAlerts] = useState<CryptoAlert[]>([]);

    useEffect(() => {
        const userId = storage.getString('userId');
        if (isFocused && userId) {            
            getAlerts(userId);
        }
    }, [isFocused]);

    const getAlerts = (userId: string) => {
        setIsLoading(true);
        AlertService.getAllByUser(userId).then(response => {
            setAlerts(response.data);
        }).catch(() => {
            console.error("Failed to fetch alerts");
        }).finally(() => {
            setIsLoading(false);
        });
    }

    return {
        isLoading,
        alerts,
    }
}

export default AlertScreen;