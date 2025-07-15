import { Dimensions } from "react-native";

const useScreenPercentage = () => {

    const width = (percentage: Number) => {
        return (Dimensions.get('window').width - (Dimensions.get('window').width / 100 * (100 - Number(percentage)))).toFixed(0)
    }

    const height = (percentage: Number) => {
        return (Dimensions.get('window').height - (Dimensions.get('window').height / 100 * (100 - Number(percentage)))).toFixed(0)
    }

    const fontSize = (percentage: Number) => {
        return (Dimensions.get('window').height / 100 * Number(percentage)).toFixed(0)
    }

    return {
        width,
        height,
        fontSize,
    }
}

export default useScreenPercentage;