import api from "../lib/api";
import { CreateAlert, CryptoAlert } from "../types/Alert.types";

export const AlertService = {
    getAllByUser(userId: string) {
        return api.get<CryptoAlert[]>(`/alert/by-user/${userId}`);
    },
    create(alert: CreateAlert) {
        return api.post<CryptoAlert>('/alert', alert);
    },
    delete(alertId: string) {
        return api.delete(`/alert/delete/${alertId}`);
    }
}