import { useNavigate } from 'react-router-dom'

import { 
    Container, 
    CardBody, 
    Content, 
    ButtonContainer, 
    Title, 
    Button, 
    TextContainer, 
    Text,
    Image,
} from './style'


interface OurHistoryProps{
    title: string
    image: string
    text: string
    color?: string
}

const OurHistory: React.FC<OurHistoryProps> = ({title, color, text, image}) => {
    const navigate = useNavigate()

    return (
        <Container>
            <Title titleColor={color}>
                {title}
            </Title>
                
            <CardBody>
                <Content>
                    <TextContainer>
                        <Text>{text}</Text>
                    </TextContainer>

                    <Image src={image} alt="Imagem com os membros da Serra Jr. Engenharia" />
                </Content>

                <ButtonContainer>
                    <Button 
                        onClick={() => {navigate("/quemsomos"); window.scrollTo(0, 0)}} 
                        buttonColor={color}>
                        Saiba Mais
                    </Button>
                </ButtonContainer> 
                
            </CardBody>
                
        </Container>
    )
}

export default OurHistory;