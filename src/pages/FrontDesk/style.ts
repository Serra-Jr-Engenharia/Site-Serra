import styled, {keyframes} from "styled-components";
import BackgroundIMG from '../../assets/FrontDeskAssets/background-image.svg'

export const Presentation = styled.div`
    background-color: #DBDBDB;
    display: flex;
    justify-content: space-around;
`;

export const PresentationImg = styled.img`
    width: 40%;
`;

export const Slogan = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 35%;
`;

export const FrontDeskContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

export const CardContainer = styled.div`
    width: 70vw;
    
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

export const FrontDeskStyle = styled.div`
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

