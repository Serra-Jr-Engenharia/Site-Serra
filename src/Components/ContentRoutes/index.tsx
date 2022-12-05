import React from "react";
import Footer from "../Footer/Main"
import Header from "../Header/Main";

import { Route, Routes } from "react-router-dom";

import Home from '../../Screens/Home/Page';
import AboutUs from "../../Screens/AboutUs/Page";
import Contact from "../../Screens/Contact/Page"
import ProjectsPages from "../../Screens/ProjectsPages/Page";



const ContentRoutes: React.FC = () =>{
    return(
        <>
            <Header />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/computacao" element={<ProjectsPages type="comp" />} />
                <Route path="/mecanica" element={<ProjectsPages type="mech" />} />
                <Route path="/quemSomos" element={<AboutUs />} />
                <Route path="/contatos" element={<Contact />} />
            </Routes>

            <Footer />
        </>
    )
}

export default ContentRoutes