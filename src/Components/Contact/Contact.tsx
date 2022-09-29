import React from "react";


import Title from "../Title/Title";

import Agenda from "../../assets/Contactimgs/Agenda.png"; 
import Email from "../../assets/Contactimgs/Email.png"; 
import Localizacao from "../../assets/Contactimgs/Localizacao.png"; 
import Telefone from "../../assets/Contactimgs/Telefone.png"; 

import { Inform, Ag, Em, Local, Tel, Formul, Inps, All } from './ContactStyle';

const Contact: React.FC = () => {
    return(
        <>
            <div>
                <Title titleWidth="600px" text="Entre em contato conosco!" />  
            </div>
            <All>
                <Inform>
                    <Ag>
                        <img src={Agenda} alt="" />
                        <span>Rua Bonfim, 25 em Vila Amélia, </span>
                    </Ag>
                    <Em>
                        <img src={Email} alt="" />
                        <span>(22) 2533-2265</span>
                    </Em>
                    <Local>
                        <img src={Localizacao} alt="" />
                        <span>serrajr@iprj.uerj.br</span>
                    </Local>
                    <Tel>
                        <img src={Telefone} alt="" />
                        <span>Horário de atendimento: <br />
                        Segunda a Sexta, das 09hrs <br />
                        às 17hrs.</span>
                    </Tel>  
                    
                </Inform>

                <Formul>
                    <Inps>
                        <p>Nome</p>
                        <input type="text" placeholder="Insira seu nome"/>

                        <p>Email</p>
                        <input type="text" placeholder="Insira seu email"/>

                        <p>Telefone</p>
                        <input type="text" placeholder="(XX) XXXXX-XXXX"/>

                        <p>Assunto</p>
                        <input type="text"placeholder="Digite o assunto da mensagem"/>

                        <p>Mensagem</p>
                        <input type="text" className="mensagem" placeholder="Digite a mensagem"/>
                        <br />
                        <button>Enviar</button>
                    </Inps>
                </Formul>

            </All>
            
        </>
    );
}

export default Contact