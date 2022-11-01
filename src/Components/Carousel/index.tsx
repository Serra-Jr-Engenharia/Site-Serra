import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import {
    Container,
    Wrapper,
    ContainerSection,
    ContainerSectionTitle,
    ContainerSectionContainer,
    ContainerLogo,
    ContainerSectionContent,
    Logo,
    SectionSpan,
    SectionButton,
    SliderContainer
} from "./style"
import Title from "../Title";


interface ObjectProps{
    title: string
    image: string
    content: string
}

interface SliderProps{
    carouselData: Array<ObjectProps>
    width?: string
}

const Carousel: React.FC<SliderProps> = (props) => {    
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
    };
    
    return(
        <SliderContainer containerWidth={props.width}>
            <Slider {...settings}>
                { props.carouselData.map((item, key) => {
                    return (
                        <Container key={key}>
                            <Wrapper>
                                <ContainerSection>
                                    <ContainerSectionTitle>
                                        <Title text={item.title}/>
                                    </ContainerSectionTitle>

                                    <ContainerSectionContainer>
                                        <ContainerLogo>
                                            <Logo src={item.image} alt={item.title} />
                                        </ContainerLogo>
                                        <ContainerSectionContent>
                                            <SectionSpan>{item.content}</SectionSpan>
                                            <SectionButton>Você pode acessar o site clicando aqui</SectionButton>
                                        </ContainerSectionContent>
                                    </ContainerSectionContainer>
                                </ContainerSection>
                            </Wrapper>
                        </Container>
                    )
                })}
            </Slider>
        </SliderContainer>
    )
}

export default Carousel