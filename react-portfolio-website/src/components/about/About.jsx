import React from 'react'
import './about.css'
import ME from '../../assets/me1.jpg'
import {FaAward} from 'react-icons/fa'
// import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'


const About = () => {
  return (
    <section id='about'>
      <h5>Get to know</h5>
      <h2>About Me</h2>

      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
            <img src={ME} alt='About'></img>
          </div>
        </div>

        <div className='about__content'>
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon'/>
                <h5>Experience</h5>
                <small>2+ yeaers into Blockchain space</small>
            </article>

            {/* <article className='about__card'>
            <FiUsers className='about__icon'/>
                <h5>Clients</h5>
                <small>10+ Over India</small>
            </article> */}

            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
                <h5>Projects Contributed</h5>
                <small>5+ & Expanding</small>
            </article>
          </div>

          <p>
            Hola , I am Currently Pursuing Bachelors in Information Technology at NIT Jalandhar. My Core interests lie in the Blockchain and Web3 Technology. My Passion has already led me into two web3 based sartups. Currently building projects on the concept of Creator Economy, in challenge to today's highly centralised world. Latest project being CDAO.
          </p>
          <p>#WAGMI #buildwithCDAO </p>

          <a href='#contact' className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About