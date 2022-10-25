import styled from 'styled-components'

export const FooterStyle = styled.footer`
    width: 100%;
    background-color: #001830;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding-bottom: 1%;
`;

export const Row = styled.div`
    display: flex;
    justify-content: space-between;
    width: 90%;
    margin-top: 3%;
`;

export const LinksDiv = styled.div`
    margin-left: 2rem;

    @media screen and (min-width: 390){
        flex-direction: column;
    }
`;

export const LinksSpan = styled.span`
    color: white;
    font-weight: 500;
`;

export const LinksP = styled.p`
    color: rgb(180, 180, 180);
`;

export const LinksContainer = styled.div`
    display: flex;
    justify-content: center;

    @media screen and (max-width: 390px) {
        flex-direction: column;
    }

    @media screen and (max-width: 500px) {
        flex-direction: column;
    }


`;

export const SocialMediaIMG = styled.img`
    width: 1.4rem;
    margin-right: 0.8rem;
    
    @media screen and (max-width: 390px) {
        margin-top: 10%;
    }
`;

export const SocialMediaA = styled.a`
    text-decoration: none;
`;

export const SocialMediaContainer = styled.div`
    width: 40%;
    padding: 2rem 2rem 2rem 0;

    @media screen and (max-width: 390px) {
        flex-wrap: wrap;
        width: 20%;
    }

`;

export const ContentContainer = styled.div`
    width: 90vw;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
`;
export const ContentDivision = styled.hr`
    width: 90%;
`;

export const FooterBottomRow = styled.div`
    color: rgb(180, 180, 180);
    width: 90%;
    display: flex;
    justify-content: space-between;
`;

export const PartnersSpan = styled.span`
    height: 5vh;
    display: flex;
    justify-content: center;
    align-items: center;

    font-weight: 600;
    font-size: 1.3rem;
    color: #535353;
`;

export const PartnersDiv = styled.div`
    width: 80vw;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-wrap: wrap;
`;

export const PartnersA = styled.a`
    height: 90%;

    &:hover{
        opacity: 0.8;
    }
`;

export const PartnersIMG = styled.img`
    height: 20vh;

    @media screen and (max-width: 1024px){
        height: 10vh;
        
    }
    
`;

export const Partners = styled.div`
    width: 100%;
    background-color: #D9D9D9;
    display: flex;
    align-items: center;
    flex-direction: column;
`;
