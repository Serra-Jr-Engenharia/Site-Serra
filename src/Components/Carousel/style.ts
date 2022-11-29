import styled, { css } from "styled-components";
import { width } from "../../Services/config";

interface Props{
    containerWidth?: string
}


export const Container = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    overflow: hidden;
    background-color: transparent;
`;

export const Wrapper = styled.div`
    width: 100%;
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
    min-height: 100vh;
    padding-bottom: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    margin-bottom: 3%;
  
    background-color: lightgrey;
    border-radius: 3rem;
    
    @media screen and (max-width: ${width.tablet}) {
        width: 80%;
        min-height: 80vh;
    }

    @media screen and (min-width: ${width.tablet}) {
        width: 80%;
        min-height: 60vh;
    }

    @media screen and (min-width: ${width.largeDesktop}) {
        min-height: 65vh;
        padding-bottom: 3%;
    }

    
`;

export const ContainerSectionTitle = styled.div`
    height: 20%;
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
    height: 80%;
    display: flex;
    justify-content: center;
    flex-direction: row;
    
    
    @media screen and (max-width: ${width.notebook}) {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column !important;
    }

    

`;


export const Logo = styled.img`
    width: 60%;
    max-height: 40vh;
    border-radius: 20px;

    @media screen and (max-width: ${width.tablet}) {    
        width: 50%;
        max-height: 40vh;
        border-radius: 20px;
    }

    @media screen and (min-width: ${width.largeDesktop}) {    
        width: 50%;
        max-height: 40vh;
        border-radius: 20px;
    }
`;

export const ContainerLogo = styled.div`
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: ${width.notebook}) {    
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 2%;
    }
    
    
`;

interface SectionSpanProps {
    tamanhoDoTexto: number;
}


export const SectionSpan = styled.span<SectionSpanProps>`
    width: 90%;
    font-size: 60px;
    font-weight: 500;
    color: var(--blue);

    /* background-color: red; */



    


    @media screen and (max-width: ${width.notebook}) {
        width: 85%;
        font-size: 1rem;
        color: var(--blue);
    }

    @media screen and (min-width: ${width.largeDesktop}) {
        font-size: 2.0rem;
    }

    @media screen and (min-width: ${width.extraLargeDesktop}) {
        font-size: 3.5rem;
    }

    /* ${ ({tamanhoDoTexto}) => tamanhoDoTexto && (tamanhoDoTexto > 300) ? css`font-size: 40px`: (tamanhoDoTexto > 350) ? css`font-size: 60px`: null  } */
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

export const SliderContainer = styled.div<Props>`
    display: inline-block;
    ${({containerWidth}) => containerWidth ?
        `width: ${containerWidth}`
        :
        `width: 100%`
    }
    
`;
