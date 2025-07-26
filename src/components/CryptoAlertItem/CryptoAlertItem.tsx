import React, { memo, useCallback, useMemo } from 'react'
import * as S from './CryptoAlertItem.styles.ts'
import { CryptoAlertItemProps } from './Types.ts'
import useScreenPercentage from '../../hooks/useScreenPercentage.ts';
import CachedImage from '../CachedImage/CachedImage.tsx';
import { Alert } from '../../types/Alert.types.ts';
import AlertItem from '../AlertItem/AlertItem.tsx';
import { View } from 'react-native';

const CryptoAlertItem: React.FC<CryptoAlertItemProps> = memo(({ cryptoAlert, handleEditAlert, handleDeleteAlert, handleChangeStatus }) => {

    const screenPercentage = useScreenPercentage();

    const imageSize = useMemo(() => screenPercentage.height(2.4).toNumber(), [screenPercentage]);

    const renderAlertItem = useCallback((item: Alert, index: number) => (
        <View key={item.id}>
            <AlertItem
                {...item}
                handleDeleteAlert={handleDeleteAlert}
                handleChangeStatus={handleChangeStatus}
                handleEditAlert={handleEditAlert}
            />
            {index < cryptoAlert.alerts.length - 1 && (
                <View style={{ height: 1, backgroundColor: 'rgba(255, 255, 255, 0.3)', marginVertical: 10 }} />
            )}
        </View>
    ), [cryptoAlert.alerts.length]);

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
            <S.AlertsContainer>
                {cryptoAlert.alerts.map((item, index) => renderAlertItem(item, index))}
            </S.AlertsContainer>
        </S.Container>
    )
});

export default CryptoAlertItem;