import styled from "styled-components";

export const Inform = styled.div`
    width: 80%;
    margin-top: 5%;

    span {
        font-family: 'Maven Pro';
        font-style: normal;
        font-weight: 300;
        font-size: 25px;
        line-height: 25px;

        color: #000000;

        margin-left: 10%;
    }

    img {
        width: 3em;
        height: 3em;
    }
`;

export const All = styled.div`
    display: flex;
    margin-top: 10%;
    justify-content: space-between;
    margin-left: 15%;
    margin-right: 15%;
    margin-bottom: 10%;
`;

export const Ag = styled.div`
   display: flex;
   margin-bottom: 10%;
   width: 30%;

`;

export const Em = styled.div`
    display: flex;
    margin-bottom: 10%;
    width: 30%;
`;

export const Local = styled.div`
    display: flex;
    margin-bottom: 10%;
    width: 30%;
`;

export const Tel = styled.div`
    display: flex;
    margin-bottom: 10%;
    width: 30%;
`;

export const Formul = styled.div`
    background-color: #D2D2D2;
    border-radius: 20px;
    width: 50%;
    height: 50rem;
`;

export const Inps = styled.div`
    margin-left: 10%;

    p{
        font-family: 'Maven Pro';
        font-style: normal;
        font-weight: 300;
        font-size: 28px;
        line-height: 10px;
    }

    input {
        border-radius: 10px;
        border: 1px;
        width: 90%;
        height: 2rem;
        background: #EEEEEE;
    }

    button {    
        margin-top: 10%;
        border: 0px;
        background: #FF7400;
        border-radius: 10px;
        width: 90%;
        height: 2.5rem;
        color: #fff;
        font-size: 20px;
    }

    .mensagem {
        height: 10rem;
    }
`;