import React from "react"
import EachService from "../../Components/EachService"

import Systems from "../../../../Assets/CompPage/desenvolvimento-sistemas.svg"
import Sites from "../../../../Assets/CompPage/desenvolvimento-sites.svg"
import Arrow from "../../../../Assets/CompPage/seta.svg"
import CSS from "../../../../Assets/CompPage/css.svg"
import HTML from "../../../../Assets/CompPage/html.svg"
import JS from "../../../../Assets/CompPage/js.svg"
import REACT from "../../../../Assets/CompPage/react.svg"
import TS from "../../../../Assets/CompPage/ts.svg"
import Styled from "../../../../Assets/CompPage/styled.svg"

import {    
    Title,
    ServicesContainer,
    Container,
    LogoContainer,
    Logo
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

            <LogoContainer>
                <Logo src={HTML} alt="ImagemHtml" />
                <Logo src={CSS} alt="Imagemcss" />
                <Logo src={JS} alt="ImagemJS" />
                <Logo src={TS} alt="ImagemTS" />
                <Logo src={REACT} alt="ImagemREACT" />
                <Logo src={Styled} alt="ImagemStyled" />
            </LogoContainer>
        </Container>
    )
}

export default ServiceLetterComp