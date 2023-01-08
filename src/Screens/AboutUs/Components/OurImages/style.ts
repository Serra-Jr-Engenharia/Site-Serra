import styled from "styled-components";
import { width } from '../../../../Services/config'

interface Props{
    titleColor?: string
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

export const CardBody = styled.div`
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

export const Content = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;

    @media screen and (max-width: ${width.notebook}) {
        flex-direction: column;
        padding-bottom: 4%;
    }

`;

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

export const Text = styled.span`
    font-weight: 400;
    text-align: justify;
    padding-left: 4%;
    padding-top: 2%;
    padding-bottom: 6%;

    @media screen and (max-width: ${width.tablet}) {
        font-size: 18px;
    }

    @media screen and (min-width: ${width.tablet}) {
        font-size: 18px;
    }

    @media screen and (min-width: ${width.desktop}) {
        font-size: 23px;
    }

    @media screen and (min-width: ${width.largeDesktop}) {
        font-size: 28px;
    }

    @media screen and (min-width: ${width.extraLargeDesktop}) {
        font-size: 48px;
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


