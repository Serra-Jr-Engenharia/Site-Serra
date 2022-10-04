import Footer from "../Footer";
import Header from "../Header";

import { Route, Routes, BrowserRouter as Router } from "react-router-dom";

import FrontDesk from '../Pages/FrontDesk'
import AboutUs from "../Pages/AboutUs";
import Contact from "../Pages/Contact"
import MechanicPage from "../Pages/MechanicPage";
import CompPage from "../Pages/CompPage";



const Content: React.FC = () =>{
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

export default Content