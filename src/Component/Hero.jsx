import React from 'react'
import "../App.css"
import { NavLink } from 'react-router-dom'
 import 'bootstrap/dist/css/bootstrap.min.css';


const Hero = () => {
  return (
    <div>
    <div className="container-fluid bg-primary py-5 mb-5 hero-header">
        <div className="container py-5">
            <div className="row justify-content-start">
                <div className="col-lg-8 text-center text-lg-start">
                    <h5 className="d-inline-block text-primary text-uppercase border-bottom border-5"
                        style={{ borderColor: 'rgba(256, 256, 256, 0.3) !important' }}>Welcome To EYE HEALTH NETWORK</h5>
                    <h1 className="display-1 text-white mb-md-4">Best Healthcare You Will Get</h1>
                    <div className="pt-2">

                        <NavLink to="/Appointment" className="btn btn-outline-light rounded-pill py-md-3 px-md-5 mx-2">Make An
                            Appointment</NavLink>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Hero