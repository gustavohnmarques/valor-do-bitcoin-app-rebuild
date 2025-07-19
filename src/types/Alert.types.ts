import { Exchange } from "./Exchange.types";

export interface CryptoAlert {
    crypto: string,
    image: string
    alerts: Alert[]
}

export interface Alert {
    id: string;
    type_alert: 'PORCENTAGEM' | 'VALOR';
    type_indicator: 'SUBIR' | 'CAIR';
    value: number;
    percentage?: number;
    active: boolean;
    exchanges: Exchange[];
}