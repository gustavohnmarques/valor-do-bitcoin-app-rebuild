import React, { memo, useCallback, useMemo } from 'react'
import * as S from './CryptoAlertItem.styles.ts'
import { CryptoAlertItemProps } from './Types.ts'
import useScreenPercentage from '../../hooks/useScreenPercentage.ts';
import CachedImage from '../CachedImage/CachedImage.tsx';
import { FlashList } from '@shopify/flash-list';
import { Alert } from '../../types/Alert.types.ts';
import AlertItem from '../AlertItem/AlertItem.tsx';
import { View } from 'react-native';

const CryptoAlertItem: React.FC<CryptoAlertItemProps> = memo(({ cryptoAlert, handleEditAlert, handleDeleteAlert }) => {

    const screenPercentage = useScreenPercentage();

    const imageSize = useMemo(() => screenPercentage.height(2.4).toNumber(), [screenPercentage]);

    const renderAlertItem = useCallback(({ item }: { item: Alert }) => (
        <AlertItem
            {...item}
            handleDeleteAlert={() => { }}
            handleEditAlert={() => { }}
        />
    ), []);

    const renderSeparator = useCallback(() => (
        <View style={{ height: 1, backgroundColor: 'rgba(255, 255, 255, 0.3)', marginVertical: 10 }} />
    ), []);

    const renderAlertItems = useCallback(() => (
        <FlashList
            data={cryptoAlert.alerts}
            renderItem={renderAlertItem}
            keyExtractor={(item: Alert) => item.id}
            estimatedItemSize={5}
            showsVerticalScrollIndicator={false}
            removeClippedSubviews={true}
            ItemSeparatorComponent={renderSeparator}
            getItemType={() => 'crypto-item'}
        />
    ), [cryptoAlert]);

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
                {renderAlertItems()}
            </S.AlertsContainer>
        </S.Container>
    )
});

export default CryptoAlertItem;