'use client'
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import axios from 'axios'
function Contact() {


 const router = useRouter(); 
  const [errors, setErrors] = useState({});


  const [datas, setdatas] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setdatas({
      ...datas,
      [e.target.name]: e.target.value
    });
  };

  const fetchdata = async (e) => {
    e.preventDefault();
    setErrors({});
    try {
      const response = await axios.post('https://welgatelifestyle.com/api/contact/', datas);
      router.push('/');
    } catch (e) {
      if (e.response && e.response.data && e.response.data.errors) {
        setErrors(e.response.data.errors);
      } else {
        alert('Something went wrong.');
      }
    }
  };




  return (
    <div>
       
       
       
          
       
        
            <section className="contact-form-area ">
                <div className="container ">
                    <div className="row justify-content-center">
                        {/* <div className="col-xl-6">
                            <div id="contact-map">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3945.7566570248623!2d76.9485522744944!3d8.522990496705464!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b05bbd9b29ca807%3A0x301e4cecff5acc14!2sWelgate%20Lifestyle!5e0!3m2!1sen!2sin!4v1746622118586!5m2!1sen!2sin" allowFullScreen loading="lazy"></iframe>
                            </div>
                        </div> */}
                        <div className="col-xl-9">
                            <div className="contact-form-wrap">
                                <div className="section-title mb-50">
                                    {/* <p className="sub-title">.. request make ..</p> */}
                                    <p className="title pfont2">Contact Us</p>
                                </div>
                                <form id="submit-form" onSubmit={fetchdata}  className="contact-form" >
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="form-grp">
                                                <label htmlFor="full-name">Full Name</label>
                                                <input name="name" type="text" value={datas.name} onChange={handleChange} id="full-name" placeholder="Enter here" />
                                                {errors.name && <small className="text-danger">{errors.name}</small>}
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-grp">
                                                <label htmlFor="email">Email Address</label>
                                                <input name="email" value={datas.email} onChange={handleChange}  type="email" id="email" placeholder="Enter here" />
                                                {errors.email && <small className="text-danger">{errors.email}</small>}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                           <div className="form-grp">
                                            <label htmlFor="subject">Subject</label>
                                            <input name="subject" value={datas.subject} onChange={handleChange} id="subject" placeholder="Enter subject" />
                                            {errors.subject && <small className="text-danger">{errors.subject}</small>}
                                           </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-grp">
                                                <label htmlFor="phone">Phone Number</label>
                                                <input name="phone" value={datas.phone} onChange={handleChange} type="number" id="phone" placeholder="Enter number" />
                                                {errors.phone && <small className="text-danger">{errors.phone}</small>}
                                            </div>
                                        </div>
                                    </div>
                                    
                                    
                                    <div className="form-grp">
                                        <label htmlFor="message">Message</label>
                                        <textarea name="message" value={datas.message} onChange={handleChange} id="message" placeholder="Enter message" ></textarea>
                                        {errors.message && <small className="text-danger">{errors.message}</small>}
                                    </div>
                                    <div className="form-btn">
                                        <button type="submit" className="tg-btn">Send Message</button>
                                    </div>
                                    <div className="messages"></div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
    </div>
  )
}

export default Contact