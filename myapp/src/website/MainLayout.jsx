import React from 'react'
import Header from './Header'
import SideBar from './SideBar'
import Gallary from './Gallary'
import Footer from './Footer'
import "./Style.css";

function MainLayout() {
  return (
    <div >
        <Header />
        <div className='bodyContent'>
            <SideBar />
            <Gallary />
        </div>
       
        <Footer />
    </div>
  )
}

export default MainLayout