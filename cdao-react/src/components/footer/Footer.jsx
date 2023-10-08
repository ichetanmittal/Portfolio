import React from 'react';
import './footer.css';
import LOGO from '../../assets/brandkit/LOGOPNGL.png';

const Footer = () => {
  return (
    <div>
      <div className="footer">
        <div className="footer-socials" id="community">
          <div className="social-item">
            <i className="fab fa-discord"></i>
            <a href="https://discord.com/invite/GC3qcUvkA5">Discord</a>
          </div>
          <div className="social-item">
            <i className="fab fa-telegram"></i>
            <a href="https://t.me/+G3mxLby_mYEyOTll">Telegram</a>
          </div>
          <div className="social-item">
            <i className="fab fa-twitter"></i>
            <a href="https://twitter.com/CdaoNitj">Twitter</a>
          </div>
          <div className="social-item">
            <i className="fab fa-instagram"></i>
            <a href="https://www.instagram.com/cdao_nitj/">Instagram</a>
          </div>
          <div className="social-item">
            <i className="fab fa-linkedin"></i>
            <a href="https://www.linkedin.com/company/cdao-nitj/">LinkedIn</a>
          </div>
          <div className="social-item">
            <i className="fas fa-envelope"></i>
            <a href="mailto:cdao.fun@gmail.com">Mail</a>
          </div>
          <div className="social-item">
            <i className="fab fa-youtube"></i>
            <a href="https://www.youtube.com/@C-DAO">Youtube</a>
          </div>
        </div>
        <div className="footer-body">
          <div className="foot-notes">
            <p className="org">
              <img src={LOGO} alt="logoCDAO" className="src"></img>
            </p>
            <p className="org-desc">College Decentralised Autonomous Organisation</p>
            <p className="org-contact">
              DR BR Ambedkar National Institute Of Technology, Jalandhar<br></br>
              Punjab, India.
            </p>
            <p className="org-rights">Made with <i className="fas fa-heart"></i> by teams at CDAO.</p>
          </div>
          <div className="foot-newsletter">
            <p className="foot-newsletter-title">Join newsletter.</p>
            <p className="foot-newsletter-desc">Get the latest news and updates from CDAO.</p>
            <form className="foot-newsletter-form" id="newsletter-form">
              <input type="email" name="email" placeholder="Your email" autoComplete="off" required></input>
              <button type="submit" name="submit" aria-label="Send"><i className="fas fa-paper-plane"></i></button>
            </form>
            <p className="foot-newsletter-msg"></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
