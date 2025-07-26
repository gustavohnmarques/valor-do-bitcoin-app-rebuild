
import { useIsFocused, useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { AlertService } from "../../services/AlertService";
import { Alert, CreateAlert, CryptoAlert } from "../../types/Alert.types";
import storage from "../../storage/storage";
import Toast from "react-native-toast-message";
import { useLoader } from "../../contexts/LoaderContext";
import { AlertScreenNavigationProp } from "../../types/Navigation.types";

const AlertScreen = () => {

    const navigation = useNavigation<AlertScreenNavigationProp>();

    const isFocused = useIsFocused();
    const [isLoading, setIsLoading] = useState(true);
    const [alerts, setAlerts] = useState<CryptoAlert[]>([]);
    const { show, hide } = useLoader();

    useEffect(() => {
        const userId = storage.getString('userId');
        if (isFocused && userId) {
            getAlerts(userId);
        }
    }, [isFocused]);

    const getAlerts = (userId: string) => {
        setIsLoading(true);
        setAlerts([]);
        AlertService.getAllByUser(userId).then(response => {
            setAlerts(response.data);
        }).catch(() => {
            console.error("Failed to fetch alerts");
        }).finally(() => {
            setIsLoading(false);
        });
    }

    const handleDeleteAlert = (id: string) => {
        show();
        AlertService.delete(id).then(() => {
            Toast.show({
                type: 'success',
                text1: 'Alerta excluído com sucesso',
            });
            getAlerts(storage.getString('userId') || '');
        }).catch(() => {
            Toast.show({
                type: 'error',
                text1: 'Erro ao excluir alerta',
            });
        }).finally(() => {
            hide();
        });
    }

    const handleChangeStatus = (id: string, active: boolean) => {
        show();

        const updatedAlert: Partial<CreateAlert> = {
            active
        };

        AlertService.patch(id, updatedAlert).then((red) => {
            console.log("Alert status updated successfully", red);
            Toast.show({
                type: 'success',
                text1: 'Alerta excluído com sucesso',
            });
            getAlerts(storage.getString('userId') || '');
        }).catch(() => {
            Toast.show({
                type: 'error',
                text1: 'Erro ao excluir alerta',
            });
        }).finally(() => {
            hide();
        });
    }

    const handleEditAlert = (alert: Alert) => {
        navigation.navigate('CreateAlert', { alert });
    }

    return {
        handleEditAlert,
        isLoading,
        alerts,
        handleDeleteAlert,
        handleChangeStatus,
    }
}

export default AlertScreen;