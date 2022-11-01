import styled from "styled-components";

import { width } from "../../../../Services/config";

export const AboutUsCardStyle = styled.div`
    
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px;
    margin: 10px;
    width: 30%;
    min-height: 50vh;

    font-style: normal;
    font-weight: 400;
    font-size: 28px;
    line-height: 32px;



    @media screen and (max-width: ${width.mobile}) {
        font-size: 16px;
        line-height: 25px;
        margin: 2px;
        padding: 2px;
        text-align: justify;
        width: 70%;
    }

    @media screen and (max-width: ${width.tablet}) {
        font-size: 16px;
        line-height: 25px;
        margin: 2px;
        padding: 2px;
        text-align: justify;
        width: 70%;
    }

    
`;



export const Content = styled.p`
    width: 95%;

    @media screen and (min-width: 2048px) {
        font-size: 35px;
        line-height: 40px;
        text-align: center;
    }
`;

export const AboutUsCardUl = styled.ul`
    @media screen and (min-width: 2048px) {
        font-size: 35px;
        line-height: 40px;
        
    }
`;

export const List = styled.li`
    list-style-type: none;

    &:before {
        content: "•";
        color: #001830;
    }

    
`;

export const AboutUsCardImg = styled.img`
    width: 150px;
    height: 140px;

    @media screen and (max-width: ${width.mobile}) {
        width: 98px;
        height: 98px;
    }

    @media screen and (max-width: ${width.tablet}) {
        width: 100px;
        height: 100px;
    }
`;
    
