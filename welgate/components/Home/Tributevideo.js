"use client";

import React, { useRef, useEffect, useState } from "react";

function TributeSection() {
    const videoRef = useRef(null);
    // const nameRef = useRef(null);
    const sectionRef = useRef(null);
    const [isMuted, setIsMuted] = useState(true);

    /* 🔹 Scroll-based play / pause */
useEffect(() => {
    let hasPlayed = false;

    const observer = new IntersectionObserver(
        ([entry]) => {
            if (!videoRef.current || hasPlayed) return;

            if (entry.isIntersecting) {
                videoRef.current.play().catch(() => {});
                hasPlayed = true;
            }
        },
        { threshold: 0.6 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
}, []);

    /* 🔹 Click to play / pause */
    const togglePlay = () => {
        if (!videoRef.current) return;

        if (videoRef.current.paused) {
            videoRef.current.play();
        } else {
            videoRef.current.pause();
        }
    };

    /* 🔹 Mute / Unmute */
    const toggleMute = () => {
        if (!videoRef.current) return;

        videoRef.current.muted = !isMuted;
        setIsMuted(!isMuted);
    };

    return (
        <section className="tg-memoriam-area" ref={sectionRef}>
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
                                <div className="memoriam-video-box" onClick={togglePlay}>

                                    <video
                                        ref={videoRef}
                                        muted
                                        playsInline
                                        preload="metadata"
                                        controls={false}
                                        poster="/assets/img/placeholder.jpg"
                                    >
                                        <source src="/assets/img/video2.mp4" type="video/mp4" />
                                    </video>

                                    {/* 🔊 Mute Button */}
                                    <button
                                        className="mute-toggle"
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            toggleMute();
                                        }}
                                    >
                                        {isMuted ? "🔇" : "🔊"}
                                    </button>

                                </div>
                            </div>

                        </div>
                        {/* Footer Quote */}
                        
                        <div
                            className="memoriam-quote-box"
                            data-wow-delay=".4s"
                        >
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
