import React from 'react'
import "../App.css"
import Navbar from './Navbar'
import Hero from './Hero'
import About1 from './About1'
import Appointment1 from './Appointment1'
import Team from './Team'
import Testimonial from './Testimonial'
import Footer from './Footer'
import Topbar from './Topbar'

const Home = () => {
  return (
    <div>
      <Topbar/>
        <Navbar />
        <Hero />
        <About1 />
        <Appointment1/>
        <Team/>
        <Testimonial />
        <Footer />
    </div>
  )
}

export default Home