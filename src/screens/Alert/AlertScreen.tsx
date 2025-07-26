import { ActivityIndicator, ScrollView } from "react-native";
import * as S from "./AlertScreen.styles";
import ButtonAddAlert from "../../components/ButtonAddAlert/ButtonAddAlert";
import useAlertScreen from "./useAlertScreen";
import { CryptoAlert } from "../../types/Alert.types";
import { useCallback } from "react";
import CryptoAlertItem from "../../components/CryptoAlertItem/CryptoAlertItem";
import { useNavigation } from "@react-navigation/native";
import { AlertScreenNavigationProp } from "../../types/Navigation.types";

const AlertScreen: React.FC = () => {

    const { isLoading, alerts, handleDeleteAlert, handleChangeStatus } = useAlertScreen();
    const navigation = useNavigation<AlertScreenNavigationProp>();

    const handleAddAlert = useCallback(() => {
        navigation.navigate('CreateAlert');
    }, [navigation]);

    const renderCryptoItem = useCallback((item: CryptoAlert, index: number) => (
        <CryptoAlertItem
            key={item.crypto}
            cryptoAlert={item}
            handleEditAlert={() => {}}
            handleDeleteAlert={handleDeleteAlert}
            handleChangeStatus={handleChangeStatus}
        />
    ), []);

    return (
        <S.Container>

            <S.Header>
                <S.Title>Alertas de preço</S.Title>
                <S.ButtonContainer>
                    <ButtonAddAlert onPress={handleAddAlert} icon="plus" text="Adicionar" />
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

                {!isLoading && alerts.length === 0 && (
                    <S.EmptyContainer>
                        <S.EmptyText>Você ainda não possui alertas de preço.</S.EmptyText>
                    </S.EmptyContainer>
                )}
            </S.AlertsContainer>

        </S.Container>
    );
};

export default AlertScreen;