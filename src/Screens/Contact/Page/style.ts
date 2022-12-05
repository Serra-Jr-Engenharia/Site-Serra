import styled from "styled-components";

import { width } from "../../../Services/config";

export const InformationSpan = styled.span`
    align-self: center;
    font-family: 'Maven Pro';
    font-style: normal;
    font-weight: 300;
    font-size: 25px;
    color: #000000;
    margin-left: 5%;

    @media screen and (max-width: ${width.tablet}) {
        font-size: 17px;
    }

    @media screen and (min-width: ${width.tablet}) {
        font-size: 20px;
    }

    @media screen and (min-width: ${width.largeDesktop}) {
        font-weight: 300;
        font-size: 35px;
    }
    
    @media screen and (min-width: ${width.extraLargeDesktop}) {
        font-weight: 300;
        font-size: 50px;
    }

`;

export const InformationImg = styled.img`
    @media screen and (max-width: ${width.tablet}) {
        width: 2em;
        height: 2em;
    }

    @media screen and (min-width: ${width.tablet}) {
        width: 4em;
        height: 4em;
    }

    @media screen and (min-width: ${width.largeDesktop}) {
        width: 4em;
        height: 4em;
    }
    
    @media screen and (min-width: ${width.extraLargeDesktop}) {
        width: 8em;
        height: 8em;
    }
   
`;

export const Information = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 80%;
    height: 100%;
    margin-right: 2%;

    @media screen and (max-width: ${width.notebook}) {
        order: 1;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        margin-top: 7%;
        justify-content: center;
        align-items: center;
    }

    @media screen and (max-width: ${width.mobile}) {
        margin-top: 20%;
    }


    
`;

export const MapBox = styled.div`
    width: 100%;
    height: 50vh;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const MapBoxContainer = styled.div`
    width: 60%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 7%;

    @media screen and (max-width: 390px) {
        width: 80%;
    }

    @media screen and (max-width: 500px) {
        width: 80%;
    }
`;

export const All = styled.div`
    display: flex;
    margin-top: 5%;
    align-items: center;
    justify-content: space-between;
    width: 60%;
    margin-bottom: 5%;

    @media screen and (max-width: ${width.notebook}) {
        flex-direction: column;
    }

    @media screen and (max-width: ${width.largeMobile}) {
        width: 90%;
    } 

`;

export const InformationIconText = styled.div`
   display: flex;
   margin-bottom: 20%;
   width: 100%;
   

   @media screen and (min-width: ${width.notebook}) {
        margin-bottom: 10%;
    }
   @media screen and (min-width: ${width.largeDesktop}) {
        margin-bottom: 7%;
    }
   @media screen and (min-width: ${width.extraLargeDesktop}) {
        margin-bottom: 7%;
    }
`;

export const Form = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #D2D2D2;
    border-radius: 20px;
    flex-grow: 1;
    padding-bottom: 20px;

    @media screen and (max-width: ${width.notebook}) {
        width: 100%;
    }

    @media screen and (min-width: ${width.largeNotebook}) {
        width: 60%;
    }

    @media screen and (min-width: ${width.extraLargeDesktop}) {
        width: 80%;
    }
    
`;

export const Inputs = styled.div`
    margin-left: 10%;
    width: 100%;
`;

export const InputsP = styled.p`
    font-family: 'Maven Pro';
    font-style: normal;
    font-weight: 300;
    font-size: 28px;
    line-height: 10px;
    margin-bottom: 20px;
    
    @media screen and (min-width: ${width.extraLargeDesktop}) {
        font-size: 3rem;
        line-height: 25px;
    }

`;

export const InputArea = styled.input`
    padding-left: 30px;
    border-radius: 10px;
    font-size: 1.8rem;
    border: 1px;
    width: calc(90% - 30px);
    height: 2.5rem;
    background: #EEEEEE;
    &:focus{
        outline: none;
    }
    &::placeholder{
        font-size: 20px;
        font-weight: 400;
    }

    @media screen and (min-width: ${width.extraLargeDesktop}) {
        padding-bottom: 10px;
        height: 4rem;

        &::placeholder{
            font-size: 1.8rem;
        }
    }

`;

export const Button = styled.button`
    margin-top: 20px;
    border: 0px;
    background: #FF7400;
    border-radius: 10px;
    width: 90%;
    height: 2.5rem;
    color: #fff;
    font-size: 20px;
    margin-bottom: 20px;

    @media screen and (min-width: ${width.extraLargeDesktop}) {
        width: 85%;
        height: 5rem;
        font-size: 2.5rem;
    }
`;

export const ButtonContainer = styled.div`
    width: 90%;
    display: flex;
    align-items: center;
    justify-content: center;

`;

export const InputAreaMensage = styled.input`
    padding-left: 30px;
    border-radius: 10px;
    font-size: 1.8rem;
    border: 1px;
    width: calc(90% - 30px);
    height: 10rem;
    background: #EEEEEE;
    margin-bottom: 10px;
    &:focus{
        outline: none;
    }
    &::placeholder{
        font-size: 20px;
        font-weight: 400;
    }

    @media screen and (min-width: ${width.extraLargeDesktop}) {
        height: 15rem;

        &::placeholder{
            font-size: 1.8rem;
        }
    }
`;

export const FormContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 70%;

    @media screen and (max-width: ${width.notebook}) {
        width: 100%;
    }

    
`;

export const ContactStyle = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

export const CaptchaContainer = styled.div`  
    display: flex;
    justify-content: center;
    align-items: center;
    width: 90%;
`;