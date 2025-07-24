import styled from "@emotion/native";
import useScreenPercentage from "../../hooks/useScreenPercentage";
import CurrencyInput from "react-native-currency-input";

export const InputContainer = styled.View`
  padding: 10px 20px;  
  height: ${useScreenPercentage().height(7).toString()}px;
`

export const Container = styled(CurrencyInput)`    
    padding-left: 5px;
    font-size: ${useScreenPercentage().fontSize(1.8).toString()}px;
    color: #dfdfe0;
    border-radius: 10px;
    padding: 10px 15px;
    background-color: #242c35;   
    border: 1px solid #242c35;
    font-family: 'Comfortaa-Bold';
`