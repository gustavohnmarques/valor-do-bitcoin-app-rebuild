import { FlatList, RefreshControl, Text, View } from "react-native";
import * as S from "./CryptoScreen.styles";
import CrytoHeader from "../../components/CrytoHeader/CrytoHeader";
import useCryptoScreen from "./useCryptoScreen";
import { useCallback } from "react";
import ExchangeItem from "../../components/ExchangeItem/ExchangeItem";
import { Exchange } from "../../types/Exchange.types";
import ExchangeItemSkeleton from "../../components/ExchangeItem/ExchangeItemSkeleton";

const CryptoScreen: React.FC = () => {

    const { 
        exchanges, 
        isLoading, 
        skeletonQuantity,
        handleCryptoChange,
        cryptos
    } = useCryptoScreen();


    const renderExchanges = useCallback(() => {
        if (!exchanges.length) return <></>

        return <FlatList
            data={exchanges}
            style={{ paddingBottom: 20 }}
            renderItem={(item) => (
                <ExchangeItem {...item.item} />
            )}
            contentContainerStyle={{ gap: 20 }}
            keyExtractor={(item) => item.id.toString()}
            scrollEnabled={false}
        />
    }, [exchanges]);


    const renderSkeleton = useCallback(() => {        
        return <FlatList
            data={[...Array(skeletonQuantity).keys()]}
            style={{ paddingBottom: 20 }}
            renderItem={(item) => (
                <ExchangeItemSkeleton />
            )}
            contentContainerStyle={{ gap: 20 }}
            keyExtractor={(item) => item.toString()}
            scrollEnabled={false}
        />
    }, []);

    return (
        <S.Container>
            <S.ExchangeList
                refreshControl={
                    <RefreshControl
                        refreshing={false}
                        onRefresh={handleCryptoChange} />
                }>
                {isLoading ? renderSkeleton() : renderExchanges()}
            </S.ExchangeList>

        </S.Container>
    )
}

export default CryptoScreen;