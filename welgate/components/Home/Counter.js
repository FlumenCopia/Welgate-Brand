import React from 'react'

function Counter() {
  return (
    <div className='mt-5 '>
        <section className="counter-area">
                <div className="container">
                    <div className="counter-wrap">
                        <div className="row gy-4 justify-content-center">
                            <div className="col-lg-4 col-md-6">
                                <div className="counter-item">
                                    <div className="counter-icon">
                                        <div className="icon">
                                        <img src='/assets/img/icons/supermarkets (1).png' className='iconscale' style={{fontSize:'38px'}}/>
                                        </div>

                                    </div>
                                    <div className="counter-content">
                                        <h2 className="count"><span data-toggle="counter-up">5</span>+</h2>
                                        <p>Stores around Kerala</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="counter-item">
                                    <div className="counter-icon">
                                        <div className="icon">
                                        <img src='/assets/img/icons/audience (1).png' className='iconscale' style={{fontSize:'38px'}}/>
                                        </div>

                                    </div>
                                    <div className="counter-content">
                                        <h2 className="count"><span data-toggle="counter-up" >100</span>%</h2>
                                        <p>Customer Satisfaction</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="counter-item">
                                    <div className="counter-icon">
                                        <div className="icon">
                                        <img src='/assets/img/icons/briefcase (1).png' className='iconscale' style={{fontSize:'38px'}}/>
                                        </div>
                                    </div>
                                    <div className="counter-content">
                                        <h2 className="count"><span data-toggle="counter-up">15</span>+</h2>
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