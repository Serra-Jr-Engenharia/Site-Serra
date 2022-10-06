import styled  from "styled-components";


export const HeaderUl = styled.ul`
    display: flex;
    align-items: center;
    justify-content: flex-end;
`;

export const HeaderLi = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.4rem;
    margin-left: 2rem;  
    text-decoration: none;
    list-style: none;

    a{
        text-decoration: none;
        color: white;
        list-style: none;
    }

    a:hover {
        color: lightgray;
    }
`;

export const HeaderIMG = styled.img`
    width: 12rem;
`;

export const HeaderUlContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: 100%;
    margin-right: 10%;
    margin-top: 0%;
`;


export const SerraLogo = styled.div`
    margin-left: 10%;
    margin-top: 1%;
`;


export const HeaderStyle = styled.div`
    width: 100%;
    height: 12vh;
    min-height: 110px;
    background-color: #001830;
    display: flex;
`;
 
