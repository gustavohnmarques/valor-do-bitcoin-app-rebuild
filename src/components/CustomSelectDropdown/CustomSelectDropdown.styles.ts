import styled from "@emotion/native";
import { Dimensions } from "react-native";
import useScreenPercentage from "../../hooks/useScreenPercentage";

export const Container = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    flex: 1;  
    padding: 0 20px;
    height: ${useScreenPercentage().height(6).toString()}px;
`

export const itemContainerStyle = {
    padding: 15,
    justifyContent: 'center' as const,
    width: '100%' as const,
};

export const dropdownStyle = {
    backgroundColor: '#3A4555',
    borderRadius: 8,
    marginTop: 2,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
}

export const buttonStyle = {
    height: useScreenPercentage().height(6).toNumber(),
    flexDirection: 'row' as const,
    alignItems: 'center' as const,
    justifyContent: 'space-between' as const,
    width: '100%' as const,
};

export const textStyle = {
    fontSize: useScreenPercentage().fontSize(1.7).toNumber(),
    color: '#dfdfe0',
    fontFamily: 'Comfortaa-Regular',
}
