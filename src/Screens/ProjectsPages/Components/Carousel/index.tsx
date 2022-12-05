import React, { useState } from "react";
import Slider from "react-slick";
import Modal from "../Modal";
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
import GradientTitle from "../../../../Components/GradientTitle";


interface ObjectProps{
    title: string
    image: Array<string>
    content: string
    summary: string
    imageWidth?: string
    members?: Array<string>
    opinions?: Array<string>
    acess?: string
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

    const [statusModal, setStatusModal] = useState(false)
    const [modalData, setModalData] = useState<ObjectProps>()
    
    return(
        <SliderContainer containerWidth={props.width}>
            <Slider {...settings}>
                { props.carouselData.map((item, key) => {

                    return (
                        <Container key={key}>
                            <Wrapper>
                                <ContainerSection>
                                    <ContainerSectionTitle>
                                        <GradientTitle text={item.title}/>
                                    </ContainerSectionTitle>

                                    <ContainerSectionContainer>
                                        <ContainerLogo>
                                            <Logo src={item.image[0]} alt={item.title} style={{width: item.imageWidth}}/>
                                        </ContainerLogo>
                                        <ContainerSectionContent>
                                            <SectionSpan>{item.content}</SectionSpan>

                                            <SectionButton onClick={() => {
                                                setStatusModal(!statusModal)
                                                setModalData(item)
                                            }}>Saiba Mais</SectionButton>

                                            <Modal data={modalData} status={statusModal} setStatus={setStatusModal}/>
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