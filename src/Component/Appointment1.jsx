import React, { useRef } from 'react';
import "../App.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import emailjs from 'emailjs-com';

const Appointment = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_bbvwfcl', 'template_p4x1uzu', form.current, '3xqXYuxvLSkcchfxU')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  }



  
  return (
    <div >
      <div className="container-fluid bg-info my-5 py-5 ">
        <div className="container py-5">
          <div className="row gx-5">
            <div className="col-lg-6 mb-5 mb-lg-0">
              <div className="mb-4">
                <h5 className="d-inline-block text-white text-uppercase border-bottom border-5">Appointment</h5>
                <h1 className="display-4">Make An Appointment For Your Family</h1>
              </div>
              <p className="text-white mb-5">Eirmod sed tempor lorem ut dolores. Aliquyam sit sadipscing kasd ipsum.
                Dolor ea et dolore et at sea ea at dolor, justo ipsum duo rebum sea invidunt voluptua. Eos vero
                eos vero ea et dolore eirmod et. Dolores diam duo invidunt lorem. Elitr ut dolores magna sit.
                Sea dolore sanctus sed et. Takimata takimata sanctus sed.</p>

            </div>
            <div className="col-lg-6">
              <div className="bg-white text-center rounded p-5">
                <h1 className="mb-4">Book An Appointment</h1>
                <form ref={form} onSubmit={sendEmail}>
                  <div className="row g-3">
                    <div className="col-12 col-sm-6">
                      <input type="text" className="form-control bg-light border-0" name="from_name" 
                        style={{ height: '55px' }}  placeholder='Your Name' />
                    </div>
                    <div  className="col-12 col-sm-6">
                      <input type="text"  className="form-control bg-light border-0" name="phone"
                        placeholder="Your Phone" style= {{height: '55px'}}  />
                    </div>
                    <div className="col-12 col-sm-6">
                      <select name='Dr_name' className="form-select bg-light border-0" style= {{height: '55px'}} >
                        <option disabled>Select Doctor</option>
                        <option value="Samer">Samer</option>
                        <option value="Amera">Amera</option>
                      </select>
                    </div>


                    <div  className="col-12 col-sm-6">
                      <select name='Date' className="form-select bg-light border-0" style= {{height: '55px'}} >
                        <option disabled>Select Date</option>
                        <option value="startday from 12pm to 2pm">startday from 12pm to 2pm</option>
                        <option value="sunday from 6pm to 8pm">sunday from 6pm to 8pm</option>
                        <option value="tusday from 12pm to 2pm">tusday from 12pm to 2pm</option>
                      </select>
                    </div>
                    <div className="col-12">
                        <input className="btn btn-primary w-100 py-3" type="submit" value="Make An Appointment" />
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Appointment