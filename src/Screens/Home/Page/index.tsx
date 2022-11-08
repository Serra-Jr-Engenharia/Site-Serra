import React from 'react'

import Card from "../../../Components/Card"
import Title from "../../../Components/Title"
import BottomCard from '../../../Components/BottomCard'
import TypeWriterEffect from '../Template/TypeWriterEffect'

import presentationImage from '../../../Assets/Home/presentation-image.png'
import monitorIcon from '../../../Assets/Home/Sites.svg'
import systemsIcon from '../../../Assets/Home/sistemas-web.svg'
import repairIcon from '../../../Assets/Home/manutencao.svg'
import drawIcon from '../../../Assets/Home/desenho-tecnico.svg'
import botIcon from '../../../Assets/Home/braco-robo.svg'
import printerIcon from '../../../Assets/Home/impressora-3d.svg'
import ourHistory from '../../../Assets/Home/membros-2.svg'

import { 
    HomeStyle, 
    Presentation, 
    Slogan,  
    HomeContent,
    CardContainer,
    PresentationImg, 
} from './style'


const Home: React.FC = () =>{
    return(
        <HomeStyle>
            <Presentation>
                <Slogan>
                    <TypeWriterEffect />
                </Slogan>
                <PresentationImg src={presentationImage} alt="apresentação" />
            </Presentation>

            <Title text="O que fazemos" />
            <HomeContent>
                <CardContainer>
                    <Card 
                        title="Projetos de Computação" 
                        buttonTitle="Saiba Mais" 
                        buttonUrl="/Site-Serra/computacao"
                        images={[monitorIcon, systemsIcon]}
                        texts={["Desenvolvimento de WebSites", "Desenvolvimento de Sistemas Web"]} 
                    />

                    <Card 
                        title="Projetos de Mecânica" 
                        buttonTitle="Saiba Mais" 
                        buttonUrl="/Site-Serra/mecanica" 
                        color='#04ADD7'
                        images={[repairIcon, drawIcon, botIcon, printerIcon]}
                        texts={["Projeto e Manutenção de Equipamentos", "Desenho Técnico e Industrial", "Projetos de Automação", "Prototipagem"]}
                    />  
                </CardContainer>
            
                <BottomCard 
                    title="Nossa História" 
                    buttonTitle="Saiba Mais" 
                    buttonUrl="/Site-Serra/quemsomos"
                    color='#001830' 
                    hasButton={true}
                    text="A Serra Jr. Engenharia, criada em 08 de maio de 2002, é uma empresa formada exclusivamente por alunos do curso de graduação de Engenharia Mecânica e de Engenharia de Computação do Instituto Politécnico da Universidade do Estado do Rio de Janeiro – IPRJ/UERJ e tem como objetivo central o incentivo à inserção e desenvolvimento dos alunos na prática empresarial. Teve suas atividades paradas no ano de 2011 devido a tragédia climática que abalou Nova Friburgo. Em 2013, retomou com força total seus projetos. Hoje, está melhor do que nunca oferecendo soluções em engenharia mecânica e computação para todo o mercado."
                    image={ourHistory}
                    alt="Imagem com os membros da Serra Jr. Engenharia"
                    hasCarousel={false}
                />
            </HomeContent>
        </HomeStyle>    
    )
}

export default Home