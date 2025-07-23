import FontAwesome6 from "react-native-vector-icons/FontAwesome6";
import * as S from "./ButtonAddAlert.styles";
import useScreenPercentage from "../../hooks/useScreenPercentage";
import { ButtonAddAlertProps } from "./Types";
import { useMemo } from "react";

const ButtonAddAlert: React.FC<ButtonAddAlertProps> = ({ onPress, icon, text }) => {

    const screenPercentage = useScreenPercentage();
    const iconSize = useMemo(() => screenPercentage.fontSize(1.8).toNumber(), [screenPercentage]);

    return (
        <S.Container onPress={onPress}>
            <FontAwesome6
                name={icon}
                size={iconSize}
                color={'#F5A623'}
            />
            <S.ButtonText>{text}</S.ButtonText>
        </S.Container>
    )
}

export default ButtonAddAlert;