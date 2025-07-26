import styled from '@emotion/native'
import useScreenPercentage from '../../hooks/useScreenPercentage';
import { Platform } from 'react-native';

export const Container = styled.View`
    width: ${useScreenPercentage().width(90).toString()}px;
    padding: 20px;    
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    margin-top: ${Platform.OS === 'ios' ? '30' : '10'}px;
`;

export const Mensagem = styled.Text`
    font-size: ${useScreenPercentage().fontSize(1.7).toString()}px;    
    color: #dfdfe0;
    font-family: 'Comfortaa-Bold';    
`