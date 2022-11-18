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

    @media screen and (min-width: ${width.extraLargeDesktop}) {
        width: 30%;
    }
    
`;

export const AboutUsTitle = styled.p`
    padding-bottom: 2%;
    border-image: linear-gradient(90deg, rgba(4,173,215,1) 0%, rgba(4,173,215,1) 41%, rgba(255,116,0,1) 69%);
    border-bottom: 5px solid;
    border-image-slice: 1;
    font-weight: 500;

    @media screen and (max-width: ${width.largeMobile}) {
        font-size: 1.4rem;
        padding-bottom: 3%;
    }
    
    @media screen and (min-width: ${width.largeDesktop}) {
        font-size: 3rem;
        padding-bottom: 3%;
        border-image-width: 0px 0px 10px 0px;
    }

    @media screen and (min-width: ${width.extraLargeDesktop}) {
        font-size: 4.5rem;
        padding-bottom: 3%;
        border-image-width: 0px 0px 15px 0px;
    }
`;



export const Content = styled.p`
    width: 95%;
    text-align: justify;

    @media screen and (min-width: 2048px) {
        font-size: 35px;
        line-height: 40px;
        text-align: justify;
    }

    @media screen and (min-width: ${width.extraLargeDesktop}) {
        font-size: 3.2rem;
        line-height: 70px;
    }
`;

export const AboutUsCardUl = styled.ul`

    @media screen and (min-width: 2048px) {
        font-size: 35px;
        line-height: 40px;
        
    }

    @media screen and (min-width: ${width.extraLargeDesktop}) {
        font-size: 3.2rem;
        line-height: 70px;
    }
`;

export const List = styled.li`
    list-style-type: none;

    &:before {
        content: "•";
        color: #001830;
        padding-right: 10px;
        margin-right: 2%;
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

    @media screen and (min-width: ${width.largeDesktop}) {
        width: 200px;
        height: 200px;
    }

    @media screen and (min-width: ${width.extraLargeDesktop}) {
        width: 300px;
        height: 300px;
    }
`;
    
