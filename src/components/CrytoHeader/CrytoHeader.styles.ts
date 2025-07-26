import styled from '@emotion/native'
import useScreenPercentage from '../../hooks/useScreenPercentage'

export const Container = styled.View`    
    height: ${useScreenPercentage().height(8).toString()}px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 0 15px;
`
export const CryptoSelector = styled.TouchableOpacity`
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    padding: 0px 20px;
    gap: 20px;
    background-color: #3A4555;
    height: ${useScreenPercentage().height(4).toString()}px;
    border-radius: ${useScreenPercentage().width(3).toString()}px;
`

export const CryptoSelectorText = styled.Text`
    font-size: ${useScreenPercentage().fontSize(1.6).toString()}px;
    color: white;
    font-family: 'Comfortaa-Bold';
`

export const OrderedCryptoSelector = styled.TouchableOpacity`
    width: ${useScreenPercentage().width(8).toString()}px;
    height: ${useScreenPercentage().height(5).toString()}px;
    justify-content: center;
    align-items: flex-end;
    background-color: red;
`