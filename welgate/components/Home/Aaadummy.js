"use client";
import React, { useState } from "react";
import Slider from "react-slick";

const data = {
  BISCUITS: [
    { name: "Treat", image: "https://img.freepik.com/premium-psd/fresh-fruit-platter-peaches-oranges-berries-grapes-wood_1270823-6299.jpg?uid=R61509999&ga=GA1.1.1499231568.1743486391&semt=ais_items_boosted&w=740" },
    { name: "Little Hearts", image: "https://img.freepik.com/premium-psd/fresh-fruit-platter-peaches-oranges-berries-grapes-wood_1270823-6299.jpg?uid=R61509999&ga=GA1.1.1499231568.1743486391&semt=ais_items_boosted&w=740" },
    { name: "Pure Magic", image: "https://img.freepik.com/premium-psd/fresh-fruit-platter-peaches-oranges-berries-grapes-wood_1270823-6299.jpg?uid=R61509999&ga=GA1.1.1499231568.1743486391&semt=ais_items_boosted&w=740" },
    { name: "Nice Time", image: "https://img.freepik.com/premium-psd/fresh-fruit-platter-peaches-oranges-berries-grapes-wood_1270823-6299.jpg?uid=R61509999&ga=GA1.1.1499231568.1743486391&semt=ais_items_boosted&w=740" },
    { name: "Biscafe", image: "https://img.freepik.com/premium-psd/fresh-fruit-platter-peaches-oranges-berries-grapes-wood_1270823-6299.jpg?uid=R61509999&ga=GA1.1.1499231568.1743486391&semt=ais_items_boosted&w=740" },
  ],
  DAIRY: [
    { name: "Cheese", image: "https://img.freepik.com/premium-psd/fresh-fruit-platter-peaches-oranges-berries-grapes-wood_1270823-6299.jpg?uid=R61509999&ga=GA1.1.1499231568.1743486391&semt=ais_items_boosted&w=740" },
    { name: "Milk", image: "https://img.freepik.com/premium-psd/fresh-fruit-platter-peaches-oranges-berries-grapes-wood_1270823-6299.jpg?uid=R61509999&ga=GA1.1.1499231568.1743486391&semt=ais_items_boosted&w=740" },
  ],
  SNACKING: [
    { name: "Pure Magic", image: "/images/pure-magic.png" },
    { name: "Nice Time", image: "/images/nice-time.png" },
    { name: "Biscafe", image: "/images/biscafe.png" },
  ],
  CAKES: [
    { name: "Cheese", image: "/images/cheese.png" },
    { name: "Milk", image: "/images/milk.png" },
  ],
  RUSK: [
    { name: "Treat", image: "/images/treat.png" },
    { name: "Little Hearts", image: "/images/little-hearts.png" },
  ],
  BREADS: [
    { name: "Little Hearts", image: "/images/little-hearts.png" },
    { name: "Pure Magic", image: "/images/pure-magic.png" },
    { name: "Nice Time", image: "/images/nice-time.png" },
  ],
  "NUTRITIOUS BARS": [ { name: "Treat", image: "/images/treat.png" },
    { name: "Little Hearts", image: "/images/little-hearts.png" },
    { name: "Pure Magic", image: "/images/pure-magic.png" },
    { name: "Nice Time", image: "/images/nice-time.png" },
    { name: "Biscafe", image: "/images/biscafe.png" },
  ],
};

const categories = Object.keys(data);


const CustomPrevArrow = ({ className, onClick }) => (
  <button
    className={`${className} custom-slick-prev`}
    onClick={onClick}
    style={{
      left: "48px",
      zIndex: 1,
      background: "#dc2626", 
      color: "white",
      borderRadius: "50%",
      width: "50px",
      height: "50px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }}
  >
   &#10216;
  </button>
);

const CustomNextArrow = ({ className, onClick }) => (
  <button
    className={`${className} custom-slick-next`}
    onClick={onClick}
    style={{
      right: "57px",
      zIndex: 1,
      background: "#dc2626", 
      color: "white",
      borderRadius: "50%",
      width: "50px",
      height: "50px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }}
  >
   &#187;
  </button>
);

export default function BrandsSection() {

  const [activeCategory, setActiveCategory] = useState("BISCUITS");

  const arrowsettings = {
  dots: true,
  infinite: true,
  autoplay: true,
  slidesToShow: 5,
  slidesToScroll: 1,
  arrows: true,
  prevArrow: <CustomPrevArrow />,
  nextArrow: <CustomNextArrow />,
  responsive: [
    {
      breakpoint: 1024,
      settings: { slidesToShow: 2 },
    },
    {
      breakpoint: 768,
      settings: { slidesToShow: 1 },
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
            className={`px-4 py-2 rounded-pill font-medium bg-danger mx-2 text-white  ${
              activeCategory === category
                ? "bg-red-600 border-white text-white"
                : "border border-red-600 text-red-600"
            }`}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <Slider {...arrowsettings}>
        {data[activeCategory].map((item, index) => (
          <div key={index} className="px-4">
            <div className="bg-white rounded-2xl border border-white p-1">
              <img
                src={item.image}
                alt={item.name}
                className="rounded-lg w-full h-48 object-contain"
              />
              {/* <p className="mt-2 font-semibold">{item.name}</p> */}
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
