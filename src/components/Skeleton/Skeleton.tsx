import React, { useEffect, useRef } from 'react'
import { Animated } from 'react-native'
import Svg, { Rect, Defs, LinearGradient, Stop, ClipPath } from 'react-native-svg'
import { SkeletonProps } from './Types'

const AnimatedRect = Animated.createAnimatedComponent(Rect)
const backgroundColor = '#3A4555';
const highlightColor = '#4e5d73';

export const Skeleton: React.FC<SkeletonProps> = ({
    width,
    height,
    borderRadius = 4,
}) => {
    const anim = useRef(new Animated.Value(0)).current

    useEffect(() => {
        Animated.loop(
            Animated.timing(anim, {
                toValue: 1,
                duration: 1200,
                useNativeDriver: true,
            }),
        ).start()
    }, [anim])

    const translateX = anim.interpolate({
        inputRange: [0, 1],
        outputRange: [-width, width],
    })

    return (
        <Svg width={width} height={height}>
            <Defs>
                <LinearGradient id="shimmer" x1="0%" y1="0%" x2="100%" y2="0%">
                    <Stop offset="0%" stopColor={backgroundColor} stopOpacity="1" />
                    <Stop offset="50%" stopColor={highlightColor} stopOpacity="1" />
                    <Stop offset="100%" stopColor={backgroundColor} stopOpacity="1" />
                </LinearGradient>
                <ClipPath id="clip">
                    <Rect
                        x="0"
                        y="0"
                        width={width}
                        height={height}
                        rx={borderRadius}
                        ry={borderRadius}
                    />
                </ClipPath>
            </Defs>

            <Rect
                x="0"
                y="0"
                width={width}
                height={height}
                fill={backgroundColor}
                clipPath="url(#clip)"
            />

            <AnimatedRect
                x={translateX}
                y="0"
                width={width * 2}
                height={height}
                fill="url(#shimmer)"
                clipPath="url(#clip)"
            />
        </Svg>
    )
}
