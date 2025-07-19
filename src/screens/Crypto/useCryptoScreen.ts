import { useCallback, useEffect, useMemo, useState } from "react";
import { Crypto } from "../../types/Crypto.types";
import { ExchangeService } from "../../services/ExchangeService";
import { Exchange } from "../../types/Exchange.types";
import useScreenPercentage from "../../hooks/useScreenPercentage";
import { Alert } from "react-native";
import BootSplash from "react-native-bootsplash";

const useCryptoScreen = () => {
    
    const [selectedCrypto, setSelectedCrypto] = useState<Crypto>({
        id: 1,
        name: 'BTC',
    });
    const [exchanges, setExchanges] = useState<Exchange[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [orderBy, setOrderBy] = useState<'asc' | 'desc'>('asc');

    useEffect(() => {
        BootSplash.hide({ fade: true });
    }, []);

    useEffect(() => {
        handleCryptoChange();
    }, [selectedCrypto]);

    const handleCryptoChange = useCallback(() => {

        if (!selectedCrypto) return;
        
        setIsLoading(true);
        ExchangeService.getByCrypto(selectedCrypto.name).then(response => {
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

    useEffect(() => {
        setExchanges(prev => {
            return [...prev].sort((a, b) => {
                if (orderBy === 'asc') {
                    return Number(a.last) - Number(b.last);
                } else {
                    return Number(b.last) - Number(a.last);
                }
            }); 
        });
    }, [orderBy]);

    return {
        selectedCrypto,
        setSelectedCrypto,        
        handleCryptoChange,
        isLoading,        
        exchanges,
        skeletonQuantity,
        orderBy,
        setOrderBy
    }
}

export default useCryptoScreen;