import * as S from "./CreateAlertScreen.styles";
import FontAwesome6 from "react-native-vector-icons/FontAwesome6";
import ButtonAddAlert from "../../components/ButtonAddAlert/ButtonAddAlert";
import useCreateAlertScreen from "./useCreateAlertScreen";
import CustomSelectDropdown from "../../components/CustomSelectDropdown/CustomSelectDropdown";
import Card from "../../components/Card/Card";
import { useCallback } from "react";
import CachedImage from "../../components/CachedImage/CachedImage";
import useScreenPercentage from "../../hooks/useScreenPercentage";
import BottomSheetSelectCrypto from "../../components/BottomSheetSelectCrypto/BottomSheetSelectCrypto";
import CheckBox from '@react-native-community/checkbox';
import { Controller } from "react-hook-form";

const CreateAlertScreen: React.FC = () => {

    const {
        handleClickBack,
        selectedCrypto,
        isBottomSheetVisible,
        setSelectedCrypto,
        setIsBottomSheetVisible,
        exchanges,
        selectedExchanges,
        handleExchangeSelection,
        handleSelectAllExchanges,
        typeAlertOptions,
        control,
        errors,
        getValues,
        indicatorOptions
    } = useCreateAlertScreen();


    const renderInput = useCallback(() => (
        <S.InputContainer>
            <S.CustomInput
                type="currency"
                options={{
                    prefix: 'R$ ',
                    decimalSeparator: ',',
                    groupSeparator: '.',
                    precision: 2
                }}
                value={''}
                onChangeText={(formatted, raw) => {
                    //setValor(formatted);
                }}
                keyboardType="numeric"
                style={{ borderWidth: 1, padding: 8 }}
            />
        </S.InputContainer>

    ), []);

    const renderExchanges = useCallback(() => (
        <S.ExchangesContainer>
            {exchanges.map((exchange, index) => (
                <>
                    <S.ExchangeItem key={exchange.id} onPress={() => handleExchangeSelection(exchange.id)}>
                        <S.ExchangeImage>
                            <CachedImage uri={`/exchange/${exchange.image}`} style={{
                                borderRadius: 10,
                                width: useScreenPercentage().height(3.5).toNumber(),
                                height: useScreenPercentage().height(3.5).toNumber()
                            }} />
                        </S.ExchangeImage>
                        <S.ExchangeDetails>
                            <S.ExchangeName>{exchange.name}</S.ExchangeName>
                            <CheckBox
                                key={`checkbox-${exchange.id}`}
                                value={selectedExchanges.includes(exchange.id)}
                                onValueChange={() => handleExchangeSelection(exchange.id)}
                                tintColors={{
                                    true: '#F5A623',
                                    false: '#fff',
                                }}
                            />
                        </S.ExchangeDetails>
                    </S.ExchangeItem>
                    {index < exchanges.length - 1 && <S.Divider key={`divider-${exchange.id}`} />}
                </>
            ))}
        </S.ExchangesContainer>
    ), [exchanges, selectedExchanges, handleExchangeSelection]);

    const renderButtonSelectAll = useCallback(() => (
        <S.SelectAllButton onPress={handleSelectAllExchanges}>
            <S.SelectAllButtonText>Selecionar todas</S.SelectAllButtonText>
        </S.SelectAllButton>
    ), [handleSelectAllExchanges]);

    return (
        <S.Container
            stickyHeaderIndices={[0]}
        >
            <S.HeaderContainer>
                <S.BackButton onPress={handleClickBack}>
                    <FontAwesome6 name="chevron-left" size={24} color="#fff" />
                </S.BackButton>
                <S.Title>Adicionar Alerta</S.Title>
                <ButtonAddAlert onPress={handleClickBack} icon="check" text="Salvar" />
            </S.HeaderContainer>

            <Card title="Criptomoeda">
                <S.CryptoContainer onPress={() => setIsBottomSheetVisible(true)}>
                    <S.CryptoSelector>
                        <CachedImage uri={`/crypto/${selectedCrypto.name}.webp`} style={{
                            width: useScreenPercentage().height(2.4).toNumber(),
                            height: useScreenPercentage().height(2.4).toNumber(),
                            borderRadius: 10,
                        }} />
                        <S.CryptoName>{selectedCrypto.name}</S.CryptoName>
                    </S.CryptoSelector>
                    <FontAwesome6 name="chevron-down" size={24} color="#fff" />
                </S.CryptoContainer>
            </Card>

            <Card title="Tipo de Alerta">
                <>
                    <Controller
                        name="type_alert"
                        control={control}
                        render={({ field }) => (
                            <CustomSelectDropdown
                                items={typeAlertOptions}
                                onChange={(item) => field.onChange(item.id)}
                            />
                        )}
                    />

                    <S.Divider />
                    <Controller
                        name="type_indicator"
                        control={control}
                        render={({ field }) => (
                            <CustomSelectDropdown
                                items={indicatorOptions}
                                onChange={(item) => field.onChange(item.id)}
                            />
                        )}
                    />
                    <S.Divider />
                    {renderInput()}
                </>
            </Card>

            <Card
                title="Corretoras selecionadas"
                button={renderButtonSelectAll()}
            >
                {renderExchanges()}
            </Card>
            {isBottomSheetVisible && <BottomSheetSelectCrypto onRequestClose={() => setIsBottomSheetVisible(false)} setSelectedCrypto={setSelectedCrypto} />}
        </S.Container>
    );
}

export default CreateAlertScreen;