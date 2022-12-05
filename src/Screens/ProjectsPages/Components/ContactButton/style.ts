import styled from "styled-components";

import { width } from "../../../../Services/config";

interface ButtonProps{
    color: string
}

export const Container = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;    
    margin: 0px;
    width: 100%;
    height: 30%;
    margin-bottom: 5%;

    @media screen and (max-width: ${width.largeMobile}) {
        margin: 25px 0px;
    }
`;

export const Button = styled.p<ButtonProps>`
    border: 3px solid ${({color}) => color ? `${color}` : '#000'};
    text-align: center;
    margin: 0px;
    padding: 2%;
    margin-top: 3%;
    border-radius: 20px;
    cursor: pointer;
    font-family: 'Maven Pro';
    font-style: normal;
    font-weight: 500;
    font-size: 22px;
    text-align: center;
    width: 30%;
    

    color: ${({color}) => color ? `${color}` : '#000'};

    &:hover{
        background-color: ${({color}) => color ? `${color}` : '#000'};
        color: #fff;
        transition: background-color 0.8s;
    }

    @media screen and (max-width: ${width.largeMobile}) {
        width: 80%;
        font-size: 1.2em;
        margin-top: 10%;
        margin-bottom: 10%;
    }

    @media screen and (min-width: 2048px) {
        font-size: 35px;
        line-height: 40px;
    }

    @media screen and (min-width: ${width.extraLargeDesktop}) {
        font-size: 50px;
        border: 6px solid ${({color}) => color ? `${color}` : '#000'};
    }
`;





