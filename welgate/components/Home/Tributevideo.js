"use client";

import React, { useEffect, useRef, useState } from "react";

function TributeSection() {
    const playerRef = useRef(null);      // Holds the YouTube Player instance
    const containerRef = useRef(null);   // Holds the div where the iframe will be injected
    const TRIBUTE_VIDEO_ID = "Yr-ecV4cR1k";
    
    // Playback State
    const [isPlaying, setIsPlaying] = useState(false);
    const [isMuted, setIsMuted] = useState(true);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [isDragging, setIsDragging] = useState(false); // To stop slider jumping while dragging

    // 🔹 1. Load the YouTube API Script
    useEffect(() => {
        // If API is already loaded, init immediately
        if (window.YT && window.YT.Player) {
            initPlayer();
        } else {
            // Otherwise, load the script
            const tag = document.createElement('script');
            tag.src = "https://www.youtube.com/iframe_api";
            tag.async = true;
            const firstScriptTag = document.getElementsByTagName('script')[0];
            firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
            
            // Wait for API to be ready
            window.onYouTubeIframeAPIReady = () => initPlayer();
        }

        return () => {
            // Cleanup: Destroy player on unmount
            if (playerRef.current) {
                playerRef.current.destroy();
            }
        };
    }, []);

    // 🔹 2. Initialize the Player
    const initPlayer = () => {
        if (!containerRef.current) return;

        playerRef.current = new window.YT.Player(containerRef.current, {
            videoId: TRIBUTE_VIDEO_ID, // Your Video ID
            height: '100%',
            width: '100%',
            playerVars: {
                autoplay: 1,
                mute: 1, // Start muted for autoplay
                controls: 0, // Hide default controls
                modestbranding: 1,
                rel: 0,
                playsinline: 1,
                loop: 1,
                playlist: TRIBUTE_VIDEO_ID
            },
            events: {
                onReady: (event) => {
                    setDuration(event.target.getDuration());
                    setIsPlaying(true); // Since we set autoplay: 1
                },
                onStateChange: (event) => {
                    // Update React state if video pauses/plays externally (e.g. by clicking video)
                    setIsPlaying(event.data === window.YT.PlayerState.PLAYING);
                }
            }
        });
    };

    // 🔹 3. Sync Progress Bar (Poll every second)
    useEffect(() => {
        const interval = setInterval(() => {
            if (playerRef.current && playerRef.current.getCurrentTime && !isDragging) {
                const time = playerRef.current.getCurrentTime();
                // Sometimes API returns undefined or 0 briefly
                if (time) setCurrentTime(time);
            }
        }, 500); // Check every 0.5s

        return () => clearInterval(interval);
    }, [isDragging]);


    /* --- CONTROLS --- */

    const togglePlay = () => {
        if (!playerRef.current) return;
        if (isPlaying) {
            playerRef.current.pauseVideo();
        } else {
            playerRef.current.playVideo();
        }
        setIsPlaying(!isPlaying);
    };

    const toggleMute = () => {
        if (!playerRef.current) return;
        if (isMuted) {
            playerRef.current.unMute();
            setIsMuted(false);
        } else {
            playerRef.current.mute();
            setIsMuted(true);
        }
    };

    const handleSeekChange = (e) => {
        const newTime = parseFloat(e.target.value);
        setCurrentTime(newTime); // Update slider visually immediately
        playerRef.current.seekTo(newTime, true);
    };

    return (
        <section className="tg-memoriam-area">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-9 col-lg-10 text-center">

                        <span className="memoriam-sub-title">In Loving Memory</span>
                        <h2 className="memoriam-title">Honoring a Visionary Legacy</h2>

                        <div className="memoriam-frame-outer">
                            {/* Ornaments */}
                            <div className="corner-ornament tl"></div>
                            <div className="corner-ornament tr"></div>
                            <div className="corner-ornament bl"></div>
                            <div className="corner-ornament br"></div>

                            <div className="memoriam-video-border">
                                <div className="memoriam-video-box" style={{ position: 'relative' }}>

                                    {/* VIDEO CONTAINER */}
                                    <div className="player-wrapper" style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', background: '#000' }}>
                                        {/* API replaces this div with the iframe */}
                                        <div 
                                            ref={containerRef} 
                                            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }} 
                                        />
                                        
                                        {/* Overlay to prevent clicking YouTube logo (Keep Clean UI) */}
                                        <div 
                                            onClick={togglePlay} // Clicking video toggles play
                                            style={{ 
                                                position: 'absolute', 
                                                top: 0, 
                                                left: 0, 
                                                width: '100%', 
                                                height: 'calc(100% - 50px)', // Leave space for controls at bottom
                                                cursor: 'pointer',
                                                zIndex: 5 
                                            }}
                                        ></div>
                                    </div>

                                    {/* 🎛️ CUSTOM CONTROLS BAR */}
                                    <div style={{
                                        position: 'absolute',
                                        bottom: 0,
                                        left: 0,
                                        width: '100%',
                                        height: '50px',
                                        background: 'rgba(0,0,0,0.7)', // Semi-transparent black
                                        display: 'flex',
                                        alignItems: 'center',
                                        padding: '0 15px',
                                        zIndex: 10,
                                        gap: '15px'
                                    }}>
                                        
                                        {/* Play/Pause Button */}
                                        <button onClick={togglePlay} style={btnStyle}>
                                            {isPlaying ? "⏸" : "▶️"}
                                        </button>

                                        {/* Seek Slider */}
                                        <input
                                            type="range"
                                            min={0}
                                            max={duration || 100}
                                            value={currentTime}
                                            onChange={handleSeekChange}
                                            onMouseDown={() => setIsDragging(true)}
                                            onMouseUp={() => setIsDragging(false)}
                                            onTouchStart={() => setIsDragging(true)}
                                            onTouchEnd={() => setIsDragging(false)}
                                            style={{
                                                flex: 1,
                                                cursor: 'pointer',
                                                accentColor: '#fff' // Makes the slider white
                                            }}
                                        />

                                        {/* Mute Button */}
                                        <button onClick={toggleMute} style={btnStyle}>
                                            {isMuted ? "🔇" : "🔊"}
                                        </button>
                                    </div>

                                </div>
                            </div>

                        </div>
                        
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

// Simple styles for the buttons
const btnStyle = {
    background: 'none',
    border: 'none',
    color: 'white',
    fontSize: '20px',
    cursor: 'pointer',
    padding: '0 5px',
    lineHeight: '1'
};

export default TributeSection;