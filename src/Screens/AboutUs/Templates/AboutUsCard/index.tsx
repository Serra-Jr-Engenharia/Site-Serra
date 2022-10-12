import React from "react"
import Title from "../../../../components/Title"
import { 
    AboutUsCardStyle, 
    AboutUsCardImg, 
    Content, 
    List, 
    AboutUsCardUl
} from './style'

interface AboutUsCardProps{
    image: string
    titleText: string
    imageAlt?: string
    content?: string
    hasList: boolean
    list?: Array<string>
}

export const AboutUsCard: React.FC<AboutUsCardProps> = ({image, titleText, imageAlt, hasList, content, list}) => {
    return (
        <AboutUsCardStyle>
            <AboutUsCardImg src={image} alt={imageAlt} />
            
            <Title titleWidth="50%" fontSize='30px' text={titleText}/>
            
            {hasList ?
                <AboutUsCardUl>
                    {list ? list.map((listElement, key) => <List key={key}>{listElement}</List>) : null}
                </AboutUsCardUl>
                :
                <Content>{content}</Content>
            }
        </AboutUsCardStyle>
    )
}

export default AboutUsCard