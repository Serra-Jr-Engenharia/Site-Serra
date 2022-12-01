import styled from "styled-components";
import { width } from "../../../../Services/config";
import { Device } from "../../../../Config/Device";

export const Icon = styled.img`
  @media screen and (max-width: ${width.notebook}) {
    height: 8vh;
  }
  @media screen and (min-width: ${width.notebook}) {
    height: 10vh;
  }
  @media screen and (max-width: ${width.largeDesktop}) {
    height: 12vh;
  }
`;

export const IconDescription = styled.p`
  font-weight: 500;
  font-size: 20px;
  min-height: 90px;
  margin: 0;
  padding: 0;
  margin-bottom: 0;
  text-align: center;
  color: #000000;  
`;

export const HomeIconsStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  width: 250px;
 
`;
