import React from 'react'

function HomeCards() {
  return (
    <div>
        <div className="d-flex justify-content-center bounceimgtranslate" style={{transform:'translateY(120px)'}}>
              <img className='wow bounceIn bouncewidth' data-wow-delay="0.1s" src="/assets/img/bg/88371633_Strawberry_-1-removebg-preview.png" style={{width:'280px'}}/>
          </div>
        <section id="feature" className="tg-service-area">
                <div className="container">
                    <div className="tg-service-inner">
                        <div className="row justify-content-center">
                            <div className="col-lg-8">
                                <div className="tg-section-title text-center mb-60">
                                    <span className="sub-title ">A Legacy of Evolving with Purpose</span>
                                    <p className="title pfont2 ">Welgate’s Journey: <br/> “From Soundwaves to Superfoods”</p>
                                </div>
                            </div>
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-lg-4 col-md-6 col-sm-9 " >
                                <div className="tg-service-item">
                                    {/* <div className="tg-services-count">01</div> */}
                                    <div className="icon">
                                        <img src='/assets/img/iconfeatures/play-button.png' className='iconscale' style={{fontSize:'38px'}}/>
                                    </div>
                                    <p className="title "><a href="#">Where It All Began</a></p>
                                    <div className="tg-service-content">
                                        <p>Welgate started with cassettes and CDs—making stories and songs part of daily life.</p>
                                        {/* <a href="contact.html"><i className="fas fa-arrow-circle-right"></i>Read More</a> */}
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-9 " >
                                <div className="tg-service-item">
                                    {/* <div className="tg-services-count">02</div> */}
                                    <div className="icon">
                                         {/* <i className="fas fa-sync-alt"></i> */}
                                         <img src='/assets/img/iconfeatures/sustainable-development.png' className='iconscale' style={{fontSize:'38px'}}/> 
                                    </div>
                                    <p className="title"><a href="#">A Natural Shift</a></p>
                                    <div className="tg-service-content">
                                        <p>A bold move into organic farming—focusing on wellness through clean, chemical-free food.</p>
                                        {/* <a href="contact.html"><i className="fas fa-arrow-circle-right"></i>Read More</a> */}
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-9 " >
                                <div className="tg-service-item">
                                    {/* <div className="tg-services-count">03</div> */}
                                    <div className="icon">
                                        {/* <i className="fas fa-tractor"></i> */}
                                         <img src='/assets/img/iconfeatures/sprout (1).png' className='iconscale' style={{fontSize:'38px'}}/> 
                                    </div>
                                    <p className="title"><a href="#">From Soil to Shelf</a></p>
                                    <div className="tg-service-content">
                                        <p>Opening organic supermarkets—bringing fresh, trusted products closer to families.</p>
                                        {/* <a href="contact.html"><i className="fas fa-arrow-circle-right"></i>Read More</a> */}
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-9 " >
                                <div className="tg-service-item">
                                    {/* <div className="tg-services-count">04</div> */}
                                    <div className="icon">
                                        {/* <i className="/assets/img/others/legacy.png"></i> */}
                                        <img src='/assets/img/iconfeatures/legacy (1).png' className='iconscale' style={{fontSize:'38px'}}/> 

                                    </div>
                                    <p className="title"><a href="#">A Legacy Carried Forward</a></p>
                                    <div className="tg-service-content">
                                        <p>Inspired by Our father's dream, the next generation leads with heart and purpose.</p>
                                        {/* <a href="contact.html"><i className="fas fa-arrow-circle-right"></i>Read More</a> */}
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-9 " >
                                <div className="tg-service-item">
                                    {/* <div className="tg-services-count">05</div> */}
                                    
                                    <div className="icon">
                                        {/* <i className="fas fa-compass"></i> */}
                                         <img src='/assets/img/iconfeatures/clock.png' className='iconscale' style={{fontSize:'38px'}}/> 
                                    </div>
                                    <p className="title"><a href="#">Beyond the Horizon</a></p>
                                    <div className="tg-service-content">
                                        <p>Expanding organically—sharing their mission with the world.</p>
                                        {/* <a href="contact.html"><i className="fas fa-arrow-circle-right"></i>Read More</a> */}
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-9 " >
                                <div className="tg-service-item">
                                    {/* <div className="tg-services-count">06</div> */}
                                    <div className="icon">
                                        {/* <i className="fas fa-store"></i> */}
                                        <img src='/assets/img/iconfeatures/sold (1).png' className='iconscale' style={{fontSize:'38px'}}/> 
                                    </div>
                                    <p className="title"><a href="#">Sown to Sold</a></p>
                                    <div className="tg-service-content">
                                        <p>Driven by sustainability, ethics, and a lifelong commitment to better living.</p>
                                        {/* <a href="contact.html"><i className="fas fa-arrow-circle-right"></i>Read More</a> */}
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

export default HomeCards