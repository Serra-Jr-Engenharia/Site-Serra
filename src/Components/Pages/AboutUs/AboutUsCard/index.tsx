import Title from "../../../Title"
import { AboutUsCardStyle, AboutUsCardImg, Content, List } from './style'

interface AboutUsCardProps{
    image: any
    titleText: string
    imageAlt?: string
    content?: string
    hasList: boolean
    list?: Array<string>
}

export const AboutUsCard: React.FC<AboutUsCardProps> = ({image, titleText, imageAlt, hasList, content, list}) => {
    return (
        <AboutUsCardStyle  >
            <AboutUsCardImg src={image} alt={imageAlt} />
            
            <Title titleWidth="50%" fontSize='30px' text={titleText}/>
            
            {hasList ?
                <ul>
                    {list ? list.map(listElement => <List>{listElement}</List>) : null}
                </ul>
                :
                <Content>{content}</Content>
            }
        </AboutUsCardStyle>
    )
}

export default AboutUsCard