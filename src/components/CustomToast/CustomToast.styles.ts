import styled from '@emotion/native'
import useScreenPercentage from '../../hooks/useScreenPercentage';

export const Container = styled.View`
    width: ${useScreenPercentage().width(90).toString()}px;
    padding: 20px;    
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    margin-top: 10px;
    
`;

export const Mensagem = styled.Text`
    font-size: ${useScreenPercentage().fontSize(1.9).toString()}px;    
    color: #dfdfe0;
    font-family: 'Comfortaa-Bold';    
`