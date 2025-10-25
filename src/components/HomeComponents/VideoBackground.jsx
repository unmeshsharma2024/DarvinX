import React, { useState, useRef, useEffect } from 'react';
import helxonOrbitVideo from '../../assets/helxonOrbitVideo.mp4';
import './VideoBackground.scss';

export function VideoBackground() {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      // Set video properties for seamless looping
      video.addEventListener('loadeddata', () => {
        setVideoLoaded(true);
        // Ensure smooth looping by setting currentTime to 0
        video.currentTime = 0;
      });
      
      video.addEventListener('error', () => setVideoError(true));
      
      // Handle loop events to prevent flickering
      video.addEventListener('timeupdate', () => {
        // If we're near the end, smoothly transition to beginning
        if (video.currentTime >= video.duration - 0.1) {
          video.currentTime = 0;
        }
      });

      // Preload the video for smoother playback
      video.preload = 'auto';
      
      return () => {
        video.removeEventListener('loadeddata', () => setVideoLoaded(true));
        video.removeEventListener('error', () => setVideoError(true));
        video.removeEventListener('timeupdate', () => {});
      };
    }
  }, []);

  return (
    <div className="video-background">
      <video
        ref={videoRef}
        className="video-background__video"
        autoPlay
        loop
        muted
        playsInline
        style={{ opacity: videoLoaded ? 1 : 0 }}
      >
        <source src={helxonOrbitVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      {/* Fallback content - only show if video fails to load */}
      {!videoLoaded && (
        <div className="video-background__fallback">
          <div className="video-background__central-sphere"></div>
          <div className="video-background__orbiting-sphere video-background__orbiting-sphere--blue"></div>
          <div className="video-background__orbiting-sphere video-background__orbiting-sphere--cyan"></div>
          <div className="video-background__orbiting-sphere video-background__orbiting-sphere--yellow"></div>
          <div className="video-background__orbiting-sphere video-background__orbiting-sphere--pink"></div>
          <div className="video-background__orbiting-sphere video-background__orbiting-sphere--white"></div>
        </div>
      )}
    </div>
  );
}
