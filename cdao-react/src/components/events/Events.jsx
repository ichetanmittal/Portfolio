import React from 'react';
import './events.css'
import eventSectionBg from '../../assets/backdrop/v627-aew-41-technologybackground.jpg'
import event1Poster from '../../assets/images/events/TEZASIA_hackathon.png'
import event2Poster from '../../assets/images/events/solidity_workshop_event.mp4'
import event3Poster from '../../assets/images/events/WEB3STORM_Session.png'

const Events = () => {
  return (
    <div className="events-container" id="events" style={{
      backgroundImage: `url(${eventSectionBg})`
    }}>
      <div className="events-title highlight-text-dark">Events</div>
      <div className="slider-container">
        <div className="slider-prev"><i className="fa-solid fa-chevron-left"></i></div>
        <div className="slider-view">
          <div className="view-event-cards">

            <div className="event-card event-card-3">
              <div className="event-thumbnail">
                <img src={event1Poster} alt="Event 1" />
              </div>
              <div className="event-details">
                <h3>TEZOS India × CDAO : TezAsia Hackathon 3.0</h3>
                <p>16 Jul - 31 Aug, 2023</p>
                <div className="event-details-desc">
                  <p>CDAO is thrilled to announce the collaboration of Tezos India Foundation with us for the highly anticipated #TezAsiaHackathon.</p>
                  <p>Gear yourself for a thrilling competition with whopping prizes.</p>
                  <p>Join & unlock your innovative potential!</p>
                  <i className="hashtags">CreativeCoding</i>
                  <i className="hashtags">HackToTheFuture</i>
                </div>
                <a href="http://bit.ly/TezAsia-CDAO" className="register-button" >Register<i className="fa-solid fa-up-right-from-square"></i></a>
              </div>
            </div>

            <div className="event-card event-card-2">
              <div className="event-details">
                <h3>WEB3 PB × BuildBear : Solidity Smart Contract Workshop</h3>
                <video autoPlay muted loop preload="metadata">
                  <source src={event2Poster} />
                </video>
                <a href="https://tally.so/r/31kQBM" className="register-button" >Register<i className="fa-solid fa-up-right-from-square"></i></a>
              </div>
            </div>

            <div className="event-card event-card-1">
              <div className="event-thumbnail">
                <img src={event3Poster} alt="Event 3" />
              </div>
              <div className="event-details">
                <h3>CDAO × Crewsphere : ICP India Hub, Web3.0 Storm</h3>
                <div className="event-details-desc">
                  <p>ICP India Hub brought together the endless possibilities of Web3.0.
                    Talks on Web3.0 and the future of the internet as the speakers dived deep into the realms of blockchain, DeFi, NFTs, and careers in Tech.</p>
                  <p>
                    <i className="hashtags">web3.0</i>
                    <i className="hashtags">community-driven</i>
                  </p>
                </div>
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSd1nUAEFBs8GbNHfWF6t15HsU4O4auvPy6O6EAZ2drGrAPb4w/viewform?usp=sf_link" className="register-button feedback-button" >feedback<i className="fa-solid fa-up-right-from-square"></i></a>
              </div>
            </div>

          </div>
        </div>
        <div className="slider-next"><i className="fa-solid fa-chevron-right"></i></div>
      </div>
    </div>
  );
}

export default Events;
