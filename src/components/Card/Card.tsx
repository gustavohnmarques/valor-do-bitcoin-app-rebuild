import React from "react"
import * as S from './Card.styles';
import { CardProps } from "./Types";

const Card: React.FC<CardProps> = ({ title, children, styles, button }) => {
    return (
        <S.Container style={styles}>
            <S.HeaderContainer>
                <S.Titulo>{title}</S.Titulo>
                {button}
            </S.HeaderContainer>
            <S.CardContainer>
                {children}
            </S.CardContainer>
        </S.Container>
    )
}

export default Card;
