import { ActivityIndicator, ScrollView } from "react-native";
import * as S from "./AlertScreen.styles";
import ButtonAddAlert from "../../components/ButtonAddAlert/ButtonAddAlert";
import useAlertScreen from "./useAlertScreen";
import { CryptoAlert } from "../../types/Alert.types";
import { useCallback } from "react";
import CryptoAlertItem from "../../components/CryptoAlertItem/CryptoAlertItem";

const AlertScreen: React.FC = () => {

    const { isLoading, alerts } = useAlertScreen();

    const renderCryptoItem = useCallback((item: CryptoAlert, index: number) => (
        <CryptoAlertItem
            key={item.crypto}
            cryptoAlert={item}
            handleEditAlert={() => {}}
            handleDeleteAlert={() => {}}
        />
    ), []);

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

                {!isLoading && alerts.length > 0 && (
                    <ScrollView 
                        showsVerticalScrollIndicator={false}
                        contentContainerStyle={{ paddingBottom: 15 }}
                    >
                        {alerts.map((item, index) => renderCryptoItem(item, index))}
                    </ScrollView>
                )}
            </S.AlertsContainer>

        </S.Container>
    );
};

export default AlertScreen;