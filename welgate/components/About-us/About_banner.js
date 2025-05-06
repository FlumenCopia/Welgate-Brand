import React from 'react'

const About_banner = () => {
  return (
    <div>
    <section className="tg-banner-area banner-bg jarallax parallax-img">
           <div className="container">
               <div className="row align-items-center justify-content-center">
                   <div className="col-xl-6 col-lg-6 order-0 order-lg-2">
                       <div className="tg-banner-img text-center wow fadeInRight" data-wow-delay=".6s">
                           <img src="assets/img/banner/03.png" alt="img"/>
                       </div>
                   </div>
                   <div className="col-xl-6 col-lg-6 col-md-10">
                       <div className="tg-banner-content">
                           <h4 className="sub-title wow fadeInUp" data-wow-delay=".2s">Pure Wellness!</h4>
                           <h2 className="title wow fadeInUp" data-wow-delay=".4s"> Healthier  Tomorrow <br/>  Starts Today</h2>
                           <p className=" wow fadeInUp" data-wow-delay=".6s">Discover simple ways to live healthier—every single day.</p>
                           <div className="tg-banner-btn wow fadeInUp" data-wow-delay=".8s">
                               <a href="shop-details.html" className="tg-btn">purchase now</a>
                           </div>
                       </div>
                   </div>
               </div>
           </div>
       </section>
</div>
  )
}

export default About_banner