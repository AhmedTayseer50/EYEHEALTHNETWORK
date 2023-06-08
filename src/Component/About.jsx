import React from 'react'
import Topbar from './Topbar'
import Navbar from './Navbar'
import About1 from './About1'

import "../App.css"
import Team from './Team'
import Footer from './Footer'


const About = () => {
  return (
    <div>
      <Topbar />
      <Navbar />
      <About1 />
      <Team/>
      <Footer />
    </div>
  )
}

export default About