"use client";

import React from "react";

function TributeSection() {
    return (
        <section className="tg-memoriam-area">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-9 col-lg-10 text-center">

                        <span className="memoriam-sub-title">In Loving Memory</span>
                        <h2 className="memoriam-title">Honoring a Visionary Legacy</h2>

                        <div className="memoriam-frame-outer">
                            {/* Corner ornaments */}
                            <div className="corner-ornament tl"></div>
                            <div className="corner-ornament tr"></div>
                            <div className="corner-ornament bl"></div>
                            <div className="corner-ornament br"></div>

                            <div className="memoriam-video-border">
                                <div className="memoriam-video-box">

                                    {/* 16:9 Aspect Ratio Container */}
                                    <div className="player-wrapper" style={{ position: 'relative', paddingBottom: '56.25%', height: 0 }}>
                                        <iframe 
                                            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                                            src="https://www.youtube.com/embed/Yr-ecV4cR1k?si=tZqGtJmGHehYYUPw"  
                                            title="YouTube video player" 
                                            frameBorder="0" 
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                                            referrerPolicy="strict-origin-when-cross-origin" 
                                            allowFullScreen
                                        ></iframe>
                                    </div>

                                </div>
                            </div>

                        </div>
                        
                        {/* Footer Quote */}
                        <div className="memoriam-quote-box" data-wow-delay=".4s">
                            <p className="memoriam-quote-text">
                                <i className="fas fa-quote-left"></i>
                                Gone from our sight, but never from our hearts.
                                <i className="fas fa-quote-right"></i>
                            </p>
                        </div>
                        <div className="memoriam-divider"></div>

                    </div>
                </div>
            </div>
        </section>
    );
}

export default TributeSection;