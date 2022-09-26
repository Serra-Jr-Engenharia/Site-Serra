import imageAboutUs from '../../assets/AboutUsAssets/presentation-image.png'
import missaoIcon from '../../assets/AboutUsAssets/missao_icon.png'
import valoresIcon from '../../assets/AboutUsAssets/valores_icon.png'
import visaoIcon from '../../assets/AboutUsAssets/visao_icon.png'
import whoWeAreImg from '../../assets/AboutUsAssets/WhoWeAre.png'

import AboutUsCard from './AboutUsCard/AboutUsCard'

import { 
    PresentationMain,
    PresentationAboutUsP,
    PresentationAboutUsIMG,
    AboutUsContent,
    AboutUsContentDivision,
    WhoWeAre,
    WhoWeAreCard,
    WhoWeAreImg
} from './AboutUsStyle'
import Title from "../Title/Title";

export default function AboutUs(){
    return(
        <>
            <PresentationMain>
                <PresentationAboutUsP>
                    <p>Sobre nós</p>
                </PresentationAboutUsP>

                <PresentationAboutUsIMG>
                    <img src={imageAboutUs} alt="imagem sobre nós" />
                </PresentationAboutUsIMG>
            </PresentationMain>
            
            <AboutUsContent>
                <AboutUsCard image={missaoIcon} titleText= "Missão">
                    <p>Promover o desenvolvimento e evolução dos acadêmicos para que sejam capazes de impactar e agregar valores às pessoas e empresas de Nova Friburgo e região, através de projetos mecânicos e de computação. </p>
                </AboutUsCard>

                <AboutUsContentDivision />
                
                <AboutUsCard image={visaoIcon} titleText= "Visão">
                    <p>Idealizar nossa empresa como exemplo em inovação e qualidade de serviços. </p>
                </AboutUsCard>
                
                <AboutUsContentDivision />
                
                <AboutUsCard image={valoresIcon} titleText= "Valores">
                    <ul>
                        <li>Dedicação por excelência</li>
                        <li>Gestão segura</li>
                        <li>Impactar nossa era</li> 
                        <li>Evolução constante</li>
                        <li>Responsabilidade com os clientes </li>
                    </ul>
                </AboutUsCard> 
            </AboutUsContent>

                <div>
                    <Title text="Quem Somos" />
                </div>
                
            <WhoWeAre>

                
                <WhoWeAreCard>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore doloribus, soluta maxime pariatur asperiores velit nemo deleniti accusamus, totam cumque a deserunt, corporis iure. Vitae officia ullam quaerat animi cumque. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro sequi vitae quisquam. Optio quidem, quo reprehenderit eius fugiat voluptatem laborum quis modi illo at dolore perspiciatis itaque culpa, impedit ex! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam consequatur praesentium deleniti, a accusantium deserunt voluptates laboriosam cumque officia suscipit quibusdam minima neque excepturi sunt optio voluptas repellat velit error.</p>
                </WhoWeAreCard>
                
                <WhoWeAreImg>
                    <img src={whoWeAreImg} alt="" />
                </WhoWeAreImg>
                
                
            </WhoWeAre>


            {/* <hr style={{background: '#FD6300', height: '3px', width: '100%', margin: '0', border: '0px'}}/> */}
        </>
    )
}