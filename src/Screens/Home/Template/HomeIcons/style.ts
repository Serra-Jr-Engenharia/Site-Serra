import styled from "styled-components";
import { width } from "../../../../Services/config";

export const Icon = styled.img`
    height: 15vh;

    @media screen and (max-width: 1024px) {
        height: 10vh;
    }
`;

export const IconDescription = styled.p`
    font-family: 'Maven Pro';
    font-style: normal;
    font-weight: 500;
    font-size: 25px;
    line-height: 30px;
    min-height: 90px;
    margin-bottom: 0;
    width: 200px;
    text-align: center;
    color: #000000;

    @media screen and (min-width: ${width.largeDesktop}) {
        line-height: 50px;
        font-size: 40px;
        width: 400px;
    }

    @media screen and (min-width: ${width.extraLargeDesktop}) {
        line-height: 60px;
        font-size: 60px;
        width: 500px;
    }
`;

export const HomeIconsStyle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    margin: 10px;
    margin-top: 50px;
    margin-bottom: 50px;

    @media screen  and (max-width: ${width.tablet}){
        margin-top: 30px;
        margin-bottom: 0;
    }
`;
