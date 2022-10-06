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
`;

export const Content = styled.p`
    width: 95%;
`;

export const List = styled.li`
    list-style-type: none;

    &:before {
        content: "•";
        color: #001830;
    }
`;

export const AboutUsCardImg = styled.img`
    width: 150px;
    height: 140px;
`;
    
