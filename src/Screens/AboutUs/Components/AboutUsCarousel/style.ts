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
    border-radius: 20px;

    @media screen and (max-width: ${width.tablet}) {
        height: 40vh;
        width: 90vw;
    }

    @media screen and (min-width: ${width.tablet}) {
        height: 40vh;
    }

    @media screen and (min-width: ${width.largeDesktop}) {
        height: 30vh;
    }

    @media screen and (min-width: ${width.extraLargeDesktop}) {
       height: 40vh;
    }
`;

export const SliderContainer = styled.div<Props>`
    margin: 20px;
    display: inline-block;

    @media screen and (max-width: ${width.notebook}) {
        width: 90%;
    }

    ${({containerWidth}) => containerWidth ?
        `width: ${containerWidth}`
        :
        `width: 100%`
    }

`;