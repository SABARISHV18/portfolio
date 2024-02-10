import React from 'react'
import Projects from './Projects'
import Navbar from './Navbar'
import Home from './Home'
import About from './About'
import Skills from './Skills'
import Contact from './Contact'
const Portfolio = () => {
  return (
    <div className=' w-100'>
      <Navbar/>
      <Home/>
      <About/>
      <Skills/>
      <Projects/>
      <Contact/>
    </div>
  )
}

export default Portfolio
