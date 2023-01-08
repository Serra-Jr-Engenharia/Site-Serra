import React from 'react'

import imageAboutUs from '../../../Assets/AboutUs/presentation-image.webp'
import AboutUsCards from '../Templates/AboutUsCards'

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

            <AboutUsCards />
        </>
    )
}

export default AboutUs