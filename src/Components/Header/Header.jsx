
import React from "react";
import "./Header.css"
import LogoSerraJr from "../../assets/LogoSiteSerraJr.png"
import ArrowServices from "../../assets/seta.png"

const Header = (props) =>{
    return(
        <>
            <header className="header">

                <div className="logo">
                    <img src={LogoSerraJr} alt="Logo Serra Jr" />
                </div>
                

            <div className="header-ul-container">
                <ul className="header-ul">
                    <li>Home</li>
                    <li>Sobre nós</li>
                    <li>Serviços<img className="Arrow" src={ArrowServices}/> </li>
                    <li>Contato</li>
                </ul>
            </div>
                
            </header>
        </>
    )
}
 
export default Header