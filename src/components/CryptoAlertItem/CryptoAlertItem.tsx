import React, { memo, useMemo } from 'react'
import * as S from './CryptoAlertItem.styles.ts'
import { CryptoAlertItemProps } from './Types.ts'
import useScreenPercentage from '../../hooks/useScreenPercentage.ts';
import CachedImage from '../CachedImage/CachedImage.tsx';

const CryptoAlertItem: React.FC<CryptoAlertItemProps> = memo(({ cryptoAlert, handleEditAlert, handleDeleteAlert }) => {

    const screenPercentage = useScreenPercentage();
    
    const imageSize = useMemo(() => screenPercentage.height(2.4).toNumber(), [screenPercentage]);


    return (
        <S.Container>
            <S.TitleContainer>
                <CachedImage
                    uri={`/crypto/${cryptoAlert.crypto}.webp`}
                    style={{
                        width: imageSize,
                        height: imageSize,
                        borderRadius: 10,
                    }}
                />
                <S.Crypto>{cryptoAlert.crypto}</S.Crypto>

            </S.TitleContainer>
            <S.AlertsContainer >

            </S.AlertsContainer>
        </S.Container>
    )
});

export default CryptoAlertItem;