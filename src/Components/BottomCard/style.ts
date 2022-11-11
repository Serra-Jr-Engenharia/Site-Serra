import styled from "styled-components";
import { width } from '../../Services/config'

interface Props{
    titleColor?: string
    buttonColor?: string
    carouselStyle?: boolean
}

export const Title = styled.div<Props>`
    width: 100%;
    height: 6rem;
    min-height: 30px;
    background-color: ${({titleColor}) => titleColor ?? "#FD6300"};
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-size: 1.6rem;
    font-weight: 600;
    margin-bottom: 20px;

    @media screen and (min-width: ${width.largeDesktop}) {
        font-size: 2.5rem;
        height: 8rem;
    }

    @media screen and (min-width: ${width.extraLargeDesktop}) {
        font-size: 4.5rem;
        height: 10rem;
    }
`;

export const BottomCardBody = styled.div`
    border-radius: 1rem;
    background-color: #EDEDED;
    height: 100%;
    width: 80vw;
    background-color: #fff;
    margin-top: 5%;
    margin-bottom: 5%;

    @media screen and (max-width: ${width.tablet}) {
        width: 95vw;
    }


    @media screen and (min-width: ${width.largeDesktop}) {
        width: 90vw;
    }

    @media screen and (min-width: ${width.extraLargeDesktop}) {
        width: 85vw;
        padding: 80px 0px;
    }
`;

export const BottomCardContent = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    
    @media screen and (max-width: 390px) {
        flex-direction: column;
    }

    @media screen and (max-width: 500px) {
        flex-direction: column;
    }

    @media screen and (max-width: 820px) {
        flex-direction: column;
    }

`;

export const BottomCardLink = styled.a`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 1.2rem;
    padding-bottom: 1.2rem;
    text-decoration: none;
`;

export const BottomCardButton = styled.button<Props>`
    background-color: ${({buttonColor}) => buttonColor ?? "#FD6300"};
    border: none;
    width: 50%;
    padding: 0.6rem;
    font-size: 1.5rem;
    font-weight: 500;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 1rem;
    cursor: pointer;

    &:hover{
        opacity: 0.8;
    }

    @media screen and (min-width: ${width.desktop}) {
        width: 30%;
        font-size: 30px;
    }
    @media screen and (min-width: ${width.largeDesktop}) {
        width: 30%;
        font-size: 40px;
    }
    @media screen and (min-width: ${width.extraLargeDesktop}) {
        width: 30%;
        font-size: 60px;
    }
`;

export const BottomCardStyle = styled.div<Props>`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 2.5rem;
    padding-bottom: 2.5rem;
    background-color: #E6E6E5;
    width: 100%;
    
    ${({carouselStyle}) => carouselStyle ?
        null
        :
        `display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;`
    }

    
`;

export const HistoryText1 = styled.span`
    color: black;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    text-align: justify;
    padding-left: 4%;
    padding-top: 2%;
    padding-bottom: 2%;

    @media screen and (max-width: 500px) {
        font-size: 15px;
        
    }

    @media screen and (min-width: ${width.desktop}) {
        font-size: 25px;
    }

    @media screen and (min-width: ${width.largeDesktop}) {
        font-size: 40px;
    }

    @media screen and (min-width: ${width.extraLargeDesktop}) {
        font-size: 50px;
    }
`;

export const HistoryText2 = styled.span`
    color: black;
    font-style: normal;
    font-weight: 400;
    font-size: 22px;
    text-align: justify;
    padding: 20px 30px;

    @media screen and (max-width: 500px) {
        font-size: 15px;

    }

    @media screen and (min-width: ${width.desktop}) {
        font-size: 30px;
        width: 90%;
    }

    @media screen and (min-width: ${width.largeDesktop}) {
        font-size: 40px;
        width: 80%;

    }

    @media screen and (min-width: ${width.extraLargeDesktop}) {
        font-size: 60px;
        width: 80%;

    }
`;

export const HistoryTextContainer = styled.div`
    width: 80%;
    margin-top: 2%;
    display: flex;
    align-items: center;
    justify-content: center;

    @media screen and (max-width: 500px) {
        width: 90%;
    }
    
`;

export const HistoryImg = styled.img`
    width: 45%;
    height: 45%;
    display: flex;
    justify-self: center;
    align-self: center;
    margin: 40px;
    border-radius: 1rem;

    @media screen and (max-width: 500px) {
        width: 65%;
        height: 65%;
    }

    @media screen and (max-width: 820px) {
        width:70%;
        height: 70%;
    }

    @media screen and (min-width: ${width.extraLargeDesktop}) {
        width: 90%;
        height: 90%;
    }
`;

