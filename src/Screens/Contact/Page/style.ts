import styled from "styled-components";

import { width } from "../../../Services/config";

export const InformationSpan = styled.span`
    font-family: 'Maven Pro';
    font-style: normal;
    font-weight: 300;
    font-size: 25px;
    line-height: 25px;
    color: #000000;
    margin-left: 5%;

    @media screen and (min-width: ${width.largeDesktop}) {
        font-weight: 300;
        font-size: 40px;
        line-height: 40px;
        width: 700px;
    } 
    @media screen and (min-width: ${width.extraLargeDesktop}) {
        font-weight: 300;
        font-size: 60px;
        line-height: 60px;
        width: 900px;
    }

    @media screen and (min-width: ${width.mobile}) {
        font-size: 20px;
        line-height: 20px;
        width: 300px;
        
    }
`;

export const InformationImg = styled.img`
    width: 3em;
    height: 3em;

    @media screen and (min-width: ${width.largeDesktop}) {
        width: 4em;
        height: 4em;
    }
    
    @media screen and (min-width: ${width.extraLargeDesktop}) {
        width: 6em;
        height: 6em;
    }

    @media screen and (min-width: ${width.mobile}) {
        width: 20%;
        height: 20%;
    }
`;

export const Information = styled.div`
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

    @media screen and (min-width: ${width.mobile}) {
        margin-top: 20%;
    }

    
`;

export const MapBox = styled.div`
    width: 60%;
    height: 50vh;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const MapBoxContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 7%;
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
        font-size: 40px;
        line-height: 20px;
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
        width: 60%;
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

`;