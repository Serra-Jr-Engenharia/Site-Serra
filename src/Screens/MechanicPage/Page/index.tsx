import React from "react"

import Carousel from "../../../Components/Carousel"
import { mechanicData } from "../../../Services/mechanicData"

import Arrow from "../../../Assets/MechanicPage/seta.svg"
import PresentationImg1 from '../../../Assets/MechanicPage/presentation-image.svg'
import Gear from '../../../Assets/MechanicPage/gear-icon.svg'
import Piston from '../../../Assets/MechanicPage/piston-icon.svg'

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
    SlCardP
} from "./style";

const MechanicPage: React.FC = () =>{
    return (
            <MecStyle>
                <EngMec>
                    <EngMecPContainer>
                        <EngMecP>Engenharia</EngMecP>
                        <EngMecP>Mecânica</EngMecP>
                    </EngMecPContainer>
                    <EngMecImg src={PresentationImg1} alt="Imagem de Mecânica" />      
                </EngMec>

                <ServiceLetterH1>Carta de Serviços</ServiceLetterH1>
                <ServiceLetterH2>Engenharia Mecânica</ServiceLetterH2>
                <ServiceletterCard>
                    <SlCard>
                        <SlCardUp>
                            <SlCardImg src={Piston} alt="Imagem Sistemas" />
                            <SlCardH3>Desenvolvimento de Websites</SlCardH3>
                        </SlCardUp>

                        <SlCardDown>
                            <SlCardImg src={Arrow} alt="Seta" />
                            <SlCardP>Desenvolvemos do zero um site pensado exclusivamente para atender as necessidades do seu negócio. Utilizamos das ferramentas mais modernas do mercado para criar uma solução única que irá alavancar a visibilidade do seu produto!</SlCardP>
                        </SlCardDown>  
                    </SlCard>

                    <SlCard>
                        <SlCardUp>
                            <SlCardImg src={Gear} alt="Imagem Site" />
                            <SlCardH3>Desenvolvimento de Sistemas Web</SlCardH3>
                        </SlCardUp>

                        <SlCardDown>
                            <SlCardImg src={Arrow} alt="Seta" />
                            <SlCardP>Com auxílio das mais completas linguagens de programação, fornecemos aplicativos e sistemas próprios para a sua empresa que irão acelerar e auxiliar internamente no gerenciamento e desenvolvimento do seu negócio.</SlCardP>
                        </SlCardDown>
                    </SlCard>
                </ServiceletterCard>

                <Line color="#04ADD7" />

                <Box>
                    <BoxText>Quer colocar um projeto em prática? &rarr;</BoxText>
                </Box>

                <ProjectsMecAll>
                    <Carousel carouselData={mechanicData.mechanicsProjects} />
                </ProjectsMecAll>

                <ImagesPreFooter>
                    <ImagesPreFooterContact src={WhatsApp} alt="WhatsApp"/>
                    <ImagesPreFooterScrollUp onClick={() => window.scrollTo(0,0)} src={ScrollUp} alt="ScrollUp"/>
                </ImagesPreFooter>

            </MecStyle>
    )
}

export default MechanicPage