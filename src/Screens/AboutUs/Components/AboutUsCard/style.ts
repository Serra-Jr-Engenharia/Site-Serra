import styled from "styled-components";

import { width } from "../../../../Services/config";

export const Container = styled.div`
    
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px;

    font-style: normal;
    font-weight: 400;
    font-size: 23px;
    line-height: 32px;
    font-weight: 400;

    @media screen and (max-width: ${width.largeMobile}) {
        width: 80%;
        font-size: 16px;
        line-height: 25px;
        text-align: justify;
    }
    @media screen and (min-width: ${width.largeMobile}){
        width: 80%;
        font-size: 18px;
        line-height: 28px;
    }
    @media screen and (min-width: ${width.tablet}) {
        width: 30%;
        margin: 10px;
        border: 0;
    }
    @media screen and (min-width: ${width.desktop}) {
        font-size: 25px;
        line-height: 35px;
    }
    @media screen and (min-width: ${width.largeDesktop}) {
        font-size: 30px;
        line-height: 35px;
    }

    @media screen and (min-width: ${width.extraLargeDesktop}) {
        font-size: 40px;
        line-height: 45px;
    }
`;

export const Title = styled.p`
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
`;

export const ListContainer = styled.ul`
    width: 100%;
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

export const Image = styled.img`
    width: 120px;
    height: 100px;

    @media screen and (max-width: ${width.tablet}) {
        width: 100px;
        height: 100px;
    }
    @media screen and (min-width: ${width.tablet}) {
        width: 100px;
        height: 100px;
    }
    @media screen and (min-width: ${width.largeDesktop}) {
        width: 150px;
        height: 150px;
    }

    @media screen and (min-width: ${width.extraLargeDesktop}) {
        width: 200px;
        height: 200px;
    }
`;
    
