import React from "react"

import { 

    Container,
    Content, 
    Image, 
    List,
    ListContainer,
    Title, 
    
} from './style'

interface AboutUsCardProps{
    image: string
    titleText: string
    imageAlt?: string
    content?: string
    hasList: boolean
    list?: Array<string>
}

export const AboutUsCard: React.FC<AboutUsCardProps> = ({image, titleText, imageAlt, hasList, content, list}) => {
    return (
        <Container>
            <Image src={image} alt={imageAlt} />
            
            <Title>{titleText}</Title>
            
            {hasList ?
                <ListContainer>
                    {list ? list.map((listElement, key) => <List key={key}>{listElement}</List>) : null}
                </ListContainer>
                :
                <Content>{content}</Content>
            }
        </Container>
    )
}

export default AboutUsCard