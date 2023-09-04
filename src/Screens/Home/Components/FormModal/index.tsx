import React, { useState } from 'react'
import { CloseIcon, Container, Description, Modal, Title } from './style'


const FormModal: React.FC = () =>{
    const [isModalOpened, setIsModalOpened] = useState(true)

    return(
        <Container opened={isModalOpened}>
            <Modal>
            <CloseIcon onClick={() => setIsModalOpened(false)}>&#x2716;</CloseIcon>
            <Title>Queremos a sua opinião!</Title>

            <Description>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem dicta earum vitae. Debitis obcaecati sapiente ipsa! Maiores magni suscipit voluptatum animi odio ex odit nostrum. Odio aperiam tenetur vero a!
            </Description>
            </Modal>           
        </Container>
    )
}

export default FormModal