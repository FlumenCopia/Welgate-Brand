'use client'
import React, { useEffect, useState } from 'react';
import Header3 from './Header3';
import Header2 from './Header2';

export default function HeaderSwitcher() {
  const [showSticky, setShowSticky] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 767);
    };

    const onScroll = () => {
      if (!isMobile) {
        setShowSticky(window.scrollY > 245);
      }
    };

    // Initial checks
    handleResize();
    onScroll();

    // Event listeners
    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', onScroll);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', onScroll);
    };
  }, [isMobile]);

  if (isMobile) {
    // Always show Header2 on mobile
    return (
      <div
        style={{
          position: 'fixed',
          top: 0,
          width: '100%',
          zIndex: 1001,
        }}
      >
        <Header2 />
      </div>
    );
  }

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
        <Header3 />
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
