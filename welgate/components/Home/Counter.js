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
                                        <i className="flaticon-whey-protein-3"></i>
                                    </div>
                                    <div className="counter-content">
                                        <h2 className="count"><span className="odometer" data-count="3560"></span>+</h2>
                                        <p>Package Delivered</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="counter-item">
                                    <div className="counter-icon">
                                        <i className="flaticon-whey-protein-3"></i>
                                    </div>
                                    <div className="counter-content">
                                        <h2 className="count"><span className="odometer" data-count="1200"></span>+</h2>
                                        <p>Countries Covered</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="counter-item">
                                    <div className="counter-icon">
                                        <i className="flaticon-whey-protein-3"></i>
                                    </div>
                                    <div className="counter-content">
                                        <h2 className="count"><span className="odometer" data-count="1800"></span>+</h2>
                                        <p>Happy Customer</p>
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