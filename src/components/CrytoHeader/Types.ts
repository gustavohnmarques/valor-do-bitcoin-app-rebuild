import { Crypto } from "../../types/Crypto.types";

export interface CryptoHeaderProps {
    selectedCrypto: Crypto;
    setSelectedCrypto: (crypto: Crypto) => void;
    orderBy: 'asc' | 'desc';
    setOrderBy: (order: 'asc' | 'desc') => void;
}