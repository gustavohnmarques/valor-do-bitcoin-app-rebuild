import useScreenPercentage from "../../hooks/useScreenPercentage";
import * as S from "./ExchangeItem.styles";
import { Skeleton } from "../Skeleton/Skeleton";

const ExchangeItemSkeleton: React.FC = () => {

    return (
        <S.Container>
            <S.ImageContainer>
                <Skeleton height={useScreenPercentage().height(5).toNumber()} width={useScreenPercentage().height(5).toNumber()} borderRadius={10} />
            </S.ImageContainer>
            <S.ExchangeDetails>
                <S.ExchangeData>
                    <Skeleton height={useScreenPercentage().height(3).toNumber()} width={100} borderRadius={5} />
                    <Skeleton height={useScreenPercentage().height(2.5).toNumber()} width={100} borderRadius={5} />
                </S.ExchangeData>

                <S.CryptoData>
                    <Skeleton height={useScreenPercentage().height(2.5).toNumber()} width={100} borderRadius={5} />
                    <Skeleton height={useScreenPercentage().height(2).toNumber()} width={100} borderRadius={5} />
                </S.CryptoData>
            </S.ExchangeDetails>
        </S.Container>
    )
}

export default ExchangeItemSkeleton;