import { Device } from "./../../Config/Device";
import styled from "styled-components";
import { width } from "../../Services/config";

interface Props {
  titleColor?: string;
  buttonColor?: string;
}

export const CardBody = styled.div`
  border-bottom-right-radius: 1rem;
  border-bottom-left-radius: 1rem;
  background-color: #ededed;
  height: "calc(100% - 4rem)";
  width: 100%;
  -webkit-box-shadow: 7px 7px 16px -3px #000000;
  box-shadow: 7px 7px 16px -3px #000000;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  padding-bottom: ${Device.FontSize.small}px;
`;

export const Title = styled.p<Props>`
  margin: 0;
  width: 100%;
  height: 4rem;
  min-height: 30px;
  background-color: ${({ titleColor }) => titleColor ?? "#FD6300"};
  border-top-right-radius: 1rem;
  border-top-left-radius: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 1.6rem;
  font-weight: 600;
  text-align: center;

  /* @media screen and (min-width: ${width.largeDesktop}) {
    font-size: 45px;
    height: 8rem;
  } */
`;

export const ButtonContainer = styled.div`
  width: 60%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;

  @media screen and (min-width: ${width.notebook}) {
    width: 40%;
  }
`;

export const Button = styled.button<Props>`
  background-color: ${({ buttonColor }) => buttonColor ?? "#FD6300"};
  border: none;
  width: 50%;
  padding: 1rem;
  font-size: 1.5rem;
  font-weight: 500;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 1rem;
  cursor: pointer;
  /* margin-bottom: 30px; */

  /* &:hover {
    opacity: 0.8;
    box-shadow: 0 0 8px 2px rgba(0, 0, 0, 0.2);
  }

  @media screen and (max-width: ${width.tablet}) {
    width: 50%;
  }

  @media screen and (min-width: ${width.largeDesktop}) {
    font-size: 40px;
    width: 20%;
  }

  @media screen and (max-width: ${width.largeMobile}) {
    width: 60%;
    font-size: 25px;
  } */
`;

export const BodyContents = styled.div`
  background-color: #ededed;
  height: 100%;
  min-height: ${Device.Screen.height * 0.3}px;
  width: 100%;
  
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  padding-top: ${Device.FontSize.small}px;
  padding-bottom: ${Device.FontSize.small}px;
`;

export const CardStyle = styled.div`
  /* width: 100%; */
  height: 100%;

  margin: 0px ${Device.FontSize.medium}px ${Device.FontSize.medium}px 0px;

  /* margin-top: 2.5rem;
    margin-bottom: 2.5rem; */
  /* margin-vertical: 2.5rem; */
  /* margin-right: 1.1rem; */
`;
