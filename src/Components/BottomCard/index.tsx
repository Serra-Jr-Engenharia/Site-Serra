import Carousel from '../Carousel'
import { aboutUsData } from '../../Services/aboutUsData'

import { 
    BottomCardStyle, 
    BottomCardBody, 
    BottomCardContent, 
    BottomCardLink, 
    Title, 
    BottomCardButton, 
    HistoryTextContainer, 
    HistoryText, 
    HistoryImg 
} from './style'


interface BottomCardProps{
    title: string
    buttonUrl?: string
    buttonTitle?: string
    color?: string
    hasButton?: boolean
    image?: string
    text?: string
    alt?: string
    hasCarousel: boolean
}

const BottomCard: React.FC<BottomCardProps> = ({title, buttonUrl, buttonTitle, color, hasButton, text, image, alt, hasCarousel}) => {
    return (
        <BottomCardStyle carouselStyle={hasCarousel}>
            <Title titleColor={color}>
                {title}
            </Title>
                

            {hasCarousel ?
                <Carousel carouselData={aboutUsData.members}/>
                :
                <BottomCardBody>
                    <BottomCardContent>

                        <HistoryTextContainer>
                            <HistoryText>{text}</HistoryText>
                        </HistoryTextContainer>

                        <HistoryImg src={image} alt={alt} />
                        

                    </BottomCardContent>

                    {hasButton ? 
                        <BottomCardLink href={buttonUrl}>
                            <BottomCardButton buttonColor={color}>{buttonTitle}</BottomCardButton>
                        </BottomCardLink> 
                        :
                        null
                    }
                </BottomCardBody>
            }
                
        </BottomCardStyle>
    )
}

export default BottomCard;