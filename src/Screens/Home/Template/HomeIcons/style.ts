import styled from "styled-components";
import { width } from "../../../../Services/config";
import { Device } from "../../../../Config/Device";

export const Icon = styled.img`
  width: ${Device.Screen.height * 0.2}px;
  height: ${Device.Screen.height * 0.2}px;

  @media screen and (max-width: ${width.notebook}) {
    height: 10vh;
  }
  @media screen and (max-width: ${width.largeDesktop}) {
    height: 12vh;
  }
`;

export const IconDescription = styled.p`
  font-family: "Maven Pro";
  font-style: normal;
  font-weight: 500;
  font-size: ${Device.FontSize.xLarge}px;
  /* line-height: 30px; */
  /* min-height: 90px; */
  margin: 0;
  padding: 0;
  /* margin-bottom: 0; */
  /* width: 200px; */
  width: 70%;
  text-align: center;
  color: #000000;
  font-size: ${Device.FontSize.standart}px;
  margin-top: ${Device.FontSize.standart}px;

  /* @media screen and (min-width: ${width.largeDesktop}) {
    line-height: 50px;
    font-size: 35px;
    width: 400px;
  }

  @media screen and (min-width: ${width.extraLargeDesktop}) {
    line-height: 60px;
    font-size: 55px;
    width: 500px;
  } */
`;

export const HomeIconsStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* margin: 10px;
  margin-top: 50px;
  margin-bottom: 50px; */

  @media screen and (max-width: ${width.tablet}) {
    /* margin-top: 30px;
    margin-bottom: 0; */
  }
`;
