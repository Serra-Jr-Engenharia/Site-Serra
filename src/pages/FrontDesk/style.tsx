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
    width: 25%;
`;

export const Teste = styled.p`
    font-size: 1.2em;
    display: inline-block;
    border-right: 2px solid #000;
    padding-right:3px ;
    max-width: 0;
    white-space: nowrap;
    overflow: hidden;
    animation: pisca normal infinite .8s, escrever normal 2s  both;

@keyframes pisca {
    100%{
        border-right-color: transparent;
    }
}

@keyframes escrever {
    100%{
        max-width: 100%;
    }
}
`;

export const SloganText = styled.p`
    margin: 0;
    font-size: 3.8rem;
    font-weight: 500;
    overflow: hidden;
    white-space: nowrap; 
    max-width: 0;
    /* border-right: .15em solid orange; */
    overflow: hidden;
    white-space: nowrap;
    animation: pisca normal infinite .8s, escrever normal 2s  both;
    
    @keyframes pisca {
        100%{
            border-right-color: transparent;
        }
    }

    @keyframes escrever {
        100%{
            max-width: 100%;
        }
    }

    /* animation: typing 2s steps(30) forwards,
                blink-caret 1s steps(30, end) infinite normal;

    @keyframes typing {
    from { width: 0 }
    to { width: 100% }
    }

    @keyframes blink-caret {
    from { border-color: orange} 
    to { border-color: transparent }
    } */

`;



export const FrontDeskContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

export const CardContainer = styled.div`
    width: 70vw;
    
    animation: fade-in-bottom 0.8s ease-in 1s both;
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



