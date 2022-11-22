import { useNavigate } from 'react-router-dom'
import AboutUsCarousel from '../../Screens/AboutUs/Templates/AboutUsCarousel'
import { aboutUsData } from '../../Services/aboutUsData'

import { 
    BottomCardStyle, 
    BottomCardBody, 
    BottomCardContent, 
    BottomCardLink, 
    Title, 
    BottomCardButton, 
    HistoryTextContainer, 
    HistoryText1,
    HistoryText2,
    HistoryImg,
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
    const navigate = useNavigate()

    return (
        <BottomCardStyle carouselStyle={hasCarousel}>
            <Title titleColor={color}>
                {title}
            </Title>
                

            {hasCarousel ?
                <BottomCardBody>
                    <BottomCardContent>
                        <HistoryTextContainer>
                            <HistoryText1>{aboutUsData.membersText}</HistoryText1>
                        </HistoryTextContainer>
                        
                        <AboutUsCarousel width='50%' carouselData={aboutUsData.members}/>
                    </BottomCardContent>

                </BottomCardBody>
                :
                <BottomCardBody>
                    <BottomCardContent>

                        <HistoryTextContainer>
                            <HistoryText2>{text}</HistoryText2>
                        </HistoryTextContainer>

                        <HistoryImg src={image} alt={alt} />
                        

                    </BottomCardContent>

                    {hasButton && buttonUrl ? 
                        <BottomCardLink>
                            <BottomCardButton onClick={() => {navigate(buttonUrl); window.scrollTo(0, 0)}} buttonColor={color}>{buttonTitle}</BottomCardButton>
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