import styled from "styled-components";
import { width } from "../../../../Services/config";

export const ModalContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 80vw;
    max-width: 800px;
    max-height: 600px;

    @media screen and (min-width: ${width.largeDesktop}){
        font-size: 30px;
    }

    @media screen and (min-width: ${width.extraLargeDesktop}){
        font-size: 40px;
    }
`;

export const ModalHeader = styled.div`
    position: sticky;
    margin-top: 5px;
    background-color: #fff;
    width: 100%;
    z-index: 3;
`;

export const ModalTitle = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media screen and (max-width: ${width.largeMobile}){
        font-size: 15px;
    }
`;

export const ModalH2 = styled.h2`
`;

export const ModalP = styled.p`
margin-top: 30px;
font-size: 1.1em;
    @media screen and (max-width: ${width.largeMobile}){
        margin-top: 10px;
        font-size: 1.1em;
    }
`;

export const ModalButton = styled.button`
    background-color: #FD6300;
    border: none;
    font-size: 1.1em;
    width: 50%;
    padding: 0.6rem;
    font-weight: 500;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 1rem;
    cursor: pointer;
    margin: 20px;

    &:hover{
        opacity: 0.8;
    }

    @media screen and (min-width: ${width.desktop}) {
        width: 50%;
    }
    @media screen and (min-width: ${width.largeDesktop}) {
        width: 50%;
    }
    @media screen and (min-width: ${width.extraLargeDesktop}) {
        width: 60%;
    }
    @media screen and (max-width: ${width.largeMobile}){
        width: 70%;
        font-size: 1em;
    }
`;


export const ModalCrossButton = styled.button`
    background-color: #fff;
    border: 1px solid #FF7400;
    margin-left: 10px;
    font-size: 1.5em;
    width: 40px;
    height: 40px;
    border-radius: 20px;
    color: #FF7400;

    &:hover{
        border: 1px solid #fff;
        background-color: red;
        transition: 0.3s;
        color: #fff;
        cursor: pointer;
    }

    @media screen and (max-width: ${width.largeMobile}){
        width: 30px;
        height: 30px;
        border-radius: 15px;
    }

    @media screen and (min-width: ${width.largeDesktop}){
        width: 60px;
        height: 60px;
        border-radius: 30px;
    }

    @media screen and (min-width: ${width.extraLargeDesktop}){
        width: 80px;
        height: 80px;
        border-radius: 40px;
    }
`;

export const ModalLine = styled.hr`
    background: linear-gradient(90deg, rgba(4,173,215,1) 0%, rgba(4,173,215,1) 41%, rgba(255,116,0,1) 69%);
    height: 2px;
    width: 100%;
    border: 0;
`;
