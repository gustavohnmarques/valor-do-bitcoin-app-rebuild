import { useEffect, useState } from "react";
import { Crypto } from "../../types/Crypto.types";
import { ExchangeService } from "../../services/ExchangeService";
import { Exchange } from "../../types/Exchange.types";

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
        if (selectedCrypto) {
            console.log("Selected crypto:", selectedCrypto);
            handleCryptoChange(selectedCrypto);
        }
    }, [selectedCrypto]);


    const handleCryptoChange = (crypto: Crypto) => {        
        ExchangeService.getByCrypto(crypto.id)
            .then(response => {                
                setExchanges(response.data);
                console.log("Exchanges for crypto:", crypto.id, response.data);
            })
            .catch(error => {
                console.error("Error fetching crypto data:", error);
            });
    }

    return {
        isLoading,
        cryptos,
        exchanges,
    }
}

export default useCryptoScreen;