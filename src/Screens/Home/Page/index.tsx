import React from 'react'

import Banner from '../Components/Banner'
import CardList from '../Template/HomeCards'

import { Content } from './style'


const Home: React.FC = () =>{
    return(
        <>
            <Banner />

            <Content>
                <CardList />
            </Content>
        </>    
    )
}

export default Home