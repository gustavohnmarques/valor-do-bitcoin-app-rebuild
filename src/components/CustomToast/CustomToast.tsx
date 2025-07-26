import React from 'react'
import * as S from './CustomToast.styles'
import Toast, { BaseToastProps } from 'react-native-toast-message';

const CustomToast: React.FC = () => {
    const toastConfig = {
        error: (props: React.JSX.IntrinsicAttributes & BaseToastProps) => (
            <S.Container style={{ backgroundColor: '#7c2726' }}>
                <S.Mensagem>{props.text1}</S.Mensagem>
            </S.Container>
        ),
        success: (props: React.JSX.IntrinsicAttributes & BaseToastProps) => (
            <S.Container style={{ backgroundColor: '#1c8059' }}>
                <S.Mensagem>{props.text1}</S.Mensagem>
            </S.Container>
        )
    };

    return (
        <Toast config={toastConfig} />
    )
}

export default CustomToast;
