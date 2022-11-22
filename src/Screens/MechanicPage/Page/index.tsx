import React from "react"

import Carousel from "../../../Components/Carousel"
import { mechanicData } from "../../../Services/mechanicData"

import Arrow from "../../../Assets/MechanicPage/seta.svg"
import PresentationImg1 from '../../../Assets/MechanicPage/presentation-image.svg'
import Gear from '../../../Assets/MechanicPage/gear-icon.svg'
import Hammer from '../../../Assets/MechanicPage/hammer-icon.svg'
import Robot from '../../../Assets/MechanicPage/bot-icon.svg'
import Printer from '../../../Assets/MechanicPage/3d-icon.svg'
import Cartoon from '../../../Assets/MechanicPage/drawing-icon.svg'

import WhatsApp from "../../../Assets/Global/whatsapp.svg"
import ScrollUp from "../../../Assets/Global/arrow-up.svg"

import {
    MecStyle,
    EngMec,
    EngMecP,
    ServiceLetterH1,
    ServiceLetterH2,
    ServiceletterCard,
    SlCard,
    SlCardUp,
    SlCardDown,
    EngMecImg,
    Line,
    Box,
    ImagesPreFooter,
    ImagesPreFooterContact,
    ImagesPreFooterScrollUp,
    ProjectsMecAll,
    BoxText,
    SlCardImg,
    EngMecPContainer,
    SlCardH3,
    SlCardP,
    ServiceLetterContainer
} from "./style";
import { useNavigate } from "react-router-dom"

const MechanicPage: React.FC = () =>{
    const navigate = useNavigate()
    return (
            <MecStyle>
                <EngMec>
                    <EngMecPContainer>
                        <EngMecP>Engenharia</EngMecP>
                        <EngMecP>Mecânica</EngMecP>
                    </EngMecPContainer>
                    <EngMecImg src={PresentationImg1} alt="Imagem de Mecânica" />      
                </EngMec>

                <ServiceLetterContainer>
                    <ServiceLetterH1>Carta de Serviços</ServiceLetterH1>
                
                    <ServiceletterCard>
                        <SlCard>
                            <SlCardUp>
                                <SlCardImg src={Hammer} alt="Imagem Sistemas" />
                                <SlCardH3>Projeto e Manutenção de Equipamentos</SlCardH3>
                            </SlCardUp>

                            <SlCardDown>
                                <SlCardImg src={Arrow} alt="Seta" />
                                <SlCardP>Como nosso principal serviço, desenvolvemos os mais diversos equipamentos para atender cada demanda da melhor maneira. Assim, nosso time irá estudar a fundo a necessidade do cliente para então passar por cada fase do projeto, apresentando um estudo minucioso, seu desenho técnico, opções de protótipo e então colocando na prática e suas necessárias manutenções.</SlCardP>
                            </SlCardDown>  
                        </SlCard>

                        <SlCard>
                            <SlCardUp>
                                <SlCardImg src={Cartoon} alt="Imagem Site" />
                                <SlCardH3>Desenho Técnico e Industrial</SlCardH3>
                            </SlCardUp>

                            <SlCardDown>
                                <SlCardImg src={Arrow} alt="Seta" />
                                <SlCardP>Com auxílio de programas CAD, a Serra Jr oferece serviços de desenhos de peças e maquinários, em 2D e 3D, para dar vida ao conceito proposto pelo cliente seguindo todas as normas necessárias nesse processo tão significante de um projeto.</SlCardP>
                            </SlCardDown>
                        </SlCard>
                    </ServiceletterCard>

                    <ServiceletterCard>
                        <SlCard>
                            <SlCardUp>
                                <SlCardImg src={Robot} alt="Imagem Sistemas" />
                                <SlCardH3>Projetos de Automação</SlCardH3>
                            </SlCardUp>

                            <SlCardDown>
                                <SlCardImg src={Arrow} alt="Seta" />
                                <SlCardP>A partir da demanda do cliente desenvolvemos projetos para automação e otimização de tarefas. Tendo em vista que o tempo é um recurso precioso e precisa ser sempre melhor aproveitado, nosso time irá desenvolver o melhor estudo para otimização do seu projeto além de criação de protótipos usando microcontroladores, CLP's e outras tecnologias da indústria 4.0.</SlCardP>
                            </SlCardDown>  
                        </SlCard>

                        <SlCard>
                            <SlCardUp>
                                <SlCardImg src={Printer} alt="Imagem Site" />
                                <SlCardH3>Prototipagem</SlCardH3>
                            </SlCardUp>

                            <SlCardDown>
                                <SlCardImg src={Arrow} alt="Seta" />
                                <SlCardP>A experimentação de ideias iniciais de um projeto é uma fase muito importante de seu desenvolvimento, e por isso a utilização de protótipos antes do projeto final é essencial. Na Serra Jr contamos com equipamentos como impressoras 3D e CNC de corte a laser onde nossos membros capacitados podem desenvolver o melhor protótipo a baixo custo de seu projeto.</SlCardP>
                            </SlCardDown>
                        </SlCard>
                    </ServiceletterCard>
                </ServiceLetterContainer>

                <Line />

                <Box>
                    <BoxText onClick={() => {navigate('/contatos'); window.scrollTo(0, 0)}}>Quer colocar um projeto em prática? &rarr;</BoxText>
                </Box>

                <ProjectsMecAll>
                    <Carousel carouselData={mechanicData.mechanicsProjects} />
                </ProjectsMecAll>

                <ImagesPreFooterScrollUp onClick={() => window.scrollTo(0,0)} src={ScrollUp} alt="ScrollUp"/>

            </MecStyle>
    )
}

export default MechanicPage