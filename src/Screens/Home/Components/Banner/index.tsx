import React from 'react'

import TypeWriterEffect from '../TypeWriterEffect'
import presentationImage from '../../../../Assets/Home/presentation-image.png'

import { 
    Presentation, 
    Slogan,  
    PresentationImg, 
} from './style'


const Banner: React.FC = () =>{
    return(
        <Presentation>
            <Slogan>
                <TypeWriterEffect />
            </Slogan>
            <PresentationImg src={presentationImage} alt="apresentação" />
        </Presentation>
    )
}

export default Banner