import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Herosection from '../../components/Herosection/Herosection'
import Dc from '../Dc/Dc'
import Bgv from '../Bgv/Bgv'
import Footer from '../../components/Footer/Footer'
import { Link } from 'react-router-dom'


const Home = () => {
  return (
    <div className='home'>
        <Navbar/>
        <Herosection/>
        <Dc/>
        <Bgv/>
        <Footer/>
        
        
    </div>
  )
}

export default Home