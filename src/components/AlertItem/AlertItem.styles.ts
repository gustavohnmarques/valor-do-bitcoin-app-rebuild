import styled from "@emotion/native";
import useScreenPercentage from "../../hooks/useScreenPercentage";

export const Container = styled.View`
    flex: 1;    
`

export const HeaderContainer = styled.View`
    flex-direction: row;        
    height: ${useScreenPercentage().height(4).toNumber()}px;
`

export const IconContainer = styled.View`
    width: ${useScreenPercentage().width(8).toNumber()}px;
    justify-content: center;
    align-items: center;   
    padding: 0 10px;
`

export const TitleContainer = styled.View`
    flex-direction: row;
    align-items: center;
    flex: 1;    
    gap: 10px;
`

export const Title = styled.Text`
    font-size: ${useScreenPercentage().fontSize(1.6).toString()}px;    
    color: #dfdfe0;
    font-family: 'Comfortaa-Bold';
`

export const DefaultValue = styled.Text`
    font-size: ${useScreenPercentage().fontSize(1.2).toString()}px;    
    color:rgb(182, 182, 184);    
    font-family: 'Comfortaa-Regular';
`

export const ChangeStatusContainer = styled.View`
    justify-content: center;
    align-items: center;    
    padding: 0 10px;
`

export const EditContainer = styled.TouchableOpacity`
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    padding: 13px;    
    position: absolute;
    bottom: 0;
    right: 0;        
`
export const DeleteContainer = styled.TouchableOpacity`
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    padding: 13px;    
    position: absolute;
    bottom: 0;
    right: 40px;
`

export const ExchangeContainer = styled.View`
    flex-direction: row;
    align-items: center;
    padding: 8px 8px 8px ${useScreenPercentage().width(8.5).toNumber()}px;
    gap: 10px;
`

export const ExchangeName = styled.Text`
    font-size: ${useScreenPercentage().fontSize(1.6).toNumber()}px;    
    color: #dfdfe0;
    font-family: 'Comfortaa-Bold';
`
