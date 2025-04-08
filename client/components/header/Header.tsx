import Image from 'next/image';
import logo from 'public/img/logo-white.png';
import React from 'react';

import { PrimaryButton } from '../Button';
import styles from './Header.module.scss';

const Header: React.FC = () => {
  return (
    <header className={`${styles.header}`}>
      <Image fill alt="hero image" src={`/img/hero.jpg`} />
      <div className={`${styles.background}`}></div>
      <div className={`${styles.logoBox}`}>
        <Image
          src={logo}
          alt="Logo"
          fill
          className={`${styles.logo}`}
        />
      </div>
      <div className={`adjust-center !top-[40%] text-center ${styles.textBox}`}>
        <h1 className={`heading-primary`}>
          <span className={`heading-primary--main`}>outdoors</span>
          <span className={`heading-primary--sub`}>is where life happens</span>
        </h1>
        <PrimaryButton asType="link" href={'#'}>
          Discover our tours
        </PrimaryButton>
      </div>
    </header>
  );
};

export default Header;
