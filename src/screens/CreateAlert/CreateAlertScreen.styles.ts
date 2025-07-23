import styled from "@emotion/native";
import useScreenPercentage from "../../hooks/useScreenPercentage";
import { MaskedTextInput } from 'react-native-mask-text';

export const Container = styled.ScrollView`
  flex: 1;
  background-color: #242c35;  
  position: relative;
`;

export const HeaderContainer = styled.View`    
    height: ${useScreenPercentage().height(7).toString()}px;
    border-bottom-width: 1px;
    border-bottom-color: 'rgba(255, 255, 255, 0.2)';
    justify-content: space-between;
    align-items: center;    
    flex-direction: row;
    background-color: #242c35; 
`

export const Title = styled.Text`
    font-size: ${useScreenPercentage().fontSize(1.8).toString()}px;
    color: #fff;
    font-family: 'Comfortaa-Bold';
    font-weight: 600;
`;

export const BackButton = styled.TouchableOpacity`
  padding: 10px 15px;  
`

export const Divider = styled.View`
    height: 1px;
    background-color: rgba(255, 255, 255, 0.2);
`

export const InputContainer = styled.View`
  padding: 10px 20px;  
  height: ${useScreenPercentage().height(7).toString()}px;
`

export const CustomInput = styled(MaskedTextInput)`    
    padding-left: 5px;
    font-size: ${useScreenPercentage().fontSize(1.8).toString()}px;
    color: #dfdfe0;
    border-radius: 10px;
    padding: 10px 15px;
    background-color: #242c35;   
    border: 1px solid #242c35;
    font-family: 'Comfortaa-Bold';
`

export const CryptoContainer = styled.TouchableOpacity`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 0px 20px;
    height: ${useScreenPercentage().height(6).toString()}px;
`

export const CryptoSelector = styled.View`
    flex-direction: row;
    align-items: center;
    gap: 15px;
`

export const CryptoName = styled.Text`
    font-size: ${useScreenPercentage().fontSize(1.8).toString()}px;
    color: #fff;
    font-family: 'Comfortaa-Bold';
    font-weight: 600;
`

export const ExchangesContainer = styled.ScrollView`
    flex: 1;
`

export const ExchangeItem = styled.TouchableOpacity`
    height: ${useScreenPercentage().height(6).toString()}px;
    width: 100%;
    background-color: #3A4555;
    border-radius: ${useScreenPercentage().height(0.8).toString()}px;
    flex-direction: row;    
`

export const ExchangeImage = styled.View`
    height: auto;
    width: ${useScreenPercentage().width(12).toString()}px;
    justify-content: center;
    align-items: center;        
`

export const ExchangeDetails = styled.View`
    flex: 1;
    flex-direction: row;    
    align-items: center;
    justify-content: space-between;
    width: ${useScreenPercentage().width(80).toString()}px;
    padding-right: 20px;
`

export const ExchangeName = styled.Text`
    font-size: ${useScreenPercentage().fontSize(1.55).toString()}px;
    font-weight: 500;
    color: #dfdfe0;
    font-family: 'Comfortaa-Medium';
`

export const SelectAllButton = styled.TouchableOpacity`
    padding: 0px 15px;
`

export const SelectAllButtonText = styled.Text`
    font-size: ${useScreenPercentage().fontSize(1.4).toString()}px;
    color: #F5A623;
    font-family: 'Comfortaa-Regular';    
`