import styled from "styled-components";
import backgroundImg from "../../../../Assets/MechanicPage/background-mecanica.svg"

import { width } from "../../../../Services/config";

export const Container = styled.div`
    background-image: url(${backgroundImg});
    background-repeat: no-repeat; 
    background-size: cover;
    background-position: top;
    padding-top: 2%;
`;

export const Title = styled.h1`
    text-align: center;
    font-family: 'Maven Pro';
    font-style: normal;
    font-weight: 500;
    font-size: 40px;
    line-height: 113px;
    margin-top: 0;
    margin-bottom: 0px;

    @media screen and (max-width: ${width.largeMobile}) {
        font-size: 38px;
    }

    @media screen and (min-width: ${width.extraLargeDesktop}) {
        font-size: 100px;
    }
`;

export const ServicesContainer = styled.div `
    display: flex;
    justify-content: space-around;

    @media screen and (max-width: ${width.tablet}) {
        flex-direction: column;
    }  
`;


