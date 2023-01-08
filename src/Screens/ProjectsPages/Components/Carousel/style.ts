import styled, { css } from "styled-components";
import { width } from "../../../../Services/config";

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 100%;
    
    overflow: hidden;
    background-color: transparent;
`;

export const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: ${width.notebook}) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`;


export const ContainerSection = styled.section`
    width: 85%;
    height: 100%;
    padding-bottom: 3%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    margin-bottom: 3%;
  
    background-color: lightgrey;
    border-radius: 3rem;

    @media screen and (min-width: ${width.desktop}) {    
        width: 75%;
    }
    @media screen and (min-width: ${width.extraLargeDesktop}) {    
        width: 65%;
    }
`;

export const ContainerSectionTitle = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    padding: 0 0 10px 0;
    margin-bottom: 3%;
    

    @media screen and (max-width: ${width.notebook}) {
        height: 20%;
        display: flex;
        justify-content: center;
        align-items: flex-start;
        padding: 0 0 10px 0;
    }

`;

export const ContainerSectionContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: row;
    
    
    @media screen and (max-width: ${width.notebook}) {
        width: 100%;
        display: flex;
        flex-direction: column !important;
    }
`;


export const Logo = styled.img`
    border-radius: 20px;

    @media screen and (max-width: ${width.largeMobile}) {   
        width: 200px;
        height: 200px;
    }
    @media screen and (min-width: ${width.largeMobile}) {    
        width: 300px;
        height: 200px;
    }
    @media screen and (min-width: ${width.notebook}) {    
        width: 350px;
        height: 200px;
    }
    @media screen and (min-width: ${width.desktop}) {    
        width: 400px;
        height: 300px;
    }
    @media screen and (min-width: ${width.largeDesktop}) {    
        width: 450px;
        height: 350px;
    }
    @media screen and (min-width: ${width.extraLargeDesktop}) {    
        width: 700px;
        height: 500px;
    }
`;

export const ContainerLogo = styled.div`
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 2%;

    @media screen and (max-width: ${width.notebook}) {    
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 2%;
    }
`;

export const SectionSpan = styled.span`
    width: 90%;
    color: var(--blue);

    @media screen and (max-width: ${width.largeMobile}) {
        width: 85%;
        font-size: 15px;
    }
    @media screen and (min-width: ${width.largeMobile}) {
        width: 85%;
        font-size: 16px;
    }
    @media screen and (min-width: ${width.notebook}) {
        font-size: 20px;
    }
    @media screen and (min-width: ${width.desktop}) {
        font-size: 24px;
    }
    @media screen and (min-width: ${width.largeDesktop}) {
        font-size: 28px;
    }

    @media screen and (min-width: ${width.extraLargeDesktop}) {
        font-size: 45px;
    }  
`;

export const SectionButton = styled.button`
    font-family: 'Maven Pro';
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    padding: 20px;
    color: #fff;
    width: 90%;
    background-color: #FF7400;
    border-radius: 1rem;
    margin-top: 40px;
    border: 0px;

    &:hover{
        opacity: 0.8;
        cursor: pointer;
    }

    @media screen and (max-width: ${width.largeMobile}) {
        width: 80%;
        font-size: 1rem;
    }

    @media screen and (min-width: ${width.largeDesktop}) {
        width: 90%;
        font-size: 2rem;
    }

`;


export const ContainerSectionContent = styled.div`
    display:flex;
    justify-content: center;
    align-items: start;
    width: 50%;
    text-align: justify;
    flex-direction: column;

    @media screen and (max-width: ${width.notebook}) {
        display:flex;
        justify-content: center;
        align-items: center;
        width: 100%;
    }
    
`;
