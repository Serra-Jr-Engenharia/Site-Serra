import styled from "styled-components";

export const AboutUsCardStyle = styled.div`
    
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px;
    margin: 10px;
    width: 30%;
    min-height: 50vh;

    font-style: normal;
    font-weight: 400;
    font-size: 28px;
    line-height: 32px;
    

    p{
        width: 95%;
    }

    .AboutUsCardImg{
        width: 150px;
        height: 140px;
    }

    ul li{
        list-style-type: none;
    }

    ul li::before {
        content: "•";
        color: #001830;
    } 
    
`;