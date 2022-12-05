import React from "react";
import { Slide, SlideAnchor, SlideImg } from "./style";

interface SliderImageProps{
    image: string
    altText: string
    redirect: string
}

const FooterSliderImg: React.FC<SliderImageProps> = ({image, altText, redirect}) =>{

    return(
        <Slide>
            <SlideAnchor href={redirect} target="_blank" rel="noopener noreferrer">
                <SlideImg src={image} alt={altText}/>
            </SlideAnchor>
        </Slide>
    )
}

export default FooterSliderImg