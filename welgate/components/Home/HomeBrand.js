"use client";
import React, { useState } from "react";
import Slider from "react-slick";

const data = {
  BISCUITS: [
    { name: "Treat", image: "https://img.freepik.com/free-photo/delicious-slices-snacks-with-cream_23-2148361978.jpg?uid=R199831080&ga=GA1.1.1254240009.1747050500&w=740" },
    { name: "Little Hearts", image: "https://img.freepik.com/free-photo/delicious-hamburger-with-french-fries_23-2148374824.jpg?uid=R199831080&ga=GA1.1.1254240009.1747050500&w=740" },
    { name: "Pure Magic", image: "https://img.freepik.com/free-photo/front-view-shrimp-batter-with-french-fries-fried-pita-bread-sauces_140725-13880.jpg?uid=R199831080&ga=GA1.1.1254240009.1747050500&w=740" },
    { name: "Nice Time", image: "https://img.freepik.com/free-photo/different-kinds-colorful-sandwiches-chopping-board_23-2147922312.jpg?uid=R199831080&ga=GA1.1.1254240009.1747050500&w=740" },
    { name: "Biscafe", image: "https://img.freepik.com/free-photo/side-view-club-sandwich-with-salted-cucumbers-lemon-olives-round-white-plate_176474-3049.jpg?uid=R199831080&ga=GA1.1.1254240009.1747050500&semt=ais_hybrid&w=740" },
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
    className={`${className} custom-slick-prev slick-arrow`}
    onClick={onClick}
  >
    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="white" viewBox="0 0 24 24">
      <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
    </svg>
  </button>
);

const CustomNextArrow = ({ className, onClick }) => (
  <button
    className={`${className} custom-slick-next slick-arrow`}
    onClick={onClick}
  >
    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="white" viewBox="0 0 24 24">
      <path d="M8.59 16.59L10 18l6-6-6-6-1.41 1.41L13.17 12z"/>
    </svg>
  </button>
);


export default function HomeBrand() {

  const [activeCategory, setActiveCategory] = useState("BISCUITS");

  const arrowsettings = {
  dots: true,
  infinite: true,
  // autoplay: true,
  slidesToShow: 5,
  slidesToScroll: 1,
  arrows: true,
  prevArrow: <CustomPrevArrow />,
  nextArrow: <CustomNextArrow />,
   responsive: [
    {
      breakpoint: 1024,
      settings: { slidesToShow: 3 },
    },
    {
      breakpoint: 768,
      settings: { slidesToShow: 2 },
    },
    {
      breakpoint: 576,
      settings: { slidesToShow: 2 },
    },
  ],
};




  return (
    <div id="Brand" className="bg-yellow py-10 pb-90 text-center pt-5" >
      <h2 className="pfont2 pt-50 clrred font-bold mb-4" >OUR BRANDS</h2>
      
<div className="d-flex flex-wrap justify-content-center gap-2 mb-4" style={{ marginBottom: "35px" }}>
  {categories.map((category) => (
    <button
      key={category}
      className={`btn  font-weight-medium rounded-pill category-btn ${
        activeCategory === category ? "bg-white text-black border-white" : "bg-danger text-white border border-danger"
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
