import styled from "styled-components";

interface Props{
    titleColor?: string
    buttonColor?: string
    carouselStyle?: boolean
}

export const Title = styled.div<Props>`
    width: 100%;
    height: 6rem;
    min-height: 30px;
    background-color: ${({titleColor}) => titleColor ?? "#FD6300"};
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-size: 1.6rem;
    font-weight: 600;
    margin-bottom: 20px;
`;

export const BottomCardBody = styled.div`
    border-radius: 1rem;
    background-color: #EDEDED;
    height: 100%;
    width: 80vw;
    background-color: #fff;
    margin-top: 5%;
    margin-bottom: 5%;
`;

export const BottomCardContent = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
`;

export const BottomCardLink = styled.a`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 1.2rem;
    padding-bottom: 1.2rem;
    text-decoration: none;
`;

export const BottomCardButton = styled.button<Props>`
    background-color: ${({buttonColor}) => buttonColor ?? "#FD6300"};
    border: none;
    width: 50%;
    padding: 0.6rem;
    font-size: 1.5rem;
    font-weight: 500;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 1rem;
    cursor: pointer;

    &:hover{
        opacity: 0.8;
    }
`;

export const BottomCardStyle = styled.div<Props>`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 2.5rem;
    padding-bottom: 2.5rem;
    background-color: #E6E6E5;
    width: 100%;

    ${({carouselStyle}) => carouselStyle ?
        null
        :
        `display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;`
    }
`;

export const HistoryText = styled.span`
    color: black;
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    text-align: justify;
    padding: 10px 30px;
`;

export const HistoryTextContainer = styled.div`
    width: 45%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const HistoryImg = styled.img`
    width: 45%;
    height: 45%;
    display: flex;
    justify-self: center;
    align-self: center;
    margin: 40px;
    border-radius: 1rem;
`;

