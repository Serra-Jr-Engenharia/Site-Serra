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
    ContainerSectionContent
} from "./style"
import Title from "../Title";

interface ObjectProps{
    title: string
    image: string
    content: string
}

interface SliderProps{
    carouselData: Array<ObjectProps>
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
        <>
            <Slider {...settings}>
                { props.carouselData.map((item, key) => {
                    return (
                        <Container key={key}>
                            <Wrapper>
                                <ContainerSection>
                                    <ContainerSectionTitle>
                                        <Title text={item.title} fontSize="50px"/>
                                    </ContainerSectionTitle>

                                    <ContainerSectionContainer>
                                        <ContainerLogo>
                                            <img src={item.image} alt={item.title} />
                                        </ContainerLogo>
                                        <ContainerSectionContent>
                                            <span>{item.content}</span>
                                            <button>Você pode acessar o site clicando aqui</button>
                                        </ContainerSectionContent>
                                    </ContainerSectionContainer>
                                </ContainerSection>
                            </Wrapper>
                        </Container>
                    )
                })}
            </Slider>
        </>
    )
}

export default Carousel