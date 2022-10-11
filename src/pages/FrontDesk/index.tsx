import React, {useState, useEffect} from 'react'

import Card from "../../components/Card"
import Title from "../../components/Title"
import BottomCard from '../../components/BottomCard'

// @ts-ignore
import TypeWriterEffect from 'react-typewriter-effect';



import presentationImage from '../../assets/presentation-image.svg'
import monitorIcon from '../../assets/FrontDeskAssets/Sites.svg'
import systemsIcon from '../../assets/FrontDeskAssets/sistemas-web.svg'
import repairIcon from '../../assets/FrontDeskAssets/manutencao.svg'
import drawIcon from '../../assets/FrontDeskAssets/desenho-tecnico.svg'
import botIcon from '../../assets/FrontDeskAssets/braco-robo.svg'
import printerIcon from '../../assets/FrontDeskAssets/impressora-3d.svg'
import ourHistory from '../../assets/FrontDeskAssets/nossa-historia.svg'

import { 
    FrontDeskStyle, 
    Presentation, 
    Slogan,  
    FrontDeskContent,
    CardContainer,
    PresentationImg, 
} from './style'


const FrontDesk: React.FC = () =>{
    // const [phrase, setPhrase] = useState("");
    // const TextArray = "texto em questao";
    // const texto = ['t','e','x','t','o']
        
    // useEffect(() =>{
    //     function typeWritter(){
    //         texto.forEach((letter:any, i:any ) =>{
    //             setTimeout(() => (setPhrase(phrase + letter), 95 * i);
    //         });
            
    //     }
    // },[])

    return(
        <FrontDeskStyle>
            <Presentation>
                <Slogan>
                    <TypeWriterEffect
                        textStyle={{ 
                            fontFamily: 'Courier Prime', 
                            fontSize: "70px", 
                            color: "#001830", 
                            fontWeight: "700" 
                        }}
                        startDelay={100}
                        cursorColor="orange"
                        multiText={[
                            'Engrenando ideias, inovando o mercado.',
                            'Engrenando ideias, inovando o mercado.'
                        ]}
                        multiTextDelay={3000}
                        eraseSpeed={400}
                    />
                </Slogan>
                <PresentationImg src={presentationImage} alt="apresentação" />
            </Presentation>

            <Title text="O que fazemos" />
            <FrontDeskContent>
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
                        texts={["Projeto e Manutenção de Equipamentos", "Desenho Técnico e Industrial", "Automação Industrial", "Prototipagem"]}
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
            </FrontDeskContent>
        </FrontDeskStyle>    
    )
}

export default FrontDesk