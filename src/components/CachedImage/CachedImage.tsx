import React from "react";
import FastImage from "@d11/react-native-fast-image";
import { CachedImageProps } from "./Types";
import { IMAGE_URL } from '@env';

const CachedImage: React.FC<CachedImageProps> = ({uri, style}) => {        
    return (
        <FastImage
            style={style}
            source={{
                uri: IMAGE_URL + uri,                
                priority: FastImage.priority.normal,
            }}
            resizeMode={FastImage.resizeMode.contain}
        />
    )
}

export default CachedImage;