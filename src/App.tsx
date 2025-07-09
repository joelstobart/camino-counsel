
import { useEffect, useRef } from 'react';
import './App.css';

function App() {
    const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.play().catch(() => {
        // Handle autoplay restrictions
      });
    }
  }, []);

  return (
    <div className="app">
      <video
        ref={videoRef}
        className="background-video"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/assets/camino-counsel-background.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="overlay" />

      <div className="content">
        <img
          src="/assets/camino-counsel-white.svg"
          alt="Camino Counsel"
          className="logo"
        />
        <p className="tagline">walk with purpose</p>
      </div>
    </div>
  );
}

export default App;
