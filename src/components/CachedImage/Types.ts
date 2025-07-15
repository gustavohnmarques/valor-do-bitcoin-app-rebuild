import { StyleProp } from "react-native";
import { ImageStyle } from "@d11/react-native-fast-image";

export interface CachedImageProps {
    uri: string;
    style?: StyleProp<ImageStyle>
}