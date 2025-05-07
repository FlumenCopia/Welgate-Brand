import React from 'react'

function Counter() {
  return (
    <div>
        <section className="counter-area">
                <div className="container">
                    <div className="counter-wrap">
                        <div className="row gy-4 justify-content-center">
                            <div className="col-lg-4 col-md-6">
                                <div className="counter-item">
                                    <div className="counter-icon">
                                    <i className="fas fa-store"></i>

                                    </div>
                                    <div className="counter-content">
                                        <h2 className="count"><span className="odometer" data-count="5"></span>+</h2>
                                        <p>Stores around Kerala</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="counter-item">
                                    <div className="counter-icon">
                                    <i className="fas fa-users"></i>

                                    </div>
                                    <div className="counter-content">
                                        <h2 className="count"><span className="odometer" data-count="100%"></span></h2>
                                        <p>Customer Satisfaction</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="counter-item">
                                    <div className="counter-icon">
                                        <i className="fas fa-hourglass-half"></i>
                                    </div>
                                    <div className="counter-content">
                                        <h2 className="count"><span className="odometer" data-count="15"></span>+</h2>
                                        <p>Years of Experience</p>
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

export default Counter