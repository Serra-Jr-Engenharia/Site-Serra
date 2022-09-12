import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

const Layout = props =>{
    return(
        <>
            <Header></Header>
            
                {props.children}
        
            <Footer></Footer>
        </>
    )
}

export default Layout