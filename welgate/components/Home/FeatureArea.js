import React from 'react'

function FeatureArea() {
  return (
    <div>
          <section className="tg-features-area">
                <div className="container">
                    <div className="tg-features-inner">
                        <div className="row justify-content-center">
                            <div className="col-lg-4 col-md-6 col-sm-8 wow fadeInUp" data-wow-delay=".2s">
                                <div className="tg-features-item">
                                    <div className="tg-features-icon">
                                        <i className="fas fa-leaf" style={{fontSize:'38px'}}></i>
                                    </div>
                                    <div className="tg-features-content">
                                        <h4 className="title">Fresh From Nature</h4>
                                        <p>Enjoy farm-fresh, nutrient-packed produce grown sustainably to support your well-being.</p>
                                        {/* <a href="contact.html">Learn more</a> */}
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-8 wow fadeInUp" data-wow-delay=".4s">
                                <div className="tg-features-item">
                                    <div className="tg-features-icon">
                                        <i className="fas fa-box-open" style={{fontSize:'38px'}}></i>
                                    </div>
                                    <div className="tg-features-content">
                                        <h4 className="title">Everyday Essentials</h4>
                                        <p>Discover a wide range of carefully crafted essentials that elevate your daily living.</p>
                                        {/* <a href="contact.html">Learn more</a> */}
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-8 wow fadeInUp" data-wow-delay=".6s">
                                <div className="tg-features-item">
                                    <div className="tg-features-icon">
                                        <i className="far fa-lemon" style={{fontSize:'38px'}}></i>
                                    </div>
                                    <div className="tg-features-content">
                                        <h4 className="title">Healthy Bites</h4>
                                        <p>Enjoy tasty, nourishing snacks that curb your cravings and support your healthy lifestyle.</p>
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