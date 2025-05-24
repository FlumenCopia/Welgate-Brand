"use client";
import React, { useState } from "react";
import Slider from "react-slick";

const data = {
  BISCUITS: [
    { name: "Treat", image: "/images/treat.png" },
    { name: "Little Hearts", image: "/images/little-hearts.png" },
    { name: "Pure Magic", image: "/images/pure-magic.png" },
    { name: "Nice Time", image: "/images/nice-time.png" },
    { name: "Biscafe", image: "/images/biscafe.png" },
  ],
  DAIRY: [
    { name: "Cheese", image: "/images/cheese.png" },
    { name: "Milk", image: "/images/milk.png" },
  ],
  SNACKING: [],
  CAKES: [],
  RUSK: [],
  BREADS: [],
  "NUTRITIOUS BARS": [],
};

const categories = Object.keys(data);

export default function BrandsSection() {
  const [activeCategory, setActiveCategory] = useState("BISCUITS");

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 768,
        settings: { slidesToShow: 1 },
      },
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
    ],
  };

  return (
    <div className="bg-yellow-100 py-10 text-center" style={{paddingBottom:'90px'}}>
      <h2 className="text-2xl font-bold mb-4" style={{paddingTop:'50px'}}>OUR BRANDS</h2>
      <div className="flex flex-wrap justify-center  mb-8" style={{marginBottom:'35px'}}>
        {categories.map((category) => (
          <button
            key={category}
            className={`px-4 py-2 rounded-pill font-medium bg-danger mx-2 text-white ${
              activeCategory === category
                ? "bg-red-600 text-white"
                : "border border-red-600 text-red-600"
            }`}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <Slider {...settings}>
        {data[activeCategory].map((item, index) => (
          <div key={index} className="px-4">
            <div className="bg-white rounded-2xl border p-4">
              <img
                src={item.image}
                alt={item.name}
                className="rounded-lg w-full h-48 object-contain"
              />
              <p className="mt-2 font-semibold">{item.name}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
