import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import styles from './Footer.module.scss';

const links = [
  { text: 'Company', link: '#' },
  { text: 'Contact us', link: '#' },
  { text: 'Careers', link: '#' },
  { text: 'Privacy policy', link: '#' },
  { text: 'Terms', link: '#' },
];

const Footer: React.FC = () => {
  return (
    <footer className={`${styles.footer}`}>
      <div className={`${styles.footerLogoContainer}`}>
        <div className={`${styles.footerLogoBox}`}>
          <Image alt="Full logo" src="/img/logo-green-2x.png" fill className={`${styles.footerLogo}`} />
        </div>
      </div>
      <div className="row">
        <div className="col-1-of-2">
          <div className={`${styles.footerNavigation}`}>
            <ul className={`${styles.footerList}`}>
              {links.map(({ link, text }) => (
                <li className={`${styles.footerItem}`} key={text}>
                  <Link href={link} className={`${styles.footerLink}`}>
                    {text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="col-1-of-2">
          <p className={`${styles.footerCopyright}`}>
            Built by{' '}
            <Link href="https://miravicson.com" className={`${styles.footerLink}`}>
              Victor Ughonu.
            </Link>{' '}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
