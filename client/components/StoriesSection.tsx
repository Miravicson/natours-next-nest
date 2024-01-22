import React from 'react';

import styles from './StoriesSection.module.css';

const StoriesSection: React.FC = () => {
  return (
    <section className={`${styles.StoriesSection}`}>
      <div className="bg-video">
        <video autoPlay muted loop className="bg-video__content">
          <source src="img/video.mp4" type="video/mp4" />
          <source src="img/video.webm" type="video/webm" />
          Your browser is not supported!
        </video>
      </div>
      <div className="u-center-text u-margin-bottom-big">
        <h2 className="heading-secondary">We make people genuinely happy</h2>
      </div>
      <div className="row">
        <div className="story">
          <figure className="story__shape">
            <img src="img/nat-8.jpg" alt="Person on a tour" className="story__img" />
            <figcaption className="story__caption">Mary Smith</figcaption>
          </figure>
          <div className="story__text">
            <div className="u-margin-bottom-small">
              <h3 className="heading-tertiary">I had the best week ever with my family.</h3>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus ratione necessitatibus sint commodi
              mollitia officiis asperiores corrupti, quia nisi temporibus laboriosam ipsum aspernatur, quas odio tenetur
              omnis molestias deserunt fugit! Lorem, ipsum dolor sit amet consectetur adipisicing elit
            </p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="story">
          <figure className="story__shape">
            <img src="img/nat-9.jpg" alt="Person on a tour" className="story__img" />
            <figcaption className="story__caption">Jack Wilson</figcaption>
          </figure>
          <div className="story__text">
            <div className="u-margin-bottom-small">
              <h3 className="heading-tertiary">WOW! My life is completely different now.</h3>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus ratione necessitatibus sint commodi
              mollitia officiis asperiores corrupti, quia nisi temporibus laboriosam ipsum aspernatur, quas odio tenetur
              omnis molestias deserunt fugit!
            </p>
          </div>
        </div>
      </div>
      <div className="u-center-text u-margin-top-huge">
        <a href="#" className="btn-text">
          Read All Stories →
        </a>
      </div>
    </section>
  );
};

export default StoriesSection;
