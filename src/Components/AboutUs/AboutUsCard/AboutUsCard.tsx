import Title from "../../Title/Title"
import { AboutUsCardStyle } from './AboutUsCardStyle'

interface AboutUsCardProps{
    image: any
    titleText: string
    imageAlt?: string
    children: any
}

export const AboutUsCard: React.FC<AboutUsCardProps> = ({image, titleText, imageAlt, children}) => {
    return (
        <AboutUsCardStyle >
            <img className="AboutUsCardImg" src={image} alt={imageAlt}/>
            <Title titleWidth="200px" fontSize='30px' text={titleText}/>
            {children}
        </AboutUsCardStyle>
    )
}

export default AboutUsCard