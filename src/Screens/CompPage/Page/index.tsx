import React from "react"

import Carousel from "../../../Components/Carousel"
import { compData } from "../../../Services/compData"

import IMGComp from "../../../Assets/CompPage/presentation-image.svg"
import Systems from "../../../Assets/CompPage/desenvolvimento-sistemas.svg"
import Sites from "../../../Assets/CompPage/desenvolvimento-sites.svg"
import Arrow from "../../../Assets/CompPage/seta.svg"
import CSS from "../../../Assets/CompPage/css-icon.svg"
import HTML from "../../../Assets/CompPage/html-icon.svg"
import JS from "../../../Assets/CompPage/js-icon.svg"
import REACT from "../../../Assets/CompPage/react-icon.svg"
import TS from "../../../Assets/CompPage/ts-icon.svg"
import Styled from "../../../Assets/CompPage/styled-icon.svg"

import WhatsApp from "../../../Assets/Global/whatsapp.svg"
import ScrollUp from "../../../Assets/Global/arrow-up.svg"

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
    Line1,
    Line2,
    Lines,
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
    SlCardP,
    ServiceletterDiv,
    ContactLink,
    AllBoxes,
    Box1,
    Box2,
    Box3,
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

            <ServiceletterDiv>
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
            </ServiceletterDiv>

            <Lines>
                <Line1 color="#FD6300"/>  

                <BoxContainer>
                    <ContactLink href="http://127.0.0.1:5173/Site-Serra/contatos"><BoxText>Quer colocar um projeto em prática? &rarr;</BoxText></ContactLink>
                </BoxContainer>

                <Line2 color="#FD6300"/>
            </Lines>


            <AllBoxes>
                <Box1></Box1>
                <Box2>Quer colocar um projeto em prática? &rarr;</Box2>
                <Box3></Box3>
            </AllBoxes>
            

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