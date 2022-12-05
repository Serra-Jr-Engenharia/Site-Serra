import styled from "styled-components";
import { width } from "../../../../Services/config";

export const Container = styled.div `
    background-color: #04ADD7;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    border-radius: 0px 0px 0px 100px;

    @media screen and (max-width: ${width.largeMobile}) {
        flex-wrap: wrap;
    } 
`;

export const TextContainer = styled.div``;

export const Text = styled.p`
    font-family: 'Maven Pro';
    font-style: normal;
    font-weight: 700;
    text-align: center;  
    color: #FFFFFF;
    margin: 20px;

    @media screen and (max-width: ${width.tablet}) {
        font-size: 40px;
    }

    @media screen and (min-width: ${width.tablet}) {
        font-size: 50px;
    }

    @media screen and (min-width: ${width.largeDesktop}) {
        font-size: 100px;
    }

    @media screen and (min-width: ${width.extraLargeDesktop}) {
        font-size: 140px;
    }
`;

export const Image = styled.img`
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