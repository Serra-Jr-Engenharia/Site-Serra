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
    font-size: 55px;
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

export const SlLogoContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;

    @media screen and (max-width: ${width.largeMobile}){
        padding-bottom: 10%;
    }


`;

export const SlLogo = styled.img`
    width: 80px;
    height: 80px;
    margin-bottom: 5%;

    @media screen and (max-width: ${width.tablet}){
        width: 50px;
        height: 50px;
        margin-bottom: 5%;
    }

    @media screen and (min-width: ${width.extraLargeDesktop}) {
        width: 200px;
        height: 200px;
        margin-bottom: 2%;
    }
`;


