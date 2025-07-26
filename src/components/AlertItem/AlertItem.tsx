import { memo, useCallback, useMemo } from "react";
import { AlertItemProps } from "./Types";
import * as S from "./AlertItem.styles";
import { Alert, Switch } from "react-native";
import FontAwesome6 from "react-native-vector-icons/FontAwesome6";
import useScreenPercentage from "../../hooks/useScreenPercentage";
import { FormatCurrency } from "../../utils/FormatCurrency";
import IndicatorIcon from "../IndicatorIcon/IndicatorIcon";
import { Exchange } from "../../types/Exchange.types";
import CachedImage from "../CachedImage/CachedImage";

const AlertItem: React.FC<AlertItemProps> = memo(({ id, type_indicator, type_alert, percentage, value, active, exchanges, handleDeleteAlert, handleChangeStatus }) => {

    const screenPercentage = useScreenPercentage();
    const imageSize = useMemo(() => screenPercentage.height(2.6).toNumber(), [screenPercentage]);

    const alertTitle = useMemo(() => {
        return type_alert == "PORCENTAGEM" ?
            `${type_indicator == 'CAIR' ? 'Cair' : 'Subir'} ${percentage!}%`
            :
            `${type_indicator == 'CAIR' ? 'Abaixo de' : 'Acima de'} R$ ${FormatCurrency({ amount: value.toString(), decimalCount: value < 1 ? 10 : 2 })}`
    }, []);


    const handleClickDelete = useCallback(() => (
        Alert.alert('Deseja excluir alerta?', alertTitle, [
            {
                text: 'Cancelar',
                style: 'cancel',
            },
            { text: 'Excluir', onPress: () => handleDeleteAlert(id)},
        ])
    ), [alertTitle]);


    const exchangeItem = useCallback((item: Exchange) => (
        <S.ExchangeContainer key={item.id}>
            <CachedImage
                uri={`/exchange/${item.image}`}
                style={{
                    width: imageSize,
                    height: imageSize,
                    borderRadius: 5,
                }}
            />
            <S.ExchangeName>{item.name}</S.ExchangeName>
        </S.ExchangeContainer>
    ), [imageSize]);

    return (
        <S.Container>
            <S.HeaderContainer>
                <S.IconContainer>
                    <IndicatorIcon type_indicator={type_indicator} />
                </S.IconContainer>
                <S.TitleContainer>
                    <S.Title>{alertTitle}</S.Title>
                    {type_alert === 'PORCENTAGEM' && (
                        <S.DefaultValue>(Valor base R$ {FormatCurrency({ amount: value.toString(), decimalCount: value < 1 ? 10 : 2 })})</S.DefaultValue>
                    )}
                </S.TitleContainer>
                <S.ChangeStatusContainer>
                    <Switch
                        trackColor={{ false: '#767577', true: '#767577' }}
                        thumbColor={active ? '#F5A623' : '#fff'}
                        ios_backgroundColor="#3e3e3e"
                        value={Boolean(active)}
                        onValueChange={(data) => handleChangeStatus(id, data)}
                    />
                </S.ChangeStatusContainer>
            </S.HeaderContainer>

            <S.ExchangeItemsContainer>
                {exchanges.map((item) => exchangeItem(item))}
            </S.ExchangeItemsContainer>

            <S.DeleteContainer onPress={() => handleClickDelete()}>
                <FontAwesome6
                    name={'trash'}
                    size={useScreenPercentage().fontSize(1.6).toNumber()}
                    color={'#ce3838'}
                />
            </S.DeleteContainer>
            <S.EditContainer onPress={() => { }}>
                <FontAwesome6
                    name={'pencil'}
                    size={useScreenPercentage().fontSize(1.6).toNumber()}
                    color={'#dfdfe0'}
                />
            </S.EditContainer>
        </S.Container>
    )
})

export default AlertItem;