import React, { useState } from 'react'
import LogoSerraJr from "../../Assets/Global/LogoSiteSerraJr.svg"

import ArrowHeader from "../../Assets/Global/arrow-header.svg"

import { 
    HeaderStyle, 
    HeaderUl,
    HeaderLi,
    HeaderUlContainer,
    SerraLogo,
    HeaderText,
    SubMenuContainer,
    SubMenuImg,
    SubMenuContainerFather,
    SubMenuContainerSon,
    SubMenuLine,
    LinkStyle,
    
} from './style';

import { Link } from "react-router-dom";

const Header: React.FC = () =>{

    const [subMenu, setSubMenu] = useState(false)

    return(
        <HeaderStyle>
            <SerraLogo>
                {/* trocar o link quando tiver a url */}
                <a href="/"><img src={LogoSerraJr} alt="Logo Serra Jr" /></a>
            </SerraLogo>
            

            <HeaderUlContainer>
                    <HeaderUl>
                        <HeaderLi>
                            <Link to='/'>Home</Link>
                        </HeaderLi>

                        <HeaderLi>
                            <Link to='/quemSomos'>Sobre Nós</Link>
                        </HeaderLi>

                        <HeaderLi>
                            <SubMenuContainer onClick={() => setSubMenu(!subMenu)}>
                                <SubMenuContainerFather>
                                    <HeaderText>Serviços</HeaderText>
                                    <SubMenuImg activeStyle={subMenu} src={ArrowHeader} alt="Seta" />
                                </SubMenuContainerFather>
                            
                                <SubMenuContainerSon activeStyle={subMenu}>
                                    <LinkStyle>
                                        <Link to='/computacao'>Computação</Link>
                                    </LinkStyle>
                                    <SubMenuLine color="white"/>
                                    <LinkStyle>
                                        <Link to='/mecanica'>Mecânica</Link>
                                    </LinkStyle>
                                </SubMenuContainerSon>
                            </SubMenuContainer>
                        </HeaderLi>
                        
                        <HeaderLi>
                            <Link to='/contatos'>Contato</Link>
                        </HeaderLi>
                    </HeaderUl>
            </HeaderUlContainer>
        </HeaderStyle>
    )
}
 
export default Header