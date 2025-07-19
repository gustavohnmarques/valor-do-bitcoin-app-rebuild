
import { useIsFocused } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { AlertService } from "../../services/AlertService";
import { CryptoAlert } from "../../types/Alert.types";

const AlertScreen = () => {

    const isFocused = useIsFocused();
    const [isLoading, setIsLoading] = useState(true);
    const [alerts, setAlerts] = useState<CryptoAlert[]>([]);

    useEffect(() => {
        if (isFocused) {            
            getAlerts();
        }
    }, [isFocused]);

    const getAlerts = () => {
        setIsLoading(true);
        AlertService.getAllByUser("1b42bcea-5462-43fc-9c41-4095c8350e8f").then(response => {
            setAlerts(response.data);
            console.log("Alerts fetched successfully:", response.data);
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