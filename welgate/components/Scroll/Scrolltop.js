'use client'
import React from 'react'
import { useEffect } from 'react';

function Scrolltop() {

  useEffect(() => {
    // Load jQuery and custom scroll function
    const jquery = document.createElement("script");
    jquery.src = "/assets/js/vendor/jquery-3.6.0.min.js";
    jquery.onload = () => {
      const main = document.createElement("script");
      main.src = "/assets/js/main.js";
      document.body.appendChild(main);
    };
    document.body.appendChild(jquery);
  }, []);

  return (
    <div>
        <button className="scroll-top scroll-to-target" data-target="html">
            <i className="fas fa-angle-up"></i>
        </button>
    </div>
  )
}

export default Scrolltop