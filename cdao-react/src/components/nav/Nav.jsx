import React from 'react';
import './nav.css'
import LOGO from '../../assets/brandkit/LOGOPNGL.png'

const NavBar = () => {

  const scrollToView = (view) => {
    let element = document.getElementById(view);
    let headerOffset = 90;
    if (window.matchMedia("(max-width: 768px)").matches) {
      headerOffset = 70;
    }
    let elementPosition = element.getBoundingClientRect().top;
    let offsetPosition = elementPosition + window.pageYOffset - headerOffset;
  
    window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
    });
  }
  
  return (
    <div className="nav-bar">
      <div className="nav-bar-blinds"></div>
      <div className="nav-bar-logo">
        <span onClick={() => scrollToView('home')}>
          <img src={LOGO} alt="CDAO Logo" draggable="false" />
        </span>
      </div>
      <div className="nav-bar-items">
        <div className="item-link">
          <span onClick={() => scrollToView('events')}>Events</span>
        </div>
        <div className="item-link">
          <span onClick={() => scrollToView('partners')}>Partners</span>
        </div>
        <div className="item-link">
          <span onClick={() => scrollToView('faqs')}>FAQs</span>
        </div>
        <div className="item-link">
          <span onClick={() => scrollToView('community')}>Community</span>
        </div>
      </div>
      <div className="nav-bar-hamburger">
        <i className="fa-solid fa-bars-staggered"></i>
      </div>
    </div>
  );
};

export default NavBar;
