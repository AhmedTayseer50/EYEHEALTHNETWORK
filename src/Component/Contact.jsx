import React from 'react'
import "../App.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import Topbar from './Topbar';
import Navbar from './Navbar';
import Footer from './Footer';
import { FaLocationArrow, FaPhone, FaWhatsapp } from 'react-icons/fa';

const Contact = () => {
  return (
    <div>
      <Topbar />
      <Navbar />

      <div className="container-fluid pt-5">
        <div className="container">
          <div className="text-center mx-auto mb-5" style={{ maxWidth: '500px' }}>
            <h5 className="d-inline-block text-primary text-uppercase border-bottom border-5">Any Questions?</h5>
            <h1 className="display-4">Please Feel Free To Contact Us</h1>
          </div>
          <div className="row g-5 mb-5">
            <div className="col-lg-4">
              <div className="bg-light rounded d-flex flex-column align-items-center justify-content-center text-center"
                style={{ height: '200px' }}>
                <div className="d-flex align-items-center justify-content-center bg-primary rounded-circle mb-4"
                  style={{ width: '100px', height: '70px', transform: 'rotate(-15deg)' }}>
                  <FaLocationArrow className="text-white" size="2em" style={{ transform: 'rotate(15deg)' }} />                </div>
                <h6 className="mb-0">454 Al-Haram Street - Giza
                  Square - Next to Al-Tawheed Wal-Noor</h6>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="bg-light rounded d-flex flex-column align-items-center justify-content-center text-center"
                style={{ height: '200px' }}>
                <div className="d-flex align-items-center justify-content-center bg-primary rounded-circle mb-4"
                  style={{ width: '100px', height: '70px', transform: 'rotate(-15deg)' }}>
                  <FaPhone className="text-white" size="2em" style={{ transform: 'rotate(15deg)' }} />
                </div>
                <h6 className="mb-0">+012 059 99703</h6>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="bg-light rounded d-flex flex-column align-items-center justify-content-center text-center"
                style={{ height: '200px' }}>
                <a href="https://wa.me/+2001006805902">
                  <div className="d-flex align-items-center justify-content-center bg-primary rounded-circle mb-4"
                    style={{ width: '100px', height: '70px', transform: 'rotate(-15deg)' }}>
                    <FaWhatsapp className="text-white" size="2em" style={{ transform: 'rotate(15deg)' }} />
                  </div>
                </a>
                <h6 className="mb-0">01006805902</h6>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12" style={{ height: '500px' }}>
              <div className="position-relative h-100">

                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1221.4753786600097!2d31.208630413059918!3d30.01234567684603!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14584765a70bbfa5%3A0xa8a2cef422c74bdb!2z2K_Zg9iq2YjYsSDYs9mF2YrYsSDYudio2K_Yp9mE2LHYrdmF2YY!5e0!3m2!1sar!2seg!4v1686070610451!5m2!1sar!2seg"
                  width="100%" 
                  height="450" 
                  style={{ border: 0 }} 
                  allowFullScreen="" 
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade">
                  </iframe>
              </div>
            </div>
          </div>

        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Contact;