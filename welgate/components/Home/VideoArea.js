import React from 'react'

function VideoArea() {
  return (
       <div class="container-fluid pt-6 pb-6" style={{marginTop:'250px',marginBottom:'150px'}}>
        <div class="container">
            <div class="row g-5">
                <div class="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
                    <div class="about-img">
                        <img class="img-fluid w-100" src="/assets/img/WhatsApp Image 2025-05-12 at 12.49.53_cb885fea.jpg"/>
                    </div>
                </div>
                <div class="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
                    <h1 class="display-6 text-uppercase mb-4">From Stories to Sustainability</h1>
                    <p class="mb-4">Driven by a growing awareness of health and sustainability, we evolved from entertainment into organic living. Through Welgate Organic Farms and Supermarkets, we’ve redefined how food is grown and consumed — prioritizing purity, ethical sourcing, and a healthier future for all.</p>
                    <div class="row g-5 mb-4">
                        <div class="col-sm-6">
                            <div class="d-flex align-items-center">
                                <div class="flex-shrink-0 btn-xl-square me-3">
                                    <div className="icon">
                                        <img src='/assets/img/icons/personnel.png' className='iconscale' style={{fontSize:'38px'}}/>
                                    </div>
                                </div>
                                <h6 class="lh-base text-uppercase mb-0">The Legacy Team</h6>
                            </div>
                        </div>
                        <div class="col-sm-6">
                            <div class="d-flex align-items-center">
                                <div class="flex-shrink-0 btn-xl-square  me-3">
                                    <div className="icon">
                                        <img src='/assets/img/icons/privacy.png' className='iconscale' style={{fontSize:'38px'}}/>
                                    </div>
                                </div>
                                <h6 class="lh-base text-uppercase mb-0">Timely & Trusted Services</h6>
                            </div>
                        </div>
                    </div>
                    <p><i class="fa-solid fa-check text-danger me-3"></i>Support local farmers committed to sustainable, chemical-free practices


                    </p>
                    <p><i class="fa-solid fa-check text-danger me-3"></i>Reduce environmental impact through local sourcing and eco-friendly packaging


                    </p>
                    <p><i class="fa-solid fa-check text-danger me-3"></i>Inspire families to embrace clean, organic living through education and access.


                    </p>
                    <div class="border border-5 border-danger p-4 text-center mt-4">
                        <h4 class="lh-base text-uppercase mb-0">Reliable Workmanship Rooted in Trust and Integrity</h4>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default VideoArea