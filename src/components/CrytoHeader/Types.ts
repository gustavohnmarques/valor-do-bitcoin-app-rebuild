import { Crypto } from "../../types/Crypto.types";

export interface CryptoHeaderProps {
    onChangeCrypto: (crypto: Crypto) => void;
}