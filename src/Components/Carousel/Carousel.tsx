import { CarouselStyle } from "./CarouselStyle"
import Slider from 'react-slick'
import imagem from '../../assets/FrontDeskAssets/nossa-historia.png'

const Carousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <CarouselStyle>
            <Slider {...settings}>
                <img src={imagem} />
            </Slider>
        </CarouselStyle>
    )
}

export default Carousel