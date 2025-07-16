import styled from '@emotion/native'
import useScreenPercentage from '../../hooks/useScreenPercentage'

export const Container = styled.View`
    height: ${useScreenPercentage().height(7)}px;
    width: 100%;
    background-color: #3A4555;
    border-radius: ${useScreenPercentage().height(0.8)}px;
    flex-direction: row;
`

export const ImageContainer = styled.View`
    height: auto;
    width: ${useScreenPercentage().width(20)}px;
    justify-content: center;
    align-items: center;    
`

export const ExchangeDetails = styled.View`
    flex: 1;
    flex-direction: row;    
    width: ${useScreenPercentage().width(80)}px;
`

export const ExchangeData = styled.View`
    align-items: flex-start;
    justify-content: space-evenly;    
    width: 50%;
`

export const ExchangeName = styled.Text`
    font-size: ${useScreenPercentage().fontSize(1.55)}px;
    font-weight: 500;
    color: #dfdfe0;
    font-family: 'Comfortaa-Medium';
`

export const ExchangeVol = styled.Text`
    font-size: ${useScreenPercentage().fontSize(1.3)}px;    
    color: #dfdfe0;
    font-family: 'Comfortaa-Light';
`

export const CryptoData = styled.View`
    align-items: flex-end;
    justify-content: center;
    width: 50%;
    padding-right: 15px;
    gap: 5px;
`

export const CryptoValue = styled.Text`
    color: #dfdfe0;        
    font-family: 'Comfortaa-Bold';
    font-weight: bold;
    letter-spacing: 1px;
`

export const Date = styled.Text`
    font-size: ${useScreenPercentage().fontSize(1.3)}px;
    color: #dfdfe0;
    font-family: 'Comfortaa-Light';
`