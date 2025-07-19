import api from "../lib/api";
import { CryptoAlert } from "../types/Alert.types";

export const AlertService = {
    getAllByUser(userId: string) {
        return api.get<CryptoAlert[]>(`/alert/by-user/${userId}`);
    },
}