import styled from "@emotion/native";
import useScreenPercentage from "../../hooks/useScreenPercentage";

export const Container = styled.View`
    flex: 1;
`

export const TitleContainer = styled.View`
    flex-direction: row;
    height: ${useScreenPercentage().height(5).toString}px;
    align-items: center;
    gap: 15px;  
`

export const Crypto = styled.Text`
    font-size: ${useScreenPercentage().fontSize(1.8).toString()}px;
    font-family: 'Comfortaa-Bold';
    color: #dfdfe0;
`

export const AlertsContainer = styled.View`
    padding: 10px;
    background-color: #3A4555;
    border-radius: 10px;
    flex: 1;   
`