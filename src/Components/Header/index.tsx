import LogoSerraJr from "../../assets/LogoSiteSerraJr.svg"

import { 
    HeaderStyle, 
    HeaderUl,
    HeaderLi,
    HeaderUlContainer,
    SerraLogo,
    // Arrow, 
    
} from "./style";

import { Link } from "react-router-dom";

const Header: React.FC = () =>{
    return(
        <HeaderStyle>
            <SerraLogo>
                {/* trocar o link quando tiver a url */}
                <a href="http://127.0.0.1:5173/"><img src={LogoSerraJr} alt="Logo Serra Jr" /></a>
            </SerraLogo>
            

            <HeaderUlContainer>
                    <HeaderUl>
                        <HeaderLi>
                            <Link to='/'>Home</Link>
                        </HeaderLi>
                        <HeaderLi>
                            <Link to='/computacao'>Computação</Link>
                        </HeaderLi>
                        <HeaderLi>
                            <Link to='/mecanica'>Mecânica</Link>
                        </HeaderLi>
                        <HeaderLi>
                            <Link to='/quemSomos'>Sobre Nós</Link>
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