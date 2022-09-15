import React from "react";
import './Footer.css'

import facebookIcon from '../../assets/facebook.png'
import instagramIcon from '../../assets/instagram.png'
import linkedinIcon from '../../assets/linkedin.png'

const Footer = () =>{

    return(
        <>
            <footer id="Footer">
                <div className="content-container">
                    <div className="row">
                        <div className="socialmedia-container">
                            <img src={facebookIcon} alt="" />
                            <img src={instagramIcon} alt="" />
                            <img src={linkedinIcon} alt="" />
                        </div>  
                        <div className="links-container">
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
                        </div>
                    </div>
                    <hr />
                    <div className="row footer-bottom-row">
                        <div className="start">
                            <span>© Serra Jr. Engenharia 2022</span>
                        </div>
                        <div className="end">
                            <span>Todos os direitos reservados</span>
                        </div>
                    </div>
                </div>

            </footer>
        </>
    )
}

export default Footer