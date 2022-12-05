import styled from "styled-components";
import backgroundImg from '../../../../Assets/CompPage/background-computacao.svg'

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

    @media screen and (max-width: 420px) {
        flex-direction: column;
    }  
    
    @media screen and (min-width: ${width.extraLargeDesktop}) {
        margin-left: 10%;
    }
`;

export const LogoContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
`;

export const Logo = styled.img`

    @media screen and (max-width: ${width.tablet}){
        width: 40px;
        height: 40px;
        margin-bottom: 5%;
        margin-right: 2%;
    }
    @media screen and (min-width: ${width.tablet}){
        width: 50px;
        height: 50px;
        margin-bottom: 5%;
        margin-right: 2%;
    }

    @media screen and (min-width: ${width.largeDesktop}) {
        width: 80px;
        height: 80px;
        margin-bottom: 3%;
    }
`;


