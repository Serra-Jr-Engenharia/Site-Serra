import styled from "styled-components";
import { width } from "../../../../Services/config";

export const SloganTextContainer = styled.div`
    width: 100%;

    .writer{
        font-family: 'Courier Prime';
        font-size: 45px;
        color: #001830;
        font-weight: 700;

        @media screen and (min-width: ${width.largeDesktop}){
            font-size: 60px;
        }
        @media screen and (min-width: ${width.extraLargeDesktop}){
            font-size: 80px;
        }
    }

    .writer-cursor{
        font-family: 'Courier Prime';
        font-size: 45px;
        color: orange;
        font-weight: 700;
        animation: blink 0.5s infinite;

        @media screen and (min-width: ${width.largeDesktop}){
            font-size: 90px;
        }

    }

    @keyframes blink {
        50%{
            opacity: 1;
        }
        100%{
            opacity: 0;
        }
    }
`;


