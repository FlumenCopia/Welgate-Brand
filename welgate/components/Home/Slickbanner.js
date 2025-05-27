"use client";

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const images = [
  "/assets/img/gold-silver-chess-chess-board-game-business-metaphor-leadership-concept.jpg",
  "/assets/img/gold-silver-chess-chess-board-game-business-metaphor-leadership-concept.jpg",
  "/assets/img/gold-silver-chess-chess-board-game-business-metaphor-leadership-concept.jpg",
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
    // dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
     prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    speed: 500,
  };

  return (
    <div>
        <div className="bgprimary text-white text-center d-grid align-items-center fw-bold" style={{ marginTop: '80px', height:'80px' }}>
            WE ARE A RESPONSIBLE GLOBAL TOTAL FOODS COMPANY
        </div>        
      <div className="">
      <Slider {...settings}>
        {images.map((src, i) => (
          <div key={i}>
            <img src={src} alt={`Slide ${i + 1}`} className="w-100 rounded" style={{
                height: "500px",
                objectFit: "cover",
                width: "100%",
                marginBottom:'0',
                paddingBottom:'0'
              }}/>
          </div>
        ))}
      </Slider>
    </div>
     <div className="bgprimary text-white align-items-center  d-flex justify-content-center "  style={{ height: "80px", marginTop: "0", paddingTop: "0" }}>
        <button className="btn btn-pill px-4 py-2 text-danger bg-white">Know More</button>
      </div>
    </div>
    
  );
}
