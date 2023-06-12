import React from 'react';

import styles from './NavigationBar.module.css';

export type Navigation = {
  text: string;
  link: string;
};

const navigationItems: Navigation[] = [
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
];

const NavigationItem: React.FC<Navigation & { index: number }> = ({ text, link, index }) => {
  const num = `${index + 1}`.padStart(2, '0');
  return (
    <li className={`${styles.navigationItem}`}>
      <a href={link} className={`${styles.navigationLink}`}>
        <span>{num}</span>
        {text}
      </a>
    </li>
  );
};

const NavigationBar: React.FC = () => {
  return (
    <div className={`${styles.navigation}`}>
      <input type="checkbox" className={`${styles.navigationCheckbox}`} id="navi-toggle" />
      <label htmlFor="navi-toggle" className={`${styles.navigationButton}`}>
        <span className={`${styles.navigationIcon}`}>&nbsp;</span>
      </label>
      <div className={`${styles.navigationBackground}`}>&nbsp;</div>
      <nav className={`${styles.navigationNav}`}>
        <ul className={`${styles.navigationList}`}>
          {navigationItems.map((navItem, i) => (
            <NavigationItem key={navItem.text} index={i} {...navItem} />
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default NavigationBar;
