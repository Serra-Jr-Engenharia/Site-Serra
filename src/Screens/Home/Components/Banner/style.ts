import styled from "styled-components";
import { Device } from "../../../../Config/Device";
import { width } from "../../../../Services/config";

export const Presentation = styled.div`
  background-color: #dbdbdb;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;

  @media screen and (max-width: ${width.tablet}) {
    flex-direction: column-reverse;
    align-items: center;
    justify-content: flex-end;
    min-height: ${Device.Screen.height * 0.75}px;
  }
`;

export const PresentationImg = styled.img`
  @media screen and (max-width: ${width.largeMobile}) {
    width: 60%;
    margin-top: 10%;
  }

  @media screen and (min-width: ${width.largeMobile}) {
    width: 40%;
    margin-top: 5%;
  }
  @media screen and (min-width: ${width.notebook}) {
    width: 25%;
    margin-top: 0;
  }
`;

export const Slogan = styled.div`
  display: block;
  justify-content: center;
  flex-direction: column;
  
  width: 45%;
  height: 45%;

  @media screen and (max-width: ${width.tablet}) {
    width: 80%;
    margin-top: 4%;
  }
`;