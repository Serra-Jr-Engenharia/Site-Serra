import React from "react";
import './FrontDesk.css'

import presentationImage from '../../assets/presentation-image.png'
import monitorIcon from '../../assets/FrontDeskAssets/Sites.png'
import sistemasIcon from '../../assets/FrontDeskAssets/sistemas-web.png'
import gradientBar from '../../assets/FrontDeskAssets/barra.png'
import manutencaoIcon from '../../assets/FrontDeskAssets/manutencao.png'
import desenhoIcon from '../../assets/FrontDeskAssets/desenho-tecnico.png'
import roboIcon from '../../assets/FrontDeskAssets/braco-robo.png'
import impressoraIcon from '../../assets/FrontDeskAssets/impressora-3d.png'

import FrontDeskIcons from "./FrontDeskIcons/FrontDeskIcons";


const FrontDesk = () =>{
    return(<>
        <div className="FrontDesk">
            <div className="presentation">
                <h2>Engrenando ideias, inovando o mercado.</h2>
                <img src={presentationImage} alt="apresentação" />
            </div>

            <div className="whatwedoComp">
                <h3>O que fazemos</h3>
                <img className='gradientBar' src={gradientBar} alt="gradientBar" />
                    <div className="whatwedoIcons">
                        <FrontDeskIcons text="Desenvolvimento de WebSites" image={monitorIcon} alt="Desenvolvimento de WebSites"/>
                        <FrontDeskIcons text="Desenvolvimento de Sistemas Web" image={sistemasIcon} alt="Desenvolvimento de Sistemas Web"/>
                    </div>
                
                <div className="aboutUsContainer">
                    <div className="AboutProjects">
                        <p>Saiba mais sobre os projetos de Computação →</p>
                    </div>
                </div>
                <hr style={{background: '#FD6300', height: '3px', width: '100%', margin: '0'}}/>
            </div>

            <div className="whatwedoMec">
                    <div className="whatwedoIcons">
                        <FrontDeskIcons text="Projeto e Manutenção de Equipamentos" image={manutencaoIcon} alt="Projeto e Manutenção de Equipamentos"/>
                        <FrontDeskIcons text="Desenho Técnico e Industrial" image={desenhoIcon} alt="Desenho Técnico e Industrial"/>
                        <FrontDeskIcons text="Automação Industrial" image={roboIcon} alt="Automação Industrial"/>
                        <FrontDeskIcons text="Prototipagem" image={impressoraIcon} alt="Prototipagem"/>
                    </div>
                
                <div className="aboutUsContainer">
                    <div className="AboutProjects">
                        <p>Saiba mais sobre os projetos de Mecânica →</p>
                    </div>
                </div>
                <hr style={{background: '#FD6300', height: '3px', width: '100%', margin: '0'}}/>
            </div>

            
            

        </div>    
        
    </>)
}

export default FrontDesk