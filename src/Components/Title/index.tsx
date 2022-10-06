import {TitleStyle, TitleText, GradientBar, TitleContainer} from './style'
import React from 'react'


interface TitleProps{
    text: string
    fontSize?: string
    titleWidth?: string
}

const Title: React.FC<TitleProps> = ({text, fontSize, titleWidth}) => { 
    return(
        <TitleStyle>
            <TitleContainer>
                <TitleText style={{fontSize}} >{text}</TitleText>
                <GradientBar  gradientWidth={titleWidth}/>
            </TitleContainer>
        </TitleStyle>
    )
}

export default Title