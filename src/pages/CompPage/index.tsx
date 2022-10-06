import React from "react"

import Carousel from "../../components/Carousel"
import { compData } from "../../services/compData"

import IMGComp from "../../assets/CompAssets/presentation-image.svg"
import Systems from "../../assets/CompAssets/desenvolvimento-sistemas.svg"
import Sites from "../../assets/CompAssets/desenvolvimento-sites.svg"
import Arrow from "../../assets/CompAssets/seta.svg"
import CSS from "../../assets/CompAssets/css-icon.svg"
import HTML from "../../assets/CompAssets/html-icon.svg"
import JS from "../../assets/CompAssets/js-icon.svg"
import REACT from "../../assets/CompAssets/react-icon.svg"
import TS from "../../assets/CompAssets/ts-icon.svg"
import Styled from "../../assets/CompAssets/styled-icon.svg"

import WhatsApp from "../../assets/whatsapp.svg"
import ScrollUp from "../../assets/arrow-up.svg"

import {
    CompStyle,
    EngComp, 
    EngCompP, 
    EngCompImg, 
    ServiceletterH1, 
    ServiceletterH2, 
    ServiceletterCard,
    SlCard,
    SlCardUp,
    SlCardDown,
    SlLogo,
    Line,
    ImagesPreFooterContact,
    ImagesPreFooterScrollUp,
    ImagesPreFooter,
    ProjectsCompAll,
    EngCompPContainer,
    BoxContainer,
    BoxText,
    SlLogoContainer,
    SlCardImg,
    SlCardH3,
    SlCardP
} from "./style";


const CompPage: React.FC = () =>{
    return (
        <CompStyle>
            <EngComp>
                <EngCompPContainer>
                    <EngCompP>Engenharia</EngCompP>
                    <EngCompP>de</EngCompP>
                    <EngCompP>Computação</EngCompP>
                </EngCompPContainer>
                <EngCompImg src={IMGComp} alt="Imagem de Computação" /> 
            </EngComp>


            <ServiceletterH1>Carta de Serviços</ServiceletterH1>
            <ServiceletterH2>Engenharia de Computação</ServiceletterH2>
            
            <ServiceletterCard>
                <SlCard>
                    <SlCardUp>
                        <SlCardImg src={Sites} alt="Imagem Site" />
                        <SlCardH3>Desenvolvimento de Websites</SlCardH3>
                    </SlCardUp>

                    <SlCardDown>
                        <SlCardImg src={Arrow} alt="Seta" />
                        <SlCardP>Desenvolvemos do zero um site pensado exclusivamente para atender as necessidades do seu negócio. Utilizamos das ferramentas mais modernas do mercado para criar uma solução única que irá alavancar a visibilidade do seu produto!</SlCardP>
                    </SlCardDown>
                    
                </SlCard>

                <SlCard>
                    <SlCardUp>
                        <SlCardImg src={Systems} alt="Imagem Sistemas" />
                        <SlCardH3>Desenvolvimento de Sistemas Web</SlCardH3>
                    </SlCardUp>

                    <SlCardDown>
                        <SlCardImg src={Arrow} alt="Seta" />
                        <SlCardP>Com auxílio das mais completas linguagens de programação, fornecemos aplicativos e sistemas próprios para a sua empresa que irão acelerar e auxiliar internamente no gerenciamento e desenvolvimento do seu negócio.</SlCardP>
                    </SlCardDown>
                </SlCard>
            </ServiceletterCard>

            <SlLogoContainer>
                <SlLogo src={HTML} alt="ImagemHtml" />
                <SlLogo src={CSS} alt="Imagemcss" />
                <SlLogo src={JS} alt="ImagemJS" />
                <SlLogo src={TS} alt="ImagemTS" />
                <SlLogo src={REACT} alt="ImagemREACT" />
                <SlLogo src={Styled} alt="ImagemStyled" />
            </SlLogoContainer>

            <Line color="#FD6300"/>     
          
            <BoxContainer>
                <BoxText>Quer colocar um projeto em prática? &rarr;</BoxText>
            </BoxContainer>

            <ProjectsCompAll>
                <Carousel carouselData={compData.computingProjects} />
            </ProjectsCompAll>


            <ImagesPreFooter>
                <ImagesPreFooterContact src={WhatsApp} alt="WhatsApp"/>
                <ImagesPreFooterScrollUp onClick={() => window.scrollTo(0,0)} src={ScrollUp} alt="ScrollUp"/>
            </ImagesPreFooter>

        </CompStyle>
    )
}

export default CompPage