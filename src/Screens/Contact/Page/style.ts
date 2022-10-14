import styled from "styled-components";

export const InformationSpan = styled.span`
    font-family: 'Maven Pro';
    font-style: normal;
    font-weight: 300;
    font-size: 25px;
    line-height: 25px;
    color: #000000;
    margin-left: 10%;
`;

export const InformationImg = styled.img`
    width: 3em;
    height: 3em;
`;

export const Information = styled.div`
    width: 80%;
    margin-top: 5%;

`;

export const MapBox = styled.div`
    width: 80%;
    height: 50vh;
`;

export const All = styled.div`
    display: flex;
    margin-top: 7%;
    justify-content: space-between;
    margin-left: 15%;
    margin-right: 15%;
    margin-bottom: 10%;
`;

export const Schedule = styled.div`
   display: flex;
   margin-bottom: 8%;
   width: 35rem;

`;

export const EmailStyle = styled.div`
    display: flex;
    margin-bottom: 8%;
    width: 35rem;
`;

export const Local = styled.div`
    display: flex;
    margin-bottom: 8%;
    width: 35rem;
`;

export const Telephone = styled.div`
    display: flex;
    margin-bottom: 10%;
    width: 35rem;
`;

export const Form = styled.div`
    background-color: #D2D2D2;
    border-radius: 20px;
    width: 50%;
`;

export const Inputs = styled.div`
    margin-left: 10%;

`;

export const InputsP = styled.p`
    font-family: 'Maven Pro';
    font-style: normal;
    font-weight: 300;
    font-size: 28px;
    line-height: 10px;
`;

export const InputArea = styled.input`
    padding-left: 30px;
    border-radius: 10px;
    font-size: 1.8rem;
    border: 1px;
    width: calc(90% - 30px);
    height: 2.5rem;
    background: #EEEEEE;

    &:focus{
        outline: none;
    }

    &::placeholder{
        font-size: 20px;
        font-weight: 400;
    }
`;

export const Button = styled.button`
    margin-top: 20px;
    border: 0px;
    background: #FF7400;
    border-radius: 10px;
    width: 90%;
    height: 2.5rem;
    color: #fff;
    font-size: 20px;
    margin-bottom: 20px;
`;

export const InputAreaMensage = styled.input`
    padding-left: 30px;
    border-radius: 10px;
    font-size: 1.8rem;
    border: 1px;
    width: calc(90% - 30px);
    height: 10rem;
    background: #EEEEEE;
    margin-bottom: 10px;

    &:focus{
        outline: none;
    }

    &::placeholder{
        font-size: 20px;
        font-weight: 400;
    }

    

`;
