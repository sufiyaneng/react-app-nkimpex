import React from 'react'
import {Outlet} from 'react-router-dom'
import Footer from '../Footer/Footer'
import Home from '../Home/Home'
import NavBar from '../NavBar/NavBar'
import Portfolio from '../Portfolio/Portfolio'

export default function Layout() {
  return (
    <>
    <NavBar/>
    <Outlet></Outlet>
    <Footer/>
    
    </>
  )
}
