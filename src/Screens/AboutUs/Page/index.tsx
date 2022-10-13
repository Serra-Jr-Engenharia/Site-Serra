import React from 'react'
import { aboutUsData } from '../../../Services/aboutUsData'

import imageAboutUs from '../../../Assets/AboutUs/presentation-image.svg'

import BottomCard from '../../../Components/BottomCard'
import AboutUsCard from '../Templates/AboutUsCard'

import { 
    PresentationMain,
    PresentationAboutUsP,
    AboutUsContent,
    AboutUsContentDivision,
    PresentationAboutUsImg
} from './style'

const AboutUs: React.FC = () => {
    return(
        <>
            <PresentationMain>
                <PresentationAboutUsP>Sobre Nós</PresentationAboutUsP>
                <PresentationAboutUsImg src={imageAboutUs} alt='imagem sobre nós' />
            </PresentationMain>
            
            <AboutUsContent>
                <AboutUsCard
                    image={aboutUsData.icons[0].image}
                    imageAlt={aboutUsData.icons[0].imageAlt}
                    list={aboutUsData.icons[0].list}
                    hasList={aboutUsData.icons[0].hasList} 
                    content={aboutUsData.icons[0].content}
                    titleText= {aboutUsData.icons[0].titleText} 
                />
                <AboutUsContentDivision />
                
                <AboutUsCard
                    image={aboutUsData.icons[1].image}
                    imageAlt={aboutUsData.icons[1].imageAlt}
                    list={aboutUsData.icons[1].list}
                    hasList={aboutUsData.icons[1].hasList} 
                    content={aboutUsData.icons[1].content}
                    titleText= {aboutUsData.icons[1].titleText} 
                />

                <AboutUsContentDivision />

                <AboutUsCard
                    image={aboutUsData.icons[2].image}
                    imageAlt={aboutUsData.icons[2].imageAlt}
                    list={aboutUsData.icons[2].list}
                    hasList={aboutUsData.icons[2].hasList} 
                    content={aboutUsData.icons[2].content}
                    titleText= {aboutUsData.icons[2].titleText} 
                />

            </AboutUsContent>

            <BottomCard 
                title='Quem Somos' 
                color='#001830' 
                hasButton={false} 
                hasCarousel={true}
            />
        </>
    )
}

export default AboutUs