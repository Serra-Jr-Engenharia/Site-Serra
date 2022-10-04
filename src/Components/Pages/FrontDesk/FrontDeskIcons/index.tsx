import { FrontDeskIconsStyle, Icon, IconDescription } from './style'

interface IconsProp{
    icon: string;
    alt?: string;
    text: string;
}

export const FrontDeskIcons: React.FC<IconsProp> = ({icon, text, alt}) =>{
    return (
        <FrontDeskIconsStyle>
            <Icon src={icon} alt={alt} />
            <IconDescription>{text}</IconDescription>
        </FrontDeskIconsStyle>
    )
}

export default FrontDeskIcons