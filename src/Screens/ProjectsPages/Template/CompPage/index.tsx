import React from "react"

import Carousel from "../../Components/Carousel"
import { compData } from "../../../../Services/compData"
import Banner from "../../Components/Banner"
import ServiceLetterComp from "../ServiceLetterComp"
import ContactButton from "../../Components/ContactButton"

import presentationImg from "../../../../Assets/CompPage/presentation-image.webp"
import ScrollUp from "../../../../Assets/Global/arrow-up.svg"

import {
    Scroll,
    Line
} from "./style";

import { Device } from "../../../../Config/Device"


const CompPage: React.FC = () =>{
    return (
        <>
            <Banner color={Device.Color.orange} image={presentationImg} text="Engenharia da Computação" />

            <ServiceLetterComp />

            <Line />
            
            <ContactButton color={Device.Color.orange}/>
        
            <Carousel carouselData={compData.computingProjects} />

            <Scroll onClick={() => window.scrollTo(0,0)} src={ScrollUp} alt="ScrollUp"/>

        </>
    )
}

export default CompPage