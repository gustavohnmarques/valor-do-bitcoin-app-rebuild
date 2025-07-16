import {
    BottomSheetBackdrop,
    BottomSheetFlashList,
    BottomSheetModal,
    BottomSheetScrollView,
} from '@gorhom/bottom-sheet';
import { useCallback, useEffect, useMemo, useRef } from 'react';
import { ActivityIndicator, View } from 'react-native';
import { BottomSheetSelectCryptoProps } from './Types';
import * as S from './BottomSheetSelectCrypto.styles';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import useScreenPercentage from '../../hooks/useScreenPercentage';
import useBottomSheetSelectCrypto from './useBottomSheetSelectCrypto';
import { Crypto } from '../../types/Crypto.types';
import CachedImage from '../CachedImage/CachedImage';

const BottomSheetSelectCrypto: React.FC<BottomSheetSelectCryptoProps> = ({ onRequestClose, setSelectedCrypto }) => {

    const snapPoints = useMemo(() => ['90%'], []);
    const bottomSheetRef = useRef<BottomSheetModal>(null);
    const { isLoading, crypto, search } = useBottomSheetSelectCrypto();

    const imageSize = useScreenPercentage().height(2.4).toNumber();

    useEffect(() => {
        bottomSheetRef.current?.present();
    }, []);


    const renderCryptoList = useCallback(() => {
        return (
            <BottomSheetFlashList
                style={{ flex: 1 }}
                data={crypto}
                renderItem={({ item }: { item: Crypto }) => (
                    <S.CryptoItem key={item.id} onPress={() => {
                        setSelectedCrypto(item);
                        onRequestClose();                        
                    }}>
                        <CachedImage
                            uri={`/crypto/${item.name}.webp`}
                            style={{
                                width: imageSize,
                                height: imageSize,
                                borderRadius: 10,
                            }}
                        />
                        <S.Crypto>{item.name}</S.Crypto>
                    </S.CryptoItem>
                )}
                keyExtractor={(item: Crypto) => item.name}
                ItemSeparatorComponent={() => (
                    <View style={{ height: 1, backgroundColor: 'rgba(255,255,255, .1)' }} />
                )}
                scrollEnabled={false}
                keyboardShouldPersistTaps="always"
                estimatedItemSize={200}

            />
        )
    }, [isLoading, crypto]);

    return (
        <BottomSheetModal
            ref={bottomSheetRef}
            index={0}
            snapPoints={snapPoints}
            enableDynamicSizing={false}
            enablePanDownToClose
            backdropComponent={props => (
                <BottomSheetBackdrop
                    {...props}
                    disappearsOnIndex={-1}
                    appearsOnIndex={0}
                    pressBehavior="close"
                />
            )}
            backgroundStyle={{ backgroundColor: '#242c35' }}
            handleIndicatorStyle={{ backgroundColor: '#fff' }}
            onDismiss={onRequestClose}
        >
            <BottomSheetScrollView
                stickyHeaderIndices={[0]}
                contentContainerStyle={{ flexGrow: 1 }}
                keyboardShouldPersistTaps={'always'}
            >
                <S.Header>
                    <S.InputContainer>
                        <FontAwesome6
                            name={'magnifying-glass'}
                            size={useScreenPercentage().fontSize(2).toNumber()}
                            color={'#dfdfe0'}
                        />
                        <S.Input
                            onChangeText={search}
                            placeholder="Pesquisar..."
                            placeholderTextColor={'#dfdfe0'}
                        />
                    </S.InputContainer>
                </S.Header>

                {isLoading ? <ActivityIndicator size="large" color="#fff" style={{ marginTop: 20 }} /> : renderCryptoList()}

            </BottomSheetScrollView>
        </BottomSheetModal>
    );

};

export default BottomSheetSelectCrypto;