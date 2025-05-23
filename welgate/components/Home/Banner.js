import React from 'react'

function Banner() {
  return (
    <div>
        <div className='' style={{height:'59px',backgroundColor:'#ed1922', color:'#ed1922'}}>bjhbjbjb</div>
         <section className="tg-banner-area banner-bg jarallax parallax-img" >
                <div className="container">
                    <div className="row align-items-center justify-content-center">
                        <div className="col-xl-6 col-lg-6 order-0 order-lg-2">
                            <div className="tg-banner-img text-center wow fadeInRight" data-wow-delay=".6s">
                                {/* <img src="assets/img/banner/banner_img.png" alt="img"/> */}
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-10">
                            <div className="tg-banner-content">
                                <p className="sub-title wow fadeInUp" data-wow-delay=".2s">Timeless Legacy !</p>
                                <p className="title wow fadeInUp" data-wow-delay=".4s"> Honoring <span className='bannertextclr'>the Past, <br/></span> Cultivating <span className='bannertextclr'> the Future</span></p>
                                <p className=" wow fadeInUp" data-wow-delay=".6s">Discover simple ways to live healthier—every single day.</p>
                                <div className="tg-banner-btn wow fadeInUp" data-wow-delay=".8s">
                                    <a href="/Contactus" className="tg-btn">Contact Us</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    </div>
  )
}

export default Banner