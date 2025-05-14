"use client";
import $ from "jquery";
import "magnific-popup";
import React, { useState, useEffect } from "react";
import axios from 'axios';
// import $ from "jquery";

function GalleryPage() {

  const [gallery, setGallery] = useState([]);


  useEffect(() => {
    if (typeof window !== "undefined") {
      $(".gallery-container").magnificPopup({
        delegate: "a",
        type: "image",
        gallery: { enabled: true },
      });
    }
  }, [gallery]);


   const fetchData = async () => {
    try {
      const response = await axios.get("http://127.0.0.1:8000/api/gallery/");
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


<section className="breadcrumbbanner">
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
            href={item.fullImage || `http://127.0.0.1:8000${item.images}`}
            className="col-md-4 mb-4"
          >
            <img
              src={item.thumbnail || `http://127.0.0.1:8000${item.images}`} 
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