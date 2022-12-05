import styled from "styled-components";
import { width } from "../../../../Services/config";


export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  width: 250px;
  
  @media screen and (min-width: ${width.extraLargeDesktop}) {
    width: 290px;
    height: 300px;
  }
 
`;

export const Icon = styled.img`
  @media screen and (max-width: ${width.notebook}) {
    height: 8vh;
  }
  @media screen and (min-width: ${width.notebook}) {
    height: 10vh;
  }
  @media screen and (min-width: ${width.largeDesktop}) {
    height: 7vh;
  }
`;

export const Description = styled.p`
  font-weight: 500;
  min-height: 90px;
  margin: 0;
  padding: 0;
  margin-bottom: 0;
  text-align: center;
  color: #000000; 
  
  @media screen and (max-width: ${width.notebook}) {
    font-size: 20px;
    min-height: 60px;
  }
  @media screen and (min-width: ${width.notebook}) {
    font-size: 20px;
  }
  @media screen and (min-width: ${width.largeDesktop}) {
    font-size: 25px;
  }
  @media screen and (min-width: ${width.extraLargeDesktop}) {
    font-size: 35px;
  }
`;
