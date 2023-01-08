import styled from 'styled-components'

import { width } from '../../../../Services/config';

export const Container = styled.div``;

export const Content = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    width: 100%;
    margin-top: 5%;
    margin-bottom: 5%;

    @media screen and (max-width: ${width.tablet}) {
        display: flex;
        flex-direction: column;
        flex-wrap: wrap; 
        justify-content: center; 
        align-items: center;
    }
`;

export const ContentDivision = styled.div`
    border: 1px solid #001830;

    @media screen and (max-width: ${width.tablet}) {
        transform: rotate(90deg);
        margin: 0px;
        height: 8vh;   
    }
    @media screen and (min-width: ${width.tablet}) {
        height: 40vh;   
    }
    @media screen and (min-width: ${width.notebook}) {
        height: 70vh;   
    }
    @media screen and (min-width: ${width.desktop}) {
        height: 60vh;   
    }
    @media screen and (min-width: ${width.largeDesktop}) {
        height: 50vh;
    }
    @media screen and (min-width: ${width.extraLargeDesktop}) {
        height: 50vh;
    }
`;





