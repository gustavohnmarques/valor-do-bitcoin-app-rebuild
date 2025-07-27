import * as S from "./CreateAlertScreen.styles";
import FontAwesome6 from "react-native-vector-icons/FontAwesome6";
import ButtonAddAlert from "../../components/ButtonAddAlert/ButtonAddAlert";
import useCreateAlertScreen from "./useCreateAlertScreen";
import CustomSelectDropdown from "../../components/CustomSelectDropdown/CustomSelectDropdown";
import Card from "../../components/Card/Card";
import React, { useCallback, Fragment } from "react";
import CachedImage from "../../components/CachedImage/CachedImage";
import useScreenPercentage from "../../hooks/useScreenPercentage";
import BottomSheetSelectCrypto from "../../components/BottomSheetSelectCrypto/BottomSheetSelectCrypto";
import { Controller } from "react-hook-form";
import PriceInput from "../../components/Input/PriceInput";
import PercentageInput from "../../components/Input/PercentageInput";
import { FormatCurrency } from "../../utils/FormatCurrency";
import { ActivityIndicator } from "react-native";

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
        indicatorOptions,
        handleSubmit,
        submitForm,
        watchedTypeAlert,
        watchedTypeIndicator,
        cryptoAveragePrice,
        isLoading,
        watchedValue,
        editMode,
    } = useCreateAlertScreen();

    const renderInputs = useCallback(() => {
        if (watchedTypeAlert === "VALOR") {
            return <Controller
                name="value"
                control={control}
                render={({ field }) => (
                    <PriceInput key="price-input" maxValue={10000000} onChangeText={field.onChange} value={field.value} prefix="R$ " delimiter="." separator="," precision={2} />
                )}
            />
        }
        return <Controller
            name="value"
            control={control}
            render={({ field }) => (
                <PercentageInput key="percentage-input" onChangeText={field.onChange} value={field.value} maxValue={watchedTypeIndicator === "CAIR" ? 1000 : 10000} suffix=" %" separator="." />
            )}
        />
    }, [watchedTypeAlert, watchedTypeIndicator, watchedValue]);

    const renderExchanges = useCallback(() => (
        <S.ExchangesContainer>
            {exchanges.map((exchange, index) => (
                <Fragment key={exchange.id}>
                    <S.ExchangeItem onPress={() => handleExchangeSelection(exchange.id)}>
                        <S.ExchangeImage>
                            <CachedImage uri={`/exchange/${exchange.image}`} style={{
                                borderRadius: 10,
                                width: useScreenPercentage().height(3.5).toNumber(),
                                height: useScreenPercentage().height(3.5).toNumber()
                            }} />
                        </S.ExchangeImage>
                        <S.ExchangeDetails>
                            <S.ExchangeName>{exchange.name} <S.SmallPrice> - R$ {FormatCurrency({ amount: exchange.last, decimalCount: Number(exchange.last) < 1 ? 10 : 2 })}</S.SmallPrice></S.ExchangeName>
                            <S.CheckBoxContainer
                                value={selectedExchanges.includes(exchange.id)}
                                onValueChange={() => handleExchangeSelection(exchange.id)}
                                tintColors={{
                                    true: '#F5A623',
                                    false: '#fff',
                                }}
                                lineWidth={2.5}
                                tintColor="#fff"
                                onCheckColor="#F5A623"
                                boxType="square"
                                onTintColor="#F5A623"
                            />
                        </S.ExchangeDetails>
                    </S.ExchangeItem>
                    {index < exchanges.length - 1 && <S.Divider />}
                </Fragment>
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
                <ButtonAddAlert onPress={handleSubmit(submitForm)} icon="check" text="Salvar" />
            </S.HeaderContainer>

            <Card title="Criptomoeda">
                <S.CryptoContainer onPress={() => setIsBottomSheetVisible(true)} disabled={editMode}>
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
                                defaultValue={typeAlertOptions.find(option => option.id === field.value)}
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
                                defaultValue={indicatorOptions.find(option => option.id === field.value)}
                                items={indicatorOptions}
                                onChange={(item) => field.onChange(item.id)}
                            />
                        )}
                    />
                    <S.Divider />
                    {renderInputs()}
                    <S.AvaragePriceText>
                        Preço médio: R$ {FormatCurrency({ amount: cryptoAveragePrice.toString(), decimalCount: cryptoAveragePrice < 1 ? 10 : 2 })}
                    </S.AvaragePriceText>
                </>
            </Card>



            <Card
                title="Corretoras selecionadas"
                button={renderButtonSelectAll()}
            >
                {isLoading ? <ActivityIndicator size="large" color="#fff" style={{ margin: 50 }} /> : renderExchanges()}
            </Card>
            {isBottomSheetVisible && <BottomSheetSelectCrypto onRequestClose={() => setIsBottomSheetVisible(false)} setSelectedCrypto={setSelectedCrypto} />}
        </S.Container>
    );
}

export default CreateAlertScreen;