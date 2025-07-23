import { StyleProp, ViewStyle } from "react-native";

export interface CardProps {
    title: string,
    children: React.JSX.Element,
    styles?: StyleProp<ViewStyle>
}