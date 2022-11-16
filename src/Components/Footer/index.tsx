import React from "react";
import FooterSlider from "../FooterSlider";

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
} from './style';

import facebookIcon from '../../Assets/Global/facebook.svg'
import instagramIcon from '../../Assets/Global/instagram.svg'
import linkedinIcon from '../../Assets/Global/linkedin.svg'


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
                        <SocialMediaA href="https://www.linkedin.com/company/serrajreng/?originalSubdomain=br" target="_blank"> <SocialMediaIMG src={linkedinIcon} alt="" /> </SocialMediaA>
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
                    <span>© Serra Jr. Engenharia 2022</span>
                    <span>Todos os direitos reservados</span>
                </FooterBottomRow>
            </ContentContainer>
        </FooterStyle>
    )
}

export default Footer