import React from 'react'
import "../App.css"
 import 'bootstrap/dist/css/bootstrap.min.css';

const About = () => {
  return (
    <div>
    <div className="container-fluid py-5">
        <div className="container">
            <div className="row gx-5">
                <div className="col-lg-5 mb-5 mb-lg-0" style={{ minHeight: '500px' }}>
                    <div className="position-relative h-100">
                        <img className="position-absolute w-100 h-100 rounded" src="img/about.jpg"
                            style={{objectFit:'cover' }}/>
                    </div>
                </div>
                <div className="col-lg-7">
                    <div className="mb-4">
                        <h5 className="d-inline-block text-primary text-uppercase border-bottom border-5">About Us</h5>
                        <h1 className="display-4">Best Medical Care For Yourself and Your Family</h1>
                    </div>
                    <p>Tempor erat elitr at rebum at at clita aliquyam consetetur. Diam dolor diam ipsum et, tempor
                        voluptua sit consetetur sit. Aliquyam diam amet diam et eos sadipscing labore. Clita erat ipsum
                        et lorem et sit, sed stet no labore lorem sit. Sanctus clita duo justo et tempor consetetur
                        takimata eirmod, dolores takimata consetetur invidunt magna dolores aliquyam dolores dolore.
                        Amet erat amet et magna</p>

                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default About