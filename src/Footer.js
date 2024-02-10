import React from 'react'
import { FiArrowUp, FiMail, FiPhone } from "react-icons/fi";
import './Footer.css';
const Footer = () => {
  return (
    <div>
      <div className='p-3 text-center bg-dark text-white'>
        <p style={{ fontSize: '0.8rem' }}> <FiMail size={20} color='white' strokeWidth={2.0} /> sabarishofficial2004@gmail.com</p>
        <p style={{ fontSize: '0.8rem' }}> <FiPhone size={20} color='white' strokeWidth={2.0} /> +91 9789141147</p>
        <p className='mt-4'>@ Sabarish V, All rights reserved</p>
        <div className='arrow ' style={{ display: 'flex', alignContent: "end", justifyContent: "end", marginTop: "-50px" }}>
          <a href='#section1'><FiArrowUp size={30} color='white' strokeWidth={2.0} /></a>
        </div>
      </div>
    </div>
  )
}

export default Footer
