import React from 'react'

function HomeService() {
  return (
       <div className="container-fluid pt-6 pb-6" style={{marginTop:'100px',marginBottom:'100px'}}>
        <div className="container">
            <div className="row g-5">
                <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
                    <div className="about-img">
                        <img className="img-fluid w-100" src="/assets/img/WhatsApp Image 2025-05-12 at 12.49.53_cb885fea.jpg"/>
                    </div>
                </div>
                <div className="col-lg-6 wow fadeIn mt-120" data-wow-delay="0.5s">
                    <p className="pfont2 mb-4 text-center text-sm-start">From Stories To Sustainability</p>
                    <p className="mb-4">Driven by a growing awareness of health and sustainability, we evolved from entertainment into organic living. Through Welgate Organic Farms and Supermarkets, we’ve redefined how food is grown and consumed — prioritizing purity, ethical sourcing, and a healthier future for all.</p>
                    <div className="row g-4 mb-20">
                        <div className="col-sm-6">
                            <div className="d-flex align-items-center">
                                <div className="flex-shrink-0 btn-xl-square me-3">
                                    <div className="icon">
                                        <img src='/assets/img/icons/personnel.png' className='iconscale' style={{fontSize:'38px'}}/>
                                    </div>
                                </div>
                                <h6 className="lh-base text-uppercase textstyle mb-0">The Legacy Team</h6>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="d-flex align-items-center">
                                <div className="flex-shrink-0 btn-xl-square  me-3">
                                    <div className="icon">
                                        <img src='/assets/img/icons/privacy.png' className='iconscale' style={{fontSize:'38px'}}/>
                                    </div>
                                </div>
                                <h6 className="lh-base text-uppercase textstyle mb-0">Trusted Services</h6>
                            </div>
                        </div>
                    </div>
                    <p><i className="fa-solid fa-check text-danger me-3"></i>Support local farmers committed to sustainable, chemical-free practices


                    </p>
                    <p><i className="fa-solid fa-check text-danger me-3"></i>Reduce environmental impact through local sourcing and eco-friendly packaging


                    </p>
                    <p><i className="fa-solid fa-check text-danger me-3"></i>Inspire families to embrace clean, organic living through education and access.


                    </p>
                    <div className="border border-1 border-danger p-4 text-center mt-60" style={{borderRadius:'10px'}}>
                        <p className="lh-base pfont  mb-0">Reliable Workmanship Rooted in Trust and Integrity</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HomeService