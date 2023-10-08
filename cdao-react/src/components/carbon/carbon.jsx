import React from 'react';
import './carbon.css'
import carbonNeutralBg from '../../assets/backdrop/v986-bg-07.jpg'
import plantation1 from '../../assets/plantationDrive/one.jpeg'
import plantation2 from '../../assets/plantationDrive/two.jpeg'
import plantation3 from '../../assets/plantationDrive/three.jpeg'
import plantation4 from '../../assets/plantationDrive/four.jpeg'

const Carbon = () => {

  const photos = document.getElementsByClassName("photo");
  let count = photos.length - 1;

  function photoClickHandler() {
      let topElement = photos[count];
      let currentIndex = parseInt(getComputedStyle(topElement).zIndex);
      let newIndex = currentIndex - photos.length;
      topElement.style.zIndex = newIndex;
      count--;

      if (count === -1) {
          count = photos.length - 1;
      }
  }
  for (let i = 0; i <= count; i++) {
    const relZInd = i + 100;
    photos[i].style.zIndex = relZInd;
    photos[i].addEventListener('click', photoClickHandler);
  }

  return (
    <div>
      <div className="carbon-neutral-dao" style={{
      backgroundImage: `url(${carbonNeutralBg})`
    }}>
        <div className="carbon-dao-text">
          <h2 className="highlight-text-light">Carbon Neutral DAO</h2>
          <p>
            Together, we embrace carbon neutrality, shaping a greener future through collective action.
            Join us on this journey towards a more sustainable world!
          </p>
          <div className="event-1">
            <h3>Plantation Drive</h3>
            <h2>June 1st, 2023</h2>
            <p>
              We're thrilled to announce the successful tree plantation that took place on the "World Environment Day" in our campus!
            </p>
          </div>
        </div>
        <div className="carbon-dao-image">
          <div className="photo-stack">
            <div className="photo img-landscape">
              <img src={plantation4} alt="" />
            </div>
            <div className="photo img-portrait">
              <img src={plantation3} alt="" />
            </div>
            <div className="photo img-landscape">
              <img src={plantation2} alt="" />
            </div>
            <div className="photo img-portrait">
              <img src={plantation1} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carbon;
