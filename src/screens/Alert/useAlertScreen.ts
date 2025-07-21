
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
        AlertService.getAllByUser("0369f6ac-9444-4083-a430-d34dbc4fbb21").then(response => {
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