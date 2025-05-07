import React from 'react'

function Contact() {
  return (
    <div>
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
            <section className="contact-form-area">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6">
                            <div id="contact-map">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3945.7566570248623!2d76.9485522744944!3d8.522990496705464!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b05bbd9b29ca807%3A0x301e4cecff5acc14!2sWelgate%20Lifestyle!5e0!3m2!1sen!2sin!4v1746622118586!5m2!1sen!2sin" allowfullscreen loading="lazy"></iframe>
                            </div>
                        </div>
                        <div className="col-xl-6">
                            <div className="contact-form-wrap">
                                <div className="section-title mb-50">
                                    <p className="sub-title">.. request make ..</p>
                                    <h2 className="title">Asked Anything You <br/> Want To Know</h2>
                                </div>
                                <form id="contact-form" action="inc/contact.php" className="contact-form" data-toggle="validator">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="form-grp">
                                                <label for="full-name">Full Name</label>
                                                <input type="text" id="full-name" placeholder="Enter here" required="required" data-error="Name is required."/>
                                                <div className="help-block with-errors"></div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-grp">
                                                <label for="email">Email Address</label>
                                                <input type="email" id="email" placeholder="Enter here" required="required" data-error="Email is required."/>
                                                <div className="help-block with-errors"></div>
                                            </div>
                                        </div>
                                    </div>
                                    <select className="form-select" aria-label="Default select example">
                                        <option selected disabled>Select Subject **</option>
                                        <option value="1">Delivery & Orders</option>
                                        <option value="2">Diet & Exercise</option>
                                        <option value="3">Marketing & Press</option>
                                        <option value="4">Share Your Success</option>
                                        <option value="5">Wholesale And Returns</option>
                                    </select>
                                    <div className="form-grp">
                                        <label for="message">Message</label>
                                        <textarea name="message" id="message" placeholder="Enter here" required="required" data-error="Message is required."></textarea>
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
    </div>
  )
}

export default Contact