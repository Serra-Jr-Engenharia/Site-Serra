import React, { useState } from 'react'
import ReactModal from 'react-modal'
import { width } from '../../Services/config';
import { ModalLine, ModalContainer, ModalList, ModalListLine, ModalP, ModalTitle, ModalCrossButton, ModalImg, ModalResume, ModalH2, ModalAnchor, ModalHeader, ModalAcess } from './style';

interface ObjectProps{
    title: string
    image: string
    content: string
    members: Array<string>
    opinions: Array<string>
    acess?: string
}

interface ModalProps {
    status: boolean
    setStatus: Function
    data: ObjectProps | undefined
}

ReactModal.setAppElement('#root');

const Modal: React.FC<ModalProps> = ({status, setStatus, data}) =>{

    const customStyles = {
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
          width: '60vw',
          height: '70vh',
          overflow: 'scroll',
          color: '#001830',
          paddingTop: 0
        },

        overlay: {
            backgroundColor: '#0000004f',
        }
      };

    if(data){
        return(
            <ReactModal
                isOpen={status}
                onRequestClose={() => setStatus(false)}
                contentLabel="Example Modal"
                style={customStyles}
            >
                <ModalContainer>
                    <ModalHeader>
                        <ModalTitle>    
                            <h1>{data.title}</h1>
                            <ModalCrossButton onClick={() => setStatus(false)}>X</ModalCrossButton>
                        </ModalTitle>

                        <ModalLine />
                    </ModalHeader>
                    
                    
                    

                    <ModalH2>Resumo do projeto</ModalH2>
                    <ModalResume>
                        <ModalImg src={data.image} alt={data.title} />
                        <ModalP>{data.content}</ModalP>
                    </ModalResume>
        
                    <ModalH2>Membros envolvidos</ModalH2>
                    <ModalList>
                        {data.members.map((eachMember, key) => <ModalListLine key={key}>{eachMember}</ModalListLine>)}
                    </ModalList>
        
                    <ModalH2>Depoimento de clientes</ModalH2>
                    {data.opinions.map((eachOpinion, key) => <ModalP key={key}>{eachOpinion}</ModalP>)}

                    {data.acess ?
                        <ModalAcess>
                            <ModalAnchor target="_blank" rel="noopener noreferrer" href={data.acess}>Acesse o projeto</ModalAnchor>
                        </ModalAcess>
                        :
                        null
                    }

                </ModalContainer>
            </ReactModal>
        )
    }
    else{
        return null
    }
}
 
export default Modal
