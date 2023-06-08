import React from 'react'
import Topbar from './Topbar'
import Navbar from './Navbar'
import Footer from './Footer'
import Appointment1 from './Appointment1'
import Services1 from './Services1'

import Testimonial from './Testimonial'


const Service = () => {
  return (
    <div>
      <Topbar />
      <Navbar />
      <Services1 />
      <Appointment1 />
      <Testimonial />
      <Footer />
    </div>
  )
}

export default Service