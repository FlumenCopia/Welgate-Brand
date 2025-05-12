"use client";
import React, { useEffect } from "react";
import $ from "jquery";
import "magnific-popup";

function GalleryPage() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      $(".gallery-container").magnificPopup({
        delegate: "a",
        type: "image",
        gallery: { enabled: true },
      });
    }
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

    <div className="container mb-5 pb-2">


      <div className="row gallery-container mb-4 ">
        <a href="https://unsplash.it/1200/768.jpg?image=251" className="col-md-4">
          <img src="https://unsplash.it/600.jpg?image=251" className="img-fluid rounded" alt="Gallery Image 1"/>
        </a>
        <a href="https://unsplash.it/1200/768.jpg?image=252" className="col-md-4">
          <img src="https://unsplash.it/600.jpg?image=252" className="img-fluid rounded" alt="Gallery Image 2"/>
        </a>
        <a href="https://unsplash.it/1200/768.jpg?image=253" className="col-md-4">
          <img src="https://unsplash.it/600.jpg?image=253" className="img-fluid rounded" alt="Gallery Image 3"/>
        </a>
      </div>
      <div className="row gallery-container mb-4">
        <a href="https://unsplash.it/1200/768.jpg?image=254" className="col-md-4">
          <img src="https://unsplash.it/600.jpg?image=254" className="img-fluid rounded" alt="Gallery Image 4"/>
        </a>
        <a href="https://unsplash.it/1200/768.jpg?image=255" className="col-md-4">
          <img src="https://unsplash.it/600.jpg?image=255" className="img-fluid rounded" alt="Gallery Image 5"/>
        </a>
        <a href="https://unsplash.it/1200/768.jpg?image=256" className="col-md-4">
          <img src="https://unsplash.it/600.jpg?image=256" className="img-fluid rounded" alt="Gallery Image 6"/>
        </a>
      </div>
    </div>
    </div>

  );
}

export default GalleryPage;