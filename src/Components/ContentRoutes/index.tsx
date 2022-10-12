import React from "react";
import Footer from "../Footer"
import Header from "../Header";

import { Route, Routes } from "react-router-dom";

import FrontDesk from '../../Screens/FrontDesk/Page';
import AboutUs from "../../Screens/AboutUs/Page";
import Contact from "../../Screens/Contact/Page"
import MechanicPage from "../../Screens/MechanicPage/Page";
import CompPage from "../../Screens/CompPage/Page";



const ContentRoutes: React.FC = () =>{
    return(
        <>
            <Header />

            <Routes>
                <Route path="/" element={<FrontDesk />} />
                <Route path="/computacao" element={<CompPage />} />
                <Route path="/mecanica" element={<MechanicPage />} />
                <Route path="/quemSomos" element={<AboutUs />} />
                <Route path="/contatos" element={<Contact />} />
            </Routes>

            <Footer />
        </>
    )
}

export default ContentRoutes