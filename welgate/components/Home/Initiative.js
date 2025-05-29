"use client";

import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const SlickSlider = dynamic(() => import("react-slick"), { ssr: false });

const CustomPrevArrow = ({ className, onClick }) => (
  <button
    className={`${className} custom-slick-prev slick-arrow`}
    onClick={onClick}
    aria-label="Previous"
  >
    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="white" viewBox="0 0 24 24">
      <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
    </svg>
  </button>
);

const CustomNextArrow = ({ className, onClick }) => (
  <button
    className={`${className} custom-slick-next slick-arrow`}
    onClick={onClick}
    aria-label="Next"
  >
    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="white" viewBox="0 0 24 24">
      <path d="M8.59 16.59L10 18l6-6-6-6-1.41 1.41L13.17 12z" />
    </svg>
  </button>
);

const initiativesData = [
  {
    title: "Welgate Farms",
    description: "Cultivating wellness, naturally with organic, chemical-free produce to promote healthy living.",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80"
  },
  {
    title: "Welgate Studios",
    description: "Stories that move hearts and minds, creating meaningful media rooted in our entertainment legacy.",
    image: "https://images.unsplash.com/photo-1497493292307-31c376b6e479?auto=format&fit=crop&w=400&q=80"
  },
  {
    title: "Welgate Health",
    description: "Accessible wellness solutions that champion preventive care and holistic well-being.",
    image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=400&q=80"
  },
  {
    title: "Welgate Community",
    description: "Building purpose-driven connections to foster collaboration, inclusivity, and shared growth.",
    image: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=400&q=80"
  }
];

function Initiative() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 576, settings: { slidesToShow: 1 } }
    ]
  };

  return (
    <div id='Initiative' className="container-fluid blog pb-5 bg-yellow pt-5">
      <div className="pb-5">
        <div className="text-center mx-auto" style={{ maxWidth: "400px" }}>
          <h1 className="pfont2 clrred mb-4">Initiatives</h1>
        </div>
        {isClient && (
          <SlickSlider {...settings}>
            {initiativesData.map(({ title, description, image }, i) => (
              <div key={i} className="p-2">
                <div className="blog-item">
                  <div className="blog-img">
                    <img
                      src={image}
                      className="img-fluid w-100 rounded-top"
                      style={{ height: '200px', objectFit: 'cover' }}
                      alt={title}
                    />
                  </div>
                  <div className="blog-content p-4">
                    <h4 className="mb-3">{title}</h4>
                    <p className="mb-4">{description}</p>
                    <a href="/InitiativeSlug" className="btn round-btn py-2 px-4" aria-label={`Read more about ${title}`}>
                      <i className="fas fa-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </SlickSlider>
        )}
      </div>
    </div>
  );
}

export default Initiative;
