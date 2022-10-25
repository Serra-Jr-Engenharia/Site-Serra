import React from 'react';
import { HomeIconsStyle, Icon, IconDescription } from './style'

interface IconsProp{
    icon: string;
    alt?: string;
    text: string;
}

export const HomeIcons: React.FC<IconsProp> = ({icon, text, alt}) =>{
    return (
        <HomeIconsStyle>
            <Icon src={icon} alt={alt} />
            <IconDescription>{text}</IconDescription>
        </HomeIconsStyle>
    )
}

export default HomeIcons