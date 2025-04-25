import Link from 'next/link';
import React, { useCallback, useRef } from 'react';

import styles from './NavigationBar.module.scss';

export type Navigation = {
  text: string;
  link: string;
};

const navigationItems: Navigation[] = [
  {
    text: 'Home',
    link: '/',
  },
  {
    text: 'About Natours',
    link: '#',
  },
  {
    text: 'Your benefits',
    link: '#',
  },
  {
    text: 'Popular tours',
    link: '#',
  },
  {
    text: 'Stories',
    link: '#',
  },
  {
    text: 'Book now',
    link: '#',
  },
  {
    text: 'Login',
    link: '/login',
  },
];

const NavigationItem: React.FC<
  Navigation & { index: number; onClick: () => void }
> = ({ text, link, index, onClick }) => {
  const num = `${index + 1}`.padStart(2, '0');
  return (
    <li className={`${styles.item}`} onClick={() => onClick()}>
      <Link href={link} className={`${styles.link}`}>
        <span>{num}</span>
        {text}
      </Link>
    </li>
  );
};

const NavigationBar: React.FC = () => {
  const naviToggleRef = useRef<HTMLLabelElement>(null);

  const handleClickNavLink = useCallback(() => {
    naviToggleRef?.current?.click();
  }, []);

  return (
    <div className={`${styles.navigation}`}>
      <input
        type="checkbox"
        className={`${styles.checkbox}`}
        id="navi-toggle"
      />
      <label
        htmlFor="navi-toggle"
        className={`${styles.button}`}
        ref={naviToggleRef}
      >
        <span className={`${styles.icon}`}>&nbsp;</span>
      </label>
      <div className={`${styles.background}`}>&nbsp;</div>
      <nav className={`${styles.nav}`}>
        <ul className={`${styles.list}`}>
          {navigationItems.map((navItem, i) => (
            <NavigationItem
              key={navItem.text}
              index={i}
              {...navItem}
              onClick={handleClickNavLink}
            />
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default NavigationBar;
