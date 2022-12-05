import React from "react"
import EachService from "../../Components/EachService"

import Systems from "../../../../Assets/CompPage/desenvolvimento-sistemas.svg"
import Sites from "../../../../Assets/CompPage/desenvolvimento-sites.svg"
import Arrow from "../../../../Assets/CompPage/seta.svg"
import CSS from "../../../../Assets/CompPage/css-icon.svg"
import HTML from "../../../../Assets/CompPage/html-icon.svg"
import JS from "../../../../Assets/CompPage/js-icon.svg"
import REACT from "../../../../Assets/CompPage/react-icon.svg"
import TS from "../../../../Assets/CompPage/ts-icon.svg"
import Styled from "../../../../Assets/CompPage/styled-icon.svg"

import {    
    Title,
    ServicesContainer,
    Container,
    SlLogoContainer,
    SlLogo
} from "./style";


const ServiceLetterComp: React.FC = () =>{
    
    return (
        <Container>
            <Title>Carta de Serviços</Title>
        
            <ServicesContainer>
                <EachService 
                    icon={Sites}
                    arrow={Arrow}
                    title="Desenvolvimento de Websites"
                    text="Desenvolvemos do zero um site pensado exclusivamente para atender as necessidades do seu negócio. Utilizamos das ferramentas mais modernas do mercado para criar uma solução única que irá alavancar a visibilidade do seu produto!"
                />

                <EachService 
                    icon={Systems}
                    arrow={Arrow}
                    title="Desenvolvimento de Sistemas Web"
                    text="Com auxílio das mais completas linguagens de programação, fornecemos aplicativos e sistemas próprios para a sua empresa que irão acelerar e auxiliar internamente no gerenciamento e desenvolvimento do seu negócio."
                /> 

                
            </ServicesContainer>

            <SlLogoContainer>
                <SlLogo src={HTML} alt="ImagemHtml" />
                <SlLogo src={CSS} alt="Imagemcss" />
                <SlLogo src={JS} alt="ImagemJS" />
                <SlLogo src={TS} alt="ImagemTS" />
                <SlLogo src={REACT} alt="ImagemREACT" />
                <SlLogo src={Styled} alt="ImagemStyled" />
            </SlLogoContainer>
        </Container>
    )
}

export default ServiceLetterComp