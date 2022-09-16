import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

import { Route, Routes, BrowserRouter as Router } from "react-router-dom";

import FrontDesk from '../FrontDesk/FrontDesk'
import AboutUs from "../AboutUs/AboutUs";



const Layout = () =>{
    return(
        <>
            <Router>
                <Header></Header>
            
                <Routes>
                    <Route path="/" element={<FrontDesk />} />
                </Routes>
                <Routes>
                    <Route path="/quemSomos" element={<AboutUs />} />
                </Routes>
            
                <Footer></Footer>
            </Router>
        </>
    )
}

export default Layout