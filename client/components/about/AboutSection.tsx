import React from 'react';

import { GhostButton } from '../Button';
import AboutImageComposition from './AboutImageComposition';
import styles from './AboutSection.module.scss';

const AboutSection: React.FC = () => {
  return (
    <section className={`${styles.section}`}>
      <div className="u-margin-bottom-big u-center-text">
        <h2 className="heading-secondary">Exciting tours for adventurous people</h2>
      </div>
      <div className="row">
        <div className="col-1-of-2">
          <h3 className="heading-tertiary u-margin-bottom-small">You&apos;re going to fall in love with nature</h3>
          <p className="paragraph">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae recusandae maxime reiciendis doloribus, ad
            minima itaque nesciunt doloremque at odit sit. Expedita modi porro quas atque molestias quia nam? Aperiam!
          </p>
          <h3 className="heading-tertiary u-margin-bottom-small">Live adventures like you never have before</h3>
          <p className="paragraph">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi distinctio odit illo, minima incidunt.
          </p>

          <GhostButton text="Learn more →" asType="link" href={'#'} />
        </div>
        <div className="col-1-of-2">
          <AboutImageComposition />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
