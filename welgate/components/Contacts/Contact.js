import React from 'react'

function Contact() {
  return (
    <div>
       
        <section className="breadcrumbbanner">
            <nav className="container breadcrumb-container">
                <h3 className='breadcrumbstyle'>Contact</h3>
                <ol className="cd-breadcrumb">
                  <li><a href="/">Home</a></li>
                  <li className="current text-success">Contact</li>
                </ol>
              </nav>
        </section>
       
          
       
        
            <section className="contact-form-area">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6">
                            <div id="contact-map">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3945.7566570248623!2d76.9485522744944!3d8.522990496705464!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b05bbd9b29ca807%3A0x301e4cecff5acc14!2sWelgate%20Lifestyle!5e0!3m2!1sen!2sin!4v1746622118586!5m2!1sen!2sin" allowFullScreen loading="lazy"></iframe>
                            </div>
                        </div>
                        <div className="col-xl-6">
                            <div className="contact-form-wrap">
                                <div className="section-title mb-50">
                                    {/* <p className="sub-title">.. request make ..</p> */}
                                    <p className="title pfont2">Connect With Us</p>
                                </div>
                                <form id="contact-form" action="inc/contact.php" className="contact-form" data-toggle="validator">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="form-grp">
                                                <label htmlFor="full-name">Full Name</label>
                                                <input type="text" id="full-name" placeholder="Enter here" required="required" data-error="Name is required."/>
                                                <div className="help-block with-errors"></div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-grp">
                                                <label htmlFor="email">Email Address</label>
                                                <input type="email" id="email" placeholder="Enter here" required="required" data-error="Email is required."/>
                                                <div className="help-block with-errors"></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-grp">
                                        <label htmlFor="subject">Subject</label>
                                        <input name="subject" id="subject" placeholder="Enter subject" />
                                        <div className="help-block with-errors"></div>
                                    </div>
                                    <div className="form-grp">
                                        <label htmlFor="message">Message</label>
                                        <textarea name="message" id="message" placeholder="Enter message" required="required" data-error="Message is required."></textarea>
                                        <div className="help-block with-errors"></div>
                                    </div>
                                    <div className="form-btn">
                                        <button type="submit" className="btn">make request</button>
                                    </div>
                                    <div className="messages"></div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="contact-area">
                <div className="container">
                    <div className="contact-box-wrapper">
                        <div className="row justify-content-center">
                            <div className="col-lg-4 col-md-6 col-sm-9">
                                <div className="contact-box">
                                    <div className="contact-icon">
                                        <span className="overlay-icon"><i className="fas fa-check"></i></span>
                                        <i className="far fa-map"></i>
                                    </div>
                                    <div className="contact-content">
                                        <h5 className="title">Our Address</h5>
                                        <p className="contact-desc">Pattom Kowdiar Road, Kowdiar, Thiruvananthapuram - 695003</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-9">
                                <div className="contact-box">
                                    <div className="contact-icon">
                                        <span className="overlay-icon"><i className="fas fa-check"></i></span>
                                        <i className="fas fa-phone"></i>
                                    </div>
                                    <div className="contact-content">
                                        <h5 className="title">Phone Number</h5>
                                        <p className="contact-desc">+91 99468281718 </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-9">
                                <div className="contact-box">
                                    <div className="contact-icon">
                                        <span className="overlay-icon"><i className="fas fa-check"></i></span>
                                        <i className="fas fa-globe"></i>
                                    </div>
                                    <div className="contact-content">
                                        <h5 className="title">Web Connect</h5>
                                        <p className="contact-desc">welgateorganic@gmail.com <br/> www.welgatelifestyle.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    </div>
  )
}

export default Contact