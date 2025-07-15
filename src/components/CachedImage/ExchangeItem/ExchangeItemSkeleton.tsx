import useScreenPercentage from "../../../hooks/useScreenPercentage";
import * as S from "./ExchangeItem.styles";
import { Skeleton } from "../../Skeleton/Skeleton";

const ExchangeItemSkeleton: React.FC = () => {

    return (
        <S.Container>
            <S.ImageContainer>
                <Skeleton height={Number(useScreenPercentage().height(6))} width={Number(useScreenPercentage().height(6))} borderRadius={10} />
            </S.ImageContainer>
            <S.ExchangeDetails>
                <S.ExchangeData>
                    <Skeleton height={Number(useScreenPercentage().height(3))} width={100} borderRadius={5} />
                    <Skeleton height={Number(useScreenPercentage().height(2.5))} width={100} borderRadius={5} />
                </S.ExchangeData>

                <S.CryptoData>
                    <Skeleton height={Number(useScreenPercentage().height(2.5))} width={100} borderRadius={5} />
                    <Skeleton height={Number(useScreenPercentage().height(2))} width={100} borderRadius={5} />
                </S.CryptoData>
            </S.ExchangeDetails>
        </S.Container>
    )
}

export default ExchangeItemSkeleton;