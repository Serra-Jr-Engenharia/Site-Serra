import styled from "styled-components";
import { width } from "../../../../Services/config";
import TypewriterComponent from 'typewriter-effect';

export const SloganTextContainer = styled.div`
    width: 100%;
    /* background-color: red; */

    .writer{
        font-family: 'Courier Prime';
        font-size: 50px;
        color: #001830;
        font-weight: 700;
    }

    .writer-cursor{
        font-family: 'Courier Prime';
        font-size: 50px;
        color: orange;
        font-weight: 700;
        animation: blink 0.5s infinite;

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


