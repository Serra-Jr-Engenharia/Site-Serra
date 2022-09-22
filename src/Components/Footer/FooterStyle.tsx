import styled from 'styled-components'

export const FooterStyle = styled.footer`
width: 100%;
background-color: #001830;

bottom: 0;

display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
margin-top: 1rem;

padding-bottom: 1%;

`;

export const Row = styled.div`
    display: flex;
    justify-content: space-between;
    width: 90%;
    margin-top: 3%;
`;
export const LinksContainer = styled.div`
    display: flex;
    justify-content: center;
    

    div{
        margin-left: 2rem;
    }
        
    span{
        color: white;
        font-weight: 500;
    }

    p{
        color: rgb(180, 180, 180);
    }

`;

export const SocialMediaContainer = styled.div`
    width: 40%;
    padding: 2rem 2rem 2rem 0;

    img{
        width: 1.4rem;
        margin-right: 0.8rem;
        /* margin: 0.8rem; */
    }

    a{
        text-decoration: none;
    }
    
`;

export const ContentContainer = styled.div`
    width: 90vw;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;

    hr {
        width: 90%;
    }
`;

export const FooterBottomRow = styled.div`
    color: rgb(180, 180, 180);
    width: 90%;
    display: flex;
    justify-content: center;

    div{
        width: 50%;
    }
`;

export const End = styled.div`
    display: flex;
    justify-content: flex-end;
`;



export const Start = styled.div`
    display: flex;
    justify-content: start;
`;

export const Parceiros = styled.div`
    height: 25vh;
    width: 100%;
    background-color: #D9D9D9;
    display: flex;
    align-items: center;
    flex-direction: column;

    span {
        height: 5vh;
        display: flex;
        justify-content: center;
        align-items: center;
    
        font-weight: 600;
        font-size: 1.3rem;
        color: #535353;
    }

    div{
        height: 20vh;
        width: 80vw;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
    
        img{ 
            height: 90%;
        }
    }
`;
