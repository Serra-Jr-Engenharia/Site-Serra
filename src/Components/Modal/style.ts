import styled from "styled-components";
import { width } from "../../Services/config";

export const ModalContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

export const ModalHeader = styled.div`
    position: sticky;
    top: 0;
    background-color: #fff;
    width: 100%;
`;

export const ModalTitle = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const ModalH2 = styled.h2`
    
`;

export const ModalAcess = styled.div`
    display: flex;
    /* flex-direction: column; */
    align-items: center;
    justify-content: center;
    width: 100%;
`;

export const ModalAnchor = styled.a`
    text-decoration: none;
    color: #FF7400;

    background-color: #fff;
    border: 2px solid #FF7400;
    align-self: center;
    justify-self: center;
    
    padding: 5px 10px;
    border-radius: 7px;

    &:hover{
        border: 2px solid #fff;
        background-color: #FF7400;
        transition: 0.3s;
        color: #fff;
        cursor: pointer;
    }
`;

export const ModalResume = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
`;

export const ModalImg = styled.img`
    width: 300px;

    @media screen and (max-width: ${width.largeMobile}){
        width: 200px;
    }
`;

export const ModalCrossButton = styled.button`
    background-color: #fff;
    border: 1px solid #FF7400;
    font-size: 1.5em;
    width: 40px;
    height: 40px;
    border-radius: 20px;
    color: #FF7400;

    &:hover{
        border: 1px solid #fff;
        background-color: red;
        transition: 0.3s;
        color: #fff;
        cursor: pointer;
    }
`;

export const ModalP = styled.p`

`;

export const ModalLine = styled.hr`
    background: linear-gradient(90deg, rgba(4,173,215,1) 0%, rgba(4,173,215,1) 41%, rgba(255,116,0,1) 69%);
    height: 2px;
    width: 100%;
    border: 0;
`;

export const ModalList = styled.ul`
    
`;

export const ModalListLine = styled.li`
    list-style: none;
`;

export const ModalButton = styled.button`
    color: #FF7400;

    background-color: #fff;
    border: 2px solid #FF7400;
    justify-self: center;
    align-self: center;
    font-size: 1.4em;
    padding: 5px 10px;
    border-radius: 7px;

    &:hover{
        border: 2px solid #fff;
        background-color: #FF7400;
        transition: 0.3s;
        color: #fff;
        cursor: pointer;
    }
`;