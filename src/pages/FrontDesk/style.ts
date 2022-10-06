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

export const Teste = styled.div`
background-color: red;
p{
  color: lime; 
  font-family: "Courier";
  font-size: 20px;
  margin: 10px 0 0 10px;
  white-space: nowrap;
  overflow: hidden;
  width: 30em;
  animation: type 4s steps(60, end); 
}

p:nth-child(2){
  animation: type2 4s steps(60, end);
}

p:nth-child(3){
  animation: type2 6s steps(60, end);
}

p:nth-child(4){
  animation: type2 8s steps(60, end);
}

p a{
  color: lime;
  text-decoration: none;
}

span{
  animation: blink 1s infinite;
}

@keyframes type{ 
  from { width: 0; } 
} 

@keyframes type2{
  0%{width: 0;}
  50%{width: 0;}
  100%{ width: 100; } 
} 

@keyframes blink{
  to{opacity: .0;}
}

::selection{
  background: black;
}
`;


export const SloganText = styled.div`
    p{
        /* margin: 10px 0 0 10px;
        width: 100%; */
        
        margin: 0;
        width: 0;

        font-size: 3.8rem;
        display: inline-block;
        font-weight: 500;
        overflow: hidden;
        white-space: nowrap; 
        border-right: .15em solid orange;
        overflow: hidden;
        white-space: nowrap;
        animation: typing 2s steps(30) forwards,
                blink-caret 1s steps(30)  normal;
    }
    
    p:nth-child(2){
        animation: typing2 2s steps(30, end);
        animation-delay: 2s;
    }

    p:nth-child(3){
    animation: typing2 2s steps(30, end);
    animation-delay: 3s;
    }

    p:nth-child(4){
    animation: typing2 2s steps(30, end);
    animation-delay: 4.7s;
    }

    p a{
    color: lime;
    text-decoration: none;
    }

    span{
    animation: blink 1s infinite;
    }

    @keyframes type{ 
    from { width: 0; } 
    } 

    @keyframes typing {
        from { width: 0 }
        to { width: 100% }
    }

    @keyframes typing2 {
        0%{width: 0;}
        50%{width: 0;}
        100%{ width: 100; } 
    }



    @keyframes blink{
    to{opacity: .0;}
    }

    ::selection{
    background: black;
    }



    @keyframes blink-caret {
        from { border-color: orange} 
        to { border-color: transparent }
    }

`;

export const SloganText2 = styled.p`
    margin: 0;
    font-size: 3.8rem;
    font-weight: 500;
    overflow: hidden;
    white-space: nowrap; 
    width: 0;

    overflow: hidden;
    white-space: nowrap;
    animation: typing 2s steps(30) forwards,
                blink-caret 1s steps(30, end) infinite normal;
    animation-delay: 2s;
    @keyframes typing {
        from { width: 0 }
        to { width: 100% }
    }
    @keyframes blink-caret {
        from { border-color: orange} 
        to { border-color: transparent }
    }
`;

export const SloganText3 = styled.p`
    margin: 0;
    font-size: 3.8rem;
    font-weight: 500;
    overflow: hidden;
    white-space: nowrap; 
    width: 0;

    overflow: hidden;
    white-space: nowrap;
    animation: typing 2s steps(30, end) forwards;
    animation-delay: 3s;
    @keyframes typing {
    from { width: 0 }
    to { width: 100% }
  }
`;

export const SloganText4 = styled.p`
    margin: 0;
    font-size: 3.8rem;
    font-weight: 500;
    overflow: hidden;
    white-space: nowrap; 
    width: 0;

    overflow: hidden;
    white-space: nowrap;
    animation: typing 2s steps(30, end) forwards,
                blink-caret 1s steps(30, end) infinite normal;
    animation-delay: 4.7s;
    @keyframes typing {
    from { width: 0 }
    to { width: 100% }
    }

    @keyframes blink-caret {
    from { border-color: orange} 
    to { border-color: transparent }
    }
`;


export const FrontDeskContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

export const CardContainer = styled.div`
    width: 70vw;
    
    animation: fade-in-bottom 0.6s ease-in 1s both;
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



