import imageAboutUs from '../../assets/AboutUsAssets/presentation-image.png'
import missaoIcon from '../../assets/AboutUsAssets/missao_icon.png'
import valoresIcon from '../../assets/AboutUsAssets/valores_icon.png'
import visaoIcon from '../../assets/AboutUsAssets/visao_icon.png'
import AboutUsCard from './AboutUsCard/AboutUsCard'

import { AboutUsStyle } from './AboutUsStyle'


export default function AboutUs(){
    return(
        <AboutUsStyle>
            <div className='presentation-Main'>
                <div className='presentation-AboutUs-p'>
                    <p>Sobre nós</p>
                </div>

                <div className='presentation-aboutus-img'>
                    <img src={imageAboutUs} alt="imagem sobre nós" />
                </div>
            </div>
            

            <div className="AboutUsContent">
                <AboutUsCard image={missaoIcon} titleText= "Missão">
                    <p>Promover o desenvolvimento e evolução dos acadêmicos para que sejam capazes de impactar e agregar valores às pessoas e empresas de Nova Friburgo e região, através de projetos mecânicos e de computação. </p>
                </AboutUsCard>
                <div className="AboutUsContent-Division"></div>
                <AboutUsCard image={visaoIcon} titleText= "Visão">
                    <p>Idealizar nossa empresa como exemplo em inovação e qualidade de serviços. </p>
                </AboutUsCard>
                <div className="AboutUsContent-Division"></div>
                <AboutUsCard image={valoresIcon} titleText= "Valores">
                    <ul>
                        <li>Dedicação por excelência</li>
                        <li>Gestão segura</li>
                        <li>Impactar nossa era</li>
                        <li>Evolução constante</li>
                        <li>Responsabilidade com os clientes </li>
                    </ul>
                </AboutUsCard> 
            </div>


            <hr style={{background: '#FD6300', height: '3px', width: '100%', margin: '0', border: '0px'}}/>
        </AboutUsStyle>
    )
}