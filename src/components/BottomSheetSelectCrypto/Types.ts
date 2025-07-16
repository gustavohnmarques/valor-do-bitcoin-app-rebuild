import { Crypto } from "../../types/Crypto.types";

export interface BottomSheetSelectCryptoProps {
    onRequestClose: () => void;
    setSelectedCrypto: (crypto: Crypto) => void;
}