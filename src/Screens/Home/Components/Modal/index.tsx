import React, { useState } from 'react'
import ReactModal from 'react-modal'
import { ModalLine, ModalContainer, ModalTitle, ModalCrossButton, ModalH2, ModalHeader, ModalP, ModalButton } from './style';


interface ModalProps {
    status: boolean
    setStatus: Function
}

ReactModal.setAppElement('#root');

const Modal: React.FC<ModalProps> = ({status, setStatus}) =>{

    const customStyles = {
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
          width: 'max-content',
          height: 'max-content',
          color: '#001830',
          paddingTop: 0,
        },

        overlay: {
            backgroundColor: '#00000028',
        }
      };
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
                        <ModalH2>Queremos sua opinião!</ModalH2>
                        <ModalCrossButton onClick={() => setStatus(false)}>X</ModalCrossButton>
                    </ModalTitle>
                    <ModalLine />
                </ModalHeader>
                
                <ModalP>
                    Lorem ipsum dolor sit amet. Vel veniam officiis quo molestiae veniam qui nobis unde qui optio laborum est ducimus tempore qui totam culpa. Ex velit magni eum eaque reiciendis qui eaque delectus ut molestiae obcaecati. Et totam ipsa 33 corrupti accusamus in harum delectus est autem minus aut nostrum iste et praesentium voluptatem.
                    Est necessitatibus ducimus sit voluptatem soluta qui facere mollitia hic recusandae dolor. Ut necessitatibus porro in facere dolor non alias possimus ut adipisci minus!
                </ModalP>
                
                <ModalButton>Acessar Enquete</ModalButton>

            </ModalContainer>
        </ReactModal>
    )
}
 
export default Modal
