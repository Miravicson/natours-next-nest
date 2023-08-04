import React from 'react';

import AboutImageComposition from './AboutImageComposition';
import styles from './AboutSection.module.css';
import { GhostButton } from './Button';

const AboutSection: React.FC = () => {
  return (
    <section className={`${styles.AboutSection}`}>
      <div className="u-margin-bottom-big text-center">
        <h2 className="heading-secondary">Exciting tours for adventurous people</h2>
      </div>
      <div className="row grid grid-cols-2 gap-x-gutter-horizontal gap-y-gutter-vertical">
        <div className="col-span-1">
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
        <div className="col-span-1">
          <AboutImageComposition />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
