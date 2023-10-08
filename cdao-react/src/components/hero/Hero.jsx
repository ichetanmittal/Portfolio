import React from 'react';
import './hero.css'
import bodyBgrVideo from '../../assets/backdrop/main-body-bg-mr.mp4';

const Hero = () => {
  return (
    <div>
      <div className="main-body" id="home">
        <video autoPlay muted loop preload="none">
          <source src={bodyBgrVideo} type="video/mp4" />
        </video>
        <div className="main-body-objective">
          <div className="objective-title">CDAO</div>
          <div className="objective-subtitle highlight-text-dark">
            Empowering Decentralization.
          </div>
          <div className="objective-description">
            Decentralizing college clubs, empowering community-driven innovation and collaboration. Join us in creating a hierarchy-free space for new ideas and projects.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
