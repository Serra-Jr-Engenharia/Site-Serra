import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Contents from "../Contents/Contents";

import { BrowserRouter } from "react-router-dom";

import FrontDesk from '../FrontDesk/FrontDesk'



const Layout = () =>{
    return(
        <>
            <Header></Header>

            <FrontDesk />

            <Footer></Footer>
        </>
    )
}

export default Layout