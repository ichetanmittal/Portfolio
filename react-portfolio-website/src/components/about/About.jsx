import React from 'react'
import './about.css'
import ME from '../../assets/me1.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
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

            <article className='about__card'>
            <FiUsers className='about__icon'/>
                <h5>Clients</h5>
                <small>10+ Over India</small>
            </article>

            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
                <h5>Projects Contributed</h5>
                <small>5+ & Expanding</small>
            </article>
          </div>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam libero, dolores excepturi pariatur qui architecto voluptates deserunt consequatur maxime doloremque voluptatum quas commodi, quidem quisquam ratione quia et veniam quam.
            Quis vel ullam illum reprehenderit eligendi corporis repellendus ea similique iusto officia corrupti, nostrum tenetur nesciunt repudiandae odit molestiae commodi, nihil repellat omnis voluptatem? Vero quo corrupti blanditiis velit reiciendis!  
          </p>

          <a href='#contact' className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About