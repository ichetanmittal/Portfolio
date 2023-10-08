import React from 'react';
import './section.css'; // Make sure to import the CSS file where the animation styles are defined

const Section = () => {
  return (
    <div className="section-divider">
      <div className="marquee">
        <span>CDAO × WEB3 PB × BuildBear : Solidity Smart Contract Workshop</span>
        <span>TEZOS India × CDAO : TezAsia Hackathon 3.0</span>
        <span>Brace yourself for Chapter 2.0 of our CDAO journey!</span>
        <span>Join us as we embark on this exciting chapter, where limitless possibilities emerge. Stay tuned!</span>
      </div>
    </div>
  );
};

export default Section;
