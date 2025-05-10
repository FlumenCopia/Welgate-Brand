import React from 'react'

function FeatureArea() {
  return (
    <div>
          <section className="tg-features-area">
                <div className="container">
                    <div className="tg-features-inner">
                        <div className="row justify-content-center">
                            <div className="col-lg-4 col-md-6 col-sm-8 wow fadeInUp" data-wow-delay=".4s">
                                <div className="tg-features-item">
                                    <div className="tg-features-icon">
                                        <i className="fas fa-film" style={{fontSize:'38px'}}></i>
                                    </div>
                                    <div className="tg-features-content">
                                        <h4 className="title ">Where Stories Began</h4>
                                        <p>From tapes to CDs, Welgate sparked connections and built a legacy of experience.</p>
                                        {/* <a href="contact.html">Learn more</a> */}
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-8 wow fadeInUp" data-wow-delay=".4s">
                                <div className="tg-features-item">
                                    <div className="tg-features-icon">
                                        <i className="fas fa-seedling" style={{fontSize:'38px'}}></i>
                                    </div>
                                    <div className="tg-features-content">
                                        <h4 className="title">Health Starts Here</h4>
                                        <p>Welgate embraced nature to deliver fresh, chemical-free food to every home. </p>
                                        {/* <a href="contact.html">Learn more</a> */}
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-8 wow fadeInUp" data-wow-delay=".6s">
                                <div className="tg-features-item">
                                    <div className="tg-features-icon">
                                        <i className="fas fa-dove" style={{fontSize:'38px'}}></i>
                                    </div>
                                    <div className="tg-features-content">
                                        <h4 className="title">Legacy in Motion</h4>
                                        <p>Welgate grows global—led by legacy, driven by wellness, trust, innovation, and sustainability.

</p>
                                        {/* <a href="contact.html">Learn more</a> */}
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

export default FeatureArea