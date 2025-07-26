import styled from "@emotion/native";
import useScreenPercentage from "../../hooks/useScreenPercentage";

export const Container = styled.TouchableOpacity`
    flex-direction: row;
    padding: 15px 20px;
    gap: 10px;    
`

export const ButtonText = styled.Text`
    color: #F5A623;
    font-size: ${useScreenPercentage().fontSize(1.6).toString()}px;
    font-weight: bold;
    margin-top: -1px;
`