import React from "react"
import EachService from "../../Components/EachService"

import Hammer from '../../../../Assets/MechanicPage/hammer-icon.svg'
import Robot from '../../../../Assets/MechanicPage/bot-icon.svg'
import Printer from '../../../../Assets/MechanicPage/3d-icon.svg'
import Cartoon from '../../../../Assets/MechanicPage/drawing-icon.svg'
import arrow from '../../../../Assets/MechanicPage/seta.svg'

import {    
    Title,
    ServicesContainer,
    Container
} from "./style";


const ServiceLetterMec: React.FC = () =>{
    
    return (
        <Container>
            <Title>Carta de Serviços</Title>
        
            <ServicesContainer>
                <EachService 
                    icon={Hammer} 
                    arrow={arrow}
                    title="Projeto e Manutenção de Equipamentos"
                    text="Como nosso principal serviço, desenvolvemos os mais diversos equipamentos para atender cada demanda da melhor maneira. Assim, nosso time irá estudar a fundo a necessidade do cliente para então passar por cada fase do projeto, apresentando um estudo minucioso, seu desenho técnico, opções de protótipo e então colocando na prática e suas necessárias manutenções."
                />

                <EachService 
                    icon={Cartoon} 
                    arrow={arrow}
                    title="Desenho Técnico e Industrial"
                    text="Com auxílio de programas CAD, a Serra Jr oferece serviços de desenhos de peças e maquinários, em 2D e 3D, para dar vida ao conceito proposto pelo cliente seguindo todas as normas necessárias nesse processo tão significante de um projeto."
                />  
            </ServicesContainer>

            <ServicesContainer>
                <EachService 
                    icon={Robot} 
                    arrow={arrow}
                    title="Projetos de Automação"
                    text="A partir da demanda do cliente desenvolvemos projetos para automação e otimização de tarefas. Tendo em vista que o tempo é um recurso precioso e precisa ser sempre melhor aproveitado, nosso time irá desenvolver o melhor estudo para otimização do seu projeto além de criação de protótipos usando microcontroladores, CLP's e outras tecnologias da indústria 4.0."
                />

                <EachService 
                    icon={Printer} 
                    arrow={arrow}
                    title="Prototipagem"
                    text="A experimentação de ideias iniciais de um projeto é uma fase muito importante de seu desenvolvimento, e por isso a utilização de protótipos antes do projeto final é essencial. Na Serra Jr contamos com equipamentos como impressoras 3D e CNC de corte a laser onde nossos membros capacitados podem desenvolver o melhor protótipo a baixo custo de seu projeto."
                />
            </ServicesContainer>
        </Container>
    )
}

export default ServiceLetterMec