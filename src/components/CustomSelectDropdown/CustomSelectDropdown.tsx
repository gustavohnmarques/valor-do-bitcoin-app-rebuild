import * as S from "./CustomSelectDropdown.styles";
import SelectDropdown from "react-native-select-dropdown";
import { CustomSelectDropdownProps } from "./Types";
import FontAwesome6 from "react-native-vector-icons/FontAwesome6";
import useScreenPercentage from "../../hooks/useScreenPercentage";
import { View, Text } from "react-native";
import { useCallback, useMemo, memo, use } from "react";

const CustomSelectDropdown: React.FC<CustomSelectDropdownProps> = memo(({ items, onChange, defaultValue }) => {

    const screenPercentage = useScreenPercentage();

    const sizes = useMemo(() => ({
        containerHeight: screenPercentage.height(6).toNumber(),
        fontSize: screenPercentage.fontSize(1.7).toNumber(),
        iconSize: screenPercentage.fontSize(1.8).toNumber(),
    }), [screenPercentage]);



    const renderButton = useCallback((selectedItem: any, isOpened: boolean) => {
        return (
            <View style={S.buttonStyle}>
                <Text style={S.textStyle}>
                    {selectedItem?.value}
                </Text>
                <FontAwesome6
                    name={isOpened ? 'chevron-up' : 'chevron-down'}
                    size={sizes.iconSize}
                    color={'#E9ECEF'}
                />
            </View>
        )
    }, [sizes.iconSize]);

    const renderItem = useCallback((item: any) => {
        return (
            <View style={S.itemContainerStyle}>
                <Text style={S.textStyle}>
                    {item?.value}
                </Text>
            </View>
        )
    }, []);

    const handleSelect = useCallback((selectedItem: any) => {
        onChange?.(selectedItem);
    }, [onChange]);

    return (
        <S.Container>
            <SelectDropdown
                data={items}
                defaultValue={defaultValue}
                onSelect={handleSelect}
                renderButton={renderButton}
                renderItem={renderItem}
                showsVerticalScrollIndicator={false}
                dropdownStyle={S.dropdownStyle}
            />
        </S.Container>
    )
});



export default CustomSelectDropdown;