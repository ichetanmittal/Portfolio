import React from 'react';
import './partners.css'
import MDD from '../../assets/images/partners/mdd-logo.jpg'
import TPH from '../../assets/images/partners/tph.jpg'
import CREWSPHERE from '../../assets/images/partners/crewsphere.jpeg'

const Partners = () => {
  return (
    <div className="partners-container" id="partners">
      <h2 className="partners-title highlight-text-dark">Our Partners</h2>
      <ul className="partner-list">
        <li>
          <div className="partner-info">
            <img src={MDD} alt="MDD Logo" className="partner-logo" />
            <div className="partner-details">
              <p className="partner-description"><strong>MDD</strong> A MoveLang Builders' community, focused on developer onboarding, education on Aptos Network, pioneering #MoveIndia Student Program.</p>
              <p className="chapter-lead">Chapter Lead - <a href="https://www.linkedin.com/in/arnav-anand-923232270/">Arnav Anand <i className="fa-brands fa-linkedin" style={{ padding: '0 2.5px' }}></i></a></p>
            </div>
          </div>
        </li>

        <li>
          <div className="partner-info">
            <img src={TPH} alt="TPH Logo" className="partner-logo" />
            <div className="partner-details">
              <p className="partner-description"><strong>The Product House</strong> Learn, build, grow and hang out in the coolest web3 community out there. Built with <i className="fa-solid fa-heart" style={{ padding: '0 2.5px' }}></i> by The Product Folks.</p>
              <p className="chapter-lead">Chapter Lead - <a href="https://www.linkedin.com/in/sanskar-dhyani-593239253/" >Sanskar Dhyani <i className="fa-brands fa-linkedin" style={{ padding: '0 2.5px' }}></i></a></p>
            </div>
          </div>
        </li>

        <li>
          <div className="partner-info">
            <img src={CREWSPHERE} alt="CREWSPHERE Logo" className="partner-logo" />
            <div className="partner-details">
              <p className="partner-description"><strong>Crewsphere: ICP India Hub</strong>Accelerating the adoption of #Web3 and #ICP in India.</p>
              <p className="chapter-lead">Chapter Lead - <a href="https://www.linkedin.com/in/jasmine-kaur-a20b91253/">Jasmine <i className="fa-brands fa-linkedin" style={{ padding: '0 2.5px' }}></i></a></p>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Partners;
