import useScreenPercentage from "../../hooks/useScreenPercentage";
import CachedImage from "../CachedImage/CachedImage";
import * as S from "./CrytoHeader.styles";
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import { CryptoHeaderProps } from "./Types";

const CrytoHeader: React.FC<CryptoHeaderProps> = ({ onChangeCrypto }) => {
    
    return (
        <S.Container>
            <S.CryptoSelector>
                <CachedImage uri="/criptomoedas/BTC.webp" style={{ width: Number(useScreenPercentage().height(3)), height: Number(useScreenPercentage().height(3)) }} />
                <S.CryptoSelectorText>BTC</S.CryptoSelectorText>
                <FontAwesome6 name={'chevron-down'} size={Number(useScreenPercentage().fontSize(2))} color="#fff" />
            </S.CryptoSelector>
            <S.OrderedCryptoSelector>
                <FontAwesome6 name={'sort-amount-desc'} size={Number(useScreenPercentage().fontSize(2))} color="#F5A623" />
            </S.OrderedCryptoSelector>
        </S.Container>
    )
}

export default CrytoHeader;