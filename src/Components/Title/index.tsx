import gradientBar from '../../assets/FrontDeskAssets/barra.svg'
import {TitleStyle, TitleText, GradientBar} from './style'
import React from 'react'


interface TitleProps{
    text: string
    fontSize?: string
    titleWidth?: string
}

const Title: React.FC<TitleProps> = ({text, fontSize, titleWidth}) => { 
    return(
        <TitleStyle>
            <TitleText style={{fontSize}}>{text}</TitleText>
            <GradientBar gradientWidth={titleWidth} src={gradientBar} alt="gradientBar" />
        </TitleStyle>
    )
}

export default Title