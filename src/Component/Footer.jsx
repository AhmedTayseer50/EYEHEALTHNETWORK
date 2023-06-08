import React from 'react'
import "../App.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink } from 'react-router-dom'
import { FaAddressCard, FaWhatsapp, FaPhoneAlt, FaChevronRight, FaTwitter, FaFacebookF, FaLinkedinIn, FaInstagram } from 'react-icons/fa';


const Footer = () => {
    return (
        <div>
            <div className="container-fluid bg-dark text-light mt-5 py-5">
                <div className="container py-5">
                    <div className="row g-5">
                        <div className="col-lg-3 col-md-6">
                            <h4 className="d-inline-block text-primary text-uppercase border-bottom border-5 border-secondary mb-4">
                                Get In Touch</h4>
                            <p className="mb-4">No dolore ipsum accusam no lorem. Invidunt sed clita kasd clita et et dolor sed
                                dolor</p>
                            <p className="mb-2"><FaAddressCard className="text-primary me-3" /> 454 Al-Haram Street - Giza
                                Square - Next to Al-Tawheed Wal-Noor</p>
                            <p className="mb-2"><FaWhatsapp/>  +01006805902</p>
                            <p className="mb-0"> <FaPhoneAlt className="text-primary me-3"/>+01205999703</p>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <h4 className="d-inline-block text-primary text-uppercase border-bottom border-5 border-secondary mb-4">
                                Quick Links</h4>
                            <div className="d-flex flex-column justify-content-start">
                                <NavLink className="text-light mb-2" to="/">
                                  <FaChevronRight className=" me-2" /> Home</NavLink>
                                <NavLink className="text-light mb-2" to="/About"><FaChevronRight className=" me-2" />About Us</NavLink>
                                <NavLink className="text-light mb-2" to="/Service"><FaChevronRight className=" me-2" />Our
                                    Services</NavLink>
                                <NavLink className="text-light" to="/Contact"><FaChevronRight className=" me-2" />Contact Us</NavLink>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">

                        </div>
                        <div className="col-lg-3 col-md-6">

                            <h6 className="text-primary text-uppercase mt-4 mb-3">Follow Us</h6>
                            <div className="d-flex">
                                <NavLink className="btn btn-lg btn-primary btn-lg-square rounded-circle me-2 iconp" to=""><FaTwitter className='icons '/></NavLink>
                                <NavLink className="btn btn-lg btn-primary btn-lg-square rounded-circle me-2 iconp" to="https://www.facebook.com/eyehealthe/reviews"><FaFacebookF className='icons '/></NavLink>
                                <NavLink className="btn btn-lg btn-primary btn-lg-square rounded-circle me-2 iconp" to=""><FaLinkedinIn className='icons '/></NavLink>
                                <NavLink className="btn btn-lg btn-primary btn-lg-square rounded-circle iconp" to=""><FaInstagram className='icons '/></NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid bg-dark text-light border-top border-secondary py-4">
                <div className="container">
                    <div className="row g-5">
                        <div className="col-md-6 text-center text-md-start">
                            <p className="mb-md-0">&copy; <NavLink className="text-primary" to="/">EYE HEALTH NETWORK</NavLink>. All Rights Reserved.
                            </p>
                        </div>
                        <div className="col-md-6 text-center text-md-end">
                            <p className="mb-0">Designed by <NavLink className="text-primary" to="https://www.facebook.com/profile.php?id=100002127164080">Ahmed Tayseer</NavLink></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer