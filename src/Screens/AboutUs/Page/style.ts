import styled from 'styled-components'

import { width } from "../../../Services/config";

export const PresentationMain = styled.div`
    background-color: #FF7400;
    display: flex;
    justify-content: space-around;
    border-radius: 0px 0px 0px 100px;
    min-height: 50vh;
    
    @media screen and (max-width: 390px) {
        order: 1;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        
    }

    @media screen and (max-width: 500px) {
        /* flex-direction: column; */
        flex-wrap: wrap;
    }

    @media screen and (max-width: 820px) {
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    @media screen and (max-width: 1000px) {
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`;


export const PresentationContainer = styled.div `
   

`;

export const AboutUsContainer = styled.div`

    
`;

export const PresentationAboutUsP = styled.p`
    margin: 0px;
    font-family: 'Maven Pro';
    font-style: normal;
    font-weight: 500;
    font-size: 76px;
    text-align: center;
    color: #FFFFFF;
    display: flex;
    align-items: center;
    
    @media screen and (max-width: 390px) {
        font-size: 50px;
    }

    @media screen and (max-width: 500px) {
        font-size: 70px;
    }

    @media screen and (max-width: 820px) {
        margin-bottom: 5%;
    }

    @media screen and (min-width: 1000px) {
        margin-bottom: 5%;
        font-size: 120px;
    }

    @media screen and (min-width: ${width.largeDesktop}) {
        font-size: 150px;
    }

    @media screen and (min-width: ${width.extraLargeDesktop}) {
        font-size: 250px;
    }

    
`;

export const PresentationAboutUsImg = styled.img`
    @media screen and (max-width: 500px) {
        width: 70%;
    }

    @media screen and (min-width: 500px) {
        width: 60%;
    }

    @media screen and (min-width: 1000px) {
        width: 50%;
    }

    @media screen and (min-width: ${width.largeDesktop}) {
        width: 30%;
    }
`;

export const AboutUsContent = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    width: 100%;
    margin-top: 5%;
    margin-bottom: 5%;

    @media screen and (max-width: 390px) {
        order: 1;
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
    }

    @media screen and (max-width: 500px) {
        order: 1;
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
    }
`;

export const AboutUsContentDivision = styled.div`
    border: 1px solid #001830;
    height: 80vh;

    @media screen and (max-width: 390px) {
        transform: rotate(90deg);
        margin: 0px;
        height: 20vh;
    }

    @media screen and (max-width: 500px) {
        transform: rotate(90deg);
        margin: 0px;
        height: 20vh;
    }

    @media screen and (min-width: ${width.largeDesktop}) {
        height: 45vh;
    }

    @media screen and (min-width: ${width.extraLargeDesktop}) {
        height: 50vh;
    }
`;





