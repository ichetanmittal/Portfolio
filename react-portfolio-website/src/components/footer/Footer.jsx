import React from 'react'
import './footer.css'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsTwitter} from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
      <a href='#' className='footer__logo'></a>

      <ul className='permalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#experience'>Experience</a></li>
        {/* <li><a href='#services'>Services</a></li> */}
        {/* <li><a href='#portfolio'>Portfolio</a></li> */}
        {/* <li><a href='#testimonials'>Testimonials</a></li> */}
        <li><a href='#contact'>Contact</a></li> 
      </ul>

      <div className="footer__socials">
        <a href='https://twitter.com/ichetanmittal'><BsTwitter/></a>
        <a href='https://www.linkedin.com/in/ichetanmittal/'><BsLinkedin/></a>
        <a href='https://github.com/ichetanmittal'><BsGithub/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Chetan Mittal : CDAO</small>
      </div>
    </footer>
  )
}

export default Footer