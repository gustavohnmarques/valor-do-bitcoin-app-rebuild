import useScreenPercentage from "../../hooks/useScreenPercentage";
import CachedImage from "../CachedImage/CachedImage";
import * as S from "./CrytoHeader.styles";
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import { CryptoHeaderProps } from "./Types";
import { useState } from "react";
import BottomSheetSelectCrypto from "../BottomSheetSelectCrypto/BottomSheetSelectCrypto";

const CrytoHeader: React.FC<CryptoHeaderProps> = ({ selectedCrypto, setSelectedCrypto, orderBy, setOrderBy }) => {

    const [isVisible, setIsVisible] = useState(false);
    return (
        <>
            <S.Container >
                <S.CryptoSelector onPress={() => {
                    setIsVisible(prev => !prev);
                }}>
                    <CachedImage uri={`/crypto/${selectedCrypto.name}.webp`} style={{
                        width: useScreenPercentage().height(2.4).toNumber(),
                        height: useScreenPercentage().height(2.4).toNumber()
                    }} />
                    <S.CryptoSelectorText>{selectedCrypto.name}</S.CryptoSelectorText>
                    <FontAwesome6 name={'chevron-down'} size={useScreenPercentage().fontSize(1.8).toNumber()} color="#fff" />
                </S.CryptoSelector>
                <S.OrderedCryptoSelector onPress={() => {
                    setOrderBy(orderBy === 'asc' ? 'desc' : 'asc');
                }}>
                    <FontAwesome6
                        name={orderBy == 'asc' ? 'arrow-down-wide-short' : 'arrow-up-wide-short'}
                        size={useScreenPercentage().fontSize(2.4).toNumber()}
                        color="#F5A623"
                    />
                </S.OrderedCryptoSelector>
            </S.Container>
            {isVisible && <BottomSheetSelectCrypto onRequestClose={() => setIsVisible(false)} setSelectedCrypto={setSelectedCrypto} />}
        </>
    )
}

export default CrytoHeader;