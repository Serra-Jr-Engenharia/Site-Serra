import imageAboutUs from '../../../assets/AboutUsAssets/presentation-image.svg'
import missionIcon from '../../../assets/AboutUsAssets/missao-icon.svg'
import valuesIcon from '../../../assets/AboutUsAssets/valores-icon.svg'
import visionIcon from '../../../assets/AboutUsAssets/visao-icon.svg'
import whoWeAreImg from '../../../assets/AboutUsAssets/historia.svg'
import BottomCard from '../../BottomCard'

import AboutUsCard from './AboutUsCard'

import { 
    PresentationMain,
    PresentationAboutUsP,
    AboutUsContent,
    AboutUsContentDivision,
} from './style'

const AboutUs: React.FC = () => {

    const mission = <AboutUsCard 
        hasList={false} 
        content='Promover o desenvolvimento e evolução dos acadêmicos para que sejam capazes de impactar e agregar valores às pessoas e empresas de Nova Friburgo e região, através de projetos mecânicos e de computação.'
        image={missionIcon} 
        titleText= "Missão" 
    />

    const vision =  <AboutUsCard 
        hasList={false} 
        content='Idealizar nossa empresa como exemplo em inovação e qualidade de serviços.'
        image={visionIcon} 
        titleText= "Missão" 
    />

    const values = <AboutUsCard 
        hasList={true} 
        list={['Dedicação por excelência', 'Gestão segura', 'Impactar nossa era', 'Evolução constante', 'Responsabilidade com os clientes']} image={valuesIcon} 
        titleText= "Valores"  
    />

    const history = <BottomCard 
        title='Quem Somos' 
        color='#04ADD7' 
        hasButton={false} 
        text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore doloribus, soluta maxime pariatur asperiores velit nemo deleniti accusamus, totam cumque a deserunt, corporis iure. Vitae officia ullam quaerat animi cumque. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro sequi vitae quisquam. Optio quidem, quo reprehenderit eius fugiat voluptatem laborum quis modi illo at dolore perspiciatis itaque culpa, impedit ex! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam consequatur praesentium deleniti, a accusantium deserunt voluptates laboriosam cumque officia suscipit quibusdam minima neque excepturi sunt optio voluptas repellat velit error."
        image={whoWeAreImg}
    />

    return(
        <>
            <PresentationMain>
                <PresentationAboutUsP>Sobre Nós</PresentationAboutUsP>
                <img src={imageAboutUs} alt='imagem sobre nós' />
            </PresentationMain>
            
            <AboutUsContent>
                {mission}
                <AboutUsContentDivision />
                {vision}
                <AboutUsContentDivision />
                {values}
            </AboutUsContent>

            {history}
        </>
    )
}

export default AboutUs