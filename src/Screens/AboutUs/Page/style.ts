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
        flex-wrap: wrap;
    }

    @media screen and (max-width: 1000px) {
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`;


export const PresentationContainer = styled.div `
   

`;

export const PresentationAboutUsP = styled.p`
    margin: 0px;
    font-family: 'Maven Pro';
    font-weight: 500;
    text-align: center;
    color: #FFFFFF;
    display: flex;
    align-items: center;

    @media screen and (max-width: ${width.tablet}) {
        font-size: 40px;
    }

    @media screen and (min-width: ${width.tablet}) {
        font-size: 60px;
    }

    @media screen and (min-width: ${width.largeDesktop}) {
        font-size: 120px;
    }

    @media screen and (min-width: ${width.extraLargeDesktop}) {
        font-size: 180px;
    }    
`;

export const PresentationAboutUsImg = styled.img`
    @media screen and (max-width: ${width.largeMobile}) {
        width: 60%;
        margin-top: 10%;
    }

    @media screen and (min-width: ${width.largeMobile}) {
        width: 40%;
        margin-top: 5%;
    }
    @media screen and (min-width: ${width.notebook}) {
        width: 25%;
        margin-top: 0;
    }
`;




