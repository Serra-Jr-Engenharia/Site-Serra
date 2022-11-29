import React from 'react'
import { useNavigate } from 'react-router-dom'

import HomeIcons from '../../Screens/Home/Template/HomeIcons'

import {
    CardBody,
    CardStyle,
    Title, 
    BodyContents, 
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


    // <Container>
    //  <Title>
            // Text
    //  <Title>

    //  Card
    //      Services
    //      Button
    //  </Card>
    // Container

    return (
        <CardStyle>
            <Title titleColor={color}>
                {title}
            </Title>

            <CardBody>
                <BodyContents>
                    {images.map((image, key) => <HomeIcons key={key} icon={image} text={texts[key]} alt={texts[key]} />)}
                </BodyContents>

                <Button onClick={() => {navigate(buttonUrl); window.scrollTo(0, 0)}} buttonColor={color}>{buttonTitle}</Button>
                
            </CardBody>
        </CardStyle>
    )
}

export default Card;