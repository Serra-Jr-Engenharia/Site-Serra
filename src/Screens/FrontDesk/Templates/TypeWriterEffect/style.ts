import styled from "styled-components";

export const SloganTextContainer = styled.div`
    width: 100%;
    .writer{
        font-family: 'Courier Prime';
        font-size: 70px;
        color: #001830;
        font-weight: 700;
    }

    .writer-cursor{
        font-family: 'Courier Prime';
        font-size: 70px;
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