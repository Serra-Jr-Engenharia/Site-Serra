import styled from "styled-components";

export const FrontDeskStyle = styled.div`
    .FrontDeskContent{
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .presentation {
        background-color: #DBDBDB;
        display: flex;
        justify-content: space-around;
    }

    .presentation .slogan p {
        margin: 0;
        font-size: 3.8rem;
        font-weight: 500;
    }

    .presentation .slogan{
        display: flex;
        justify-content: center;
        flex-direction: column;

        width: 40%;
    }

    .aboutUsContainer{
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .AboutProjects {
        border: 3px solid #FD6300;
        font-family: 'Maven Pro';
        font-style: normal;
        font-weight: 500;
        font-size: 30px;
        line-height: 47px;
        text-align: center;
        width: 500px;
        height: 110px;
        color: #FD6300;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0px;
        border-top: 0px;
    }

    .ourHistory {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 40px;
        background-color: #E6E6E5;
        margin-top: 40px;
    }

    .ourHistory img {
        width: 30%;
    }

    .ourHistory p {
        color: black;
        background-color: #E6E6E5;
        font-style: normal;
        font-weight: 500;
        font-size: 25px;
        text-align: justify;
        padding: 40px;
    }
    
    .Card-AboutUs {
        display: flex;
        justify-content: center;
        justify-content: space-around;
        margin-bottom: 5%;
    }

    .Card-AboutUs p {
        color: black;
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        text-align: justify;
        width: 40%;
        margin-top: 5%;
    }

    .Card-AboutUs img {
        width: 40%;
        height: 40%;
        border-radius: 20px;
        margin-top: 5%;
    }
`;

