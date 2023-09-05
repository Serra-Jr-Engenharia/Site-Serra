import React from 'react'
import { useState, useEffect } from "react";
import Banner from '../Components/Banner'
import HomeCards from '../Template/HomeCards'
import Modal from  '../Components/Modal'
import { Content } from './style'

const Home: React.FC = () =>{

    const [statusModal, setStatusModal] = useState(false)

    useEffect(() => {
        setStatusModal(true);
    }, []);
      
    
    return(
        <>
            <Modal status={statusModal} setStatus={setStatusModal}/>
            <Banner />
            <Content>
                <HomeCards />
            </Content>
        </>    
    )
}

export default Home