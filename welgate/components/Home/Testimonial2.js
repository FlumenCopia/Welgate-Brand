'use client'
import React, { useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function PrevArrow({ onClick }) {
  return (
    <a className="prev-arrow slick-arrow" onClick={onClick}>
      <i className="flaticon-left-arrow"></i>
    </a>
  );
}

function NextArrow({ onClick }) {
  return (
    <a className="next-arrow slick-arrow" onClick={onClick}>
      <i className="flaticon-right-arrow"></i>
    </a>
  );
}

function Testimonial2() {
  const sliderRef = useRef(null); 

  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    autoplay: true,
    arrows: false,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="testimonial-area testimonial-bg-two section-pt-130 section-pb-130">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-6 col-lg-8">
            <div className="section-title section-title-two text-center mb-70">
              <span className="sub-title">
                <img src="assets/img/icons/sub_left.svg" className="injectable" alt="img" />
                <p className="subtitle-colour">Testimonial</p>
                <img src="assets/img/icons/sub_right.svg" className="injectable" alt="img" />
              </span>
              <p className="title pfont2">Clients Feedback</p>
            </div>
          </div>
        </div>

    
        <Slider ref={sliderRef} {...settings} className="testimonial-active-two row">
          {[...Array(5)].map((_, index) => (
            <div key={index} className="col-lg-6">
              <div className="testimonial-item-two">
                <div className="testimonial-top">
                  <div className="testi-avatar">
                    {/* <div className="thumb"><img src="assets/img/others/testi_avatar01.jpg" alt="img" /></div> */}
                    <div className="info">
                      <h6 className="name">Darrell Steward</h6>
                      <span className="designation">Founder of (Rirax)</span>
                    </div>
                  </div>
                </div>
                <div className="testimonial-content-two">
                  <p>
                    Our product is only a tool. It will take you wherever you wish, but it will not
                    replace you as the driver. Collax is only a tool. It will take you wherever you
                    wish, but it will....
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Slider>


        <div className="testimonial-nav">
          <PrevArrow onClick={() => sliderRef.current?.slickPrev()} />
          <NextArrow onClick={() => sliderRef.current?.slickNext()} />
        </div>
      </div>
    </section>
  );
}

export default Testimonial2;
