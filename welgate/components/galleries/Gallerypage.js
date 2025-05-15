"use client";
export const dynamic = "force-dynamic";

import React, { useState, useEffect } from "react";
import axios from 'axios';
import $ from "jquery";

function GalleryPage() {
  const [gallery, setGallery] = useState([]);

  useEffect(() => {
    // Dynamically import magnific-popup only in the browser
    if (typeof window !== "undefined") {
      import("magnific-popup").then(() => {
        $(".gallery-container").magnificPopup({
          delegate: "a",
          type: "image",
          gallery: { enabled: true },
        });
      });
    }
  }, [gallery]);

  const fetchData = async () => {
    try {
      const response = await axios.get("https://welgatelifestyle.com/api/gallery/");
      setGallery(response.data);
    } catch (error) {
      console.error("Error fetching gallery:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <section className="breadcrumbgallery">
        <nav className="container breadcrumb-container">
          <h3 className="breadcrumbstyle">Gallery</h3>
          <ol className="cd-breadcrumb">
            <li><a href="/">Home</a></li>
            <li className="current text-success">Gallery</li>
          </ol>
        </nav>
      </section>

      <div className="container">
        <div className="row gallery-container gallerymargin mb-4">
          {gallery.map((item, index) => (
            <a
              key={index}
              href={item.fullImage || `https://welgatelifestyle.com${item.images}`}
              className="col-md-4 mb-4"
            >
              <img
                src={item.thumbnail || `https://welgatelifestyle.com${item.images}`}
                className="img-fluid rounded"
                alt={`Gallery Image ${index + 1}`}
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default GalleryPage;
