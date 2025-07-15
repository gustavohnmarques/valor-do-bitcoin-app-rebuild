import api from "../lib/api";
import { Crypto } from "../types/Crypto.types";

export const CryptoService = {
    get() {
        return api.get<Crypto[]>(`/crypto`);
    },
}