import Image from 'next/image';
import logo from 'public/img/logo-white.png';
import React from 'react';

import styles from './Header.module.css';

const Header: React.FC = () => {
  return (
    <header className={`${styles.header}`}>
      <div className={`absolute left-16 top-16`}>
        <Image
          src={logo}
          alt="Logo"
          className={`h-[3.5rem] w-auto object-contain hover:animate-[moveInRight_1s_ease-in-out_0.5]`}
        />
      </div>
      <div className={`adjust-center !top-[40%] text-center`}>
        <h1 className={`heading-primary`}>
          <span className={`heading-primary__main`}>outdoors</span>
          <span className={`heading-primary__sub`}>is where life happens</span>
        </h1>
        <a href="#section-tours" className={`btn btn__white btn__animated`}>
          Discover our tours
        </a>
      </div>
    </header>
  );
};

export default Header;
