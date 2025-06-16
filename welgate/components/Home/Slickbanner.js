"use client";

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const images = [
    "/assets/img/banner/freepik__the-style-is-candid-image-photography-with-natural__88439.png",
    "/assets/img/banner/freepik__the-style-is-candid-image-photography-with-natural__88440.png",
   "/assets/img/banner/freepik__the-style-is-candid-image-photography-with-natural__70426.jpeg",
];

const CustomPrevArrow = ({ className, onClick }) => (
  <button
    className={`${className} custom-slick-prev2 slick-arrow2`}
    onClick={onClick}
  >
    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="white" viewBox="0 0 24 24">
      <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
    </svg>
  </button>
);

const CustomNextArrow = ({ className, onClick }) => (
  <button
    className={`${className} custom-slick-next2 slick-arrow2`}
    onClick={onClick}
  >
    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="white" viewBox="0 0 24 24">
      <path d="M8.59 16.59L10 18l6-6-6-6-1.41 1.41L13.17 12z"/>
    </svg>
  </button>
);

export default function ImageCarousel() {
  const settings = {
    dots: false,
    infinite: true,
    autoplay:true,
    slidesToShow: 1,
    speed:'1000', 
    fade:'true',
    slidesToScroll: 1,
     prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    speed: 500,
  };

  return (
    <div>
        <div className="bgprimary margintopmobile  bannerredheight d-grid align-items-center"  style={{ marginTop: '40px', height:'50px' }}>
            <p className="text-white text-center pt-3 fsmedia   wow zoomIn"data-wow-delay="0.3s"style={{ transform: 'translateY(3px)' }}>GLOBAL LEADERS IN SUSTAINABLE FOOD SOLUTIONS</p>
        </div>        
      <div>
      <Slider {...settings}>
        {images.map((src, i) => (
          <div key={i}>
            <img  src={src} alt={`Slide ${i + 1}`} className="w-100 slickheight" style={{
                height: "490px",
                objectFit: "cover",
                width: "100%",
                marginBottom:'0',
                paddingBottom:'0',
              }}/>
          </div>
        ))}
      </Slider>
    </div>
     <div className="bgprimary text-white align-items-center  d-flex justify-content-center dispnone"  style={{ height: "50px", marginTop: "0", paddingTop: "0" }}>
        <a href="/About" className="btn btn-pill px-4 py-1  text-danger bg-white">Know More</a>
      </div>
    </div>
    
  );
}
