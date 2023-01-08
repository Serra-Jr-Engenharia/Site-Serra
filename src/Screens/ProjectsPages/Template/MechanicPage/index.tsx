import React from "react"

import Carousel from "../../Components/Carousel"
import Banner from "../../Components/Banner"
import ServiceLetter from "../ServiceLetterMec"
import ContactButton from "../../Components/ContactButton"

import { mechanicData } from "../../../../Services/mechanicData"
import ScrollUp from "../../../../Assets/Global/arrow-up.svg"
import presentationImg from '../../../../Assets/MechanicPage/presentation-image.webp'

import {    
    Scroll,
    Line,
} from "./style";

import { Device } from "../../../../Config/Device"

const MechanicPage: React.FC = () =>{

    return (
            <>
                <Banner color={Device.Color.lightBlue} image={presentationImg} text="Engenharia Mecânica"/>

                <ServiceLetter />

                <Line />

                <ContactButton color={Device.Color.lightBlue}/>

                <Carousel carouselData={mechanicData.mechanicsProjects} />

                <Scroll onClick={() => window.scrollTo(0,0)} src={ScrollUp} alt="ScrollUp"/>

            </>
    )
}

export default MechanicPage