import DefaultInput from "./DefaultInput";
import { DefaultInputProps } from "./Types";

const PercentageInput: React.FC<DefaultInputProps> = (props) => {

    const handleChangeText = (text: number | null) => {
        const numericValue = Number(text);
        if(numericValue > 100){            
            props.onChangeText(100);
        }else{
            props.onChangeText(numericValue);
        }
    }

    return <DefaultInput {...props} onChangeText={handleChangeText} />
}

export default PercentageInput;