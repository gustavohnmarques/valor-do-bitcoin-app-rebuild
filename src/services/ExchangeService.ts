import api from "../lib/api";
import { Exchange } from "../types/Exchange.types";

export const ExchangeService = {
    getByCrypto(cryptoId: string) {
        return api.get<Exchange[]>(`/exchange/by-crypto/${cryptoId}`);
    },
}