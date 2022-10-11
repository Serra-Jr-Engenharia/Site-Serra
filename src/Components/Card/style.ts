import styled from "styled-components";

interface Props{
    titleColor?: string
    buttonColor?: string
}

export const CardBody = styled.div`
    border-bottom-right-radius: 1rem;
    border-bottom-left-radius: 1rem;
    background-color: #EDEDED;
    height: 100%;
    width: 100%;
    border-bottom: 5px solid #cccccc;

    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
`;

export const Title = styled.div<Props>`
    width: 100%;
    height: 4rem;
    min-height: 30px;
    background-color:${({titleColor}) => titleColor ?? '#FD6300'};
    border-top-right-radius: 1rem;
    border-top-left-radius: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-size: 1.6rem;
    font-weight: 600;
`;

export const ButtonContainer = styled.a`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 1.2rem;
    padding-bottom: 1.2rem;
    text-decoration: none;
`;

export const Button = styled.button<Props>`
    background-color: ${({buttonColor}) => buttonColor ?? '#FD6300'};
    border: none;
    width: 50%;
    padding: 0.6rem;
    font-size: 1.5rem;
    font-weight: 500;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 1rem;
    cursor: pointer;

    &:hover{
        opacity: 0.8;
        box-shadow: 0 0 8px 2px rgba(0, 0, 0, 0.2);
    }
`;

export const BodyContents = styled.div`
    background-color: #EDEDED;
    height: 100%;
    width: 100%;
    
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-wrap: wrap;

`;

export const CardStyle = styled.div`
    width: 100%;
    height: 100%;
    margin-top: 2.5rem;
    margin-bottom: 2.5rem;
`;