import FontAwesome6 from "react-native-vector-icons/FontAwesome6";
import * as S from "./ButtonAddAlert.styles";
import useScreenPercentage from "../../hooks/useScreenPercentage";
import { ButtonAddAlertProps } from "./Types";

const ButtonAddAlert: React.FC<ButtonAddAlertProps> = ({ onPress }) => {

    const screenPercentage = useScreenPercentage();

    return (
        <S.Container onPress={onPress}>
            <FontAwesome6
                name="plus"
                size={screenPercentage.fontSize(1.8).toNumber()}
                color={'#F5A623'}
            />
            <S.ButtonText>Adicionar</S.ButtonText>
        </S.Container>
    )
}

export default ButtonAddAlert;