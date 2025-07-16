import styled from "@emotion/native";
import useScreenPercentage from "../../hooks/useScreenPercentage";

export const Container = styled.View`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.8);
    z-index: 10;
`

export const Header = styled.View`
    height: ${useScreenPercentage().height(9).toString()}px;
    width: 100%;
    background-color: #242c35; 
`

export const InputContainer = styled.View`
    align-items: center;
    flex-direction: row;
    height: ${useScreenPercentage().height(6).toString()}px;
    border-radius: ${useScreenPercentage().height(3).toString()}px;
    background-color: #3A4555;    
    margin: 15px 15px;
    padding-left: 20px;
    font-size: ${useScreenPercentage().fontSize(2).toString()}px;
    color: #dfdfe0;
`
export const Input = styled.TextInput`
    flex-direction: row;
    flex: 1;
    padding-left: 20px;
    font-size: ${useScreenPercentage().fontSize(2).toString()}px;
    color: #dfdfe0;
`

export const CryptoItem = styled.TouchableOpacity`
    height: ${useScreenPercentage().height(7).toString()}px;
    width: 100%;
    flex-direction: row;
    align-items: center;    
    gap: 15px;
    padding: 0 25px;
`
export const Crypto = styled.Text`
    font-size: ${useScreenPercentage().fontSize(1.8).toString()}px;
    font-family: 'Comfortaa-Bold';
    color: #dfdfe0;
`