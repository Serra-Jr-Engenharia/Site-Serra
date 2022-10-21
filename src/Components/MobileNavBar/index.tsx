import React, { useState } from 'react'
import { Link } from "react-router-dom";

import { 
    LinkContainer,
    MobileMenu
} from './style';

interface MobileNavBar{
    status: boolean
}

const MobileNavBar: React.FC<MobileNavBar> = ({status}) =>{

    return(
        <MobileMenu activeStyle={status}>
            <LinkContainer>
                <Link to='/'>Home</Link>
            </LinkContainer>
            <LinkContainer>
                <Link to='/quemSomos'>Sobre Nós</Link>
            </LinkContainer>
            <LinkContainer>
                <Link to='/computacao'>Computação</Link>
            </LinkContainer>
            <LinkContainer>
                <Link to='/mecanica'>Mecânica</Link>
            </LinkContainer>
            <LinkContainer>
                <Link to='/contatos'>Contatos</Link>
            </LinkContainer>
        </MobileMenu>
    )
}
 
export default MobileNavBar
