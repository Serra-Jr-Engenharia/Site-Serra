import styled  from "styled-components";

interface Props {
    activeStyle?: boolean
}


export const HeaderUl = styled.ul`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    /* background-color: red; */

    @media screen and (min-width: 3840px){
        width: 40%;
        height: 50%;

    }

`;

export const HeaderText = styled.p`
    color: #fff;
    font-size: 1.4rem;

    @media screen and (min-width: 3840px){
        font-size: 2.5rem;
    }

    @media screen and (min-width: 2560px){
    
        
    }
`;

export const SubMenuContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    overflow: visible;
    cursor: pointer;

    
`;

export const SubMenuImg = styled.img<Props>`
    margin-top: 10px;
    margin-left: 2px;

    ${({activeStyle}) => activeStyle ?
        `transform: rotate(-180deg);
        transition: 0.5s;`
        :
        `transform: rotate(0deg);
        transition: 0.5s;`
    }

    @media screen and (min-width: 3840px){
        width: 1vw;
    }

    @media screen and (min-width: 2560px){
    
        
    }
`;

export const SubMenuContainerFather = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const SubMenuContainerSon = styled.div<Props>`
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #999999;
    opacity: 0.9;
    top: 17vh;
    border-radius: 0px 0px 20px 20px;
    
    ${({activeStyle}) => activeStyle ?
        `opacity: 1;
        visibility: visible;
        transition: opacity 0.5s;`
        :
        `opacity: 0;
        visibility: hidden;
        transition: opacity 0.5s;`
    }
`;

export const SubMenuLine = styled.div`
    width: 95%;
    height: 0.4px;
    background-color: #fff;
`;

export const LinkStyle = styled.div`
    padding: 10px  20px;
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

    @media screen and (min-width: 3840px) {
        width: 100%;
        height: 100%;
        font-size: 2.5rem;
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

    @media screen and (min-width: 3840px){
        margin-top: 2%;
    }

    @media screen and (min-width: 2560px){
        margin-top: 0.5%;
        
    }

    @media screen and (min-width: 2048px){
        margin-top: 2%;
        
    }

    @media screen and (min-width: 1920px){
        margin-top: 2.7%;
        
    }

    @media screen and (min-width: 1280px){
        margin-top: 1.5%;
        
    }

    @media screen and (min-width: 1024px){
        margin-top: 1.7%;
        
    }
`;


export const HeaderStyle = styled.div`
    width: 100%;
    height: 17vh;
    background-color: #001830;
    display: flex;

    @media screen and (min-width: 3840px){
        height: 13vh;
        
    }

    @media screen and (min-width: 2560px){
        height: 10vh;
        
    }
`;


 
