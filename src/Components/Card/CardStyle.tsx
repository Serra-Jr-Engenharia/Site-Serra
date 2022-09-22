import styled from "styled-components";

export const CardStyle = styled.div`
    width: 100%;
    height: 100%;
    margin-top: 2.5rem;
    margin-bottom: 2.5rem;

    .card-body{
        border-bottom-right-radius: 1rem;
        border-bottom-left-radius: 1rem;
        background-color: #EDEDED;
        height: 100%;
        width: 100%;
        border-bottom: 5px solid #cccccc;
    }

    .card-body .card-content{
        display: flex;
        justify-content: space-around;
    }

    .card-title{
        width: 100%;
        height: 4rem;
        min-height: 30px;
        background-color: #FD6300;
        border-top-right-radius: 1rem;
        border-top-left-radius: 1rem;
        display: flex;
        justify-content: center;
        align-items: center;
        color: white;
        font-size: 1.6rem;
        font-weight: 600;
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