import React from 'react';

function PricingArea() {
  return (
    <div>
      <section style={{
          position: 'relative',width: '100%',height: '400px',backgroundImage: "url('/assets/img/bg/shutterstock_1008530026_1_2_beaeb9bb2d.webp')",backgroundSize: 'cover' ,backgroundPosition: 'center',
        }}>
        <div style={{ position: 'absolute',
            top: 0,left: 0,width: '100%',height: '100%',backgroundColor: 'rgba(0, 0, 0, 0.6)',
          }}/>

        <div
          style={{
            position: 'relative',
            zIndex: 1,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%',
            padding: '0 20px',
            textAlign: 'center',
          }}
        >
          <h2
            style={{
              color: 'white',
              fontSize: 'clamp(32px, 5vw, 51px)',
              fontWeight: "800",
              marginBottom: '1rem',
              maxWidth: '800px',
              width: '100%',
              paddingTop:'50px',
              
            }}
          >
            Rooted in care, growing with purpose
          </h2>
          <p
            style={{
              color: 'white',
              fontSize: '1.2rem',
              maxWidth: '800px',
              width: '100%',
            }}
          >
            At Welgate, we believe that nurturing health and heritage is the foundation for a thriving future.
          </p>
        </div>
      </section>
      <section
      style={{
        backgroundColor: '#fff7f7;', 
        padding: '60px 20px',
        textAlign: 'center',
      }}
    >
      <div style={{ maxWidth: '800px',margin: '0 auto' }}>
        <p className='pfont2'>
          Our Approach
        </p>
        <p style={{ fontSize: '1.2rem', }}>
            At Welgate, we blend legacy with innovation to create lasting impact.
            Our journey from entertainment to wellness is rooted in deep community ties and a commitment to sustainability.
            We focus on empowering people—whether through cultural connection, conscious consumption, or community-driven growth.
            By combining traditional values with forward-thinking practices, we create solutions that are both meaningful and future-ready.        </p>
      </div>
    </section>
    <div class="container-fluid " style={{paddingBottom:'25px',paddingTop:'20px'}}>
        <div class="container pt-4">
            <div class="row g-0 feature-row wow fadeIn" data-wow-delay="0.1s">
                <div class="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.3s">
                    <div class="feature-item border h-100">
                        <div class="feature-icon btn-xxl-square  mb-4 mt-n4" style={{backgroundColor:'#e1141e'}}>
                                <div className="icon">
                                        <img src='/assets/img/impact/people.png' className='iconscale' style={{fontSize:'38px'}}/>
                                </div>
                        </div>
                        <div class="p-5 pt-0">
                            <h5 class="text-uppercase mb-3">Empowering Farmers</h5>
                            <p> Supporting organic and local farmers through fair practices, education, and long-term partnerships that sustain rural livelihoods.</p>
                            <a class="position-relative text-body text-uppercase small d-flex justify-content-between"
                                href="#">
                                  {/* <b class="bg-white pe-3">Read More</b>  */}
                                  {/* <i  class="bi bi-arrow-right bg-white ps-3"></i> */}
                            </a>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.4s">
                    <div class="feature-item border h-100">
                        <div class="feature-icon btn-xxl-square  mb-4 mt-n4" style={{backgroundColor:'#e1141e'}}>
                            <div className="icon">
                                        <img src='/assets/img/impact/planting.png' className='iconscale' style={{fontSize:'38px'}}/>
                                </div>
                        </div>
                        <div class="p-5 pt-0">
                            <h5 class="text-uppercase">Sustainable Agriculture</h5>
                            <p> Investing in eco-friendly farming methods that protect soil health, conserve water, and reduce chemical use — for people and the planet.</p>
                            <a class="position-relative text-body text-uppercase small d-flex justify-content-between"
                                href="#">
                                  {/* <b class="bg-white pe-3">Read More</b>  */}
                                  {/* <i class="bi bi-arrow-right bg-white ps-3"></i> */}
                            </a>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.5s">
                    <div class="feature-item border h-100">
                        <div class="feature-icon btn-xxl-square  mb-4 mt-n4" style={{backgroundColor:'#e1141e'}}>
                           <div className="icon">
                                        <img src='/assets/img/impact/all-inclusive.png' className='iconscale' style={{fontSize:'38px'}}/>
                                </div>
                        </div>
                        <div class="p-5 pt-0">
                            <h5 class="text-uppercase">Wellness for All</h5>
                            <p> Creating accessible health and wellness solutions that nourish the body and uplift communities through ethical products.</p>
                            <a class="position-relative text-body text-uppercase small d-flex justify-content-between"
                                href="#">
                                  {/* <b class="bg-white pe-3">Read More</b>  */}
                                {/* <i class="bi bi-arrow-right bg-white ps-3"></i> */}
                            </a>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.6s">
                    <div class="feature-item border h-100">
                        <div class="feature-icon btn-xxl-square  mb-4 mt-n4" style={{backgroundColor:'#e1141e'}}>
                           <div className="icon">
                                        <img src='/assets/img/impact/slavery.png' className='iconscale' style={{fontSize:'38px'}}/>
                                </div>
                        </div>
                        <div class="p-5 pt-0">
                            <h5 class="text-uppercase">Legacy of Connection</h5>
                            <p> From music that once united hearts to health initiatives that strengthen lives, our roots continue to inspire meaningful impact.</p>
                            <a class="position-relative text-body text-uppercase small d-flex justify-content-between"
                                href="#">
                                  {/* <b class="bg-white pe-3">Read More</b>  */}
                                {/* <i class="bi bi-arrow-right bg-white ps-3"></i> */}
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
  );
}

export default PricingArea;
