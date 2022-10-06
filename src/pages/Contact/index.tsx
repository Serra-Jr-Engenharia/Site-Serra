import React from "react";
import Title from "../../components/Title";

import ScheduleIMG from "../../assets/ContactAssets/agenda.svg"; 
import Email from "../../assets/ContactAssets/email.svg"; 
import Localization from "../../assets/ContactAssets/localizacao.svg"; 
import Phone from "../../assets/ContactAssets/telefone.svg"; 

import { Information,
     Schedule, 
     EmailStyle, 
     Local, 
     Telephone, 
     Form, 
     Inputs, 
     All, 
     InputsP, 
     InputArea, 
     Button,
     InputAreaMensage,
     InformationImg,
     InformationSpan
} from './style';


const Contact: React.FC = () => {
    return(
        <>
            <Title titleWidth="40%" text="Entre em contato conosco!" />  
            <All>
                <Information>
                    <Schedule>
                        <InformationImg src={Localization} alt="" />
                        <InformationSpan>Rua Bonfim, 25 em Vila Amélia, </InformationSpan>
                    </Schedule>
                    <EmailStyle>
                        <InformationImg src={Phone} alt="" />
                        <InformationSpan>(22) 2533-2265</InformationSpan>
                    </EmailStyle>
                    <Local>
                        <InformationImg src={Email} alt="" />
                        <InformationSpan>serrajr@iprj.uerj.br</InformationSpan>
                    </Local>
                    <Telephone>
                        <InformationImg src={ScheduleIMG} alt="" />
                        <InformationSpan>Horário de atendimento: <br />
                        Segunda a Sexta, das 09hrs <br />
                        às 17hrs.</InformationSpan>
                    </Telephone>  
                    
                </Information>

                <Form>
                    <Inputs>
                        <InputsP>Nome</InputsP>
                        <InputArea type="text" placeholder="Insira seu nome"/>

                        <InputsP>Email</InputsP>
                        <InputArea type="text" placeholder="Insira seu email"/>

                        <InputsP>Telefone</InputsP>
                        <InputArea type="text" placeholder="(XX) XXXXX-XXXX"/>

                        <InputsP>Assunto</InputsP>
                        <InputArea type="text" placeholder="Digite o assunto da mensagem"/>

                        <InputsP>Mensagem</InputsP>
                        <InputAreaMensage type="text" placeholder="Digite a mensagem"/>

                        <Button>Enviar</Button>
                    </Inputs>
                </Form>

            </All>
            
        </>
    );
}

export default Contact