import React from 'react'
import "../App.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import Topbar from './Topbar';
import Navbar from './Navbar'
import Appointment1 from './Appointment1'
import Footer from './Footer';


const Appointment = () => {
  return (
    <div>
        <Topbar />
        <Navbar />
        <Appointment1 />
        <Footer />
    </div>
  )
}

export default Appointment