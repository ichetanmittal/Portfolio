import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/chetan.jpeg'
import HeaderSocial from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Chetan Mittal</h1>
        <h5 className='text-light'>Full Stack Developer</h5>
        <CTA />
        <HeaderSocial />

        <div >
            <img className = 'me'src={ME} alt='chetan'/>
        </div>

        <a href='#contact' className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header