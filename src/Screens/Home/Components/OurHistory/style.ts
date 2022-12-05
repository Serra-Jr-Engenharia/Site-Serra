import styled from "styled-components";
import { width } from '../../../../Services/config'

interface Props{
    titleColor?: string
    buttonColor?: string
}

export const Container = styled.div<Props>`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 2.5rem;
    padding-bottom: 2.5rem;
    background-color: #E6E6E5;
    width: 100%;
`;

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

export const CardBody = styled.div`
    border-radius: 1rem;
    background-color: #EDEDED;
    height: 100%;
    width: 80vw;
    background-color: #fff;

    @media screen and (max-width: ${width.tablet}) {
        width: 95vw;
        margin-top: 5%;
        margin-bottom: 5%;
    }
    @media screen and (min-width: ${width.tablet}) {
        width: 80vw;
        margin-top: 2%;
        margin-bottom: 2%;
    }
    @media screen and (min-width: ${width.largeDesktop}) {
        width: 75vw;
        margin-top: 2%;
        margin-bottom: 2%;
    }

    @media screen and (min-width: ${width.extraLargeDesktop}) {
        width: 75vw;
        padding: 80px 0px;
        margin-top: 2%;
        margin-bottom: 2%;
    }
`;

export const Content = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;

    @media screen and (max-width: ${width.notebook}) {
        flex-direction: column;
        padding-bottom: 4%;
    }

`;

export const TextContainer = styled.div`
    width: 50%;
    margin-top: 2%;
    display: flex;
    align-items: center;
    justify-content: center;

    @media screen and (max-width: ${width.notebook}) {
        width: 90%;
    }
`;

export const Text = styled.span`
    color: black;
    font-style: normal;
    font-weight: 400;
    text-align: justify;
    padding: 20px 30px;

    @media screen and (max-width: ${width.tablet}) {
        font-size: 20px;
    }

    @media screen and (min-width: ${width.tablet}) {
        font-size: 18px;
    }

    @media screen and (min-width: ${width.desktop}) {
        font-size: 20px;
    }

    @media screen and (min-width: ${width.largeDesktop}) {
        font-size: 30px;
    }

    @media screen and (min-width: ${width.extraLargeDesktop}) {
        font-size: 50px;
    }
`;

export const Image = styled.img`
    display: flex;
    justify-self: center;
    align-self: center;
    margin: 40px;
    border-radius: 1rem;


    @media screen and (max-width: ${width.notebook}) {
        width: 75%;
        height: 75%;
    }
    @media screen and (min-width: ${width.notebook}) {
        width: 35%;
        height: 35%;
    }
    @media screen and (min-width: ${width.largeDesktop}) {
        width: 25%;
        height: 25%;
    }

`;

export const ButtonContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 1.2rem;
    padding-bottom: 1.2rem;
    text-decoration: none;
`;

export const Button = styled.button<Props>`
    background-color: ${({buttonColor}) => buttonColor ?? "#FD6300"};
    border: none;
    width: 30%;
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
        width: 20%;
        font-size: 30px;
    }
    @media screen and (min-width: ${width.largeDesktop}) {
        width: 20%;
        font-size: 40px;
    }
    @media screen and (min-width: ${width.extraLargeDesktop}) {
        width: 20%;
        font-size: 60px;
    }
    @media screen and (max-width: ${width.largeMobile}){
        font-size: 25px;
        width: 60%;
    }
`;


