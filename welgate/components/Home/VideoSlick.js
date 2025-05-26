'use client'

import React, { useState, useEffect, useRef } from "react";

const images = [
  "/assets/img/IMG_5691.jpg",
  "/assets/img/IMG_5854.jpg",
  "/assets/img/WhatsApp Image 2025-05-12 at 14.39.11_b5a8f290.jpg",
];

export default function AccordionGallery() {
  const [activeIndex, setActiveIndex] = useState(1); // middle image expanded
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div>
      <div className="bgprimary text-white p-4 text-center fw-bold" style={{ marginTop: '80px' }}>
        WE ARE A RESPONSIBLE GLOBAL TOTAL FOODS COMPANY
      </div>

      <div
        style={{
          position: "relative",
          width: "100%",
          height: isMobile ? "100vh" : "70vh",
          overflow: "hidden",
        }}
      >
        {/* Arrows */}
        <button
          onClick={handlePrev}
          style={{
            position: "absolute",
            [isMobile ? "top" : "left"]: 10,
            [isMobile ? "left" : "top"]: "50%",
            transform: isMobile ? "none" : "translateY(-50%)",
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

        <button
          onClick={handleNext}
          style={{
            position: "absolute",
            [isMobile ? "bottom" : "right"]: 10,
            [isMobile ? "left" : "top"]: "50%",
            transform: isMobile ? "none" : "translateY(-50%)",
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
            flexDirection: isMobile ? "column" : "row",
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
                  width: isMobile ? "100%" : undefined,
                  height: isMobile ? undefined : "100%",
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

      <div className="bgprimary text-white d-flex justify-content-center p-4">
        <button className="btn tg-btn text-danger bg-white">Know More</button>
      </div>
    </div>
  );
}
