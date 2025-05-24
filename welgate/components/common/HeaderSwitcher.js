'use client'
import React, { useEffect, useState } from 'react';
import Header from './Header';   // adjust the path to your Header
import Header2 from './Header2'; // adjust path to your Header2

export default function HeaderSwitcher() {
  const [showSticky, setShowSticky] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 245) {
        setShowSticky(true);
      } else {
        setShowSticky(false);
      }
    };

    window.addEventListener('scroll', onScroll);
    onScroll(); // initial check

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <div
        style={{
          opacity: showSticky ? 0 : 1,
          pointerEvents: showSticky ? 'none' : 'auto',
          transition: 'opacity 0.5s ease',
          position: 'fixed',
          top: 0,
          width: '100%',
          zIndex: 1000,
        }}
      >
        <Header />
      </div>

      <div
        style={{
          opacity: showSticky ? 1 : 0,
          pointerEvents: showSticky ? 'auto' : 'none',
          transition: 'opacity 0.5s ease',
          position: 'fixed',
          top: 0,
          width: '100%',
          zIndex: 1001,
        }}
      >
        <Header2 />
      </div>

 
    </>
  );
}
