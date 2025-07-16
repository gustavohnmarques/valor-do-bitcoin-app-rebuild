import { Dimensions } from "react-native";

const useScreenPercentage = () => {

    const width = (percentage: Number) => {

        const value = (Dimensions.get('window').width - (Dimensions.get('window').width / 100 * (100 - Number(percentage)))).toFixed(0)

        const toNumber = (): number => {
            return Number(value)
        }

        const toString = (): string => {
            return value
        }

        return {
            toNumber,
            toString
        }
    }

    const height = (percentage: number) => {

        const value = (Dimensions.get('window').height - (Dimensions.get('window').height / 100 * (100 - Number(percentage)))).toFixed(0)

        const toNumber = (): number => {
            return Number(value)
        }

        const toString = (): string => {
            return value
        }

        return {
            toNumber,
            toString
        }
    }

    const fontSize = (percentage: Number) => {
        const value = (Dimensions.get('window').height / 100 * Number(percentage)).toFixed(0)

        const toNumber = (): number => {
            return Number(value)
        }
        
        const toString = (): string => {
            return value
        }

        return {
            toNumber,
            toString
        }
    }

    return {
        width,
        height,
        fontSize,
    }
}

export default useScreenPercentage;