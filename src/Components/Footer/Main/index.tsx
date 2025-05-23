import React from "react";
import FooterSlider from "../Components/FooterSlider";

import {
    FooterStyle,
    Row,
    FooterBottomRow,
    ContentContainer,
    SocialMediaContainer,
    LinksContainer,
    Partners,
    PartnersSpan,
    PartnersDiv,
    SocialMediaIMG,
    SocialMediaA,
    LinksDiv,
    LinksSpan,
    LinksP,
    ContentDivision,
    Copywrite,
} from './style';

import facebookIcon from '../../../Assets/Global/facebook.svg'
import instagramIcon from '../../../Assets/Global/instagram.svg'
import linkedinIcon from '../../../Assets/Global/linkedin.svg'


const Footer: React.FC = () =>{

    return(
        <FooterStyle>
            <Partners>
                <PartnersSpan>Parceiros</PartnersSpan>
                <PartnersDiv>
                    <FooterSlider />
                </PartnersDiv>
            </Partners>


            <ContentContainer>
                <Row>
                    <SocialMediaContainer>
                        <SocialMediaA href="https://pt-br.facebook.com/pg/serrajreng/posts/" target="_blank"> <SocialMediaIMG src={facebookIcon}  alt="Facebook Serra.Jr" /></SocialMediaA>
                        <SocialMediaA href="https://www.instagram.com/serrajreng/" target="_blank"> <SocialMediaIMG src={instagramIcon} alt="Instagram Serra.Jr" /></SocialMediaA>
                        <SocialMediaA href="https://www.linkedin.com/company/serrajreng/?originalSubdomain=br" target="_blank"> <SocialMediaIMG src={linkedinIcon} alt="Linkdin Serra.Jr" /> </SocialMediaA>
                    </SocialMediaContainer> 
                    
                    <LinksContainer>
                        <LinksDiv>
                            <LinksSpan>Institucional</LinksSpan>
                            <LinksP>Serra Jr Engenharia</LinksP>
                        </LinksDiv>
                        <LinksDiv>
                            <LinksSpan>Atendimento</LinksSpan>
                            <LinksP>Segunda a sexta</LinksP>
                            <LinksP>9h às 19h</LinksP>
                        </LinksDiv>
                        <LinksDiv>
                            <LinksSpan>Contato</LinksSpan>
                            <LinksP>serrajr@iprj.uerj.br </LinksP>
                        </LinksDiv>
                    </LinksContainer>
                </Row>
                <ContentDivision />
                <FooterBottomRow>
                    <Copywrite>© Serra Jr. Engenharia 2022</Copywrite>
                    <Copywrite>Todos os direitos reservados</Copywrite>
                </FooterBottomRow>
            </ContentContainer>
        </FooterStyle>
    )
}

export default Footer