import { ActivityIndicator } from "react-native";
import * as S from "./Loader.styles";

const Loader: React.FC = () => {    
    return (
        <S.Container>
            <ActivityIndicator size="large" color="#fff"  />
        </S.Container>
    )
}

export default Loader;