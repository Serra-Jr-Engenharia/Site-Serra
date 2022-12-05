import React from 'react';
import { Container, Icon, Description } from './style'

interface IconsProp{
    icon: string;
    alt?: string;
    text: string;
}

export const HomeIcons: React.FC<IconsProp> = ({icon, text, alt}) =>{

    return (
        <Container>
            <Icon src={icon} alt={alt} />
            <Description>{text}</Description>
        </Container>
    )
}

export default HomeIcons