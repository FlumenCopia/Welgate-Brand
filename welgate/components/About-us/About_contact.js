import React from 'react'

function About_contact() {
  return (
    <div>
        
            <section className="contact-form-area  ">
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
                                <form id="contact-form" action="inc/contact.php" className="contact-form" data-toggle="validator">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="form-grp">
                                                <label htmlFor="full-name">Full Name</label>
                                                <input type="text" id="full-name" placeholder="Enter your Name" required="required" data-error="Name is required."/>
                                                <div className="help-block with-errors"></div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-grp">
                                                <label htmlFor="email">Email Address</label>
                                                <input type="email" id="email" placeholder="Enter your email" required="required" data-error="Email is required."/>
                                                <div className="help-block with-errors"></div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <div className="form-grp">
                                        <label htmlFor="subject">Subject</label>
                                        <input name="subject" id="subject" placeholder="Enter subject" />
                                        <div className="help-block with-errors"></div>
                                    </div> */}
                                    <div className="form-grp">
                                        <label htmlFor="message">Message</label>
                                        <textarea name="message" id="message" placeholder="Enter message" required="required" data-error="Message is required."></textarea>
                                        <div className="help-block with-errors"></div>
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

export default About_contact