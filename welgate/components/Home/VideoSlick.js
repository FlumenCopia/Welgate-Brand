'use client'

import React, { useState } from "react";

const images = [
  "/assets/img/IMG_5691.jpg",
  "/assets/img/IMG_5854.jpg",
  "/assets/img/WhatsApp Image 2025-05-12 at 14.39.11_b5a8f290.jpg",
];

export default function AccordionGallery() {
  const [activeIndex, setActiveIndex] = useState(1); // middle image expanded by default

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div>
      <div className="bg-danger text-white p-4" style={{marginTop:'80px'}}>hdndndn</div>

      <div style={{ position: "relative", width: "100%", height: "70vh", overflow: "hidden" }}>
        {/* Left Arrow */}
        <button
          onClick={handlePrev}
          style={{
            position: "absolute",
            top: "50%",
            left: 10,
            transform: "translateY(-50%)",
            zIndex: 10,
            background: "rgba(0,0,0,0.5)",
            color: "white",
            border: "none",
            borderRadius: "50%",
            width: 40,
            height: 40,
            cursor: "pointer",
            fontSize: 24,
            userSelect: "none",
          }}
          aria-label="Previous"
        >
          ‹
        </button>

        {/* Right Arrow */}
        <button
          onClick={handleNext}
          style={{
            position: "absolute",
            top: "50%",
            right: 10,
            transform: "translateY(-50%)",
            zIndex: 10,
            background: "rgba(0,0,0,0.5)",
            color: "white",
            border: "none",
            borderRadius: "50%",
            width: 40,
            height: 40,
            cursor: "pointer",
            fontSize: 24,
            userSelect: "none",
          }}
          aria-label="Next"
        >
          ›
        </button>

        <div
          style={{
            display: "flex",
            width: "100%",
            height: "100%",
          }}
        >
          {images.map((src, index) => {
            const isActive = index === activeIndex;

            return (
              <div
                key={index}
                onClick={() => setActiveIndex(index)}
                style={{
                  flex: isActive ? 3 : 1,
                  transition: "flex 0.5s ease",
                  overflow: "hidden",
                  cursor: "pointer",
                }}
              >
                <img
                  src={src}
                  alt={`Image ${index + 1}`}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    filter: isActive ? "brightness(1)" : "brightness(0.7)",
                    transition: "filter 0.3s ease",
                    userSelect: "none",
                    pointerEvents: "none",
                  }}
                  draggable={false}
                />
              </div>
            );
          })}
        </div>
      </div>

      <div className="bg-danger text-white p-4">hdndndn</div>
    </div>
  );
}
