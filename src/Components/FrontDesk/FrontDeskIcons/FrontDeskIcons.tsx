import { FrontDeskIconsStyle } from './FrontDeskIconsStyle'

interface IconsProp{
    image: string;
    alt?: string;
    text: string;
}

export const FrontDeskIcons: React.FC<IconsProp> = ({image, text, alt}) =>{
    return (
        <FrontDeskIconsStyle>
            <img src={image} alt={alt} />
            <p>{text}</p>
        </FrontDeskIconsStyle>
    )
}

export default FrontDeskIcons