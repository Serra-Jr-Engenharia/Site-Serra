import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import {
    Container,
    Wrapper,
    Logo,
    SliderContainer
} from "./style"
    
interface SliderProps{
    carouselData: Array<string>
    width?: string
    alt: string
    imageSize?: string
    hasArrows?: boolean
}

const ImageCarousel: React.FC<SliderProps> = (props) => {    
    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 2500
    };
    
    return(
        <SliderContainer containerWidth={props.width}>
            <Slider {...settings}>
                { props.carouselData.map((item, key) => {
                    return (
                        <Container key={key}>
                            <Wrapper>
                                <Logo src={item} alt={props.alt} style={{height: props.imageSize}}/>
                            </Wrapper>
                        </Container>
                    )
                })}
            </Slider>
        </SliderContainer>
    )
}

export default ImageCarousel