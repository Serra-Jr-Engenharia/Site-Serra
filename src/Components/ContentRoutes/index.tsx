import React from "react";
import Footer from "../Footer";
import Header from "../Header";

import { Route, Routes, BrowserRouter as Router } from "react-router-dom";

import FrontDesk from '../../pages/FrontDesk';
import AboutUs from "../../pages/AboutUs";
import Contact from "../../pages/Contact"
import MechanicPage from "../../pages/MechanicPage";
import CompPage from "../../pages/CompPage";



const ContentRoutes: React.FC = () =>{
    return(
        <>
            <Router basename="/Site-Serra">
                <Header></Header>
            
                <Routes>
                    <Route path="/" element={<FrontDesk />} />
                </Routes>
                <Routes>
                    <Route path="/computacao" element={<CompPage />} />
                </Routes>
                <Routes>
                    <Route path="/mecanica" element={<MechanicPage />} />
                </Routes>
                <Routes>
                    <Route path="/quemSomos" element={<AboutUs />} />
                </Routes>
                <Routes>
                    <Route path="/contatos" element={<Contact />} />
                </Routes>
            
                <Footer></Footer>
            </Router>
        </>
    )
}

export default ContentRoutes