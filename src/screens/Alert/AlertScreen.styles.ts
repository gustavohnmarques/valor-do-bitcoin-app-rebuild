import styled from "@emotion/native";
import useScreenPercentage from "../../hooks/useScreenPercentage";

export const Container = styled.View`
    flex: 1;
    background-color: #242c35;
    position: relative;
`

export const Header = styled.View`
    height: ${useScreenPercentage().height(7).toString()}px;
    border-bottom-width: 1px;
    border-bottom-color: 'rgba(255, 255, 255, 0.2)';
    justify-content: center;
    align-items: center;    
`

export const Title = styled.Text`
    font-size: ${useScreenPercentage().fontSize(1.8).toString()}px;
    color: #fff;
    font-family: 'Comfortaa-Bold';
    font-weight: 600;
`   

export const ButtonContainer = styled.View`
    position: absolute;
    right: 0;
    justify-content: center;
    align-items: center;
    height: ${useScreenPercentage().height(7).toString()}px;
    
`

export const AlertsContainer = styled.View`
    flex: 1;
    padding: 0 15px;
    
    
`