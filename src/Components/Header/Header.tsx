
import React from "react";
import "./Header.css"
import LogoSerraJr from "../../assets/LogoSiteSerraJr.png"
import ArrowServices from "../../assets/seta.png"


import { BrowserRouter as Router, Routes, Link, Route } from "react-router-dom";
import Home from "../Pages/Home/Home";
import QuemSomos from "../Pages/QuemSomos/QuemSomos";
import Computacao from "../Pages/Computacao/Computacao";
import Mecanica from "../Pages/Mecanica/Mecanica";
import Contatos from "../Pages/Contatos/Contatos";

const Header = () =>{
    return(
        <>
            <header className="header">

                <div className="logo">
                    <img src={LogoSerraJr} alt="Logo Serra Jr" />
                </div>
                

            <div className="header-ul-container">
                <Router>
                    <ul className="header-ul">
                        <li>
                            <Link to='/'>Home</Link>
                        </li>
                        <li>
                            <Link to='/quemSomos'>Sobre nós</Link>
                        </li>
                        <li>
                            <Link to='/computacao'>Serviços </Link>
                            {/* <img className="Arrow" src={ArrowServices}/>  */}
                        </li>
                        <li>
                            <Link to='/contatos'>Contato</Link>
                        </li>
                    </ul>
                    


                    <Routes>
                        <Route path="/" element={<Home />}>

                        </Route>

                        <Route path="/quemSomos" element={<QuemSomos />}>

                        </Route>


                        <Route path="/contatos" element={<Contatos />}>

                        </Route>
                    </Routes>
                </Router>
            </div>
                
            </header>
        </>
    )
}
 
export default Header