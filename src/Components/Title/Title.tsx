import gradientBar from '../../assets/FrontDeskAssets/barra.png'
import {TitleStyle} from './TitleStyle'
import React from 'react'


interface TitleProps{
    text: string
    fontSize?: string
}

const Title: React.FC<TitleProps> = ({text, fontSize}) => { 
    return(
        <TitleStyle>
            <p style={{fontSize}}>{text}</p>
            <img className='gradientBar' src={gradientBar} alt="gradientBar" />
        </TitleStyle>
    )
}

export default Title