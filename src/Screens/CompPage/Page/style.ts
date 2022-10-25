import styled from "styled-components";
import backgroundImg from '../../../Assets/CompPage/background-computacao.svg'
import { width } from "../../../Services/config";

export const CompStyle = styled.div`
    scroll-behavior: smooth;

`;

export const EngComp = styled.div`
    background-color: #FF7400;
    display: flex;
    justify-content: space-evenly;
    border-radius: 0px 0px 0px 100px;
    align-items: center;
`;

export const EngCompImg = styled.img`
    width: 40%;
`;

export const ServiceletterDiv = styled.div`
    background-image: url(${backgroundImg});
`;

export const EngCompP = styled.p`
    font-family: 'Maven Pro';
    font-style: normal;
    font-weight: 700;
    font-size: 56px;
    line-height: 30px;
    text-align: center;
    color: #FFFFFF;
`;

export const EngCompPContainer = styled.div`
`;


export const ServiceletterH1 = styled.h1`
    text-align: center;
    margin-top: 0;
    font-family: 'Maven Pro';
    font-style: normal;
    font-weight: 500;
    font-size: 76px;
    line-height: 113px;
    margin-bottom: 0px;
`;
export const ServiceletterH2 = styled.h2`
    text-align: center;
    font-family: 'Maven Pro';
    font-style: normal;
    font-weight: 500;
    font-size: 28px;
    line-height: 56px;
`;
export const ServiceletterCard = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: flex-start;
    flex-wrap: wrap;
`;

export const SlCard = styled.div`
    margin-top: 3%;
    width: 40%;
`;


export const SlCardUp = styled.div`
    display: flex;
    min-height: 6vh;
    margin-bottom: 5%;
    align-items: center;
    width: 100%;

`;

export const SlCardP = styled.p`
    width: 100%;
    font-family: 'Maven Pro';
    font-style: normal;
    font-weight: 200;
    font-size: 26px;
    line-height: 30px;
    text-align: left;
    margin-top: 0px;

    @media screen and (min-width: ${width.largeDesktop}){
        font-size: 2em;
        line-height: 40px;
        font-weight: 300;
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

    @media screen and (min-width: ${width.largeDesktop}){
        font-size: 2em;
        line-height: 40px;
    }
`;

export const SlCardImg = styled.img`
    width: 10%;
    height: 10%;
    margin-right: 4%;
    color: red;
`;
export const SlCardDown = styled.div`
    display: flex;
`;


export const SlLogoContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
`;

export const SlLogo = styled.img`
    margin: 10px;
    
`;

export const BoxContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;    
    margin: 0px;
    width: 920px;
    height: 30%;
    
`;

export const ImagesPreFooterContact = styled.img`
    margin-right: 2%;
    width: 3.5rem;
`;

export const ImagesPreFooterScrollUp = styled.img`
    margin-right: 2%;
    width: 3rem;
    height: 3rem;
`;

export const ImagesPreFooter = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    
`;

export const ProjectsCompAll = styled.div`
    margin-top: 3%;
`;

export const BoxText = styled.p`
    border: 3px solid #FD6300;
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

    color: #FD6300;

    &:hover{
        background-color: #FD6300;
        color: #fff;
        transition: background-color 0.8s;
    }
`;

export const Box = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;    
    margin: 0px;
    width: 100%;
    height: 30%;
`;


export const Line = styled.hr `
    margin: 0px;   
    height: 4px;
    margin: 0px;
    border: 0;
    background: linear-gradient(90deg, rgba(4,173,215,1) 0%, rgba(4,173,215,1) 41%, rgba(255,116,0,1) 69%);
`;
