import React from 'react'
import img1 from './assets/image1.jpg';
import './Home.css';
import Typewriter from 'typewriter-effect'
import { FiFacebook, FiGithub, FiInstagram, FiLinkedin } from "react-icons/fi";

const Home = () => {
  return (
    <div className='home1 max-vh-100'>
      <div className=''>
        <div className='home row  d-flex align-items-center justify-content-center flex-column-reverse flex-lg-row my-auto mx-auto ' id='section1' style={{ overflow: "hidden" }}>
          <div className='col-12 col-md-6 col-lg-6 col-sm-3 hometextpart text-white'>
            <div className='content'>
              <h3 className='welcome mb-3 mb-sm-3 mt-3 mt-sm-1'>HELLO, I'M <div className='loading'>
                <span>S</span> <span>A</span> <span>B</span> <span>A</span> <span>R</span> <span>I</span> <span>S</span> <span>H</span> <span style={{ marginLeft: "10px" }}> V</span></div></h3>
              <h1 className=' type mb-2 mb-sm-3'>
                <Typewriter
                  options={{
                    autoStart: true,
                    loop: true,
                    delay: 40,
                    strings: ["WEB DEVOLOPER😎 ", "ENTHUSIASTIC💪"]
                  }} />
              </h1>
              <p className='col-12 col-md-6 col-lg-6 col-sm-4 text-break text-sm-center text-lg-start'>Knock of building applications with front and back end operations</p>
              <div className='d-flex mb-1 mb-sm-1'>
                <a href='https://github.com/SABARISHV18' target='_blank' rel='noopener noreferrer' style={{ marginRight: '20px' }}>
                  <FiGithub size={30} color='white' strokeWidth={2.0} />
                </a>
                <a href='https://www.linkedin.com/in/sabarish-v-developer18/' target='_blank' rel='noopener noreferrer'>
                  <FiLinkedin size={30} color='white' strokeWidth={2.0} />
                </a>
              </div>
              <div className='m-5 m-sm-0'>
                <a href="https://sabarishv.vercel.app/Sabarish Resume.pdf" download="resume.pdf">
                  <button className='downloadcv'>downloadcv</button>
                </a>
                <a href='#projects'>
                  <button className='mywork'>mywork</button>
                </a>
              </div>
            </div>
          </div>
          <div className='col-12 col-md-6 col-lg-6 col-sm-9 image-container fade-in-zoom content'>
            <img src={img1} alt="Animated Image"></img>
          </div>
          <div>
            <video src="./bg.mp4" loop autoPlay muted className="w-auto" ></video>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home


