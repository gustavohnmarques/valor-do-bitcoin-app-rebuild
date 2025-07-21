import React, { memo } from 'react';
import FontAwesome6 from "react-native-vector-icons/FontAwesome6";
import { IndicatorIconProps } from './Types';
import useScreenPercentage from '../../hooks/useScreenPercentage';

const IndicatorIcon: React.FC<IndicatorIconProps> = memo(({ type_indicator }) => {
    return (
        <FontAwesome6
            name={type_indicator == 'SUBIR' ? 'angle-up' : 'angle-down'}
            size={useScreenPercentage().fontSize(2).toNumber()}
            color={type_indicator == 'SUBIR' ? '#21b67d' : '#ce3838'}
            style={{ paddingTop: 4 }}
        />
    )
});

export default IndicatorIcon;
