import styled from 'styled-components'

export const PresentationMain = styled.div`
    background-color: #FF7400;
    display: flex;
    justify-content: space-around;
    border-radius: 0px 0px 0px 100px;
    height: 50vh;
`;

export const PresentationAboutUsP = styled.div`
    margin: 0px;
    font-family: 'Maven Pro';
    font-style: normal;
    font-weight: 500;
    font-size: 76px;
    text-align: center;
    color: #FFFFFF;
    display: flex;
    align-items: center;
`;

export const PresentationAboutUsIMG = styled.div`
    img{
        width: 100%;
        height: 100%;
    }
`;

export const AboutUsContent = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    width: 100%;
    margin-top: 5%;
    margin-bottom: 5%;

`;

export const AboutUsContentDivision = styled.div`
    border: 1px solid #001830;
    height: 60vh;
`;


export const WhoWeAre = styled.div`
    display: flex;
    text-align: center;
    justify-content: center;
    background-color: #E6E6E5;
    width: 100vw;
    margin-top: 5vh;
`;

export const WhoWeAreCard = styled.div`
    width: 45%;
    display: flex;
    align-items: center;
    justify-content: center;

    p {
        color: black;
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        text-align: justify;
        width: 90%;
    }

`;

export const WhoWeAreImg = styled.div`
    width: 45%;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
        width: 100%;
        height: 100%;
    }
`;
