import { FlatList, RefreshControl } from "react-native";
import * as S from "./CryptoScreen.styles";
import CrytoHeader from "../../components/CrytoHeader/CrytoHeader";
import useCryptoScreen from "./useCryptoScreen";
import { useCallback } from "react";
import ExchangeItem from "../../components/ExchangeItem/ExchangeItem";
import ExchangeItemSkeleton from "../../components/ExchangeItem/ExchangeItemSkeleton";

const CryptoScreen: React.FC = () => {

    const {
        exchanges,
        isLoading,
        skeletonQuantity,
        handleCryptoChange,
        selectedCrypto,
        orderBy,
        setOrderBy,
        setSelectedCrypto,
    } = useCryptoScreen();


    const renderExchanges = useCallback(() => {
        if (!exchanges.length) return <></>

        return <FlatList
            data={exchanges}
            style={{paddingHorizontal: 10, paddingBottom: 20 }}
            renderItem={(item) => (
                <ExchangeItem {...item.item} />
            )}
            contentContainerStyle={{ gap: 20}}
            keyExtractor={(item) => item.id.toString()}
            scrollEnabled={false}
        />
    }, [exchanges, orderBy]);


    const renderSkeleton = useCallback(() => {
        return <FlatList
            data={[...Array(exchanges.length > 0 ? exchanges.length : skeletonQuantity).keys()]}
            style={{paddingHorizontal: 10, paddingBottom: 20 }}
            renderItem={(item) => (
                <ExchangeItemSkeleton />
            )}
            contentContainerStyle={{ gap: 20}}
            keyExtractor={(item) => item.toString()}
            scrollEnabled={false}
        />
    }, [exchanges]);

    return (
        <S.Container>
            <CrytoHeader
                selectedCrypto={selectedCrypto}
                setSelectedCrypto={setSelectedCrypto}
                orderBy={orderBy}
                setOrderBy={setOrderBy}
            />
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