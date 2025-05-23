import styled from "styled-components";
import BackgroundIMG from "../../../../Assets/Home/background-image.png";


export const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  animation: fade-in-bottom 0.6s ease-in 0.5s both;
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
  background-repeat: no-repeat; 
  background-size: cover;
  background-position: top;
  width: 100%;
`;