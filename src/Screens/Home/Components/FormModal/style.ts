import styled from "styled-components";

interface ContainerProps {
  opened: boolean;
}

interface OnClickProps {
  onClick: React.MouseEventHandler<HTMLElement>;
}

export const Container = styled.div<ContainerProps>`
  width: 100%;
  min-height: 2660.31px;
  background-color: rgba(0, 0, 0, 0.5);
  display: ${(props) => (props.opened ? "flex" : "none")};
  align-items: center;
  flex-direction: column;
  position: absolute;
  z-index: 998;
`;

export const Modal = styled.div`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  width: 1000px;
  height: 600px;
  background-color: #001830;
  color: white;
  /* justify-content: center; */
  align-items: center;
  z-index: 999;
  position: relative;
  border-radius: 20px;
`;

export const CloseIcon = styled.span<OnClickProps>`
  position: absolute;
  top: 10px;
  right: 20px;
  font-size: 24px;

  &:hover {
    cursor: pointer;
  }
`;

export const Title = styled.h1`
  font-size: 48px;
`;

export const Description = styled.p`
  margin: 0px 50px;
  margin-top: 50px;
  font-size: 24px;
`;
