import React from "react";

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
    PartnersA,
    PartnersIMG,
    SocialMediaIMG,
    SocialMediaA,
    LinksDiv,
    LinksSpan,
    LinksP,
    ContentDivision
} from './style';

import facebookIcon from '../../assets/facebook.svg'
import instagramIcon from '../../assets/instagram.svg'
import linkedinIcon from '../../assets/linkedin.svg'


import voittoIcon from '../../assets/apoiadores/voitto.svg'
import iprjIcon from '../../assets/apoiadores/iprj.svg'
import inovafriIcon from '../../assets/apoiadores/inovafri.svg'
import wiseupIcon from '../../assets/apoiadores/wiseup.svg'
import ligajrIcon from '../../assets/apoiadores/ligajr.svg'


const Footer: React.FC = () =>{

    return(
        <>
            <FooterStyle>
                <Partners>
                    <PartnersSpan>Parceiros</PartnersSpan>
                    <PartnersDiv>
                        <PartnersA target="_blank" rel="noopener noreferrer" href="https://www.voitto.com.br"><PartnersIMG src={voittoIcon} alt="Voitto" /></PartnersA>
                        <PartnersA target="_blank" rel="noopener noreferrer" href="http://www.iprj.uerj.br/"><PartnersIMG src={iprjIcon} alt="IPRJ" /></PartnersA>
                        <PartnersA target="_blank" rel="noopener noreferrer" href="https://inovafri.com.br/"><PartnersIMG src={inovafriIcon} alt="InovaFri" /></PartnersA>
                        <PartnersA target="_blank" rel="noopener noreferrer" href="https://wiseup.com/"><PartnersIMG src={wiseupIcon} alt="WiseUp" /></PartnersA>
                        <PartnersA target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/ligajuniornf/"><PartnersIMG src={ligajrIcon} alt="Instagram" /></PartnersA>
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
        </>
    )
}

export default Footer