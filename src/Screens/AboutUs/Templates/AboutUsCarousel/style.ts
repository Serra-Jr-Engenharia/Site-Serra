import styled from "styled-components";

import { width } from "../../../../Services/config";

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
    

    @media screen and (max-width: ${width.tablet}) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }   
`;



export const Logo = styled.img`
    width: 60%;
    max-height: 40vh;
    border-radius: 20px;

    @media screen and (max-width: ${width.tablet}) {    
        width: 96%;
        max-height: 40vh;
    }

    @media screen and (max-width: ${width.mobile}) {
        width: 100%;
        max-height: 40vh;
    }
    
`;

export const SliderContainer = styled.div<Props>`
    margin: 20px;
    display: inline-block;
    ${({containerWidth}) => containerWidth ?
        `width: ${containerWidth}`
        :
        `width: 100%`
    }
`;
