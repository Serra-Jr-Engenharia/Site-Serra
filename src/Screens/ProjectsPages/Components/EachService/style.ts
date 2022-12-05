import styled from "styled-components";
import { width } from "../../../../Services/config";

export const Container = styled.div `
    margin-top: 3%;
    margin-bottom: 3%;

    @media screen and (max-width: ${width.largeMobile}) {
        margin-bottom: 12%;
    }

    @media screen and (max-width: ${width.tablet}) {
        width: 40%;
        margin-bottom: 12%;
    } 

    @media screen and (max-width: 420px) {
        flex-direction: column;
        width: 95%;
    }

    @media screen and (min-width: ${width.extraLargeDesktop}) {
        margin-bottom: 10%;
        width: 50%;
    }

`;

export const TitleContainer = styled.div `
    display: flex;
    min-height: 20%;
    margin-bottom: 5%;
    align-items: center;

`;

export const Image = styled.img`
    display: flex;
    width: 3.5vw;
    margin-right: 4%;

    @media screen and (max-width: ${width.largeMobile}) {
        width: 8%;
        margin-left: 5%;
    }

    @media screen and (max-width: ${width.tablet}) {
        width: 10%;
    } 
`;

export const Title = styled.h3`
    font-family: 'Maven Pro';
    font-style: normal;
    font-weight: 500;
    font-size: 26px;
    line-height: 22px;
    margin-top: 0px;
    margin-bottom: 0px; 
    width: 300px;

    @media screen and (max-width: ${width.largeMobile}) {
        font-size: 22px;
    }
    
    @media screen and (min-width: 2048px) {
        font-size: 35px;
        line-height: 40px;
    }

    @media screen and (min-width: ${width.extraLargeDesktop}) {
        font-size: 60px;
        line-height: 60px;
        width: 500px;
    }
`;

export const TextContainer = styled.div `
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
`;

export const Text = styled.p`
    width: 500px;
    font-family: 'Maven Pro';
    font-style: normal;
    font-weight: 200;
    font-size: 26px;
    line-height: 30px;
    text-align: left;
    margin-top: 0px;

    @media screen and (max-width: ${width.largeMobile}) {
        width: 70%;
        font-size: 16px;
        line-height: 25px;
        text-align: justify;
    }

    @media screen and (min-width: 1280px){
        font-size: 20px;
        line-height: 30px;
    }

    @media screen and (min-width: 1920px) {
        font-size: 35px;
        line-height: 40px;
    }

    @media screen and (min-width: 2048px) {
        font-size: 35px;
        line-height: 40px;
    
    }

    @media screen and (min-width: ${width.extraLargeDesktop}) {
        font-size: 60px;
        width: 50%;
        height: 30vh;
        line-height: 70px;
    }

    
`;
