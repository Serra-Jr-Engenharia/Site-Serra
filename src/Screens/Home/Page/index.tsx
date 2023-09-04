import React from 'react'

import Banner from '../Components/Banner'
import HomeCards from '../Template/HomeCards'
import FormModal from '../Components/FormModal/index'

import { Content } from './style'



const Home: React.FC = () =>{
    return(
        <>
            <FormModal />
            
            <Banner />

            <Content>
                <HomeCards />
            </Content>
            
        </>    
    )
}

export default Home