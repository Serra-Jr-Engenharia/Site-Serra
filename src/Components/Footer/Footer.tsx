import React from "react";
import {
    FooterStyle,
    Row,
    Parceiros,
    Start,
    End,
    FooterBottomRow,
    ContentContainer,
    SocialMediaContainer,
    LinksContainer
} from './FooterStyle';

import facebookIcon from '../../assets/facebook.png'
import instagramIcon from '../../assets/instagram.png'
import linkedinIcon from '../../assets/linkedin.png'


import voittoIcon from '../../assets/apoiadores/voitto.png'
import iprjIcon from '../../assets/apoiadores/iprj.png'
import inovafriIcon from '../../assets/apoiadores/inovafri.png'
import wiseupIcon from '../../assets/apoiadores/wiseup.png'
import ligajrIcon from '../../assets/apoiadores/ligajr.png'


const Footer = () =>{

    return(
        <>
            <FooterStyle>
                <Parceiros>
                    <span>Parceiros</span>
                    <div>
                        <img src={voittoIcon} alt="" />
                        <img src={iprjIcon} alt="" />
                        <img src={inovafriIcon} alt="" />
                        <img src={wiseupIcon} alt="" />
                        <img src={ligajrIcon} alt="" />
                    </div>
                </Parceiros>
                <ContentContainer>
                    <Row>
                        <SocialMediaContainer>
                            <a href="https://pt-br.facebook.com/pg/serrajreng/posts/" target="_blank"> <img src={facebookIcon}  alt="" /></a>
                            <a href="https://www.instagram.com/serrajreng/" target="_blank"> <img src={instagramIcon} alt="" /></a>
                            <a href="https://www.linkedin.com/company/serrajreng/?originalSubdomain=br" target="_blank"> <img src={linkedinIcon} alt="" /> </a>
                        </SocialMediaContainer> 
                        
                        <LinksContainer>
                            <div>
                                <span>Institucional</span>
                                <p>Serra Jr Engenharia</p>
                            </div>
                            <div>
                                <span>Atendimento</span>
                                <p>Segunda a sexta</p>
                                <p>9h às 19h</p>
                            </div>
                            <div>
                                <span>Contato</span>
                                <p>serrajr@iprj.uerj.br </p>
                            </div>
                        </LinksContainer>
                    </Row>
                    <hr />
                    <FooterBottomRow>
                        <Start>
                            <span>© Serra Jr. Engenharia 2022</span>
                        </Start>
                        <End>
                            <span>Todos os direitos reservados</span>
                        </End>
                    </FooterBottomRow>
                </ContentContainer>
            </FooterStyle>
        </>
    )
}

export default Footer