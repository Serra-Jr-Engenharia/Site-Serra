import React from 'react'

import imageAboutUs from '../../../Assets/AboutUs/presentation-image.svg'
import AboutUsList from '../Templates/AboutUsCards'

import { 
    PresentationMain,
    PresentationAboutUsP,
    PresentationAboutUsImg,
    PresentationContainer
} from './style'

const AboutUs: React.FC = () => {
    return(
        <>  
            <PresentationContainer>
                <PresentationMain>
                    <PresentationAboutUsP>Sobre Nós</PresentationAboutUsP>
                    <PresentationAboutUsImg src={imageAboutUs} alt='imagem sobre nós' />
                </PresentationMain>
            </PresentationContainer>  

            <AboutUsList />
        </>
    )
}

export default AboutUs