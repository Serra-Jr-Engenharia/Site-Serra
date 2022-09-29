import styled from "styled-components";

export const BottomCardStyle = styled.div`
    margin-top: 2.5rem;
    padding-bottom: 2.5rem;
    background-color: #E6E6E5;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    .card-body{
        border-radius: 1rem;
        background-color: #EDEDED;
        height: 100%;
        width: 60vw;
        border-bottom: 5px solid #cccccc;
        background-color: #fff;
        margin-top: 5%;
        margin-bottom: 5%;
    }

    .card-body .card-content{
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
    }

    .card-title{
        width: 100%;
        height: 6rem;
        min-height: 30px;
        background-color: #FD6300;
        display: flex;
        justify-content: center;
        align-items: center;
        color: white;
        font-size: 1.6rem;
        font-weight: 600;
        margin-bottom: 20px;
    }

    .card-link{
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        padding-top: 1.2rem;
        padding-bottom: 1.2rem;
        text-decoration: none;
        
    }

    .card-link button{
        background-color: #FD6300;
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
    }

    .card-link button:hover{
        background-color: #f55e00;
    }

    .card-content{
        display: flex;
        align-items: center;
        justify-content: center;
    }
`;

