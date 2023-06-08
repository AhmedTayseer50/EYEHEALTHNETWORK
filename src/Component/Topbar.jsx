import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaPhoneAlt, FaWhatsapp, FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaYoutube } from 'react-icons/fa';
import "../App.css"
import { NavLink } from 'react-router-dom'


const Topbar = () => {
    return (
        <div>
            <div className="container-fluid py-2 border-bottom d-none d-lg-block">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 text-center text-lg-start mb-2 mb-lg-0">
                            <div className="d-inline-flex align-items-center">
                                <NavLink className="text-decoration-none text-body pe-3" to="/Contact">
                                    
                                    <FaPhoneAlt />
                                    +01205999703
                                </NavLink>
                                <span className="text-body">|</span>
                                <NavLink className="text-decoration-none text-body px-3" to="/Contact">
                                    <FaWhatsapp />
                                    +01006805902
                                </NavLink>
                            </div>
                        </div>
                        <div className="col-md-6 text-center text-lg-end">
                            <div className="d-inline-flex align-items-center">
                                <NavLink className="text-body px-2" to="https://www.facebook.com/eyehealthe/reviews">
                                    <FaFacebookF/>
                                </NavLink>
                                <NavLink className="text-body px-2" to="">
                                    <FaTwitter/>
                                </NavLink>
                                <NavLink className="text-body px-2" to="">
                                    <FaLinkedinIn />
                                </NavLink>
                                <NavLink className="text-body px-2" to="">
                                    <FaInstagram />
                                </NavLink>
                                <NavLink className="text-body ps-2" to="">
                                    <FaYoutube />
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Topbar