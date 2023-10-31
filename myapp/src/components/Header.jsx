import React from 'react'
import "../App.css";

function Header() {
    

  return (
    <div className='main' style={{backgroundColor: "red"}}>
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#products">Products</a>
            <a href="#contact">Contact</a>
        
    </div>
  )
}

export default Header