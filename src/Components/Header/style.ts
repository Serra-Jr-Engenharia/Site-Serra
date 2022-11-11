import styled  from "styled-components";
import { width } from '../../Services/config'

export const HeaderImg = styled.img`
    width: 12rem;
    margin-left: 25%;

    @media screen and (max-width: ${width.mobile}){
        width: 6rem;
    }

    @media screen and (min-width: ${width.largeDesktop}){
        width: 20rem;
        margin-left: 50%;
    }

    @media screen and (min-width: ${width.extraLargeDesktop}){
        width: 30rem;
        margin-left: 60%;
    }
    
`;

export const HeaderStyle = styled.div`
    width: 100%;
    height: 17vh;
    background-color: #001830;
    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: ${width.notebook}){
        justify-content: space-between;
        align-items: center;
    }
    @media screen and (min-width: ${width.largeDesktop}){
        height: 10vh;
        
    }
    @media screen and (min-width: ${width.extraLargeDesktop}){
        height: 13vh;
    }
`;

export const MenuButtonContainer = styled.div`
    margin-right: 7%;
`;