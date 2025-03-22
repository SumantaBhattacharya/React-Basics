import React from 'react'
import Header from './Components/Header'
import Footer from './Components/Footer'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <>
      <Header/>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default Layout

/*

the pages which will be same for all the pages
like the header and the footer
we will put those in the layout component
and then we will import the layout component in the main component
and then we will put the routes in the main component.

*/
