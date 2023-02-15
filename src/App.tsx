import React from 'react'

import { BrowserRouter as Router } from 'react-router-dom'
import { Route, Routes } from "react-router-dom";

import Header from './Components/Header/Main';
import Footer from './Components/Footer/Main';
import Home from './Screens/Home/Page';
import AboutUs from './Screens/AboutUs/Page';
import Contact from './Screens/Contact/Page';
import ProjectsPages from './Screens/ProjectsPages/Page';

function App() {
  return (
    <div className='App'>
      <Router basename="">
        <Header />

        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/computacao" element={<ProjectsPages type="comp" />} />
            <Route path="/mecanica" element={<ProjectsPages type="mech" />} />
            <Route path="/quemSomos" element={<AboutUs />} />
            <Route path="/contatos" element={<Contact />} />
        </Routes>

        <Footer /> 
      </Router> 
    </div>
  )
}

export default App
