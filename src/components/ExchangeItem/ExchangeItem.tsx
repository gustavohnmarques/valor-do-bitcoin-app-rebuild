import useScreenPercentage from "../../hooks/useScreenPercentage";
import CachedImage from "../CachedImage/CachedImage";
import * as S from "./ExchangeItem.styles";
import { FormatCurrency } from "../../utils/FormatCurrency";
import { FormatTimeAgo } from "../../utils/FormatTimeAgo";
import { Exchange } from "../../types/Exchange.types";
import { useMemo } from "react";

const ExchangeItem: React.FC<Exchange> = ({ name, image, last, vol, date }) => {
    
    return (
        <S.Container>
            <S.ImageContainer>
                <CachedImage uri={`/exchange/${image}`} style={{
                    borderRadius: 10,
                    width: useScreenPercentage().height(5).toNumber(),
                    height: useScreenPercentage().height(5).toNumber()
                }} />
            </S.ImageContainer>
            <S.ExchangeDetails>
                <S.ExchangeData>
                    <S.ExchangeName>{name}</S.ExchangeName>
                    <S.ExchangeVol>Vol: {Number(vol).toFixed(2)}</S.ExchangeVol>
                </S.ExchangeData>

                <S.CryptoData>
                    <S.CryptoValue style={{ fontSize: useScreenPercentage().fontSize(Number(last) < 1 ? 1.55 : 1.7).toNumber() }}>
                        R$ {FormatCurrency({ amount: last, decimalCount: Number(last) < 1 ? 10 : 2 })}
                    </S.CryptoValue>

                    <S.Date>{date && FormatTimeAgo(date)}</S.Date>
                </S.CryptoData>
            </S.ExchangeDetails>
        </S.Container>
    )
}

export default ExchangeItem;