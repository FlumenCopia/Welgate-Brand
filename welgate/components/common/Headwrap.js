'use client'
import React, { useState, useEffect } from 'react';
import Header from './Header';
import Header2 from './Header2';

export default function Headwrap() {
  const [showSticky, setShowSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setShowSticky(scrollY > 245);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {showSticky ? <Header2 /> : <Header />}
    </>
  );
}
