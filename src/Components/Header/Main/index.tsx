import React, { useEffect, useState } from 'react'
import LogoSerraJr from "../../../Assets/Global/LogoSiteSerraJr.svg"

import DesktopNavBar from '../Components/DesktopNavBar';
import MobileNavBar from '../Components/MobileNavBar';
import MenuButton from '../Components/MenuButton';


import { Link } from "react-router-dom";

import { 
    HeaderStyle, 
    HeaderImg,
    MenuButtonContainer,
} from './style';

const Header: React.FC = () =>{
    const [toggleMenu, setToggleMenu] = useState(false)
    
    return(
        <HeaderStyle>
            
            <Link to="/">
                <HeaderImg src={LogoSerraJr} alt="Logo Serra Jr" />
            </Link>

            <MenuButtonContainer onClick={() => {setToggleMenu(!toggleMenu)}}>
                <MenuButton status={toggleMenu}/>
            </MenuButtonContainer>
            
            <DesktopNavBar />

            <MobileNavBar status={toggleMenu} toogle={setToggleMenu}/>

        </HeaderStyle>
    )
}
 
export default Header
