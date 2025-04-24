import Image from 'next/image';
import Link from 'next/link';
import logo from 'public/img/logo-white.png';
import React from 'react';

import styles from './Header.module.scss';

const Header: React.FC = () => {
  return (
    <header className={`${styles.header}`}>
      <Image fill alt="hero image" src={`/img/hero.jpg`} className={`${styles.backgroundImage}`} />
      <div className={`${styles.background}`}></div>
      <div className={`${styles.logoBox}`}>
        <Image src={logo} alt="Logo" fill className={`${styles.logo}`} />
      </div>
      <div className={`adjust-center !top-[40%] text-center ${styles.textBox}`}>
        <h1 className={`heading-primary`}>
          <span className={`heading-primary--main`}>Natours</span>
          <span className={`heading-primary--sub`}>experience nature</span>
        </h1>
        <Link href={`#section-tours`} className="btn btn--white btn--animated">
          Discover our tours
        </Link>
      </div>
    </header>
  );
};

export default Header;
