import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
      <h5>What i Offer</h5>
      <h2>Services</h2>

      <div className='container services__container'>
        <article className='service'>
          <div className='service__head'>
            <h3>FrontEnd</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>HTML5 (Advanced)</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>CSS (Intermediate)</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>JS (Intermediate)</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>React.JS (Intermediate)</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Bootstrap (Advanced)</p>
            </li>
            {/* <li>
              <BiCheck className='service__list-icon'/>
              <p>Lorem fbiu dfivbjk sfdocbibv</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Lorem fbiu dfivbjk sfdocbibv</p>
            </li> */}
          </ul>  
        </article>
        <article className='service'>
          <div className='service__head'>
            <h3>Backend & Databases</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Npm & Express (Beginner)</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Typescript (Beginner)</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Database - Mongo & MySQL (Beginner)</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Motoko (Beginner)</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Solidity(Expert)</p>
            </li>
          </ul>  
        </article>
        <article className='service'>
          <div className='service__head'>
            <h3>Language , Tools & Utilities</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Git/Github (Advanced)</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Vercel , Hardhat</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>C++(Beginner)</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Python (Intermediate)</p>
            </li>
          </ul>  
        </article>
      </div>
    </section>
  )
}

export default Services