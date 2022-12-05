import React from 'react'
import { useNavigate } from 'react-router-dom'

import HomeIcons from '../HomeIcons'

import {
    Content,
    Container,
    Title, 
    Icons, 
    Button
} from './style'

interface CardProps{
    title: string
    buttonUrl: string
    buttonTitle: string
    color?: string
    images: Array<string>
    texts: Array<string>
}

const Card: React.FC<CardProps> = ({title, buttonUrl, buttonTitle, color, images, texts}) => {
    const navigate = useNavigate()

    return (
        <Container>
            <Title titleColor={color}>
                {title}
            </Title>

            <Content>
                <Icons>
                    {images.map((image, key) => <HomeIcons key={key} icon={image} text={texts[key]} alt={texts[key]} />)}
                </Icons>

                <Button onClick={() => {navigate(buttonUrl); window.scrollTo(0, 0)}} buttonColor={color}>{buttonTitle}</Button>
                
            </Content>
        </Container>
    )
}

export default Card;