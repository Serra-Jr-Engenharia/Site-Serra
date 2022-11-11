import styled from "styled-components";
import { width } from "../../Services/config";

interface Props{
    titleColor?: string
    buttonColor?: string
}

export const CardBody = styled.div`
    border-bottom-right-radius: 1rem;
    border-bottom-left-radius: 1rem;
    background-color: #EDEDED;
    height: 100%;
    width: 100%;
    -webkit-box-shadow: 7px 7px 16px -3px #000000; 
    box-shadow: 7px 7px 16px -3px #000000;

    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
`;

export const Title = styled.p<Props>`
    margin: 0;
    width: 100%;
    height: 4rem;
    min-height: 30px;
    background-color:${({titleColor}) => titleColor ?? '#FD6300'};
    border-top-right-radius: 1rem;
    border-top-left-radius: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-size: 1.6rem;
    font-weight: 600;
    text-align: center;

    @media screen and (min-width: ${width.largeDesktop}) {
        font-size: 60px;
        height: 8rem;
    }
`;

export const ButtonContainer = styled.a`
    width: 60%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;

    @media screen and (min-width: 1024px){
        width: 40%;
    }
`;

export const Button = styled.button<Props>`
    background-color: ${({buttonColor}) => buttonColor ?? '#FD6300'};
    border: none;
    width: 100%;
    padding: 0.6rem;
    font-size: 1.5rem;
    font-weight: 500;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 1rem;
    cursor: pointer;
    margin-bottom: 30px;

    &:hover{
        opacity: 0.8;
        box-shadow: 0 0 8px 2px rgba(0, 0, 0, 0.2);
    }

    @media screen and (min-width: ${width.largeDesktop}) {
        font-size: 60px;
        width: 60%;
    }
`;

export const BodyContents = styled.div`
    background-color: #EDEDED;
    height: 100%;
    width: 100%;
    
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-wrap: wrap;

`;

export const CardStyle = styled.div`
    width: 100%;
    height: 100%;
    margin-top: 2.5rem;
    margin-bottom: 2.5rem;
`;