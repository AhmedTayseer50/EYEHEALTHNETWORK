
import React from 'react';
import "../App.css";
import 'bootstrap/dist/css/bootstrap.min.css';

import { FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import { NavLink } from 'react-router-dom'





const Team = () => {
    return (
        <div>
            <div className=" ">
                <div>
                    <div className="text-center mx-auto mb-5" style={{ maxWidth: '500px' }}>
                        <h5 className="d-inline-block text-primary text-uppercase border-bottom border-5">Our Doctors</h5>
                        <h1 className="display-4">Qualified Healthcare Professionals</h1>
                    </div>
                    <Carousel>
                        <Carousel.Item>
                            <Card style={{ width: '18rem' }} className='center'>
                                <Card.Img variant="top" src="img/team-1.jpg" />
                                <Card.Body>
                                    <Card.Title className='card_title'>Dr_Name</Card.Title>
                                    <Card.Text>
                                        Dolor lorem eos dolor duo eirmod sea. Dolor sit magna rebum clita rebum
                                        dolor

                                    </Card.Text>
                                    <div className='iconssss'>
                                        <NavLink className="btn iconp btn-lg btn-primary btn-lg-square rounded-circle me-3" href="#">
                                            <FaTwitter className='icons' />
                                        </NavLink>
                                        <NavLink className="btn iconp btn-lg btn-primary btn-lg-square rounded-circle me-3" href="#">
                                            <FaFacebookF className='icons' />
                                        </NavLink>
                                        <NavLink className="btn iconp btn-lg btn-primary btn-lg-square rounded-circle" href="#">
                                            <FaLinkedinIn className='icons' />
                                        </NavLink>
                                    </div>
                                </Card.Body>
                            </Card>

                        </Carousel.Item>
                        
                        <Carousel.Item>
                            <Card style={{ width: '18rem' }} className='center' >
                                <Card.Img variant="top" src="img/team-2.jpg" />
                                <Card.Body>
                                    <Card.Title className='card_title'>Dr_Name</Card.Title>
                                    <Card.Text>
                                        Dolor lorem eos dolor duo eirmod sea. Dolor sit magna rebum clita rebum
                                        dolor
                                    </Card.Text>
                                    <div className='iconssss'>
                                        <NavLink className="btn iconp btn-lg btn-primary btn-lg-square rounded-circle me-3" href="#">
                                            <FaTwitter className='icons' />
                                        </NavLink>
                                        <NavLink className="btn iconp btn-lg btn-primary btn-lg-square rounded-circle me-3" href="#">
                                            <FaFacebookF className='icons' />
                                        </NavLink>
                                        <NavLink className="btn iconp btn-lg btn-primary btn-lg-square rounded-circle" href="#">
                                            <FaLinkedinIn className='icons' />
                                        </NavLink>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Carousel.Item>
                        <Carousel.Item>
                            <Card style={{ width: '18rem' }} className='center'>
                                <Card.Img variant="top" src="img/team-3.jpg" />
                                <Card.Body>
                                    <Card.Title className='card_title'>Dr_Name</Card.Title>
                                    <Card.Text>
                                        Dolor lorem eos dolor duo eirmod sea. Dolor sit magna rebum clita rebum
                                        dolor

                                    </Card.Text>
                                    <div className='iconssss'>
                                        <NavLink className="btn iconp btn-lg btn-primary btn-lg-square rounded-circle me-3" href="#">
                                            <FaTwitter className='icons' />
                                        </NavLink>
                                        <NavLink className="btn iconp btn-lg btn-primary btn-lg-square rounded-circle me-3" href="#">
                                            <FaFacebookF className='icons' />
                                        </NavLink>
                                        <NavLink className="btn iconp btn-lg btn-primary btn-lg-square rounded-circle" href="#">
                                            <FaLinkedinIn className='icons' />
                                        </NavLink>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Carousel.Item>
                    </Carousel>
                </div>
            </div>
        </div>
    );
};

export default Team;





