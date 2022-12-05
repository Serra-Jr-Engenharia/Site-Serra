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

    @media screen and (max-width: 500px) {
        display: flex;
        flex-direction: column;
        flex-wrap: wrap; 
        justify-content: center; 
        align-items: center;
    }
`;

export const ContentDivision = styled.div`
    border: 1px solid #001830;
    height: 80vh;

    @media screen and (max-width: 500px) {
        transform: rotate(90deg);
        margin: 0px;
        height: 10vh;
        
    }

    @media screen and (min-width: ${width.largeDesktop}) {
        height: 45vh;
    }

    @media screen and (min-width: ${width.extraLargeDesktop}) {
        height: 50vh;
    }
`;





