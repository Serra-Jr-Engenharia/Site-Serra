import React from 'react'
import { aboutUsData } from '../../../../Services/aboutUsData'
import AboutUsCard from '../../Components/AboutUsCard'
import BottomCard from '../../../../Components/BottomCard'

import { 
    Content,
    ContentDivision,
    Container,
} from './style'

const AboutUsCards: React.FC = () => {
    return(
        <Container>
            <Content>
                <AboutUsCard
                    image={aboutUsData.icons[0].image}
                    imageAlt={aboutUsData.icons[0].imageAlt}
                    list={aboutUsData.icons[0].list}
                    hasList={aboutUsData.icons[0].hasList} 
                    content={aboutUsData.icons[0].content}
                    titleText= {aboutUsData.icons[0].titleText} 
                />
                <ContentDivision />
                
                <AboutUsCard
                    image={aboutUsData.icons[1].image}
                    imageAlt={aboutUsData.icons[1].imageAlt}
                    list={aboutUsData.icons[1].list}
                    hasList={aboutUsData.icons[1].hasList} 
                    content={aboutUsData.icons[1].content}
                    titleText= {aboutUsData.icons[1].titleText} 
                />

                <ContentDivision />

                <AboutUsCard
                    image={aboutUsData.icons[2].image}
                    imageAlt={aboutUsData.icons[2].imageAlt}
                    list={aboutUsData.icons[2].list}
                    hasList={aboutUsData.icons[2].hasList} 
                    content={aboutUsData.icons[2].content}
                    titleText= {aboutUsData.icons[2].titleText} 
                />

            </Content>

            <BottomCard 
                title='Quem Somos' 
                color='#001830' 
                hasButton={false} 
                hasCarousel={true}
            />
        </Container>
    )
}

export default AboutUsCards