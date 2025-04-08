import React from 'react';

import styles from './NavigationBar.module.scss';

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
    <li className={`${styles.item}`}>
      <a href={link} className={`${styles.link}`}>
        <span>{num}</span>
        {text}
      </a>
    </li>
  );
};

const NavigationBar: React.FC = () => {
  return (
    <div className={`${styles.navigation}`}>
      <input type="checkbox" className={`${styles.checkbox}`} id="navi-toggle" />
      <label htmlFor="navi-toggle" className={`${styles.button}`}>
        <span className={`${styles.icon}`}>&nbsp;</span>
      </label>
      <div className={`${styles.background}`}>&nbsp;</div>
      <nav className={`${styles.nav}`}>
        <ul className={`${styles.list}`}>
          {navigationItems.map((navItem, i) => (
            <NavigationItem key={navItem.text} index={i} {...navItem} />
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default NavigationBar;
