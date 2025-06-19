'use client'
import React, { useEffect } from 'react';

function HomeAbout() {


useEffect(() => {
    if (typeof window !== 'undefined' && window.WOW) {
      new window.WOW({
        boxClass: 'wow',
        animateClass: 'animated',
        offset: 0,
        mobile: false,
        live: true
      }).init();
    }
  }, []);


  return (
   <div className="container-xxl py-5" style={{marginBottom:'90px'}}>
  <div className="container">
    <div className="row g-5 align-items-center">

      <div className="col-lg-6 order-1 order-lg-2 d-none d-sm-block">
        <div className="row g-3">
          <div className="col-6 text-start">
            <img className="img-fluid rounded w-100  "  src="https://img.freepik.com/free-photo/high-view-cassette-tape-with-pencil_23-2148695289.jpg?uid=R199831080&ga=GA1.1.1254240009.1747050500&semt=ais_hybrid&w=740" />
          </div>
          <div className="col-6 text-start">
            <img className="img-fluid rounded w-75"  src="/assets/img/WhatsApp Image 2025-05-12 at 12.49.53_cb885fea.jpg" style={{ marginTop: '55%' }} />
          </div>
          <div className="col-6 text-end">
            <img className="img-fluid rounded w-75"  src="/assets/img/WhatsApp Image 2025-05-12 at 12.49.53_cb885fea.jpg" />
          </div>
          <div className="col-6 text-end">
            <img className="img-fluid rounded w-100"  src="https://img.freepik.com/free-photo/black-model-posing-with-vinyls_23-2148171759.jpg?uid=R199831080&ga=GA1.1.1254240009.1747050500&semt=ais_hybrid&w=740" />
          </div>
        </div>
      </div>

      <div className="col-lg-6 tg-section-title order-2 order-lg-1">
        <span className="section-title text-start sub-title wow slideInRight" data-wow-delay="0.1s" data-wow-duration="1s">About Us</span>
        <p className="mb-4 title pfont2 wow slideInRight" data-wow-delay="0.1s" data-wow-duration="1s">From Entertainment <br /> to Wellness</p>
        <p className="mb-4">
          Welgate began with a passion for connecting people—first through entertainment, now through health.
          From distributing CDs to cultivating organic farms, our journey reflects a deep-rooted legacy and a
          commitment to purposeful growth...
        </p>
        <div className="row g-4 mb-4">
          <div className="col-sm-6">
            <div className="d-flex align-items-center border-start border-dark border-3 px-3">
              <h1 className="flex-shrink-0 display-5 bdcolor mb-0"><span data-toggle="counter-up">15</span>+</h1>
              <div className="ps-4">
                <p className="mb-0">Years of</p>
                <h6 className="text-uppercase mb-0">Experience</h6>
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="d-flex align-items-center border-dark border-start border-3 px-3">
              <h1 className="flex-shrink-0 display-5 bdcolor mb-0"><span data-toggle="counter-up">100</span>%</h1>
              <div className="ps-4">
                <p className="mb-0">Customer</p>
                <h6 className="text-uppercase mb-0">Satisfaction</h6>
              </div>
            </div>
          </div>
        </div>
        <a className="tg-btn view-btn mt-5" href="/About">view More</a>
      </div>

    </div>
  </div>
</div>

  )
}

export default HomeAbout