import { use, useCallback, useEffect, useMemo, useState } from "react";
import { Crypto } from "../../types/Crypto.types";
import { ExchangeService } from "../../services/ExchangeService";
import { Exchange } from "../../types/Exchange.types";
import useScreenPercentage from "../../hooks/useScreenPercentage";
import { Alert } from "react-native";

const useCryptoScreen = () => {

    const [cryptos, setCryptos] = useState<Crypto[]>([]);
    const [selectedCrypto, setSelectedCrypto] = useState<Crypto>();
    const [exchanges, setExchanges] = useState<Exchange[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        setSelectedCrypto({
            id: 'BTC',
            name: 'Bitcoin',
        });
    }, []);

    useEffect(() => {
        handleCryptoChange();
    }, [selectedCrypto]);

    const handleCryptoChange = useCallback(() => {

        if (!selectedCrypto) return;
        
        setIsLoading(true);
        ExchangeService.getByCrypto(selectedCrypto.id).then(response => {
            setExchanges(response.data);
        }).catch(error => {
            Alert.alert("Erro", "Não foi possível carregar as exchanges para a criptomoeda selecionada.");
        }).finally(() => {
            setTimeout(() => {
                setIsLoading(false);
            }, 1000);
        });
    }, [selectedCrypto]);

    const skeletonQuantity = useMemo(() => {
        return Math.floor(useScreenPercentage().height(10).toNumber() / 7);
    }, []);

    return {
        handleCryptoChange,
        isLoading,
        cryptos,
        exchanges,
        skeletonQuantity
    }
}

export default useCryptoScreen;