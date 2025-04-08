import classNames from 'classnames';
import Image from 'next/image';
import Image1 from 'public/img/nat-1-large.jpg';
import Image2 from 'public/img/nat-2-large.jpg';
import Image3 from 'public/img/nat-3-large.jpg';
import React from 'react';

import styles from './AboutImageComposition.module.scss';

const AboutImageComposition: React.FC = ({}) => {
  return (
    <div className={`${styles.composition}`}>
      <div className={`${classNames(styles.photo, styles.photoBox1)}`}>
        <Image src={Image1} alt="composition" className={classNames(styles.photoImage)} fill  />
      </div>
      <div className={`${classNames(styles.photo, styles.photoBox2)}`}>  
        <Image src={Image2} alt="composition" className={classNames(styles.photoImage)} fill />
      </div>
      <div className={`${classNames(styles.photo, styles.photoBox3)}`}>
        <Image src={Image3} alt="composition" className={classNames(styles.photoImage)} fill />
      </div>
    </div>
  );
};

export default AboutImageComposition;
