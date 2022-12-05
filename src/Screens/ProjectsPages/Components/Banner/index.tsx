import React from "react"

import {
    Container,
    TextContainer,
    Text,
    Image,
} from "./style";

interface BannerProps{
    image: string,
    text: string,
    color: string,
}

const Banner: React.FC<BannerProps> = ({image, text, color}) =>{
    return (
        <Container style={{backgroundColor: color}}>
            <TextContainer>
                {text ?
                    text.split(' ').map((eachWord, index) => {
                        return <Text key={index}>{eachWord}</Text>
                    })
                    :
                    null
                }
            </TextContainer>
            <Image src={image} alt={text} />      
        </Container>
    )
}

export default Banner