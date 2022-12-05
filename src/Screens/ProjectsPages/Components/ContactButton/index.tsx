import React from "react"

import {    
    Button,
    Container,
} from "./style";

interface ContactButtonProps {
    color: string
}

import { useNavigate } from "react-router-dom"


const ContactButton: React.FC<ContactButtonProps> = ({color}) =>{

    const navigate = useNavigate()
    return (
        <Container>
            <Button color={color}
            onClick={() => {navigate('/contatos'); window.scrollTo(0, 0)}}
            >Quer colocar um projeto em prática? &rarr;</Button>
        </Container>
    )
}

export default ContactButton