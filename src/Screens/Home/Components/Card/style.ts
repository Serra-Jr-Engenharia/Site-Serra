import { Device } from "../../../../Config/Device";
import styled from "styled-components";
import { width } from "../../../../Services/config";

interface Props {
  titleColor?: string;
  buttonColor?: string;
}

export const Container = styled.div`
  margin: 2% 1% 2% 1%;
  

  @media screen and (max-width: ${width.tablet}) {
    width: 90%;
  }
  @media screen and (min-width: ${width.tablet}) {
    width: 90%;
  }
  @media screen and (min-width: ${width.notebook}) {
    width: 60%;
  }
  @media screen and (min-width: ${width.desktop}) {
    width: 50%;
  }
  @media screen and (min-width: ${width.largeDesktop}) {
    width: calc((100% - 500px)/2);
  }

  @media screen and (min-width: ${width.extraLargeDesktop}) {
    width: calc((100% - 900px)/2);
  }
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

  @media screen and (min-width: ${width.largeDesktop}) {
    font-size: 45px;
    height: 8rem;
  }
`;

export const Content = styled.div`
  -webkit-box-shadow: 7px 7px 16px -3px #000000;
  box-shadow: 7px 7px 16px -3px #000000;
  border-bottom-right-radius: 1rem;
  border-bottom-left-radius: 1rem;
  background-color: #ededed;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

export const Icons = styled.div`
  background-color: #ededed;
  height: 100%;
  width: 100%;
  
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;

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
  margin-bottom: 30px;

  &:hover {
    opacity: 0.8;
    box-shadow: 0 0 8px 2px rgba(0, 0, 0, 0.2);
  }

  @media screen and (max-width: ${width.tablet}) {
    width: 60%;
    font-size: 25px;
  }
  @media screen and (min-width: ${width.tablet}) {
    width: 30%;
  }

  @media screen and (min-width: ${width.largeDesktop}) {
    font-size: 40px;
    width: 30%;
    margin-top: 30px;
  }
`;


