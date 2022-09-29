import LogoSerraJr from "../../assets/LogoSiteSerraJr.png"

import { HeaderStyle } from "./HeaderStyle";
import { Link } from "react-router-dom";

const Header = () =>{
    return(
        <HeaderStyle>
            <header className="header">

                <div className="logo">
                    {/* trocar o link quando tiver a url */}
                <a href="http://127.0.0.1:5173/"><img src={LogoSerraJr} alt="Logo Serra Jr" /></a>
                </div>
                

                <div className="header-ul-container">
                        <ul className="header-ul">
                            <li className="header-ul-li">
                                <Link to='/'>Home</Link>
                            </li>
                            <li className="header-ul-li">
                                <Link to='/computacao'>Computação</Link>
                            </li>
                            <li className="header-ul-li">
                                <Link to='/quemSomos'>Sobre Nós</Link>
                            </li>
                            <li className="header-ul-li">
                                <Link to='/contatos'>Contato</Link>
                            </li>
                        </ul>
                </div>
                
            </header>
        </HeaderStyle>
    )
}
 
export default Header