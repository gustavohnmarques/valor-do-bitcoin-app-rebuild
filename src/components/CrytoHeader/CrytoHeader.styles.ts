import styled from '@emotion/native'
import useScreenPercentage from '../../hooks/useScreenPercentage'

export const Container = styled.SafeAreaView`    
    background-color: red;
    height: ${useScreenPercentage().height(10)}px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`
export const CryptoSelector = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    padding: 4px 20px;
    gap: 20px;
    background-color: #3A4555;
    height: ${useScreenPercentage().height(5)}px;
    border-radius: ${useScreenPercentage().width(3)}px;
`

export const CryptoSelectorText = styled.Text`
    font-size: ${useScreenPercentage().fontSize(2)}px;
    color: white;
    font-family: 'Comfortaa-Bold';
`

export const OrderedCryptoSelector = styled.TouchableOpacity`
    width: ${useScreenPercentage().width(5)}px;
    height: ${useScreenPercentage().height(5)}px;    
`