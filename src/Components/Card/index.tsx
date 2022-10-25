import React from 'react'

import HomeIcons from '../../Screens/Home/Template/HomeIcons'

import {
    CardBody,
    CardStyle,
    ButtonContainer,
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
    return (
        <CardStyle>
            <Title titleColor={color}>
                {title}
            </Title>

            <CardBody>
                <BodyContents>
                    {images.map((image, key) => <HomeIcons key={key} icon={image} text={texts[key]} alt={texts[key]} />)}
                </BodyContents>

                <ButtonContainer href={buttonUrl}>
                    <Button buttonColor={color}>{buttonTitle}</Button>
                </ButtonContainer>
                
            </CardBody>
        </CardStyle>
    )
}

export default Card;