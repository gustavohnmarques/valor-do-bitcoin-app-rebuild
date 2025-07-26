import styled from "@emotion/native";
import useScreenPercentage from "../../hooks/useScreenPercentage";

export const Container = styled.View`
    padding: 15px 15px 15px 15px;
    flex: 1;    
`

export const HeaderContainer = styled.View`
    flex-direction: row;
    justify-content: space-between;
`

export const Titulo = styled.Text`
    font-size: ${useScreenPercentage().fontSize(1.8).toString}px;    
    color: #dfdfe0;
    font-family: 'Comfortaa-Bold';    
`

export const CardContainer = styled.View`    
    background-color: #3A4555;
    border-radius: 10px;
    flex: 1;    
    margin-top: 5px;    
`