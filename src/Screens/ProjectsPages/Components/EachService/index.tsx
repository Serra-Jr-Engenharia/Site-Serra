import React from "react"

import {    
    Container,
    TitleContainer,
    TextContainer,
    Image,
    Title,
    Text,
} from "./style";

interface EachServiceProps{
    icon: string,
    arrow: string,
    title: string,
    text: string,
}

const EachService: React.FC<EachServiceProps> = ({icon, title, text, arrow}) =>{

    return (
        <Container>
            <TitleContainer>
                <Image src={icon} alt={title} />
                <Title>{title}</Title>
            </TitleContainer>

            <TextContainer>
                <Image src={arrow} alt="Seta" />
                <Text>{text}</Text>
            </TextContainer>  
        </Container>
    )
}

export default EachService