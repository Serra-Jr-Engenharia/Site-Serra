import styled from "styled-components";
import BackgroundIMG from '../../../assets/FrontDeskAssets/background-image.svg'

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
    width: 40%;
`;

export const SloganText = styled.p`
    margin: 0;
    font-size: 3.8rem;
    font-weight: 500;
`;

export const FrontDeskContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

export const CardContainer = styled.div`
    width: 70vw;
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