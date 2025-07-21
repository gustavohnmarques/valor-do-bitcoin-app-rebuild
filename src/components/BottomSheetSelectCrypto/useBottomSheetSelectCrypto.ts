import { useEffect, useState } from "react";
import { Crypto } from "../../types/Crypto.types";
import { CryptoService } from "../../services/CryptoService";
import storage from "../../storage/storage";

const useBottomSheetSelectCrypto = () => {
    const [crypto, setCrypto] = useState<Crypto[]>([]);
    const [originalList, setOriginalList] = useState<Crypto[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        setTimeout(() => {
            getAllCrypto();
        }, 100);
    }, []);


    const getAllCrypto = () => {
        const cryptoList = storage.getString('criptomoedas');

        if (cryptoList !== undefined) {
            setCrypto(JSON.parse(cryptoList));
            setIsLoading(false);
            return;
        }

        CryptoService.get().then(response => {
            setCrypto(response.data);
            storage.set('criptomoedas', JSON.stringify(response.data));
            setIsLoading(false);
        }).catch(() => {
            setIsLoading(false);
        });
    }

    useEffect(() => {
        setOriginalList(crypto);
    }, [crypto]);

    const search = (text: string) => {
        const lista = text === ''
            ? [...originalList]
            : [...originalList].filter((i) =>
                i.name.toLowerCase().includes(text.toLowerCase())
            );
        setCrypto(lista);
    };

    return {
        search,
        crypto,
        isLoading,
    };
};

export default useBottomSheetSelectCrypto;