import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import { Outlet } from 'react-router-dom'
import './Home.scss'
const Home = () => {
  return (
    <div className='home'>
    <Header/>
    <Outlet></Outlet>
    <Footer/>
    </div>
  )
}

export default Home