
import AboutUsCarousel from '../AboutUsCarousel'
import { aboutUsData } from '../../../../Services/aboutUsData'

import {  
    Title, 
    TextContainer, 
    Text,
    Container,
    CardBody,
    Content,
} from './style'


interface OurImagesProps{
    title: string
    color?: string
}

const OurImages: React.FC<OurImagesProps> = ({title, color}) => {

    return (
        <Container>
            <Title titleColor={color}>
                {title}
            </Title>
                

            <CardBody>
                <Content>
                    <TextContainer>
                        <Text>{aboutUsData.membersText}</Text>
                    </TextContainer>
                    
                    <AboutUsCarousel width='50%' carouselData={aboutUsData.members} alt="Imagens dos membros da Serra Jr. Engenharia"/>
                </Content>

            </CardBody>
                
        </Container>
    )
}

export default OurImages;