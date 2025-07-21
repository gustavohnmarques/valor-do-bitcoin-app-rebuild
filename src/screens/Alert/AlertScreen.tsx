import { ActivityIndicator } from "react-native";
import * as S from "./AlertScreen.styles";
import ButtonAddAlert from "../../components/ButtonAddAlert/ButtonAddAlert";
import useAlertScreen from "./useAlertScreen";
import { FlashList } from "@shopify/flash-list";
import { CryptoAlert } from "../../types/Alert.types";
import { useCallback } from "react";
import CryptoAlertItem from "../../components/CryptoAlertItem/CryptoAlertItem";

const AlertScreen: React.FC = () => {

    const { isLoading, alerts } = useAlertScreen();

    const renderCryptoItem = useCallback(({ item }: { item: CryptoAlert }) => (
        <CryptoAlertItem
            cryptoAlert={item}
            handleEditAlert={() => {}}
            handleDeleteAlert={() => {}}
        />
    ), []);

    const renderAlertList = useCallback(() => (
        <FlashList
            data={alerts}
            renderItem={renderCryptoItem}
            keyExtractor={(item: CryptoAlert) => item.crypto}
            estimatedItemSize={5}
            showsVerticalScrollIndicator={false}
            removeClippedSubviews={true}
            contentContainerStyle={{ paddingBottom: 15 }}
            getItemType={() => 'crypto-item'}
        />
    ), [alerts, renderCryptoItem]);

    return (
        <S.Container>

            <S.Header>
                <S.Title>Alertas de preço</S.Title>
                <S.ButtonContainer>
                    <ButtonAddAlert onPress={() => { }} />
                </S.ButtonContainer>
            </S.Header>

            <S.AlertsContainer>
                {isLoading && <ActivityIndicator size="large" color="#fff" style={{ marginTop: 40 }} />}

                {!isLoading && alerts.length > 0 && renderAlertList()}
            </S.AlertsContainer>

        </S.Container>
    );
};

export default AlertScreen;