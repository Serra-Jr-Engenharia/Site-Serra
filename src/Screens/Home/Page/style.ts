import styled, {keyframes} from "styled-components";
import BackgroundIMG from '../../../Assets/Home/background-image.svg';
import { width } from "../../../Services/config";

export const Presentation = styled.div`
    background-color: #DBDBDB;
    display: flex;
    flex-direction: row; 
    align-items: center;
    justify-content: space-around;
    flex-wrap: wrap;
    

    @media screen and (max-width: ${width.tablet}){
        flex-direction: column-reverse; 
        align-items: space-around;
    justify-content: center;
    }
`;

export const PresentationImg = styled.img`
    width: 45%;
    
    @media screen and (max-width: ${width.tablet}){
        width: 60%;
    }
`;

export const Slogan = styled.div`
    display: block;
    justify-content: center;
    flex-direction: column;
    width: 45%;

    @media screen and (max-width: ${width.tablet}){
        width: 80%;
        margin-top: 4%;
    }
`;

export const HomeContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

export const CardContainer = styled.div`
    width: 80vw;
    
    animation: fade-in-bottom 0.6s ease-in 2s both;
    @keyframes fade-in-bottom {
    0% {
    transform: translateY(50px);
    transform: translateY(50px);
    opacity: 0;
    }
    100% {
    transform: translateY(0);
    transform: translateY(0);
    opacity: 1;
    }
    }

`;

export const HomeStyle = styled.div`
    background-image: url(${BackgroundIMG});
`;

export const CardAboutUsP = styled.p`
    color: black;
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    text-align: justify;
    width: 40%;
    margin-top: 5%;
`;

export const CardAboutUsIMG = styled.img`
    width: 40%;
    height: 40%;
    border-radius: 20px;
    margin-top: 5%;
`;
    
export const CardAboutUs = styled.div`
    display: flex;
    justify-content: center;
    justify-content: space-around;
    margin-bottom: 5%;
`;

