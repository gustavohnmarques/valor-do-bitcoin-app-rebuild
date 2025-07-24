
import * as S from "./DefaultInput.styles";
import { DefaultInputProps } from "./Types";

const DefaultInput: React.FC<DefaultInputProps> = ({
    key,
    value,
    onChangeText,
    prefix,
    suffix,
    delimiter,
    separator,
    precision,
    maxValue
}) => {

    return (
        <S.InputContainer>
            <S.Container
                key={key}
                value={value}
                onChangeValue={onChangeText}
                prefix={prefix}
                suffix={suffix}
                delimiter={delimiter}
                separator={separator}
                precision={precision}
                minValue={0}
                maxValue={maxValue}
                placeholderTextColor={'#dfdfe0'}
            />
        </S.InputContainer>

    )
}

export default DefaultInput;