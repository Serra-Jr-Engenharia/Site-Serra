import React from 'react'

import Banner from '../Components/Banner'
import HomeCards from '../Template/HomeCards'

import { Content } from './style'


const Home: React.FC = () =>{
    return(
        <>
            <Banner />

            <Content>
                <HomeCards />
            </Content>
        </>    
    )
}

export default Home