import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>Skills</h5>
      <h2>My Experience</h2>

      <div className='container experience__container'>
        <div className='experience__frontend'>
          <h3></h3>
          <div className='experience__content'>
            <article className='experience__details'>
                  <BsPatchCheckFill className='experience__details-icon'/>
                  <div>
                  <h4>SHARDEUM</h4>
                  <small className='text-light'>Intern</small>
                  </div>
            </article>
            <article className='experience__details'>
                  <BsPatchCheckFill className='experience__details-icon'/>
                  <div>
                  <h4>Building CDAO</h4>
                  <small className='text-light'>Contributor & Moderator</small>
                  </div>
            </article>
            <article className='experience__details'>
                  <BsPatchCheckFill className='experience__details-icon'/>
                  <div>
                  <h4>Y-Combinator</h4>
                  <small className='text-light'>Startup School</small>
                  </div>
            </article>
            <article className='experience__details'>
                  <BsPatchCheckFill className='experience__details-icon'/>
                  <div>
                  <h4>GSSoC</h4>
                  <small className='text-light'>Contributor</small>
                  </div>
            </article>
          </div>
        </div>
        <div className='experience__backend'>
          {/* <h3>Blockchain , Tools & Utilities</h3> */}
          <div className='experience__content'>
            <article className='experience__details'>
                  <BsPatchCheckFill className='experience__details-icon'/>
                  <div>
                  <h4>E-Cell (NITJ)</h4>
                  <small className='text-light'>Junior Web-Developer</small>
                  </div>
            </article>
            <article className='experience__details'>
                  <BsPatchCheckFill className='experience__details-icon'/>
                  <div>
                  <h4>WDMC (NITJ)</h4>
                  <small className='text-light'>Web Development</small>
                  </div>
            </article>
            <article className='experience__details'>
                  <BsPatchCheckFill className='experience__details-icon'/>
                  <div>
                  <h4>ICP Blockchain</h4>
                  <small className='text-light'>CA</small>
                  </div>
            </article>
            {/* <article className='experience__details'>
                  <BsPatchCheckFill className='experience__details-icon'/>
                  <div>
                  <h4>GIT/Github</h4>
                  <small className='text-light'>Experienced</small>
                  </div>
            </article>
            <article className='experience__details'>
                  <BsPatchCheckFill className='experience__details-icon'/>
                  <div>
                  <h4>SOLIDITY</h4>
                  <small className='text-light'>Experienced</small>
                  </div>
            </article> */}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience