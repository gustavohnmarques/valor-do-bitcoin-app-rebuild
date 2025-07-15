import useScreenPercentage from "../../../hooks/useScreenPercentage";
import CachedImage from "../CachedImage";
import * as S from "./ExchangeItem.styles";
import { FormatCurrency } from "../../../utils/formatCurrency";
import { FormatTimeAgo } from "../../../utils/FormatTimeAgo";
import { Skeleton } from "../../Skeleton/Skeleton";
import { Exchange } from "../../../types/Exchange.types";

const ExchangeItem: React.FC<Exchange> = ({ name, image, last, vol, date }) => {

    return (
        <S.Container>
            <S.ImageContainer>
                <CachedImage uri={`/corretoras/${image}`} style={{
                    borderRadius: 10,
                    width: Number(useScreenPercentage().height(5)),
                    height: Number(useScreenPercentage().height(5))
                }} />
            </S.ImageContainer>
            <S.ExchangeDetails>
                <S.ExchangeData>
                    <S.ExchangeName>{name}</S.ExchangeName>
                    <S.ExchangeVol>Vol: {Number(vol).toFixed(2)}</S.ExchangeVol>
                </S.ExchangeData>

                <S.CryptoData>
                    <S.CryptoValue style={{ fontSize: Number(useScreenPercentage().fontSize(Number(last) < 1 ? 1.7 : 1.5)) }}>
                        R$ {FormatCurrency({ amount: last, decimalCount: Number(last) < 1 ? 10 : 2 })}
                    </S.CryptoValue>

                    <S.Date>{date && FormatTimeAgo(date)}</S.Date>
                </S.CryptoData>
            </S.ExchangeDetails>
        </S.Container>
    )
}

export default ExchangeItem;