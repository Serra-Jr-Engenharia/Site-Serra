import styled from "styled-components";

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
    

    @media screen and (max-width: 959px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }   
`;


export const ContainerSection = styled.section`
    width: 85%;
    min-height: 90vh;
    padding-bottom: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content:center;
  
    background-color: lightgrey;
    border-radius: 3rem;
    

    @media screen and (max-width: 959px) {
        width: 80%;
    }
`;

export const ContainerSectionTitle = styled.div`
    height: 20%;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    padding: 0 0 10px 0;

    @media screen and (max-width: 959px) {
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
    
    @media screen and (max-width: 959px) {
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

    @media screen and (max-width: 959px) {    
        width: 60%;
        max-height: 40vh;
        border-radius: 20px;
    }
`;

export const ContainerLogo = styled.div`
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 959px) {    
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 2%;
    }
`;

export const SectionSpan = styled.span`
    width: 90%;
    font-size: 1.5rem;
    font-weight: 500;
    color: var(--blue);

    @media screen and (max-width: 959px) {
        width: 100%;
        font-size: 1rem;
        font-weight: 500;
        color: var(--blue);
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
    margin-top: 20px;
    border: 0px;

    &:hover{
        opacity: 0.8;
    }
`;


export const ContainerSectionContent = styled.div`
    display:flex;
    justify-content: center;
    align-items: start;
    width: 50%;
    text-align: justify;
    flex-direction: column;

    @media screen and (max-width: 959px) {
        display:flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        padding: 10px;
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
