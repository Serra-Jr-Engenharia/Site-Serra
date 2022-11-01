import styled from "styled-components";
import backgroundImg from "../../../Assets/MechanicPage/background-mecanica.svg"

import { width } from "../../../Services/config";

export const MecStyle = styled.div `
`;

export const ServiceLetterContainer = styled.div`
    background-image: url(${backgroundImg});
    background-repeat: no-repeat; 
    background-size: cover;
    background-position: top;
`;

export const EngMec = styled.div `
    background-color: #04ADD7;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    border-radius: 0px 0px 0px 100px;

    @media screen and (max-width: ${width.largeMobile}) {
        flex-wrap: wrap;
    } 
`;

export const SlCardH3 = styled.h3`
    font-family: 'Maven Pro';
    font-style: normal;
    font-weight: 500;
    font-size: 26px;
    line-height: 22px;
    margin-top: 0px;
    margin-bottom: 0px;

    @media screen and (max-width: ${width.largeMobile}) {
        font-size: 22px;
    }
    
    @media screen and (min-width: 2048px) {
        font-size: 35px;
        line-height: 40px;
    }

    
`;
export const SlCardP = styled.p`
    width: 400px;
    font-family: 'Maven Pro';
    font-style: normal;
    font-weight: 200;
    font-size: 26px;
    line-height: 30px;
    text-align: left;
    margin-top: 0px;

    @media screen and (max-width: ${width.largeMobile}) {
        width: 70%;
        font-size: 16px;
        line-height: 25px;
        text-align: justify;
    }

    @media screen and (min-width: 1280px){
        font-size: 20px;
        line-height: 30px;
        
    }

    @media screen and (min-width: 1920px) {
        font-size: 35px;
        line-height: 40px;
    }

    @media screen and (min-width: 2048px) {
        font-size: 35px;
        line-height: 40px;
    }

    
`;

export const EngMecP = styled.p`
    font-family: 'Maven Pro';
    font-style: normal;
    font-weight: 700;
    font-size: 56px;
    text-align: center;  
    color: #FFFFFF;
    margin: 20px;

    @media screen and (max-width: ${width.largeMobile}) {
        margin-top: 20%;
        line-height: 5%;
        font-size: 50px;
    }  

    @media screen and (min-width: 1280px){
        font-size: 70px;
        line-height: 100px;
        
    }

    @media screen and (min-width: 1920px) {
        font-size: 106px;
        line-height: 120px;
    }

    @media screen and (min-width: 2048px) {
        font-size: 126px;
        line-height: 130px;
    }
`;

export const EngMecPContainer = styled.div`
    
`;
export const ServiceLetterH1 = styled.h1`
    text-align: center;
    font-family: 'Maven Pro';
    font-style: normal;
    font-weight: 500;
    font-size: 76px;
    line-height: 113px;
    margin-top: 0;
    margin-bottom: 0px;

    @media screen and (max-width: ${width.largeMobile}) {
        font-size: 38px;
    }
`;
export const ServiceLetterH2 = styled.h2 `
    text-align: center;
    font-family: 'Maven Pro';
    font-style: normal;
    font-weight: 500;
    font-size: 28px;
    line-height: 56px;

    @media screen and (max-width: ${width.largeMobile}) {
        margin-top: -5%;
        font-size: 22px;
       } 

    @media screen and (min-width: 1280px){
        font-size: 30px;
        line-height: 40px;
        
    }

    @media screen and (min-width: 1920px) {
        font-size: 35px;
        line-height: 40px;
    }

    @media screen and (min-width: 2048px) {
        font-size: 35px;
        line-height: 40px;
    }

       
`;
export const ServiceletterCard = styled.div `
    display: flex;
    justify-content: space-around;
    
    @media screen and (max-width: ${width.largeMobile}) {
        flex-directiom: row;
        flex-wrap: wrap;
    }

    @media screen and (max-width: 420px) {
        flex-direction: column;
    }    
`;

export const SlCard = styled.div `
    margin-top: 3%;
    margin-bottom: 3%;

    @media screen and (max-width: ${width.largeMobile}) {
        margin-bottom: 12%;
    }

    @media screen and (max-width: ${width.tablet}) {
        width: 40%;
        margin-bottom: 12%;
    } 

    @media screen and (max-width: 420px) {
        flex-direction: column;
        width: 95%;
    }

`;

export const SlCardImg = styled.img`
    display: flex;
    width: 3.5vw;
    margin-right: 4%;

    @media screen and (max-width: ${width.largeMobile}) {
        width: 8%;
        margin-left: 5%;
    }

    @media screen and (max-width: ${width.tablet}) {
        width: 10%;
    } 
`;
export const SlCardUp = styled.div `
    display: flex;
    min-height: 20%;
    margin-bottom: 5%;
    align-items: center;

`;

export const SlCardDown = styled.div `
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
`;

export const EngMecImg = styled.img`
    width: 40%;

    @media screen and (max-width: ${width.largeMobile}) {
        width: 80%;
    }
`;

export const Line = styled.hr `
    margin: 0px;   
    height: 4px;
    margin: 0px;
    border: 0;
    background: linear-gradient(90deg, rgba(4,173,215,1) 0%, rgba(4,173,215,1) 41%, rgba(255,116,0,1) 69%);
`;

export const BoxText = styled.p`
    border: 3px solid #04ADD7;
    text-align: center;
    margin: 0px;
    padding: 2%;
    margin-top: 2%;
    border-radius: 20px;
    cursor: pointer;
    font-family: 'Maven Pro';
    font-style: normal;
    font-weight: 500;
    font-size: 22px;
    line-height: 47px;
    text-align: center;

    color: #04ADD7;

    &:hover{
        background-color: #04ADD7;
        color: #fff;
        transition: background-color 0.8s;
    }

    @media screen and (max-width: ${width.largeMobile}) {
        font-size: 16px;
        line-height: 20px;
    }
`;

export const Box = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;    
    margin: 0px;
    width: 100%;
    height: 30%;

    @media screen and (max-width: ${width.largeMobile}) {
        margin: 25px 0px;
    }
`;

export const ImagesPreFooter = styled.div `
    display: flex;
    justify-content: flex-end;
    align-items: center;
`;

export const ImagesPreFooterContact = styled.img `
    margin-right: 2%;
    width: 3.5rem;

    @media screen and (max-width: ${width.largeMobile}) {
        width: 2.5rem;
    }
`;

export const ImagesPreFooterScrollUp = styled.img `
    margin-right: 2%;
    width: 3rem;
    height: 3rem;

    @media screen and (max-width: ${width.largeMobile}) {
        width: 2rem;
    }
`;

export const ProjectsMecAll = styled.div `
    margin-top: 3%;

    @media screen and (max-width: ${width.largeMobile}) {
        margin-top: 20%;
    }
`;  


