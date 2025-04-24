import Image from 'next/image';
import React from 'react';

import styles from './FeaturesSection.module.scss';

function FeatureBox({ icon, title, text }: { icon: string; title: string; text: string }) {
  return (
    <div className={`${styles.featureBox}`}>
      <i className={`${styles.featureBoxIcon} ${icon}`} />
      <h3 className="heading-tertiary u-margin-bottom-small">{title}</h3>
      <p>{text}</p>
    </div>
  );
}

const FeaturesSection: React.FC = () => {
  return (
    <section className={`${styles.section}`}>
      <Image src="/img/nat-4.jpg" alt="feature background" fill className={`${styles.backgroundImage}`} />

      <div className={`${styles.background}`}></div>
      <div className="row">
        <div className="col-1-of-4">
          <FeatureBox
            icon="icon-basic-world"
            title="Explore the world"
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa illum nostrum alias minima totam magnam,"
          />
        </div>
        <div className="col-1-of-4">
          <FeatureBox
            icon="icon-basic-compass"
            title="Meet nature"
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa illum nostrum alias minima totam magnam,"
          />
        </div>
        <div className="col-1-of-4">
          <FeatureBox
            icon="icon-basic-map"
            title="Find your way"
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa illum nostrum alias minima totam magnam,"
          />
        </div>
        <div className="col-1-of-4">
          <FeatureBox
            icon="icon-basic-heart"
            title="Live a healthier life"
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa illum nostrum alias minima totam magnam,"
          />
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
