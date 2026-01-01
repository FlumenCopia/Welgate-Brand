"use client";

import React, { useEffect, useRef, useState } from "react";

function TributeSection() {
    const playerRef = useRef(null);
    const containerRef = useRef(null);
    const sectionRef = useRef(null); // Reference for the Scroll Observer
    
    // Playback State
    const [isPlaying, setIsPlaying] = useState(false);
    const [isMuted, setIsMuted] = useState(true);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [isDragging, setIsDragging] = useState(false);
    const [hasAutoPlayed, setHasAutoPlayed] = useState(false); // Track if we already triggered scroll-play

    // 🔹 1. Load API
    useEffect(() => {
        if (window.YT && window.YT.Player) {
            initPlayer();
        } else {
            const tag = document.createElement('script');
            tag.src = "https://www.youtube.com/iframe_api";
            tag.async = true;
            const firstScriptTag = document.getElementsByTagName('script')[0];
            firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
            window.onYouTubeIframeAPIReady = () => initPlayer();
        }
        return () => { if (playerRef.current) playerRef.current.destroy(); };
    }, []);

    const initPlayer = () => {
        if (!containerRef.current) return;
        playerRef.current = new window.YT.Player(containerRef.current, {
            videoId: 'iAb1SgB1hwg',
            height: '100%',
            width: '100%',
            playerVars: {
                autoplay: 0, // 🔹 Wait for scroll to play
                mute: 1,     // Must be muted to allow auto-play commands
                controls: 0,
                modestbranding: 1,
                rel: 0,
                playsinline: 1,
                loop: 1,
                playlist: 'iAb1SgB1hwg'
            },
            events: {
                onReady: (event) => {
                    setDuration(event.target.getDuration());
                    // Player is ready, but we wait for the Observer to trigger play
                },
                onStateChange: (event) => {
                    // Sync React state with actual Player state
                    setIsPlaying(event.data === window.YT.PlayerState.PLAYING);
                }
            }
        });
    };

    // 🔹 2. Scroll Observer (Triggers Play)
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                // If visible, player exists, and hasn't played yet -> PLAY
                if (entry.isIntersecting && playerRef.current && playerRef.current.playVideo && !hasAutoPlayed) {
                    playerRef.current.playVideo();
                    setHasAutoPlayed(true);
                }
            },
            { threshold: 0.6 } // Trigger when 60% of section is visible
        );

        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, [hasAutoPlayed]); // Re-run only if hasAutoPlayed changes

    // 🔹 3. Sync Slider
    useEffect(() => {
        const interval = setInterval(() => {
            if (playerRef.current && playerRef.current.getCurrentTime && !isDragging) {
                const time = playerRef.current.getCurrentTime();
                if (time) setCurrentTime(time);
            }
        }, 500);
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
        setCurrentTime(newTime);
        playerRef.current.seekTo(newTime, true);
    };

    return (
        <section className="tg-memoriam-area" ref={sectionRef}>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-9 col-lg-10 text-center">

                        <span className="memoriam-sub-title">In Loving Memory</span>
                        <h2 className="memoriam-title">Honoring a Visionary Legacy</h2>

                        <div className="memoriam-frame-outer">
                            <div className="corner-ornament tl"></div>
                            <div className="corner-ornament tr"></div>
                            <div className="corner-ornament bl"></div>
                            <div className="corner-ornament br"></div>

                            <div className="memoriam-video-border">
                                <div className="memoriam-video-box" style={{ position: 'relative' }}>

                                    <div className="player-wrapper" style={{ 
                                        position: 'relative', 
                                        paddingBottom: '56.25%', 
                                        height: 0, 
                                        overflow: 'hidden', 
                                        background: '#000' 
                                    }}>
                                        
                                        {/* ZOOM HACK (Hides Youtube Overlays) */}
                                        <div style={{
                                            position: 'absolute',
                                            top: '-17%',
                                            left: '-17%',
                                            width: '134%',
                                            height: '134%',
                                            pointerEvents: 'none'
                                        }}>
                                            <div ref={containerRef} style={{ width: '100%', height: '100%' }} />
                                        </div>
                                        
                                        {/* Invisible Click Overlay */}
                                        <div 
                                            onClick={togglePlay}
                                            style={{ 
                                                position: 'absolute', 
                                                top: 0, 
                                                left: 0, 
                                                width: '100%', 
                                                height: 'calc(100% - 50px)', 
                                                cursor: 'pointer',
                                                zIndex: 5 
                                            }}
                                        ></div>
                                    </div>

                                    {/* CONTROLS BAR */}
                                    <div style={{
                                        position: 'absolute',
                                        bottom: 0,
                                        left: 0,
                                        width: '100%',
                                        height: '50px',
                                        background: 'rgba(0,0,0,0.7)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        padding: '0 15px',
                                        zIndex: 10,
                                        gap: '15px'
                                    }}>
                                        <button onClick={togglePlay} style={btnStyle}>
                                            {isPlaying ? "⏸" : "▶️"}
                                        </button>

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
                                            style={{ flex: 1, cursor: 'pointer', accentColor: '#fff' }}
                                        />

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