import gradientBar from '../../assets/FrontDeskAssets/barra.png'
import {TitleStyle} from './TitleStyle'
import React from 'react'


interface TitleProps{
    text: string
    fontSize?: string
    titleWidth?: string
}

const Title: React.FC<TitleProps> = ({text, fontSize, titleWidth}) => { 
    return(
        <TitleStyle>
            <p style={{fontSize}}>{text}</p>
            <img style={{width: titleWidth ?? "300px"}}className='gradientBar' src={gradientBar} alt="gradientBar" />
        </TitleStyle>
    )
}

export default Title