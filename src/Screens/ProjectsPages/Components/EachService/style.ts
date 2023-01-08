import styled from "styled-components";
import { width } from "../../../../Services/config";

export const Container = styled.div `
    margin-top: 3%;
    margin-bottom: 3%;

    @media screen and (max-width: ${width.tablet}) {
        flex-direction: column;
        width: 95%;
    }
`;

export const TitleContainer = styled.div `
    display: flex;
    min-height: 20%;
    margin-bottom: 5%;
    align-items: center;

`;

export const Image = styled.img`
    margin-right: 5%;
    margin-left: 4%;
    height: 50px;

    @media screen and (max-width: ${width.largeMobile}) {
        width: 8%;
    }
    @media screen and (min-width: ${width.largeMobile}) {
        width: 6%;
    }
    @media screen and (min-width: ${width.tablet}) {
        width: 8%;
    }
    @media screen and (min-width: ${width.largeDesktop}) {
        height: 70px;
        width: 10%;
    }
    @media screen and (min-width: ${width.extraLargeDesktop}) {
        height: 100px;
        width: 13%;
    }  
`;

export const Title = styled.h3`
    font-family: 'Maven Pro';
    font-weight: 500;
    margin-top: 0px;
    margin-bottom: 0px; 
    width: 300px;

    @media screen and (max-width: ${width.largeMobile}) {
        font-size: 20px;
    }
    @media screen and (min-width: ${width.largeMobile}) {
        font-size: 23px;
        line-height: 22px;
    }
    
    @media screen and (min-width: ${width.desktop}) {
        font-size: 30px;
        line-height: 40px;
        width: 400px;
    }

    @media screen and (min-width: ${width.extraLargeDesktop}) {
        font-size: 50px;
        line-height: 60px;
        width: 600px;
    }
`;

export const TextContainer = styled.div `
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
`;

export const Text = styled.p`
    font-family: 'Maven Pro';
    font-weight: 200;
    text-align: left;
    margin-top: 0px;

    @media screen and (max-width: ${width.largeMobile}) {
        width: 70vw;
        font-size: 16px;
        line-height: 25px;
        text-align: justify;
    }
    @media screen and (min-width: ${width.largeMobile}){
        font-size: 18px;
        line-height: 28px;
    }
    @media screen and (min-width: ${width.tablet}){
        width: 40vw;
    }

    @media screen and (min-width: ${width.desktop}) {
        font-size: 25px;
        line-height: 35px;
        width: 30vw;
    }

    @media screen and (min-width: ${width.extraLargeDesktop}) {
        font-size: 40px;
        line-height: 45px;
    }

    
`;
