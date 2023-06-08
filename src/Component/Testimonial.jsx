import React, { Component } from "react";
import "../App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaQuoteLeft } from 'react-icons/fa';



const Testimonial = () => {
    var settings = {
        className: "",
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true
    };
    return (
        <div>
            <div className="container-fluid py-5">
                <div className="container">
                    <div className="text-center mx-auto mb-5" style={{ maxWidth: '500px' }}>
                        <h5 className="d-inline-block text-primary text-uppercase border-bottom border-5">Testimonial</h5>
                        <h1 className="display-4">Patients Say About Our Services</h1>
                    </div>
                    <div>
                        <Slider {...settings}>
                        <div className="testimonial-item text-center">
                            <div className="position-relative mb-5">
                                <img className="img-fluid rounded-circle mx-auto"
                                    src="img/295415423_5421034984673614_6824592586955095102_n.jpg" style={{width:'150px'}} alt=""/>
                                <div className="position-absolute top-100 start-50 translate-middle d-flex align-items-center justify-content-center bg-white rounded-circle"
                                    style={{width:'60px', height:'60px'}}>
                                    <FaQuoteLeft className="text-primary size"  />
                                </div>
                            </div>
                            <p className="fs-4 fw-normal">dr samir is one of the best doctors i have ever met ,
                                he's professional and his outstanding humor calmed me down during the operation ,
                                i am glad i have chosen dr samir to treat me ! and would undoubtedly recommend him to
                                other people</p>
                            <hr className="w-25 mx-auto" />
                            <h3>Patient Name</h3>
                            <h6 className="fw-normal text-primary mb-3">Momen I. Badr</h6>
                        </div>
                        <div className="testimonial-item text-center">
                            <div className="position-relative mb-5">
                                
                                <img className="img-fluid rounded-circle mx-auto" src="img/image2.jpg" style={{width:'150px'}} alt="" />
                                
                                <div className="position-absolute top-100 start-50 translate-middle d-flex align-items-center justify-content-center bg-white rounded-circle"
                                    style={{width: '60px', height: '60px'}} >
                                    <FaQuoteLeft className="text-primary size"  />
                                </div>
                            </div>
                            <div className="fs-4 fw-normal">
                            <div>
                                <p>شكرا جدا لفريق عمل</p>
                                <p>eye health network</p>
                                <p>علي حسن الاستضافة و التعامل و الخبره الرائعه و السعر المعقول و بالأخص الدكتور سمير
                                    عبدالرحمن بصراحه كنت متخوف جدا قبل التعامل معاهم لأني معرفهمش و رايحلهم من اسكندريه
                                    بس بعد التعامل معاهم انصح به كل الناس و ربنا يوفقهم ان شاء الله</p>
                            </div>
                            </div>
                            <hr className="w-25 mx-auto" />
                            <h3>Patient Name</h3>
                            <h6 className="fw-normal text-primary mb-3">Abdallah Abdelaziz Shaltout</h6>
                        </div>
                        <div className="testimonial-item text-center">
                            <div className="position-relative mb-5">
                                <img className="img-fluid rounded-circle mx-auto" src="img/image3.jpg"  style={{width:'150px'}} alt="" />
                                <div className="position-absolute top-100 start-50 translate-middle d-flex align-items-center justify-content-center bg-white rounded-circle"
                                    style={{width: '60px', height: '60px'}}>
                                    <FaQuoteLeft className="text-primary size"  />
                                </div>
                            </div>
                            <p className="fs-4 fw-normal">Elegant and top service eye center.</p>
                            <hr className="w-25 mx-auto" />
                            <h3>Patient Name</h3>
                            <h6 className="fw-normal text-primary mb-3">Doaa Sadek El Maghraby</h6>
                        </div>

                        </Slider>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Testimonial